<html>
<body>
<?php
require_once 'Mail.php';

// Only process the form if it has been filled in
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Getting the responses
	$name = cleanInput($_POST["name"]);
	$attending = cleanInput($_POST["attending"]);
	$noms = cleanInput($_POST["noms"]);
	$comments = cleanInput($_POST["comments"]);
	$format = $_POST["format"];

	// Creating an email string
	$body = "Name: " . $name . "\r\n";
	$body = $body . "Attending: " . $attending . "\r\n";
	$body = $body . "Dietary requirements: " . $noms . "\r\n";
	$body = $body . "Comments: " . $comments . "\r\n";

	// Send email
	$to = 'stemma2020@gmail.com';
	$from = 'info@stemmagetwed.uk';
	$subject = 'New response';
	$headers = array ('From' => $from,'To' => $to,'Subject' => $subject);

    $host = 'cpanel.freehosting.com';
    $username = 'info@stemmagetwed.uk';
    $password = 'cabbage#12E4';
    $smtp = Mail::factory('smtp',array ('host' => $host,'auth' => true,
        'username' => $username,'password' => $password));

    $mail = $smtp->send($to, $headers, $body);

    if (PEAR::isError($mail)) {
        echo("<p>" . $mail->getMessage() . "</p>");
    } else {
        // Display confirmation and redirect notice
        displayRedirect($attending, $format);
    }

	// Display new page
    header("Refresh:5; url=../html/" . $format . "/main.html");
 	exit();

}
?>
</body>
</html>

<?php
// Removing unwanted characters from the responses for security
function cleanInput($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);

	return $data;

}

function displayRedirect($attending, $format) {
if ($attending == "Yes") {
echo "<div style=\"display: flex; justify-content: center\">
        <a href=\"../html/" .$format. "/main.html\">
          <img src=\"../img/svg/Text_AttendingYes.svg\" class=\"svg\" style=\"width: 100%\">
        </a>
     </div>";
} else if ($attending == "No") {
  echo "<div style=\"display: flex; justify-content: center\">
          <a href=\"../html/" .$format. "/main.html\">
            <img src=\"../img/svg/Text_AttendingNo.svg\" class=\"svg\" style=\"width: 100%\">
          </a>
        </div>";
} else {
  echo "<div style=\"display: flex; justify-content: center\">
          <a href=\"../html/" .$format. "/main.html\">
            <img src=\"../img/svg/Text_AttendingYes.svg\" class=\"svg\" style=\"width: 100%\">
          </a>
       </div>";
}
}

function displayError() {
echo "<div style=\"display: flex; justify-content: center\">
        <a href=\"../html/desktop/main.html\">
          <img src=\"../img/svg/Text_Error.svg\" class=\"svg\" style=\"width: 100%\">
        </a>
     </div>";
}
?>
