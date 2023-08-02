// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
  $("#btnActiveOnly").on("click", function () {
      filterUsers(true);
  });

  $("#btnNonActive").on("click", function () {
      filterUsers(false);
  });

  function filterUsers(isActive) {
      $(".table tbody tr").hide();

      $(".table tbody tr").each(function () {
          var rowIsActive = $(this).hasClass("active-user");
          var rowIsNonActive = $(this).hasClass("non-active-user");

          if ((isActive && rowIsActive) || (!isActive && rowIsNonActive)) {
              $(this).show();
          }
      });
  }
});
