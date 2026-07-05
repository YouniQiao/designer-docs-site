# createImageReceiver

## createImageReceiver

```TypeScript
function createImageReceiver(width: number, height: number, format: number, capacity: number): ImageReceiver
```

通过宽、高、图片格式、容量创建ImageReceiver实例。ImageReceiver做为图片的接收方、消费者，它的参数属性实际上不会对接收到的图片产生影响。图片属性的配置应在发送方、生产者进行，如相机预览流 [createPreviewOutput](../../apis-camera-kit/arkts-apis/arkts-camera-cameramanager-i.md#createPreviewOutput) 。 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]image.ImageReceiver.release(callback: AsyncCallback<void>) 方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 > **说明：** > > 从API version 9开始支持，从API version 11废弃，建议使用[createImageReceiver]image.createImageReceiver代替。

**Since:** 9

**Deprecated since:** 11

**Substitute:** image.createImageReceiver(size:

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | 图像的默认宽度。单位：像素（px）。该参数不会影响接收到的图片宽度，实际宽度由生产者决定，如相机。 |
| height | number | Yes | 图像的默认高度。单位：像素（px）。该参数不会影响接收到的图片高度，实际高度由生产者决定，如相机。 |
| format | number | Yes | 图像格式，取值为[ImageFormat]image.ImageFormat常量（目前仅支持 ImageFormat:JPEG，实际返回格式由生产者决定，如相机  ）。 |
| capacity | number | Yes | 同时访问的最大图像数。该参数仅作为期望值，实际capacity由设备硬件决定。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageReceiver | 如果操作成功，则返回ImageReceiver实例。 |

**Example**

```TypeScript
let receiver: image.ImageReceiver = image.createImageReceiver(8192, 8192, image.ImageFormat.JPEG, 8);

```

## createImageReceiver

```TypeScript
function createImageReceiver(size: Size, format: ImageFormat, capacity: int): ImageReceiver
```

通过图片大小、图片格式、容量创建ImageReceiver实例。ImageReceiver作为图片的接收方、消费者，它的参数属性实际上不会对接收到的图片产生影响。图片属性的配置应在发送方、生产者进行，如相机预览流 [createPreviewOutput](../../apis-camera-kit/arkts-apis/arkts-camera-cameramanager-i.md#createPreviewOutput) 。 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]image.ImageReceiver.release(callback: AsyncCallback<void>) 方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | Size | Yes | 图像的默认大小。单位：像素（px）。该参数不会影响接收到的图片大小，实际返回大小由生产者决定，如相机。 |
| format | ImageFormat | Yes | 图像格式，取值为[ImageFormat]image.ImageFormat常量（目前仅支持 ImageFormat:JPEG，实际返回格式由生产者决  定，如相机）。 |
| capacity | int | Yes | 同时访问的最大图像数。该参数仅作为期望值，实际capacity由设备硬件决定。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageReceiver | 如果操作成功，则返回ImageReceiver实例。 |

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
let receiver: image.ImageReceiver = image.createImageReceiver(size, image.ImageFormat.JPEG, 8);

```

## createImageReceiver

```TypeScript
function createImageReceiver(options?: ImageReceiverOptions): ImageReceiver | undefined
```

通过ImageReceiverOptions创建ImageReceiver实例。ImageReceiver作为图片的接收方、消费者，其参数属性实际上不会对接收到的图片产生影响。图片属性的配置应在发送方、生产者进行，如相机预览流 [createPreviewOutput](../../apis-camera-kit/arkts-apis/arkts-camera-cameramanager-i.md#createPreviewOutput) 。 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]image.ImageReceiver.release(callback: AsyncCallback<void>) 方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ImageReceiverOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ImageReceiver | 操作成功时返回ImageReceiver实例，否则返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7900201 | Invalid parameter. |

**Example**

```TypeScript
let options: image.ImageReceiverOptions = {
  size: { width: 480, height: 480 },
  capacity: 3
}
let receiver: image.ImageReceiver | undefined = image.createImageReceiver(options);

```

