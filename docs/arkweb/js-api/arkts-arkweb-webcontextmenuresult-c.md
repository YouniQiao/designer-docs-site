# WebContextMenuResult

Defines the context menu result, related to {@link WebContextMenuResult} method.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## closeContextMenu

```TypeScript
closeContextMenu(): void
```

When close context menu without other call in WebContextMenuResult, User should call this function to close menu

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## copy

```TypeScript
copy(): void
```

Executes the copy operation related to this context menu.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## copyImage

```TypeScript
copyImage(): void
```

If WebContextMenuParam has image content, this function will copy image related to this context menu. If WebContextMenuParam has no image content, this function will do nothing.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## cut

```TypeScript
cut(): void
```

Executes the cut operation related to this context menu.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## paste

```TypeScript
paste(): void
```

Executes the paste operation related to this context menu. <p><strong>API Note</strong>:<br> Permissions need to be configured: ohos.permission.READ_PASTEBOARD. </p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## pasteAndMatchStyle

```TypeScript
pasteAndMatchStyle(): void
```

Executes the paste and match style operation related to this context menu. <p><strong>API Note</strong>:<br> Permissions need to be configured: ohos.permission.READ_PASTEBOARD. </p>

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## redo

```TypeScript
redo(): void
```

Executes the redo operation related to this context menu.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## requestPasswordAutoFill

```TypeScript
requestPasswordAutoFill(): void
```

Request to fill the password vault contents into the input field.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## saveImage

```TypeScript
saveImage(): void
```

Performing the "Save As Image" operation associated with this context menu will trigger the download process.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

## selectAll

```TypeScript
selectAll(): void
```

Executes the selectAll operation related to this context menu.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## undo

```TypeScript
undo(): void
```

Executes the undo operation related to this context menu.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

