# ImageSource

ImageSource类，用于获取图片相关信息。在调用ImageSource的方法前，需要先通过 [sendableImage.createImageSource]sendableImage.createImageSource构建一个ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]sendableImage.PixelMap.release方法及时释放内存。释放时应确保该实例的所有异步方法均执行 完成，且后续不再使用该实例。

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.ImageSource

## Modules to Import

```TypeScript
import { sendableImage } from '@kit.ImageKit';
```

## createPixelMap

```TypeScript
createPixelMap(options?: image.DecodingOptions): Promise<PixelMap>
```

通过图片解码参数创建PixelMap对象。使用Promise异步回调。 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]sendableImage.PixelMap.release方法及时释放内存。释放时应确保该对象的所有异步方法均执行完成， 且后续不再使用该对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | image.DecodingOptions | No | 解码参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PixelMap> | Promise实例，用于异步返回创建结果。 |

## release

```TypeScript
release(): Promise<void>
```

释放ImageSource实例。使用Promise异步回调。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用该方法，及时释放内存。 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise实例，异步返回结果。 |

