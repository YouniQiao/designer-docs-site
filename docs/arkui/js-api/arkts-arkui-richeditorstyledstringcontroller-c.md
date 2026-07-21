# RichEditorStyledStringController

Represents the controller of the **RichEditor** component constructed using the styled string. Inherits from [RichEditorBaseController](arkts-arkui-richeditorbasecontroller-c.md).

**Inheritance/Implementation:** RichEditorStyledStringController extends [RichEditorBaseController](arkts-arkui-richeditorbasecontroller-c.md) and implements [StyledStringController](../arkts-apis/arkts-arkui-styledstringcontroller-i.md)

**Since:** 12

<!--Device-unnamed-declare class RichEditorStyledStringController extends RichEditorBaseController implements StyledStringController--><!--Device-unnamed-declare class RichEditorStyledStringController extends RichEditorBaseController implements StyledStringController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="getselection"></a>
## getSelection

```TypeScript
getSelection(): RichEditorRange
```

Obtains the current selection range of the **RichEditor** component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RichEditorStyledStringController-getSelection(): RichEditorRange--><!--Device-RichEditorStyledStringController-getSelection(): RichEditorRange-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [RichEditorRange](arkts-arkui-richeditorrange-i.md) | Selection range.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined** is returned. |

<a id="getstyledstring"></a>
## getStyledString

```TypeScript
getStyledString(): MutableStyledString
```

Obtains the styled string displayed in the **RichEditor** component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RichEditorStyledStringController-getStyledString(): MutableStyledString--><!--Device-RichEditorStyledStringController-getStyledString(): MutableStyledString-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [MutableStyledString](../arkts-apis/arkts-arkui-mutablestyledstring-c.md) | Styled string displayed in the rich text component.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined** is returned. |

<a id="oncontentchanged"></a>
## onContentChanged

```TypeScript
onContentChanged(listener: StyledStringChangedListener): void
```

Registers the callback for the text content change. This callback is triggered only when the text content is changed by backend programs, and is not triggered when [setStyledString](arkts-arkui-richeditorstyledstringcontroller-c.md#setstyledstring-1) is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RichEditorStyledStringController-onContentChanged(listener: StyledStringChangedListener): void--><!--Device-RichEditorStyledStringController-onContentChanged(listener: StyledStringChangedListener): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listener | [StyledStringChangedListener](../arkts-apis/arkts-arkui-styledstringchangedlistener-i.md) | Yes | Callback listener for text content changes. |

<a id="setstyledstring"></a>
## setStyledString

```TypeScript
setStyledString(styledString: StyledString): void
```

Sets the styled string displayed in the **RichEditor** component.

> **NOTE**  
>  
> - When this interface is called, the StyledString of the rich text component is fully replaced and rendered  
> again.  
>  
> - When the content exceeds the component area, the component automatically scrolls up until the content is  
> visible at the end.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RichEditorStyledStringController-setStyledString(styledString: StyledString): void--><!--Device-RichEditorStyledStringController-setStyledString(styledString: StyledString): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | [StyledString](../arkts-apis/arkts-arkui-styledstring-c.md) | Yes | Styled string.<br>**NOTE**<br>The child class [MutableStyledString](../arkts-apis/arkts-arkui-mutablestyledstring-c.md) of **StyledString** can also serve as the argument. |

