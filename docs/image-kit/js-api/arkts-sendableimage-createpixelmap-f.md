# createPixelMap

## createPixelMap

```TypeScript
function createPixelMap(colors: ArrayBuffer, options: image.InitializationOptions): Promise<PixelMap>
```

Create PixelMap by data buffer.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colors | ArrayBuffer | Yes | The image color buffer. |
| options | image.InitializationOptions | Yes | Initialization options for PixelMap. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PixelMap> | A Promise instance used to return the PixelMap object. |

