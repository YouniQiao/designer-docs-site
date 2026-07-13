# AudioRoutingManager

This interface implements audio routing management.

Before calling any API in AudioRoutingManager, you must use
[getRoutingManager](arkts-audio-audiomanager-i.md#getroutingmanager-1) to obtain an
AudioRoutingManager instance.

> **NOTE**
>
> - The initial APIs of this interface are supported since API version 9.

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

Declares the original device types that the application has adapted to.
By default, the system returns anonymous device types. This method allows applications to
declare which specific device types they have explicitly adapted to. Once declared, the system
will return the original device types to the application instead of the anonymous ones.
Note: This method only supports device types introduced from API 20 onwards (such as hearing aids
and nearlink devices). If this interface is not called for these new device types, the application
will only be able to obtain anonymous device types.
Legacy device types prior to API 20 do not need this declaration.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceTypes | DeviceTypeArray | Yes | Array of original device types the application has adapted to. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed, the param deviceTypes contains valuethat is invalid enum or is not device type introduced in API 20 onwards. |

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
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

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
| callback | AsyncCallback&lt;AudioDeviceDescriptors&gt; | Yes | Callback used to return the result. If the operationis successful, **err** is **undefined** and **data** is the audio devices obtained; otherwise, **err** is anerror object. |

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
| Promise&lt;AudioDeviceDescriptors&gt; | Promise used to return the device list. |

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
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## getPreferOutputDeviceForRendererInfo

```TypeScript
getPreferOutputDeviceForRendererInfo(rendererInfo: AudioRendererInfo, callback: AsyncCallback<AudioDeviceDescriptors>): void
```

Obtains the output device with the highest priority based on the audio renderer information. This API uses an
asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rendererInfo | AudioRendererInfo | Yes | Audio renderer information. |
| callback | AsyncCallback&lt;AudioDeviceDescriptors&gt; | Yes | Callback used to return the result. If the operationis successful, **err** is **undefined** and **data** is the output device with the highest priority obtained;otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. Return by callback. |
| [6800301](../errorcode-audio.md#6800301-system-error) | System error. Return by callback. |

## getPreferOutputDeviceForRendererInfo

```TypeScript
getPreferOutputDeviceForRendererInfo(rendererInfo: AudioRendererInfo): Promise<AudioDeviceDescriptors>
```

Obtains the output device with the highest priority based on the audio renderer information. This API uses a
promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rendererInfo | AudioRendererInfo | Yes | Audio renderer information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors&gt; | Promise used to return the information about the output device withthe highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. Return by promise. |
| [6800301](../errorcode-audio.md#6800301-system-error) | System error. Return by promise. |

## getPreferredInputDeviceForCapturerInfo

```TypeScript
getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: AsyncCallback<AudioDeviceDescriptors>): void
```

Obtains the input device with the highest priority based on the audio capturer information. This API uses an
asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capturerInfo | AudioCapturerInfo | Yes | Audio capturer information. |
| callback | AsyncCallback&lt;AudioDeviceDescriptors&gt; | Yes | Callback used to return the result. If the operationis successful, **err** is **undefined** and **data** is the input device with the highest priority obtained;otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. Return by callback. |
| [6800301](../errorcode-audio.md#6800301-system-error) | System error. Return by callback. |

## getPreferredInputDeviceForCapturerInfo

```TypeScript
getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo): Promise<AudioDeviceDescriptors>
```

Obtains the input device with the highest priority based on the audio capturer information. This API uses a
promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capturerInfo | AudioCapturerInfo | Yes | Audio capturer information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors&gt; | Promise used to return the information about the input device withthe highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. Return by promise. |
| [6800301](../errorcode-audio.md#6800301-system-error) | System error. Return by promise. |

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
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## getPreferredOutputDeviceForRendererInfoSync

```TypeScript
getPreferredOutputDeviceForRendererInfoSync(rendererInfo: AudioRendererInfo): AudioDeviceDescriptors
```

Obtains the output device with the highest priority based on the audio renderer information. This API returns the
result synchronously.

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
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

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
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is **true** if the device is active or **false** if not active;otherwise, **err** is an error object. |

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
| Promise&lt;boolean&gt; | Promise used to return the result, indicating whether the device is active.**true** if active, **false** otherwise. |

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
| boolean | Check result for whether the device is active. **true** if active, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## isMicBlockDetectionSupported

```TypeScript
isMicBlockDetectionSupported():Promise<boolean>
```

Checks whether the current device supports microphone blocking detection. This API uses a promise to return the
result.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Audio.Device

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result, indicating the support for microphone blockingdetection. **true** if supported, **false** otherwise. |

## off('deviceChange')

```TypeScript
off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void
```

Unsubscribes from the event indicating that the connection status of an audio device is changed. This API uses an
asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceChange' | Yes | Event type. The event **'deviceChange'** is triggered when the connection statusof an audio device is changed. |
| callback | Callback&lt;DeviceChangeAction&gt; | No | Callback used to return the device change details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## off('availableDeviceChange')

```TypeScript
off(type: 'availableDeviceChange', callback?: Callback<DeviceChangeAction>): void
```

Unsubscribes from the event indicating that the connection status of an available audio device is changed. This
API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'availableDeviceChange' | Yes | Event type. The event **'availableDeviceChange'** is triggered when theconnection status of available audio devices is changed. |
| callback | Callback&lt;DeviceChangeAction&gt; | No | Callback used to return the available device change details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## off('preferOutputDeviceChangeForRendererInfo')

```TypeScript
off(type: 'preferOutputDeviceChangeForRendererInfo', callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes from the change event of the output device with the highest priority. This API uses an asynchronous
callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'preferOutputDeviceChangeForRendererInfo' | Yes | Event type. The event**'preferOutputDeviceChangeForRendererInfo'** is triggered when the output device with the highest priorityis changed. |
| callback | Callback&lt;AudioDeviceDescriptors&gt; | No | Callback used to return the information about the outputdevice with the highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## off('preferredInputDeviceChangeForCapturerInfo')

```TypeScript
off(type: 'preferredInputDeviceChangeForCapturerInfo', callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes from the change event of the input device with the highest priority. This API uses an asynchronous
callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'preferredInputDeviceChangeForCapturerInfo' | Yes | Event type. The event**'preferredInputDeviceChangeForCapturerInfo'** is triggered when the input device with the highest priorityis changed. |
| callback | Callback&lt;AudioDeviceDescriptors&gt; | No | Callback used to return the information about the inputdevice with the highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## off('micBlockStatusChanged')

```TypeScript
off(type: 'micBlockStatusChanged', callback?: Callback<DeviceBlockStatusInfo>): void
```

Unsubscribes from the microphone blocked status change event. This API uses an asynchronous callback to return
the result.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'micBlockStatusChanged' | Yes | Event type. The event **'micBlockStatusChanged'** is triggeredwhen the microphone blocked status is changed. |
| callback | Callback&lt;DeviceBlockStatusInfo&gt; | No | Callback used to return the microphone blocked status anddevice information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('deviceChange')

```TypeScript
on(type: 'deviceChange', deviceFlag: DeviceFlag, callback: Callback<DeviceChangeAction>): void
```

Subscribes to the event indicating that the connection status of an audio device is changed. This API uses an
asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceChange' | Yes | Event type. The event **'deviceChange'** is triggered when the connection statusof an audio device is changed. |
| deviceFlag | DeviceFlag | Yes | Audio device flag. |
| callback | Callback&lt;DeviceChangeAction&gt; | Yes | Callback used to return the device change details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('availableDeviceChange')

```TypeScript
on(type: 'availableDeviceChange', deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void
```

Subscribes to the event indicating that the connection status of an available audio device is changed. This API
uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'availableDeviceChange' | Yes | Event type. The event **'availableDeviceChange'** is triggered when theconnection status of available audio devices is changed. |
| deviceUsage | DeviceUsage | Yes | Audio device type (classified by usage). |
| callback | Callback&lt;DeviceChangeAction&gt; | Yes | Callback used to return the device change details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('preferOutputDeviceChangeForRendererInfo')

```TypeScript
on(type: 'preferOutputDeviceChangeForRendererInfo', rendererInfo: AudioRendererInfo, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to the change event of the output device with the highest priority, which is triggered when the output
device with the highest priority is changed. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'preferOutputDeviceChangeForRendererInfo' | Yes | Event type. The event**'preferOutputDeviceChangeForRendererInfo'** is triggered when the output device with the highest priorityis changed. |
| rendererInfo | AudioRendererInfo | Yes | Audio renderer information. |
| callback | Callback&lt;AudioDeviceDescriptors&gt; | Yes | Callback used to return the information about the outputdevice with the highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('preferredInputDeviceChangeForCapturerInfo')

```TypeScript
on(type: 'preferredInputDeviceChangeForCapturerInfo', capturerInfo: AudioCapturerInfo, callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to the change event of the input device with the highest priority, which is triggered when the input
device with the highest priority is changed. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'preferredInputDeviceChangeForCapturerInfo' | Yes | Event type. The event**'preferredInputDeviceChangeForCapturerInfo'** is triggered when the input device with the highest priorityis changed. |
| capturerInfo | AudioCapturerInfo | Yes | Audio capturer information. |
| callback | Callback&lt;AudioDeviceDescriptors&gt; | Yes | Callback used to return the information about the inputdevice with the highest priority. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('micBlockStatusChanged')

```TypeScript
on(type: 'micBlockStatusChanged', callback: Callback<DeviceBlockStatusInfo>): void
```

Subscribes to the microphone blocked status change event. This API uses an asynchronous callback to return the
result.

Before using this API, check whether the current device supports microphone blocking detection. This event is
triggered when the microphone blocked status changes during recording. Currently, this API takes effect only for
the microphone on the local device.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'micBlockStatusChanged' | Yes | Event type. The event **'micBlockStatusChanged'** is triggered when themicrophone blocked status is changed. |
| callback | Callback&lt;DeviceBlockStatusInfo&gt; | Yes | Callback used to return the microphone blocked status anddevice information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## setCommunicationDevice

```TypeScript
setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean, callback: AsyncCallback<void>): void
```

Sets a communication device to the active state. This API uses an asynchronous callback to return the result.

This API will be deprecated in a later version due to function design is changed. You are not advised to use it.

You are advised to use the [AVCastPicker component](../../../../media/avsession/using-switch-call-devices.md)
provided by AVSession to switch between call devices.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | CommunicationDeviceType | Yes | Audio device flag. |
| active | boolean | Yes | Active state to set. **true** to set the device to the active state, **false**otherwise. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

## setCommunicationDevice

```TypeScript
setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean): Promise<void>
```

Sets a communication device to the active state. This API uses a promise to return the result.

This API will be deprecated in a later version due to function design is changed. You are not advised to use it.

You are advised to use the [AVCastPicker component](../../../../media/avsession/using-switch-call-devices.md)
provided by AVSession to switch between call devices.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | CommunicationDeviceType | Yes | Active audio device type. |
| active | boolean | Yes | Active state to set. **true** to set the device to the active state, **false**otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

