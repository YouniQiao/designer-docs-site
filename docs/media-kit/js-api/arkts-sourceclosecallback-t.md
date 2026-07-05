# SourceCloseCallback

```TypeScript
type SourceCloseCallback = (uuid: long) => void
```

由应用实现此回调函数，应用应释放相关资源。 > **注意：** > > 客户端在处理完请求后应立刻返回。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | long | Yes | 资源句柄的标识。 |

