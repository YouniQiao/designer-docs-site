# OnSafeBrowsingCheckResultCallback

```TypeScript
type OnSafeBrowsingCheckResultCallback = (threatType: ThreatType) => void
```

The callback of safe browsing check.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-unnamed-type OnSafeBrowsingCheckResultCallback = (threatType: ThreatType) => void--><!--Device-unnamed-type OnSafeBrowsingCheckResultCallback = (threatType: ThreatType) => void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| threatType | ThreatType | Yes | callback information of onSafeBrowsingCheckResult. |

