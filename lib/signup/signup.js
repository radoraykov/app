/**
 * Module dependencies.
 */

var page = require('page');
var Form = require('./form-view');
var empty = require('empty');
var request = require('superagent');

page('/signup', function(ctx, next) {
  // Retrieve container
  var container = document.querySelector('section.app-content');
  // Build form view with options
  var form = Form({});

  // Empty container and render form
  empty(container).appendChild(form.render());

  form.on('submit', function(data) {
    request
    .post('/signup')
    .send(data)
    .end(function(err, res) {
      if (err || res.body.error) {
        return form.errors([err || res.body.error]);
      };
      window.location.replace('/');
    });
  });
});