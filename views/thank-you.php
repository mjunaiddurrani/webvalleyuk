<!doctype html>
<html lang="en-GB">
<head>
  <?php include_once('includes/styles.php') ?>
  <?php include_once('includes/head.php') ?>
  <!-- <link rel="stylesheet" href="css/icofont.min.css"> -->
    <title>website valley Thank you page</title>


    <style>
      .thankyou_sec i.fab {
          font-family: FontAwesome !important;
      }
    </style>
</head>
  <body>
    <?php include_once('includes/header.php') ?>
    <section class="section1 thankyou_sec" style="background: #2A4B67;min-height:580px;">
      <div class="container">
        <div class="row text-center text-sm-left my-auto">
          <div class="col-lg-9">
            <h1 class="text-white mb-4 font-medium" style="position: relative;top: 200px;"><?php if(isset($_REQUEST['thanksMsg'])){ echo $_REQUEST['thanksMsg'];} ?></h1>
            <h1 class="text-white mb-4 font-medium" style="position: relative;top: 200px;"><?php if(isset($_REQUEST['successMsg'])){ echo $_REQUEST['successMsg'];} ?></h1>
            <div class="gg" style="margin-top: 240px !important;">
            <a href="javascript:;" onclick="history.back();" class="btn-main modalOpen">Go Back</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <?php include_once('includes/footer.php');?>

    
    
  </body>
</html>