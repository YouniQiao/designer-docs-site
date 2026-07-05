# AudioSessionManager

This interface implements audio session management. Before calling any API in AudioSessionManager, you must use [getSessionManager](arkts-audio-audiomanager-i.md#getSessionManager) to obtain an AudioSessionManager instance. > **NOTE** > > - The initial APIs of this interface are supported since API version 12.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Core

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## activateAudioSession

```TypeScript
activateAudioSession(strategy: AudioSessionStrategy): Promise<void>
```

Activates an audio session. This API uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| strategy | AudioSessionStrategy | 是 | Audio session strategy. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters unspecified.  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |
| 6800301 | System error. Possible causes:  1.Focus preemption failure.  2.Audio server process died. |

## clearSelectedMediaInputDevice

```TypeScript
clearSelectedMediaInputDevice(): Promise<void>
```

Clears the media input device set by calling [selectMediaInputDevice]audio.AudioSessionManager.selectMediaInputDevice. This API uses a promise to return the result.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800301 | Audio client call audio service error, System error. |

## deactivateAudioSession

```TypeScript
deactivateAudioSession(): Promise<void>
```

Deactivates this audio session. This API uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800301 | System error. Possible causes:  1.The audio session is not existed or has been released.  2.Audio server process died. |

## enableMuteSuggestionWhenMixWithOthers

```TypeScript
enableMuteSuggestionWhenMixWithOthers(enable: boolean): void
```

Enables mute suggestion notifications for mixed playback. Typically, when the audio mixing mode is used, if two applications plays audio at the same time, their audio streams are mixed. In certain scenarios (such as games or broadcasts), applications can mute their own audio to provide a better user experience. If this feature is enabled, mute and unmute suggestions will be sent through the [AudioSessionStateChangedEvent](arkts-audio-audiosessionstatechangedevent-i.md#AudioSessionStateChangedEvent) callback after the audio session state change event is subscribed to. Receiving the muted suggestion indicates that another application starts to play audio, and the played audio and the audio of this application cannot be mixed. This feature can be used only by audio sessions for which [AudioSessionScene](arkts-audio-audiosessionscene-e.md#AudioSessionScene) has been set and the **CONCURRENCY_MIX_WITH_OTHERS** mode has been activated. This feature takes effect only once when the audio session is activated. You need to enable it again before each activation of the audio session. For details, see [Enabling Mute Suggestion Notifications for Mixed Playback](docroot://media/audio/audio-session-management.md#enabling-mute-suggestion-notifications-for-mixed-playback) .

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Whether to enable mute suggestion notifications for mixed playback. true to  enable, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800103 | Function is called without setting {@link #AudioSessionScene} or  called after audio session activation. |
| 6800301 | Audio client call audio service error, system internal error. |

## getAvailableDevices

```TypeScript
getAvailableDevices(deviceUsage: DeviceUsage): AudioDeviceDescriptors
```

Obtains the available audio devices.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceUsage | DeviceUsage | 是 | Audio device type (classified by usage). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDeviceDescriptors | Device list. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## getBluetoothAndNearlinkPreferredRecordCategory

```TypeScript
getBluetoothAndNearlinkPreferredRecordCategory(): BluetoothAndNearlinkPreferredRecordCategory
```

Obtains the preferred device category for recording with Bluetooth or NearLink, which is set by calling [setBluetoothAndNearlinkPreferredRecordCategory]audio.AudioSessionManager.setBluetoothAndNearlinkPreferredRecordCategory .

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**返回值：**

| 类型 | 说明 |
| --- | --- |
| BluetoothAndNearlinkPreferredRecordCategory | Preferred device category for recording with Bluetooth  or NearLink. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800301 | Audio client call audio service error, System error. |

## getDefaultOutputDevice

```TypeScript
getDefaultOutputDevice(): DeviceType
```

Obtains the default audio output device set by calling [setDefaultOutputDevice]audio.AudioSessionManager.setDefaultOutputDevice.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Device

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DeviceType | Device type.  The options are EARPIECE, SPEAKER, and DEFAULT. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800103 | Operation not permit at current state. Return by promise. |

## getSelectedMediaInputDevice

```TypeScript
getSelectedMediaInputDevice(): AudioDeviceDescriptor
```

Obtains the media input device set by calling [selectMediaInputDevice]audio.AudioSessionManager.selectMediaInputDevice. If no device has been specified , the device with **deviceType** set to **INVALID** is returned.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDeviceDescriptor | Media input device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800301 | Audio client call audio service error, System error. |

## isAudioSessionActivated

```TypeScript
isAudioSessionActivated(): boolean
```

Checks whether this audio session is activated.

**起始版本：** 12

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the audio session is activated. true if activated, false  otherwise. |

## isOtherMediaPlaying

```TypeScript
isOtherMediaPlaying(): boolean
```

Check whether any other application is currently playing audio of the four media types: **MUSIC**, **MOVIE**, **AUDIOBOOK**, and **GAME**. Audio sessions that have activated these media types will also be checked.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether another application is playing audio of certain media types. true means yes;  false otherwise. |

## off('audioSessionDeactivated')

```TypeScript
off(type: 'audioSessionDeactivated', callback?: Callback<AudioSessionDeactivatedEvent>): void
```

Unsubscribes from the audio session deactivation event. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioSessionDeactivated' | 是 | Event type. The event 'audioSessionDeactivated' is triggered when  the audio session is deactivated. |
| callback | Callback&lt;AudioSessionDeactivatedEvent> | 否 | Callback used to return the reason why the audio  session is deactivated. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('audioSessionStateChanged')

```TypeScript
off(type: 'audioSessionStateChanged', callback?: Callback<AudioSessionStateChangedEvent>): void
```

Unsubscribes from the audio session state change event. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioSessionStateChanged' | 是 | Event type. The event 'audioSessionStateChanged' is triggered  when the audio session state is changed. |
| callback | Callback&lt;AudioSessionStateChangedEvent> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## off('currentOutputDeviceChanged')

```TypeScript
off(type: 'currentOutputDeviceChanged', callback?: Callback<CurrentOutputDeviceChangedEvent>): void
```

Unsubscribes from the current output device change event. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'currentOutputDeviceChanged' | 是 | Event type. The event 'currentOutputDeviceChanged' is  triggered when the current output device is changed. |
| callback | Callback&lt;CurrentOutputDeviceChangedEvent> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## off('availableDeviceChange')

```TypeScript
off(type: 'availableDeviceChange', callback?: Callback<DeviceChangeAction>): void
```

Unsubscribes from the event indicating that the connection status of an available audio device is changed.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'availableDeviceChange' | 是 | Event type. The event 'availableDeviceChange' is triggered when the  connection status of available audio devices is changed. |
| callback | Callback&lt;DeviceChangeAction> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800301 | Audio client call audio service error, System error. |

## off('currentInputDeviceChanged')

```TypeScript
off(type: 'currentInputDeviceChanged', callback?: Callback<CurrentInputDeviceChangedEvent>): void
```

Unsubscribes from the current input device change event.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'currentInputDeviceChanged' | 是 | Event type. The event 'currentInputDeviceChanged' is triggered  when the current input device is changed. |
| callback | Callback&lt;CurrentInputDeviceChangedEvent> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800301 | Audio client call audio service error, System error. |

## offAudioSessionDeactivated

```TypeScript
offAudioSessionDeactivated(callback?: Callback<AudioSessionDeactivatedEvent>): void
```

Unsubscribes to audio session deactivated event.

**起始版本：** 23

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioSessionDeactivatedEvent> | 否 | Callback invoked for  the audio session deactivated event. [since 23] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. [since 23] |

## offAudioSessionStateChanged

```TypeScript
offAudioSessionStateChanged(callback?: Callback<AudioSessionStateChangedEvent>): void
```

Unsubscribes to audio session deactivated event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioSessionStateChangedEvent> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## offAvailableDeviceChange

```TypeScript
offAvailableDeviceChange(callback?: Callback<DeviceChangeAction>): void
```

Unsubscribes to available device change events.

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceChangeAction> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800301 | Audio client call audio service error, System error. |

## offCurrentInputDeviceChanged

```TypeScript
offCurrentInputDeviceChanged(callback?: Callback<CurrentInputDeviceChangedEvent>): void
```

Unsubscribes current input device change events.

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CurrentInputDeviceChangedEvent> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800301 | Audio client call audio service error, System error. |

## offCurrentOutputDeviceChanged

```TypeScript
offCurrentOutputDeviceChanged(callback?: Callback<CurrentOutputDeviceChangedEvent>): void
```

UnSubscribes output device change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CurrentOutputDeviceChangedEvent> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## on('audioSessionDeactivated')

```TypeScript
on(type: 'audioSessionDeactivated', callback: Callback<AudioSessionDeactivatedEvent>): void
```

Subscribes to the audio session deactivation event, which is triggered when an audio session is deactivated. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioSessionDeactivated' | 是 | Event type. The event 'audioSessionDeactivated' is triggered when  the audio session is deactivated. |
| callback | Callback&lt;AudioSessionDeactivatedEvent> | 是 | Callback used to return the reason why the audio  session is deactivated. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters unspecified.  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('audioSessionStateChanged')

```TypeScript
on(type: 'audioSessionStateChanged', callback: Callback<AudioSessionStateChangedEvent>): void
```

Subscribes to the audio session state change event, which is triggered when the audio session focus is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioSessionStateChanged' | 是 | Event type. The event 'audioSessionStateChanged' is triggered  when the audio session state is changed. |
| callback | Callback&lt;AudioSessionStateChangedEvent> | 是 | Callback used to return the audio session change  information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800102 | Allocate memory failed. |
| 6800301 | Audio client call audio service error, System error. |

## on('currentOutputDeviceChanged')

```TypeScript
on(type: 'currentOutputDeviceChanged', callback: Callback<CurrentOutputDeviceChangedEvent>): void
```

Subscribes to the current output device change event, which is triggered when the current output device is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'currentOutputDeviceChanged' | 是 | Event type. The event 'currentOutputDeviceChanged' is  triggered when the current output device is changed. |
| callback | Callback&lt;CurrentOutputDeviceChangedEvent> | 是 | Callback used to return the information about the  current output device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800102 | Allocate memory failed. |
| 6800301 | Audio client call audio service error, System error. |

## on('availableDeviceChange')

```TypeScript
on(type: 'availableDeviceChange', deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void
```

Subscribes to the event indicating that the connection status of an available audio device is changed.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'availableDeviceChange' | 是 | Event type. The event 'availableDeviceChange' is triggered when the  connection status of available audio devices is changed. |
| deviceUsage | DeviceUsage | 是 | Audio device type (classified by usage). |
| callback | Callback&lt;DeviceChangeAction> | 是 | Callback used to return the available device change details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## on('currentInputDeviceChanged')

```TypeScript
on(type: 'currentInputDeviceChanged', callback: Callback<CurrentInputDeviceChangedEvent>): void
```

Subscribes to the current input device change event, which is triggered when the current input device is changed.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'currentInputDeviceChanged' | 是 | Event type. The event 'currentInputDeviceChanged' is triggered  when the current input device is changed. |
| callback | Callback&lt;CurrentInputDeviceChangedEvent> | 是 | Callback used to return the information about the  current input device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## onAudioSessionDeactivated

```TypeScript
onAudioSessionDeactivated(callback: Callback<AudioSessionDeactivatedEvent>): void
```

Listens for audio session deactivated event. When the audio session is deactivated, registered clients will receive the callback.

**起始版本：** 23

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioSessionDeactivatedEvent> | 是 | Callback invoked for the audio session deactivated event. [since 23] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. [since 23] |

## onAudioSessionStateChanged

```TypeScript
onAudioSessionStateChanged(callback: Callback<AudioSessionStateChangedEvent>): void
```

Listens for audio session state change event. When the audio session state change, registered clients will receive the callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioSessionStateChangedEvent> | 是 | Callback invoked for the audio  session state change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800102 | Allocate memory failed. |
| 6800301 | Audio client call audio service error, System error. |

## onAvailableDeviceChange

```TypeScript
onAvailableDeviceChange(deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void
```

Subscribes to available device change events. When a device is connected/disconnected, registered clients will receive the callback.

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceUsage | DeviceUsage | 是 | Audio device usage to filter available devices. |
| callback | Callback&lt;DeviceChangeAction> | 是 | Callback used to obtain the device update details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## onCurrentInputDeviceChanged

```TypeScript
onCurrentInputDeviceChanged(callback: Callback<CurrentInputDeviceChangedEvent>): void
```

Subscribes input device change event callback. The event is triggered when current input device change.

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CurrentInputDeviceChangedEvent> | 是 | Callback used to listen input device change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## onCurrentOutputDeviceChanged

```TypeScript
onCurrentOutputDeviceChanged(callback: Callback<CurrentOutputDeviceChangedEvent>): void
```

Subscribes output device change event callback. The event is triggered when device change.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CurrentOutputDeviceChangedEvent> | 是 | Callback used to listen device change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800102 | Allocate memory failed. |
| 6800301 | Audio client call audio service error, System error. |

## selectMediaInputDevice

```TypeScript
selectMediaInputDevice(inputAudioDevice: AudioDeviceDescriptor): Promise<void>
```

Selects a media input device. This API uses a promise to return the result. > **NOTE** > > - This API is not suitable for VoIP call recording; that is, it does not apply to scenarios where > [SourceType](arkts-audio-sourcetype-e.md#SourceType) is **SOURCE_TYPE_VOICE_COMMUNICATION**. > > - Before calling this API, call [getAvailableDevices]audio.AudioSessionManager.getAvailableDevices to > query the list of available input devices and select an input device from the list. > > - If there are recording streams of other applications with higher priorities in the system, the actual input > device used will follow the input device selected by these applications. > > - Applications can listen for the > [currentInputDeviceChanged]audio.AudioSessionManager.on(type: 'currentInputDeviceChanged', callback: Callback<CurrentInputDeviceChangedEvent>) > event to find out the actual input device being used.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputAudioDevice | AudioDeviceDescriptor | 是 | Media input device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed, for example,  the selected device does not exist. |
| 6800301 | Audio client call audio service error, System error. |

## setAudioSessionBehavior

```TypeScript
setAudioSessionBehavior(behavior: int): void
```

Sets audio session behavior parameters. (Multiple flags can be combined.) > **NOTE** > > If this API is called while an audio session is active, you must call the > [activateAudioSession](arkts-audio-audiosessionmanager-i.md#activateAudioSession) API again > for the settings to take effect.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| behavior | int | 是 | Specifies the audio session behavior. This can be a single flag or a bitwise OR  combination of multiple flags. For details about the supported audio session behaviors, see  [AudioSessionBehaviorFlags](arkts-audio-audiosessionbehaviorflags-e.md#AudioSessionBehaviorFlags). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800103 | Operation not permitted in the current state. |

## setAudioSessionScene

```TypeScript
setAudioSessionScene(scene: AudioSessionScene): void
```

Sets an audio session scene.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scene | AudioSessionScene | 是 | Audio session scene. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800103 | Operation not permit at current state. |
| 6800301 | Audio client call audio service error, System error. |

## setBluetoothAndNearlinkPreferredRecordCategory

```TypeScript
setBluetoothAndNearlinkPreferredRecordCategory(category: BluetoothAndNearlinkPreferredRecordCategory): Promise<void>
```

Sets the preferred device category for recording with Bluetooth or NearLink. This API uses a promise to return the result. > **NOTE** > > - Applications can set this category before connecting to Bluetooth or NearLink devices, and the system > prioritizes using the device for recording when the device is connected. > > - If there are recording streams of other applications with higher priorities in the system, the actual input > device used will follow the input device selected by these applications. > > - Applications can listen for the > [currentInputDeviceChanged]audio.AudioSessionManager.on(type: 'currentInputDeviceChanged', callback: Callback<CurrentInputDeviceChangedEvent>) > event to find out the actual input device being used.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| category | BluetoothAndNearlinkPreferredRecordCategory | 是 | Preferred device category for recording with  Bluetooth or NearLink. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## setCapturerMuteHint

```TypeScript
setCapturerMuteHint(mute: boolean): Promise<void>
```

Set mute hint for all capturer streams in the current audio session. It dose not mute the recording stream, only affects internal processing strategy.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mute | boolean | 是 | Use true if application recording stream muted by application if self. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800103 | Operation not permit at current state, there is no audio capturer running. |

## setDefaultOutputDevice

```TypeScript
setDefaultOutputDevice(deviceType: DeviceType): Promise<void>
```

Sets the default audio output device. This API uses a promise to return the result. > **NOTE** > > - This API applies to the following scenario: When > [AudioSessionScene](arkts-audio-audiosessionscene-e.md#AudioSessionScene) is set to **VoIP**, the setting takes > effect immediately after the AudioSession is activated. For non-VoIP scenarios, the setting does not take > effect upon AudioSession activation. Instead, the setting applies when > [StreamUsage](arkts-audio-streamusage-e.md#StreamUsage) for playback is voice message, VoIP voice call, > or VoIP video call. Supported devices include the earpiece, speaker, and system default device. > > - This API can be called at any time after an AudioSessionManager instance is created. The system records the > device set by the application. However, the setting takes effect only after the AudioSession is activated. When > the application starts playing, if an external device like Bluetooth headsets or wired headsets is connected, > the system prioritizes audio output through the external device. Otherwise, the system uses the device set by > the application.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | DeviceType | 是 | Device type. The options are EARPIECE, SPEAKER, and DEFAULT. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800102 | Allocate memory failed. Return by promise. |
| 6800301 | Audio client call audio service error, System error. |

## setMediaOutputDevice

```TypeScript
setMediaOutputDevice(deviceType: DeviceType): Promise<void>
```

Set the audio output device to the built-in speaker, when other audio peripherals are connected, such as bluetooth headphones or wired headsets. It should be noted that this interface only applies to media streams. In scenarios where there are concurrent playback streams with higher priority or user selects the output device through system UI, the actual output device used by the application may differ from the selected one. The application can obtain currently active output device by subscribing to the currentOutputDeviceChanged event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | DeviceType | 是 | the available deviceTypes are  SPEAKER: Built-in speaker  DEFAULT: Restore to system default output device |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed, for example,  the selected device type is not supported. |
| 6800301 | System error. Possible causes:  1.Internal variable memory allocation failed.  2.Audio server process died.  3.Speaker device is not available. |

