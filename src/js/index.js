import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js'
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
// import 'jquery-validation/dist/jquery.validate'
// import "jquery-validation/dist/localization/methods_es_CL.min.js";
import '../sass/style.scss'
import "@fortawesome/fontawesome-free/js/all.min";




console.log("hello Webpack");

$(document).ready(function () {
  $("a.scroll").on("click", function (event) {
    var hash = this.hash;

    $("html, body").animate(
      { scrollTop: $(hash).offset().top - 100 },
      800,
    );
  });


//   $(function () {
//     $("#commentForm").validate();
//   });
});