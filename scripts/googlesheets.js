var url ='https://spreadsheets.google.com/feeds/list/PUB_ID/values?alt=json-in-script&callback=x';
var id = '2PACX-1vSNtn3oG0TMMy4Manxu-y6tMzoDGp2JlNBTIzNmjnoadrl_VjaFlr_fw2DifD88W5EMo085lxVBdq7-'


$(
	url = url.replace('PUB_ID', id);
	$.get(url, function(data){

		console.log(data);
	})
)
