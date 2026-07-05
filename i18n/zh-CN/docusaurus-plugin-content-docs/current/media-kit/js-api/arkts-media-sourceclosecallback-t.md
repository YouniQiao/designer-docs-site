# SourceCloseCallback

```TypeScript
type SourceCloseCallback = (uuid: long) => void
```

This callback function is implemented by applications to release related resources. > **NOTE** > > The client must return the handle immediately after processing the request.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uuid | long | 是 | ID for the resource handle. |

