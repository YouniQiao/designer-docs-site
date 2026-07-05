# ControllerHandler

Defines the onWindowNew callback, related to {@link onWindowNew} method.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

Constructs a **ControllerHandler** API.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## setWebController

```TypeScript
setWebController(controller: WebviewController): void
```

Sets a **WebviewController** object. If opening a new window is not needed, set the parameter to **null**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controller | WebviewController | Yes |  |

