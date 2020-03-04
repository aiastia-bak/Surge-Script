let body = JSON.parse($response.body);
delete body.data.banner.big_banner;
delete body.data.banner.tonglan_banner;
body.data.rows.forEach((element, index) => {
  if (element.model_type == "ads") {
    body.data.rows.splice(index, 1);
  }
});
$done({
  body: JSON.stringify(body)
})
