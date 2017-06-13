(function() {
  $('nav a').bind('click', function() {
    var showSection;
    showSection = $(this).attr("href");
    console.log(showSection);
    $('section').hide();
    return $(showSection).show();
  });

}).call(this);

