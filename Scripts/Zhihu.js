const path1 = "/moments?";
const path2 = "/topstory/recommend";
const path3 = "/questions/";
const path4 = "/market/header";

const url = $request.url;
let body = $response.body;
body=JSON.parse(body)

if (url.indexOf(path1) != -1){
body['data'].forEach((element, index)=>{
     if(element.hasOwnProperty('adjson')){      
       body['data'].splice(index,1)  
    }
})
}

if (url.indexOf(path2) != -1){
body['data'].forEach((element, index)=> {
    if(element['card_type']=="slot_event_card"||element.hasOwnProperty('ad')){      
       body['data'].splice(index,1)  
    }
})
}

if (url.indexOf(path3) != -1){
delete body['ad_info']
}

if (url.indexOf(path4) != -1){
body['sub_webs'].splice(0,1)
body['sub_webs'].splice(1,1)
}

$done({ body })
