<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Step 1: Get the user record by email
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Step 2: Verify the hashed password
        if (password_verify($password, $row['password'])) {
            echo "✅ Login successful! Welcome, " . htmlspecialchars($row['name']) . ".";
        } else {
            echo "❌ Invalid email or password!";
        }
    } else {
        echo "❌ Invalid email or password!";
    }

    $conn->close();
}
?>
