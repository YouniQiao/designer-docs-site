# @ohos.multimedia.sendableImage

本模块基于[Sendable](docroot://arkts-utils/arkts-sendable.md)对象，提供图片处理效果，包括通过属性创建PixelMap、读取图像像素数据、读取区域内的图片数据等。

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { sendableImage } from '@kit.ImageKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [convertFromPixelMap](arkts-sendableimage-convertfrompixelmap-f.md#convertFromPixelMap-1) | Creates a sendable image PixelMap from image PixelMap. |
| [convertToPixelMap](arkts-sendableimage-converttopixelmap-f.md#convertToPixelMap-1) | Creates a image PixelMap from sendable image PixelMap. |
| [createImageReceiver](arkts-sendableimage-createimagereceiver-f.md#createImageReceiver-1) | 通过图片大小、图片格式、容量创建ImageReceiver实例。 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行 完成，且后续不再使用该实例。 |
| [createImageSource](arkts-sendableimage-createimagesource-f.md#createImageSource-1) | 通过传入的uri创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完 成，且后续不再使用该实例。 |
| [createImageSource](arkts-sendableimage-createimagesource-f.md#createImageSource-2) | 通过传入文件描述符来创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完 成，且后续不再使用该实例。 |
| [createImageSource](arkts-sendableimage-createimagesource-f.md#createImageSource-3) | 通过缓冲区创建ImageSource实例。buf数据是未解码的数据，不可以传入类似于RBGA，YUV的像素buffer数据，如果想通过像素buffer数据创建pixelMap，可以调用 [sendableImage.createPixelMap]{@link sendableImage.createPixelMap}这一类方法。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完 成，且后续不再使用该实例。 |
| [createPixelMap](arkts-sendableimage-createpixelmap-f.md#createPixelMap-1) | Create PixelMap by data buffer. |
| [createPixelMapFromParcel](arkts-sendableimage-createpixelmapfromparcel-f.md#createPixelMapFromParcel-1) | Creates a PixelMap object based on MessageSequence parameter. |
| [createPixelMapFromSurface](arkts-sendableimage-createpixelmapfromsurface-f.md#createPixelMapFromSurface-1) | Creates a PixelMap object from surface id. |
| [createPixelMapSync](arkts-sendableimage-createpixelmapsync-f.md#createPixelMapSync-1) | Create PixelMap by data buffer. |

### Interfaces

| Name | Description |
| --- | --- |
| [Image](arkts-sendableimage-image-i.md) | 提供基本的图像操作，包括获取图像信息、读写图像数据。调用[readNextImage]{@link sendableImage.ImageReceiver.readNextImage}和 [readLatestImage]{@link sendableImage.ImageReceiver.readLatestImage}接口时会返回Image。继承自 [ISendable](docroot://arkts-utils/arkts-sendable.md#isendable)。 由于图片占用内存较大，所以当Image实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再 使用该实例。 |
| [ImageReceiver](arkts-sendableimage-imagereceiver-i.md) | 图像接收类，用于获取组件Surface ID，接收最新的图片和读取下一张图片，以及释放ImageReceiver实例。 在调用以下方法前需要先创建ImageReceiver实例。 |
| [ImageSource](arkts-sendableimage-imagesource-i.md) | ImageSource类，用于获取图片相关信息。在调用ImageSource的方法前，需要先通过 [sendableImage.createImageSource]{@link sendableImage.createImageSource}构建一个ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行 完成，且后续不再使用该实例。 |
| [PixelMap](arkts-sendableimage-pixelmap-i.md) | Sendable PixelMap instance. |
| [Region](arkts-sendableimage-region-i.md) | 表示区域信息。 继承自[lang.ISendable](docroot://arkts-utils/arkts-sendable.md#isendable)。 |
| [Size](arkts-sendableimage-size-i.md) | 表示图片尺寸。 继承自[lang.ISendable](docroot://arkts-utils/arkts-sendable.md#isendable)。 |

### Types

| Name | Description |
| --- | --- |
| [ISendable](arkts-sendableimage-isendable-t.md) | ISendable是所有Sendable类型（除null和undefined）的父类型。自身没有任何必须的方法和属性。 |

