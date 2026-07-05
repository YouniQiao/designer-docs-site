# AVRecorder

音视频录制管理类，用于音视频媒体录制。在调用AVRecorder的方法前，需要先调用 [createAVRecorder](arkts-media-createavrecorder-f.md#createAVRecorder-1)接口构建一个 AVRecorder实例。 音视频录制demo可参考：[音频录制开发指导](docroot://media/media/using-avrecorder-for-recording.md)、 [视频录制开发指导](docroot://media/media/video-recording.md)。 > **说明：** > > - 本Interface首批接口从API version 9开始支持。 > > - 相机视频录制功能需配合相机模块使用，相机模块接口的使用详情请参考[相机管理](../../apis-camera-kit/arkts-apis/arkts-multimedia-camera.md#camera)。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## addWatermark

```TypeScript
addWatermark(watermark: image.PixelMap, config: WatermarkConfiguration): Promise<int>
```

add a watermark for the AVRecorder. This API uses a promise to return the result. App can add up to 5 watermarks. This API can be called only before the prepared state.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| watermark | image.PixelMap | Yes | : Watermark image. |
| config | WatermarkConfiguration | Yes | : Configuration of the watermark. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise that returns the watermark id. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |
| 5400108 | The parameter check failed, parameter value out of range. |

## getAudioCapturerMaxAmplitude

```TypeScript
getAudioCapturerMaxAmplitude(callback: AsyncCallback<int>): void
```

获取当前音频最大振幅。使用callback异步回调。 在[prepare](arkts-media-avrecorder-i.md#prepare)接口成功调用后，才能调用此接 口。在[stop](arkts-media-avrecorder-i.md#stop)接口成功调用后，调用此接口会报错。 调用接口时，获取到的返回值是上一次获取最大振幅的时刻到当前这段区间内的音频最大振幅。例如，在1s时获取了一次最大振幅，到2s时再获取到的最大振幅是1-2s这个区间里面的最大值。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | Yes | 回调函数。获取当前音频最大振幅成功时，err为undefined，data为获取到的最大振幅，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400105 | Service died. Return by callback. |

## getAudioCapturerMaxAmplitude

```TypeScript
getAudioCapturerMaxAmplitude(): Promise<int>
```

获取当前音频最大振幅。使用Promise异步回调。 在[prepare](arkts-media-avrecorder-i.md#prepare)接口成功调用后，才能调用此接 口。在[stop](arkts-media-avrecorder-i.md#stop)接口成功调用后，调用此接口会报错。 调用接口时，获取到的返回值是上一次获取最大振幅的时刻到当前这段区间内的音频最大振幅。例如，在1s时获取了一次最大振幅，到2s时再获取到的最大振幅是1-2s这个区间里面的最大值。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回获取的当前音频最大振幅。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400105 | Service died. Return by promise. |

## getAvailableEncoder

```TypeScript
getAvailableEncoder(callback: AsyncCallback<Array<EncoderInfo>>): void
```

获取可用的编码器参数。使用callback异步回调。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;EncoderInfo>> | Yes | 回调函数。获取可用的编码器参数成功时，err为undefined，data为获取到的编码器参数，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400105 | Service died. Return by callback. |

## getAvailableEncoder

```TypeScript
getAvailableEncoder(): Promise<Array<EncoderInfo>>
```

获取可用的编码器参数。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;EncoderInfo>> | Promise对象，返回获取的可用的编码器参数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400105 | Service died. Return by promise. |

## getAVRecorderConfig

```TypeScript
getAVRecorderConfig(callback: AsyncCallback<AVRecorderConfig>): void
```

获取实时的配置参数。使用callback异步回调。 只能在[prepare](arkts-media-avrecorder-i.md#prepare)接口调用成功后调用。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVRecorderConfig> | Yes | 回调函数。获取实时配置的参数成功时，err为undefined，data为获取到的配置参数，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## getAVRecorderConfig

```TypeScript
getAVRecorderConfig(callback: AsyncCallback<AVRecorderConfig | undefined>): void
```

Obtains the real-time configuration of this AVRecorder. This API uses an asynchronous callback to return the result. This API can be called only after prepare() is called.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVRecorderConfig \| undefined> | Yes | Callback used to return the result.  If the operation is successful, err is undefined and data is the real-time configuration obtained  ;  otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## getAVRecorderConfig

```TypeScript
getAVRecorderConfig(): Promise<AVRecorderConfig>
```

获取实时的配置参数。使用Promise异步回调。 只能在[prepare](arkts-media-avrecorder-i.md#prepare)接口调用成功后调用。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVRecorderConfig> | Promise对象。返回实时配置参数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## getAVRecorderConfig

```TypeScript
getAVRecorderConfig(): Promise<AVRecorderConfig | undefined>
```

Obtains the real-time configuration of this AVRecorder. This API uses a promise to return the result. This API can be called only after prepare() is called.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVRecorderConfig \| undefined> | Promise used to return the real-time configuration. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## getCurrentAudioCapturerInfo

```TypeScript
getCurrentAudioCapturerInfo(callback: AsyncCallback<audio.AudioCapturerChangeInfo>): void
```

获取当前音频采集参数。使用callback异步回调。 在[prepare](arkts-media-avrecorder-i.md#prepare)接口成功调用后，才能调用此接 口。在[stop](arkts-media-avrecorder-i.md#stop)接口成功调用后，调用此接口会报错。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;audio.AudioCapturerChangeInfo> | Yes | 回调函数。当获取音频采集参数成功时，err为undefined，data为获取到的  audio.AudioCapturerChangeInfo，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400105 | Service died. Return by callback. |

## getCurrentAudioCapturerInfo

```TypeScript
getCurrentAudioCapturerInfo(callback: AsyncCallback<audio.AudioCapturerChangeInfo | undefined>): void
```

Obtains the information about the current audio capturer. This API uses an asynchronous callback to return the result. This API can be called only after the **prepare()** API is called. If this API is called after **stop()** is successfully called, an error is reported.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;audio.AudioCapturerChangeInfo \| undefined> | Yes | Callback used to return the  result.  If the operation is successful, err is undefined and data is the  audio.AudioCapturerChangeInfo object obtained; otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400105 | Service died. Return by callback. |

## getCurrentAudioCapturerInfo

```TypeScript
getCurrentAudioCapturerInfo(): Promise<audio.AudioCapturerChangeInfo>
```

获取当前音频采集参数。使用Promise异步回调。 在[prepare](arkts-media-avrecorder-i.md#prepare)接口成功调用后，才能调用此接 口。在[stop](arkts-media-avrecorder-i.md#stop)接口成功调用后，调用此接口会报错。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;audio.AudioCapturerChangeInfo> | Promise对象，返回获取的当前音频采集参数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400105 | Service died. Return by promise. |

## getCurrentAudioCapturerInfo

```TypeScript
getCurrentAudioCapturerInfo(): Promise<audio.AudioCapturerChangeInfo | undefined>
```

Obtains the information about the current audio capturer. This API uses a promise to return the result. This API can be called only after the **prepare()** API is called. If this API is called after **stop()** is successfully called, an error is reported.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;audio.AudioCapturerChangeInfo \| undefined> | Promise used to return the audio capturer  information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400105 | Service died. Return by promise. |

## getInputMetaSurface

```TypeScript
getInputMetaSurface(type: MetaSourceType): Promise<string>
```

Get input meta surface for specified meta source type. it must be called between prepare completed and start.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | MetaSourceType | Yes | Meta source type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | A Promise instance used to return the input surface id in string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called from Non-System applications. Return by promise. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## getInputMetaSurface

```TypeScript
getInputMetaSurface(type: MetaSourceType): Promise<string | undefined>
```

Get input meta surface for specified meta source type. it must be called between prepare completed and start.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | MetaSourceType | Yes | Meta source type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string \| undefined> | A Promise instance used to return the input surface id in string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called from Non-System applications. Return by promise. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## getInputSurface

```TypeScript
getInputSurface(callback: AsyncCallback<string>): void
```

获得录制需要的surface。使用callback异步回调。 开发者从此surface中获取surfaceBuffer，填入相应的视频数据。 应当注意，填入的视频数据需要携带时间戳（单位ns）和buffersize。时间戳的起始时间请以系统启动时间为基准。 需在[prepare](arkts-media-avrecorder-i.md#prepare)接口成功调用后，才能调用 getInputSurface接口。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。当获取surface成功，err为undefined，data为获取到的surfaceId，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## getInputSurface

```TypeScript
getInputSurface(callback: AsyncCallback<string | undefined>): void
```

Obtains the surface required for recording. This API uses an asynchronous callback to return the result. The caller obtains the **surfaceBuffer** from this surface and fills in the corresponding video data. Note that the video data must carry the timestamp (in ns) and buffer size, and the start time of the timestamp must be based on the system startup time. This API can be called only after the prepare() API is called.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string \| undefined> | Yes | Callback used to return the result.  If the operation is successful, err is undefined and data is the surface ID obtained;  otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## getInputSurface

```TypeScript
getInputSurface(): Promise<string>
```

获得录制需要的surface。使用Promise异步回调。 开发者从此surface中获取surfaceBuffer，填入相应的视频数据。 应当注意，填入的视频数据需要携带时间戳（单位ns）和buffersize。时间戳的起始时间请以系统启动时间为基准。 需在[prepare](arkts-media-avrecorder-i.md#prepare)接口成功调用后，才能调用getInputSurface接口。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回surface中获取的surfaceBuffer。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## getInputSurface

```TypeScript
getInputSurface(): Promise<string | undefined>
```

Obtains the surface required for recording. This API uses a promise to return the result. The caller obtains the **surfaceBuffer** from this surface and fills in the corresponding video data. Note that the video data must carry the timestamp (in ns) and buffer size, and the start time of the timestamp must be based on the system startup time. This API can be called only after the prepare() API is called.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string \| undefined> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## isWatermarkSupported

```TypeScript
isWatermarkSupported(): Promise<boolean>
```

Checks whether the device supports the hardware digital watermark. This API uses a promise to return the result. This API can be called after the prepare(), start(), or paused() event is triggered.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the check result. The value true means that  the device supports the hardware digital watermark, and false means the opposite. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

avRecorder.isWatermarkSupported().then((isWatermarkSupported: boolean) => {
  console.info(`Succeeded in get, isWatermarkSupported: ${isWatermarkSupported}`);
}).catch((error: BusinessError) => {
  console.error(`Failed to get and catch error is ${error.message}`);
});

```

## off('stateChange')

```TypeScript
off(type: 'stateChange', callback?: OnAVRecorderStateChangeHandler): void
```

取消订阅录制状态机[AVRecorderState](arkts-media-avrecorderstate-t.md#AVRecorderState)切换的事件。使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | 录制状态机切换事件回调类型，支持的事件：'stateChange'，用户操作和系统都会触发此事件。 |
| callback | OnAVRecorderStateChangeHandler | No | 回调函数，返回录制状态机切换事件。如果指定参数则取消对应callback（callback对象不能是匿名函数），否则取消  所有callback。 从API version 12开始支持此参数。 [since 12] |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

取消订阅录制错误事件，取消后不再接收到AVRecorder的错误事件。使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | 录制错误事件回调类型'error'。 - 'error'：录制过程中发生错误，触发该事件。 |
| callback | ErrorCallback | No | 回调函数，返回录制错误事件。如果指定参数则取消对应callback（callback对象不能是匿名函数），否则取消所有callback。 从API  version 12开始支持此参数。 [since 12] |

## off('audioCapturerChange')

```TypeScript
off(type: 'audioCapturerChange', callback?: Callback<audio.AudioCapturerChangeInfo>): void
```

取消订阅录音变化的回调事件。使用callback异步回调。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | Yes | 录音配置变化的回调类型，支持的事件：'audioCapturerChange'。 |
| callback | Callback&lt;audio.AudioCapturerChangeInfo> | No | 回调函数，返回变化后的录音配置全量信息。如果指定参数则取消对应callback（callback对象不  能是匿名函数），否则取消所有callback。 从API version 12开始支持此参数。 [since 12] |

## off('photoAssetAvailable')

```TypeScript
off(type: 'photoAssetAvailable', callback?: Callback<photoAccessHelper.PhotoAsset>): void
```

取消订阅媒体资源的回调类型。使用callback异步回调。

**Since:** 12

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAssetAvailable' | Yes | 录音配置变化的回调类型，支持的事件：'photoAssetAvailable'。 |
| callback | Callback&lt;photoAccessHelper.PhotoAsset> | No | 回调函数，返回系统创建的资源文件对应的PhotoAsset对象。如果指定参数则取消对应callback（  callback对象不能是匿名函数），否则取消所有callback。 |

## offAudioCapturerChange

```TypeScript
offAudioCapturerChange(callback?: Callback<audio.AudioCapturerChangeInfo>): void
```

Subscribes to audio capturer configuration changes.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;audio.AudioCapturerChangeInfo> | No |  |

## offError

```TypeScript
offError(callback?: ErrorCallback): void
```

Unsubscribes from AVRecorder errors. After the unsubscription, your application can no longer receive AVRecorder errors.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | No |  |

## offPhotoAssetAvailable

```TypeScript
offPhotoAssetAvailable(callback?: Callback<photoAccessHelper.PhotoAsset>): void
```

Unsubscribes from media asset callback events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;photoAccessHelper.PhotoAsset> | No |  |

## offStateChange

```TypeScript
offStateChange(callback?: OnAVRecorderStateChangeHandler): void
```

Unsubscribes from AVRecorder state changes. This event can be triggered by both user operations and the system.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnAVRecorderStateChangeHandler | No |  |

## on('audioCapturerChange')

```TypeScript
on(type: 'audioCapturerChange', callback: Callback<audio.AudioCapturerChangeInfo>): void
```

订阅录音配置变化的回调，任意录音配置的变化会触发变化后的录音配置全量信息回调。使用callback异步回调。 当用户重复订阅时，以最后一次订阅的回调接口为准。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | Yes | 录音配置变化的回调类型，支持的事件：'audioCapturerChange'。 |
| callback | Callback&lt;audio.AudioCapturerChangeInfo> | Yes | 回调函数，返回变化后的录音配置全量信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

## on('photoAssetAvailable')

```TypeScript
on(type: 'photoAssetAvailable', callback: Callback<photoAccessHelper.PhotoAsset>): void
```

订阅媒体资源回调事件，当[FileGenerationMode](arkts-media-filegenerationmode-e.md#FileGenerationMode)枚举设置为系统创建媒体文件时，会在 [stop](arkts-media-avrecorder-i.md#stop)操作结束后把 [PhotoAsset](../../apis-media-library-kit/arkts-apis/arkts-file-photoaccesshelper.md#photoAccessHelper)对象回调给应用。使用callback异步回调。 当用户重复订阅时，以最后一次订阅的回调接口为准。

**Since:** 12

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAssetAvailable' | Yes | 录像资源的回调类型，支持的事件：'photoAssetAvailable'。 |
| callback | Callback&lt;photoAccessHelper.PhotoAsset> | Yes | 回调函数，返回系统创建的资源文件对应的PhotoAsset对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## on('stateChange')

```TypeScript
on(type: 'stateChange', callback: OnAVRecorderStateChangeHandler): void
```

订阅录制状态机AVRecorderState切换的事件，当AVRecorderState状态机发生变化时，会通过订阅的回调方法通知用户。用户只能订阅一个录制状态机切换事件的回调方法，当用户重复订阅时，以最后一次订阅的回调接口为 准。使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | 录制状态机切换事件回调类型，支持的事件：'stateChange'，用户操作和系统都会触发此事件。 |
| callback | OnAVRecorderStateChangeHandler | Yes | 回调函数，返回录制状态机切换事件。 [since 12] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

订阅AVRecorder的错误事件，该事件仅用于错误提示，不需要用户停止播控动作。如果此时 [AVRecorderState](arkts-media-avrecorderstate-t.md#AVRecorderState)也切换至error状态，用户需要通过 [reset](arkts-media-avrecorder-i.md#reset)或者 [release](arkts-media-avrecorder-i.md#release)接口退出录制操作。使用callback异步回调。 用户只能订阅一个错误事件的回调方法，当用户重复订阅时，以最后一次订阅的回调接口为准。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | 录制错误事件回调类型'error'。 - 'error'：录制过程中发生错误，触发该事件。 |
| callback | ErrorCallback | Yes | 回调函数，返回录制错误事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 5400101 | No memory. |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400104 | Time out. |
| 5400105 | Service died. |
| 5400106 | Unsupported format. |
| 5400107 | Audio interrupted. [since 11] |

## onAudioCapturerChange

```TypeScript
onAudioCapturerChange(callback: Callback<audio.AudioCapturerChangeInfo>): void
```

Subscribes to audio capturer configuration changes. Any configuration change triggers the callback that returns the entire configuration information. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;audio.AudioCapturerChangeInfo> | Yes | Callback used to return the entire configuration  information about the audio capturer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

## onError

```TypeScript
onError(callback: ErrorCallback): void
```

Subscribes to AVRecorder errors. This event is used only for error prompt and does not require the user to stop recording control. If the AVRecorderState is also switched to error, call reset() or release() to exit the recording. An application can subscribe to only one AVRecorder error event. When the application initiates multiple subscriptions to this event, the last subscription is applied. This event is triggered when an error occurs during recording.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | Yes | Callback invoked when the event is triggered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 5400101 | No memory. |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400104 | Time out. |
| 5400105 | Service died. |
| 5400106 | Unsupported format. |
| 5400107 | Audio interrupted. |

## onPhotoAssetAvailable

```TypeScript
onPhotoAssetAvailable(callback: Callback<photoAccessHelper.PhotoAsset>): void
```

Subscribes to media asset callback events. When FileGenerationMode is used during media file creation, the PhotoAsset object is called back to the application after the stop operation is complete. When the application initiates multiple subscriptions to this event, the last subscription is applied. The event is triggered when a photo asset is available.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;photoAccessHelper.PhotoAsset> | Yes | Callback used to return the  PhotoAsset object corresponding to the resource file created by the system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## onStateChange

```TypeScript
onStateChange(callback: OnAVRecorderStateChangeHandler): void
```

Subscribes to AVRecorder state changes. An application can subscribe to only one AVRecorder state change event. When the application initiates multiple subscriptions to this event, the last subscription is applied. This event can be triggered by both user operations and the system.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnAVRecorderStateChangeHandler | Yes | Callback invoked when the event is triggered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## pause

```TypeScript
pause(callback: AsyncCallback<void>): void
```

暂停视频录制。使用callback异步回调。 需要[start](arkts-media-avrecorder-i.md#start)接口成功调用后，才能调用pause接口，可以通过调用 [resume](arkts-media-avrecorder-i.md#resume)接口来恢复录制。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当暂停视频录制成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## pause

```TypeScript
pause(): Promise<void>
```

暂停视频录制。使用Promise异步回调。 需要[start](arkts-media-avrecorder-i.md#start)接口成功调用后，才能调用pause接口，可以通过调用[resume](arkts-media-avrecorder-i.md#resume)接口来恢复 录制。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## prepare

```TypeScript
prepare(config: AVRecorderConfig, callback: AsyncCallback<void>): void
```

音视频录制的参数设置。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.MICROPHONE

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | AVRecorderConfig | Yes | 配置音视频录制的相关参数。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当prepare接口成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Return by callback. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 5400102 | Operate not permit. Return by callback. |
| 5400105 | Service died. Return by callback. |

## prepare

```TypeScript
prepare(config: AVRecorderConfig): Promise<void>
```

音视频录制的参数设置。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

- API version9  to  11: ohos.permission.MICROPHONE

- API version12 and later: ohos.permission.MICROPHONE * This permission is required only if audio recording is involved.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | AVRecorderConfig | Yes | 配置音视频录制的相关参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Return by promise. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 5400102 | Operate not permit. Return by promise. |
| 5400105 | Service died. Return by promise. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

释放音视频录制资源。使用callback异步回调。 释放音视频录制资源之后，该AVRecorder实例不能再进行任何操作。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当释放音视频录制资源成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400105 | Service died. Return by callback. |

## release

```TypeScript
release(): Promise<void>
```

释放音视频录制资源。使用Promise异步回调。 释放音视频录制资源之后，该AVRecorder实例不能再进行任何操作。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400105 | Service died. Return by callback. |

## reset

```TypeScript
reset(callback: AsyncCallback<void>): void
```

重置音视频录制。使用callback异步回调。 纯音频录制时，需要重新调用[prepare](arkts-media-avrecorder-i.md#prepare)接口 才能重新录制。纯视频录制，音视频录制时，需要重新调用 [prepare](arkts-media-avrecorder-i.md#prepare)和 [getInputSurface](arkts-media-avrecorder-i.md#getInputSurface)接口才能重新录制。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当重置音视频录制成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## reset

```TypeScript
reset(): Promise<void>
```

重置音视频录制。使用Promise异步回调。 纯音频录制时，需要重新调用[prepare](arkts-media-avrecorder-i.md#prepare)接口才能重新录制。纯视频录制，音视频录制时，需要重新调用 [prepare](arkts-media-avrecorder-i.md#prepare)和 [getInputSurface](arkts-media-avrecorder-i.md#getInputSurface)接口才能重新录制。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## resume

```TypeScript
resume(callback: AsyncCallback<void>): void
```

恢复视频录制。使用callback异步回调。 需要在[pause](arkts-media-avrecorder-i.md#pause)接口成功调用后，才能调用resume接口。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当恢复视频录制成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## resume

```TypeScript
resume(): Promise<void>
```

恢复视频录制。使用Promise异步回调。 需要在[pause](arkts-media-avrecorder-i.md#pause)接口成功调用后，才能调用resume接口。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## setMetadata

```TypeScript
setMetadata(metadata: Record<string, string>): void
```

设置录制的元数据信息。如果这些信息的键相同，会覆盖config.metadata.customInfo（参考 [prepare()](arkts-media-avrecorder-i.md#prepare)和 [AVRecorderConfig](arkts-media-avrecorderconfig-i.md#AVRecorderConfig)）中的值。 该方法只能在[prepare()](arkts-media-avrecorder-i.md#prepare)事件成功触发后，且必须在 [stop()](arkts-media-avrecorder-i.md#stop)之前调用。

**Since:** 19

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| metadata | Record&lt;string, string> | Yes | 录制的元数据信息。 格式为字符串键值对，其中，键需要以`com.openharmony.`开头，且值的长度不能超过256个字节。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. [since 19 - 24] |
| 5400101 | No memory. [since 26.0.0] |
| 5400102 | Operation not allowed. [since 26.0.0] |
| 5400108 | Parameter check failed. [since 26.0.0] |

## setWatermark

```TypeScript
setWatermark(watermark: image.PixelMap, config: WatermarkConfig): Promise<void>
```

Sets a watermark for the AVRecorder. This API uses a promise to return the result. This API can be called only after the prepare() event is triggered and before the start() event is triggered.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| watermark | image.PixelMap | Yes | : Watermark image. |
| config | WatermarkConfig | Yes | : Configures of the watermark. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

let watermark: image.PixelMap|undefined = undefined; // need data.
let watermarkConfig: media.WatermarkConfig = { top: 100, left: 100 }

avRecorder.setWatermark(watermark, watermarkConfig).then(() => {
  console.info('Succeeded in setWatermark');
}).catch((error: BusinessError) => {
  console.error(`Failed to setWatermark and catch error is ${error.message}`);
});

```

## setWillMuteWhenInterrupted

```TypeScript
setWillMuteWhenInterrupted(muteWhenInterrupted: boolean): Promise<void>
```

设置当前录制音频流是否启用静音打断模式。使用Promise异步回调。

**Since:** 20

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| muteWhenInterrupted | boolean | Yes | 设置当前录制音频流是否启用静音打断模式, true表示启用，false表示不启用，保持为默认打断模式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400105 | Service died. Return by promise. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

开始视频录制。使用callback异步回调。 纯音频录制需在[prepare](arkts-media-avrecorder-i.md#prepare)接口成功调用后， 才能调用start接口。纯视频录制，音视频录制需在 [getInputSurface](arkts-media-avrecorder-i.md#getInputSurface)接口成功调用后，才能调用start接口。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当开始录制视频成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## start

```TypeScript
start(): Promise<void>
```

开始视频录制。使用Promise异步回调。 纯音频录制需在[prepare](arkts-media-avrecorder-i.md#prepare)接口成功调用后，才能调用start接口。纯视频录制，音视频录制需在 [getInputSurface](arkts-media-avrecorder-i.md#getInputSurface)接口成功调用后，才能调用start接口。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

停止视频录制。使用callback异步回调。 需要在[start](arkts-media-avrecorder-i.md#start)或 [pause](arkts-media-avrecorder-i.md#pause)接口成功调用后，才能调用stop接口。 纯音频录制时，需要重新调用[prepare](arkts-media-avrecorder-i.md#prepare)接口 才能重新录制。纯视频录制，音视频录制时，需要重新调用 [prepare](arkts-media-avrecorder-i.md#prepare)和 [getInputSurface](arkts-media-avrecorder-i.md#getInputSurface)接口才能重新录制。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当停止视频录制成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## stop

```TypeScript
stop(): Promise<void>
```

停止视频录制。使用Promise异步回调。 需要在[start](arkts-media-avrecorder-i.md#start)或[pause](arkts-media-avrecorder-i.md#pause)接口成功调用后，才能调用stop接口。 纯音频录制时，需要重新调用[prepare](arkts-media-avrecorder-i.md#prepare)接口才能重新录制。纯视频录制，音视频录制时，需要重新调用 [prepare](arkts-media-avrecorder-i.md#prepare)和 [getInputSurface](arkts-media-avrecorder-i.md#getInputSurface)接口才能重新录制。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## updateRotation

```TypeScript
updateRotation(rotation: int): Promise<void>
```

更新视频旋转角度。使用Promise异步回调。 当且仅当[prepare](arkts-media-avrecorder-i.md#prepare)接口成功调用后，且在 [start](arkts-media-avrecorder-i.md#start)接口之前，才能调用updateRotation接口。

**Since:** 12

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rotation | int | Yes | 旋转角度，取值仅支持0、90、180、270度。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## state

```TypeScript
readonly state: AVRecorderState
```

音视频录制的状态。 **原子化服务API：** 从API version 12 开始，该接口支持在原子化服务中使用。

**Type:** AVRecorderState

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

