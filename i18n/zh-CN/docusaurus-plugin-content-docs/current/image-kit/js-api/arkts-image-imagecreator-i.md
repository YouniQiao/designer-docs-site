# ImageCreator

ImageCreator类，作为图片的生产者，用于将图片写入到Surface中。 在调用以下方法前需要先通过[image.createImageCreator]image.createImageCreator创建ImageCreator实例，ImageCreator不支持多线程。 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用[release]image.ImageCreator.release(callback: AsyncCallback<void>)方法 及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 > **说明：** > > - 本Interface首批接口从API version 9开始支持。

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

## 导入模块

```TypeScript
import { image } from '@kit.ImageKit';
```

## dequeueImage

```TypeScript
dequeueImage(callback: AsyncCallback<Image>): void
```

从空闲队列中获取buffer图片，用于绘制UI内容。使用callback异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Image> | 是 | 回调函数，当获取最新图片成功，err为undefined，data为获取到的最新图片；否则为错误对象。 |

## dequeueImage

```TypeScript
dequeueImage(): Promise<Image>
```

从空闲队列中获取buffer图片，用于绘制UI内容。使用Promise异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Image> | Promise对象，返回最新图片。 |

## off('imageRelease')

```TypeScript
off(type: 'imageRelease', callback?: AsyncCallback<void>): void
```

释放buffer时，移除注册的回调函数。使用callback异步回调。

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'imageRelease' | 是 | 监听事件类型，如'imageRelease'。 |
| callback | AsyncCallback&lt;void> | 否 | 回调函数。当移除注册成功时，err为undefined，否则为错误对象。 |

## offImageRelease

```TypeScript
offImageRelease(callback?: AsyncCallback<void>): void
```

Remove callback subscriptions when releasing buffer

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 否 |  |

## on('imageRelease')

```TypeScript
on(type: 'imageRelease', callback: AsyncCallback<void>): void
```

监听imageRelease事件。使用callback异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'imageRelease' | 是 | 监听事件类型，如'imageRelease'。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数，当监听事件触发成功，err为undefined，否则为错误对象。 |

## onImageRelease

```TypeScript
onImageRelease(callback: AsyncCallback<void>): void
```

Subscribe callback when releasing buffer

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the operation result. |

## queueImage

```TypeScript
queueImage(image: Image, callback: AsyncCallback<void>): void
```

将绘制好的图片放入队列。使用callback异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | Image | 是 | 绘制好的buffer图像。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数，当将图片放入队列成功，err为undefined，否则为错误对象。 |

## queueImage

```TypeScript
queueImage(image: Image): Promise<void>
```

将绘制好的图片放入队列。使用Promise异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | Image | 是 | 绘制好的buffer图像。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

释放当前图像。使用callback异步回调。 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用该方法，及时释放内存。 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数，当图像释放成功，err为undefined，否则为错误对象。 |

## release

```TypeScript
release(): Promise<void>
```

释放当前图像。使用Promise异步回调。 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用该方法，及时释放内存。 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

## format

```TypeScript
readonly format: ImageFormat
```

图像格式。

**类型：** ImageFormat

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

## capacity

```TypeScript
readonly capacity: int
```

同时访问的图像数。该参数仅作为期望值，实际capacity由设备硬件决定。

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Image.ImageCreator

