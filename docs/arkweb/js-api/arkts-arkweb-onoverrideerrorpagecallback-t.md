# OnOverrideErrorPageCallback

```TypeScript
type OnOverrideErrorPageCallback = (errorPageEvent: OnErrorReceiveEvent) => string
```

The callback of onOverrideErrorPage.

**Since:** 20

<!--Device-unnamed-type OnOverrideErrorPageCallback = (errorPageEvent: OnErrorReceiveEvent) => string--><!--Device-unnamed-type OnOverrideErrorPageCallback = (errorPageEvent: OnErrorReceiveEvent) => string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| errorPageEvent | OnErrorReceiveEvent | Yes | The information of error. |

**Return value:**

| Type | Description |
| --- | --- |
| string | - Return an HTML text content encoded in Base64. |

