let cmd5x = require('./vf').cmd5x;
let md5   = require('./md5');
/**
 * 构造已签名的"获取爱奇艺视频地址及视频信息"的网址
 * @param {Number} tvid 爱奇艺视频的id 可以从爱奇艺视频网址的源代码中获得：view-source:https://www.iqiyi.com/v_19rqzi1f7s.html 的tvId为1279870500
 * @param {String} callback 回调函数，默认为Q，回调函数必须为全局函数
 * @param {String} vid tvid的扩展，暂可不输入
 */
function iqiyi(tvid, callback = 'Q', vid = 'c183093e2c60e7a34eb6758c3f997a1e') {
    if(typeof tvid === 'undefined'){
        throw 'tvid is not number!';
    }
    var vd = 300,
        ppt = 0,
        ost = 0,
        tm = (new Date).getTime(),
        A = 0;
    var n = md5;
    var e = {
        tvid: tvid,
        bid: vd,
        vid: vid,
        src: '01010031010000000000',
        vt: 0,
        rs: 1,
        uid: '',
        ori: "pcw",
        ps: 0,
        k_uid: "ee6c369893db8e9bde2474c120485570",
        pt: 0,
        d: 0,
        s: "",
        lid: "",
        cf: "",
        ct: "",
        authKey: n(n("") + tm + tvid),
        k_tag: 1,
        ost: ost,
        ppt: ppt,
        dfp: "a0ca62adcc7fbe4b0e924361c39da7ef55d5886ecc7a13d0f93f9dcad71b9958d3",
        locale: "zh_cn",
        prio: JSON.stringify({
            ff: "f4v",
            code: 2
        }),
        pck: "",
        k_err_retries: A,
        up: "",
        qd_v: "2",
        tm: tm,
        k_ft1: 143486267424772,
        k_ft4: 1581060,
        k_ft5:1,
        bop: JSON.stringify({
            version: "10.0",
            dfp: "a0ca62adcc7fbe4b0e924361c39da7ef55d5886ecc7a13d0f93f9dcad71b9958d3"
        }),
        callback: callback,
        ut: 0
    };
    var dataUrl = "/jp/dash?";
    dataUrl += join(e, '&');
    dataUrl = "http://cache.video.iqiyi.com" + dataUrl + '&vf=' + cmd5x(dataUrl);
    return dataUrl;
}
//添加到url参数
function join(e, c) {
    var arr = [];
    for (var key in e) {
        if (e.hasOwnProperty(key)) {
            var element = encodeURIComponent(e[key]);
            arr.push(key + '=' + element);
        }
    }
    return arr.join(c);
}
module.exports = iqiyi;
