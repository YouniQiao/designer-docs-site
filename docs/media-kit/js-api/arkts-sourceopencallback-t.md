# SourceOpenCallback

```TypeScript
type SourceOpenCallback = (request: MediaSourceLoadingRequest) => long
```

由应用实现此回调函数，应用需处理传入的资源打开请求，并返回所打开资源对应的唯一句柄。 > **注意：** > > 客户端在处理完请求后应立刻返回。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | MediaSourceLoadingRequest | Yes | 打开请求参数，包含请求资源的具体信息和数据推送方式。 |

**Return value:**

| Type | Description |
| --- | --- |
| long | 当前资源打开请求的句柄。大于0表示请求成功，小于或等于0表示请求失败。 - request对象对应句柄唯一。 |

