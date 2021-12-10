<!-- Modal -->
<div class="modal fade" id="modalForVideo" tabindex="-1" role="dialog" aria-labelledby="modalForVideoLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close myClose" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <video class="myVideo" src="" controls style="width:100%;"></video>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="row">
                        
<?php for($i=1;$i<=17;$i++):?>
    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
        <a href="javascript:void(0);" data-href="images/home/portfolio/video/<?=$i?>.mp4" class="fancyboxVideo" rel="ligthbox">
        <img  src="images/home/portfolio/video/<?=$i?>.webp" class="zoom img-fluid "  alt="">
        
        </a>
    </div>
<?php endfor;?>

</div>