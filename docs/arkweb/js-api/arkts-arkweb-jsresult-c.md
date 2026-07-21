# JsResult

Defines the js result.

**Since:** 8

<!--Device-unnamed-declare class JsResult--><!--Device-unnamed-declare class JsResult-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-JsResult-constructor()--><!--Device-JsResult-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="handlecancel"></a>
## handleCancel

```TypeScript
handleCancel(): void
```

Handle the user's JavaScript result if cancel the dialog.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-JsResult-handleCancel(): void--><!--Device-JsResult-handleCancel(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="handleconfirm"></a>
## handleConfirm

```TypeScript
handleConfirm(): void
```

Handle the user's JavaScript result if confirm the dialog.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-JsResult-handleConfirm(): void--><!--Device-JsResult-handleConfirm(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="handlepromptconfirm"></a>
## handlePromptConfirm

```TypeScript
handlePromptConfirm(result: string): void
```

Handle the user's JavaScript result if confirm the prompt dialog.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-JsResult-handlePromptConfirm(result: string): void--><!--Device-JsResult-handlePromptConfirm(result: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | string | Yes | The content of the dialog box entered by the user. |

