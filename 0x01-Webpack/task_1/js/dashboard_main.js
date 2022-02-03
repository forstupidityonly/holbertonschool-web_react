import $ from "jquery";
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button type="button">Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

$('button').on('click', _.debounce(updateCounter, 150));

let counter = 0;
function updateCounter() {
  counter += 1;
  $('#count').html(`${count} clicks on the button`);
};
