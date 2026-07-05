# WebKeyboardCallback

```TypeScript
type WebKeyboardCallback = (keyboardCallbackInfo: WebKeyboardCallbackInfo) => WebKeyboardOptions
```

The callback of onInterceptKeyboardAttach event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyboardCallbackInfo | WebKeyboardCallbackInfo | Yes | callback information of onInterceptKeyboardAttach. |

**Return value:**

| Type | Description |
| --- | --- |
| WebKeyboardOptions | Return the web keyboard options of this web component. |

