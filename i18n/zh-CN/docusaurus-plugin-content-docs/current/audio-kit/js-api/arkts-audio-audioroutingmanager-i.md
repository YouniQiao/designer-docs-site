# AudioRoutingManager

This interface implements audio routing management. Before calling any API in AudioRoutingManager, you must use [getRoutingManager](arkts-audio-audiomanager-i.md#getRoutingManager) to obtain an AudioRoutingManager instance. > **NOTE** > > - The initial APIs of this interface are supported since API version 9.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## declareDeviceTypesCompatibility

```TypeScript
declareDeviceTypesCompatibility(deviceTypes: DeviceTypeArray): void
```

Declares the original device types that the application has adapted to. By default, the system returns anonymous device types. This method allows applications to declare which specific device types they have explicitly adapted to. Once declared, the system will return the original device types to the application instead of the anonymous ones. Note: This method only supports device types introduced from API 20 onwards (such as hearing aids and nearlink devices). If this interface is not called for these new device types, the application will only be able to obtain anonymous device types. Legacy device types prior to API 20 do not need this declaration.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceTypes | DeviceTypeArray | 是 | Array of original device types the application has adapted to. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed, the param deviceTypes contains value  that is invalid enum or is not device type introduced in API 20 onwards. |

## excludeOutputDevices

```TypeScript
excludeOutputDevices(usage: DeviceUsage, devices: AudioDeviceDescriptors): Promise<void>
```

Exclude output devices. After calling this function successfully, audio will not be played on the specified devices. Note that only the external ouput device can be excluded by this function. Local output devices is not accepted.

**起始版本：** 18

**需要权限：** 

- API版本18 - 22： ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| usage | DeviceUsage | 是 | Device usage, only output device usages can be accepted. |
| devices | AudioDeviceDescriptors | 是 | The devices to be excluded. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permisson denied. [since 18 - 22] |
| 202 | Not system application. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let usage: audio.DeviceUsage.MEDIA_OUTPUT_DEVICES;
let excludedDevices: audio.AudioDeviceDescriptors = [{
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.BLUETOOTH_A2DP,
  id : 3,
  name : "",
  address : "",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : "",
}];

async function excludeOutputDevices(){
  audioRoutingManager.excludeOutputDevices(usage, excludedDevices, (err: BusinessError) => {
    if (err) {
      console.error(`Result ERROR: ${err}`);
    } else {
      console.info('Exclude Output Devices result callback: SUCCESS'); }
  });
}

```

## getActiveOutputDeviceDescriptors

```TypeScript
getActiveOutputDeviceDescriptors(): Promise<AudioDeviceDescriptors>
```

Gets the active output device descriptors for the current audio device. The activation policy is related to the audio device policy of the system.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors> | Promise used to get the output device descriptors. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not a system application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
audioRoutingManager.getActiveOutputDeviceDescriptors().then((audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
  console.info(`Succeeded in getting active output device descriptors, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get active output device descriptors. Code: ${err.code}, message: ${err.message}`);
});

```

## getAvailableDevices

```TypeScript
getAvailableDevices(deviceUsage: DeviceUsage): AudioDeviceDescriptors
```

Obtains the available audio devices. This API returns the result synchronously.

**起始版本：** 12

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
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getDevices

```TypeScript
getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void
```

Obtains the audio devices with a specific flag. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceFlag | DeviceFlag | 是 | Audio device flag. |
| callback | AsyncCallback&lt;AudioDeviceDescriptors> | 是 | Callback used to return the result. If the operation  is successful, err is undefined and data is the audio devices obtained; otherwise, err is an  error object. |

## getDevices

```TypeScript
getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>
```

Obtains the audio devices with a specific flag. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceFlag | DeviceFlag | 是 | Audio device flag. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors> | Promise used to return the device list. |

## getDevicesSync

```TypeScript
getDevicesSync(deviceFlag: DeviceFlag): AudioDeviceDescriptors
```

Obtains the audio devices with a specific flag. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceFlag | DeviceFlag | 是 | Audio device flag. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDeviceDescriptors | Device list. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getExcludedDevices

```TypeScript
getExcludedDevices(usage: DeviceUsage): AudioDeviceDescriptors
```

Get excluded devices by filter.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| usage | DeviceUsage | 是 | Device usage, only output device usages can be accepted. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDeviceDescriptors | Exclueded devices. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

let usage: audio.DeviceUsage.MEDIA_OUTPUT_DEVICES;

async function getExcludedDevices(){
  let desc: audio.AudioDeviceDescriptors = audioRoutingManager.getExcludedDevices(usage);
  console.info(`device descriptor: ${desc}`);
}

```

## getPreferOutputDeviceForRendererInfo

```TypeScript
getPreferOutputDeviceForRendererInfo(rendererInfo: AudioRendererInfo, callback: AsyncCallback<AudioDeviceDescriptors>): void
```

Obtains the output device with the highest priority based on the audio renderer information. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rendererInfo | AudioRendererInfo | 是 | Audio renderer information. |
| callback | AsyncCallback&lt;AudioDeviceDescriptors> | 是 | Callback used to return the result. If the operation  is successful, err is undefined and data is the output device with the highest priority obtained;  otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by callback. |
| 6800301 | System error. Return by callback. |

## getPreferOutputDeviceForRendererInfo

```TypeScript
getPreferOutputDeviceForRendererInfo(rendererInfo: AudioRendererInfo): Promise<AudioDeviceDescriptors>
```

Obtains the output device with the highest priority based on the audio renderer information. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rendererInfo | AudioRendererInfo | 是 | Audio renderer information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors> | Promise used to return the information about the output device with  the highest priority. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

## getPreferredInputDeviceByFilter

```TypeScript
getPreferredInputDeviceByFilter(filter: AudioCapturerFilter): AudioDeviceDescriptors
```

Get the preferred input device for the target audio capturer filter.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | AudioCapturerFilter | 是 | Audio capturer filter. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDeviceDescriptors | The preferred devices. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let inputAudioCapturerFilter: audio.AudioCapturerFilter = {
    uid : 20010041,
    capturerInfo : {
        source: audio.SourceType.SOURCE_TYPE_MIC,
        capturerFlags: 0
    }
};

async function getPreferredInputDeviceByFilter(){
    let audioManager = audio.getAudioManager();  // 需要先创建AudioManager实例。
    let audioRoutingManager = audioManager.getRoutingManager();  // 再调用AudioManager的方法创建AudioRoutingManager实例。
    let desc: audio.AudioDeviceDescriptors = audioRoutingManager.getPreferredInputDeviceByFilter(inputAudioCapturerFilter);
    console.info(`device descriptor: ${desc}`);
}

```

## getPreferredInputDeviceForCapturerInfo

```TypeScript
getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: AsyncCallback<AudioDeviceDescriptors>): void
```

Obtains the input device with the highest priority based on the audio capturer information. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| capturerInfo | AudioCapturerInfo | 是 | Audio capturer information. |
| callback | AsyncCallback&lt;AudioDeviceDescriptors> | 是 | Callback used to return the result. If the operation  is successful, err is undefined and data is the input device with the highest priority obtained;  otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by callback. |
| 6800301 | System error. Return by callback. |

## getPreferredInputDeviceForCapturerInfo

```TypeScript
getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo): Promise<AudioDeviceDescriptors>
```

Obtains the input device with the highest priority based on the audio capturer information. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| capturerInfo | AudioCapturerInfo | 是 | Audio capturer information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors> | Promise used to return the information about the input device with  the highest priority. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

## getPreferredInputDeviceForCapturerInfoSync

```TypeScript
getPreferredInputDeviceForCapturerInfoSync(capturerInfo: AudioCapturerInfo): AudioDeviceDescriptors
```

Gets preferred input device for target audio capturer info.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| capturerInfo | AudioCapturerInfo | 是 | Audio capturer information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDeviceDescriptors | Information about the input device with the highest priority. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getPreferredOutputDeviceByFilter

```TypeScript
getPreferredOutputDeviceByFilter(filter: AudioRendererFilter): AudioDeviceDescriptors
```

Get the preferred output devices by the target audio renderer filter.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | AudioRendererFilter | 是 | Audio renderer filter. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDeviceDescriptors | The preferred devices. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let outputAudioRendererFilter: audio.AudioRendererFilter = {
  uid : 20010041,
  rendererInfo : {
    usage : audio.StreamUsage.STREAM_USAGE_MUSIC,
    rendererFlags : 0
  },
  rendererId : 0
};

async function selectOutputDeviceByFilter(){
    let audioManager = audio.getAudioManager();  // 需要先创建AudioManager实例。
    let audioRoutingManager = audioManager.getRoutingManager();  // 再调用AudioManager的方法创建AudioRoutingManager实例。
    let desc : audio.AudioDeviceDescriptors = audioRoutingManager.getPreferredOutputDeviceByFilter(outputAudioRendererFilter);
    console.info(`device descriptor: ${desc}`);
}

```

## getPreferredOutputDeviceForRendererInfoSync

```TypeScript
getPreferredOutputDeviceForRendererInfoSync(rendererInfo: AudioRendererInfo): AudioDeviceDescriptors
```

Obtains the output device with the highest priority based on the audio renderer information. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rendererInfo | AudioRendererInfo | 是 | Audio renderer information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDeviceDescriptors | Information about the output device with the highest priority. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## isCommunicationDeviceActive

```TypeScript
isCommunicationDeviceActive(deviceType: CommunicationDeviceType, callback: AsyncCallback<boolean>): void
```

Checks whether a communication device is active. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | CommunicationDeviceType | 是 | Active audio device type. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true if the device is active or false if not active;  otherwise, err is an error object. |

## isCommunicationDeviceActive

```TypeScript
isCommunicationDeviceActive(deviceType: CommunicationDeviceType): Promise<boolean>
```

Checks whether a communication device is active. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | CommunicationDeviceType | 是 | Active audio device type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating whether the device is active.  true if active, false otherwise. |

## isCommunicationDeviceActiveSync

```TypeScript
isCommunicationDeviceActiveSync(deviceType: CommunicationDeviceType): boolean
```

Checks whether a communication device is active. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | CommunicationDeviceType | 是 | Active audio device type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the device is active. true if active, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## isMicBlockDetectionSupported

```TypeScript
isMicBlockDetectionSupported():Promise<boolean>
```

Checks whether the current device supports microphone blocking detection. This API uses a promise to return the result.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Audio.Device

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating the support for microphone blocking  detection. true if supported, false otherwise. |

## off('deviceChange')

```TypeScript
off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void
```

Unsubscribes from the event indicating that the connection status of an audio device is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceChange' | 是 | Event type. The event 'deviceChange' is triggered when the connection status  of an audio device is changed. |
| callback | Callback&lt;DeviceChangeAction> | 否 | Callback used to return the device change details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('availableDeviceChange')

```TypeScript
off(type: 'availableDeviceChange', callback?: Callback<DeviceChangeAction>): void
```

Unsubscribes from the event indicating that the connection status of an available audio device is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'availableDeviceChange' | 是 | Event type. The event 'availableDeviceChange' is triggered when the  connection status of available audio devices is changed. |
| callback | Callback&lt;DeviceChangeAction> | 否 | Callback used to return the available device change details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('preferOutputDeviceChangeForRendererInfo')

```TypeScript
off(type: 'preferOutputDeviceChangeForRendererInfo', callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes from the change event of the output device with the highest priority. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'preferOutputDeviceChangeForRendererInfo' | 是 | Event type. The event  'preferOutputDeviceChangeForRendererInfo' is triggered when the output device with the highest priority  is changed. |
| callback | Callback&lt;AudioDeviceDescriptors> | 否 | Callback used to return the information about the output  device with the highest priority. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('preferredOutputDeviceChangeByFilter')

```TypeScript
off(type: 'preferredOutputDeviceChangeByFilter', callback?: Callback<AudioDeviceDescriptors>): void
```

UnSubscribes to prefer output device change events.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'preferredOutputDeviceChangeByFilter' | 是 | Type of the event to listen for. Only the  preferredOutputDeviceChangeByFilter event is supported. |
| callback | Callback&lt;AudioDeviceDescriptors> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800301 | Audio client call audio service error, System error. |

**示例：**

```TypeScript
// 取消该事件的所有监听。
audioRoutingManager.off('preferredOutputDeviceChangeByFilter');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let preferredOutputDeviceChangeByFilterCallback = (audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
  console.info(`Succeeded in using on or off function, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
};
let outputAudioRendererFilter: audio.AudioRendererFilter = {
  uid : 20010041,
  rendererInfo : {
    usage : audio.StreamUsage.STREAM_USAGE_MUSIC,
    rendererFlags : 0
  },
  rendererId : 0
};

audioRoutingManager.on('preferredOutputDeviceChangeByFilter', outputAudioRendererFilter, preferredOutputDeviceChangeByFilterCallback);

audioRoutingManager.off('preferredOutputDeviceChangeByFilter', preferredOutputDeviceChangeByFilterCallback);

```

## off('preferredInputDeviceChangeForCapturerInfo')

```TypeScript
off(type: 'preferredInputDeviceChangeForCapturerInfo', callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes from the change event of the input device with the highest priority. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'preferredInputDeviceChangeForCapturerInfo' | 是 | Event type. The event  'preferredInputDeviceChangeForCapturerInfo' is triggered when the input device with the highest priority  is changed. |
| callback | Callback&lt;AudioDeviceDescriptors> | 否 | Callback used to return the information about the input  device with the highest priority. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('micBlockStatusChanged')

```TypeScript
off(type: 'micBlockStatusChanged', callback?: Callback<DeviceBlockStatusInfo>): void
```

Unsubscribes from the microphone blocked status change event. This API uses an asynchronous callback to return the result.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'micBlockStatusChanged' | 是 | Event type. The event 'micBlockStatusChanged' is triggered  when the microphone blocked status is changed. |
| callback | Callback&lt;DeviceBlockStatusInfo> | 否 | Callback used to return the microphone blocked status and  device information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## offAvailableDeviceChange

```TypeScript
offAvailableDeviceChange(callback?: Callback<DeviceChangeAction>): void
```

UnSubscribes to available device change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceChangeAction> | 否 | Callback used to obtain the device update details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offDeviceChange

```TypeScript
offDeviceChange(callback?: Callback<DeviceChangeAction>): void
```

UnSubscribes to device change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceChangeAction> | 否 | Callback used to obtain the device update details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offMicBlockStatusChanged

```TypeScript
offMicBlockStatusChanged(callback?: Callback<DeviceBlockStatusInfo>): void
```

Unsubscribes microphone blocked events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceBlockStatusInfo> | 否 | Callback used to obtain the microphone block status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offPreferOutputDeviceChangeForRendererInfo

```TypeScript
offPreferOutputDeviceChangeForRendererInfo(callback?: Callback<AudioDeviceDescriptors>): void
```

UnSubscribes to prefer output device change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioDeviceDescriptors> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offPreferredInputDeviceChangeByFilter

```TypeScript
offPreferredInputDeviceChangeByFilter(callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes to preferred input device change events.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioDeviceDescriptors> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800301 | Audio client call audio service error, System error. |

**示例：**

```TypeScript
// 取消该事件的所有监听。
audioRoutingManager.offPreferredInputDeviceChangeByFilter();

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let preferredInputDeviceChangeByFilterCallback = (audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
  console.info(`Succeeded in using onPreferredInputDeviceChangeByFilter or offPreferredInputDeviceChangeByFilter function, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
};
let inputAudioCapturerFilter: audio.AudioCapturerFilter = {
  uid : 20010041,
  capturerInfo : {
    source: audio.SourceType.SOURCE_TYPE_MIC,
    capturerFlags: 0
  }
};

audioRoutingManager.onPreferredInputDeviceChangeByFilter(inputAudioCapturerFilter, preferredInputDeviceChangeByFilterCallback);

audioRoutingManager.offPreferredInputDeviceChangeByFilter(preferredInputDeviceChangeByFilterCallback);

```

## offPreferredInputDeviceChangeForCapturerInfo

```TypeScript
offPreferredInputDeviceChangeForCapturerInfo(callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes to preferred input device change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioDeviceDescriptors> | 否 | Callback used to obtain  the changed preferred devices in subscribe. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offPreferredOutputDeviceChangeByFilter

```TypeScript
offPreferredOutputDeviceChangeByFilter(callback?: Callback<AudioDeviceDescriptors>): void
```

UnSubscribes to preferred output device change events.

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioDeviceDescriptors> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800301 | Audio client call audio service error, System error. |

## on('deviceChange')

```TypeScript
on(type: 'deviceChange', deviceFlag: DeviceFlag, callback: Callback<DeviceChangeAction>): void
```

Subscribes to the event indicating that the connection status of an audio device is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceChange' | 是 | Event type. The event 'deviceChange' is triggered when the connection status  of an audio device is changed. |
| deviceFlag | DeviceFlag | 是 | Audio device flag. |
| callback | Callback&lt;DeviceChangeAction> | 是 | Callback used to return the device change details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('availableDeviceChange')

```TypeScript
on(type: 'availableDeviceChange', deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void
```

Subscribes to the event indicating that the connection status of an available audio device is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'availableDeviceChange' | 是 | Event type. The event 'availableDeviceChange' is triggered when the  connection status of available audio devices is changed. |
| deviceUsage | DeviceUsage | 是 | Audio device type (classified by usage). |
| callback | Callback&lt;DeviceChangeAction> | 是 | Callback used to return the device change details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('preferOutputDeviceChangeForRendererInfo')

```TypeScript
on(type: 'preferOutputDeviceChangeForRendererInfo', rendererInfo: AudioRendererInfo, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to the change event of the output device with the highest priority, which is triggered when the output device with the highest priority is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'preferOutputDeviceChangeForRendererInfo' | 是 | Event type. The event  'preferOutputDeviceChangeForRendererInfo' is triggered when the output device with the highest priority  is changed. |
| rendererInfo | AudioRendererInfo | 是 | Audio renderer information. |
| callback | Callback&lt;AudioDeviceDescriptors> | 是 | Callback used to return the information about the output  device with the highest priority. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('preferredOutputDeviceChangeByFilter')

```TypeScript
on(type: 'preferredOutputDeviceChangeByFilter', filter: AudioRendererFilter, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to prefer output device change events. When preferred device for target audio renderer filter changes, registered clients will receive the callback.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'preferredOutputDeviceChangeByFilter' | 是 | Type of the event to listen for. Only the  preferredOutputDeviceChangeByFilter event is supported. |
| filter | AudioRendererFilter | 是 | Filter for AudioRenderer. |
| callback | Callback&lt;AudioDeviceDescriptors> | 是 | Callback used to obtain the changed prefer devices  information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

**示例：**

```TypeScript
let outputAudioRendererFilter: audio.AudioRendererFilter = {
  uid : 20010041,
  rendererInfo : {
    usage : audio.StreamUsage.STREAM_USAGE_MUSIC,
    rendererFlags : 0
  },
  rendererId : 0
};
audioRoutingManager.on('preferredOutputDeviceChangeByFilter', outputAudioRendererFilter, (audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
  console.info(`Succeeded in using on function, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
});

```

## on('preferredInputDeviceChangeForCapturerInfo')

```TypeScript
on(type: 'preferredInputDeviceChangeForCapturerInfo', capturerInfo: AudioCapturerInfo, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to the change event of the input device with the highest priority, which is triggered when the input device with the highest priority is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'preferredInputDeviceChangeForCapturerInfo' | 是 | Event type. The event  'preferredInputDeviceChangeForCapturerInfo' is triggered when the input device with the highest priority  is changed. |
| capturerInfo | AudioCapturerInfo | 是 | Audio capturer information. |
| callback | Callback&lt;AudioDeviceDescriptors> | 是 | Callback used to return the information about the input  device with the highest priority. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('micBlockStatusChanged')

```TypeScript
on(type: 'micBlockStatusChanged', callback: Callback<DeviceBlockStatusInfo>): void
```

Subscribes to the microphone blocked status change event. This API uses an asynchronous callback to return the result. Before using this API, check whether the current device supports microphone blocking detection. This event is triggered when the microphone blocked status changes during recording. Currently, this API takes effect only for the microphone on the local device.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'micBlockStatusChanged' | 是 | Event type. The event 'micBlockStatusChanged' is triggered when the  microphone blocked status is changed. |
| callback | Callback&lt;DeviceBlockStatusInfo> | 是 | Callback used to return the microphone blocked status and  device information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## onAvailableDeviceChange

```TypeScript
onAvailableDeviceChange(deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void
```

Subscribes to available device change events. When a device is connected/disconnected, registered clients will receive the callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceUsage | DeviceUsage | 是 | Audio device usage. |
| callback | Callback&lt;DeviceChangeAction> | 是 | Callback used to obtain the device update details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onDeviceChange

```TypeScript
onDeviceChange(deviceFlag: DeviceFlag, callback: Callback<DeviceChangeAction>): void
```

Subscribes to device change events. When a device is connected/disconnected, registered clients will receive the callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceFlag | DeviceFlag | 是 | Audio device flag. |
| callback | Callback&lt;DeviceChangeAction> | 是 | Callback used to obtain the device update details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onMicBlockStatusChanged

```TypeScript
onMicBlockStatusChanged(callback: Callback<DeviceBlockStatusInfo>): void
```

Subscribes microphone blocked events. Before subscribing, users should query whether block detection is supported on current device. The caller will receive the callback only when it is recording and the used microphones' block status have changed. Currently, block detecting is only support for microphones located on the local device.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceBlockStatusInfo> | 是 | Callback used to obtain the microphone block status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onPreferOutputDeviceChangeForRendererInfo

```TypeScript
onPreferOutputDeviceChangeForRendererInfo(rendererInfo: AudioRendererInfo, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to prefer output device change events. When prefer device for target audio renderer info changes, registered clients will receive the callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rendererInfo | AudioRendererInfo | 是 | Audio renderer information. |
| callback | Callback&lt;AudioDeviceDescriptors> | 是 | Callback used to obtain the changed prefer devices  information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onPreferredInputDeviceChangeByFilter

```TypeScript
onPreferredInputDeviceChangeByFilter(filter: AudioCapturerFilter, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to preferred input device change events. When the preferred device for target audio capturer filter changes, registered clients will receive a callback.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | AudioCapturerFilter | 是 | Filter for capturer. |
| callback | Callback&lt;AudioDeviceDescriptors> | 是 | Callback to receive information about  the changed preferred devices. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

**示例：**

```TypeScript
let inputAudioCapturerFilter: audio.AudioCapturerFilter = {
  uid : 20010041,
  capturerInfo : {
    source: audio.SourceType.SOURCE_TYPE_MIC,
    capturerFlags: 0
  }
};
audioRoutingManager.onPreferredInputDeviceChangeByFilter(inputAudioCapturerFilter, (audioDeviceDescriptors: audio.AudioDeviceDescriptors) => {
  console.info(`Succeeded in using onPreferredInputDeviceChangeByFilter function, AudioDeviceDescriptors: ${JSON.stringify(audioDeviceDescriptors)}.`);
});

```

## onPreferredInputDeviceChangeForCapturerInfo

```TypeScript
onPreferredInputDeviceChangeForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to preferred input device change events. When preferred device for target audio capturer info changes, registered clients will receive the callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| capturerInfo | AudioCapturerInfo | 是 | Audio capturer information. |
| callback | Callback&lt;AudioDeviceDescriptors> | 是 | Callback used to obtain the  changed preferred devices information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onPreferredOutputDeviceChangeByFilter

```TypeScript
onPreferredOutputDeviceChangeByFilter(filter: AudioRendererFilter, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to prefer output device change events. When preferred device for target audio renderer filter changes, registered clients will receive the callback.

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | AudioRendererFilter | 是 | Filter for AudioRenderer. |
| callback | Callback&lt;AudioDeviceDescriptors> | 是 | Callback used to obtain the changed prefer devices  information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## restoreOutputDeviceByFilter

```TypeScript
restoreOutputDeviceByFilter(filter: AudioRendererFilter): Promise<void>
```

Restores the output device for the specified audio renderer filter to the default strategy.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | AudioRendererFilter | 是 | Filter of audio renderer to restore. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let outputAudioRendererFilter: audio.AudioRendererFilter = {
  uid : 20010041,
  rendererInfo : {
    usage : audio.StreamUsage.STREAM_USAGE_MUSIC,
    rendererFlags : 0
  },
  rendererId : 0
};

audioRoutingManager.restoreOutputDeviceByFilter(outputAudioRendererFilter).then(() => {
  console.info('Succeeded in restoring output device by filter.');
}).catch((err: BusinessError) => {
  console.error(`Failed to restore output device by filter. Code: ${err.code}, message: ${err.message}`);
});

```

## selectInputDevice

```TypeScript
selectInputDevice(inputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void
```

Select the input device. This method uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputAudioDevices | AudioDeviceDescriptors | 是 | Audio device description |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let inputAudioDeviceDescriptor: audio.AudioDeviceDescriptors = [{
  deviceRole : audio.DeviceRole.INPUT_DEVICE,
  deviceType : audio.DeviceType.MIC,
  id : 1,
  name : "",
  address : "",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : "",
}];

async function selectInputDevice(){
  audioRoutingManager.selectInputDevice(inputAudioDeviceDescriptor, (err: BusinessError) => {
    if (err) {
      console.error(`Result ERROR: ${err}`);
    } else {
      console.info('Select input devices result callback: SUCCESS');
    }
  });
}

```

## selectInputDevice

```TypeScript
selectInputDevice(inputAudioDevices: AudioDeviceDescriptors): Promise<void>
```

Select the input device. This method uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputAudioDevices | AudioDeviceDescriptors | 是 | Audio device description |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let inputAudioDeviceDescriptor: audio.AudioDeviceDescriptors = [{
  deviceRole : audio.DeviceRole.INPUT_DEVICE,
  deviceType : audio.DeviceType.MIC,
  id : 1,
  name : "",
  address : "",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : "",
}];

async function getRoutingManager(){
  audioRoutingManager.selectInputDevice(inputAudioDeviceDescriptor).then(() => {
    console.info('Select input devices result promise: SUCCESS');
  }).catch((err: BusinessError) => {
    console.error(`Result ERROR: ${err}`);
  });
}

```

## selectInputDeviceByFilter

```TypeScript
selectInputDeviceByFilter(filter: AudioCapturerFilter, inputAudioDevices: AudioDeviceDescriptors): Promise<void>
```

Select the input device with desired AudioCapturer. This method uses a promise to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | AudioCapturerFilter | 是 | Filter for AudioCapturer. |
| inputAudioDevices | AudioDeviceDescriptors | 是 | Audio device descriptions |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let inputAudioCapturerFilter: audio.AudioCapturerFilter = {
    uid : 20010041,
    capturerInfo : {
        source: audio.SourceType.SOURCE_TYPE_MIC,
        capturerFlags: 0
    }
};

let inputAudioDeviceDescriptor: audio.AudioDeviceDescriptors = [{
    deviceRole : audio.DeviceRole.INPUT_DEVICE,
    deviceType : audio.DeviceType.MIC,
    id : 1,
    name : "",
    address : "",
    sampleRates : [44100],
    channelCounts : [2],
    channelMasks : [0],
    networkId : audio.LOCAL_NETWORK_ID,
    interruptGroupId : 1,
    volumeGroupId : 1,
    displayName : "",
}];

async function selectInputDeviceByFilter(){
    let audioManager = audio.getAudioManager();  // 需要先创建AudioManager实例。
    let audioRoutingManager = audioManager.getRoutingManager();  // 再调用AudioManager的方法创建AudioRoutingManager实例。
    audioRoutingManager.selectInputDeviceByFilter(inputAudioCapturerFilter, inputAudioDeviceDescriptor).then(() => {
        console.info('Select input devices by filter result promise: SUCCESS');
    }).catch((err: BusinessError) => {
        console.error(`Result ERROR: ${err}`);
    })
}

```

## selectOutputDevice

```TypeScript
selectOutputDevice(outputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void
```

Select the output device. This method uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| outputAudioDevices | AudioDeviceDescriptors | 是 | Audio device description |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let outputAudioDeviceDescriptor: audio.AudioDeviceDescriptors = [{
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.SPEAKER,
  id : 1,
  name : "",
  address : "",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : "",
}];

async function selectOutputDevice(){
  audioRoutingManager.selectOutputDevice(outputAudioDeviceDescriptor, (err: BusinessError) => {
    if (err) {
      console.error(`Result ERROR: ${err}`);
    } else {
      console.info('Select output devices result callback: SUCCESS'); }
  });
}

```

## selectOutputDevice

```TypeScript
selectOutputDevice(outputAudioDevices: AudioDeviceDescriptors): Promise<void>
```

Select the output device. This method uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| outputAudioDevices | AudioDeviceDescriptors | 是 | Audio device description |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let outputAudioDeviceDescriptor: audio.AudioDeviceDescriptors = [{
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.SPEAKER,
  id : 1,
  name : "",
  address : "",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : "",
}];

async function selectOutputDevice(){
  audioRoutingManager.selectOutputDevice(outputAudioDeviceDescriptor).then(() => {
    console.info('Select output devices result promise: SUCCESS');
  }).catch((err: BusinessError) => {
    console.error(`Result ERROR: ${err}`);
  });
}

```

## selectOutputDeviceByFilter

```TypeScript
selectOutputDeviceByFilter(filter: AudioRendererFilter, outputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void
```

Select the output device with desired AudioRenderer. This method uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | AudioRendererFilter | 是 | Filter for AudioRenderer. |
| outputAudioDevices | AudioDeviceDescriptors | 是 | Audio device description. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let outputAudioRendererFilter: audio.AudioRendererFilter = {
  uid : 20010041,
  rendererInfo : {
    usage : audio.StreamUsage.STREAM_USAGE_MUSIC,
    rendererFlags : 0
  },
  rendererId : 0
};

let outputAudioDeviceDescriptor: audio.AudioDeviceDescriptors = [{
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.SPEAKER,
  id : 1,
  name : "",
  address : "",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : "",
}];

async function selectOutputDeviceByFilter(){
  audioRoutingManager.selectOutputDeviceByFilter(outputAudioRendererFilter, outputAudioDeviceDescriptor, (err: BusinessError) => {
    if (err) {
      console.error(`Result ERROR: ${err}`);
    } else {
      console.info('Select output devices by filter result callback: SUCCESS'); }
  });
}

```

## selectOutputDeviceByFilter

```TypeScript
selectOutputDeviceByFilter(filter: AudioRendererFilter, outputAudioDevices: AudioDeviceDescriptors): Promise<void>
```

Select the output device with desired AudioRenderer. This method uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | AudioRendererFilter | 是 | Filter for AudioRenderer. |
| outputAudioDevices | AudioDeviceDescriptors | 是 | Audio device description |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let outputAudioRendererFilter: audio.AudioRendererFilter = {
  uid : 20010041,
  rendererInfo : {
    usage : audio.StreamUsage.STREAM_USAGE_MUSIC,
    rendererFlags : 0
  },
  rendererId : 0
};

let outputAudioDeviceDescriptor: audio.AudioDeviceDescriptors = [{
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.SPEAKER,
  id : 1,
  name : "",
  address : "",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : "",
}];

async function selectOutputDeviceByFilter(){
  audioRoutingManager.selectOutputDeviceByFilter(outputAudioRendererFilter, outputAudioDeviceDescriptor).then(() => {
    console.info('Select output devices by filter result promise: SUCCESS');
  }).catch((err: BusinessError) => {
    console.error(`Result ERROR: ${err}`);
  })
}

```

## selectOutputDeviceByFilter

```TypeScript
selectOutputDeviceByFilter(filter: AudioRendererFilter, outputAudioDevices: AudioDeviceDescriptors, strategy: AudioDevcieSelectStrategy): Promise<void>
```

Select the output device with desired AudioRenderer. This method uses a promise to return the result.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | AudioRendererFilter | 是 | Filter for affected AudioRenderer. |
| outputAudioDevices | AudioDeviceDescriptors | 是 | Audio device to select. |
| strategy | AudioDevcieSelectStrategy | 是 | Target audio device select strategy. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let outputAudioRendererFilter: audio.AudioRendererFilter = {
  uid : 20010041,
  rendererInfo : {
    usage : audio.StreamUsage.STREAM_USAGE_MUSIC,
    rendererFlags : 0
  },
  rendererId : 0
};

let outputAudioDeviceDescriptor: audio.AudioDeviceDescriptors = [{
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.SPEAKER,
  id : 1,
  name : "",
  address : "",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : "",
}];

audioRoutingManager.selectOutputDeviceByFilter(outputAudioRendererFilter, outputAudioDeviceDescriptor, audio.AudioDevcieSelectStrategy.SELECT_STRATEGY_INDEPENDENT).then(() => {
  console.info('Succeeded in selecting output device by filter.');
}).catch((err: BusinessError) => {
  console.error(`Failed to select output device by filter. Code: ${err.code}, message: ${err.message}`);
});

```

## setCommunicationDevice

```TypeScript
setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean, callback: AsyncCallback<void>): void
```

Sets a communication device to the active state. This API uses an asynchronous callback to return the result. This API will be deprecated in a later version due to function design is changed. You are not advised to use it. You are advised to use the [AVCastPicker component](docroot://media/avsession/using-switch-call-devices.md) provided by AVSession to switch between call devices.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | CommunicationDeviceType | 是 | Audio device flag. |
| active | boolean | 是 | Active state to set. true to set the device to the active state, false  otherwise. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## setCommunicationDevice

```TypeScript
setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean): Promise<void>
```

Sets a communication device to the active state. This API uses a promise to return the result. This API will be deprecated in a later version due to function design is changed. You are not advised to use it. You are advised to use the [AVCastPicker component](docroot://media/avsession/using-switch-call-devices.md) provided by AVSession to switch between call devices.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | CommunicationDeviceType | 是 | Active audio device type. |
| active | boolean | 是 | Active state to set. true to set the device to the active state, false  otherwise. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## unexcludeOutputDevices

```TypeScript
unexcludeOutputDevices(usage: DeviceUsage, devices: AudioDeviceDescriptors): Promise<void>
```

Unexclude output devices. This function will unexclude target output devices belong to specific usage.

**起始版本：** 18

**需要权限：** 

- API版本18 - 22： ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| usage | DeviceUsage | 是 | Device usage, only output device usages can be accepted. |
| devices | AudioDeviceDescriptors | 是 | The devices to be unexcluded. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permisson denied. [since 18 - 22] |
| 202 | Not system application. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let usage: audio.DeviceUsage.MEDIA_OUTPUT_DEVICES;
let unexcludedDevices: audio.AudioDeviceDescriptors = [{
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.BLUETOOTH_A2DP,
  id : 3,
  name : "",
  address : "",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : "",
}];

async function unexcludeOutputDevices(){
  audioRoutingManager.unexcludeOutputDevices(usage, unexcludedDevices, (err: BusinessError) => {
    if (err) {
      console.error(`Result ERROR: ${err}`);
    } else {
      console.info('Unexclude Output Devices result callback: SUCCESS'); }
  });
}

```

## unexcludeOutputDevices

```TypeScript
unexcludeOutputDevices(usage: DeviceUsage): Promise<void>
```

Unexclude output devices. This function will unexclude all output devices belong to specific usage.

**起始版本：** 18

**需要权限：** 

- API版本18 - 22： ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| usage | DeviceUsage | 是 | Device usage, only output device usages can be accepted. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permisson denied. [since 18 - 22] |
| 202 | Not system application. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let usage: audio.DeviceUsage.MEDIA_OUTPUT_DEVICES;

async function unexcludeOutputDevices(){
  audioRoutingManager.unexcludeOutputDevices(usage).then(() => {
    console.info('Unexclude Output Devices result promise: SUCCESS');
  }).catch((err: BusinessError) => {
    console.error(`Result ERROR: ${err}`);
  });
}

```

