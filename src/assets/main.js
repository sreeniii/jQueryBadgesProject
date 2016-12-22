$(function() {

  // https://www.codeschool.com/users/2840658.json

  $.ajax({
    url: 'https://www.codeschool.com/users/2840658.json',
    dataType: 'jsonp',
    success: function(response) {
      populateWithCourses(response.courses.completed);
    }
  });

  function populateWithCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {

      $div = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($div);

      $('<img />', {
        src: course.badge
      }).appendTo($div);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($div);

    });

  }

});
