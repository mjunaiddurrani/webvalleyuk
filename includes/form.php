<form class="cmxform" id="contactForm"  method="POST" action="/leads/"  enctype="multipart/form-data">
    <div class="row">
      <div class="col-md-12">
        <label class="field-txt">Name <span>*</span></label>
          <input id="username" name="Name" minlength="2" type="text" placeholder="" required />
     </div>
      <div class="col-md-6">
        <label class="field-txt">Email <span>*</span></label>
        <input id="cemail" type="email" name="Email" placeholder="" required>
     </div>
     <div class="col-md-6">
        <label class="field-txt">Phone Number<span>*</span></label>
       <input id="phone-country" name="Number" type="number" placeholder="" required/>
     </div>
     
     
      
    <div class="col-md-12 pb-0">
        <label class="field-txt">Additional Comments <span>*</span></label>
        <textarea name="Comment" placeholder="" /></textarea>
     </div>
     
 
    <div class="col-md-12">
        <input class="submit" type="submit" value="Submit" />
        <input class="" type="hidden" name="ctry" value="" />
          <input type="hidden" name="pc" value="">
          <input type="hidden" name="hiddencapcha" value="">
     </div>
     </div>
  </form>