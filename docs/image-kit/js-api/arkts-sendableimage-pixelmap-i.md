# PixelMap

Sendable PixelMap instance.

**Inheritance:** PixelMapextends: ISendable.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { sendableImage } from '@kit.ImageKit';
```

## applyColorSpace

```TypeScript
applyColorSpace(targetColorSpace: colorSpaceManager.ColorSpaceManager): Promise<void>
```

Apply color space of pixelmap, the pixels will be changed by input color space. This method uses a promise to return the result. This method is used to change color space of PixelMap. Pixel data will be changed by calling this method. If you want to set the colorspace property of PixelMap only, use method {@Link #setColorSpace(colorSpaceManager.ColorSpaceManager)}.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetColorSpace | colorSpaceManager.ColorSpaceManager | Yes | The color space for pixelmap. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PixelMap> | A Promise instance used to return the new image pixelmap.  If the operation fails, an error message is returned. |

## createAlphaPixelmapSync

```TypeScript
createAlphaPixelmapSync(): PixelMap
```

Obtains new pixelmap with alpha information.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| PixelMap | return the new image pixelmap.  If the operation fails, an error message is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Parameter verification failed. |
| 501 | Resource Unavailable. |

## crop

```TypeScript
crop(region: image.Region): Promise<void>
```

Crop the image. This method uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| region | image.Region | Yes | The region to crop. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## cropSync

```TypeScript
cropSync(region: image.Region): void
```

Crop the image.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| region | image.Region | Yes | The region to crop. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## flip

```TypeScript
flip(horizontal: boolean, vertical: boolean): Promise<void>
```

Image flipping. This method uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| horizontal | boolean | Yes | Is flip in horizontal. |
| vertical | boolean | Yes | Is flip in vertical. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## flipSync

```TypeScript
flipSync(horizontal: boolean, vertical: boolean): void
```

Image flipping.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| horizontal | boolean | Yes | Is flip in horizontal. |
| vertical | boolean | Yes | Is flip in vertical. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## getBytesNumberPerRow

```TypeScript
getBytesNumberPerRow(): number
```

Obtains the number of bytes in each line of the image pixelmap.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of bytes in each line. |

## getColorSpace

```TypeScript
getColorSpace(): colorSpaceManager.ColorSpaceManager
```

Get color space of pixelmap.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| colorSpaceManager.ColorSpaceManager | If the operation fails, an error message is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 62980101 | If the image data abnormal. |
| 62980103 | If the image data unsupport. |
| 62980115 | If the image parameter invalid. |

## getDensity

```TypeScript
getDensity(): number
```

Obtains the density of the image pixelmap.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | The number of density, in ppi. |

## getImageInfo

```TypeScript
getImageInfo(): Promise<image.ImageInfo>
```

Obtains pixelmap information about this image. This method uses a promise to return the information.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.ImageInfo> | A Promise instance used to return the image pixelmap information.  If the operation fails, an error message is returned. |

## getImageInfoSync

```TypeScript
getImageInfoSync(): image.ImageInfo
```

Get image information from image source.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Return value:**

| Type | Description |
| --- | --- |
| image.ImageInfo | the image information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 501 | Resource Unavailable. |

## getPixelBytesNumber

```TypeScript
getPixelBytesNumber(): number
```

Obtains the total number of bytes of the image pixelmap.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Total number of bytes. |

## marshalling

```TypeScript
marshalling(sequence: rpc.MessageSequence): void
```

Marshalling PixelMap and write into MessageSequence.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sequence | rpc.MessageSequence | Yes | rpc.MessageSequence parameter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 62980115 | Invalid image parameter. |
| 62980097 | IPC error. |

## opacity

```TypeScript
opacity(rate: number): Promise<void>
```

Set the transparent rate of pixelmap. This method uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rate | number | Yes | The value of transparent rate. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## opacitySync

```TypeScript
opacitySync(rate: number): void
```

Set the transparent rate of pixelmap.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rate | number | Yes | The value of transparent rate. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## readPixels

```TypeScript
readPixels(area: image.PositionArea): Promise<void>
```

Reads image pixelmap data in an area. This method uses a promise to return the data read.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| area | image.PositionArea | Yes | Area from which the image pixelmap data will be read. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## readPixelsSync

```TypeScript
readPixelsSync(area: image.PositionArea): void
```

Reads image pixelmap data in an area.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| area | image.PositionArea | Yes | Area from which the image pixelmap data will be read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## readPixelsToBuffer

```TypeScript
readPixelsToBuffer(dst: ArrayBuffer): Promise<void>
```

Reads image pixelmap data and writes the data to an ArrayBuffer. This method uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dst | ArrayBuffer | Yes | A buffer to which the image pixelmap data will be written. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## readPixelsToBufferSync

```TypeScript
readPixelsToBufferSync(dst: ArrayBuffer): void
```

Reads image pixelmap data and writes the data to an ArrayBuffer.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dst | ArrayBuffer | Yes | A buffer to which the image pixelmap data will be written. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## release

```TypeScript
release(): Promise<void>
```

Releases this PixelMap object. This method uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the instance release result.  If the operation fails, an error message is returned. |

## rotate

```TypeScript
rotate(angle: number): Promise<void>
```

Image rotation. This method uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| angle | number | Yes | The rotation angle, in degrees. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## rotateSync

```TypeScript
rotateSync(angle: number): void
```

Image rotation.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| angle | number | Yes | The rotation angle, in degrees. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## scale

```TypeScript
scale(x: number, y: number): Promise<void>
```

Image zoom in width and height. This method uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | The zoom value of width. |
| y | number | Yes | The zoom value of height. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## scaleSync

```TypeScript
scaleSync(x: number, y: number): void
```

Image zoom in width and height.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | The zoom value of width. |
| y | number | Yes | The zoom value of height. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## setColorSpace

```TypeScript
setColorSpace(colorSpace: colorSpaceManager.ColorSpaceManager): void
```

Set color space of pixelmap. This method is only used to set the colorspace property of PixelMap, while all pixel data remains the same after calling this method. If you want to change colorspace for all pixels, use method {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager)}.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorSpace | colorSpaceManager.ColorSpaceManager | Yes | The color space for pixelmap. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 62980111 | If the operation invalid. |
| 62980115 | If the image parameter invalid. |

## translate

```TypeScript
translate(x: number, y: number): Promise<void>
```

Image position transformation. This method uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | The position value of width, in px. |
| y | number | Yes | The position value of height, in px. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## translateSync

```TypeScript
translateSync(x: number, y: number): void
```

Image position transformation.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | The position value of width, in px. |
| y | number | Yes | The position value of height, in px. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## unmarshalling

```TypeScript
unmarshalling(sequence: rpc.MessageSequence): Promise<PixelMap>
```

Creates a PixelMap object based on MessageSequence parameter.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sequence | rpc.MessageSequence | Yes | rpc.MessageSequence parameter. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PixelMap> | A Promise instance used to return the PixelMap object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 62980115 | Invalid image parameter. |
| 62980097 | IPC error. |
| 62980096 | The operation failed. |

## writeBufferToPixels

```TypeScript
writeBufferToPixels(src: ArrayBuffer): Promise<void>
```

Reads image data in an ArrayBuffer and writes the data to a PixelMap object. This method uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | ArrayBuffer | Yes | A buffer from which the image data will be read. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## writeBufferToPixelsSync

```TypeScript
writeBufferToPixelsSync(src: ArrayBuffer): void
```

Reads image data in an ArrayBuffer and writes the data to a PixelMap object.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | ArrayBuffer | Yes | A buffer from which the image data will be read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## writePixels

```TypeScript
writePixels(area: image.PositionArea): Promise<void>
```

Writes image pixelmap data to the specified area. This method uses a promise to return the operation result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| area | image.PositionArea | Yes | Area to which the image pixelmap data will be written. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

## writePixelsSync

```TypeScript
writePixelsSync(area: image.PositionArea): void
```

Writes image pixelmap data to the specified area.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| area | image.PositionArea | Yes | Area to which the image pixelmap data will be written. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 501 | Resource Unavailable. |

## isEditable

```TypeScript
readonly isEditable: boolean
```

Whether the image pixelmap can be edited.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Image.Core

## isStrideAlignment

```TypeScript
readonly isStrideAlignment: boolean
```

Is it stride Alignment

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

