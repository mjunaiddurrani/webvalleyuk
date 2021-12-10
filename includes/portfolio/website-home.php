<div class="row">

<?php for($i=1;$i<=18;$i++):?>

    <div class="col-lg-3 col-md-4 col-xs-6 screen">
        <a href="images/home/portfolio/website/<?=$i?>.jpg" class="fancybox" rel="ligthbox">
        <img  src="images/home/portfolio/website/<?=$i?>.jpg" class="image-responsive"  alt="">
        
        </a>
    </div>
<?php endfor;?>

<?php for($i=1;$i<=(isset($pageIsLanding)?2:6);$i++):?>

    <div class="col-lg-3 col-md-4 col-xs-6 screen">
        <a href="images/home/portfolio/ecom/<?=$i?>.jpg" class="fancybox" rel="ligthbox">
        <img  src="images/home/portfolio/ecom/<?=$i?>.jpg" class="image-responsive"  alt="">
        
        </a>
    </div>
<?php endfor;?>

    

    
</div>