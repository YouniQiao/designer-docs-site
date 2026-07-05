# createPictureByHdrAndSdrPixelMap

## createPictureByHdrAndSdrPixelMap

```TypeScript
function createPictureByHdrAndSdrPixelMap(hdrPixelMap: PixelMap, sdrPixelMap: PixelMap): Promise<Picture>
```

根据HDR PixelMap和SDR PixelMap创建Picture对象。系统将使用HDR和SDR PixelMap生成一个增益图（gainmap），返回的Picture对象将包含SDR PixelMap和生成的gainmap PixelMap，像素格式为RGBA8888。使用Promise异步回调。

**Since:** 20

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hdrPixelMap | PixelMap | Yes | HDR PixelMap，位深16bit或10bit，像素格式为FP16/RGBA1010102/YCBCR_P010，色彩空间是BT2020_HLG。 |
| sdrPixelMap | PixelMap | Yes | SDR PixelMap，位深8bit，像素格式为RGBA8888/NV21，色彩空间是P3。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Picture> | 返回Picture包含sdr和gainmap，像素格式为RGBA8888。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600201 | Unsupported operation. HdrPixelMap's PixelMapFormat is not  RGBA_F16\RGBA_1010102\YCBCR_P010, or its color space is not BT2020_HLG. Or sdrPixelMap's PixelMapFormat is not  RGBA_8888\NV21\NV12, or its color space is not P3. |

**Example**

```TypeScript
import { fileIo } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function CreatePictureTest(context: Context) {
  const resourceMgr = context.resourceManager;
  const rawFile = await resourceMgr.getRawFileContent("test.jpg"); // SDR
  let imageSource: image.ImageSource = image.createImageSource(rawFile);
  let options1: image.DecodingOptions = {
    desiredDynamicRange : image.DecodingDynamicRange.SDR,
  }
  let options2: image.DecodingOptions = {
    desiredDynamicRange : image.DecodingDynamicRange.HDR, // Decode an SDR PixelMap into an HDR PixelMap using AIHDR.
  }
  let sdrPixelMap = await imageSource.createPixelMap(options1);
  let hdrPixelMap = await imageSource.createPixelMap(options2);

  // Obtain the gainmap generated and encode the gainmap.
  let picture: image.Picture = await image.createPictureByHdrAndSdrPixelMap(hdrPixelMap, sdrPixelMap);
  if (picture != null) {
    console.info('Create picture succeeded');
  } else {
    console.error('Create picture failed');
  }
  const imagePackerObj = image.createImagePacker();
  let packOpts : image.PackingOption = { format : "image/jpeg", quality: 98};
  packOpts.desiredDynamicRange = image.PackingDynamicRange.AUTO;
  const path: string = context.filesDir + "/hdr-test.jpg";
  let file = fileIo.openSync(path, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
  imagePackerObj.packToFile(picture, file.fd, packOpts).then(() => {
  }).catch((error : BusinessError) => {
    console.error('Failed to pack the image. And the error is: ' + error);
  })
}

```

## createPictureByHdrAndSdrPixelMap

```TypeScript
function createPictureByHdrAndSdrPixelMap(hdrPixelMap: PixelMap, sdrPixelMap: PixelMap, 
      params: GainmapParams): Promise<Picture>
```

根据HDR PixelMap和SDR PixelMap创建Picture对象。系统将使用HDR和SDR PixelMap生成一个Gainmap（增益图），返回的Picture对象将包含SDR PixelMap和生成的Gainmap PixelMap，像素格式为RGBA8888。Gainmap PixelMap的尺寸可以通过设置params进行选择。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hdrPixelMap | PixelMap | Yes | HDR PixelMap，位深16bit或10bit，像素格式为RGBA_F16/RGBA_1010102/YCBCR_P010，色彩空间是BT2020_HLG。 |
| sdrPixelMap | PixelMap | Yes | SDR PixelMap，位深8bit，像素格式为RGBA_8888/NV21，色彩空间是P3。 |
| params | GainmapParams | Yes | Gainmap Params，增益图参数设置选项，决定是否使用全尺寸增益图。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Picture> | Promise对象，返回Picture包含SDR和Gainmap，像素格式为RGBA_8888。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |
| 7600201 | Unsupported operation. HdrPixelMap's PixelMapFormat is not  RGBA_F16\RGBA_1010102\YCBCR_P010, or its color space is not BT2020_HLG. Or sdrPixelMap's PixelMapFormat is  not RGBA_8888\NV21\NV12, or its color space is not P3. |

