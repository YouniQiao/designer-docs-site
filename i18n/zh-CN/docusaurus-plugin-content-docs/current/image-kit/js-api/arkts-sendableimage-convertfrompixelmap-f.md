# convertFromPixelMap

## convertFromPixelMap

```TypeScript
function convertFromPixelMap(pixelmap: image.PixelMap): PixelMap
```

Creates a sendable image PixelMap from image PixelMap.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pixelmap | image.PixelMap | 是 | the src pixelmap. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PixelMap | Returns the instance if the operation is successful.  Otherwise, an exception will be thrown. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the image parameter invalid. Possible causes:  1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3.Parameter verification failed. |
| 62980104 | Failed to initialize the internal object. |

