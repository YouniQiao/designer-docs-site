# AudioSpatializationManager

Implements audio spatialization management.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## downloadPersonalizedHRTF

```TypeScript
downloadPersonalizedHRTF(hrtfDescriptor: AudioHRTFAnonymousDescriptor): Promise<void>
```

Downloads personalized HRTF data from anonymous file descriptor.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hrtfDescriptor | AudioHRTFAnonymousDescriptor | 是 | Personalized HRTF data descriptor. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 801 | Capability not supported on the device. |
| 6800101 | Parameter verification failed, fd or length wrong. |
| 6800105 | Time out when saving HRTF on disk. |
| 6800301 | System error, fail to save HRTF on disk. |

## getCurrentSpatialAudioSourceType

```TypeScript
getCurrentSpatialAudioSourceType(): SpatialAudioSourceType
```

Gets the current spatial audio source type.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SpatialAudioSourceType | The spatial audio source type on the current device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |

## getSpatializationSceneType

```TypeScript
getSpatializationSceneType(): AudioSpatializationSceneType
```

Get spatialization rendering scene type.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioSpatializationSceneType | Current spatialization rendering scene type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let spatializationSceneType: audio.AudioSpatializationSceneType = audioSpatializationManager.getSpatializationSceneType();
  console.info(`AudioSpatializationManager spatializationSceneType: ${spatializationSceneType}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`ERROR: ${error}`);
}

```

## isAdaptiveSpatialRenderingEnabled

```TypeScript
isAdaptiveSpatialRenderingEnabled(deviceDescriptor: AudioDeviceDescriptor): boolean
```

Checks whether the adaptive spatial rendering is enabled by the specified device.

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceDescriptor | AudioDeviceDescriptor | 是 | The target device  to be check whether the adaptive spatial rendering is enabled. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the adaptive spatial rendering is enabled by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## isHeadTrackingEnabled

```TypeScript
isHeadTrackingEnabled(): boolean
```

Checks whether the head tracking is enabled.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.multimedia.audio.AudioSpatializationManager#isHeadTrackingEnabled

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the head tracking is enabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let isHeadTrackingEnabled: boolean = audioSpatializationManager.isHeadTrackingEnabled();
  console.info(`AudioSpatializationManager isHeadTrackingEnabled: ${isHeadTrackingEnabled}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`ERROR: ${error}`);
}

```

## isHeadTrackingEnabled

```TypeScript
isHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor): boolean
```

Checks whether the head tracking is enabled by the specified device.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceDescriptor | AudioDeviceDescriptor | 是 | Audio device description. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the head tracking is enabled by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let deviceDescriptor: audio.AudioDeviceDescriptor = {
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.BLUETOOTH_A2DP,
  id : 1,
  name : "",
  address : "123",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : ""
};

try {
  let isHeadTrackingEnabled: boolean = audioSpatializationManager.isHeadTrackingEnabled(deviceDescriptor);
  console.info(`AudioSpatializationManager isHeadTrackingEnabled: ${isHeadTrackingEnabled}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`ERROR: ${error}`);
}

```

## isHeadTrackingSupported

```TypeScript
isHeadTrackingSupported(): boolean
```

Checks whether head tracking is supported by system.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether head tracking is supported by system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let isHeadTrackingSupported: boolean = audioSpatializationManager.isHeadTrackingSupported();
  console.info(`AudioSpatializationManager isHeadTrackingSupported: ${isHeadTrackingSupported}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`ERROR: ${error}`);
}

```

## isHeadTrackingSupportedForDevice

```TypeScript
isHeadTrackingSupportedForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean
```

Checks whether head tracking is supported by the specified device.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceDescriptor | AudioDeviceDescriptor | 是 | Audio device description. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether head tracking is supported by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let deviceDescriptor: audio.AudioDeviceDescriptor = {
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.BLUETOOTH_A2DP,
  id : 1,
  name : "",
  address : "123",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : ""
};

try {
  let isHeadTrackingSupportedForDevice: boolean = audioSpatializationManager.isHeadTrackingSupportedForDevice(deviceDescriptor);
  console.info(`AudioSpatializationManager isHeadTrackingSupportedForDevice: ${isHeadTrackingSupportedForDevice}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`ERROR: ${error}`);
}

```

## isPersonalizedSpatializationEnabled

```TypeScript
isPersonalizedSpatializationEnabled(selectedAudioDevice: AudioDeviceDescriptor): boolean
```

Checks whether the personalized spatialization is enabled by the specified device.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| selectedAudioDevice | AudioDeviceDescriptor | 是 | Audio device description. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the Personalized spatialization is successfully enabled;  returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## isPersonalizedSpatializationSupported

```TypeScript
isPersonalizedSpatializationSupported(): boolean
```

Checks whether personalized spatialization is supported by system.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether personalized spatialization is supported by system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

## isSpatializationEnabled

```TypeScript
isSpatializationEnabled(): boolean
```

Checks whether the spatialization is enabled.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.multimedia.audio.AudioSpatializationManager#isSpatializationEnabled

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the spatialization is enabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let isSpatializationEnabled: boolean = audioSpatializationManager.isSpatializationEnabled();
  console.info(`AudioSpatializationManager isSpatializationEnabled: ${isSpatializationEnabled}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`ERROR: ${error}`);
}

```

## isSpatializationEnabled

```TypeScript
isSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor): boolean
```

Checks whether the spatialization is enabled by the specified device.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceDescriptor | AudioDeviceDescriptor | 是 | Audio device description. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the spatialization is enabled by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let deviceDescriptor: audio.AudioDeviceDescriptor = {
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.BLUETOOTH_A2DP,
  id : 1,
  name : "",
  address : "123",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : ""
};

try {
  let isSpatializationEnabled: boolean = audioSpatializationManager.isSpatializationEnabled(deviceDescriptor);
  console.info(`AudioSpatializationManager isSpatializationEnabled: ${isSpatializationEnabled}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`ERROR: ${error}`);
}

```

## isSpatializationEnabledForCurrentDevice

```TypeScript
isSpatializationEnabledForCurrentDevice(): boolean
```

Checks whether spatial audio rendering is enabled for the current device. This API returns the result synchronously.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether spatial audio rendering is enabled. true if enabled, false  otherwise. |

## isSpatializationSupported

```TypeScript
isSpatializationSupported(): boolean
```

Checks whether spatialization is supported by system.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether spatialization is supported by system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';
try {
  let isSpatializationSupported: boolean = audioSpatializationManager.isSpatializationSupported();
  console.info(`AudioSpatializationManager isSpatializationSupported: ${isSpatializationSupported}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`ERROR: ${error}`);
}

```

## isSpatializationSupportedForDevice

```TypeScript
isSpatializationSupportedForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean
```

Checks whether spatialization is supported by the specified device.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceDescriptor | AudioDeviceDescriptor | 是 | Audio device description. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether spatialization is supported by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let deviceDescriptor: audio.AudioDeviceDescriptor = {
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.BLUETOOTH_A2DP,
  id : 1,
  name : "",
  address : "123",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : ""
};

try {
  let isSpatializationSupportedForDevice: boolean = audioSpatializationManager.isSpatializationSupportedForDevice(deviceDescriptor);
  console.info(`AudioSpatializationManager isSpatializationSupportedForDevice: ${isSpatializationSupportedForDevice}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`ERROR: ${error}`);
}

```

## off('spatializationEnabledChange')

```TypeScript
off(type: 'spatializationEnabledChange', callback?: Callback<boolean>): void
```

Unsubscribes to the spatialization enable state change events.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.multimedia.audio.AudioSpatializationManager#off

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'spatializationEnabledChange' | 是 | Type of the event to listen for. |
| callback | Callback&lt;boolean> | 否 | Callback used to get the spatialization enable state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
// 取消该事件的所有监听。
audioSpatializationManager.off('spatializationEnabledChange');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let spatializationEnabledChangeCallback = (isSpatializationEnabled: boolean) => {
  console.info(`isSpatializationEnabled: ${isSpatializationEnabled}`);
};

audioSpatializationManager.on('spatializationEnabledChange', spatializationEnabledChangeCallback);

audioSpatializationManager.off('spatializationEnabledChange', spatializationEnabledChangeCallback);

```

## off('spatializationEnabledChangeForAnyDevice')

```TypeScript
off(type: 'spatializationEnabledChangeForAnyDevice', callback?: Callback<AudioSpatialEnabledStateForDevice>): void
```

Unsubscribes to the spatialization enable state change events by the specified device.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'spatializationEnabledChangeForAnyDevice' | 是 | Type of the event to listen for. |
| callback | Callback&lt;AudioSpatialEnabledStateForDevice> | 否 | Callback used to get the spatialization enable  state by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

// 取消该事件的所有监听。
audioSpatializationManager.off('spatializationEnabledChangeForAnyDevice');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let spatializationEnabledChangeForAnyDeviceCallback = (audioSpatialEnabledStateForDevice: audio.AudioSpatialEnabledStateForDevice) => {
  console.info(`deviceDescriptor: ${audioSpatialEnabledStateForDevice.deviceDescriptor}`);
  console.info(`isSpatializationEnabled: ${audioSpatialEnabledStateForDevice.enabled}`);
};

audioSpatializationManager.on('spatializationEnabledChangeForAnyDevice', spatializationEnabledChangeForAnyDeviceCallback);

audioSpatializationManager.off('spatializationEnabledChangeForAnyDevice', spatializationEnabledChangeForAnyDeviceCallback);

```

## off('headTrackingEnabledChange')

```TypeScript
off(type: 'headTrackingEnabledChange', callback?: Callback<boolean>): void
```

Unsubscribes to the head tracking enable state change events.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.multimedia.audio.AudioSpatializationManager#off

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'headTrackingEnabledChange' | 是 | Type of the event to listen for. |
| callback | Callback&lt;boolean> | 否 | Callback used to get the head tracking enable state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

// 取消该事件的所有监听。
audioSpatializationManager.off('headTrackingEnabledChange');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let headTrackingEnabledChangeCallback = (isHeadTrackingEnabled: boolean) => {
  console.info(`isHeadTrackingEnabled: ${isHeadTrackingEnabled}`);
};

audioSpatializationManager.on('headTrackingEnabledChange', headTrackingEnabledChangeCallback);

audioSpatializationManager.off('headTrackingEnabledChange', headTrackingEnabledChangeCallback);

```

## off('headTrackingEnabledChangeForAnyDevice')

```TypeScript
off(type: 'headTrackingEnabledChangeForAnyDevice', callback?: Callback<AudioSpatialEnabledStateForDevice>): void
```

Unsubscribes to the head tracking enable state change events by the specified device.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'headTrackingEnabledChangeForAnyDevice' | 是 | Type of the event to listen for. |
| callback | Callback&lt;AudioSpatialEnabledStateForDevice> | 否 | Callback used to get the head tracking enable  state by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

// 取消该事件的所有监听。
audioSpatializationManager.off('headTrackingEnabledChangeForAnyDevice');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let headTrackingEnabledChangeForAnyDeviceCallback = (audioSpatialEnabledStateForDevice: audio.AudioSpatialEnabledStateForDevice) => {
  console.info(`deviceDescriptor: ${audioSpatialEnabledStateForDevice.deviceDescriptor}`);
  console.info(`isSpatializationEnabled: ${audioSpatialEnabledStateForDevice.enabled}`);
};

audioSpatializationManager.on('headTrackingEnabledChangeForAnyDevice', headTrackingEnabledChangeForAnyDeviceCallback);

audioSpatializationManager.off('headTrackingEnabledChangeForAnyDevice', headTrackingEnabledChangeForAnyDeviceCallback);

```

## off('spatializationEnabledChangeForCurrentDevice')

```TypeScript
off(type: 'spatializationEnabledChangeForCurrentDevice', callback?: Callback<boolean>): void
```

Unsubscribes from the spatial audio rendering status change event of the current device. This API uses an asynchronous callback to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'spatializationEnabledChangeForCurrentDevice' | 是 | Event type. The event  'spatializationEnabledChangeForCurrentDevice' is triggered when the spatial audio rendering status is  changed. |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offAdaptiveSpatialRenderingEnabledChangeForAnyDevice

```TypeScript
offAdaptiveSpatialRenderingEnabledChangeForAnyDevice(callback?: Callback<AudioSpatialEnabledStateForDevice>): void
```

Unsubscribes to the adaptive spatial rendering enable state change events by the specified device.

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioSpatialEnabledStateForDevice> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## offHeadTrackingEnabledChangeForAnyDevice

```TypeScript
offHeadTrackingEnabledChangeForAnyDevice(callback?: Callback<AudioSpatialEnabledStateForDevice>): void
```

Unsubscribes to the head tracking enable state change events by the specified device.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioSpatialEnabledStateForDevice> | 否 | Callback used to get  the head tracking enable state by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## offPersonalizedSpatializationEnabledChangeForAnyDevice

```TypeScript
offPersonalizedSpatializationEnabledChangeForAnyDevice(
        callback?: Callback<AudioPersonalizedSpatialEnabledChangeForAnyDevice>): void
```

Unsubscribes to the personalized spatialization enable state change events by the specified device.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioPersonalizedSpatialEnabledChangeForAnyDevice> | 否 | Callback used to get the personalized  spatialization enable state by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |

## offSpatialAudioSourceTypeChange

```TypeScript
offSpatialAudioSourceTypeChange(callback?: Callback<SpatialAudioSourceType>): void
```

Unsubscribes from the spatial audio source type change events.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SpatialAudioSourceType> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## offSpatializationEnabledChangeForAnyDevice

```TypeScript
offSpatializationEnabledChangeForAnyDevice(callback?: Callback<AudioSpatialEnabledStateForDevice>): void
```

Unsubscribes to the spatialization enable state change events by the specified device.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioSpatialEnabledStateForDevice> | 否 | Callback used to get the  spatialization enable state by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## offSpatializationEnabledChangeForCurrentDevice

```TypeScript
offSpatializationEnabledChangeForCurrentDevice(callback?: Callback<boolean>): void
```

Unsubscribes to the spatialization enable state change events by the current device.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 否 | Callback used to get the spatialization enable state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## on('spatializationEnabledChange')

```TypeScript
on(type: 'spatializationEnabledChange', callback: Callback<boolean>): void
```

Subscribes to the spatialization enable state change events. When the spatialization enable state changes, registered clients will receive the callback.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.multimedia.audio.AudioSpatializationManager#on

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'spatializationEnabledChange' | 是 | Type of the event to listen for. |
| callback | Callback&lt;boolean> | 是 | Callback used to get the spatialization enable state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

audioSpatializationManager.on('spatializationEnabledChange', (isSpatializationEnabled: boolean) => {
  console.info(`isSpatializationEnabled: ${isSpatializationEnabled}`);
});

```

## on('spatializationEnabledChangeForAnyDevice')

```TypeScript
on(type: 'spatializationEnabledChangeForAnyDevice', callback: Callback<AudioSpatialEnabledStateForDevice>): void
```

Subscribes to the spatialization enable state change events by the specified device. When the spatialization enable state changes, registered clients will receive the callback.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'spatializationEnabledChangeForAnyDevice' | 是 | Type of the event to listen for. |
| callback | Callback&lt;AudioSpatialEnabledStateForDevice> | 是 | Callback used to get the spatialization enable  state by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

audioSpatializationManager.on('spatializationEnabledChangeForAnyDevice', (audioSpatialEnabledStateForDevice: audio.AudioSpatialEnabledStateForDevice) => {
  console.info(`deviceDescriptor: ${audioSpatialEnabledStateForDevice.deviceDescriptor}`);
  console.info(`isSpatializationEnabled: ${audioSpatialEnabledStateForDevice.enabled}`);
});

```

## on('headTrackingEnabledChange')

```TypeScript
on(type: 'headTrackingEnabledChange', callback: Callback<boolean>): void
```

Subscribes to the head tracking enable state change events. When the head tracking enable state changes, registered clients will receive the callback.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.multimedia.audio.AudioSpatializationManager#on

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'headTrackingEnabledChange' | 是 | Type of the event to listen for. |
| callback | Callback&lt;boolean> | 是 | Callback used to get the head tracking enable state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

audioSpatializationManager.on('headTrackingEnabledChange', (isHeadTrackingEnabled: boolean) => {
  console.info(`isHeadTrackingEnabled: ${isHeadTrackingEnabled}`);
});

```

## on('headTrackingEnabledChangeForAnyDevice')

```TypeScript
on(type: 'headTrackingEnabledChangeForAnyDevice', callback: Callback<AudioSpatialEnabledStateForDevice>): void
```

Subscribes to the head tracking enable state change events by the specified device. When the head tracking enable state changes, registered clients will receive the callback.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'headTrackingEnabledChangeForAnyDevice' | 是 | Type of the event to listen for. |
| callback | Callback&lt;AudioSpatialEnabledStateForDevice> | 是 | Callback used to get the head tracking enable  state by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

audioSpatializationManager.on('headTrackingEnabledChangeForAnyDevice', (audioSpatialEnabledStateForDevice: audio.AudioSpatialEnabledStateForDevice) => {
  console.info(`deviceDescriptor: ${audioSpatialEnabledStateForDevice.deviceDescriptor}`);
  console.info(`isSpatializationEnabled: ${audioSpatialEnabledStateForDevice.enabled}`);
});

```

## on('spatializationEnabledChangeForCurrentDevice')

```TypeScript
on(type: 'spatializationEnabledChangeForCurrentDevice', callback: Callback<boolean>): void
```

Subscribes to the spatial audio rendering status change event of the current device. This API uses an asynchronous callback to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'spatializationEnabledChangeForCurrentDevice' | 是 | Event type. The event  'spatializationEnabledChangeForCurrentDevice' is triggered when the spatial audio rendering status is  changed. |
| callback | Callback&lt;boolean> | 是 | Callback used to return the result, indicating whether spatial audio  rendering is enabled. true if enabled, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onAdaptiveSpatialRenderingEnabledChangeForAnyDevice

```TypeScript
onAdaptiveSpatialRenderingEnabledChangeForAnyDevice(callback: Callback<AudioSpatialEnabledStateForDevice>): void
```

Subscribes to the adaptive spatial rendering enable state change events by the specified device. When the adaptive spatial rendering enable state changes, registered clients will receive the callback.

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioSpatialEnabledStateForDevice> | 是 | Callback used to get the adaptive spatial  rendering enable state by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## onHeadTrackingEnabledChangeForAnyDevice

```TypeScript
onHeadTrackingEnabledChangeForAnyDevice(callback: Callback<AudioSpatialEnabledStateForDevice>): void
```

Subscribes to the head tracking enable state change events by the specified device. When the head tracking enable state changes, registered clients will receive the callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioSpatialEnabledStateForDevice> | 是 | Callback used to get the head  tracking enable state by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## onPersonalizedSpatializationEnabledChangeForAnyDevice

```TypeScript
onPersonalizedSpatializationEnabledChangeForAnyDevice(
        callback: Callback<AudioPersonalizedSpatialEnabledChangeForAnyDevice>): void
```

Subscribes to the personalized spatialization enable state change events by the specified device. When the state changes, registered clients will receive the callback.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioPersonalizedSpatialEnabledChangeForAnyDevice> | 是 | Callback used to get the personalized  spatialization enable state by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

## onSpatialAudioSourceTypeChange

```TypeScript
onSpatialAudioSourceTypeChange(callback: Callback<SpatialAudioSourceType>): void
```

Subscribes to the spatial audio source type change events. When the current spatial audio source type changes, registered clients will receive callbacks.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SpatialAudioSourceType> | 是 | Callback used to  receive the current spatial audio source type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## onSpatializationEnabledChangeForAnyDevice

```TypeScript
onSpatializationEnabledChangeForAnyDevice(callback: Callback<AudioSpatialEnabledStateForDevice>): void
```

Subscribes to the spatialization enable state change events by the specified device. When the spatialization enable state changes, registered clients will receive the callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioSpatialEnabledStateForDevice> | 是 | Callback used to get the  spatialization enable state by the specified device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## onSpatializationEnabledChangeForCurrentDevice

```TypeScript
onSpatializationEnabledChangeForCurrentDevice(callback: Callback<boolean>): void
```

Subscribes to the spatialization enable state change events by the current device. When the spatialization enable state changes, registered clients will receive the callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 | Callback used to get the spatialization enable state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## setAdaptiveSpatialRenderingEnabled

```TypeScript
setAdaptiveSpatialRenderingEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>
```

Sets the adaptive spatial rendering enabled or disabled by the specified device. This method uses a promise to return the result. When the adaptive spatial rendering is enabled, spatial audio rendering will not take effect on stereo audio.

**起始版本：** 24

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceDescriptor | AudioDeviceDescriptor | 是 | The target device  to be set adaptive spatial rendering enabled. |
| enabled | boolean | 是 | Adaptive spatial rendering enable state. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. Return by promise. |
| 202 | Not system App. |
| 801 | Capability not supported on the device. |
| 6800101 | Parameter verification failed. |

## setHeadTrackingEnabled

```TypeScript
setHeadTrackingEnabled(enable: boolean, callback: AsyncCallback<void>): void
```

Sets the head tracking enabled or disabled. This method uses an asynchronous callback to return the result.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.multimedia.audio.AudioSpatializationManager#setHeadTrackingEnabled

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Head tracking enable state. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. Return by callback. |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let enable: boolean = true;

audioSpatializationManager.setHeadTrackingEnabled(enable, (err: BusinessError) => {
  if (err) {
    console.error(`Result ERROR: ${err}`);
  } else {
    console.info(`setHeadTrackingEnabled success`);
  }
});

```

## setHeadTrackingEnabled

```TypeScript
setHeadTrackingEnabled(enable: boolean): Promise<void>
```

Sets the head tracking enabled or disabled. This method uses a promise to return the result.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.multimedia.audio.AudioSpatializationManager#setHeadTrackingEnabled

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Head tracking enable state. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. Return by promise. |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let enable: boolean = true;

audioSpatializationManager.setHeadTrackingEnabled(enable).then(() => {
  console.info(`setHeadTrackingEnabled success`);
}).catch((err: BusinessError) => {
  console.error(`Result ERROR: ${err}`);
});

```

## setHeadTrackingEnabled

```TypeScript
setHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>
```

Sets the head tracking enabled or disabled by the specified device. This method uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceDescriptor | AudioDeviceDescriptor | 是 | Audio device description. |
| enabled | boolean | 是 | Head tracking enable state. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. Return by promise. |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let deviceDescriptor: audio.AudioDeviceDescriptor = {
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.BLUETOOTH_A2DP,
  id : 1,
  name : "",
  address : "123",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : ""
};
let enable: boolean = true;

audioSpatializationManager.setHeadTrackingEnabled(deviceDescriptor, enable).then(() => {
  console.info(`setHeadTrackingEnabled success`);
}).catch((err: BusinessError) => {
  console.error(`Result ERROR: ${err}`);
});

```

## setPersonalizedSpatializationEnabled

```TypeScript
setPersonalizedSpatializationEnabled(selectedAudioDevice: AudioDeviceDescriptor, enable: boolean): Promise<void>
```

Set the personalized spatialization enabled or disabled by the specified device.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| selectedAudioDevice | AudioDeviceDescriptor | 是 | Audio device description. |
| enable | boolean | 是 | Whether to enable personalized spatialization. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. Return by promise. |
| 202 | Not system App. |
| 801 | Capability not supported on the device. |

## setSpatializationEnabled

```TypeScript
setSpatializationEnabled(enable: boolean, callback: AsyncCallback<void>): void
```

Sets the spatialization enabled or disabled. This method uses an asynchronous callback to return the result.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.multimedia.audio.AudioSpatializationManager#setSpatializationEnabled

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Spatialization enable state. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. Return by callback. |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let enable: boolean = true;

audioSpatializationManager.setSpatializationEnabled(enable, (err: BusinessError) => {
  if (err) {
    console.error(`Result ERROR: ${err}`);
  } else {
    console.info(`setSpatializationEnabled success`);
  }
});

```

## setSpatializationEnabled

```TypeScript
setSpatializationEnabled(enable: boolean): Promise<void>
```

Sets the spatialization enabled or disabled. This method uses a promise to return the result.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.multimedia.audio.AudioSpatializationManager#setSpatializationEnabled

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Spatialization enable state. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. Return by promise. |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let enable: boolean = true;

audioSpatializationManager.setSpatializationEnabled(enable).then(() => {
  console.info(`setSpatializationEnabled success`);
}).catch((err: BusinessError) => {
  console.error(`Result ERROR: ${err}`);
});

```

## setSpatializationEnabled

```TypeScript
setSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>
```

Sets the spatialization enabled or disabled by the specified device. This method uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceDescriptor | AudioDeviceDescriptor | 是 | Audio device description. |
| enabled | boolean | 是 | Spatialization enable state. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. Return by promise. |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let deviceDescriptor: audio.AudioDeviceDescriptor = {
  deviceRole : audio.DeviceRole.OUTPUT_DEVICE,
  deviceType : audio.DeviceType.BLUETOOTH_A2DP,
  id : 1,
  name : "",
  address : "123",
  sampleRates : [44100],
  channelCounts : [2],
  channelMasks : [0],
  networkId : audio.LOCAL_NETWORK_ID,
  interruptGroupId : 1,
  volumeGroupId : 1,
  displayName : ""
};
let enabled: boolean = true;

audioSpatializationManager.setSpatializationEnabled(deviceDescriptor, enabled).then(() => {
  console.info(`setSpatializationEnabled success`);
}).catch((err: BusinessError) => {
  console.error(`Result ERROR: ${err}`);
});

```

## setSpatializationSceneType

```TypeScript
setSpatializationSceneType(spatializationSceneType: AudioSpatializationSceneType): void
```

Set spatialization rendering scene type.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| spatializationSceneType | AudioSpatializationSceneType | 是 | Spatialization scene type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  audioSpatializationManager.setSpatializationSceneType(audio.AudioSpatializationSceneType.DEFAULT);
  console.info(`AudioSpatializationManager setSpatializationSceneType success`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`ERROR: ${error}`);
}

```

## updateSpatialDeviceState

```TypeScript
updateSpatialDeviceState(spatialDeviceState: AudioSpatialDeviceState): void
```

Updates the spatial device state.

**起始版本：** 11

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| spatialDeviceState | AudioSpatialDeviceState | 是 | Spatial device state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let spatialDeviceState: audio.AudioSpatialDeviceState = {
  address: "123",
  isSpatializationSupported: true,
  isHeadTrackingSupported: true,
  spatialDeviceType: audio.AudioSpatialDeviceType.SPATIAL_DEVICE_TYPE_IN_EAR_HEADPHONE
};

try {
  audioSpatializationManager.updateSpatialDeviceState(spatialDeviceState);
  console.info(`AudioSpatializationManager updateSpatialDeviceState success`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`ERROR: ${error}`);
}

```

