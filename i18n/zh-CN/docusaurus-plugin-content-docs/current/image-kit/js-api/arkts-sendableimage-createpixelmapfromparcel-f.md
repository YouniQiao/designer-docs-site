# createPixelMapFromParcel

## createPixelMapFromParcel

```TypeScript
function createPixelMapFromParcel(sequence: rpc.MessageSequence): PixelMap
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
| PixelMap | Returns the instance if the operation is successful.  Otherwise, an exception will be thrown. |

**错误码：**

| 错误码ID | 错误信息 |
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

