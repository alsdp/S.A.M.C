<?php
// --- CONFIGURATION DEBUG ---
ini_set('display_errors', 0);
error_reporting(E_ALL);

// --- HEADERS CORS ---
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// --- CONNEXION BDD ---
$host = "localhost"; 
$user = "root"; 
$pass = ""; 
$dbname = "samc_db";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) { 
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error])); 
}

$method = $_SERVER['REQUEST_METHOD'];

// Gestion du pre-flight CORS
if ($method === 'OPTIONS') { 
    http_response_code(200); 
    exit(); 
}

// --- FONCTION UPLOAD IMAGE ---
function uploadImage($file) {
    $targetDir = "../uploads/"; 
    if (!file_exists($targetDir)) { mkdir($targetDir, 0777, true); }
    
    $fileName = uniqid() . "_" . basename($file["name"]);
    $targetFilePath = $targetDir . $fileName;
    $fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

    $allowTypes = array('jpg', 'png', 'jpeg', 'gif', 'webp');
    
    if (in_array($fileType, $allowTypes)) {
        if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
            return "http://localhost/uploads/" . $fileName;
        }
    }
    return null;
}

// --- FONCTION COULEUR ---
function getColor($deptArray) {
    if (empty($deptArray)) return "gray";
    $main = $deptArray[0];
    if ($main === "CHIRURGIE") return "cyan";
    if ($main === "PSYCHOLOGIE") return "purple";
    if ($main === "MATERNITÉ") return "pink";
    if ($main === "A.M.S") return "slate";
    if ($main === "S.A.R") return "orange";
    return "gray";
}

// ==========================================
//                 GET
// ==========================================
if ($method === 'GET') {
    header("Content-Type: application/json");

    // --- CAS 1 : Récupérer les RDV d'un médecin spécifique ---
    // C'est cette partie qui manquait pour que ton bouton fonctionne !
    if (isset($_GET['doctor_id'])) {
        $id = intval($_GET['doctor_id']);
        
        // On récupère les RDV, triés du plus récent au plus vieux
        $sql = "SELECT * FROM appointments WHERE doctor_id = $id ORDER BY date DESC, time ASC";
        $result = $conn->query($sql);
        
        $rdvs = [];
        while($row = $result->fetch_assoc()) {
            $rdvs[] = $row;
        }
        echo json_encode($rdvs);
        exit; // IMPORTANT : On s'arrête ici, on ne renvoie pas la liste des médecins
    }

    // --- CAS 2 : Liste de tous les médecins (Affichage par défaut) ---
    $sql = "SELECT d.*, 
            (SELECT COUNT(*) FROM appointments a WHERE a.doctor_id = d.id AND a.date >= CURDATE()) as rdv_count 
            FROM doctors d 
            ORDER BY d.id DESC";
            
    $result = $conn->query($sql);
    $doctors = [];
    
    while($row = $result->fetch_assoc()) {
        $decodedDept = json_decode($row['dept']);
        $row['dept'] = is_array($decodedDept) ? $decodedDept : [$row['dept']];
        $doctors[] = $row;
    }
    echo json_encode($doctors);
}

// ==========================================
//                 POST
// ==========================================
if ($method === 'POST') {
    $name = $_POST['name'];
    $job = $_POST['job'];
    $location = $_POST['location'];
    $deptsStr = $_POST['depts']; 
    $deptsArray = json_decode($deptsStr);
    $color = getColor($deptsArray);
    
    // Gestion Image
    $avatarUrl = null;
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $avatarUrl = uploadImage($_FILES['image']);
    }

    // --- MODIFICATION ---
    if (isset($_POST['id'])) {
        $id = $_POST['id'];
        $sql = "UPDATE doctors SET name=?, job=?, dept=?, color=?, location=?";
        $types = "sssss";
        $params = [$name, $job, $deptsStr, $color, $location];

        if ($avatarUrl) {
            $sql .= ", avatar=?";
            $types .= "s";
            $params[] = $avatarUrl;
        }
        
        $sql .= " WHERE id=?";
        $types .= "i";
        $params[] = $id;

        $stmt = $conn->prepare($sql);
        $stmt->bind_param($types, ...$params);

        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Mis à jour"]);
        } else {
            echo json_encode(["success" => false, "error" => $conn->error]);
        }

    } 
    // --- CRÉATION ---
    else {
        $docDataObj = ["id" => 0, "name" => $name, "job" => $job, "dept" => $deptsArray[0] ?? "", "color" => $color, "location" => $location];
        $docDataJson = json_encode($docDataObj, JSON_UNESCAPED_UNICODE);

        $stmt = $conn->prepare("INSERT INTO doctors (name, job, dept, color, location, avatar, doc_data) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssss", $name, $job, $deptsStr, $color, $location, $avatarUrl, $docDataJson);
        
        if ($stmt->execute()) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "error" => $conn->error]);
        }
    }
}

// ==========================================
//                 DELETE
// ==========================================
if ($method === 'DELETE') {
    $input = json_decode(file_get_contents('php://input'), true);
    $id = $input['id'];
    
    $conn->query("DELETE FROM appointments WHERE doctor_id = $id");
    
    if ($conn->query("DELETE FROM doctors WHERE id = $id")) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => $conn->error]);
    }
}

$conn->close();
?>