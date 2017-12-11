// import React from 'react';
// import { Icon, message } from 'antd';
// import '../style/css/chat.css';
// import MessageData from '../web-im/chat';

let Icon = antd.Icon;
let message = antd.message;
let conn;

class MessageList extends React.Component {
  render () {
    return (
      <div className="message-box">
        {
          this.props.messageList.length 
          ? 
          this.props.messageList.map((item, index) => {
            if (item.type === 'left') {
              return (
                <div key={index} className="message-group message-left">
                  <figure className="pull-left head-img">
                    <Icon type="user" />
                  </figure>
        
                  <div className="pull-left message-info">
                    <p className="user-info">{item.name} {item.date}</p>
                    <div className="message-value">
                      <img className="message-icon" src="message_icon.png" alt=""/>
                      <pre>{item.content}</pre>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
              )
            } else {
              return (
                <div key={index} className="message-group message-right">
                  <figure className="pull-right head-img">
                    <Icon type="user" />
                  </figure>
        
                  <div className="pull-right message-info">
                    <p className="user-info">{item.name} {item.date}</p>
                    <div className="message-value">
                      <img className="message-icon" src="message_icon.png" alt=""/>
                      <pre>{item.content}</pre>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
              )
            }
          })
          :
          ''
        }
      </div>
    )
  }
}

class MessageData extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            messageList: []
        }
    }
    
    componentDidMount () {
        let _this = this;
        setTimeout(() => {
            conn = new WebIM.connection({ // 创建连接
                isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
                https: typeof WebIM.config.https === 'boolean' ? WebIM.config.https : location.protocol === 'https:',
                url: WebIM.config.xmppURL,
                heartBeatWait: WebIM.config.heartBeatWait,
                autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
                autoReconnectInterval: WebIM.config.autoReconnectInterval,
                apiUrl: WebIM.config.apiURL,
                isAutoLogin: true
            });
            
            conn.listen({
                onOpened: function ( message ) {          //连接成功回调
                    // 如果isAutoLogin设置为false，那么必须手动设置上线，否则无法收消息
                    // 手动上线指的是调用conn.setPresence(); 如果conn初始化时已将isAutoLogin设置为true
                    // 则无需调用conn.setPresence();  
                    // conn.subscribe({
                    //     to: 'zhanlukefu', // Demo里面接收方没有展现出来这个message，在status字段里面
                    //     message: '加个好友呗!'   
                    // });           
                },  
                onClosed: function ( message ) {},         //连接关闭回调
                onTextMessage: function ( message ) {
                    var date = new Date();
                    let year = date.getFullYear();
                    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
                    let getDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                    let h = date.getHours();
                    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();;
                    let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();;
                    var obj = {};
                    obj.name = "臣妾";
                    obj.content = message.data;
                    obj.type = "left";
                    obj.date = `${ year }/${ month }/${ getDate } ${ h }:${ m }:${ s }`;

                    var messageList = _this.state.messageList;
                    messageList.push(obj);

                    _this.setState({
                        messageList: messageList
                    })

                    var scrH = document.getElementById('message_group').scrollHeight;
                    document.getElementById('message_group').scrollTop = scrH;
                },    //收到文本消息
                onEmojiMessage: function ( message ) {},   //收到表情消息
                onPictureMessage: function ( message ) {}, //收到图片消息
                onCmdMessage: function ( message ) {},     //收到命令消息
                onAudioMessage: function ( message ) {},   //收到音频消息
                onLocationMessage: function ( message ) {},//收到位置消息
                onFileMessage: function ( message ) {},    //收到文件消息
                onVideoMessage: function (message) {
                    var node = document.getElementById('privateVideo');
                    var option = {
                        url: message.url,
                        headers: {
                            'Accept': 'audio/mp4'
                        },
                        onFileDownloadComplete: function (response) {
                            var objectURL = WebIM.utils.parseDownloadResponse.call(conn, response);
                            node.src = objectURL;
                        },
                        onFileDownloadError: function () {
                            console.log('File down load error.')
                        }
                    };
                    WebIM.utils.download.call(conn, option);
                },   //收到视频消息
                onPresence: function ( message ) {
                    var handlePresence = function ( e ) {
                        //对方收到请求加为好友
                        if (e.type === 'subscribe') {
                            conn.subscribed({
                                to: '朕',
                                message : '[resp:true]'
                            });
                        }
                    }

                    handlePresence(message);
                },       //处理“广播”或“发布-订阅”消息，如联系人订阅请求、处理群组、聊天室被踢解散等消息
                onRoster: function ( message ) {},         //处理好友申请
                onInviteMessage: function ( message ) {},  //处理群组邀请
                onOnline: function () {},                  //本机网络连接成功
                onOffline: function () {},                 //本机网络掉线
                onError: function ( message ) {},          //失败回调
                onBlacklistUpdate: function (list) {       //黑名单变动
                    // 查询黑名单，将好友拉黑，将好友从黑名单移除都会回调这个函数，list则是黑名单现有的所有好友信息
                    console.log(list);
                },
                onReceivedMessage: function(message){},    //收到消息送达服务器回执
                onDeliveredMessage: function(message){},   //收到消息送达客户端回执
                onReadMessage: function(message){},        //收到消息已读回执
                onCreateGroup: function(message){},        //创建群组成功回执（需调用createGroupNew）
                onMutedMessage: function(message){}        //如果用户在A群组被禁言，在A群发消息会走这个回调并且消息不会传递给群其它成员
            });

            var userName = returnCitySN["cip"].replace(/\./g, ''); // 通过IP注册账号;

            var options = { 
                username: userName,
                password: "123456",
                nickname: userName,
                appKey: WebIM.config.appkey,
                success: function () { 
                    var userInfo = { 
                        apiUrl: WebIM.config.apiURL,
                        user: userName,
                        pwd: "123456",
                        appKey: WebIM.config.appkey
                    };

                    conn.open(userInfo); // 登录;
                },  
                error: function (error) { 
                    var userInfo = { 
                        apiUrl: WebIM.config.apiURL,
                        user: userName,
                        pwd: "123456",
                        appKey: WebIM.config.appkey
                    };

                    conn.open(userInfo); // 登录;
                }, 
                apiUrl: WebIM.config.apiURL
            }; 

            WebIM.utils.registerUser(options); // 注册;
        }, 1000)
    }

    // 单聊发送文本消息
    sendPrivateText (content) {
        var _this = this;
        var id = conn.getUniqueId();                 // 生成本地消息id
        var msg = new WebIM.message('txt', id);      // 创建文本消息
        msg.set({
            msg: content,                  // 消息内容
            to: 'zhanlukefu',                          // 接收消息对象（用户id）
            roomType: false,
            success: function (id, serverMsgId) {
                var date = new Date();
                let year = date.getFullYear();
                let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
                let getDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                let h = date.getHours();
                let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();;
                let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();;
                var obj = {};
                obj.name = "朕";
                obj.content = content;
                obj.type = "right";
                obj.date = `${ year }/${ month }/${ getDate } ${ h }:${ m }:${ s }`;

                var messageList = _this.state.messageList;
                messageList.push(obj);

                _this.setState({
                    messageList: messageList
                })
                
                var scrH = document.getElementById('message_group').scrollHeight;
                document.getElementById('message_group').scrollTop = scrH;
            },
            fail: function(e){
                message.error('发送失败');
            }
        });
        msg.body.chatType = 'singleChat';
        conn.send(msg.body);
    }

    render () {
        return (
            <MessageList messageList={ this.state.messageList } />
        )
    }
}

class Chat extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.enterMessage()
  }

  fatherTonea () {
    if (this.refs.context.value.trim() === '') {
      message.warning('发送内容不能为空');
    } else {
      this.refs.webIm.sendPrivateText(this.refs.context.value);
      this.refs.context.value = '';
    }
  }

  enterMessage () {
    var _this = this;

    document.getElementById('message_context').addEventListener('keydown', (event) => {
      if (event.keyCode == '13') {
        event.preventDefault();
        _this.fatherTonea()
      }
    })
  }

  render () {
    return (
      <section className="chat-box">
        <h2 className="chat-name">站撸科技有限公司</h2>
        <div className="chat-content">
          <div className="chat-content-group" id="message_group">
            <MessageData ref="webIm" />
          </div>
          <div className="chat-enter-group">
            <div className="functional-area">
              <Icon type="picture" />
            </div>

            <div className="enter-box">
              <div className="pull-left textarea-box">
                <textarea name="" id="message_context" cols="30" rows="10" ref="context"></textarea>
              </div> 
              <a href="javascript: " className="pull-left" onClick={ this.fatherTonea.bind(this) }>发 送</a>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <Chat />,
  document.getElementById('content')
);