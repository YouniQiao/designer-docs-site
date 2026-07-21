# ToolBarV2Item

Declare type ToolBarV2Item

**Since:** 18

**Decorator:** @ObservedV2

<!--Device-unnamed-export declare class ToolBarV2Item--><!--Device-unnamed-export declare class ToolBarV2Item-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ToolBarV2ItemImageOptions, ToolBarV2Item, ToolBarV2ItemText, ToolBarV2SymbolGlyphOptions, ToolBarV2ItemAction, ToolBarV2ItemOptions, ToolBarV2, ToolBarV2SymbolGlyph, ToolBarV2ItemIconType, ToolBarV2ItemImage, ToolBarV2ItemState, ToolBarV2ItemTextOptions, ToolBarV2Modifier } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(options: ToolBarV2ItemOptions)
```

The constructor used to create a ToolBarV2Item object.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ToolBarV2Item-constructor(options: ToolBarV2ItemOptions)--><!--Device-ToolBarV2Item-constructor(options: ToolBarV2ItemOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [ToolBarV2ItemOptions](arkts-arkui-arkui-advanced-toolbarv2-toolbarv2itemoptions-i.md) | Yes | item info. |

## accessibilityDescription

```TypeScript
accessibilityDescription?: ResourceStr
```

The accessibilityDescription of item.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ToolBarV2Item-accessibilityDescription?: ResourceStr--><!--Device-ToolBarV2Item-accessibilityDescription?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

The accessibilityLevel of item.

**Type:** string

**Default:** "auto"

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ToolBarV2Item-accessibilityLevel?: string--><!--Device-ToolBarV2Item-accessibilityLevel?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
accessibilityText?: ResourceStr
```

The accessibilityText of item.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ToolBarV2Item-accessibilityText?: ResourceStr--><!--Device-ToolBarV2Item-accessibilityText?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action?: ToolBarV2ItemAction
```

Define the action event.

**Type:** ToolBarV2ItemAction

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ToolBarV2Item-action?: ToolBarV2ItemAction--><!--Device-ToolBarV2Item-action?: ToolBarV2ItemAction-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
content: ToolBarV2ItemText
```

Define text content.

**Type:** ToolBarV2ItemText

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ToolBarV2Item-content: ToolBarV2ItemText--><!--Device-ToolBarV2Item-content: ToolBarV2ItemText-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon?: ToolBarV2ItemIconType
```

Define icon resource.

**Type:** ToolBarV2ItemIconType

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ToolBarV2Item-icon?: ToolBarV2ItemIconType--><!--Device-ToolBarV2Item-icon?: ToolBarV2ItemIconType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## state

```TypeScript
state?: ToolBarV2ItemState
```

Define item type.

**Type:** ToolBarV2ItemState

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ToolBarV2Item-state?: ToolBarV2ItemState--><!--Device-ToolBarV2Item-state?: ToolBarV2ItemState-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

