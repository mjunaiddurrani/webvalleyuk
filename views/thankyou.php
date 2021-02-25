<!doctype html>
<html lang="en-GB">
<head>
  <?php include_once('include/styles.php') ?>
    <link rel="stylesheet" href="css/contact-us.css">
    <title>Design Founder Thank you page</title>

</head>
  <body>
    <?php include_once('include/header.php') ?>
    <section class="section1" style="background: #7202d4;">
      <div class="container">
        <div class="row text-center text-sm-left">
          <div class="col-lg-9">
            <h1 class="text-white mb-4 font-medium"><?php if(isset($_SESSION['thanksMsg'])){ echo $_SESSION['thanksMsg'];} ?></h1>
          </div>
        </div>
      </div>
    </section>

    
    <?php include_once('include/footer.php');?>
    
  </body>
</html>