[Issue Group](http://t.me/scriptgroup)

# Surge
Remove weibo ads
```
[Script]
http-response ^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|\!/photos/pic_recommend_status) requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js
http-response ^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
[MITM]
hostname = api.weibo.cn, mapi.weibo.com, *.uve.weibo.com
```

Display netflix ratings（IMDb、douaban）
```
[Script]
http-request ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
http-response ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
[MITM]
hostname = ios.prod.ftl.netflix.com
```

Display jd historical price
```
[Script]
http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig) requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js
[MITM]
hostname = api.m.jd.com
```

Display taobao historical price
```
[Rule]
# 注意规则优先级（建议放在第一条）
# 使用规则屏蔽 IP，有可能误伤其他功能或者应用，可以自己抓包缩小 IP 范围
IP-CIDR, 203.119.144.0/23, REJECT, no-resolve
IP-CIDR, 203.119.175.0/24, REJECT, no-resolve
IP-CIDR, 106.11.162.0/24, REJECT, no-resolve
IP-CIDR, 47.102.83.0/24, REJECT, no-resolve
[Script]
# 使用脚本屏蔽 IP（第一条脚本），不生效或失效的卸载 tb 重装，规则和脚本（第一条脚本）二选一
http-response ^https?://amdc\.m\.taobao\.com/amdc/mobileDispatch requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
http-response ^https://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
[MITM]
hostname = trade-acs.m.taobao.com,amdc.m.taobao.com
```

Daily work check-in reminder
```
[Script]
cron "0 9,18 * * 1-5" script-path=https://raw.githubusercontent.com/yichahucha/surge/master/check_in.js
```

# Quan-X

Remove weibo ads
```
[rewrite_local]
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|\!/photos/pic_recommend_status) url script-response-body wb_ad.js
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body wb_launch.js
[mitm]
hostname = api.weibo.cn, mapi.weibo.com, *.uve.weibo.com
```

Display netflix ratings（IMDb、douaban）
```
[rewrite_local]
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header nf_rating.js
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body nf_rating.js
[mitm]
hostname = ios.prod.ftl.netflix.com
```

Display jd historical price
```
[rewrite_local]
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig) url script-response-body jd_price.js
[mitm]
hostname = api.m.jd.com
```

Display taobao historical price
```
[filter_local]
# 注意规则优先级（建议放在第一条）
# 使用规则屏蔽 IP，有可能误伤其他功能或者应用，可以自己抓包缩小 IP 范围
ip-cidr, 203.119.144.0/23, reject
ip-cidr, 203.119.175.0/24, reject
ip-cidr, 106.11.162.0/24, reject
ip-cidr, 47.102.83.0/24, reject
[rewrite_local]
# 使用脚本屏蔽 IP（第一条脚本），不生效或失效的卸载 tb 重装，规则和脚本（第一条脚本）二选一
^https?://amdc\.m\.taobao\.com/amdc/mobileDispatch url script-response-body tb_price.js
^https://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body tb_price.js
[mitm]
hostname = trade-acs.m.taobao.com,amdc.m.taobao.com
```

Daily work check-in reminder
```
[task_local]
0 9,18 * * 1-5 check_in.js
```
