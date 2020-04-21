##更新后知乎去广告脚本有可能仅支持Surge，请悉知。


部分自用Scripts。

部分自写部分整合。

hosts部分自行添加。
```
RUL-SET,https://raw.githubusercontent.com/primovist/ScriptsForSurge/master/Rule-Sets/ADs-Block.rulesets,reject
```
京东去广告、Banner
```
http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(start|myOrderInfo|orderTrackBusiness) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/primovist/ScriptsForSurge/master/Scripts/JDAdRemove.js
```
什么值得买去广告
```
http-response ^https?:\/\/(h(aojia|omepage)|(articl|baik)e|s)-api\.smzdm\.com\/(home|sou) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/primovist/ScriptsForSurge/master/Scripts/SMZDM.js
```
B站App去广告整合（N脚本合一）
```
http-response ^https?:\/\/ap(i|p).(live.)?bilibili.com\/x(live)?\/(resource\/show\/tab|v2\/(reply\/main|view\/material|account\/(mine|teenagers\/status)|view|feed\/index|show\/popular\/index|rank)|app-room/v1/index/getInfoByRoom)\?access_key requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/primovist/ScriptsForSurge/master/Scripts/Bilibili.js
```
知乎去广告整合（N脚本合一）
```
Zhihu.js = type=http-response,requires-body=1,max-size=-1,pattern=^https:\/\/(api|lens|www)\.zhihu\.com\/(moments(\/recommend)?\?(action|feed_type)|topstory\/recommend|.*\/questions|market\/header|people|appview\/(v2|p)\/(answer\/)?\d+\?no\_image\=false(\&article\_fixed\_bottom\=1)?\&X\-SUGER\=|api\/videos\/\d+\/recommend),script-path=https://raw.githubusercontent.com/primovist/ScriptsForSurge/master/Scripts/Zhihu.js,script-update-interval=0
```
丁香园用药助手解锁订阅（非医务工作者无需此App）
```
http-response ^https?:\/\/newdrugs\.dxy\.cn\/app\/user\/(p(ay\/checkIntroOfferPeriod|ro\/stat)|init)\? requires-body=1,script-path=https://raw.githubusercontent.com/primovist/ScriptsForSurge/master/Scripts/DingXiangDrugs.js
```
Lightroom解锁订阅（越南大佬）
```
http-response ^https:\/\/photos\.adobe\.io\/v2\/accounts requires-body=1,script-path=https://raw.githubusercontent.com/primovist/ScriptsForSurge/master/Scripts/Lightroom.js
```
Photoshop解锁订阅（越南大佬）
```
http-response ^https://lcs-mobile-cops.adobe.io/mobile_profile/nul/v1 requires-body=1,script-path=https://raw.githubusercontent.com/primovist/ScriptsForSurge/master/Scripts/Photoshop.js
```
淘宝历史价格，二合一修正（yichahucha）
```
http-response ^https?://(amdc|trade-acs)\.m\.taobao\.com/(amdc/mobileDispatch|gw/mtop\.taobao\.detail\.getdetail) requires-body=1,script-path=https://raw.githubusercontent.com/primovist/ScriptsForSurge/master/Scripts/TaobaoPrice.js
```
