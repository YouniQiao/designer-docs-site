# @ohos.distributedsched.abilityConnectionManager

abilityConnectionManager模块提供了应用协同接口管理能力。设备组网成功（需登录同账号、双端打开蓝牙）后，系统应用和三方应用可以跨设备拉起同应用的一个
[UIAbility](../../apis-ability-kit/arkts-apis/arkts-app-ability-uiability.md)，拉起并连接成功后可实现跨设备数据传输（文本信息）。

**起始版本：** 18

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## 汇总

### 函数

| 名称 | 说明 |
| --- | --- |
| [acceptConnect](arkts-distributedservice-acceptconnect-f.md#acceptconnect-1) | 设备B上的应用，在创建协同会话成功并获得会话ID后，调用acceptConnect()方法接受连接。使用Promise异步回调。 |
| [connect](arkts-distributedservice-connect-f.md#connect-1) | 创建协同会话成功并获得会话ID后，设备A上可进行UIAbility的连接。使用Promise异步回调。 |
| [createAbilityConnectionSession](arkts-distributedservice-createabilityconnectionsession-f.md#createabilityconnectionsession-1) | 创建应用间的协同会话。 |
| [destroyAbilityConnectionSession](arkts-distributedservice-destroyabilityconnectionsession-f.md#destroyabilityconnectionsession-1) | 销毁应用间的协同会话。 |
| [disconnect](arkts-distributedservice-disconnect-f.md#disconnect-1) | 当协同业务执行完毕后，协同双端的任意一台设备，应断开UIAbility的连接，结束协同状态。 |
| [getPeerInfoById](arkts-distributedservice-getpeerinfobyid-f.md#getpeerinfobyid-1) | 获取指定会话中对端应用信息。 |
| [off](arkts-distributedservice-off-f.md#off-1) | 取消connect事件的回调监听。 |
| [off](arkts-distributedservice-off-f.md#off-2) | 取消disconnect事件的回调监听。 |
| [off](arkts-distributedservice-off-f.md#off-3) | 取消receiveMessage事件的回调监听。 |
| [off](arkts-distributedservice-off-f.md#off-4) | 取消receiveData事件的回调监听。 |
| [on](arkts-distributedservice-on-f.md#on-1) | 注册connect事件的回调监听。使用callback异步回调。 |
| [on](arkts-distributedservice-on-f.md#on-2) | 注册disconnect事件的回调监听。 |
| [on](arkts-distributedservice-on-f.md#on-3) | 注册receiveMessage事件的回调监听。 |
| [on](arkts-distributedservice-on-f.md#on-4) | 注册receiveData事件的回调监听。 |
| [reject](arkts-distributedservice-reject-f.md#reject-1) | 在跨端应用协同过程中，在拒绝对端的连接请求后，向对端发送拒绝原因。 |
| [sendData](arkts-distributedservice-senddata-f.md#senddata-1) | 应用连接成功后，设备A或设备B可向对端设备发送[ArrayBuffer](../../../../arkts-utils/arraybuffer-object.md)字节流。 |
| [sendMessage](arkts-distributedservice-sendmessage-f.md#sendmessage-1) | 应用连接成功后，设备A或设备B可向对端设备发送文本信息。 |

<!--Del-->
### 函数（系统接口）

| 名称 | 说明 |
| --- | --- |
| [createStream](arkts-distributedservice-createstream-f-sys.md#createstream-1) | Creating a Stream. |
| [destroyStream](arkts-distributedservice-destroystream-f-sys.md#destroystream-1) | Destroy the Stream. |
| [getSurfaceId](arkts-distributedservice-getsurfaceid-f-sys.md#getsurfaceid-1) | Obtains the transmission surface. |
| [off](arkts-distributedservice-off-f-sys.md#off-5) | Unregisters receiveImage event. |
| [off](arkts-distributedservice-off-f-sys.md#off-6) | Unregisters collaborateEvent event. |
| [off](arkts-distributedservice-off-f-sys.md#off-7) | Unregisters collaborateEvent event. |
| [on](arkts-distributedservice-on-f-sys.md#on-5) | Registers receiveImage event. |
| [on](arkts-distributedservice-on-f-sys.md#on-6) | Registers collaborateEvent event. |
| [on](arkts-distributedservice-on-f-sys.md#on-7) | Registers collaborateEvent event. |
| [sendImage](arkts-distributedservice-sendimage-f-sys.md#sendimage-1) | Send image data. |
| [setSurfaceId](arkts-distributedservice-setsurfaceid-f-sys.md#setsurfaceid-1) | Sets the transmission surface. |
| [startStream](arkts-distributedservice-startstream-f-sys.md#startstream-1) | Start Streaming |
| [stopStream](arkts-distributedservice-stopstream-f-sys.md#stopstream-1) | Stop Streaming |
| [updateSurfaceParam](arkts-distributedservice-updatesurfaceparam-f-sys.md#updatesurfaceparam-1) | Update surface parameters. |
<!--DelEnd-->

### 接口

| 名称 | 说明 |
| --- | --- |
| [CollaborateEventInfo](arkts-distributedservice-collaborateeventinfo-i.md) | 协同事件信息。 |
| [ConnectOptions](arkts-distributedservice-connectoptions-i.md) | 应用连接时所需的连接选项。 |
| [ConnectResult](arkts-distributedservice-connectresult-i.md) | 连接的结果。 |
| [EventCallbackInfo](arkts-distributedservice-eventcallbackinfo-i.md) | 回调方法的接收信息。 |
| [PeerInfo](arkts-distributedservice-peerinfo-i.md) | 应用协同信息。 |

<!--Del-->
### 接口（系统接口）

| 名称 | 说明 |
| --- | --- |
| [ConnectOptions](arkts-distributedservice-connectoptions-i-sys.md) | 应用连接时所需的连接选项。 |
| [EventCallbackInfo](arkts-distributedservice-eventcallbackinfo-i-sys.md) | 回调方法的接收信息。 |
| [StreamParam](arkts-distributedservice-streamparam-i-sys.md) | Streaming configuration parameters. |
| [SurfaceParam](arkts-distributedservice-surfaceparam-i-sys.md) | Surface configuration parameters. |
<!--DelEnd-->

### 枚举

| 名称 | 说明 |
| --- | --- |
| [CollaborateEventType](arkts-distributedservice-collaborateeventtype-e.md) | 协同事件类型的枚举。 |
| [CollaborationKeys](arkts-distributedservice-collaborationkeys-e.md) | 应用协作键值的枚举。 |
| [CollaborationValues](arkts-distributedservice-collaborationvalues-e.md) | 应用协作键值的枚举。 |
| [ConnectErrorCode](arkts-distributedservice-connecterrorcode-e.md) | 连接的错误码。 |
| [DisconnectReason](arkts-distributedservice-disconnectreason-e.md) | 当前断连原因的枚举。 |
| [StartOptionParams](arkts-distributedservice-startoptionparams-e.md) | 启动选项参数的枚举。 |

<!--Del-->
### 枚举（系统接口）

| 名称 | 说明 |
| --- | --- |
| [FlipOptions](arkts-distributedservice-flipoptions-e-sys.md) | Flip option. |
| [StartOptionParams](arkts-distributedservice-startoptionparams-e-sys.md) | 启动选项参数的枚举。 |
| [StreamRole](arkts-distributedservice-streamrole-e-sys.md) | Stream transmission role. |
| [VideoPixelFormat](arkts-distributedservice-videopixelformat-e-sys.md) | Video pixelFormat Configuration Options. |
<!--DelEnd-->

