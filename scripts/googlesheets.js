var url ='https://docs.google.com/spreadsheets/d/e/PUB_ID/pub?gid=0&single=true&output=csv';
var id = '2PACX-1vSNtn3oG0TMMy4Manxu-y6tMzoDGp2JlNBTIzNmjnoadrl_VjaFlr_fw2DifD88W5EMo085lxVBdq7-';

$(function() {
	url = url.replace('PUB_ID', id);
	$.get(url)
	.then(csv_as_object)
	.then(function(data) {
		console.log(data);
	});
});

var csv_as_object = function(data_as_csv){
	var obj = {};
	var rows = data_as_csv.split("\n");

	console.log(rows)
	for (var r = 1; r < rows.length; r++){
		console.log(rows[r])
		let type = rows[r].split(",", 1)[0];
		let text = rows[r].replace(type+",", "");
		console.log(text);

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
