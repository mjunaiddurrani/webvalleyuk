
var stripe = Stripe("pk_live_51L4AQwEi006uq5iJsgYmNsI6k40Azjo8Opy93EbinaRLBnkJDfWzWsfVo7bZG5FNCuB1notPDAEfx9RqOJTt3ghv00QKDWb8tx");
var elements = stripe.elements();
var style = { base: { fontSize: "16px", color: "#000" } };
var card = elements.create("card", { style: style });
card.mount("#card-element");
var form = document.getElementById("payment-form");
var token = GetParameterValues('TOKEN');
var check_if_submit = false;



form.addEventListener("submit", function(event) {
    event.preventDefault();

    $.post("https://my-ourbase.camp/api/payment-intent",{token:token},function(data,status){
        console.log(data,status)
        stripe.confirmCardPayment(data.intent, {
            payment_method: {
              card: card,
              billing_details: {
                name: $("input[name='fname']").val(),
                email: $("input[name='email']").val()
              }
            },
            setup_future_usage: 'off_session'
          }).then(function(result) {
              console.log('results here',result);
            // return false;
            if (result.error) {
              // Show error to your customer (e.g., insufficient funds)
              $("#card-errors").removeClass("d-none");
              $('#card-errors').text(result.error.message);
              
            } else {
                
              // The payment has been processed!
              if (result.paymentIntent.status === 'succeeded') {
                // $("#card-success").removeClass("d-none");
                // $('#card-success').text("Payment successfully done using SCA.");
                // setTimeout(function(){ window.location.href = "{{url('/success')}}"; }, 2000);
                if(!check_if_submit){
                    check_if_submit = true;
                    form.submit();
                }
                return true;
              }
            //   return false;
            }
          });
          stripe.createToken(card).then(function(result) {
              if (result.error) {
                  $.get("error_log.php", { code: result.error.code, message: result.error.message }, function(data, status) {
                      if (status == "success") {
                          var errorElement = document.getElementById("card-errors");
                          errorElement.textContent = result.error.message;
                          // swal({
                          //     position: 'top-end',
                          //     icon: 'warning',
                          //     title: result.error.message
                          // });
                          Swal.fire({
                              position: 'top-end',
                              text: result.error.message,
                              type: "warning",
                          });
                          $('.submitPay').prop('disabled', false);
                      }
                  });
          
              } else {
                  stripeTokenHandler(result.token);
              }
          });

    })



});

function stripeTokenHandler(token) {
    var form = document.getElementById("payment-form");

    var hiddenToken = document.createElement("input");
    hiddenToken.setAttribute("type", "hidden");
    hiddenToken.setAttribute("name", "stripeToken");
    hiddenToken.setAttribute("value", token.id);
    form.appendChild(hiddenToken);

    var hiddenLast = document.createElement("input");
    hiddenLast.setAttribute("type", "hidden");
    hiddenLast.setAttribute("name", "last4");
    hiddenLast.setAttribute("value", token.card.last4);
    form.appendChild(hiddenLast);

    var hiddenMonth = document.createElement("input");
    hiddenMonth.setAttribute("type", "hidden");
    hiddenMonth.setAttribute("name", "exp_month");
    hiddenMonth.setAttribute("value", token.card.exp_month);
    form.appendChild(hiddenMonth);

    var hiddenYear = document.createElement("input");
    hiddenYear.setAttribute("type", "hidden");
    hiddenYear.setAttribute("name", "exp_year");
    hiddenYear.setAttribute("value", token.card.exp_year);
    form.appendChild(hiddenYear);

    if(!check_if_submit){
        check_if_submit = true;
        form.submit();
    }
}



function GetParameterValues(param) {  
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');  
    for (var i = 0; i < url.length; i++) {  
        var urlparam = url[i].split('=');  
        if (urlparam[0] == param) {  
            return urlparam[1];  
        }  
    }  
}  