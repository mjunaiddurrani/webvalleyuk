<!doctype html>
<html lang="en-GB">
<head>

<title>Not Found </title>
<meta name="description" content="Oops! Page Not Found">




<?php include_once('includes/head.php');?><!-- seo  -->
<meta property="og:locale" content="en_GB" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Not Found" />
  <meta property="og:description" content="Oops! Page Not Found" />
  <meta property="og:url" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>" />
  <meta property="og:site_name" content="websitevalley" />
  <meta property="article:publisher" content="https://www.facebook.com/websitevalley" />
  <meta property="og:image" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST']; ?>/assets/images/logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@websitevalleyuk" />
  <meta name="twitter:site" content="@websitevalleyuk" />
  <meta name="twitter:image:src" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST']; ?>/assets/images/logo.png">






</head>

<body class="lndng hdar-clr innerpages">
    




<!-- Mobile Navigation Button End-->

<?php include_once('includes/header.php');?>





	<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2 style="position: relative;left: -22px;">Oops! Page Not Found</h2>
			<p style="position: relative;left: -160px;text-align: center;">Sorry, but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
			<a href="index.html" class="btn-main" style="position: relative;left: 58px; background:linear-gradient(to right, #ff8500 0%, #ff7900 100%);">Back to home</a>
		</div>
	</div>

  <?php include_once('includes/footer.php');?>
  <?php include_once('includes/scripts.php');?>


</body>

</html>