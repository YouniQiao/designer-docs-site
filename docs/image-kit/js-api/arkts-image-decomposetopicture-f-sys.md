# decomposeToPicture

## decomposeToPicture

```TypeScript
function decomposeToPicture(hdrPixelMap : PixelMap, options?: HdrDecomposeOptions): Promise<Picture | undefined>
```

将HDR PixelMap分解为包含SDR PixelMap和增益图（gainmap）的Picture对象。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hdrPixelMap | PixelMap | Yes | HDR PixelMap，像素格式需为RGBA_F16、RGBA_1010102、YCBCR_P010或YCRCB_P010。 |
| options | HdrDecomposeOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Picture \| undefined> | Promise对象。返回包含SDR PixelMap和增益图的Picture对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |
| 7600201 | Unsupported operation. hdrPixelMap's PixelMapFormat is not  RGBA_F16\RGBA_1010102\YCBCR_P010\YCRCB_P010. |
| 7600206 | Invalid parameter. Possible cause: hdrPixelMap is empty. |
| 7600208 | HDR image decomposition failed. Possible causes: 1. Decomposition processing  is not supported. 2. Processing error occurs. |
| 7600301 | Alloc memory failed. |

