# createPixelMapFromParcel

## createPixelMapFromParcel

```TypeScript
function createPixelMapFromParcel(sequence: rpc.MessageSequence): PixelMap
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
| PixelMap | Returns the instance if the operation is successful.  Otherwise, an exception will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 62980096 | Operation failed. |
| 62980097 | IPC error. |
| 62980115 | Invalid input parameter. |
| 62980105 | Failed to get the data. |
| 62980177 | Abnormal API environment. |
| 62980178 | Failed to create the PixelMap. |
| 62980179 | Abnormal buffer size. |
| 62980180 | FD mapping failed. |
| 62980246 | Failed to read the PixelMap. |

