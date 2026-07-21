# StyledStringController

Defines a styled string controller.

**Since:** 12

<!--Device-unnamed-declare interface StyledStringController--><!--Device-unnamed-declare interface StyledStringController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="getstyledstring"></a>
## getStyledString

```TypeScript
getStyledString(): MutableStyledString
```

Obtains the styled string displayed in the rich text component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-StyledStringController-getStyledString(): MutableStyledString--><!--Device-StyledStringController-getStyledString(): MutableStyledString-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [MutableStyledString](arkts-arkui-mutablestyledstring-c.md) | Styled string displayed in the rich text component. |

<a id="setstyledstring"></a>
## setStyledString

```TypeScript
setStyledString(styledString: StyledString): void
```

Sets the styled string displayed in the rich text component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-StyledStringController-setStyledString(styledString: StyledString): void--><!--Device-StyledStringController-setStyledString(styledString: StyledString): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | [StyledString](arkts-arkui-styledstring-c.md) | Yes | Styled string to set.<br>**NOTE**<br>The child class [MutableStyledString](arkts-arkui-mutablestyledstring-c.md) of **StyledString** can also serve as the argument. |

