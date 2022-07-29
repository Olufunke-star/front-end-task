$(document).ready(function () {
  $(".Logout").click(function () {
    $(".popup_box").css({
      opacity: "1",
      "pointer-events": "auto",
    });
  });
  $(".btn1").click(function () {
    $(".popup_box").css({
      opacity: "0",
      "pointer-events": "none",
    });
  });
  $(".btn2").click(function () {
    $(".popup_box").css({
      opacity: "0",
      "pointer-events": "none",
    });
    alert("Your Account Logged Out Sucessfully.");
    $(".Logout").text("Logged Out");
  });
});
