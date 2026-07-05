# createPixelMapFromSurface

## createPixelMapFromSurface

```TypeScript
function createPixelMapFromSurface(surfaceId: string, region: image.Region): Promise<PixelMap>
```

Creates a PixelMap object from surface id.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| surfaceId | string | 是 | surface id. |
| region | image.Region | 是 | The region to surface. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PixelMap> | Returns the instance if the operation is successful.  Otherwise, an exception will be thrown. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 62980115 | If the image parameter invalid. |
| 62980105 | Failed to get the data. |
| 62980178 | Failed to create the PixelMap. |

