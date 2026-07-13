# CreateIncrementalSource

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## CreateIncrementalSource

```TypeScript
function CreateIncrementalSource(buf: ArrayBuffer): ImageSource
```

Creates an ImageSource instance in incremental mode based on buffers. Such an instance does not support reading or
writing of Exif information.

Images occupy a large amount of memory. When you finish using an ImageSource instance, call
[release](arkts-image-imagesource-i.md#release-1) to free the memory
promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have
finished and the instance is no longer needed.

The ImageSource instance created in incremental mode supports the following capabilities (applicable to synchronous
, callback, and promise modes):

- Obtaining image information: Call
[getImageInfo](arkts-image-imagesource-i.md#getimageinfo-1)
to obtain image information by index, or call
[getImageInfo](arkts-image-imagesource-i.md#getimageinfo-3) to
directly obtain image information.
- Obtaining an image property: Call
[getImageProperty](arkts-image-imagesource-i.md#getimageproperty-1)
to obtain the value of a property with the specified index in an image.
- Obtaining image properties: Call
[getImageProperties](arkts-image-imagesource-i.md#getimageproperties-1) to
obtain the values of properties with the given names in an image.
- Updating incremental data: Call
[updateData](arkts-image-imagesource-i.md#updatedata-1)
.
- Creating a PixelMap object: Call
[createPixelMap](arkts-image-imagesource-i.md#createpixelmap-1) or
[createPixelMap](arkts-image-imagesource-i.md#createpixelmap-5)
to create a PixelMap object based on decoding options; call
[createPixelMap](arkts-image-imagesource-i.md#createpixelmap-3)
to create a PixelMap object based on default parameters.
- Releasing an ImageSource instance: Call
[release](arkts-image-imagesource-i.md#release-1).

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buf | ArrayBuffer | Yes | Incremental data. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | ImageSource instance. If the operation fails, undefined is returned. |

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

Creates an ImageSource instance in incremental mode based on buffers. Such an instance does not support reading or
writing of Exif information.

The capabilities supported by the ImageSource instance created by this API are the same as those supported by the
instance created by
[CreateIncrementalSource(buf: ArrayBuffer): ImageSource](arkts-image-createincrementalsource-f.md#createincrementalsource-1).
Images occupy a large amount of memory. When you finish using an ImageSource instance, call
[release](arkts-image-imagesource-i.md#release-1) to free the memory
promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have
finished and the instance is no longer needed.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buf | ArrayBuffer | Yes | Incremental data. |
| options | SourceOptions | No | Image properties, including the image pixel density, pixel format, and imagesize. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | ImageSource instance. If the operation fails, undefined is returned. |

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

