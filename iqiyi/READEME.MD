## iqiyi非VIP视频地址解析
### 打包方式
```shell
webpack src/index.js -o dist/iqiyi.min.js
```
### 调用方法
```typescript
/**
 * 构造已签名的"获取爱奇艺视频地址及视频信息"的网址
 * @param {Number} tvid 爱奇艺视频的id 可以从爱奇艺视频网址的源代码中获得：view-source:https://www.iqiyi.com/v_19rqzi1f7s.html 的tvId为1279870500
 * @param {String} callback 回调函数，默认为Q，回调函数必须为全局函数
 * @param {String} vid tvid的扩展，暂可不输入
 */
function iqiyi(tvid: number, callback: string, vid: string):string;
```
### 示例
见[demo.html](demo.html)

### 注意
本解析只解析非VIP视频的地址信息，以jsonp形式返回，不会产生跨域问题，视频地址可在jsonp中找到  
f4v视频可用bilibili的[https://github.com/bilibili/flv.js](flv.js github)，
cdn地址(https://www.bootcdn.cn/flv.js/)[https://www.bootcdn.cn/flv.js/]播放  
m3u8视频可用(hls.js github)[https://github.com/video-dev/hls.js]，
cdn地址(https://www.bootcdn.cn/hls.js/)[https://www.bootcdn.cn/hls.js/]播放  
f4v是分段的，使用flv.js的(segments)[https://github.com/bilibili/flv.js/blob/master/docs/api.md#MediaSegment]字段配置可实现连续播放。  
但是seek第二段及以后视频时会出现一些问题，seek会定位到每段的开头，
这是因为每段的timestamps都不是从0开始，需要对flv.js的源码进行一些修改，在flvjs读取flv视频的头信息时将timestamp置零即可
