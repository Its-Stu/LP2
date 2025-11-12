<?php
include 'db.php'; // include your database connection file

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data safely
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $gender = $_POST['gender'];
    $password = $_POST['password'];

    // (Optional but recommended) Encrypt the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Check if email already exists
    $sql_check = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql_check);

    if ($result->num_rows > 0) {
        echo "⚠️ Email already registered! Please <a href='login.html'>login here</a>.";
    } else {
        // Insert new record
        $sql = "INSERT INTO users (name, email, mobile, gender, password)
                VALUES ('$name', '$email', '$mobile', '$gender', '$hashed_password')";

        if ($conn->query($sql) === TRUE) {
            echo "🎉 Registration successful! <a href='login.html'> Click here to Login</a>";
        } else {
            echo "❌ Error: " . $conn->error;
        }
    }

    $conn->close();
} else {
    echo "Form not submitted correctly.";
}
?>
