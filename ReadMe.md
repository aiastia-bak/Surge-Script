自用Scripts。
部分自写部分整合。
hosts部分自行添加。

B站App去广告整合（N脚本合一）
http-response ^https?:\/\/ap(i|p).bilibili.com\/x\/(resource\/show\/tab|v2\/(reply\/main|view\/material|account\/mine|view|feed\/index|show\/popular\/index|rank))\?access_key requires-body=1,max-size=-1,script-path=Bilibili.js
知乎去广告整合（N脚本合一）
http-response ^https?:\/\/api\.zhihu\.com\/(moments\?(action|feed_type)|topstory\/recommend|.*\/questions|market\/header|people) requires-body=1,max-size=-1,script-path=Zhihu.js
丁香园用药助手解锁订阅（非医务工作者无需此App）
http-response ^https?:\/\/newdrugs\.dxy\.cn\/app\/user\/(p(ay\/checkIntroOfferPeriod|ro\/stat)|init)\? requires-body=1,script-path=DingxiangDrugs.js
Lightroom解锁订阅（越南佬）
http-response ^https:\/\/photos\.adobe\.io\/v2\/accounts requires-body=1,script-path=Lightroom.js
Photoshop解锁订阅
http-response ^https://lcs-mobile-cops.adobe.io/mobile_profile/nul/v1 requires-body=1,script-path=Photoshop.js