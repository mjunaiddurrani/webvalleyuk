<!doctype html>
<html lang="en-GB">
<head>
  <?php include_once('includes/styles.php') ?>
  <?php include_once('includes/head.php') ?>
    <title>website valley Thank you page</title>

</head>
  <body>
    <?php include_once('includes/header.php') ?>
    <section class="section1" style="background: #2A4B67;min-height:425px;">
      <div class="container">
        <div class="row text-center text-sm-left my-auto">
          <div class="col-lg-9">
            <h1 class="text-white mb-4 font-medium" style="position: relative;top: 200px;"><?php if(isset($_SESSION['thanksMsg'])){ echo $_SESSION['thanksMsg'];} ?></h1>
            <h1 class="text-white mb-4 font-medium" style="position: relative;top: 200px;"><?php if(isset($_REQUEST['successMsg'])){ echo $_REQUEST['successMsg'];} ?></h1>
          </div>
        </div>
      </div>
    </section>

    
    <?php include_once('includes/footer.php');?>
    <?php include_once('includes/scripts.php');?>
    
  </body>
</html>