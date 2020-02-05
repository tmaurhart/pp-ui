"use strict";

$(document).ready(function () {
  /*-- sidebar js --*/
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
  /*-- tooltip js --*/
  $('[data-toggle="tooltip"]').tooltip();
});