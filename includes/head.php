

<?php 

if (isset($_SERVER['HTTPS'])) {
	$requesMet = "https";
}else{
	$requesMet = "http";
}

?>

<base href="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].'/' ?>">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="google-site-verification" content="u2Hu5XSG3LkMhd_Zpz2yXQYspUbPr7mhqNDdt3zF3NA" />
<link rel="icon" href=" favicon.png" type="image/x-icon" />
<link href="assets/css/m-style.css" rel="stylesheet" type="text/css" />
<link href="assets/css/style.css" rel="stylesheet" type="text/css" />
<!--  -->
<!-- <link href="https://fonts.googleapis.com/css?family=Exo:300,400,500,600,700,900&display=swap" rel="stylesheet"> -->
<link href="https://fonts.googleapis.com/css?family=Poppins:400,600,800,900&amp;display=swap" rel="stylesheet">
<!-- <link href="https://fonts.googleapis.com/css?family=Quattrocento+Sans&display=swap" rel="stylesheet"> -->
<link rel="stylesheet" type="text/css" href="../stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

