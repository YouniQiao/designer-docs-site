# CreateIncrementalSource

## CreateIncrementalSource

```TypeScript
function CreateIncrementalSource(buf: ArrayBuffer): ImageSource
```

通过缓冲区以增量的方式创建ImageSource实例，IncrementalSource不支持读写Exif信息。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]image.ImageSource.release(callback: AsyncCallback<void>)方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 以增量方式创建的ImageSource实例，仅支持使用以下功能，同步、异步callback、异步Promise均支持。 - 获取图片信息：指定序号-[getImageInfo]image.ImageSource.getImageInfo(index: int, callback: AsyncCallback<ImageInfo>)、 直接获取-[getImageInfo]image.ImageSource.getImageInfo(callback: AsyncCallback<ImageInfo>) - 获取图片中给定索引处图像的指定属性键的值： [getImageProperty]image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions) - 批量获取图片中的指定属性键的值：[getImageProperties]image.ImageSource.getImageProperties(key: Array<PropertyKey>) - 更新增量数据： [updateData]image.ImageSource.updateData(buf: ArrayBuffer, isFinished: boolean, offset: int, length: int) - 创建PixelMap对象：通过图片解码参数创建-[createPixelMap]image.createPixelMap、通过默认参数创建- [createPixelMap]image.createPixelMap 、通过图片解码参数-[createPixelMap]image.createPixelMap - 释放ImageSource实例：[release]image.ImageSource.release(callback: AsyncCallback<void>)

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buf | ArrayBuffer | Yes | 增量数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | 返回ImageSource，失败时返回undefined。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function CreateIncrementalImageSource(context : Context) {
  let imageArray = context.resourceManager.getMediaContentSync($r('app.media.startIcon').id); // Obtain the image resource.
  // 'app.media.startIcon' is only an example. Replace it with the actual one in use. Otherwise, the imageArray instance fails to be created, and subsequent operations cannot be performed.
  let splitBuff1 = imageArray.slice(0, imageArray.byteLength / 2);  // Image slice.
  let splitBuff2 = imageArray.slice(imageArray.byteLength / 2);
  const imageSourceIncrementalSApi: image.ImageSource = image.CreateIncrementalSource(new ArrayBuffer(imageArray.byteLength));
  imageSourceIncrementalSApi.updateData(splitBuff1, false, 0, splitBuff1.byteLength).then(() => {
    imageSourceIncrementalSApi.updateData(splitBuff2, true, 0, splitBuff2.byteLength).then(() => {
      let pixelMap = imageSourceIncrementalSApi.createPixelMapSync();
      let imageInfo = pixelMap.getImageInfoSync();
      console.info('Succeeded in creating pixelMap');
    }).catch((error : BusinessError) => {
      console.error(`Failed to updateData error code is ${error.code}, message is ${error.message}`);
    })
  }).catch((error : BusinessError) => {
    console.error(`Failed to updateData error code is ${error.code}, message is ${error.message}`);
  })
}

```

## CreateIncrementalSource

```TypeScript
function CreateIncrementalSource(buf: ArrayBuffer, options?: SourceOptions): ImageSource
```

通过缓冲区以增量的方式创建ImageSource实例，IncrementalSource不支持读写Exif信息。 此接口支持的功能与[CreateIncrementalSource(buf: ArrayBuffer): ImageSource]image.CreateIncrementalSource所生成的实例支持的功能相 同。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]image.ImageSource.release(callback: AsyncCallback<void>)方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buf | ArrayBuffer | Yes | 增量数据。 |
| options | SourceOptions | No | 图片属性，包括图片像素密度、像素格式和图片尺寸。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | 返回ImageSource，失败时返回undefined。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function CreateIncrementalImageSource(context : Context) {
  let imageArray = context.resourceManager.getMediaContentSync($r('app.media.startIcon').id); // Obtain the image resource.
  // 'app.media.startIcon' is only an example. Replace it with the actual one in use. Otherwise, the imageArray instance fails to be created, and subsequent operations cannot be performed.
  let splitBuff1 = imageArray.slice(0, imageArray.byteLength / 2);  // Image slice.
  let splitBuff2 = imageArray.slice(imageArray.byteLength / 2);
  let sourceOptions: image.SourceOptions = { sourceDensity: 120};

  const imageSourceIncrementalSApi: image.ImageSource = image.CreateIncrementalSource(new ArrayBuffer(imageArray.byteLength), sourceOptions);
  imageSourceIncrementalSApi.updateData(splitBuff1, false, 0, splitBuff1.byteLength).then(() => {
    imageSourceIncrementalSApi.updateData(splitBuff2, true, 0, splitBuff2.byteLength).then(() => {
      let pixelMap = imageSourceIncrementalSApi.createPixelMapSync();
      let imageInfo = pixelMap.getImageInfoSync();
      console.info('Succeeded in creating pixelMap');
    }).catch((error : BusinessError) => {
      console.error(`Failed to updateData error code is ${error.code}, message is ${error.message}`);
    })
  }).catch((error : BusinessError) => {
    console.error(`Failed to updateData error code is ${error.code}, message is ${error.message}`);
  })
}

```

