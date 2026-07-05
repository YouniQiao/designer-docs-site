# @ohos.distributedsched.abilityConnectionManager

The **abilityConnectionManager** module provides APIs for cross-device connection management. After successful networking between devices (login with the same account and enabling of Bluetooth on the devices), a system application and a third-party application can start a [UIAbility]{@link @ohos.app.ability.UIAbility} of the same application across these devices to establish a Bluetooth connection. This way, data (specifically, text) can be transmitted across the devices over the connection.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## 导入模块

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [acceptConnect](arkts-abilityconnectionmanager-acceptconnect-f.md#acceptConnect-1) | Accepts the UIAbility connection after a collaboration session is set up and the session ID is obtained. |
| [connect](arkts-abilityconnectionmanager-connect-f.md#connect-1) | Sets up a UIAbility connection after a collaboration session is created and the session ID is obtained. This API uses a promise to return the result. |
| [createAbilityConnectionSession](arkts-abilityconnectionmanager-createabilityconnectionsession-f.md#createAbilityConnectionSession-1) | Creates a collaboration session between applications. |
| <!--DelRow-->[createStream](arkts-abilityconnectionmanager-createstream-f-sys.md#createStream-1) | Creating a Stream. |
| [destroyAbilityConnectionSession](arkts-abilityconnectionmanager-destroyabilityconnectionsession-f.md#destroyAbilityConnectionSession-1) | Destroys a collaboration session between applications. |
| <!--DelRow-->[destroyStream](arkts-abilityconnectionmanager-destroystream-f-sys.md#destroyStream-1) | Destroy the Stream. |
| [disconnect](arkts-abilityconnectionmanager-disconnect-f.md#disconnect-1) | Disconnects the UIAbility connection to end the collaboration session. |
| [getPeerInfoById](arkts-abilityconnectionmanager-getpeerinfobyid-f.md#getPeerInfoById-1) | Obtains information about the peer application in the specified session. |
| [getPeerInfoById](arkts-abilityconnectionmanager-getpeerinfobyid-f.md#getPeerInfoById-2) | Get the application information in the ability connection session |
| <!--DelRow-->[getSurfaceId](arkts-abilityconnectionmanager-getsurfaceid-f-sys.md#getSurfaceId-1) | Obtains the transmission surface. |
| [off](arkts-abilityconnectionmanager-off-f.md#off-1) | Disables listening for **connect** events. |
| [off](arkts-abilityconnectionmanager-off-f.md#off-2) | Disables listening for **disconnect** events. |
| [off](arkts-abilityconnectionmanager-off-f.md#off-3) | Disables listening for **receiveMessage** events. |
| [off](arkts-abilityconnectionmanager-off-f.md#off-4) | Disables listening for **receiveData** events. |
| <!--DelRow-->[off](arkts-abilityconnectionmanager-off-f-sys.md#off-1) | Unregisters receiveImage event. |
| <!--DelRow-->[off](arkts-abilityconnectionmanager-off-f-sys.md#off-2) | Unregisters collaborateEvent event. |
| <!--DelRow-->[offCollaborateEvent](arkts-abilityconnectionmanager-offcollaborateevent-f-sys.md#offCollaborateEvent-1) | Unregisters collaborateEvent event. |
| [offConnect](arkts-abilityconnectionmanager-offconnect-f.md#offConnect-1) | Unregisters connect event. |
| [offDisconnect](arkts-abilityconnectionmanager-offdisconnect-f.md#offDisconnect-1) | Unregisters disconnect event. |
| [offReceiveData](arkts-abilityconnectionmanager-offreceivedata-f.md#offReceiveData-1) | Unregisters receiveData event. |
| <!--DelRow-->[offReceiveImage](arkts-abilityconnectionmanager-offreceiveimage-f-sys.md#offReceiveImage-1) | Unregisters receiveImage event. |
| [offReceiveMessage](arkts-abilityconnectionmanager-offreceivemessage-f.md#offReceiveMessage-1) | Unregisters receiveMessage event. |
| [on](arkts-abilityconnectionmanager-on-f.md#on-1) | Enables listening for **connect** events. This API uses an asynchronous callback to return the result. |
| [on](arkts-abilityconnectionmanager-on-f.md#on-2) | Enables listening for **disconnect** events. |
| [on](arkts-abilityconnectionmanager-on-f.md#on-3) | Enables listening for **receiveMessage** events. |
| [on](arkts-abilityconnectionmanager-on-f.md#on-4) | Enables listening for **receiveData** events. |
| <!--DelRow-->[on](arkts-abilityconnectionmanager-on-f-sys.md#on-1) | Registers receiveImage event. |
| <!--DelRow-->[on](arkts-abilityconnectionmanager-on-f-sys.md#on-2) | Registers collaborateEvent event. |
| <!--DelRow-->[onCollaborateEvent](arkts-abilityconnectionmanager-oncollaborateevent-f-sys.md#onCollaborateEvent-1) | Registers collaborateEvent event. |
| [onConnect](arkts-abilityconnectionmanager-onconnect-f.md#onConnect-1) | Registers connect event. |
| [onDisconnect](arkts-abilityconnectionmanager-ondisconnect-f.md#onDisconnect-1) | Registers disconnect event. |
| [onReceiveData](arkts-abilityconnectionmanager-onreceivedata-f.md#onReceiveData-1) | Registers receiveData event. |
| <!--DelRow-->[onReceiveImage](arkts-abilityconnectionmanager-onreceiveimage-f-sys.md#onReceiveImage-1) | Registers receiveImage event. |
| [onReceiveMessage](arkts-abilityconnectionmanager-onreceivemessage-f.md#onReceiveMessage-1) | Registers receiveMessage event. |
| [reject](arkts-abilityconnectionmanager-reject-f.md#reject-1) | Rejects a connection request in a cross-device collaboration session. After a connection request sent from the peer application is rejected, a rejection reason is returned. |
| [sendData](arkts-abilityconnectionmanager-senddata-f.md#sendData-1) | Sends [ArrayBuffer](docroot://arkts-utils/arraybuffer-object.md) byte streams from one device to another after a connection is successfully established. |
| <!--DelRow-->[sendImage](arkts-abilityconnectionmanager-sendimage-f-sys.md#sendImage-1) | Send image data. |
| [sendMessage](arkts-abilityconnectionmanager-sendmessage-f.md#sendMessage-1) | Sends text messages after a collaboration session is set up. |
| <!--DelRow-->[setSurfaceId](arkts-abilityconnectionmanager-setsurfaceid-f-sys.md#setSurfaceId-1) | Sets the transmission surface. |
| <!--DelRow-->[startStream](arkts-abilityconnectionmanager-startstream-f-sys.md#startStream-1) | Start Streaming |
| <!--DelRow-->[stopStream](arkts-abilityconnectionmanager-stopstream-f-sys.md#stopStream-1) | Stop Streaming |
| <!--DelRow-->[updateSurfaceParam](arkts-abilityconnectionmanager-updatesurfaceparam-f-sys.md#updateSurfaceParam-1) | Update surface parameters. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CollaborateEventInfo](arkts-abilityconnectionmanager-collaborateeventinfo-i.md) | Collaboration event information. |
| [ConnectOptions](arkts-abilityconnectionmanager-connectoptions-i.md) | Connection options for the application. |
| [ConnectResult](arkts-abilityconnectionmanager-connectresult-i.md) | Defines the connection result. |
| [EventCallbackInfo](arkts-abilityconnectionmanager-eventcallbackinfo-i.md) | Defines the event callback information. |
| [PeerInfo](arkts-abilityconnectionmanager-peerinfo-i.md) | Defines the application collaboration information. |
| <!--DelRow-->[StreamParam](arkts-abilityconnectionmanager-streamparam-i-sys.md) | Streaming configuration parameters. |
| <!--DelRow-->[SurfaceParam](arkts-abilityconnectionmanager-surfaceparam-i-sys.md) | Surface configuration parameters. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [CollaborateEventType](arkts-abilityconnectionmanager-collaborateeventtype-e.md) | Enumerates collaboration event types. |
| [CollaborationKeys](arkts-abilityconnectionmanager-collaborationkeys-e.md) | Enumerates application collaboration key values. |
| [CollaborationValues](arkts-abilityconnectionmanager-collaborationvalues-e.md) | Enumerates application collaboration key values. |
| [ConnectErrorCode](arkts-abilityconnectionmanager-connecterrorcode-e.md) | Enumerates connection error codes. |
| [DisconnectReason](arkts-abilityconnectionmanager-disconnectreason-e.md) | Enumerates the disconnection reasons. |
| <!--DelRow-->[FlipOptions](arkts-abilityconnectionmanager-flipoptions-e-sys.md) | Flip option. |
| [StartOptionParams](arkts-abilityconnectionmanager-startoptionparams-e.md) | Enumerates application start options. |
| <!--DelRow-->[StreamRole](arkts-abilityconnectionmanager-streamrole-e-sys.md) | Stream transmission role. |
| <!--DelRow-->[VideoPixelFormat](arkts-abilityconnectionmanager-videopixelformat-e-sys.md) | Video pixelFormat Configuration Options. |

