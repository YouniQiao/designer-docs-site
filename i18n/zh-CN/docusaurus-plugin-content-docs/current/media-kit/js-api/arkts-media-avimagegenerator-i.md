# AVImageGenerator

视频缩略图获取类，用于从视频资源中获取缩略图。在调用AVImageGenerator的方法前，需要先通过 [createAVImageGenerator()](arkts-media-createavimagegenerator-f.md#createAVImageGenerator-3) 构建一个AVImageGenerator实例。 获取视频缩略图的demo可参考：[获取视频缩略图开发指导](docroot://media/media/avimagegenerator.md)。 > **说明：** > > - 本Interface首批接口从API version 12开始支持。

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## fetchFrameByTime

```TypeScript
fetchFrameByTime(timeUs: number, options: AVImageQueryOptions, param: PixelMapParams,
      callback: AsyncCallback<image.PixelMap>): void
```

获取视频缩略图。使用callback异步回调。

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeUs | number | 是 | 需要获取的缩略图在视频中的时间点，单位为微秒（μs）。 |
| options | AVImageQueryOptions | 是 | 需要获取的缩略图时间点与视频帧的对应关系。 |
| param | PixelMapParams | 是 | 需要获取的缩略图的格式参数。 |
| callback | AsyncCallback&lt;image.PixelMap> | 是 | 回调函数。获取缩略图成功时，err为undefined，data为PixelMap实例，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. Returned by callback. |
| 5400106 | Unsupported format. Returned by callback. |

## fetchFrameByTime

```TypeScript
fetchFrameByTime(timeUs: long, options: AVImageQueryOptions, param: PixelMapParams,
      callback: AsyncCallback<image.PixelMap | undefined>): void
```

Obtains a video thumbnail. This API uses an asynchronous callback to return the result.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeUs | long | 是 | Time of the video for which a thumbnail is to be obtained, in μs. |
| options | AVImageQueryOptions | 是 | Relationship between the time passed in and the video frame. |
| param | PixelMapParams | 是 | Format parameters of the thumbnail to be obtained. |
| callback | AsyncCallback&lt;image.PixelMap \| undefined> | 是 | Callback used to return the result.  If the operation is successful, err is undefined and data is the PixelMap instance obtained;  otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. Returned by callback. |
| 5400106 | Unsupported format. Returned by callback. |

## fetchFrameByTime

```TypeScript
fetchFrameByTime(timeUs: number, options: AVImageQueryOptions, param: PixelMapParams): Promise<image.PixelMap>
```

获取视频缩略图。使用Promise异步回调。

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeUs | number | 是 | 需要获取的缩略图在视频中的时间点，单位为微秒（μs）。 |
| options | AVImageQueryOptions | 是 | 需要获取的缩略图时间点与视频帧的对应关系。 |
| param | PixelMapParams | 是 | 需要获取的缩略图的格式参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | Promise对象，返回视频缩略图对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. Returned by promise. |
| 5400106 | Unsupported format. Returned by promise. |

## fetchFrameByTime

```TypeScript
fetchFrameByTime(timeUs: long, options: AVImageQueryOptions, param: PixelMapParams): Promise<image.PixelMap | undefined>
```

Obtains a video thumbnail. This API uses a promise to return the result.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeUs | long | 是 | Time of the video for which a thumbnail is to be obtained, in μs. |
| options | AVImageQueryOptions | 是 | Relationship between the time passed in and the video frame. |
| param | PixelMapParams | 是 | Format parameters of the thumbnail to be obtained. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap \| undefined> | Promise used to return the video thumbnail. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. Returned by promise. |
| 5400106 | Unsupported format. Returned by promise. |

## fetchScaledFrameByTime

```TypeScript
fetchScaledFrameByTime(timeUs: number, queryMode: AVImageQueryOptions, outputSize?: OutputSize):
      Promise<image.PixelMap>
```

支持按比例缩放提取视频缩略图。使用Promise异步回调。

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeUs | number | 是 | 在视频中需要获取的缩略图的时间点，单位为微秒（μs）。 |
| queryMode | AVImageQueryOptions | 是 | 需要获取的缩略图时间点与视频帧的对应关系。 |
| outputSize | OutputSize | 否 | 定义帧的输出大小。默认按原图大小显示。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | Promise对象。返回视频缩略图对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 |  |
| 5400106 |  |

## fetchScaledFrameByTime

```TypeScript
fetchScaledFrameByTime(timeUs: long, queryMode: AVImageQueryOptions, outputSize?: OutputSize):
      Promise<image.PixelMap | undefined>
```

Supports extracting video thumbnails by proportional scaling

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeUs | long | 是 | The time expected to fetch picture from the video resource.  The unit is microsecond(us). |
| queryMode | AVImageQueryOptions | 是 | Specify how to position the video frame |
| outputSize | OutputSize | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap \| undefined> | Returns the output image object |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 |  |
| 5400106 |  |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

释放资源。使用callback异步回调。

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当释放资源成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. Returned by callback. |

## release

```TypeScript
release(): Promise<void>
```

释放资源。使用Promise异步回调。

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 异步方式释放资源release方法的Promise返回值。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. Returned by promise. |

## fdSrc

```TypeScript
fdSrc ?: AVFileDescriptor
```

媒体文件描述，通过该属性设置数据源。 **使用示例**： 假设一个连续存储的媒体文件，地址偏移：0，字节长度：100。其文件描述为AVFileDescriptor { fd = 资源句柄; offset = 0; length = 100; }。 **说明：** 将资源句柄（fd）传递给AVImageGenerator实例之后，不允许通过该资源句柄做其他读写操作，包括但不限于将同一个资源句柄传递给多个AVPlayer/AVMetadataExtractor/ AVImageGenerator/AVTranscoder。同一时间通过同一个资源句柄读写文件时存在竞争关系，将导致视频缩略图数据获取异常。

**类型：** AVFileDescriptor

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

