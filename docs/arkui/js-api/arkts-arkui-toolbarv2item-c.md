# ToolBarV2Item

Declare type ToolBarV2Item

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ToolBarV2ItemImageOptions, ToolBarV2Item, ToolBarV2ItemText, ToolBarV2SymbolGlyphOptions, ToolBarV2ItemAction, ToolBarV2ItemOptions, ToolBarV2, ToolBarV2SymbolGlyph, ToolBarV2ItemIconType, ToolBarV2ItemImage, ToolBarV2ItemState, ToolBarV2ItemTextOptions, ToolBarV2Modifier } from '@ohos.arkui.advanced.ToolBarV2';
```

## constructor

```TypeScript
constructor(options: ToolBarV2ItemOptions)
```

The constructor used to create a ToolBarV2Item object.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ToolBarV2ItemOptions | Yes | item info. |

## accessibilityDescription

```TypeScript
accessibilityDescription?: ResourceStr
```

The accessibilityDescription of item.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

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

**System capability:** SystemCapability.ArkUI.ArkUI.Full

