# InflateBackInputCallback

```TypeScript
type InflateBackInputCallback = (inDesc: RecordData) => ArrayBuffer
```

一个用于读取用户提供的输入数据的回调函数。当解压缩过程需要更多输入数据时，zlib 将调用此函数。此函数应从数据源读取数据并将其写入缓冲区中。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inDesc | RecordData | Yes | 用户定义数据对象。具体的类型和内容会根据实际的应用场景而有所不同，可能包括配置数据、文件句柄等。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | 从输入数据源成功读取的内容缓冲区。 |

