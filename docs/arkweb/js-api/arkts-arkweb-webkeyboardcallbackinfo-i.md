# WebKeyboardCallbackInfo

Represents input parameters of the callback used to intercept the soft keyboard started from editable elements on a web page, including [WebKeyboardController](arkts-arkweb-web.md) and editable element attributes.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## attributes

```TypeScript
attributes: Record<string, string>
```

Attribute of the web page element that triggers the display of the soft keyboard.

**Type:** Record<string, string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## controller

```TypeScript
controller: WebKeyboardController
```

Controller used to control the input, deletion, and closure of the custom keyboard.

**Type:** WebKeyboardController

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

