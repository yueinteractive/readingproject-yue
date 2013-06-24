// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

if (typeof ritrd == 'undefined') { var ritrd = {}; }
if (typeof ritrd.templates == 'undefined') { ritrd.templates = {}; }


ritrd.templates.flipCard = function(opt_data, opt_ignored) {
  return '<div class="flip-container"><div class="flipper"><div class="front"><h4>' + soy.$$escapeHtml(opt_data.frontHeading) + '</h4></div><div class="back"><h4>' + soy.$$escapeHtml(opt_data.backHeading) + '</h4><p>' + soy.$$escapeHtml(opt_data.backBody) + '</p></div></div></div>';
};
