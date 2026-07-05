# createImageSource

## createImageSource

```TypeScript
function createImageSource(uri: string): ImageSource
```

通过传入的uri创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]image.ImageSource.release(callback: AsyncCallback<void>)方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 图片路径，当前仅支持应用沙箱路径。  当前支持格式有：JPEG、PNG、GIF、BMP、WebP、DNG、HEIC12+、WBMP23+、HEIFS23+、TIFF23+、SVG10+（可参考[SVG标签说明](docroot://reference/apis-image-kit/arkts-apis-image-f.md#svg标签说明)）、ICO  11+。从API版本26.0.0开始，增加支持AVIF、AVIS格式。  部分格式的解码能力依赖于具体的设备硬件，建议在调用前使用  [image.getImageSourceSupportedFormats]image.getImageSourceSupportedFormats接口，动态查询当前设备上的解码能力。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | 返回ImageSource类实例，失败时返回undefined。 |

**Example**

```TypeScript
async function CreateImageSource(context : Context) {
  // 'test.jpg' is only an example. Replace it with the actual one in use. Otherwise, the imageSource instance fails to be created, and subsequent operations cannot be performed.
  const path: string = context.filesDir + "/test.jpg";
  const imageSourceObj: image.ImageSource = image.createImageSource(path);
}

```

## createImageSource

```TypeScript
function createImageSource(uri: string, options: SourceOptions): ImageSource
```

通过传入的uri创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]image.ImageSource.release(callback: AsyncCallback<void>)方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 图片路径，当前仅支持应用沙箱路径（可参考[使用说明](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#使用说明)）  。  当前支持格式有：JPEG、PNG、GIF、BMP、WebP、DNG、HEIC12+、WBMP23+、HEIFS23+、TIFF23+、SVG10+（可参考[SVG标签说明](docroot://reference/apis-image-kit/arkts-apis-image-f.md#svg标签说明)）、ICO  11+。从API版本26.0.0开始，增加支持AVIF、AVIS格式。部分格式的解码能力依赖于具体的设备硬件，建议在调用前使用  [image.getImageSourceSupportedFormats]image.getImageSourceSupportedFormats接口，动态查询当前设备上的解码能力。 |
| options | SourceOptions | Yes | 图片属性，包括图片像素密度、像素格式和图片尺寸。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | 返回ImageSource类实例，失败时返回undefined。 |

**Example**

```TypeScript
async function CreateImageSource(context : Context) {
  let sourceOptions: image.SourceOptions = { sourceDensity: 120 };
  // 'test.png' is only an example. Replace it with the actual one in use. Otherwise, the imageSource instance fails to be created, and subsequent operations cannot be performed.
  const path: string = context.filesDir + "/test.png";
  let imageSourceObj: image.ImageSource = image.createImageSource(path, sourceOptions);
}

```

## createImageSource

```TypeScript
function createImageSource(fd: int): ImageSource
```

通过传入文件描述符来创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]image.ImageSource.release(callback: AsyncCallback<void>)方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | int | Yes | 文件描述符fd。取值范围为[0，65535]。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | 返回ImageSource类实例，失败时返回undefined。 |

**Example**

```TypeScript
import { fileIo } from '@kit.CoreFileKit';

async function CreateImageSource(context : Context) {
  // 'test.jpg' is only an example. Replace it with the actual one in use. Otherwise, the imageSource instance fails to be created, and subsequent operations cannot be performed.
  let filePath: string = context.filesDir + "/test.jpg";
  let file = fileIo.openSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
  const imageSourceObj: image.ImageSource = image.createImageSource(file.fd);
}

```

## createImageSource

```TypeScript
function createImageSource(fd: int, options: SourceOptions): ImageSource
```

通过传入文件描述符来创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]image.ImageSource.release(callback: AsyncCallback<void>)方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | int | Yes | 文件描述符fd。取值范围为[0，65535]。 |
| options | SourceOptions | Yes | 图片属性，包括图片像素密度、像素格式和图片尺寸。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | 返回ImageSource类实例，失败时返回undefined。 |

**Example**

```TypeScript
import { fileIo } from '@kit.CoreFileKit';

async function CreateImageSource(context : Context) {
  let sourceOptions: image.SourceOptions = { sourceDensity: 120 };
  // 'test.jpg' is only an example. Replace it with the actual one in use. Otherwise, the imageSource instance fails to be created, and subsequent operations cannot be performed.
  const filePath: string = context.filesDir + "/test.jpg";
  let file = fileIo.openSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
  const imageSourceObj: image.ImageSource = image.createImageSource(file.fd, sourceOptions);
}

```

## createImageSource

```TypeScript
function createImageSource(buf: ArrayBuffer): ImageSource
```

通过缓冲区创建ImageSource实例。buf数据是未解码的数据，不可以传入类似于RBGA，YUV的像素buffer数据，如果想通过像素buffer数据创建pixelMap，可以调用 [image.createPixelMapSync]image.createPixelMapSync这一类接口。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]image.ImageSource.release(callback: AsyncCallback<void>)方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buf | ArrayBuffer | Yes | 图像缓冲区数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | 返回ImageSource类实例，失败时返回undefined。 |

**Example**

```TypeScript
async function CreateImageSource() {
  const buf: ArrayBuffer = new ArrayBuffer(96); // 96 is the size of the pixel buffer to create. The value is calculated as follows: height * width *4.
  const imageSourceObj: image.ImageSource = image.createImageSource(buf);
}

```

## createImageSource

```TypeScript
function createImageSource(buf: ArrayBuffer, options: SourceOptions): ImageSource
```

通过缓冲区创建ImageSource实例。buf数据是未解码的数据，不可以传入类似于RBGA，YUV的像素buffer数据，如果想通过像素buffer数据创建pixelMap，可以调用 [image.createPixelMapSync]image.createPixelMapSync这一类接口。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]image.ImageSource.release(callback: AsyncCallback<void>)方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buf | ArrayBuffer | Yes | 图像缓冲区数组。 |
| options | SourceOptions | Yes | 图片属性，包括图片像素密度、像素格式和图片尺寸。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | 返回ImageSource类实例，失败时返回undefined。 |

**Example**

```TypeScript
async function CreateImageSource() {
  const data: ArrayBuffer = new ArrayBuffer(112);
  let sourceOptions: image.SourceOptions = { sourceDensity: 120 };
  const imageSourceObj: image.ImageSource = image.createImageSource(data, sourceOptions);
}

```

## createImageSource

```TypeScript
function createImageSource(rawfile: resourceManager.RawFileDescriptor, options?: SourceOptions): ImageSource
```

通过图像资源文件的RawFileDescriptor创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]image.ImageSource.release(callback: AsyncCallback<void>)方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rawfile | resourceManager.RawFileDescriptor | Yes | 图像资源文件的RawFileDescriptor。 |
| options | SourceOptions | No | 图片属性，包括图片像素密度、像素格式和图片尺寸。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | 返回ImageSource类实例，失败时返回undefined。 |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';
  
async function CreateImageSource(context : Context) {
  // Obtain a resource manager.
  const resourceMgr: resourceManager.ResourceManager = context.resourceManager;
  // 'test.jpg' is only an example. Replace it with the actual one in use. Otherwise, the imageSource instance fails to be created, and subsequent operations cannot be performed.
  resourceMgr.getRawFd('test.jpg').then((rawFileDescriptor: resourceManager.RawFileDescriptor) => {
    const imageSourceObj: image.ImageSource = image.createImageSource(rawFileDescriptor);
  }).catch((error: BusinessError) => {
    console.error(`Failed to get RawFileDescriptor.code is ${error.code}, message is ${error.message}`);
  })
}

```

