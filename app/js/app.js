// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();



// results filters

$(".results-filter li").not(":has(:checked)").hide();
$(".results-filter .less").hide();

$("#results-filter-topic h4, #results-filter-topic .more").click(function() {
	$("#results-filter-topic li").show(200);
	$("#results-filter-topic .more").hide(200);
	$("#results-filter-topic .less").show(200);
});
$("#results-filter-topic .less").click(function() {
	$("#results-filter-topic li").not(":has(:checked)").hide(200);
	$("#results-filter-topic .more").show(200);
	$("#results-filter-topic .less").hide(200);
});

$("#results-filter-organization h4, #results-filter-organization .more").click(function() {
	$("#results-filter-organization li").show(200);
	$("#results-filter-organization .more").hide(200);
	$("#results-filter-organization .less").show(200);
});
$("#results-filter-organization .less").click(function() {
	$("#results-filter-organization li").not(":has(:checked)").hide(200);
	$("#results-filter-organization .more").show(200);
	$("#results-filter-organization .less").hide(200);
});

$("#results-filter-coverage h4, #results-filter-coverage .more").click(function() {
	$("#results-filter-coverage li").show(200);
	$("#results-filter-coverage .more").hide(200);
	$("#results-filter-coverage .less").show(200);
});
$("#results-filter-coverage .less").click(function() {
	$("#results-filter-coverage li").not(":has(:checked)").hide(200);
	$("#results-filter-coverage .more").show(200);
	$("#results-filter-coverage .less").hide(200);
});

