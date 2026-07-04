# JsResult

Defines the js result.

**Since:** 8

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## handleCancel

```TypeScript
handleCancel(): void
```

Handle the user's JavaScript result if cancel the dialog.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## handleConfirm

```TypeScript
handleConfirm(): void
```

Handle the user's JavaScript result if confirm the dialog.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## handlePromptConfirm

```TypeScript
handlePromptConfirm(result: string): void
```

Handle the user's JavaScript result if confirm the prompt dialog.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | string | Yes | The content of the dialog box entered by the user. |

