# @ohos.distributedsched.abilityConnectionManager

The **abilityConnectionManager** module provides APIs for cross-device connection management. After successful
networking between devices (login with the same account and enabling of Bluetooth on the devices), a system
application and a third-party application can start a [UIAbility](../../apis-ability-kit/arkts-apis/arkts-app-ability-uiability.md) of the same
application across these devices to establish a Bluetooth connection. This way, data (specifically, text) can be
transmitted across the devices over the connection.

**Since:** 18

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## Modules to Import

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [acceptConnect](arkts-distributedservice-acceptconnect-f.md#acceptconnect-1) | Accepts the UIAbility connection after a collaboration session is set up and the session ID is obtained. |
| [connect](arkts-distributedservice-connect-f.md#connect-1) | Sets up a UIAbility connection after a collaboration session is created and the session ID is obtained. This APIuses a promise to return the result. |
| [createAbilityConnectionSession](arkts-distributedservice-createabilityconnectionsession-f.md#createabilityconnectionsession-1) | Creates a collaboration session between applications. |
| [destroyAbilityConnectionSession](arkts-distributedservice-destroyabilityconnectionsession-f.md#destroyabilityconnectionsession-1) | Destroys a collaboration session between applications. |
| [disconnect](arkts-distributedservice-disconnect-f.md#disconnect-1) | Disconnects the UIAbility connection to end the collaboration session. |
| [getPeerInfoById](arkts-distributedservice-getpeerinfobyid-f.md#getpeerinfobyid-1) | Obtains information about the peer application in the specified session. |
| [off](arkts-distributedservice-off-f.md#off-1) | Disables listening for **connect** events. |
| [off](arkts-distributedservice-off-f.md#off-2) | Disables listening for **disconnect** events. |
| [off](arkts-distributedservice-off-f.md#off-3) | Disables listening for **receiveMessage** events. |
| [off](arkts-distributedservice-off-f.md#off-4) | Disables listening for **receiveData** events. |
| [on](arkts-distributedservice-on-f.md#on-1) | Enables listening for **connect** events. This API uses an asynchronous callback to return the result. |
| [on](arkts-distributedservice-on-f.md#on-2) | Enables listening for **disconnect** events. |
| [on](arkts-distributedservice-on-f.md#on-3) | Enables listening for **receiveMessage** events. |
| [on](arkts-distributedservice-on-f.md#on-4) | Enables listening for **receiveData** events. |
| [reject](arkts-distributedservice-reject-f.md#reject-1) | Rejects a connection request in a cross-device collaboration session. After a connection request sent from the peer application is rejected, a rejection reason is returned. |
| [sendData](arkts-distributedservice-senddata-f.md#senddata-1) | Sends [ArrayBuffer](../../../../arkts-utils/arraybuffer-object.md) byte streams from one device to another after aconnection is successfully established. |
| [sendMessage](arkts-distributedservice-sendmessage-f.md#sendmessage-1) | Sends text messages after a collaboration session is set up. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createStream](arkts-distributedservice-createstream-f-sys.md#createstream-1) | Creating a Stream. |
| [destroyStream](arkts-distributedservice-destroystream-f-sys.md#destroystream-1) | Destroy the Stream. |
| [getSurfaceId](arkts-distributedservice-getsurfaceid-f-sys.md#getsurfaceid-1) | Obtains the transmission surface. |
| [off](arkts-distributedservice-off-f-sys.md#off-5) | Unregisters receiveImage event. |
| [off](arkts-distributedservice-off-f-sys.md#off-6) | Unregisters collaborateEvent event. |
| [on](arkts-distributedservice-on-f-sys.md#on-5) | Registers receiveImage event. |
| [on](arkts-distributedservice-on-f-sys.md#on-6) | Registers collaborateEvent event. |
| [sendImage](arkts-distributedservice-sendimage-f-sys.md#sendimage-1) | Send image data. |
| [setSurfaceId](arkts-distributedservice-setsurfaceid-f-sys.md#setsurfaceid-1) | Sets the transmission surface. |
| [startStream](arkts-distributedservice-startstream-f-sys.md#startstream-1) | Start Streaming |
| [stopStream](arkts-distributedservice-stopstream-f-sys.md#stopstream-1) | Stop Streaming |
| [updateSurfaceParam](arkts-distributedservice-updatesurfaceparam-f-sys.md#updatesurfaceparam-1) | Update surface parameters. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [CollaborateEventInfo](arkts-distributedservice-collaborateeventinfo-i.md) | Collaboration event information. |
| [ConnectOptions](arkts-distributedservice-connectoptions-i.md) | Connection options for the application. |
| [ConnectResult](arkts-distributedservice-connectresult-i.md) | Defines the connection result. |
| [EventCallbackInfo](arkts-distributedservice-eventcallbackinfo-i.md) | Defines the event callback information. |
| [PeerInfo](arkts-distributedservice-peerinfo-i.md) | Defines the application collaboration information. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ConnectOptions](arkts-distributedservice-connectoptions-i-sys.md) | Connection options for the application. |
| [EventCallbackInfo](arkts-distributedservice-eventcallbackinfo-i-sys.md) | Defines the event callback information. |
| [StreamParam](arkts-distributedservice-streamparam-i-sys.md) | Streaming configuration parameters. |
| [SurfaceParam](arkts-distributedservice-surfaceparam-i-sys.md) | Surface configuration parameters. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [CollaborateEventType](arkts-distributedservice-collaborateeventtype-e.md) | Enumerates collaboration event types. |
| [CollaborationKeys](arkts-distributedservice-collaborationkeys-e.md) | Enumerates application collaboration key values. |
| [CollaborationValues](arkts-distributedservice-collaborationvalues-e.md) | Enumerates application collaboration key values. |
| [ConnectErrorCode](arkts-distributedservice-connecterrorcode-e.md) | Enumerates connection error codes. |
| [DisconnectReason](arkts-distributedservice-disconnectreason-e.md) | Enumerates the disconnection reasons. |
| [StartOptionParams](arkts-distributedservice-startoptionparams-e.md) | Enumerates application start options. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [FlipOptions](arkts-distributedservice-flipoptions-e-sys.md) | Flip option. |
| [StartOptionParams](arkts-distributedservice-startoptionparams-e-sys.md) | Enumerates application start options. |
| [StreamRole](arkts-distributedservice-streamrole-e-sys.md) | Stream transmission role. |
| [VideoPixelFormat](arkts-distributedservice-videopixelformat-e-sys.md) | Video pixelFormat Configuration Options. |
<!--DelEnd-->

