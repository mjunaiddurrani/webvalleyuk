

<?php 
include_once("ppc_or_seo.php");
include_once("token.php");
if (isset($_SERVER['HTTPS'])) {
	$requesMet = "https";
}else{
	$requesMet = "http";
}

if(!isset($_SESSION['url'])){
  $_SESSION['url'] = "$_SERVER[REQUEST_URI]";
 }

//  echo $_SESSION['url'];
//  die;
$pageUri =  $_SERVER['REQUEST_URI'];
$csrf = bin2hex(random_bytes(35));
$_SESSION['csrf'] = $csrf;

$metaData = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'].'/json/metaData.json'),true);
$pacakges = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'].'/json/packages.json'));
$curruntPage = "https://127.0.0.1:9000/updateBrand.php?token=4ef81179fbfb0ac711af4949fe4b85f1&backUrl=http://dev.dashboard.ourbase.camp/brands".$pageUri;

if(array_key_exists($curruntPage,$metaData)){
  $metaTitle = $metaData[$curruntPage]['meta_data']['metaTitle'];
  $metaDescription = $metaData[$curruntPage]['meta_data']['metaDescription'];

}else{
  $metaTitle = "";
  $metaDescription ="";
}

$headFileContent  = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'].'/json/headFile.json'))->headContent;



// define dashboard url
$_SESSION['dashboard'] = 'http://127.0.0.1:8000';

?>

<base href="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].'/' ?>">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="google-site-verification" content="gy6PSMlqKV0kfPcqYFhdqUXgfpeXsasVfzn_EToaZK0" />
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
  .jun {
    visibility: hidden !important;
    position: absolute;
    max-width: 1px !important;
}
</style>






  <link rel="canonical" href="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>">
  <link rel="alternate" href="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].''.$_SERVER['REQUEST_URI'] ?>" hreflang="en-GB" />

  
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-194982789-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-194982789-1');
</script>

<?php if(false):?>
  
  <?php if($metaTitle!=""):?>
    <title><?= $metaTitle; ?></title>
  <?php endif;?>
  <?php if($metaDescription!=""):?>
    <meta name="description" content="<?= $metaDescription;?>">
  <?php endif;?>
  
  <?=$headFileContent;?>

<?php endif;?>


<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MC353WZ');</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MC353WZ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
