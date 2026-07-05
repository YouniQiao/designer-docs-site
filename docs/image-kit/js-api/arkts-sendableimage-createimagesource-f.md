# createImageSource

## createImageSource

```TypeScript
function createImageSource(uri: string): ImageSource
```

通过传入的uri创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]sendableImage.PixelMap.release方法及时释放内存。释放时应确保该实例的所有异步方法均执行完 成，且后续不再使用该实例。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 图片路径，当前仅支持应用沙箱路径。当前支持格式有：.jpg .png .gif .bmp .webp .dng  [SVG](docroot://reference/apis-image-kit/arkts-apis-image-f.md#svg标签说明) .ico。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | 返回ImageSource类实例，失败时返回undefined。 |

## createImageSource

```TypeScript
function createImageSource(fd: number): ImageSource
```

通过传入文件描述符来创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]sendableImage.PixelMap.release方法及时释放内存。释放时应确保该实例的所有异步方法均执行完 成，且后续不再使用该实例。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 文件描述符fd。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | 返回ImageSource类实例，失败时返回undefined。 |

## createImageSource

```TypeScript
function createImageSource(buf: ArrayBuffer): ImageSource
```

通过缓冲区创建ImageSource实例。buf数据是未解码的数据，不可以传入类似于RBGA，YUV的像素buffer数据，如果想通过像素buffer数据创建pixelMap，可以调用 [sendableImage.createPixelMap]sendableImage.createPixelMap这一类方法。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]sendableImage.PixelMap.release方法及时释放内存。释放时应确保该实例的所有异步方法均执行完 成，且后续不再使用该实例。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buf | ArrayBuffer | Yes | 图像缓冲区数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | 返回ImageSource类实例，失败时返回undefined。 |

