# SaveButton properties/events

Defines the attributes of the save button.

**Inheritance/Implementation:** SaveButtonAttribute extends [SecurityComponentMethod<SaveButtonAttribute>](SecurityComponentMethod<SaveButtonAttribute>)

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## iconBorderRadius

```TypeScript
iconBorderRadius(radius: Dimension | BorderRadiuses)
```

Sets the border radius of the icon.

**Since:** 20

**Required permissions:** ohos.permission.CUSTOMIZE_SAVE_BUTTON

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | Dimension \| BorderRadiuses | Yes | Border radius of the icon to set. |

## iconSize

```TypeScript
iconSize(size: Dimension | SizeOptions)
```

Sets the size of the icon.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | Dimension \| SizeOptions | Yes | Dimensions of the icon to set. |

## onClick

```TypeScript
onClick(event: SaveButtonCallback)
```

Called when the save button is clicked.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | SaveButtonCallback | Yes |  |

## setIcon

```TypeScript
setIcon(icon: Resource)
```

Sets the icon of the save button.

**Since:** 20

**Required permissions:** ohos.permission.CUSTOMIZE_SAVE_BUTTON

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| icon | Resource | Yes | Source of the icon. |

## setText

```TypeScript
setText(text: string | Resource)
```

Sets the text of the save button.

**Since:** 20

**Required permissions:** ohos.permission.CUSTOMIZE_SAVE_BUTTON

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string \| Resource | Yes | Content of text. |

## stateEffect

```TypeScript
stateEffect(enabled: boolean)
```

Enables the press effect of the button.

**Since:** 20

**Required permissions:** ohos.permission.CUSTOMIZE_SAVE_BUTTON

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable the press effect. The value true means to enable the press effect;the value false means the opposite. |

## symbolFontWeight

```TypeScript
symbolFontWeight(fontWeight: number | FontWeight | string | Resource)
```

Sets the font weight of the symbol icon.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CUSTOMIZE_SAVE_BUTTON

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontWeight | number \| FontWeight \| string \| Resource | Yes | Font weight of the symbol icon. |

## symbolIconColor

```TypeScript
symbolIconColor(color: Array<ResourceColor>)
```

Sets the color of the symbol icon.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CUSTOMIZE_SAVE_BUTTON

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Array&lt;ResourceColor&gt; | Yes | Color of the symbol icon. |

## symbolRenderingStrategy

```TypeScript
symbolRenderingStrategy(strategy: SymbolRenderingStrategy)
```

Sets the rendering policy of the symbol icon.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CUSTOMIZE_SAVE_BUTTON

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | SymbolRenderingStrategy | Yes | Rendering policy of the symbol icon. |

## userCancelEvent

```TypeScript
userCancelEvent(enabled: boolean)
```

Receives the event when the user clicks cancel.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to receive the event when the user clicks cancel. |

