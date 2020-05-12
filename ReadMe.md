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
可根据需要自己调整内容，完整的页面代码如下：（iPad版稍等更新）
iPhone：
```
[
      {
        "items": [
          {
            "id": 396,
            "title": "离线缓存",
            "icon": "http://i0.hdslb.com/bfs/archive/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png",
            "uri": "bilibili://user_center/download"
          },
          {
            "id": 397,
            "title": "历史记录",
            "icon": "http://i0.hdslb.com/bfs/archive/8385323c6acde52e9cd52514ae13c8b9481c1a16.png",
            "uri": "bilibili://user_center/history"
          },
          {
            "id": 398,
            "title": "我的收藏",
            "icon": "http://i0.hdslb.com/bfs/archive/d79b19d983067a1b91614e830a7100c05204a821.png",
            "uri": "bilibili://user_center/favourite"
          },
          {
            "id": 399,
            "title": "稍后再看",
            "icon": "http://i0.hdslb.com/bfs/archive/63bb768caa02a68cb566a838f6f2415f0d1d02d6.png",
            "need_login": 1,
            "uri": "bilibili://user_center/watch_later"
          }
        ],
        "style": 1,
        "button": {
        }
      },
      {
        "title": "创作中心",
        "items": [
          {
            "need_login": 1,
            "display": 1,
            "id": 171,
            "title": "创作首页",
            "uri": "bilibili://uper/homevc",
            "icon": "http://i0.hdslb.com/bfs/archive/d3aad2d07538d2d43805f1fa14a412d7a45cc861.png"
          },
          {
            "need_login": 1,
            "display": 1,
            "id": 172,
            "title": "稿件管理",
            "uri": "bilibili://uper/user_center/archive_list",
            "icon": "http://i0.hdslb.com/bfs/archive/97acb2d8dec09b296a38f7f7093d651947d13b91.png"
          },
          {
            "need_login": 1,
            "display": 1,
            "id": 298,
            "title": "创作日历",
            "uri": "https://member.bilibili.com/studio/gabriel/creator-calendar/today?navhide=1",
            "icon": "http://i0.hdslb.com/bfs/archive/ccb3a0f38ed0ea72a773741c5d82b11ceb8ce3f0.png"
          },
          {
            "need_login": 1,
            "display": 1,
            "id": 174,
            "title": "热门活动",
            "uri": "https://www.bilibili.com/blackboard/x/activity-tougao-h5/all",
            "icon": "http://i0.hdslb.com/bfs/archive/7f4fa86d99bf3814bf10f8ee5d6c8c9db6e931c8.png"
          }
        ],
        "style": 1,
        "button": {
          "icon": "http://i0.hdslb.com/bfs/archive/205f47675eaaca7912111e0e9b1ac94cb985901f.png",
          "style": 1,
          "url": "bilibili://uper/user_center/archive_selection",
          "text": "发布"
        }
      },
      {
        "title": "推荐服务",
        "items": [
          {
            "id": 400,
            "title": "我的课程",
            "icon": "http://i0.hdslb.com/bfs/archive/aa3a13c287e4d54a62b75917dd9970a3cde472e1.png",
            "uri": "https://m.bilibili.com/cheese/mine?navhide=1"
          },
          {
            "id": 402,
            "title": "个性装扮",
            "icon": "http://i0.hdslb.com/bfs/archive/0bcad10661b50f583969b5a188c12e5f0731628c.png",
            "uri": "https://www.bilibili.com/h5/mall/home?navhide=1&from=myservice"
          },
          {
            "id": 406,
            "title": "直播中心",
            "icon": "http://i0.hdslb.com/bfs/archive/1db5791746a0112890b77a0236baf263d71ecb27.png",
            "uri": "bilibili://user_center/live_center"
          },
          {
            "id": 421,
            "title": "创作学院",
            "icon": "http://i0.hdslb.com/bfs/archive/12327dba191bc36e9e65a815aa56aa9bb9225c7e.png",
            "need_login": 1,
            "uri": "https://member.bilibili.com/college?navhide=1&from=my"
          }
        ],
        "style": 1,
        "button": {
        }
      },
      {
        "title": "更多服务",
        "items": [
          {
            "id": 407,
            "title": "联系客服",
            "icon": "http://i0.hdslb.com/bfs/archive/7ca840cf1d887a45ee1ef441ab57845bf26ef5fa.png",
            "uri": "bilibili://user_center/feedback"
          },
          {
            "id": 408,
            "title": "课堂模式",
            "icon": "http://i0.hdslb.com/bfs/archive/bb3b48455b9364440785fade6223e0c774891b31.png",
            "uri": "bilibili://user_center/lessonsmode"
          },
          {
            "id": 409,
            "title": "青少年模式",
            "icon": "http://i0.hdslb.com/bfs/archive/68acfd37a735411ad56b59b3253acc33f94f7046.png",
            "uri": "bilibili://user_center/teenagersmode"
          },
          {
            "id": 410,
            "title": "设置",
            "icon": "http://i0.hdslb.com/bfs/archive/e932404f2ee62e075a772920019e9fbdb4b5656a.png",
            "uri": "bilibili://user_center/setting"
          }
        ],
        "style": 2,
        "button": {
        }
      }
    ]
```
知乎去广告整合（N脚本合一）
使用模块
丁香园系列App
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
