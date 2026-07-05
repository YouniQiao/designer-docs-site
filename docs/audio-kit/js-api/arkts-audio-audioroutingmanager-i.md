# AudioRoutingManager

This interface implements audio routing management. Before calling any API in AudioRoutingManager, you must use [getRoutingManager](arkts-audio-audiomanager-i.md#getRoutingManager) to obtain an AudioRoutingManager instance. > **NOTE** > > - The initial APIs of this interface are supported since API version 9.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## declareDeviceTypesCompatibility

```TypeScript
declareDeviceTypesCompatibility(deviceTypes: DeviceTypeArray): void
```

Declares the original device types that the application has adapted to. By default, the system returns anonymous device types. This method allows applications to declare which specific device types they have explicitly adapted to. Once declared, the system will return the original device types to the application instead of the anonymous ones. Note: This method only supports device types introduced from API 20 onwards (such as hearing aids and nearlink devices). If this interface is not called for these new device types, the application will only be able to obtain anonymous device types. Legacy device types prior to API 20 do not need this declaration.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceTypes | DeviceTypeArray | Yes | Array of original device types the application has adapted to. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed, the param deviceTypes contains value  that is invalid enum or is not device type introduced in API 20 onwards. |

## excludeOutputDevices

```TypeScript
excludeOutputDevices(usage: DeviceUsage, devices: AudioDeviceDescriptors): Promise<void>
```

Exclude output devices. After calling this function successfully, audio will not be played on the specified devices. Note that only the external ouput device can be excluded by this function. Local output devices is not accepted.

**Since:** 18

**Required permissions:** 

- API version18  to  22: ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| usage | DeviceUsage | Yes | Device usage, only output device usages can be accepted. |
| devices | AudioDeviceDescriptors | Yes | The devices to be excluded. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permisson denied. [since 18 - 22] |
| 202 | Not system application. |
| 6800101 | Parameter verification failed. |

**Example**

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

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors> | Promise used to get the output device descriptors. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not a system application. |

## getAvailableDevices

```TypeScript
getAvailableDevices(deviceUsage: DeviceUsage): AudioDeviceDescriptors
```

Obtains the available audio devices. This API returns the result synchronously.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceUsage | DeviceUsage | Yes | Audio device type (classified by usage). |

**Return value:**

| Type | Description |
| --- | --- |
| AudioDeviceDescriptors | Device list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getDevices

```TypeScript
getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void
```

Obtains the audio devices with a specific flag. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceFlag | DeviceFlag | Yes | Audio device flag. |
| callback | AsyncCallback&lt;AudioDeviceDescriptors> | Yes | Callback used to return the result. If the operation  is successful, err is undefined and data is the audio devices obtained; otherwise, err is an  error object. |

## getDevices

```TypeScript
getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>
```

Obtains the audio devices with a specific flag. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceFlag | DeviceFlag | Yes | Audio device flag. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors> | Promise used to return the device list. |

## getDevicesSync

```TypeScript
getDevicesSync(deviceFlag: DeviceFlag): AudioDeviceDescriptors
```

Obtains the audio devices with a specific flag. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceFlag | DeviceFlag | Yes | Audio device flag. |

**Return value:**

| Type | Description |
| --- | --- |
| AudioDeviceDescriptors | Device list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getExcludedDevices

```TypeScript
getExcludedDevices(usage: DeviceUsage): AudioDeviceDescriptors
```

Get excluded devices by filter.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| usage | DeviceUsage | Yes | Device usage, only output device usages can be accepted. |

**Return value:**

| Type | Description |
| --- | --- |
| AudioDeviceDescriptors | Exclueded devices. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 6800101 | Parameter verification failed. |

**Example**

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

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rendererInfo | AudioRendererInfo | Yes | Audio renderer information. |
| callback | AsyncCallback&lt;AudioDeviceDescriptors> | Yes | Callback used to return the result. If the operation  is successful, err is undefined and data is the output device with the highest priority obtained;  otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by callback. |
| 6800301 | System error. Return by callback. |

## getPreferOutputDeviceForRendererInfo

```TypeScript
getPreferOutputDeviceForRendererInfo(rendererInfo: AudioRendererInfo): Promise<AudioDeviceDescriptors>
```

Obtains the output device with the highest priority based on the audio renderer information. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rendererInfo | AudioRendererInfo | Yes | Audio renderer information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors> | Promise used to return the information about the output device with  the highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

## getPreferredInputDeviceByFilter

```TypeScript
getPreferredInputDeviceByFilter(filter: AudioCapturerFilter): AudioDeviceDescriptors
```

Get the preferred input device for the target audio capturer filter.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | AudioCapturerFilter | Yes | Audio capturer filter. |

**Return value:**

| Type | Description |
| --- | --- |
| AudioDeviceDescriptors | The preferred devices. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**Example**

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
    let audioManager = audio.getAudioManager();  // Create an AudioManager instance.
    let audioRoutingManager = audioManager.getRoutingManager();  // Call an API of AudioManager to create an AudioRoutingManager instance.
    let desc: audio.AudioDeviceDescriptors = audioRoutingManager.getPreferredInputDeviceByFilter(inputAudioCapturerFilter);
    console.info(`device descriptor: ${desc}`);
}

```

## getPreferredInputDeviceForCapturerInfo

```TypeScript
getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: AsyncCallback<AudioDeviceDescriptors>): void
```

Obtains the input device with the highest priority based on the audio capturer information. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capturerInfo | AudioCapturerInfo | Yes | Audio capturer information. |
| callback | AsyncCallback&lt;AudioDeviceDescriptors> | Yes | Callback used to return the result. If the operation  is successful, err is undefined and data is the input device with the highest priority obtained;  otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by callback. |
| 6800301 | System error. Return by callback. |

## getPreferredInputDeviceForCapturerInfo

```TypeScript
getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo): Promise<AudioDeviceDescriptors>
```

Obtains the input device with the highest priority based on the audio capturer information. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capturerInfo | AudioCapturerInfo | Yes | Audio capturer information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors> | Promise used to return the information about the input device with  the highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

## getPreferredInputDeviceForCapturerInfoSync

```TypeScript
getPreferredInputDeviceForCapturerInfoSync(capturerInfo: AudioCapturerInfo): AudioDeviceDescriptors
```

Gets preferred input device for target audio capturer info.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capturerInfo | AudioCapturerInfo | Yes | Audio capturer information. |

**Return value:**

| Type | Description |
| --- | --- |
| AudioDeviceDescriptors | Information about the input device with the highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getPreferredOutputDeviceByFilter

```TypeScript
getPreferredOutputDeviceByFilter(filter: AudioRendererFilter): AudioDeviceDescriptors
```

Get the preferred output devices by the target audio renderer filter.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | AudioRendererFilter | Yes | Audio renderer filter. |

**Return value:**

| Type | Description |
| --- | --- |
| AudioDeviceDescriptors | The preferred devices. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**Example**

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
    let audioManager = audio.getAudioManager();  // Create an AudioManager instance.
    let audioRoutingManager = audioManager.getRoutingManager();  // Call an API of AudioManager to create an AudioRoutingManager instance.
    let desc : audio.AudioDeviceDescriptors = audioRoutingManager.getPreferredOutputDeviceByFilter(outputAudioRendererFilter);
    console.info(`device descriptor: ${desc}`);
}

```

## getPreferredOutputDeviceForRendererInfoSync

```TypeScript
getPreferredOutputDeviceForRendererInfoSync(rendererInfo: AudioRendererInfo): AudioDeviceDescriptors
```

Obtains the output device with the highest priority based on the audio renderer information. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rendererInfo | AudioRendererInfo | Yes | Audio renderer information. |

**Return value:**

| Type | Description |
| --- | --- |
| AudioDeviceDescriptors | Information about the output device with the highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## isCommunicationDeviceActive

```TypeScript
isCommunicationDeviceActive(deviceType: CommunicationDeviceType, callback: AsyncCallback<boolean>): void
```

Checks whether a communication device is active. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | CommunicationDeviceType | Yes | Active audio device type. |
| callback | AsyncCallback&lt;boolean> | Yes | Callback used to return the result. If the operation is successful,  err is undefined and data is true if the device is active or false if not active;  otherwise, err is an error object. |

## isCommunicationDeviceActive

```TypeScript
isCommunicationDeviceActive(deviceType: CommunicationDeviceType): Promise<boolean>
```

Checks whether a communication device is active. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | CommunicationDeviceType | Yes | Active audio device type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating whether the device is active.  true if active, false otherwise. |

## isCommunicationDeviceActiveSync

```TypeScript
isCommunicationDeviceActiveSync(deviceType: CommunicationDeviceType): boolean
```

Checks whether a communication device is active. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | CommunicationDeviceType | Yes | Active audio device type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the device is active. true if active, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## isMicBlockDetectionSupported

```TypeScript
isMicBlockDetectionSupported():Promise<boolean>
```

Checks whether the current device supports microphone blocking detection. This API uses a promise to return the result.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Audio.Device

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating the support for microphone blocking  detection. true if supported, false otherwise. |

## off('deviceChange')

```TypeScript
off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void
```

Unsubscribes from the event indicating that the connection status of an audio device is changed. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceChange' | Yes | Event type. The event 'deviceChange' is triggered when the connection status  of an audio device is changed. |
| callback | Callback&lt;DeviceChangeAction> | No | Callback used to return the device change details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('availableDeviceChange')

```TypeScript
off(type: 'availableDeviceChange', callback?: Callback<DeviceChangeAction>): void
```

Unsubscribes from the event indicating that the connection status of an available audio device is changed. This API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'availableDeviceChange' | Yes | Event type. The event 'availableDeviceChange' is triggered when the  connection status of available audio devices is changed. |
| callback | Callback&lt;DeviceChangeAction> | No | Callback used to return the available device change details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('preferOutputDeviceChangeForRendererInfo')

```TypeScript
off(type: 'preferOutputDeviceChangeForRendererInfo', callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes from the change event of the output device with the highest priority. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'preferOutputDeviceChangeForRendererInfo' | Yes | Event type. The event  'preferOutputDeviceChangeForRendererInfo' is triggered when the output device with the highest priority  is changed. |
| callback | Callback&lt;AudioDeviceDescriptors> | No | Callback used to return the information about the output  device with the highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('preferredOutputDeviceChangeByFilter')

```TypeScript
off(type: 'preferredOutputDeviceChangeByFilter', callback?: Callback<AudioDeviceDescriptors>): void
```

UnSubscribes to prefer output device change events.

**Since:** 21

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'preferredOutputDeviceChangeByFilter' | Yes | Type of the event to listen for. Only the  preferredOutputDeviceChangeByFilter event is supported. |
| callback | Callback&lt;AudioDeviceDescriptors> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800301 | Audio client call audio service error, System error. |

**Example**

```TypeScript
// Cancel all subscriptions to the event.
audioRoutingManager.off('preferredOutputDeviceChangeByFilter');

// For the same event, if the callback parameter passed to the off API is the same as that passed to the on API, the off API cancels the subscription registered with the specified callback parameter.
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

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'preferredInputDeviceChangeForCapturerInfo' | Yes | Event type. The event  'preferredInputDeviceChangeForCapturerInfo' is triggered when the input device with the highest priority  is changed. |
| callback | Callback&lt;AudioDeviceDescriptors> | No | Callback used to return the information about the input  device with the highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('micBlockStatusChanged')

```TypeScript
off(type: 'micBlockStatusChanged', callback?: Callback<DeviceBlockStatusInfo>): void
```

Unsubscribes from the microphone blocked status change event. This API uses an asynchronous callback to return the result.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'micBlockStatusChanged' | Yes | Event type. The event 'micBlockStatusChanged' is triggered  when the microphone blocked status is changed. |
| callback | Callback&lt;DeviceBlockStatusInfo> | No | Callback used to return the microphone blocked status and  device information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## offAvailableDeviceChange

```TypeScript
offAvailableDeviceChange(callback?: Callback<DeviceChangeAction>): void
```

UnSubscribes to available device change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceChangeAction> | No | Callback used to obtain the device update details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offDeviceChange

```TypeScript
offDeviceChange(callback?: Callback<DeviceChangeAction>): void
```

UnSubscribes to device change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceChangeAction> | No | Callback used to obtain the device update details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offMicBlockStatusChanged

```TypeScript
offMicBlockStatusChanged(callback?: Callback<DeviceBlockStatusInfo>): void
```

Unsubscribes microphone blocked events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceBlockStatusInfo> | No | Callback used to obtain the microphone block status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offPreferOutputDeviceChangeForRendererInfo

```TypeScript
offPreferOutputDeviceChangeForRendererInfo(callback?: Callback<AudioDeviceDescriptors>): void
```

UnSubscribes to prefer output device change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioDeviceDescriptors> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offPreferredInputDeviceChangeByFilter

```TypeScript
offPreferredInputDeviceChangeByFilter(callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes to preferred input device change events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioDeviceDescriptors> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800301 | Audio client call audio service error, System error. |

## offPreferredInputDeviceChangeForCapturerInfo

```TypeScript
offPreferredInputDeviceChangeForCapturerInfo(callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes to preferred input device change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioDeviceDescriptors> | No | Callback used to obtain  the changed preferred devices in subscribe. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offPreferredOutputDeviceChangeByFilter

```TypeScript
offPreferredOutputDeviceChangeByFilter(callback?: Callback<AudioDeviceDescriptors>): void
```

UnSubscribes to preferred output device change events.

**Since:** 24

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioDeviceDescriptors> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800301 | Audio client call audio service error, System error. |

## on('deviceChange')

```TypeScript
on(type: 'deviceChange', deviceFlag: DeviceFlag, callback: Callback<DeviceChangeAction>): void
```

Subscribes to the event indicating that the connection status of an audio device is changed. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceChange' | Yes | Event type. The event 'deviceChange' is triggered when the connection status  of an audio device is changed. |
| deviceFlag | DeviceFlag | Yes | Audio device flag. |
| callback | Callback&lt;DeviceChangeAction> | Yes | Callback used to return the device change details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('availableDeviceChange')

```TypeScript
on(type: 'availableDeviceChange', deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void
```

Subscribes to the event indicating that the connection status of an available audio device is changed. This API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'availableDeviceChange' | Yes | Event type. The event 'availableDeviceChange' is triggered when the  connection status of available audio devices is changed. |
| deviceUsage | DeviceUsage | Yes | Audio device type (classified by usage). |
| callback | Callback&lt;DeviceChangeAction> | Yes | Callback used to return the device change details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('preferOutputDeviceChangeForRendererInfo')

```TypeScript
on(type: 'preferOutputDeviceChangeForRendererInfo', rendererInfo: AudioRendererInfo, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to the change event of the output device with the highest priority, which is triggered when the output device with the highest priority is changed. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'preferOutputDeviceChangeForRendererInfo' | Yes | Event type. The event  'preferOutputDeviceChangeForRendererInfo' is triggered when the output device with the highest priority  is changed. |
| rendererInfo | AudioRendererInfo | Yes | Audio renderer information. |
| callback | Callback&lt;AudioDeviceDescriptors> | Yes | Callback used to return the information about the output  device with the highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('preferredOutputDeviceChangeByFilter')

```TypeScript
on(type: 'preferredOutputDeviceChangeByFilter', filter: AudioRendererFilter, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to prefer output device change events. When preferred device for target audio renderer filter changes, registered clients will receive the callback.

**Since:** 21

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'preferredOutputDeviceChangeByFilter' | Yes | Type of the event to listen for. Only the  preferredOutputDeviceChangeByFilter event is supported. |
| filter | AudioRendererFilter | Yes | Filter for AudioRenderer. |
| callback | Callback&lt;AudioDeviceDescriptors> | Yes | Callback used to obtain the changed prefer devices  information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

**Example**

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

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'preferredInputDeviceChangeForCapturerInfo' | Yes | Event type. The event  'preferredInputDeviceChangeForCapturerInfo' is triggered when the input device with the highest priority  is changed. |
| capturerInfo | AudioCapturerInfo | Yes | Audio capturer information. |
| callback | Callback&lt;AudioDeviceDescriptors> | Yes | Callback used to return the information about the input  device with the highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('micBlockStatusChanged')

```TypeScript
on(type: 'micBlockStatusChanged', callback: Callback<DeviceBlockStatusInfo>): void
```

Subscribes to the microphone blocked status change event. This API uses an asynchronous callback to return the result. Before using this API, check whether the current device supports microphone blocking detection. This event is triggered when the microphone blocked status changes during recording. Currently, this API takes effect only for the microphone on the local device.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'micBlockStatusChanged' | Yes | Event type. The event 'micBlockStatusChanged' is triggered when the  microphone blocked status is changed. |
| callback | Callback&lt;DeviceBlockStatusInfo> | Yes | Callback used to return the microphone blocked status and  device information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## onAvailableDeviceChange

```TypeScript
onAvailableDeviceChange(deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void
```

Subscribes to available device change events. When a device is connected/disconnected, registered clients will receive the callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceUsage | DeviceUsage | Yes | Audio device usage. |
| callback | Callback&lt;DeviceChangeAction> | Yes | Callback used to obtain the device update details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onDeviceChange

```TypeScript
onDeviceChange(deviceFlag: DeviceFlag, callback: Callback<DeviceChangeAction>): void
```

Subscribes to device change events. When a device is connected/disconnected, registered clients will receive the callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceFlag | DeviceFlag | Yes | Audio device flag. |
| callback | Callback&lt;DeviceChangeAction> | Yes | Callback used to obtain the device update details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onMicBlockStatusChanged

```TypeScript
onMicBlockStatusChanged(callback: Callback<DeviceBlockStatusInfo>): void
```

Subscribes microphone blocked events. Before subscribing, users should query whether block detection is supported on current device. The caller will receive the callback only when it is recording and the used microphones' block status have changed. Currently, block detecting is only support for microphones located on the local device.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceBlockStatusInfo> | Yes | Callback used to obtain the microphone block status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onPreferOutputDeviceChangeForRendererInfo

```TypeScript
onPreferOutputDeviceChangeForRendererInfo(rendererInfo: AudioRendererInfo, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to prefer output device change events. When prefer device for target audio renderer info changes, registered clients will receive the callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rendererInfo | AudioRendererInfo | Yes | Audio renderer information. |
| callback | Callback&lt;AudioDeviceDescriptors> | Yes | Callback used to obtain the changed prefer devices  information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onPreferredInputDeviceChangeByFilter

```TypeScript
onPreferredInputDeviceChangeByFilter(filter: AudioCapturerFilter, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to preferred input device change events. When the preferred device for target audio capturer filter changes, registered clients will receive a callback.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | AudioCapturerFilter | Yes | Filter for capturer. |
| callback | Callback&lt;AudioDeviceDescriptors> | Yes | Callback to receive information about  the changed preferred devices. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## onPreferredInputDeviceChangeForCapturerInfo

```TypeScript
onPreferredInputDeviceChangeForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to preferred input device change events. When preferred device for target audio capturer info changes, registered clients will receive the callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capturerInfo | AudioCapturerInfo | Yes | Audio capturer information. |
| callback | Callback&lt;AudioDeviceDescriptors> | Yes | Callback used to obtain the  changed preferred devices information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onPreferredOutputDeviceChangeByFilter

```TypeScript
onPreferredOutputDeviceChangeByFilter(filter: AudioRendererFilter, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to prefer output device change events. When preferred device for target audio renderer filter changes, registered clients will receive the callback.

**Since:** 24

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | AudioRendererFilter | Yes | Filter for AudioRenderer. |
| callback | Callback&lt;AudioDeviceDescriptors> | Yes | Callback used to obtain the changed prefer devices  information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

## restoreOutputDeviceByFilter

```TypeScript
restoreOutputDeviceByFilter(filter: AudioRendererFilter): Promise<void>
```

Restores the output device for the specified audio renderer filter to the default strategy.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | AudioRendererFilter | Yes | Filter of audio renderer to restore. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |

## selectInputDevice

```TypeScript
selectInputDevice(inputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void
```

Select the input device. This method uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputAudioDevices | AudioDeviceDescriptors | Yes | Audio device description |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputAudioDevices | AudioDeviceDescriptors | Yes | Audio device description |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Example**

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

**Since:** 18

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | AudioCapturerFilter | Yes | Filter for AudioCapturer. |
| inputAudioDevices | AudioDeviceDescriptors | Yes | Audio device descriptions |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**Example**

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
    let audioManager = audio.getAudioManager();  // Create an AudioManager instance.
    let audioRoutingManager = audioManager.getRoutingManager();  // Call an API of AudioManager to create an AudioRoutingManager instance.
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

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| outputAudioDevices | AudioDeviceDescriptors | Yes | Audio device description |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| outputAudioDevices | AudioDeviceDescriptors | Yes | Audio device description |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | AudioRendererFilter | Yes | Filter for AudioRenderer. |
| outputAudioDevices | AudioDeviceDescriptors | Yes | Audio device description. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | AudioRendererFilter | Yes | Filter for AudioRenderer. |
| outputAudioDevices | AudioDeviceDescriptors | Yes | Audio device description |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Example**

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

**Since:** 21

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | AudioRendererFilter | Yes | Filter for affected AudioRenderer. |
| outputAudioDevices | AudioDeviceDescriptors | Yes | Audio device to select. |
| strategy | AudioDevcieSelectStrategy | Yes | Target audio device select strategy. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio client call audio service error, System error. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | CommunicationDeviceType | Yes | Audio device flag. |
| active | boolean | Yes | Active state to set. true to set the device to the active state, false  otherwise. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## setCommunicationDevice

```TypeScript
setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean): Promise<void>
```

Sets a communication device to the active state. This API uses a promise to return the result. This API will be deprecated in a later version due to function design is changed. You are not advised to use it. You are advised to use the [AVCastPicker component](docroot://media/avsession/using-switch-call-devices.md) provided by AVSession to switch between call devices.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | CommunicationDeviceType | Yes | Active audio device type. |
| active | boolean | Yes | Active state to set. true to set the device to the active state, false  otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## unexcludeOutputDevices

```TypeScript
unexcludeOutputDevices(usage: DeviceUsage, devices: AudioDeviceDescriptors): Promise<void>
```

Unexclude output devices. This function will unexclude target output devices belong to specific usage.

**Since:** 18

**Required permissions:** 

- API version18  to  22: ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| usage | DeviceUsage | Yes | Device usage, only output device usages can be accepted. |
| devices | AudioDeviceDescriptors | Yes | The devices to be unexcluded. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permisson denied. [since 18 - 22] |
| 202 | Not system application. |
| 6800101 | Parameter verification failed. |

**Example**

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

**Since:** 18

**Required permissions:** 

- API version18  to  22: ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| usage | DeviceUsage | Yes | Device usage, only output device usages can be accepted. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permisson denied. [since 18 - 22] |
| 202 | Not system application. |
| 6800101 | Parameter verification failed. |

**Example**

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

