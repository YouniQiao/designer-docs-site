# KeyRequestCallback

```TypeScript
type KeyRequestCallback = (assetId: string, requestData: Uint8Array) => void
```

The callback of key request.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assetId | string | 是 | request key for current assetId |
| requestData | Uint8Array | 是 | media key request data sent to media key server |

