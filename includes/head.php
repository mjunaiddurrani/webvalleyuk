

<?php 

if (isset($_SERVER['HTTPS'])) {
	$requesMet = "https";
}else{
	$requesMet = "http";
}


// define dashboard url
$_SESSION['dashboard'] = 'http://127.0.0.1:8000';

?>

<base href="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].'/' ?>">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="google-site-verification" content="u2Hu5XSG3LkMhd_Zpz2yXQYspUbPr7mhqNDdt3zF3NA" />
<link rel="icon" href="favicon.png" type="image/x-icon" />
<link href="assets/css/m-style.css" rel="stylesheet" type="text/css" />
<link href="assets/css/style.css" rel="stylesheet" type="text/css" />




<style>
   #modalForDiscount p{
		color:#fff;
	}
	#modalForDiscount input,
	#modalForDiscount textarea{
		margin-top:10px;
	}
	.mainH1{
		font-size:25px;
		font-weight:bold;
	}

</style>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TMM78JN');</script>
<!-- End Google Tag Manager -->


  <!-- seo  -->
  <meta property="og:locale" content="en_GB" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Website Valley: Developing the Websites. Apps. Brands." />
  <meta property="og:description" content="Website Valley is a professional web design, app development, and branding agency in the UK. Get our services on your budget, timeline, and specifications." />
  <meta property="og:url" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>" />
  <meta property="og:site_name" content="websitevalley" />
  <meta property="article:publisher" content="https://www.facebook.com/websitevalley" />
  <meta property="og:image" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST']; ?>/assets/images/logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@websitevalleyuk" />
  <meta name="twitter:site" content="@websitevalleyuk" />
  <meta name="twitter:image:src" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST']; ?>/assets/images/logo.png">
  <link rel="canonical" href="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>">
  <link rel="alternate" href="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].''.$_SERVER['REQUEST_URI'] ?>" hreflang="en-GB" />

  
