# createAuxiliaryPicture

## createAuxiliaryPicture

```TypeScript
function createAuxiliaryPicture(buffer: ArrayBuffer, size: Size, type: AuxiliaryPictureType): AuxiliaryPicture
```

通过ArrayBuffer图片数据、辅助图尺寸、辅助图类型创建AuxiliaryPicture实例。该接口仅支持传入BGRA的连续像素数据，会创建出RGBA的辅助图。 由于图片占用内存较大，所以当AuxiliaryPicture实例使用完成后，应主动调用[release]image.AuxiliaryPicture.release方法及时释放内存。释放时应确保该实例的所有异步方法 均执行完成，且后续不再使用该实例。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 以buffer形式存放的图像数据。 |
| size | Size | Yes | 辅助图的尺寸。单位：像素（px）。 |
| type | AuxiliaryPictureType | Yes | 辅助图类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| AuxiliaryPicture | 如果操作成功，则返回AuxiliaryPicture实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
async function CreateAuxiliaryPicture(context: Context) {
  let funcName = "CreateAuxiliaryPicture";
  const resourceMgr = context.resourceManager;
  const rawFile = await resourceMgr.getRawFileContent("hdr.jpg"); // An HDR-compatible image is required.
  let auxBuffer: ArrayBuffer = rawFile.buffer as ArrayBuffer;
  let auxSize: Size = {
    height: 180,
    width: 240
  };
  let auxType: image.AuxiliaryPictureType = image.AuxiliaryPictureType.GAINMAP;
  let auxPictureObj: image.AuxiliaryPicture | null = image.createAuxiliaryPicture(auxBuffer, auxSize, auxType);
  if(auxPictureObj != null) {
    let type: image.AuxiliaryPictureType = auxPictureObj.getType();
    console.info(funcName, `CreateAuxiliaryPicture succeeded this.Aux_picture.type ${type}`);
  } else {
    console.error(funcName, 'CreateAuxiliaryPicture failed');
  }
}

```

