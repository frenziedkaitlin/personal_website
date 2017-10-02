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

	for (var r = 1; r < rows.length; r++){

		var type = rows[r].split(",", 1);
		console.log(type);


		if(rows[r].split(",").length > 2){
			var text = rows[r].split(",", 2)[1];
			console.log(type[0]);
			console.log(text);

			if(type[0] == "navigation menu"){
				obj[type[0]] = text;
			} else if(type[0] == "section"){
				if(!obj[type[0]]) obj[type[0]] = [];

				obj[type[0]].push(text);
			} else {}
		}
	}
	return obj;
}
