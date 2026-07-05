# AVTranscoder

AVTranscoder is a transcoding management class. It provides APIs to transcode videos. Before calling any API in AVTranscoder, you must use [createAVTranscoder()](arkts-media-createavtranscoder-f.md#createAVTranscoder-1) to create an AVTranscoder instance. For details about the AVTranscoder demo, see [Using AVTranscoder for Transcoding](docroot://media/media/using-avtranscoder-for-transcodering.md).

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

Cancels video transcoding. This API uses a promise to return the result. This API can be called only after the [prepare()]media.AVTranscoder.prepare, [start()]media.AVTranscoder.start, [pause()]media.AVTranscoder.pause, or [resume()]media.AVTranscoder.resume API is called.

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

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

Unsubscribes from the event indicating that transcoding is complete.

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' | Yes | Event type, which is 'complete' in this case. |
| callback | Callback&lt;void> | No | Callback that has been registered to listen for transcoding completion  events. |

## off('error')

```TypeScript
off(type:'error', callback?: ErrorCallback):void
```

Unsubscribes from AVTranscoder errors. After the unsubscription, your application can no longer receive AVTranscoder errors.

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type, which is 'error' in this case. This event is triggered when an error  occurs during transcoding. |
| callback | ErrorCallback | No | Callback that has been registered to listen for AVTranscoder errors. |

## off('progressUpdate')

```TypeScript
off(type:'progressUpdate', callback?: Callback<int>):void
```

Unsubscribes from transcoding progress updates.

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'progressUpdate' | Yes | Event type, which is 'progressUpdate' in this case. |
| callback | Callback&lt;int> | No | Called that has been registered to listen for progress updates. You are  advised to use the default value because only the last registered callback is retained in the current  callback mechanism. |

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

Subscribes to the event indicating that transcoding is complete. An application can subscribe to only one transcoding progress update event. When the application initiates multiple subscriptions to this event, the last subscription is applied. This API uses an asynchronous callback to return the result. When this event is reported, the current transcoding operation is complete. You need to call [release()]media.AVTranscoder.release to exit the transcoding.

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' | Yes | Event type, which is 'complete' in this case. This event is triggered by the  system during transcoding. |
| callback | Callback&lt;void> | Yes | Callback used to return the event callback method. |

## on('error')

```TypeScript
on(type:'error', callback: ErrorCallback):void
```

Subscribes to AVTranscoder errors. If this event is reported, call [release()]media.AVTranscoder.release to exit the transcoding. This API uses an asynchronous callback to return the result. An application can subscribe to only one AVTranscoder error event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type, which is 'error' in this case. This event is triggered when an error  occurs during recording. |
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

## on('progressUpdate')

```TypeScript
on(type:'progressUpdate', callback: Callback<int>):void
```

Subscribes to transcoding progress updates. An application can subscribe to only one transcoding progress update event. When the application initiates multiple subscriptions to this event, the last subscription is applied. This API uses an asynchronous callback to return the result.

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'progressUpdate' | Yes | Event type, which is 'progressUpdate' in this case. This event is  triggered by the system during transcoding. |
| callback | Callback&lt;int> | Yes | Callback used to return the progress update event. The number parameter  in the function indicates the current transcoding progress, in percentage. |

## onComplete

```TypeScript
onComplete(callback: Callback<void>):void
```

Subscribes to the event indicating that transcoding is complete. An application can subscribe to only one transcoding completion event. When the application initiates multiple subscriptions to this event, the last subscription is applied. When this event is reported, the current transcoding operation is complete. You need to call [release()](arkts-media-avtranscoder-i.md#release) to exit the transcoding.

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

Subscribes to AVTranscoder errors. If this event is reported, call [release()](arkts-media-avtranscoder-i.md#release) to exit the transcoding. An application can subscribe to only one AVTranscoder error event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

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

Pauses video transcoding. This API uses a promise to return the result. This API can be called only after the [start()]media.AVTranscoder.start API is called. You can call [resume()]media.AVTranscoder.resume to resume transcoding.

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

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

Sets video transcoding parameters. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | AVTranscoderConfig | Yes | Video transcoding parameters to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |
| 5400106 | Unsupported format. Returned by promise. |
| 401 | The parameter check failed. Return by promise. [since 22] |

## release

```TypeScript
release(): Promise<void>
```

Releases video transcoding resources. This API uses a promise to return the result. After the resources are released, you can no longer perform any operation on the AVTranscoder instance.

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400105 | Service died. Return by promise. |

## resume

```TypeScript
resume(): Promise<void>
```

Resumes video transcoding. This API uses a promise to return the result. This API can be called only after the [pause()]media.AVTranscoder.pause API is called.

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

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

Starts video transcoding. This API uses a promise to return the result. This API can be called only after the [prepare()]media.AVTranscoder.prepare API is called.

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

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

Source media file descriptor, which specifies the data source. There is a media file that stores continuous assets, the address offset is 0, and the byte length is 100. Its file descriptor is **AVFileDescriptor { fd = resourceHandle; offset = 0; length = 100; }**. **NOTE** - After the resource handle (FD) is transferred to an AVTranscoder instance, do not use the resource handle to perform other read and write operations, including but not limited to transferring this handle to other AVPlayer, AVMetadataExtractor, AVImageGenerator, or AVTranscoder instance. - Competition occurs when multiple AVTranscoders use the same resource handle to read and write files at the same time, resulting in errors in obtaining data.

**Type:** AVFileDescriptor

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

## fdDst

```TypeScript
fdDst: int
```

Destination media file descriptor, which specifies the data source. After creating an AVTranscoder instance, you must set both **fdSrc** and **fdDst**. **NOTE** - After the resource handle (FD) is transferred to an AVTranscoder instance, do not use the resource handle to perform other read and write operations, including but not limited to transferring this handle to other AVPlayer, AVMetadataExtractor, AVImageGenerator, or AVTranscoder instance. - Competition occurs when multiple AVTranscoders use the same resource handle to read and write files at the same time, resulting in errors in obtaining data.

**Type:** int

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

