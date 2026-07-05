# StyledStringController

Defines a styled string controller.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getStyledString

```TypeScript
getStyledString(): MutableStyledString
```

Obtains the styled string displayed in the rich text component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| MutableStyledString | Styled string displayed in the rich text component. |

## setStyledString

```TypeScript
setStyledString(styledString: StyledString): void
```

Sets the styled string displayed in the rich text component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | StyledString | Yes | Styled string to set.<br>**NOTE**<br>The child class[MutableStyledString](arkts-arkui-mutablestyledstring-c.md#mutablestyledstring) of **StyledString** can also serve as the argument. |

