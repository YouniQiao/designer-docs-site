# PixelMap

Sendable PixelMap instance.

**继承实现关系：** PixelMap继承自：ISendable。

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Image.Core

## 导入模块

```TypeScript
import { sendableImage } from '@kit.ImageKit';
```

## applyColorSpace

```TypeScript
applyColorSpace(targetColorSpace: colorSpaceManager.ColorSpaceManager): Promise<void>
```

Apply color space of pixelmap, the pixels will be changed by input color space. This method uses a promise to return the result. This method is used to change color space of PixelMap. Pixel data will be changed by calling this method. If you want to set the colorspace property of PixelMap only, use method {@Link #setColorSpace(colorSpaceManager.ColorSpaceManager)}.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| targetColorSpace | colorSpaceManager.ColorSpaceManager | 是 | The color space for pixelmap. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 62980104 | Failed to initialize the internal object. |
| 62980108 | Failed to convert the color space. |
| 62980115 | Invalid image parameter. |

## createAlphaPixelmap

```TypeScript
createAlphaPixelmap(): Promise<PixelMap>
```

Obtains new pixelmap with alpha information. This method uses a promise to return the information.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PixelMap> | A Promise instance used to return the new image pixelmap.  If the operation fails, an error message is returned. |

## createAlphaPixelmapSync

```TypeScript
createAlphaPixelmapSync(): PixelMap
```

Obtains new pixelmap with alpha information.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PixelMap | return the new image pixelmap.  If the operation fails, an error message is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Parameter verification failed. |
| 501 | Resource Unavailable. |

## crop

```TypeScript
crop(region: image.Region): Promise<void>
```

Crop the image. This method uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| region | image.Region | 是 | The region to crop. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## cropSync

```TypeScript
cropSync(region: image.Region): void
```

Crop the image.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| region | image.Region | 是 | The region to crop. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## flip

```TypeScript
flip(horizontal: boolean, vertical: boolean): Promise<void>
```

Image flipping. This method uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| horizontal | boolean | 是 | Is flip in horizontal. |
| vertical | boolean | 是 | Is flip in vertical. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## flipSync

```TypeScript
flipSync(horizontal: boolean, vertical: boolean): void
```

Image flipping.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| horizontal | boolean | 是 | Is flip in horizontal. |
| vertical | boolean | 是 | Is flip in vertical. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## getBytesNumberPerRow

```TypeScript
getBytesNumberPerRow(): number
```

Obtains the number of bytes in each line of the image pixelmap.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Number of bytes in each line. |

## getColorSpace

```TypeScript
getColorSpace(): colorSpaceManager.ColorSpaceManager
```

Get color space of pixelmap.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| colorSpaceManager.ColorSpaceManager | If the operation fails, an error message is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 62980101 | If the image data abnormal. |
| 62980103 | If the image data unsupport. |
| 62980115 | If the image parameter invalid. |

## getDensity

```TypeScript
getDensity(): number
```

Obtains the density of the image pixelmap.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | The number of density, in ppi. |

## getImageInfo

```TypeScript
getImageInfo(): Promise<image.ImageInfo>
```

Obtains pixelmap information about this image. This method uses a promise to return the information.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.ImageInfo> | A Promise instance used to return the image pixelmap information.  If the operation fails, an error message is returned. |

## getImageInfoSync

```TypeScript
getImageInfoSync(): image.ImageInfo
```

Get image information from image source.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.ImageSource

**返回值：**

| 类型 | 说明 |
| --- | --- |
| image.ImageInfo | the image information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 501 | Resource Unavailable. |

## getPixelBytesNumber

```TypeScript
getPixelBytesNumber(): number
```

Obtains the total number of bytes of the image pixelmap.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Total number of bytes. |

## marshalling

```TypeScript
marshalling(sequence: rpc.MessageSequence): void
```

Marshalling PixelMap and write into MessageSequence.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sequence | rpc.MessageSequence | 是 | rpc.MessageSequence parameter. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 62980115 | Invalid image parameter. |
| 62980097 | IPC error. |

## opacity

```TypeScript
opacity(rate: number): Promise<void>
```

Set the transparent rate of pixelmap. This method uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rate | number | 是 | The value of transparent rate. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## opacitySync

```TypeScript
opacitySync(rate: number): void
```

Set the transparent rate of pixelmap.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rate | number | 是 | The value of transparent rate. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## readPixels

```TypeScript
readPixels(area: image.PositionArea): Promise<void>
```

Reads image pixelmap data in an area. This method uses a promise to return the data read.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| area | image.PositionArea | 是 | Area from which the image pixelmap data will be read. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## readPixelsSync

```TypeScript
readPixelsSync(area: image.PositionArea): void
```

Reads image pixelmap data in an area.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| area | image.PositionArea | 是 | Area from which the image pixelmap data will be read. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## readPixelsToBuffer

```TypeScript
readPixelsToBuffer(dst: ArrayBuffer): Promise<void>
```

Reads image pixelmap data and writes the data to an ArrayBuffer. This method uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dst | ArrayBuffer | 是 | A buffer to which the image pixelmap data will be written. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## readPixelsToBufferSync

```TypeScript
readPixelsToBufferSync(dst: ArrayBuffer): void
```

Reads image pixelmap data and writes the data to an ArrayBuffer.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dst | ArrayBuffer | 是 | A buffer to which the image pixelmap data will be written. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## release

```TypeScript
release(): Promise<void>
```

Releases this PixelMap object. This method uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the instance release result.  If the operation fails, an error message is returned. |

## rotate

```TypeScript
rotate(angle: number): Promise<void>
```

Image rotation. This method uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| angle | number | 是 | The rotation angle, in degrees. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## rotateSync

```TypeScript
rotateSync(angle: number): void
```

Image rotation.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| angle | number | 是 | The rotation angle, in degrees. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## scale

```TypeScript
scale(x: number, y: number): Promise<void>
```

Image zoom in width and height. This method uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The zoom value of width. |
| y | number | 是 | The zoom value of height. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## scaleSync

```TypeScript
scaleSync(x: number, y: number): void
```

Image zoom in width and height.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The zoom value of width. |
| y | number | 是 | The zoom value of height. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## setColorSpace

```TypeScript
setColorSpace(colorSpace: colorSpaceManager.ColorSpaceManager): void
```

Set color space of pixelmap. This method is only used to set the colorspace property of PixelMap, while all pixel data remains the same after calling this method. If you want to change colorspace for all pixels, use method {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager)}.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colorSpace | colorSpaceManager.ColorSpaceManager | 是 | The color space for pixelmap. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 62980111 | If the operation invalid. |
| 62980115 | If the image parameter invalid. |

## translate

```TypeScript
translate(x: number, y: number): Promise<void>
```

Image position transformation. This method uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The position value of width, in px. |
| y | number | 是 | The position value of height, in px. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## translateSync

```TypeScript
translateSync(x: number, y: number): void
```

Image position transformation.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The position value of width, in px. |
| y | number | 是 | The position value of height, in px. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## unmarshalling

```TypeScript
unmarshalling(sequence: rpc.MessageSequence): Promise<PixelMap>
```

Creates a PixelMap object based on MessageSequence parameter.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sequence | rpc.MessageSequence | 是 | rpc.MessageSequence parameter. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PixelMap> | A Promise instance used to return the PixelMap object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 62980115 | Invalid image parameter. |
| 62980097 | IPC error. |
| 62980096 | The operation failed. |

## writeBufferToPixels

```TypeScript
writeBufferToPixels(src: ArrayBuffer): Promise<void>
```

Reads image data in an ArrayBuffer and writes the data to a PixelMap object. This method uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| src | ArrayBuffer | 是 | A buffer from which the image data will be read. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## writeBufferToPixelsSync

```TypeScript
writeBufferToPixelsSync(src: ArrayBuffer): void
```

Reads image data in an ArrayBuffer and writes the data to a PixelMap object.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| src | ArrayBuffer | 是 | A buffer from which the image data will be read. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## writePixels

```TypeScript
writePixels(area: image.PositionArea): Promise<void>
```

Writes image pixelmap data to the specified area. This method uses a promise to return the operation result.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| area | image.PositionArea | 是 | Area to which the image pixelmap data will be written. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## writePixelsSync

```TypeScript
writePixelsSync(area: image.PositionArea): void
```

Writes image pixelmap data to the specified area.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| area | image.PositionArea | 是 | Area to which the image pixelmap data will be written. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## isEditable

```TypeScript
readonly isEditable: boolean
```

Whether the image pixelmap can be edited.

**类型：** boolean

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

## isStrideAlignment

```TypeScript
readonly isStrideAlignment: boolean
```

Is it stride Alignment

**类型：** boolean

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Image.Core

