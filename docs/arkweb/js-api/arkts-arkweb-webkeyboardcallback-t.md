# WebKeyboardCallback

```TypeScript
type WebKeyboardCallback = (keyboardCallbackInfo: WebKeyboardCallbackInfo) => WebKeyboardOptions
```

Defines a callback to intercept the soft keyboard initiated from editable elements on a web page. This event is
typically called when the **\<input>** tag on the web page is clicked.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyboardCallbackInfo | WebKeyboardCallbackInfo | Yes | Input parameter of the callback used to intercept the softkeyboard initiated from editable elements on a web page, including [WebKeyboardController](arkts-arkweb-web.md) andeditable element attributes. |

**Return value:**

| Type | Description |
| --- | --- |
| WebKeyboardOptions | R[WebKeyboardOptions](arkts-arkweb-webkeyboardoptions-i.md) instance, which is used todetermine which type of soft keyboard to start by the ArkWeb kernel. |

