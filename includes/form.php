<form class="cmxform" id="contactForm"  method="POST" action="/leads/"  enctype="multipart/form-data">
<input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
<input type="hidden" name="brand" value="webvalleyuk">   
<input type="hidden" name="tag" value="modal-auto">
<input type="hidden" name="price" value="null">
<input type="hidden" name="news" value="1">
    <div class="row">
      <div class="col-md-12">
        <label class="field-txt">Name <span>*</span></label>
          <input id="username" name="name" minlength="2" type="text" placeholder="" required />
     </div>
      <div class="col-md-6">
        <label class="field-txt">Email <span>*
        </span></label>
        <input id="cemail" type="email" name="email" placeholder="" required>
     </div>
     <div class="col-md-6">
        <label class="field-txt">Phone Number<span>*</span></label>
       <input id="phone-country" name="phone" class="phone" type="tel" placeholder="" required/>
     </div>
     
     
      
    <div class="col-md-12 pb-0">
        <label class="field-txt">Additional Comments <span>*</span></label>
        <textarea name="brief" required placeholder="" ></textarea>
     </div>
     
 
    <div class="col-md-12">
        <input class="submit" type="submit" value="Submit" />
     </div>
     </div>
  </form>