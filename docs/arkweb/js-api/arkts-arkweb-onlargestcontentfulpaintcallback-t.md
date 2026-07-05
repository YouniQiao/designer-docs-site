# OnLargestContentfulPaintCallback

```TypeScript
type OnLargestContentfulPaintCallback = (largestContentfulPaint: LargestContentfulPaint) => void
```

Defines a callback invoked when the largest content paint occurs on the web page.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| largestContentfulPaint | LargestContentfulPaint | Yes | Information about the largest content paint. |

