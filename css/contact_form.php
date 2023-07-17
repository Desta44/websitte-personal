<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "julpaisaldesta@gmail.com";
  $subject = "Pesan dari Form Kontak";
  $body = "Nama: " . $name . "\n\n";
  $body .= "Email: " . $email . "\n\n";
  $body .= "Pesan: " . $message;

  $headers = "From: " . $email;

  if (mail($to, $subject, $body, $headers)) {
    echo "Email berhasil dikirim!";
  } else {
    echo "Terjadi kesalahan dalam mengirim email.";
  }
}
?>
