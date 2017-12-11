/**
 * git do not control webim.config.js
 * everyone should copy webim.config.js.demo to webim.config.js
 * and have their own configs.
 * In this way , others won't be influenced by this config while git pull.
 *
 */
var WebIM = {};
WebIM.config = {
    /*
     * XMPP server
     */
    xmppURL: 'im-api.easemob.com',            // xmpp Server地址，对于在console.easemob.com创建的appKey，固定为该值
    
    apiURL: 'http://a1.easemob.com',          // rest Server地址，对于在console.easemob.com创建的appkey，固定为该值
    
    appkey: 'easemob-demo#chatdemoui',        // App key
    /*
     * Whether to use wss
     * @parameter {Boolean} true or false
     */
    https: true,
    /*
     * isMultiLoginSessions
     * true: A visitor can sign in to multiple webpages and receive messages at all the webpages.
     * false: A visitor can sign in to only one webpage and receive messages at the webpage.
     */
    isMultiLoginSessions: false,
    /*
     * Set to auto sign-in
     */
    isAutoLogin: true,
    /**
     * Whether to use window.doQuery()
     * @parameter {Boolean} true or false
     */
    isWindowSDK: false,
    /**
     * isSandBox=true:  xmppURL: 'im-api.sandbox.easemob.com',  apiURL: '//a1.sdb.easemob.com',
     * isSandBox=false: xmppURL: 'im-api.easemob.com',          apiURL: '//a1.easemob.com',
     * @parameter {Boolean} true or false
     */
    isSandBox: false,
    /**
     * Whether to console.log in strophe.log()
     * @parameter {Boolean} true or false
     */
    isDebug: false,
    /**
     * will auto connect the xmpp server autoReconnectNumMax times in background when client is offline.
     * won't auto connect if autoReconnectNumMax=0.
     */
    autoReconnectNumMax: 2,
    /**
     * the interval secons between each atuo reconnectting.
     * works only if autoReconnectMaxNum >= 2.
     */
    autoReconnectInterval: 2,
    /**
     * webrtc supports WebKit and https only
     */
    isWebRTC: /WebKit/.test(navigator.userAgent) && /^https\:$/.test(window.location.protocol),
    /**
     * while http access,use ip directly,instead of ServerName,avoiding DNS problem.
     */
    isHttpDNS: false
};

WebIM.Emoji = {
    path: '../../../images/faces/'  /*表情包路径*/
    , map: {
        '[):]': 'ee_1.png',
        '[:D]': 'ee_2.png',
        '[;)]': 'ee_3.png',
        '[:-o]': 'ee_4.png',
        '[:p]': 'ee_5.png'
    }
};
