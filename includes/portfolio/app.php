<div class="row">
                    
<?php for($i=1;$i<=16;$i++):?>
    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
        <a href="images/home/portfolio/app/app-design-<?=$i?>.png" class="fancybox" rel="ligthbox">
            <img  src="images/home/portfolio/app/app-design-<?=$i?>.png" class="zoom img-fluid "  alt="">

        </a>
    </div>
<?php endfor;?>
<?php for($i=1;$i<=21;$i++):
    if($i==18){
        continue;
    }
    ?>
    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
        <a href="images/home/portfolio/mobileApp/app_design_<?=$i?>.jpg" class="fancybox" rel="ligthbox">
            <img  src="images/home/portfolio/mobileApp/app_design_<?=$i?>.jpg" class="zoom img-fluid "  alt="">

        </a>
    </div>

<?php endfor;?>

    
</div>