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
	console.log(data_as_csv);
	var obj = {};
	var rows = data_as_csv.split("\n");
	for (var r = 1; r < rows.length; r++){
		var columns = rows[r].split(",");
		var identifier = columns[0];
		obj[identifier] = [];
		if(columns.length > 1){
			for(var i = 1; i < columns.length; i++){
				obj[identifier].push(columns[i]);
			}
		}
	}
	console.log("returning1");
	return obj;
}
