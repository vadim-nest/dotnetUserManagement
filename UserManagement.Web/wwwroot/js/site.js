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

        // Show only the rows that match the isActive condition
        $(".table tbody tr").each(function () {
            const isActiveUser =
                $(this).find("td:nth-child(5)").text().trim() === "Yes";
            if ((isActive && isActiveUser) || (!isActive && !isActiveUser)) {
                $(this).show();
            }
        });
    }
});
