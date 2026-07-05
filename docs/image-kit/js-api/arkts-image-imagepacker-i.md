# ImagePacker

ImagePacker类，用于图片压缩和编码。 在调用ImagePacker的方法前，需要先通过[image.createImagePacker]image.createImagePacker构建一个ImagePacker实例。 编码期间，请避免修改或释放作为输入的ImageSource/PixelMap/Picture对象，以免出现crash或其他未定义行为。 由于图片占用内存较大，所以当ImagePacker实例使用完成后，应主动调用[release]image.ImagePacker.release(callback: AsyncCallback<void>)方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 当前支持的格式有：JPEG、WebP、PNG、HEIC<sup>12+</sup>、GIF<sup>18+</sup>、从API版本26.0.0开始支持TIFF格式（不同硬件设备支持情况不同，可通过ImagePacker的 supportedFormats属性查看）。

**Since:** 6

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## packBinaryImageToTiffData

```TypeScript
packBinaryImageToTiffData(bufferInfo: BinaryBufferInfo, options?: PackingOptionsForTiff): Promise<ArrayBuffer>
```

将二值图像数据编码为TIFF数据，以ArrayBuffer的形式返回。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bufferInfo | BinaryBufferInfo | Yes | 图像缓冲区信息。 |
| options | PackingOptionsForTiff | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise对象，返回编码后的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7800202 | Invalid parameter. Possible causes: 1. Invalid FD; 2. Compression algorithm  mismatch. |
| 7800301 | Encode failed. |

## packBinaryImageToTiffFile

```TypeScript
packBinaryImageToTiffFile(bufferInfo: BinaryBufferInfo, fd: int, options?: PackingOptionsForTiff): Promise<void>
```

将二值图像数据编码到入参fd对应的TIFF文件。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bufferInfo | BinaryBufferInfo | Yes | 图像缓冲区信息。 |
| fd | int | Yes | 文件描述符ID。该值必须为正整数。 |
| options | PackingOptionsForTiff | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7800202 | Invalid parameter. Possible causes: 1. Invalid FD; 2. Compression algorithm  mismatch. |
| 7800301 | Encode failed. |

## packing

```TypeScript
packing(source: ImageSource, option: PackingOption, callback: AsyncCallback<ArrayBuffer>): void
```

图片压缩或重新编码。使用callback异步回调。 > **说明：** > > [packToData]image.ImagePacker.packToData(source: ImageSource, options: PackingOption)代替。

**Since:** 6

**Deprecated since:** 13

**Substitute:** image.ImagePacker#packToData

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | ImageSource | Yes | 编码的ImageSource。 |
| option | PackingOption | Yes | 设置编码参数。 |
| callback | AsyncCallback&lt;ArrayBuffer> | Yes | 回调函数，当图片编码成功，err为undefined，data为获取到的压缩或编码数据；否则为错误对象。 |

## packing

```TypeScript
packing(source: ImageSource, option: PackingOption): Promise<ArrayBuffer>
```

图片压缩或重新编码。使用Promise异步回调。 > **说明：** > > [packToData]image.ImagePacker.packToData(source: ImageSource, options: PackingOption)代替。

**Since:** 6

**Deprecated since:** 13

**Substitute:** image.ImagePacker#packToData

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | ImageSource | Yes | 编码的ImageSource。 |
| option | PackingOption | Yes | 设置编码参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise对象，返回压缩或编码后的数据。 |

## packing

```TypeScript
packing(source: PixelMap, option: PackingOption, callback: AsyncCallback<ArrayBuffer>): void
```

图片压缩或重新编码。使用callback异步回调。 > **说明：** > > [packToData]image.ImagePacker.packToData(source: ImageSource, options: PackingOption)代替。 > > **注意：** > > 接口如果返回"PixelMap mismatch"，表明参数异常，可能是PixelMap对象被提前释放了。需要调用方排查，在该方法调用结束后再释放PixelMap对象。

**Since:** 8

**Deprecated since:** 13

**Substitute:** image.ImagePacker#packToData

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | PixelMap | Yes | 编码的PixelMap资源。 |
| option | PackingOption | Yes | 设置编码参数。 |
| callback | AsyncCallback&lt;ArrayBuffer> | Yes | 回调函数，当图片编码成功，err为undefined，data为获取到的压缩或编码数据；否则为错误对象。 |

## packing

```TypeScript
packing(source: PixelMap, option: PackingOption): Promise<ArrayBuffer>
```

图片压缩或重新编码。使用Promise异步回调。 > **说明：** > > [packToData]image.ImagePacker.packToData(source: ImageSource, options: PackingOption)代替。 > > **注意：** > > 接口如果返回"PixelMap mismatch"，表明参数异常，可能是PixelMap对象被提前释放了。需要调用方排查，在该方法调用结束后再释放PixelMap对象。

**Since:** 8

**Deprecated since:** 13

**Substitute:** image.ImagePacker#packToData

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | PixelMap | Yes | 编码的PixelMap源。 |
| option | PackingOption | Yes | 设置编码参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise对象，返回压缩或编码后的数据。 |

## packing

```TypeScript
packing(picture: Picture, options: PackingOption): Promise<ArrayBuffer>
```

将图像压缩或重新编码。使用Promise异步回调。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| picture | Picture | Yes | 编码的Picture对象。 |
| options | PackingOption | Yes | 设置编码参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise对象，返回压缩或编码后的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 7800301 | Encode failed. |

## packToData

```TypeScript
packToData(source: ImageSource, options: PackingOption): Promise<ArrayBuffer>
```

图片压缩或重新编码。使用Promise异步回调。

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | ImageSource | Yes | 编码的ImageSource。 |
| options | PackingOption | Yes | 设置编码参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise对象，返回压缩或编码后的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the parameter is invalid. |
| 62980096 | The operation failed. Possible cause: 1.Image upload exception.  2. Decoding process exception. 3. Insufficient memory. |
| 62980101 | The image data is abnormal. |
| 62980106 | The image data is too large. This status code is thrown when an error occurs  during the process of checking size. |
| 62980113 | Unknown image format.  The image data provided is not in a recognized or supported format, or it may be corrupted. |
| 62980119 | Failed to encode the image. |
| 62980120 | Add pixelmap out of range. |
| 62980172 | Failed to encode icc. |
| 62980252 | Failed to create surface. |

## packToData

```TypeScript
packToData(source: PixelMap, options: PackingOption): Promise<ArrayBuffer>
```

图片压缩或重新编码。使用Promise异步回调。 > **注意：** > > 接口如果返回401错误码，表明参数异常，可能是PixelMap对象被提前释放了。需要调用方排查，在该方法调用结束后再释放PixelMap对象。

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | PixelMap | Yes | 编码的PixelMap源。 |
| options | PackingOption | Yes | 设置编码参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise对象，返回压缩或编码后的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the parameter is invalid. |
| 62980096 | The operation failed. Possible cause: 1.Image upload exception.  2. Decoding process exception. 3. Insufficient memory. |
| 62980101 | The image data is abnormal. |
| 62980106 | The image data is too large. This status code is thrown when an error occurs  during the process of checking size. |
| 62980113 | Unknown image format.  The image data provided is not in a recognized or supported format, or it may be corrupted. |
| 62980119 | Failed to encode the image. |
| 62980120 | Add pixelmap out of range. |
| 62980172 | Failed to encode icc. |
| 62980252 | Failed to create surface. |

## packToDataFromPixelmapSequence

```TypeScript
packToDataFromPixelmapSequence(pixelmapSequence: Array<PixelMap>, options: PackingOptionsForSequence): Promise<ArrayBuffer>
```

将多个PixelMap编码成GIF数据。使用Promise异步回调。

**Since:** 18

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelmapSequence | Array&lt;PixelMap> | Yes | 待编码的PixelMap序列。 |
| options | PackingOptionsForSequence | Yes | 动图编码参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise对象，返回编码后的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types;3.Parameter verification failed. |
| 7800301 | Failed to encode image. |

## packToFile

```TypeScript
packToFile(source: ImageSource, fd: int, options: PackingOption, callback: AsyncCallback<void>): void
```

指定编码参数，将ImageSource直接编码进文件。使用callback异步回调。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | ImageSource | Yes | 编码的ImageSource。 |
| fd | int | Yes | 文件描述符。取值范围为[0，65535]。 |
| options | PackingOption | Yes | 设置编码参数。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当编码进文件成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 62980096 | The operation failed. Possible cause: 1.Image upload exception.  2. Decoding process exception. 3. Insufficient memory. |
| 62980101 | The image data is abnormal. |
| 62980106 | The image data is too large. This status code is thrown when an error occurs  during the process of checking size. |
| 62980113 | Unknown image format.  The image data provided is not in a recognized or supported format, or it may be corrupted. |
| 62980115 | Invalid input parameter. |
| 62980119 | Failed to encode the image. |
| 62980120 | Add pixelmap out of range. |
| 62980172 | Failed to encode icc. |
| 62980252 | Failed to create surface. |

## packToFile

```TypeScript
packToFile(source: ImageSource, fd: int, options: PackingOption): Promise<void>
```

指定编码参数，将ImageSource直接编码进文件。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | ImageSource | Yes | 编码的ImageSource。 |
| fd | int | Yes | 文件描述符。取值范围为[0，65535]。 |
| options | PackingOption | Yes | 设置编码参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 62980096 | The operation failed. Possible cause: 1.Image upload exception.  2. Decoding process exception. 3. Insufficient memory. |
| 62980101 | The image data is abnormal. |
| 62980106 | The image data is too large. This status code is thrown when an error occurs  during the process of checking size. |
| 62980113 | Unknown image format.  The image data provided is not in a recognized or supported format, or it may be corrupted. |
| 62980115 | Invalid input parameter. |
| 62980119 | Failed to encode the image. |
| 62980120 | Add pixelmap out of range. |
| 62980172 | Failed to encode icc. |
| 62980252 | Failed to create surface. |

## packToFile

```TypeScript
packToFile(source: PixelMap, fd: int, options: PackingOption, callback: AsyncCallback<void>): void
```

指定编码参数，将PixelMap直接编码进文件。使用callback异步回调。 > **注意：** > > 接口如果返回62980115错误码，表明参数异常，可能是PixelMap对象被提前释放了。需要调用方排查，在该方法调用结束后再释放PixelMap对象。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | PixelMap | Yes | 编码的PixelMap资源。 |
| fd | int | Yes | 文件描述符。取值范围为[0，65535]。 |
| options | PackingOption | Yes | 设置编码参数。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当编码图片进文件成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 62980096 | The operation failed. Possible cause: 1.Image upload exception.  2. Decoding process exception. 3. Insufficient memory. |
| 62980101 | The image data is abnormal. |
| 62980106 | The image data is too large. This status code is thrown when an error occurs  during the process of checking size. |
| 62980113 | Unknown image format.  The image data provided is not in a recognized or supported format, or it may be corrupted. |
| 62980115 | Invalid input parameter. |
| 62980119 | Failed to encode the image. |
| 62980120 | Add pixelmap out of range. |
| 62980172 | Failed to encode icc. |
| 62980252 | Failed to create surface. |

## packToFile

```TypeScript
packToFile(source: PixelMap, fd: int, options: PackingOption): Promise<void>
```

指定编码参数，将PixelMap直接编码进文件。使用Promise异步回调。 > **注意：** > > 接口如果返回62980115错误码，表明参数异常，可能是PixelMap对象被提前释放了。需要调用方排查，在该方法调用结束后再释放PixelMap对象。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | PixelMap | Yes | 编码的PixelMap资源。 |
| fd | int | Yes | 文件描述符。取值范围为[0，65535]。 |
| options | PackingOption | Yes | 设置编码参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 62980096 | The operation failed. Possible cause: 1.Image upload exception.  2. Decoding process exception. 3. Insufficient memory. |
| 62980101 | The image data is abnormal. |
| 62980106 | The image data is too large. This status code is thrown when an error occurs  during the process of checking size. |
| 62980113 | Unknown image format.  The image data provided is not in a recognized or supported format, or it may be corrupted. |
| 62980115 | Invalid input parameter. |
| 62980119 | Failed to encode the image. |
| 62980120 | Add pixelmap out of range. |
| 62980172 | Failed to encode icc. |
| 62980252 | Failed to create surface. |

## packToFile

```TypeScript
packToFile(picture: Picture, fd: int, options: PackingOption): Promise<void>
```

指定编码参数，将Picture直接编码进文件。使用Promise异步回调。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| picture | Picture | Yes | 编码的Picture资源。 |
| fd | int | Yes | 文件描述符。取值范围为[0，65535]。 |
| options | PackingOption | Yes | 设置编码参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 7800301 | Encode failed. |

## packToFileFromPixelmapSequence

```TypeScript
packToFileFromPixelmapSequence(pixelmapSequence: Array<PixelMap>, fd: int, options: PackingOptionsForSequence): Promise<void>
```

指定编码参数，将多个PixelMap编码成GIF文件。使用Promise异步回调。

**Since:** 18

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelmapSequence | Array&lt;PixelMap> | Yes | 待编码的PixelMap序列。 |
| fd | int | Yes | 文件描述符。取值范围为[0，65535]。 |
| options | PackingOptionsForSequence | Yes | 动图编码参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types;3.Parameter verification failed. |
| 7800301 | Failed to encode image. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

释放图片编码实例。使用callback异步回调。 由于图片占用内存较大，所以当ImagePacker实例使用完成后，应主动调用该方法，及时释放内存。 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 6

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当释放图片编码实例成功，err为undefined，否则为错误对象。 |

## release

```TypeScript
release(): Promise<void>
```

释放图片编码实例。使用Promise异步回调。 由于图片占用内存较大，所以当ImagePacker实例使用完成后，应主动调用该方法，及时释放内存。 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 6

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

## supportedFormats

```TypeScript
readonly supportedFormats: Array<string>
```

图片编码支持的格式，包括：JPEG、WebP、PNG、HEIC<sup>12+</sup>、GIF<sup>18+</sup>、从API版本26.0.0开始支持TIFF格式（不同硬件设备支持情况不同）。

**Type:** Array<string>

**Since:** 6

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

