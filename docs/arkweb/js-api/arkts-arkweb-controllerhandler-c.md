# ControllerHandler

Defines the onWindowNew callback, related to {@link onWindowNew} method.

**Since:** 9

<!--Device-unnamed-declare class ControllerHandler--><!--Device-unnamed-declare class ControllerHandler-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructs a **ControllerHandler** API.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ControllerHandler-constructor()--><!--Device-ControllerHandler-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="setwebcontroller"></a>
## setWebController

```TypeScript
setWebController(controller: WebviewController): void
```

Sets a **WebviewController** object. If opening a new window is not needed, set the parameter to **null**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ControllerHandler-setWebController(controller: WebviewController): void--><!--Device-ControllerHandler-setWebController(controller: WebviewController): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controller | [WebviewController](arkts-arkweb-webviewcontroller-t.md) | Yes |  |

