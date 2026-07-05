# createPicture

## createPicture

```TypeScript
function createPicture(mainPixelmap : PixelMap): Picture
```

通过主图的PixelMap创建一个Picture对象。 由于图片占用内存较大，所以当Picture对象使用完成后，应主动调用[release]image.Picture.release方法及时释放内存。释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mainPixelmap | PixelMap | Yes | 主图的PixelMap。 |

**Return value:**

| Type | Description |
| --- | --- |
| Picture | 返回Picture对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
async function CreatePicture(context: Context) {
  const resourceMgr = context.resourceManager;
  const rawFile = await resourceMgr.getRawFileContent("test.jpg");
  let ops: image.SourceOptions = {
    sourceDensity: 98,
  }
  let imageSource: image.ImageSource = image.createImageSource(rawFile.buffer as ArrayBuffer, ops);
  let commodityPixelMap: image.PixelMap = await imageSource.createPixelMap();
  let pictureObj: image.Picture = image.createPicture(commodityPixelMap);
  if (pictureObj != null) {
    console.info('Create picture succeeded');
  } else {
    console.error('Create picture failed');
  }
}

```

