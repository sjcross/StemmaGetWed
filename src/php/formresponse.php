<html>
<body>
<?php
// Only process the form if it has been filled in
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Getting the responses
	$name = cleanInput($_POST["name"]);
	$attending = cleanInput($_POST["attending"]);
	$noms = cleanInput($_POST["noms"]);

	// Creating an email string
	$msg = "Name: " . $name . "<br>";
	$msg = $msg . "Attending: " . $attending . "<br>";
	$msg = $msg . "Dietary requirements: " . $noms . "<br>";

	// Send email
//	mail("stemma2020@gmail.com","New response",$msg);

  // Display confirmation and redirect notice
  displayRedirect($attending);

	// Display new page
  header("Refresh:5; url=../html/desktop/main.html");
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

function displayRedirect($attending) {
if ($attending == "Yes") {
echo "<div style=\"display: flex; justify-content: center\">
        <a href=\"../html/desktop/main.html\">
          <img src=\"../img/svg/Text_AttendingYes.svg\" class=\"svg\" style=\"width: 100%\">
        </a>
     </div>";
} else if ($attending == "No") {
  echo "<div style=\"display: flex; justify-content: center\">
          <a href=\"../html/desktop/main.html\">
            <img src=\"../img/svg/Text_AttendingNo.svg\" class=\"svg\" style=\"width: 100%\">
          </a>
        </div>";
} else {
  echo "<div style=\"display: flex; justify-content: center\">
          <a href=\"../html/desktop/main.html\">
            <img src=\"../img/svg/Text_AttendingYes.svg\" class=\"svg\" style=\"width: 100%\">
          </a>
       </div>";
}
}
?>
