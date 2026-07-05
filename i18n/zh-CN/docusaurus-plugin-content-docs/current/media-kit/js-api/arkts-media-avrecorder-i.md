# AVRecorder

AVRecorder is a class for audio and video recording management. It provides APIs to record media assets. Before calling any API in AVRecorder, you must use [createAVRecorder()](arkts-media-createavrecorder-f.md#createAVRecorder-1) to create an AVRecorder instance. For details about the audio and video recording demo, see [Audio Recording](docroot://media/media/using-avrecorder-for-recording.md) and [Video Recording](docroot://media/media/video-recording.md). > **NOTE** > > > To use the camera to record videos, the camera module is required. For details about how to use the APIs > provided by the camera module, see [Camera Management](../../apis-camera-kit/arkts-apis/arkts-multimedia-camera.md#camera).

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## addWatermark

```TypeScript
addWatermark(watermark: image.PixelMap, config: WatermarkConfiguration): Promise<int>
```

add a watermark for the AVRecorder. This API uses a promise to return the result. App can add up to 5 watermarks. This API can be called only before the prepared state.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| watermark | image.PixelMap | 是 | : Watermark image. |
| config | WatermarkConfiguration | 是 | : Configuration of the watermark. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise that returns the watermark id. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |
| 5400108 | The parameter check failed, parameter value out of range. |

## getAudioCapturerMaxAmplitude

```TypeScript
getAudioCapturerMaxAmplitude(callback: AsyncCallback<int>): void
```

Obtains the maximum amplitude of the current audio capturer. This API uses an asynchronous callback to return the result. This API can be called only after the [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>) API is called. If this API is called after [stop()]media.AVRecorder.stop(callback: AsyncCallback<void>) is successfully called, an error is reported. The return value is the maximum amplitude within the duration from the time the maximum amplitude is obtained last time to the current time. For example, if you have obtained the maximum amplitude at 1s and you call this API again at 2s, then the return value is the maximum amplitude within the duration from 1s to 2s.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the maximum amplitude obtained; otherwise, err is an error  object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400105 | Service died. Return by callback. |

## getAudioCapturerMaxAmplitude

```TypeScript
getAudioCapturerMaxAmplitude(): Promise<int>
```

Obtains the maximum amplitude of the current audio capturer. This API uses a promise to return the result. This API can be called only after the [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>) API is called. If this API is called after [stop()]media.AVRecorder.stop(callback: AsyncCallback<void>) is successfully called, an error is reported. The return value is the maximum amplitude within the duration from the time the maximum amplitude is obtained last time to the current time. For example, if you have obtained the maximum amplitude at 1s and you call this API again at 2s, then the return value is the maximum amplitude within the duration from 1s to 2s.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the maximum amplitude obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400105 | Service died. Return by promise. |

## getAvailableEncoder

```TypeScript
getAvailableEncoder(callback: AsyncCallback<Array<EncoderInfo>>): void
```

Obtains available encoders. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;EncoderInfo>> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the available encoders obtained; otherwise, err is  an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400105 | Service died. Return by callback. |

## getAvailableEncoder

```TypeScript
getAvailableEncoder(): Promise<Array<EncoderInfo>>
```

Obtains available encoders. This API uses a promise to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;EncoderInfo>> | Promise used to return the information about the available encoders. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400105 | Service died. Return by promise. |

## getAVRecorderConfig

```TypeScript
getAVRecorderConfig(callback: AsyncCallback<AVRecorderConfig>): void
```

Obtains the real-time configuration of this AVRecorder. This API uses an asynchronous callback to return the result. This API can be called only after [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>) is called.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVRecorderConfig> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the real-time configuration obtained; otherwise, err  is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## getAVRecorderConfig

```TypeScript
getAVRecorderConfig(callback: AsyncCallback<AVRecorderConfig | undefined>): void
```

Obtains the real-time configuration of this AVRecorder. This API uses an asynchronous callback to return the result. This API can be called only after prepare() is called.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVRecorderConfig \| undefined> | 是 | Callback used to return the result.  If the operation is successful, err is undefined and data is the real-time configuration obtained  ;  otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## getAVRecorderConfig

```TypeScript
getAVRecorderConfig(): Promise<AVRecorderConfig>
```

Obtains the real-time configuration of this AVRecorder. This API uses a promise to return the result. This API can be called only after [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig) is called.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AVRecorderConfig> | Promise used to return the real-time configuration. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## getAVRecorderConfig

```TypeScript
getAVRecorderConfig(): Promise<AVRecorderConfig | undefined>
```

Obtains the real-time configuration of this AVRecorder. This API uses a promise to return the result. This API can be called only after prepare() is called.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AVRecorderConfig \| undefined> | Promise used to return the real-time configuration. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## getCurrentAudioCapturerInfo

```TypeScript
getCurrentAudioCapturerInfo(callback: AsyncCallback<audio.AudioCapturerChangeInfo>): void
```

Obtains the information about the current audio capturer. This API uses an asynchronous callback to return the result. This API can be called only after the [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>) API is called. If this API is called after [stop()]media.AVRecorder.stop(callback: AsyncCallback<void>) is successfully called, an error is reported.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;audio.AudioCapturerChangeInfo> | 是 | Callback used to return the result. If the  operation is successful, err is undefined and data is the audio.AudioCapturerChangeInfo object  obtained; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400105 | Service died. Return by callback. |

## getCurrentAudioCapturerInfo

```TypeScript
getCurrentAudioCapturerInfo(callback: AsyncCallback<audio.AudioCapturerChangeInfo | undefined>): void
```

Obtains the information about the current audio capturer. This API uses an asynchronous callback to return the result. This API can be called only after the **prepare()** API is called. If this API is called after **stop()** is successfully called, an error is reported.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;audio.AudioCapturerChangeInfo \| undefined> | 是 | Callback used to return the  result.  If the operation is successful, err is undefined and data is the  audio.AudioCapturerChangeInfo object obtained; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400105 | Service died. Return by callback. |

## getCurrentAudioCapturerInfo

```TypeScript
getCurrentAudioCapturerInfo(): Promise<audio.AudioCapturerChangeInfo>
```

Obtains the information about the current audio capturer. This API uses a promise to return the result. This API can be called only after the [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>) API is called. If this API is called after [stop()]media.AVRecorder.stop(callback: AsyncCallback<void>) is successfully called, an error is reported.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;audio.AudioCapturerChangeInfo> | Promise used to return the audio capturer information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400105 | Service died. Return by promise. |

## getCurrentAudioCapturerInfo

```TypeScript
getCurrentAudioCapturerInfo(): Promise<audio.AudioCapturerChangeInfo | undefined>
```

Obtains the information about the current audio capturer. This API uses a promise to return the result. This API can be called only after the **prepare()** API is called. If this API is called after **stop()** is successfully called, an error is reported.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;audio.AudioCapturerChangeInfo \| undefined> | Promise used to return the audio capturer  information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400105 | Service died. Return by promise. |

## getInputMetaSurface

```TypeScript
getInputMetaSurface(type: MetaSourceType): Promise<string>
```

Get input meta surface for specified meta source type. it must be called between prepare completed and start.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | MetaSourceType | 是 | Meta source type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | A Promise instance used to return the input surface id in string. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | MetaSourceType | 是 | Meta source type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string \| undefined> | A Promise instance used to return the input surface id in string. |

**错误码：**

| 错误码ID | 错误信息 |
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

Obtains the surface required for recording. This API uses an asynchronous callback to return the result. The caller obtains the surface buffer from this surface and fills in the corresponding video data. Note that the video data must carry the timestamp (in ns) and buffer size, and the start time of the timestamp must be based on the system startup time. This API can be called only after the [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>) API is called.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the surface ID obtained; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## getInputSurface

```TypeScript
getInputSurface(callback: AsyncCallback<string | undefined>): void
```

Obtains the surface required for recording. This API uses an asynchronous callback to return the result. The caller obtains the **surfaceBuffer** from this surface and fills in the corresponding video data. Note that the video data must carry the timestamp (in ns) and buffer size, and the start time of the timestamp must be based on the system startup time. This API can be called only after the prepare() API is called.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string \| undefined> | 是 | Callback used to return the result.  If the operation is successful, err is undefined and data is the surface ID obtained;  otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## getInputSurface

```TypeScript
getInputSurface(): Promise<string>
```

Obtains the surface required for recording. This API uses a promise to return the result. The caller obtains the surface buffer from this surface and fills in the corresponding video data. Note that the video data must carry the timestamp (in ns) and buffer size, and the start time of the timestamp must be based on the system startup time. This API can be called only after the [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig) API is called.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the surface buffer obtained from the surface. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## getInputSurface

```TypeScript
getInputSurface(): Promise<string | undefined>
```

Obtains the surface required for recording. This API uses a promise to return the result. The caller obtains the **surfaceBuffer** from this surface and fills in the corresponding video data. Note that the video data must carry the timestamp (in ns) and buffer size, and the start time of the timestamp must be based on the system startup time. This API can be called only after the prepare() API is called.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string \| undefined> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## isWatermarkSupported

```TypeScript
isWatermarkSupported(): Promise<boolean>
```

Checks whether the device supports the hardware digital watermark. This API uses a promise to return the result. This API can be called after the prepare(), start(), or paused() event is triggered.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the check result. The value true means that  the device supports the hardware digital watermark, and false means the opposite. |

**示例：**

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

Unsubscribes from AVRecorder state changes. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stateChange' | 是 | Event type, which is 'stateChange' in this case. This event can be triggered  by both user operations and the system. |
| callback | OnAVRecorderStateChangeHandler | 否 | Callback used to return the state change event. If this  parameter is specified, the subscription to the specified event with the specified callback is canceled. (The  callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with  all the callbacks are canceled. This parameter is supported since API version 12. [since 12] |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from AVRecorder errors. After the unsubscription, your application can no longer receive AVRecorder errors. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type, which is 'error' in this case. This event is triggered when an error  occurs during recording. |
| callback | ErrorCallback | 否 | Callback used to return the recording error event. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. This parameter is supported since API version 12. [since 12] |

## off('audioCapturerChange')

```TypeScript
off(type: 'audioCapturerChange', callback?: Callback<audio.AudioCapturerChangeInfo>): void
```

Subscribes to audio capturer configuration changes. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | 是 | Event type, which is 'audioCapturerChange' in this case. |
| callback | Callback&lt;audio.AudioCapturerChangeInfo> | 否 | Callback used to return the changed audio capturer  configuration. If this parameter is specified, the subscription to the specified event with the specified  callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to  the specified event with all the callbacks are canceled. This parameter is supported since API version 12  . [since 12] |

## off('photoAssetAvailable')

```TypeScript
off(type: 'photoAssetAvailable', callback?: Callback<photoAccessHelper.PhotoAsset>): void
```

Unsubscribes from media asset callback events. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'photoAssetAvailable' | 是 | Event type, which is 'photoAssetAvailable' in this case. |
| callback | Callback&lt;photoAccessHelper.PhotoAsset> | 否 | Callback used to return the PhotoAsset object  corresponding to the resource file created by the system. If this parameter is specified, the subscription to  the specified event with the specified callback is canceled. (The callback object cannot be an anonymous  function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

## offAudioCapturerChange

```TypeScript
offAudioCapturerChange(callback?: Callback<audio.AudioCapturerChangeInfo>): void
```

Subscribes to audio capturer configuration changes.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;audio.AudioCapturerChangeInfo> | 否 |  |

## offError

```TypeScript
offError(callback?: ErrorCallback): void
```

Unsubscribes from AVRecorder errors. After the unsubscription, your application can no longer receive AVRecorder errors.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 否 |  |

## offPhotoAssetAvailable

```TypeScript
offPhotoAssetAvailable(callback?: Callback<photoAccessHelper.PhotoAsset>): void
```

Unsubscribes from media asset callback events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;photoAccessHelper.PhotoAsset> | 否 |  |

## offStateChange

```TypeScript
offStateChange(callback?: OnAVRecorderStateChangeHandler): void
```

Unsubscribes from AVRecorder state changes. This event can be triggered by both user operations and the system.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAVRecorderStateChangeHandler | 否 |  |

## on('audioCapturerChange')

```TypeScript
on(type: 'audioCapturerChange', callback: Callback<audio.AudioCapturerChangeInfo>): void
```

Subscribes to audio capturer configuration changes. Any configuration change triggers the callback that returns the entire configuration information. This API uses an asynchronous callback to return the result. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | 是 | Event type, which is 'audioCapturerChange' in this case. |
| callback | Callback&lt;audio.AudioCapturerChangeInfo> | 是 | Callback used to return the changed audio capturer  configuration. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

## on('photoAssetAvailable')

```TypeScript
on(type: 'photoAssetAvailable', callback: Callback<photoAccessHelper.PhotoAsset>): void
```

Subscribes to media asset callback events. When [FileGenerationMode](arkts-media-filegenerationmode-e.md#FileGenerationMode) is used during media file creation, the [PhotoAsset](../../apis-media-library-kit/arkts-apis/arkts-file-photoaccesshelper.md#photoAccessHelper) object is called back to the application after the [stop]media.AVRecorder.stop(callback: AsyncCallback<void>) operation is complete. This API uses an asynchronous callback to return the result. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'photoAssetAvailable' | 是 | Event type, which is 'photoAssetAvailable' in this case. The event is  triggered when a photo asset is available. |
| callback | Callback&lt;photoAccessHelper.PhotoAsset> | 是 | Callback used to return the PhotoAsset object  corresponding to the resource file created by the system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## on('stateChange')

```TypeScript
on(type: 'stateChange', callback: OnAVRecorderStateChangeHandler): void
```

Subscribes to AVRecorder state changes. An application can subscribe to only one AVRecorder state change event. When the application initiates multiple subscriptions to this event, the last subscription is applied. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stateChange' | 是 | Event type, which is 'stateChange' in this case. This event can be triggered  by both user operations and the system. |
| callback | OnAVRecorderStateChangeHandler | 是 | Callback used to return the state change event. [since 12] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to AVRecorder errors. This event is used only for error prompt and does not require the user to stop recording control. If the [AVRecorderState](arkts-media-avrecorderstate-t.md#AVRecorderState) is also switched to error, call [reset()]media.AVRecorder.reset(callback: AsyncCallback<void>) or [release()] [release()]media.AVRecorder.release(callback: AsyncCallback<void>) to exit the recording. This API uses an asynchronous callback to return the result. An application can subscribe to only one AVRecorder error event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type, which is 'error' in this case. This event is triggered when an error  occurs during recording. |
| callback | ErrorCallback | 是 | Callback used to return the recording error event. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;audio.AudioCapturerChangeInfo> | 是 | Callback used to return the entire configuration  information about the audio capturer. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

## onError

```TypeScript
onError(callback: ErrorCallback): void
```

Subscribes to AVRecorder errors. This event is used only for error prompt and does not require the user to stop recording control. If the AVRecorderState is also switched to error, call reset() or release() to exit the recording. An application can subscribe to only one AVRecorder error event. When the application initiates multiple subscriptions to this event, the last subscription is applied. This event is triggered when an error occurs during recording.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | Callback invoked when the event is triggered. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;photoAccessHelper.PhotoAsset> | 是 | Callback used to return the  PhotoAsset object corresponding to the resource file created by the system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## onStateChange

```TypeScript
onStateChange(callback: OnAVRecorderStateChangeHandler): void
```

Subscribes to AVRecorder state changes. An application can subscribe to only one AVRecorder state change event. When the application initiates multiple subscriptions to this event, the last subscription is applied. This event can be triggered by both user operations and the system.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAVRecorderStateChangeHandler | 是 | Callback invoked when the event is triggered. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## pause

```TypeScript
pause(callback: AsyncCallback<void>): void
```

Pauses video recording. This API uses an asynchronous callback to return the result. This API can be called only after the [start()]media.AVRecorder.start(callback: AsyncCallback<void>) API is called. You can call [resume()]media.AVRecorder.resume(callback: AsyncCallback<void>) to resume recording.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## pause

```TypeScript
pause(): Promise<void>
```

Pauses video recording. This API uses a promise to return the result. This API can be called only after the [start()]media.AVRecorder.start() API is called. You can call [resume()]media.AVRecorder.resume() to resume recording.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## prepare

```TypeScript
prepare(config: AVRecorderConfig, callback: AsyncCallback<void>): void
```

Sets audio and video recording parameters. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.MICROPHONE

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | AVRecorderConfig | 是 | Audio and video recording parameters to set. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. Return by callback. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 5400102 | Operate not permit. Return by callback. |
| 5400105 | Service died. Return by callback. |

## prepare

```TypeScript
prepare(config: AVRecorderConfig): Promise<void>
```

Sets audio and video recording parameters. This API uses a promise to return the result.

**起始版本：** 9

**需要权限：** 

- API版本9 - 11： ohos.permission.MICROPHONE

- API版本12+： ohos.permission.MICROPHONE * This permission is required only if audio recording is involved.

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | AVRecorderConfig | 是 | Audio and video recording parameters to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. Return by promise. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 5400102 | Operate not permit. Return by promise. |
| 5400105 | Service died. Return by promise. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases the audio and video recording resources. This API uses an asynchronous callback to return the result. After the resources are released, you can no longer perform any operation on the AVRecorder instance.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400105 | Service died. Return by callback. |

## release

```TypeScript
release(): Promise<void>
```

Releases the audio and video recording resources. This API uses a promise to return the result. After the resources are released, you can no longer perform any operation on the AVRecorder instance.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400105 | Service died. Return by callback. |

## reset

```TypeScript
reset(callback: AsyncCallback<void>): void
```

Resets audio and video recording. This API uses an asynchronous callback to return the result. For audio-only recording, you can call [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>) again for re -recording. For video-only recording or audio and video recording, you can call [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>) and [getInputSurface()]media.AVRecorder.getInputSurface(callback: AsyncCallback<string>) again for re- recording.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## reset

```TypeScript
reset(): Promise<void>
```

Resets audio and video recording. This API uses a promise to return the result. For audio-only recording, you can call [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig) again for re-recording. For video-only recording or audio and video recording, you can call [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig) and [getInputSurface()]media.AVRecorder.getInputSurface() again for re-recording.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## resume

```TypeScript
resume(callback: AsyncCallback<void>): void
```

Resumes video recording. This API uses an asynchronous callback to return the result. This API can be called only after the [pause()]media.AVRecorder.pause(callback: AsyncCallback<void>) API is called.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## resume

```TypeScript
resume(): Promise<void>
```

Resumes video recording. This API uses a promise to return the result. This API can be called only after the [pause()]media.AVRecorder.pause() API is called.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## setMetadata

```TypeScript
setMetadata(metadata: Record<string, string>): void
```

Set metadata (key-value pairs) for the recording file of the recorder. This metadata overwrites the value in config.metadata.customInfo (see {prepare()} and {AVRecorderConfig}) if they have same key. This API can be called only after the prepare() event is successfully triggered and before the stop() API is called.

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| metadata | Record&lt;string, string> | 是 | Tag and value of the metadata in key-value pairs.  - The first string is the key. - The second string is the value.  The key string should start with "com.openharmony.", the length of value can't be more than 256 bytes. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| watermark | image.PixelMap | 是 | : Watermark image. |
| config | WatermarkConfig | 是 | : Configures of the watermark. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. |
| 801 | Capability not supported. |

**示例：**

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

Sets whether to mute the current audio recording stream when an audio interruption occurs. This API uses a promise to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| muteWhenInterrupted | boolean | 是 | Whether to mute the current audio recording stream during an audio  interruption. true to mute, false otherwise. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400105 | Service died. Return by promise. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts video recording. This API uses an asynchronous callback to return the result. For audio-only recording, this API can be called only after the [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>) API is called. For video-only recording, this API can be called only after the [getInputSurface()]media.AVRecorder.getInputSurface(callback: AsyncCallback<string>) API is called.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## start

```TypeScript
start(): Promise<void>
```

Starts video recording. This API uses a promise to return the result. For audio-only recording, this API can be called only after the [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig) API is called. For video-only recording, this API can be called only after the [getInputSurface()]media.AVRecorder.getInputSurface() API is called.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops video recording. This API uses an asynchronous callback to return the result. This API can be called only after the [start()]media.AVRecorder.start(callback: AsyncCallback<void>) or [pause()]media.AVRecorder.pause(callback: AsyncCallback<void>) API is called. For audio-only recording, you can call [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>) again for re -recording. For video-only recording or audio and video recording, you can call [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>) and [getInputSurface()]media.AVRecorder.getInputSurface(callback: AsyncCallback<string>) again for re- recording.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by callback. |
| 5400103 | IO error. Return by callback. |
| 5400105 | Service died. Return by callback. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops video recording. This API uses a promise to return the result. This API can be called only after the [start()]media.AVRecorder.start() or [pause()]media.AVRecorder.pause() API is called. For audio-only recording, you can call [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig) again for re-recording. For video-only recording or audio and video recording, you can call [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig) and [getInputSurface()]media.AVRecorder.getInputSurface() again for re-recording.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## updateRotation

```TypeScript
updateRotation(rotation: int): Promise<void>
```

Updates the video rotation angle, in degrees. This API uses a promise to return the result. This API can be called only after the [prepare()]media.AVRecorder.prepare(config: AVRecorderConfig) event is triggered and before the [start()]media.AVRecorder.start(callback: AsyncCallback<void>) API is called.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rotation | int | 是 | Rotation angle, which can only be 0, 90, 180, or 270 degrees. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## state

```TypeScript
readonly state: AVRecorderState
```

AVRecorder state.

**类型：** AVRecorderState

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

