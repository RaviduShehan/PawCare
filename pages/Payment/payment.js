
$(() => {
  //Stripe
  var handler = StripeCheckout.configure({
    key: "pk_test_cp21BcECf4kMMUbSlRlZlsMo",
    token: function(token) {
      if (token.id) {
        $("#thankyouPayment").html("Thank you");
      }
    }
  });

  
});
