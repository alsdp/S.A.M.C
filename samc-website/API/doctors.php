<?php
// --- CONFIGURATION ---
ini_set('display_errors', 0); 
error_reporting(E_ALL);

// ⚠️ METS TON LIEN WEBHOOK ICI
$discord_webhook_url = "TON_WEBHOOK_DISCORD_ICI"; 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$host = "localhost"; $user = "root"; $pass = ""; $dbname = "samc_db";
$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) { die(json_encode(["error" => "Connection failed"])); }

$method = $_SERVER['REQUEST_METHOD'];

// --- FONCTION DISCORD ---
function sendDiscordNotification($url, $docName, $patient, $phone, $date, $time, $reason) {
    $niceDate = date("d/m/Y", strtotime($date));
    $data = [
        "username" => "Secrétariat S.A.M.C",
        "avatar_url" => "https://i.imgur.com/4M34hi2.png",
        "embeds" => [[
            "title" => "📅 Nouveau Rendez-vous Confirmé",
            "description" => "Un nouveau dossier a été enregistré.",
            "color" => hexdec("00f0ff"),
            "fields" => [
                ["name" => "👤 Patient", "value" => "**$patient**", "inline" => true],
                ["name" => "📱 Téléphone", "value" => "`$phone`", "inline" => true],
                ["name" => "👨‍⚕️ Médecin", "value" => "$docName", "inline" => true],
                ["name" => "⏰ Date", "value" => "$niceDate à **$time**", "inline" => false],
                ["name" => "📝 Motif", "value" => "```fix\n$reason\n```", "inline" => false]
            ]
        ]]
    ];
    $json_data = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_exec($ch);
    curl_close($ch);
}

// --- GET (Liste Médecins pour Rdv.js) ---
if ($method === 'GET') {
    $doctors = [];
    $sql = "SELECT * FROM doctors ORDER BY id DESC";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()) {
        $docId = $row['id'];
        $decodedDept = json_decode($row['dept']);
        $row['dept'] = is_array($decodedDept) ? $decodedDept : [$row['dept']];
        $bookedSlots = [];
        $sqlBooked = "SELECT date, time FROM appointments WHERE doctor_id = $docId AND date >= CURDATE()";
        $resBooked = $conn->query($sqlBooked);
        while($bookRow = $resBooked->fetch_assoc()) {
            $date = $bookRow['date'];
            if (!isset($bookedSlots[$date])) { $bookedSlots[$date] = []; }
            $bookedSlots[$date][] = $bookRow['time'];
        }
        $row['booked'] = $bookedSlots;
        $doctors[] = $row;
    }
    echo json_encode($doctors);
}

// --- POST (Prendre RDV seulement) ---
if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Si c'est une prise de RDV (doctorId est présent)
    if (isset($input['doctorId'])) {
        $docId = $input['doctorId']; $date = $input['day']; $time = $input['time'];
        $name = $input['patientName']; $phone = $input['patientPhone']; $reason = $input['reason'];

        $checkSql = "SELECT id FROM appointments WHERE doctor_id = ? AND date = ? AND time = ?";
        $stmtCheck = $conn->prepare($checkSql);
        $stmtCheck->bind_param("iss", $docId, $date, $time);
        $stmtCheck->execute();
        
        if ($stmtCheck->get_result()->num_rows > 0) {
            echo json_encode(["success" => false, "message" => "Créneau déjà réservé !"]);
        } else {
            $sql = "INSERT INTO appointments (doctor_id, date, time, patient_name, patient_phone, reason) VALUES (?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("isssss", $docId, $date, $time, $name, $phone, $reason);
            
            if ($stmt->execute()) {
                $docQuery = $conn->query("SELECT name FROM doctors WHERE id = $docId");
                $docData = $docQuery->fetch_assoc();
                $docName = $docData['name'];
                if ($discord_webhook_url !== "TON_WEBHOOK_DISCORD_ICI") {
                    sendDiscordNotification($discord_webhook_url, $docName, $name, $phone, $date, $time, $reason);
                }
                echo json_encode(["success" => true]);
            } else {
                echo json_encode(["success" => false, "error" => $conn->error]);
            }
        }
    }
}
$conn->close();
?>