# Picture

Picture类，一些包含特殊信息的图片可以解码为Picture（也可以称为多图对象）。多图对象一般包含主图、辅助图和元数据。其中主图包含图像的大部分信息，主要用于显示图像内容；辅助图用于存储与主图相关但不同的数据，展示图像更丰富 的信息；元数据一般用来存储关于图像文件的信息。多图对象类用于读取或写入多图对象。在调用Picture的方法前，需要先通过[image.createPicture]image.createPicture创建一个 Picture实例。 由于图片占用内存较大，所以当Picture实例使用完成后，应主动调用[release]image.Picture.release方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 > **说明：** > > - 本Interface首批接口从API version 13开始支持。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## getAuxiliaryPicture

```TypeScript
getAuxiliaryPicture(type: AuxiliaryPictureType): AuxiliaryPicture | null
```

根据类型获取辅助图。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | AuxiliaryPictureType | Yes | 辅助图类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| AuxiliaryPicture | 返回AuxiliaryPicture对象，如果没有则返回null。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |

## getGainmapPixelmap

```TypeScript
getGainmapPixelmap(): PixelMap | null
```

获取增益图的pixelmap。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| PixelMap | 返回Pixelmap对象，如果没有则返回null。 |

## getHdrComposedPixelmap

```TypeScript
getHdrComposedPixelmap(): Promise<PixelMap>
```

合成HDR图并获取HDR图的pixelmap。使用Promise异步回调。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PixelMap> | Promise对象，返回PixelMap。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600901 | Inner unknown error. Please check the logs for detailed information. |
| 7600201 | Unsupported operation. e.g.,1. The picture does not has a gainmap.  2. MainPixelMap's allocator type is not DMA. |

## getHdrComposedPixelmap

```TypeScript
getHdrComposedPixelmap(): Promise<PixelMap | undefined>
```

Obtains the hdr pixel map. This method uses a promise to return the PixelMap object.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PixelMap \| undefined> | A Promise instance used to return the PixelMap object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600901 | Unknown error. |
| 7600201 | Unsupported operation. |

## getHdrComposedPixelmapWithOptions

```TypeScript
getHdrComposedPixelmapWithOptions(options?: HdrComposeOptions): Promise<PixelMap | undefined>
```

合成HDR图像并返回HDR图像的PixelMap，支持传入合成参数（如PixelMapFormat等）。使用Promise异步回调。 调用该接口的Picture对象中必须包含主图、增益图和元数据。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | HdrComposeOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PixelMap \| undefined> | Promise对象，返回PixelMap或undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600201 | Unsupported operation. |

## getMainPixelmap

```TypeScript
getMainPixelmap(): PixelMap
```

获取主图的pixelmap。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| PixelMap | 同步返回PixelMap对象。 |

## getMainPixelmap

```TypeScript
getMainPixelmap(): PixelMap | undefined
```

Obtains the pixel map of the main image.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| PixelMap | Returns the pixel map. |

## getMetadata

```TypeScript
getMetadata(metadataType: MetadataType): Promise<Metadata>
```

获取主图的元数据。使用Promise异步回调。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| metadataType | MetadataType | Yes | 元数据类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Metadata> | Promise对象。返回元数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 7600202 | Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The  metadata type does not match the auxiliary picture type. |

## getMetadata

```TypeScript
getMetadata(metadataType: MetadataType): Promise<Metadata | undefined>
```

Obtains the metadata of main picture.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| metadataType | MetadataType | Yes | The type of metadata. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Metadata \| undefined> | Return the metadata of main picture. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600202 | Unsupported metadata. Possible causes: Unsupported metadata type. |

## hdrComposeToMainPixelmap

```TypeScript
hdrComposeToMainPixelmap(): Promise<void>
```

将Picture对象的主图和增益图合成为HDR图，合成后原Picture的主图被替换为HDR图，原Picture的增益图被删除。使用Promise异步回调。 调用该接口的Picture对象中必须包含主图、增益图。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600201 | Unsupported operation. e.g.,1. The picture does not have a gainmap.  2. pixelMap's allocator type is not DMA. |

## marshalling

```TypeScript
marshalling(sequence: rpc.MessageSequence): void
```

将picture序列化后写入MessageSequence。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sequence | rpc.MessageSequence | Yes | 新创建的MessageSequence。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types; 3.Parameter verification failed. |
| 62980097 | IPC error. Possible cause: 1.IPC communication failed. 2. Image upload  exception.  3. Decode process exception. 4. Insufficient memory. |

## release

```TypeScript
release(): void
```

释放picture对象。 由于图片占用内存较大，所以当Picture对象使用完成后，应主动调用该方法及时释放内存。 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

## setAuxiliaryPicture

```TypeScript
setAuxiliaryPicture(type: AuxiliaryPictureType, auxiliaryPicture: AuxiliaryPicture): void
```

设置辅助图。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | AuxiliaryPictureType | Yes | 辅助图类型。 |
| auxiliaryPicture | AuxiliaryPicture | Yes | 辅助图对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |

## setMetadata

```TypeScript
setMetadata(metadataType: MetadataType, metadata: Metadata): Promise<void>
```

设置主图的元数据。使用Promise异步回调。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| metadataType | MetadataType | Yes | 元数据类型。 |
| metadata | Metadata | Yes | 元数据对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 7600202 | Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The  metadata type does not match the auxiliary picture type. |

