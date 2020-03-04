let body = JSON.parse($response.body);
if (body.data.hasOwnProperty('banner')) {
  delete body.data.banner.big_banner;
  delete body.data.banner.tonglan_banner;
  delete body.data.banner.calendar_banner;
}
if (body.data.hasOwnProperty('big_banner')) {
  delete body.data.big_banner;
}
if (body.data.hasOwnProperty('notice')) {
  delete body.data.notice;
}
body.data.rows.forEach((element, index) => {
  if (element.article_channel_id == -1) {
    body.data.rows.splice(index, 1);
  }
});
$done({
  body: JSON.stringify(body)
})
