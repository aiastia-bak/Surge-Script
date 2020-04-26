##更新后知乎去广告脚本有可能仅支持Surge，请悉知。


部分自用Scripts。

部分自写部分整合。

hosts部分自行添加。

京东去广告、Banner
```
http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(start|myOrderInfo|orderTrackBusiness) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/primovist/ScriptsForSurge/master/Scripts/JDAdRemove.js
```
什么值得买去广告
使用模块
B站App去广告整合（N脚本合一）
使用模块
知乎去广告整合（N脚本合一）
使用模块
丁香园系列App&用药助手
使用模块
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
