# OnOverrideUrlLoadingCallback

```TypeScript
type OnOverrideUrlLoadingCallback = (webResourceRequest: WebResourceRequest) => boolean
```

The callback of onOverrideUrlLoading. Should not call WebviewController.loadUrl with the request's URL and then return true.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| webResourceRequest | WebResourceRequest | Yes | callback information of onOverrideUrlLoading. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - Returning true causes the current Web to abort loading the URL,false causes the Web to continue loading the url as usual. |

