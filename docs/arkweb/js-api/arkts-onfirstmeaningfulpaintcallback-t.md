# OnFirstMeaningfulPaintCallback

```TypeScript
type OnFirstMeaningfulPaintCallback = (firstMeaningfulPaint: FirstMeaningfulPaint) => void
```

网页绘制页面度量信息的回调，当网页加载完页面主要内容时会触发该回调。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| firstMeaningfulPaint | FirstMeaningfulPaint | Yes | 绘制页面主要内容度量的详细信息。 |

