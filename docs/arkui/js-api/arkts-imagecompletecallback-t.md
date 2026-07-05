# ImageCompleteCallback

```TypeScript
type ImageCompleteCallback = (result: ImageLoadResult) => void
```

图片加载成功和解码成功时触发的回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | ImageLoadResult | Yes | 图片数据加载成功和解码成功触发回调时返回的对象。 |

