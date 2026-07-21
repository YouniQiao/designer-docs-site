# WebContextMenuResult

Defines the context menu result, related to {@link WebContextMenuResult} method.

**Since:** 9

<!--Device-unnamed-declare class WebContextMenuResult--><!--Device-unnamed-declare class WebContextMenuResult-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="closecontextmenu"></a>
## closeContextMenu

```TypeScript
closeContextMenu(): void
```

When close context menu without other call in WebContextMenuResult,User should call this function to close menu

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebContextMenuResult-closeContextMenu(): void--><!--Device-WebContextMenuResult-closeContextMenu(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebContextMenuResult-constructor()--><!--Device-WebContextMenuResult-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="copy"></a>
## copy

```TypeScript
copy(): void
```

Executes the copy operation related to this context menu.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebContextMenuResult-copy(): void--><!--Device-WebContextMenuResult-copy(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="copyimage"></a>
## copyImage

```TypeScript
copyImage(): void
```

If WebContextMenuParam has image content, this function will copy image related to this context menu.If WebContextMenuParam has no image content, this function will do nothing.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebContextMenuResult-copyImage(): void--><!--Device-WebContextMenuResult-copyImage(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="cut"></a>
## cut

```TypeScript
cut(): void
```

Executes the cut operation related to this context menu.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebContextMenuResult-cut(): void--><!--Device-WebContextMenuResult-cut(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="paste"></a>
## paste

```TypeScript
paste(): void
```

Executes the paste operation related to this context menu.

<p><strong>API Note</strong>:<br>Permissions need to be configured: ohos.permission.READ_PASTEBOARD.</p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebContextMenuResult-paste(): void--><!--Device-WebContextMenuResult-paste(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="pasteandmatchstyle"></a>
## pasteAndMatchStyle

```TypeScript
pasteAndMatchStyle(): void
```

Executes the paste and match style operation related to this context menu.

<p><strong>API Note</strong>:<br>Permissions need to be configured: ohos.permission.READ_PASTEBOARD.</p>

**Since:** 20

<!--Device-WebContextMenuResult-pasteAndMatchStyle(): void--><!--Device-WebContextMenuResult-pasteAndMatchStyle(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="redo"></a>
## redo

```TypeScript
redo(): void
```

Executes the redo operation related to this context menu.

**Since:** 20

<!--Device-WebContextMenuResult-redo(): void--><!--Device-WebContextMenuResult-redo(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="requestpasswordautofill"></a>
## requestPasswordAutoFill

```TypeScript
requestPasswordAutoFill(): void
```

Request to fill the password vault contents into the input field.

**Since:** 23

<!--Device-WebContextMenuResult-requestPasswordAutoFill(): void--><!--Device-WebContextMenuResult-requestPasswordAutoFill(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="saveimage"></a>
## saveImage

```TypeScript
saveImage(): void
```

Performing the "Save As Image" operation associated with this context menu will trigger the download process.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebContextMenuResult-saveImage(): void--><!--Device-WebContextMenuResult-saveImage(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="selectall"></a>
## selectAll

```TypeScript
selectAll(): void
```

Executes the selectAll operation related to this context menu.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebContextMenuResult-selectAll(): void--><!--Device-WebContextMenuResult-selectAll(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="undo"></a>
## undo

```TypeScript
undo(): void
```

Executes the undo operation related to this context menu.

**Since:** 20

<!--Device-WebContextMenuResult-undo(): void--><!--Device-WebContextMenuResult-undo(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

