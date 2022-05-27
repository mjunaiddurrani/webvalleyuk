var domainName = 'https://www.websitevalley.co.uk/';
var stripe = Stripe("pk_live_51L0rlaHOuu1ctvQkuahA5xOQCPEpdULILKW9i7I9dIutnDgo0EtBMBBgdpjCJ5pqz5uXZ1pzhfr2tjkpdzMfpgjJ00yYDc1IIv");
var elements = stripe.elements();
var style = { base: { fontSize: "16px", color: "#000" } };
var card = elements.create("card", { style: style });
card.mount("#card-element");
var form = document.getElementById("payment-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
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

    form.submit();
}