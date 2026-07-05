# createPixelMap

## createPixelMap

```TypeScript
function createPixelMap(colors: ArrayBuffer, options: image.InitializationOptions): Promise<PixelMap>
```

Create PixelMap by data buffer.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colors | ArrayBuffer | 是 | The image color buffer. |
| options | image.InitializationOptions | 是 | Initialization options for PixelMap. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PixelMap> | A Promise instance used to return the PixelMap object. |

