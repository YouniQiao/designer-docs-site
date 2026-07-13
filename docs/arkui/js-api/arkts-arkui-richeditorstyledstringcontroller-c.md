# RichEditorStyledStringController

Represents the controller of the **RichEditor** component constructed using the styled string. Inherits from
[RichEditorBaseController](arkts-arkui-richeditorbasecontroller-c.md).

**Inheritance/Implementation:** RichEditorStyledStringController extends [RichEditorBaseController](arkts-arkui-richeditorbasecontroller-c.md) and implements [StyledStringController](arkts-arkui-styledstringcontroller-i.md)

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getSelection

```TypeScript
getSelection(): RichEditorRange
```

Obtains the current selection range of the **RichEditor** component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RichEditorRange | Selection range.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined**is returned. |

## getStyledString

```TypeScript
getStyledString(): MutableStyledString
```

Obtains the styled string displayed in the **RichEditor** component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| MutableStyledString | Styled string displayed in the rich text component.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined**is returned. |

## onContentChanged

```TypeScript
onContentChanged(listener: StyledStringChangedListener): void
```

Registers the callback for the text content change. This callback is triggered only when the text content is
changed by backend programs, and is not triggered when
[setStyledString](arkts-arkui-richeditorstyledstringcontroller-c.md#setstyledstring-1) is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listener | StyledStringChangedListener | Yes | Callback listener for text content changes. |

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

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | StyledString | Yes | Styled string.<br>**NOTE**<br>The child class[MutableStyledString](arkts-arkui-mutablestyledstring-c.md) of **StyledString** can also serve as theargument. |

