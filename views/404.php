<!DOCTYPE html>
<html lang="en-GB">
<head>
<title>404 Page</title>
    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/head.php');?><!-- seo  -->
<meta property="og:locale" content="en_GB" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="404 Page" />
  <meta property="og:description" content="This url not found on server" />
  <meta property="og:url" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>" />
  <meta property="og:site_name" content="websitevalley" />
  <meta property="article:publisher" content="https://www.facebook.com/websitevalley" />
  <meta property="og:image" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST']; ?>/assets/images/logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@websitevalleyuk" />
  <meta name="twitter:site" content="@websitevalleyuk" />
  <meta name="twitter:image:src" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST']; ?>/assets/images/logo.png">



<style>
    
body {
  background-color: #95c2de;
}

.mainbox {
  background-color: #95c2de;
  margin: auto;
  height: 600px;
  width: 600px;
  position: relative;
}

  .err {
    color: #ffffff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 20%;
    top: 8%;
  }

.far {
  position: absolute;
  font-size: 8.5rem;
  left: 42%;
  top: 15%;
  color: #ffffff;
}

 .err2 {
    color: #ffffff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 68%;
    top: 8%;
  }

.msg {
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.6rem;
    position:absolute;
    left: 16%;
    top: 45%;
    width: 75%;
  }

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}
</style>
</head>
<body>
    
<?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/header.php');?>

<!-- purple x moss 2020 -->

<head>
  <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/4b9ba14b0f.js" crossorigin="anonymous"></script>
</head>
<body>
  <div class="mainbox mt-5">
    <div class="err">4</div>
    <i class="far fa-question-circle fa-spin"></i>
    <div class="err2">4</div>
    <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="/">home</a> and try from there.</p></div>
      </div>

 <?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/footer.php');?>     
</body>
</html>