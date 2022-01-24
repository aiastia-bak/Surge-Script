var body = $response.body;
var url = $request.url;

const path1 = '/api/1481166/';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.extra["plan"] = Premium;
	body = JSON.stringify(obj);  
 }

$done({body});
