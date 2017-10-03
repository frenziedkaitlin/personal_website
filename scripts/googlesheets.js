var url ='https://docs.google.com/spreadsheets/d/e/PUB_ID/pub?gid=0&single=true&output=csv';
var id = 'YOUR_ID_HERE';

$(function() {
	url = url.replace('PUB_ID', id);
	$.get(url)
	.then(csv_as_object)
	.then(function(data) {
		console.log(data);
		$('#topmenu').html(data['navigation menu']);
		$('.block').each(function(index){
			$(this).html(data['section'][index])
		});
	});

});

var csv_as_object = function(data_as_csv){
	var obj = {};
	var rows = data_as_csv.split("\n");

	for (var r = 1; r < rows.length; r++){
		let type = rows[r].split(",", 1)[0];
		let text = rows[r].replace(type+",", "");
// 		text = text.slice(1, text.length-2);

		if(type == "navigation menu"){
			if(!obj[type]) obj[type] = "";
			obj[type] = text;
		} else if(type == "section"){
			if(!obj[type]) obj[type] = [];

			obj[type].push(text);
		} else {}
	}
	return obj;
}
