# createImageCreator

## createImageCreator

```TypeScript
function createImageCreator(width: number, height: number, format: number, capacity: number): ImageCreator
```

通过宽、高、图片格式、容量创建ImageCreator实例。 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用[release]image.ImageCreator.release(callback: AsyncCallback<void>)方法 及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 > **说明：** > > 从API version 9开始支持，从API version 11废弃，建议使用[createImageCreator]image.createImageCreator代替。

**Since:** 9

**Deprecated since:** 11

**Substitute:** image.createImageCreator(size:

**System capability:** SystemCapability.Multimedia.Image.ImageCreator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | 图像的默认宽度。单位：像素（px）。 |
| height | number | Yes | 图像的默认高度。单位：像素（px）。 |
| format | number | Yes | 图像格式，如YCBCR_422_SP，JPEG。 |
| capacity | number | Yes | 同时访问的最大图像数。该参数仅作为期望值，实际capacity由设备硬件决定。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageCreator | 如果操作成功，则返回ImageCreator实例。 |

**Example**

```TypeScript
let creator: image.ImageCreator = image.createImageCreator(8192, 8192, image.ImageFormat.JPEG, 8);

```

## createImageCreator

```TypeScript
function createImageCreator(size: Size, format: ImageFormat, capacity: int): ImageCreator
```

通过图片大小、图片格式、容量创建ImageCreator实例。 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用[release]image.ImageCreator.release(callback: AsyncCallback<void>)方法 及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Image.ImageCreator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | Size | Yes | 图像的默认大小。单位：像素（px）。 |
| format | ImageFormat | Yes | 图像格式，如YCBCR_422_SP，JPEG。 |
| capacity | int | Yes | 同时访问的最大图像数。该参数仅作为期望值，实际capacity由设备硬件决定。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageCreator | 如果操作成功，则返回ImageCreator实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types; |

**Example**

```TypeScript
let size: image.Size = {
  height: 8192,
  width: 8192
}
let creator: image.ImageCreator = image.createImageCreator(size, image.ImageFormat.JPEG, 8);

```

