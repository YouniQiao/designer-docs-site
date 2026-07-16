# @ohos.multimedia.avsession

**Since:** 9

**System capability:** SystemCapability.Multimedia.AVSession.Core

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createAVSession](arkts-avsession-createavsession-f.md#createavsession-1) | Create an AVSession instance. An ability can only create one AVSession |
| [createAVSession](arkts-avsession-createavsession-f.md#createavsession-2) | Create an AVSession instance. An ability can only create one AVSession |
| [getAVSession](arkts-avsession-getavsession-f.md#getavsession-1) | Get an AVSession instance if already created. |
| [isDesktopLyricSupported](arkts-avsession-isdesktoplyricsupported-f.md#isdesktoplyricsupported-1) | Whether desktop lyric feature is supported. |
| [offSessionCreate](arkts-avsession-offsessioncreate-f.md#offsessioncreate-1) | Unregister session create callback |
| [offSessionDestroy](arkts-avsession-offsessiondestroy-f.md#offsessiondestroy-1) | Unregister session destroy callback |
| [offTopSessionChange](arkts-avsession-offtopsessionchange-f.md#offtopsessionchange-1) | Unregister top session changed callback |
| [onSessionCreate](arkts-avsession-onsessioncreate-f.md#onsessioncreate-1) | Register session create callback |
| [onSessionDestroy](arkts-avsession-onsessiondestroy-f.md#onsessiondestroy-1) | Register session destroy callback |
| [onTopSessionChange](arkts-avsession-ontopsessionchange-f.md#ontopsessionchange-1) | Register top session changed callback |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [castAudio](arkts-avsession-castaudio-f-sys.md#castaudio-1) | Cast Audio to the remote devices or cast back local device |
| [castAudio](arkts-avsession-castaudio-f-sys.md#castaudio-2) | Cast Audio to the remote devices or cast back local device |
| [createController](arkts-avsession-createcontroller-f-sys.md#createcontroller-1) | Create an avsession controller |
| [createController](arkts-avsession-createcontroller-f-sys.md#createcontroller-2) | Create an avsession controller |
| [getAVCastController](arkts-avsession-getavcastcontroller-f-sys.md#getavcastcontroller-1) | Register a callback to retrieve an avsession cast controller.This function can be used at both side to get the same controller to do the playback control. |
| [getAVCastController](arkts-avsession-getavcastcontroller-f-sys.md#getavcastcontroller-2) | Get the current session's remote controller client.If the avsession is not under casting state, the controller will return null. |
| [getAllSessionDescriptors](arkts-avsession-getallsessiondescriptors-f-sys.md#getallsessiondescriptors-1) | Get all avsession descriptors of the system |
| [getAllSessionDescriptors](arkts-avsession-getallsessiondescriptors-f-sys.md#getallsessiondescriptors-2) | Get all avsession descriptors which can be shown on system entrance. |
| [getDistributedSessionController](arkts-avsession-getdistributedsessioncontroller-f-sys.md#getdistributedsessioncontroller-1) | Get distributed avsession controller |
| [getHistoricalAVQueueInfos](arkts-avsession-gethistoricalavqueueinfos-f-sys.md#gethistoricalavqueueinfos-1) | Get history play list information records. |
| [getHistoricalAVQueueInfos](arkts-avsession-gethistoricalavqueueinfos-f-sys.md#gethistoricalavqueueinfos-2) | Get history play list information records. |
| [getHistoricalSessionDescriptors](arkts-avsession-gethistoricalsessiondescriptors-f-sys.md#gethistoricalsessiondescriptors-1) | Get history avsession records. These sessions have been destroyed. |
| [getHistoricalSessionDescriptors](arkts-avsession-gethistoricalsessiondescriptors-f-sys.md#gethistoricalsessiondescriptors-2) | Get history avsession records. These sessions have been destroyed. |
| [getSessionDescriptors](arkts-avsession-getsessiondescriptors-f-sys.md#getsessiondescriptors-1) | Get session descriptors of the system based on different session category. |
| [off](arkts-avsession-off-f-sys.md#off-1) | Unregister session create callback |
| [off](arkts-avsession-off-f-sys.md#off-2) | Unregister session destroy callback |
| [off](arkts-avsession-off-f-sys.md#off-3) | Unregister top session changed callback |
| [off](arkts-avsession-off-f-sys.md#off-4) | Unregister Session service death callback, notifying the application to clean up resources. |
| [off](arkts-avsession-off-f-sys.md#off-5) | Unregister distributed session changed callback |
| [off](arkts-avsession-off-f-sys.md#off-6) | Unregister device discovery callback |
| [off](arkts-avsession-off-f-sys.md#off-7) | Unregister device offline callback |
| [off](arkts-avsession-off-f-sys.md#off-8) | UnRegister log event callback. |
| [off](arkts-avsession-off-f-sys.md#off-9) | Unregisters a system callback for the device connection phase. |
| [offActiveSessionChanged](arkts-avsession-offactivesessionchanged-f-sys.md#offactivesessionchanged-1) | Unregister active session changed callback. |
| [offSystemCommonEvent](arkts-avsession-offsystemcommonevent-f-sys.md#offsystemcommonevent-1) | Unregister system common event callback |
| [on](arkts-avsession-on-f-sys.md#on-1) | Register session create callback |
| [on](arkts-avsession-on-f-sys.md#on-2) | Register session destroy callback |
| [on](arkts-avsession-on-f-sys.md#on-3) | Register top session changed callback |
| [on](arkts-avsession-on-f-sys.md#on-4) | Register Session service death callback, notifying the application to clean up resources. |
| [on](arkts-avsession-on-f-sys.md#on-5) | Register distributed session changed callback |
| [on](arkts-avsession-on-f-sys.md#on-6) | Register device discovery callback |
| [on](arkts-avsession-on-f-sys.md#on-7) | Register device offline callback |
| [on](arkts-avsession-on-f-sys.md#on-8) | Register log event callback. |
| [on](arkts-avsession-on-f-sys.md#on-9) | Registers a system callback for the device connection phase.The callback includes information such as error codes, connection status, radar errors, and user behavior codes. |
| [onActiveSessionChanged](arkts-avsession-onactivesessionchanged-f-sys.md#onactivesessionchanged-1) | Register active session changed callback. |
| [onSystemCommonEvent](arkts-avsession-onsystemcommonevent-f-sys.md#onsystemcommonevent-1) | Register system common event callback |
| [sendSystemAVKeyEvent](arkts-avsession-sendsystemavkeyevent-f-sys.md#sendsystemavkeyevent-1) | Send system media key event.The system automatically selects the recipient. |
| [sendSystemAVKeyEvent](arkts-avsession-sendsystemavkeyevent-f-sys.md#sendsystemavkeyevent-2) | Send system media key event.The system automatically selects the recipient. |
| [sendSystemCommonCommand](arkts-avsession-sendsystemcommoncommand-f-sys.md#sendsystemcommoncommand-1) | Send system control command. The system automatically selects the recipient. |
| [sendSystemControlCommand](arkts-avsession-sendsystemcontrolcommand-f-sys.md#sendsystemcontrolcommand-1) | Send system control command.The system automatically selects the recipient. |
| [sendSystemControlCommand](arkts-avsession-sendsystemcontrolcommand-f-sys.md#sendsystemcontrolcommand-2) | Send system control command.The system automatically selects the recipient. |
| [setDiscoverable](arkts-avsession-setdiscoverable-f-sys.md#setdiscoverable-1) | Enable or disable device to be discoverable, used at sink side. |
| [setDiscoverable](arkts-avsession-setdiscoverable-f-sys.md#setdiscoverable-2) | Enable or disable device to be discoverable, used at sink side. |
| [startAVPlayback](arkts-avsession-startavplayback-f-sys.md#startavplayback-1) | Start an application for media playback. |
| [startAVPlayback](arkts-avsession-startavplayback-f-sys.md#startavplayback-2) | Start an application for media playback with command info. |
| [startCastDeviceDiscovery](arkts-avsession-startcastdevicediscovery-f-sys.md#startcastdevicediscovery-1) | Start device discovery. |
| [startCastDeviceDiscovery](arkts-avsession-startcastdevicediscovery-f-sys.md#startcastdevicediscovery-2) | Start device discovery. |
| [startCastDeviceDiscovery](arkts-avsession-startcastdevicediscovery-f-sys.md#startcastdevicediscovery-3) | Start device discovery. |
| [startCasting](arkts-avsession-startcasting-f-sys.md#startcasting-1) | Cast resource to remote device. |
| [startCasting](arkts-avsession-startcasting-f-sys.md#startcasting-2) | Cast resource to remote device. |
| [startDeviceLogging](arkts-avsession-startdevicelogging-f-sys.md#startdevicelogging-1) | Begin to write device logs into a file descriptor for the purpose of problem locating.If the logs exceed max file size, no logs will be written and DEVICE_LOG_FULL event will be omitted. |
| [stopCastDeviceDiscovery](arkts-avsession-stopcastdevicediscovery-f-sys.md#stopcastdevicediscovery-1) | Stop device discovery. |
| [stopCastDeviceDiscovery](arkts-avsession-stopcastdevicediscovery-f-sys.md#stopcastdevicediscovery-2) | Stop device discovery. |
| [stopCasting](arkts-avsession-stopcasting-f-sys.md#stopcasting-1) | Stop current cast and disconnect device connection. |
| [stopCasting](arkts-avsession-stopcasting-f-sys.md#stopcasting-2) | Stop current cast and disconnect device connection. |
| [stopDeviceLogging](arkts-avsession-stopdevicelogging-f-sys.md#stopdevicelogging-1) | Stop the current device written even the discovery is ongoing. |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [AVCastPickerHelper](arkts-avsession-avcastpickerhelper-c.md) | A helper to enable a picker to select output devices |

### Interfaces

| Name | Description |
| --- | --- |
| [AVCallState](arkts-avsession-avcallstate-i.md) | Used to indicate the call state of the current call. |
| [AVCastControlCommand](arkts-avsession-avcastcontrolcommand-i.md) | The definition of cast command to be sent to the session |
| [AVCastController](arkts-avsession-avcastcontroller-i.md) | AVCastController definition used to implement a remote control when a cast is connected |
| [AVCastPickerOptions](arkts-avsession-avcastpickeroptions-i.md) | An option to make different picker usage |
| [AVControlCommand](arkts-avsession-avcontrolcommand-i.md) | The definition of command to be sent to the session |
| [AVMediaDescription](arkts-avsession-avmediadescription-i.md) | The description of the media for an item in the playlist of the session |
| [AVMetadata](arkts-avsession-avmetadata-i.md) | The metadata of the current media.Used to set the properties of the current media file |
| [AVPlaybackState](arkts-avsession-avplaybackstate-i.md) | Used to indicate the playback state of the current media.If the playback state of the media changes, it needs to be updated synchronously |
| [AVQueueItem](arkts-avsession-avqueueitem-i.md) | The item in the playlist of the session |
| [AVSession](arkts-avsession-avsession-i.md) | AVSession object. |
| [AVSessionController](arkts-avsession-avsessioncontroller-i.md) | Session controller,used to control media playback and get media information |
| [AudioCapabilities](arkts-avsession-audiocapabilities-i.md) | Audio capabilities. |
| [CallMetadata](arkts-avsession-callmetadata-i.md) | The metadata of the current call. |
| [CastDisplayInfo](arkts-avsession-castdisplayinfo-i.md) | Define the information for extended display screen. |
| [CommandInfo](arkts-avsession-commandinfo-i.md) | The definition of command information to be sent to the session |
| [DesktopLyricState](arkts-avsession-desktoplyricstate-i.md) | Desktop lyric state definition. |
| [DeviceInfo](arkts-avsession-deviceinfo-i.md) | Device Information Definition |
| [MenuPosition](arkts-avsession-menuposition-i.md) | Position definition of one component on which the menu will bind and popup. |
| [OutputDeviceInfo](arkts-avsession-outputdeviceinfo-i.md) | Target Device Information Definition |
| [PlaybackPosition](arkts-avsession-playbackposition-i.md) | Playback position definition |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AVCastController](arkts-avsession-avcastcontroller-i-sys.md) | AVCastController definition used to implement a remote control when a cast is connected |
| [AVQueueInfo](arkts-avsession-avqueueinfo-i-sys.md) | The play list information definition. |
| [AVSessionDescriptor](arkts-avsession-avsessiondescriptor-i-sys.md) | The description of the session |
| [DeviceInfo](arkts-avsession-deviceinfo-i-sys.md) | Device Information Definition |
| [DeviceState](arkts-avsession-devicestate-i-sys.md) | Device state used to describe states including discovery, authentication and other scenes. |
| [HiPlayDeviceInfo](arkts-avsession-hiplaydeviceinfo-i-sys.md) | HiPlay Device Information Definition |
| [SessionToken](arkts-avsession-sessiontoken-i-sys.md) | Session token. Used to judge the legitimacy of the session. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AVCastCategory](arkts-avsession-avcastcategory-e.md) | cast category indicating different playback scenes |
| [AVSessionErrorCode](arkts-avsession-avsessionerrorcode-e.md) | Enumerates ErrorCode types, returns in BusinessError.code. |
| [BackgroundPlayMode](arkts-avsession-backgroundplaymode-e.md) | Supported background play mode definitions. |
| [CallState](arkts-avsession-callstate-e.md) | Enumeration of current call state |
| [CallerType](arkts-avsession-callertype-e.md) | Enumerates CallerType including caller source type. |
| [CastDisplayState](arkts-avsession-castdisplaystate-e.md) | Enumerates the cast display states. |
| [ConnectionState](arkts-avsession-connectionstate-e.md) | Define the device connection state. |
| [DecoderType](arkts-avsession-decodertype-e.md) | The defination of decoder type. |
| [DeviceType](arkts-avsession-devicetype-e.md) | Device type definition |
| [DisplayTag](arkts-avsession-displaytag-e.md) | The pre-defined display tag by system. |
| [ExtraKey](arkts-avsession-extrakey-e.md) | Define some common extra keys used in different scenarios. |
| [LoopMode](arkts-avsession-loopmode-e.md) | Loop Play Mode Definition |
| [PlaybackState](arkts-avsession-playbackstate-e.md) | Definition of current playback state |
| [ProtocolType](arkts-avsession-protocoltype-e.md) | Define different protocol capability |
| [ResolutionLevel](arkts-avsession-resolutionlevel-e.md) | The defination of suggested resolution. |
| [SkipIntervals](arkts-avsession-skipintervals-e.md) | Supported skip intervals definition |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ConnectionState](arkts-avsession-connectionstate-e-sys.md) | Define the device connection state. |
| [DeviceLogEventCode](arkts-avsession-devicelogeventcode-e-sys.md) | Enumerates device log event code. |
| [DistributedSessionType](arkts-avsession-distributedsessiontype-e-sys.md) | Define different distributed session type |
| [ExtraKey](arkts-avsession-extrakey-e-sys.md) | Define some common extra keys used in different scenarios. |
| [ProtocolType](arkts-avsession-protocoltype-e-sys.md) | Define different protocol capability |
| [SessionCategory](arkts-avsession-sessioncategory-e-sys.md) | Session category for different scenes. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [AVCastControlCommandType](arkts-avsession-avcastcontrolcommandtype-t.md) | The type of control command |
| [AVControlCommandType](arkts-avsession-avcontrolcommandtype-t.md) | The type of control command. |
| [AVMediaCenterControlType](arkts-avsession-avmediacentercontroltype-t.md) | The type of media center control command, which can be used to determine the button displayed on the media center. |
| [AVSessionType](arkts-avsession-avsessiontype-t.md) | Session type supports audio & video, voice_call, video_call, photo |
| [ExtraInfo](arkts-avsession-extrainfo-t.md) | The extra info object. |
| [KeyRequestCallback](arkts-avsession-keyrequestcallback-t.md) | The callback of key request. |
| [NoParamCallback](arkts-avsession-noparamcallback-t.md) | Defines the basic callback. |
| [TwoParamCallback](arkts-avsession-twoparamcallback-t.md) | Defines the callback type including two parameters. |

