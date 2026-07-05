# AVTranscoder

视频转码管理类，用于视频转码。在调用AVTranscoder的方法前，需要先通过 [createAVTranscoder()](arkts-media-createavtranscoder-f.md#createAVTranscoder-1)构建一个AVTranscoder实例。 视频转码demo可参考：[视频转码开发指导](docroot://media/media/using-avtranscoder-for-transcodering.md) > **说明：** > > - 本Interface首批接口从API version 12开始支持。

**Since:** 12

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## addWatermark

```TypeScript
addWatermark(watermark: image.PixelMap, config: WatermarkConfiguration): Promise<int>
```

add a watermark for the AVTranscoder. This API uses a promise to return the result. App can add up to 5 watermarks. This API can be called only before the prepared state.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

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

## cancel

```TypeScript
cancel(): Promise<void>
```

取消视频转码。使用Promise异步回调。 需要在[prepare()](arkts-media-avtranscoder-i.md#prepare)、[start()](arkts-media-avtranscoder-i.md#start)、 [pause()](arkts-media-avtranscoder-i.md#pause)或[resume()](arkts-media-avtranscoder-i.md#resume)事件成功触发后，才能调用cancel方法。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## off('complete')

```TypeScript
off(type:'complete', callback?: Callback<void>):void
```

取消注册转码完成事件。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' | Yes | 转码完成事件回调类型，支持的事件：'complete'。 |
| callback | Callback&lt;void> | No | 完成事件回调方法。 |

## off('error')

```TypeScript
off(type:'error', callback?: ErrorCallback):void
```

取消注册转码错误事件，取消后不再接收到AVTranscoder的错误事件。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | 转码错误事件回调类型'error'。 - 'error'：转码过程中发生错误，触发该事件。 |
| callback | ErrorCallback | No | 错误事件回调方法。 |

## off('progressUpdate')

```TypeScript
off(type:'progressUpdate', callback?: Callback<int>):void
```

取消注册转码进度更新事件。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'progressUpdate' | Yes | 进度更新事件回调类型，支持的事件：'progressUpdate'。 |
| callback | Callback&lt;int> | No | 已注册的进度更新事件回调。由于当前回调注册时，仅会保留最后一次注册的回调，建议此参数缺省。 |

## offComplete

```TypeScript
offComplete(callback?: Callback<void>):void
```

Unsubscribes from the event indicating that transcoding is complete. This event can be triggered by both user operations and the system.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

## offError

```TypeScript
offError(callback?: ErrorCallback):void
```

Unsubscribes from AVTranscoder errors. After the unsubscription, your application can no longer receive AVTranscoder errors. This event is triggered when an error occurs during transcoding.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | No |  |

## offProgressUpdate

```TypeScript
offProgressUpdate(callback?: Callback<int>):void
```

Unsubscribes from transcoding progress updates. This event can be triggered by both user operations and the system.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | No |  |

## on('complete')

```TypeScript
on(type:'complete', callback: Callback<void>):void
```

注册转码完成事件，并通过注册的回调方法通知开发者。开发者只能注册一个进度更新事件的回调方法，当开发者重复注册时，以最后一次注册的回调接口为准。使用callback异步回调。 当AVTranscoder上报complete事件时，当前转码操作已完成，开发者需要通过[release()](arkts-media-avtranscoder-i.md#release)退出转码操作。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' | Yes | 完成事件回调类型，支持的事件：'complete'，在转码过程中系统会自动触发此事件。 |
| callback | Callback&lt;void> | Yes | 回调函数，返回完成事件回调方法。 |

## on('error')

```TypeScript
on(type:'error', callback: ErrorCallback):void
```

注册AVTranscoder的错误事件，该事件仅用于错误提示。如果AVTranscoder上报error事件，开发者需要通过[release()](arkts-media-avtranscoder-i.md#release)退出转码操作 。使用callback异步回调。 开发者只能订阅一个错误事件的回调方法，当开发者重复订阅时，以最后一次订阅的回调接口为准。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | 转码错误事件回调类型'error'。 - 'error'：录制过程中发生错误，触发该事件。 |
| callback | ErrorCallback | Yes | 转码错误事件回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. |
| 801 | Capability not supported. |
| 5400101 | No memory. |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400104 | Time out. |
| 5400105 | Service died. |
| 5400106 | Unsupported format. |

## on('progressUpdate')

```TypeScript
on(type:'progressUpdate', callback: Callback<int>):void
```

注册转码进度更新事件，并通过注册的回调方法通知开发者。开发者只能注册一个进度更新事件的回调方法，当开发者重复注册时，以最后一次注册的回调接口为准。使用callback异步回调。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'progressUpdate' | Yes | 进度更新事件回调类型，支持的事件：'progressUpdate'，在转码过程中系统会自动触发此事件。 |
| callback | Callback&lt;int> | Yes | 回调函数，返回进度更新事件，函数中的参数number，表示当前转码进度。 |

## onComplete

```TypeScript
onComplete(callback: Callback<void>):void
```

Subscribes to the event indicating that transcoding is complete. An application can subscribe to only one transcoding completion event. When the application initiates multiple subscriptions to this event, the last subscription is applied. When this event is reported, the current transcoding operation is complete. You need to call [release()](arkts-avtranscoder-i.md#release) to exit the transcoding.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | Callback that has been registered to listen for  transcoding completion events. |

## onError

```TypeScript
onError(callback: ErrorCallback):void
```

Subscribes to AVTranscoder errors. If this event is reported, call [release()](arkts-avtranscoder-i.md#release) to exit the transcoding. An application can subscribe to only one AVTranscoder error event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | Yes | Callback invoked when the event is triggered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. |
| 801 | Capability not supported. |
| 5400101 | No memory. |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400104 | Time out. |
| 5400105 | Service died. |
| 5400106 | Unsupported format. |

## onProgressUpdate

```TypeScript
onProgressUpdate(callback: Callback<int>):void
```

Subscribes to transcoding progress updates. An application can subscribe to only one transcoding progress update event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | Yes | Callback invoked when the event is triggered.  progress is a number that indicates the current transcoding progress, in percentage. |

## pause

```TypeScript
pause(): Promise<void>
```

暂停视频转码。使用Promise异步回调。 需要[start()](arkts-media-avtranscoder-i.md#start)事件成功触发后，才能调用pause方法，可以通过调用[resume()](arkts-media-avtranscoder-i.md#resume)接 口来恢复转码。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## prepare

```TypeScript
prepare(config: AVTranscoderConfig): Promise<void>
```

进行视频转码的参数设置。使用Promise异步回调。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | AVTranscoderConfig | Yes | 配置视频转码的相关参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Return by promise. |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |
| 5400106 | Unsupported format. Returned by promise. |

## release

```TypeScript
release(): Promise<void>
```

释放视频转码资源。使用Promise异步回调。 释放视频转码资源之后，该AVTranscoder实例不能再进行任何操作。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400105 | Service died. Return by promise. |

## resume

```TypeScript
resume(): Promise<void>
```

恢复视频转码。使用Promise异步回调。 需要在[pause()](arkts-media-avtranscoder-i.md#pause)事件成功触发后，才能调用resume方法。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## start

```TypeScript
start(): Promise<void>
```

开始视频转码。使用Promise异步回调。 需要[prepare()](arkts-media-avtranscoder-i.md#prepare)事件成功触发后，才能调用start方法。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## fdSrc

```TypeScript
fdSrc: AVFileDescriptor
```

源媒体文件描述，通过该属性设置数据源。 **使用示例**： 假设一个连续存储的媒体文件，地址偏移：0，字节长度：100。其文件描述为AVFileDescriptor{ fd = 资源句柄; offset = 0; length = 100; }。 **说明：** - 将资源句柄（fd）传递给AVTranscoder实例之后，请不要通过该资源句柄做其他读写操作，包括但不限于将同一个资源句柄传递给多个AVPlayer/AVMetadataExtractor/AVImageGenerator /AVTranscoder。 - 同一时间通过同一个资源句柄读写文件时存在竞争关系，将导致视频转码数据获取异常。

**Type:** AVFileDescriptor

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

## fdDst

```TypeScript
fdDst: int
```

目标媒体文件描述，通过该属性设置数据输出。在创建AVTranscoder实例后，必须设置fdSrc和fdDst属性。 **说明：** - 将资源句柄（fd）传递给AVTranscoder实例之后，请不要通过该资源句柄做其他读写操作，包括但不限于将同一个资源句柄传递给多个AVPlayer/AVMetadataExtractor/AVImageGenerator /AVTranscoder。 - 同一时间通过同一个资源句柄读写文件时存在竞争关系，将导致视频转码数据获取异常。

**Type:** int

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

