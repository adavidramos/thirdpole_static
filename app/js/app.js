// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(".results-filter li").not(":has(:checked)").hide();
$(".results-filter .less").hide();

$("#results-filter-topic h4, #results-filter-topic a").click(function() {
	$("#results-filter-topic li").not(":has(:checked)").toggle(200);
	$("#results-filter-topic p").toggle(200);
});

$("#results-filter-organization h4, #results-filter-organization a").click(function() {
	$("#results-filter-organization li").not(":has(:checked)").toggle(200);
	$("#results-filter-organization p").toggle(200);
});

$("#results-filter-coverage h4, #results-filter-coverage a").click(function() {
	$("#results-filter-coverage li").not(":has(:checked)").toggle(200);
	$("#results-filter-coverage p").toggle(200);
});
