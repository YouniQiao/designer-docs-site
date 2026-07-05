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
| <!--DelRow-->[castAudio](arkts-avsession-castaudio-f-sys.md#castAudio-1) | Cast Audio to the remote devices or cast back local device |
| <!--DelRow-->[castAudio](arkts-avsession-castaudio-f-sys.md#castAudio-2) | Cast Audio to the remote devices or cast back local device |
| <!--DelRow-->[castAudioSession](arkts-avsession-castaudiosession-f-sys.md#castAudioSession-1) | Cast Audio to the remote devices or cast back local device |
| <!--DelRow-->[castAudioSession](arkts-avsession-castaudiosession-f-sys.md#castAudioSession-2) | Cast Audio to the remote devices or cast back local device |
| <!--DelRow-->[castAudioSessionAll](arkts-avsession-castaudiosessionall-f-sys.md#castAudioSessionAll-1) | Cast all the media audio to the remote devices or cast back local device |
| [createAVSession](arkts-avsession-createavsession-f.md#createAVSession-1) | Create an AVSession instance. An ability can only create one AVSession |
| [createAVSession](arkts-avsession-createavsession-f.md#createAVSession-2) | Create an AVSession instance. An ability can only create one AVSession |
| <!--DelRow-->[createController](arkts-avsession-createcontroller-f-sys.md#createController-1) | Create an avsession controller |
| <!--DelRow-->[createController](arkts-avsession-createcontroller-f-sys.md#createController-2) | Create an avsession controller |
| <!--DelRow-->[getAVCastController](arkts-avsession-getavcastcontroller-f-sys.md#getAVCastController-1) | Register a callback to retrieve an avsession cast controller. This function can be used at both side to get the same controller to do the playback control. |
| <!--DelRow-->[getAVCastController](arkts-avsession-getavcastcontroller-f-sys.md#getAVCastController-2) | Register a callback to retrieve an avsession cast controller. This function can be used at both side to get the same controller to do the playback control. |
| <!--DelRow-->[getAVCastController](arkts-avsession-getavcastcontroller-f-sys.md#getAVCastController-3) | Get the current session's remote controller client. If the avsession is not under casting state, the controller will return null. |
| <!--DelRow-->[getAVCastController](arkts-avsession-getavcastcontroller-f-sys.md#getAVCastController-4) | Get the current session's remote controller client. If the avsession is not under casting state, the controller will return undefined. |
| [getAVSession](arkts-avsession-getavsession-f.md#getAVSession-1) | Get an AVSession instance if already created. |
| <!--DelRow-->[getAllSessionDescriptors](arkts-avsession-getallsessiondescriptors-f-sys.md#getAllSessionDescriptors-1) | Get all avsession descriptors of the system |
| <!--DelRow-->[getAllSessionDescriptors](arkts-avsession-getallsessiondescriptors-f-sys.md#getAllSessionDescriptors-2) | Get all avsession descriptors which can be shown on system entrance. |
| <!--DelRow-->[getDistributedSessionController](arkts-avsession-getdistributedsessioncontroller-f-sys.md#getDistributedSessionController-1) | Get distributed avsession controller |
| <!--DelRow-->[getHistoricalAVQueueInfos](arkts-avsession-gethistoricalavqueueinfos-f-sys.md#getHistoricalAVQueueInfos-1) | Get history play list information records. |
| <!--DelRow-->[getHistoricalAVQueueInfos](arkts-avsession-gethistoricalavqueueinfos-f-sys.md#getHistoricalAVQueueInfos-2) | Get history play list information records. |
| <!--DelRow-->[getHistoricalSessionDescriptors](arkts-avsession-gethistoricalsessiondescriptors-f-sys.md#getHistoricalSessionDescriptors-1) | Get history avsession records. These sessions have been destroyed. |
| <!--DelRow-->[getHistoricalSessionDescriptors](arkts-avsession-gethistoricalsessiondescriptors-f-sys.md#getHistoricalSessionDescriptors-2) | Get history avsession records. These sessions have been destroyed. |
| <!--DelRow-->[getSessionDescriptors](arkts-avsession-getsessiondescriptors-f-sys.md#getSessionDescriptors-1) | Get session descriptors of the system based on different session category. |
| [isDesktopLyricSupported](arkts-avsession-isdesktoplyricsupported-f.md#isDesktopLyricSupported-1) | Whether desktop lyric feature is supported. |
| <!--DelRow-->[off](arkts-avsession-off-f-sys.md#off-1) | Unregister session create callback |
| <!--DelRow-->[off](arkts-avsession-off-f-sys.md#off-2) | Unregister session destroy callback |
| <!--DelRow-->[off](arkts-avsession-off-f-sys.md#off-3) | Unregister top session changed callback |
| <!--DelRow-->[off](arkts-avsession-off-f-sys.md#off-4) | Unregister Session service death callback, notifying the application to clean up resources. |
| <!--DelRow-->[off](arkts-avsession-off-f-sys.md#off-5) | Unregister distributed session changed callback |
| <!--DelRow-->[off](arkts-avsession-off-f-sys.md#off-6) | Unregister device discovery callback |
| <!--DelRow-->[off](arkts-avsession-off-f-sys.md#off-7) | Unregister device offline callback |
| <!--DelRow-->[off](arkts-avsession-off-f-sys.md#off-8) | UnRegister log event callback. |
| <!--DelRow-->[off](arkts-avsession-off-f-sys.md#off-9) | Unregisters a system callback for the device connection phase. |
| <!--DelRow-->[offActiveSessionChanged](arkts-avsession-offactivesessionchanged-f-sys.md#offActiveSessionChanged-1) | Unregister active session changed callback. |
| <!--DelRow-->[offDeviceAvailable](arkts-avsession-offdeviceavailable-f-sys.md#offDeviceAvailable-1) | Unregister device discovery callback |
| <!--DelRow-->[offDeviceLogEvent](arkts-avsession-offdevicelogevent-f-sys.md#offDeviceLogEvent-1) | UnRegister log event callback. |
| <!--DelRow-->[offDeviceOffline](arkts-avsession-offdeviceoffline-f-sys.md#offDeviceOffline-1) | Unregister device offline callback |
| <!--DelRow-->[offDeviceStateChanged](arkts-avsession-offdevicestatechanged-f-sys.md#offDeviceStateChanged-1) | Unregisters a system callback for the device connection phase. |
| <!--DelRow-->[offDistributedSessionChange](arkts-avsession-offdistributedsessionchange-f-sys.md#offDistributedSessionChange-1) | Unregister distributed session changed callback |
| [offSessionCreate](arkts-avsession-offsessioncreate-f.md#offSessionCreate-1) | Unregister session create callback |
| [offSessionDestroy](arkts-avsession-offsessiondestroy-f.md#offSessionDestroy-1) | Unregister session destroy callback |
| <!--DelRow-->[offSessionServiceDie](arkts-avsession-offsessionservicedie-f-sys.md#offSessionServiceDie-1) | Unregister Session service death callback, notifying the application to clean up resources. |
| <!--DelRow-->[offSystemCommonEvent](arkts-avsession-offsystemcommonevent-f-sys.md#offSystemCommonEvent-1) | Unregister system common event callback |
| [offTopSessionChange](arkts-avsession-offtopsessionchange-f.md#offTopSessionChange-1) | Unregister top session changed callback |
| <!--DelRow-->[on](arkts-avsession-on-f-sys.md#on-1) | Register session create callback |
| <!--DelRow-->[on](arkts-avsession-on-f-sys.md#on-2) | Register session destroy callback |
| <!--DelRow-->[on](arkts-avsession-on-f-sys.md#on-3) | Register top session changed callback |
| <!--DelRow-->[on](arkts-avsession-on-f-sys.md#on-4) | Register Session service death callback, notifying the application to clean up resources. |
| <!--DelRow-->[on](arkts-avsession-on-f-sys.md#on-5) | Register distributed session changed callback |
| <!--DelRow-->[on](arkts-avsession-on-f-sys.md#on-6) | Register device discovery callback |
| <!--DelRow-->[on](arkts-avsession-on-f-sys.md#on-7) | Register device offline callback |
| <!--DelRow-->[on](arkts-avsession-on-f-sys.md#on-8) | Register log event callback. |
| <!--DelRow-->[on](arkts-avsession-on-f-sys.md#on-9) | Registers a system callback for the device connection phase. The callback includes information such as error codes, connection status, radar errors, and user behavior codes. |
| <!--DelRow-->[onActiveSessionChanged](arkts-avsession-onactivesessionchanged-f-sys.md#onActiveSessionChanged-1) | Register active session changed callback. |
| <!--DelRow-->[onDeviceAvailable](arkts-avsession-ondeviceavailable-f-sys.md#onDeviceAvailable-1) | Register device discovery callback |
| <!--DelRow-->[onDeviceLogEvent](arkts-avsession-ondevicelogevent-f-sys.md#onDeviceLogEvent-1) | Register log event callback. |
| <!--DelRow-->[onDeviceOffline](arkts-avsession-ondeviceoffline-f-sys.md#onDeviceOffline-1) | Register device offline callback |
| <!--DelRow-->[onDeviceStateChanged](arkts-avsession-ondevicestatechanged-f-sys.md#onDeviceStateChanged-1) | Registers a system callback for the device connection phase. The callback includes information such as error codes, connection status, radar errors, and user behavior codes. |
| <!--DelRow-->[onDistributedSessionChange](arkts-avsession-ondistributedsessionchange-f-sys.md#onDistributedSessionChange-1) | Register distributed session changed callback |
| [onSessionCreate](arkts-avsession-onsessioncreate-f.md#onSessionCreate-1) | Register session create callback |
| [onSessionDestroy](arkts-avsession-onsessiondestroy-f.md#onSessionDestroy-1) | Register session destroy callback |
| <!--DelRow-->[onSessionServiceDie](arkts-avsession-onsessionservicedie-f-sys.md#onSessionServiceDie-1) | Register Session service death callback, notifying the application to clean up resources. |
| <!--DelRow-->[onSystemCommonEvent](arkts-avsession-onsystemcommonevent-f-sys.md#onSystemCommonEvent-1) | Register system common event callback |
| [onTopSessionChange](arkts-avsession-ontopsessionchange-f.md#onTopSessionChange-1) | Register top session changed callback |
| <!--DelRow-->[sendSystemAVKeyEvent](arkts-avsession-sendsystemavkeyevent-f-sys.md#sendSystemAVKeyEvent-1) | Send system media key event.The system automatically selects the recipient. |
| <!--DelRow-->[sendSystemAVKeyEvent](arkts-avsession-sendsystemavkeyevent-f-sys.md#sendSystemAVKeyEvent-2) | Send system media key event.The system automatically selects the recipient. |
| <!--DelRow-->[sendSystemCommonCommand](arkts-avsession-sendsystemcommoncommand-f-sys.md#sendSystemCommonCommand-1) | Send system control command. The system automatically selects the recipient. |
| <!--DelRow-->[sendSystemControlCommand](arkts-avsession-sendsystemcontrolcommand-f-sys.md#sendSystemControlCommand-1) | Send system control command.The system automatically selects the recipient. |
| <!--DelRow-->[sendSystemControlCommand](arkts-avsession-sendsystemcontrolcommand-f-sys.md#sendSystemControlCommand-2) | Send system control command.The system automatically selects the recipient. |
| <!--DelRow-->[setDiscoverable](arkts-avsession-setdiscoverable-f-sys.md#setDiscoverable-1) | Enable or disable device to be discoverable, used at sink side. |
| <!--DelRow-->[setDiscoverable](arkts-avsession-setdiscoverable-f-sys.md#setDiscoverable-2) | Enable or disable device to be discoverable, used at sink side. |
| <!--DelRow-->[startAVPlayback](arkts-avsession-startavplayback-f-sys.md#startAVPlayback-1) | Start an application for media playback. |
| <!--DelRow-->[startAVPlayback](arkts-avsession-startavplayback-f-sys.md#startAVPlayback-2) | Start an application for media playback with command info. |
| <!--DelRow-->[startCastDeviceDiscovery](arkts-avsession-startcastdevicediscovery-f-sys.md#startCastDeviceDiscovery-1) | Start device discovery. |
| <!--DelRow-->[startCastDeviceDiscovery](arkts-avsession-startcastdevicediscovery-f-sys.md#startCastDeviceDiscovery-2) | Start device discovery. |
| <!--DelRow-->[startCastDeviceDiscovery](arkts-avsession-startcastdevicediscovery-f-sys.md#startCastDeviceDiscovery-3) | Start device discovery. |
| <!--DelRow-->[startCasting](arkts-avsession-startcasting-f-sys.md#startCasting-1) | Cast resource to remote device. |
| <!--DelRow-->[startCasting](arkts-avsession-startcasting-f-sys.md#startCasting-2) | Cast resource to remote device. |
| <!--DelRow-->[startDeviceLogging](arkts-avsession-startdevicelogging-f-sys.md#startDeviceLogging-1) | Begin to write device logs into a file descriptor for the purpose of problem locating. If the logs exceed max file size, no logs will be written and DEVICE_LOG_FULL event will be omitted. |
| <!--DelRow-->[stopCastDeviceDiscovery](arkts-avsession-stopcastdevicediscovery-f-sys.md#stopCastDeviceDiscovery-1) | Stop device discovery. |
| <!--DelRow-->[stopCastDeviceDiscovery](arkts-avsession-stopcastdevicediscovery-f-sys.md#stopCastDeviceDiscovery-2) | Stop device discovery. |
| <!--DelRow-->[stopCasting](arkts-avsession-stopcasting-f-sys.md#stopCasting-1) | Stop current cast and disconnect device connection. |
| <!--DelRow-->[stopCasting](arkts-avsession-stopcasting-f-sys.md#stopCasting-2) | Stop current cast and disconnect device connection. |
| <!--DelRow-->[stopDeviceLogging](arkts-avsession-stopdevicelogging-f-sys.md#stopDeviceLogging-1) | Stop the current device written even the discovery is ongoing. |

### Classes

| Name | Description |
| --- | --- |
| [AVCastPickerHelper](arkts-avsession-avcastpickerhelper-c.md) | A helper to enable a picker to select output devices |

### Interfaces

| Name | Description |
| --- | --- |
| [AudioCapabilities](arkts-avsession-audiocapabilities-i.md) | Audio capabilities. |
| [AVCallState](arkts-avsession-avcallstate-i.md) | Used to indicate the call state of the current call. |
| [AVCastControlCommand](arkts-avsession-avcastcontrolcommand-i.md) | The definition of cast command to be sent to the session |
| [AVCastController](arkts-avsession-avcastcontroller-i.md) | AVCastController definition used to implement a remote control when a cast is connected |
| [AVCastPickerOptions](arkts-avsession-avcastpickeroptions-i.md) | An option to make different picker usage |
| [AVControlCommand](arkts-avsession-avcontrolcommand-i.md) | The definition of command to be sent to the session |
| [AVMediaDescription](arkts-avsession-avmediadescription-i.md) | The description of the media for an item in the playlist of the session |
| [AVMetadata](arkts-avsession-avmetadata-i.md) | The metadata of the current media.Used to set the properties of the current media file |
| [AVPlaybackState](arkts-avsession-avplaybackstate-i.md) | Used to indicate the playback state of the current media. If the playback state of the media changes, it needs to be updated synchronously |
| <!--DelRow-->[AVQueueInfo](arkts-avsession-avqueueinfo-i-sys.md) | The play list information definition. |
| [AVQueueItem](arkts-avsession-avqueueitem-i.md) | The item in the playlist of the session |
| [AVSession](arkts-avsession-avsession-i.md) | AVSession object. |
| [AVSessionController](arkts-avsession-avsessioncontroller-i.md) | Session controller,used to control media playback and get media information |
| <!--DelRow-->[AVSessionDescriptor](arkts-avsession-avsessiondescriptor-i-sys.md) | The description of the session |
| [CallMetadata](arkts-avsession-callmetadata-i.md) | The metadata of the current call. |
| [CastDisplayInfo](arkts-avsession-castdisplayinfo-i.md) | Define the information for extended display screen. |
| [CommandInfo](arkts-avsession-commandinfo-i.md) | The definition of command information to be sent to the session |
| [DesktopLyricState](arkts-avsession-desktoplyricstate-i.md) | Desktop lyric state definition. |
| [DeviceInfo](arkts-avsession-deviceinfo-i.md) | Device Information Definition |
| <!--DelRow-->[DeviceState](arkts-avsession-devicestate-i-sys.md) | Device state used to describe states including discovery, authentication and other scenes. |
| <!--DelRow-->[HiPlayDeviceInfo](arkts-avsession-hiplaydeviceinfo-i-sys.md) | HiPlay Device Information Definition |
| [MenuPosition](arkts-avsession-menuposition-i.md) | Position definition of one component on which the menu will bind and popup. |
| [OutputDeviceInfo](arkts-avsession-outputdeviceinfo-i.md) | Target Device Information Definition |
| [PlaybackPosition](arkts-avsession-playbackposition-i.md) | Playback position definition |
| <!--DelRow-->[SessionToken](arkts-avsession-sessiontoken-i-sys.md) | Session token. Used to judge the legitimacy of the session. |

### Types

| Name | Description |
| --- | --- |
| [AVCastControlCommandType](arkts-avsession-avcastcontrolcommandtype-t.md) | The type of control command |
| [AVControlCommandType](arkts-avsession-avcontrolcommandtype-t.md) | The type of control command. |
| [AVMediaCenterControlType](arkts-avsession-avmediacentercontroltype-t.md) | The type of media center control command, which can be used to determine the button displayed on the media center. |
| [AVSessionType](arkts-avsession-avsessiontype-t.md) | Session type supports audio & video, voice_call, video_call, photo |
| [ConnectionEvent](arkts-avsession-connectionevent-t.md) | The connection event supplied by system to indicate device state and information. |
| [EventProcess](arkts-avsession-eventprocess-t.md) | The general process funcation with an event and arguments. |
| [ExtraInfo](arkts-avsession-extrainfo-t.md) | The extra info object. |
| [ExtraInfo](arkts-avsession-extrainfo-t.md) | The extra info object. |
| [KeyRequestCallback](arkts-avsession-keyrequestcallback-t.md) | The callback of key request. |
| [NoParamCallback](arkts-avsession-noparamcallback-t.md) | Defines the basic callback. |
| [TwoParamCallback](arkts-avsession-twoparamcallback-t.md) | Defines the callback type including two parameters. |
| [VideoSizeEvent](arkts-avsession-videosizeevent-t.md) | The video size event. |

### Enums

| Name | Description |
| --- | --- |
| [AVCastCategory](arkts-avsession-avcastcategory-e.md) | cast category indicating different playback scenes |
| [AVSessionErrorCode](arkts-avsession-avsessionerrorcode-e.md) | Enumerates ErrorCode types, returns in BusinessError.code. |
| [BackgroundPlayMode](arkts-avsession-backgroundplaymode-e.md) | Supported background play mode definitions. |
| [CallerType](arkts-avsession-callertype-e.md) | Enumerates CallerType including caller source type. |
| [CallState](arkts-avsession-callstate-e.md) | Enumeration of current call state |
| [CastDisplayState](arkts-avsession-castdisplaystate-e.md) | Enumerates the cast display states. |
| [ConnectionState](arkts-avsession-connectionstate-e.md) | Define the device connection state. |
| [DecoderType](arkts-avsession-decodertype-e.md) | The defination of decoder type. |
| <!--DelRow-->[DeviceLogEventCode](arkts-avsession-devicelogeventcode-e-sys.md) | Enumerates device log event code. |
| [DeviceType](arkts-avsession-devicetype-e.md) | Device type definition |
| [DisplayTag](arkts-avsession-displaytag-e.md) | The pre-defined display tag by system. |
| <!--DelRow-->[DistributedSessionType](arkts-avsession-distributedsessiontype-e-sys.md) | Define different distributed session type |
| [ExtraKey](arkts-avsession-extrakey-e.md) | Define some common extra keys used in different scenarios. |
| [LoopMode](arkts-avsession-loopmode-e.md) | Loop Play Mode Definition |
| [PlaybackState](arkts-avsession-playbackstate-e.md) | Definition of current playback state |
| [ProtocolType](arkts-avsession-protocoltype-e.md) | Define different protocol capability |
| [ResolutionLevel](arkts-avsession-resolutionlevel-e.md) | The defination of suggested resolution. |
| <!--DelRow-->[SessionCategory](arkts-avsession-sessioncategory-e-sys.md) | Session category for different scenes. |
| [SkipIntervals](arkts-avsession-skipintervals-e.md) | Supported skip intervals definition |

