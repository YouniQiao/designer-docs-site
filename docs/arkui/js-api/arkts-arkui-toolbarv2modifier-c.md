# ToolBarV2Modifier

Declare ToolBarV2Modifier used in ToolBar

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ToolBarV2ItemImageOptions, ToolBarV2Item, ToolBarV2ItemText, ToolBarV2SymbolGlyphOptions, ToolBarV2ItemAction, ToolBarV2ItemOptions, ToolBarV2, ToolBarV2SymbolGlyph, ToolBarV2ItemIconType, ToolBarV2ItemImage, ToolBarV2ItemState, ToolBarV2ItemTextOptions, ToolBarV2Modifier } from '@ohos.arkui.advanced.ToolBarV2';
```

## backgroundColor

```TypeScript
backgroundColor(backgroundColor: ColorMetrics): ToolBarV2Modifier
```

Sets the backgroundColor of the toolBarV2.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| backgroundColor | ColorMetrics | Yes | toolBarV2's backgroundColor. |

**Return value:**

| Type | Description |
| --- | --- |
| ToolBarV2Modifier | returns the instance of the ToolBarV2Modifier. |

## height

```TypeScript
height(height: LengthMetrics): ToolBarV2Modifier
```

Sets the height of the toolBarV2.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | LengthMetrics | Yes | toolBarV2's height. |

**Return value:**

| Type | Description |
| --- | --- |
| ToolBarV2Modifier | returns the instance of the ToolBarV2Modifier. |

## padding

```TypeScript
padding(padding: LengthMetrics): ToolBarV2Modifier
```

Sets the left and right padding of the toolbarV2.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| padding | LengthMetrics | Yes | left and right padding. |

**Return value:**

| Type | Description |
| --- | --- |
| ToolBarV2Modifier | returns the instance of the ToolBarV2Modifier. |

## stateEffect

```TypeScript
stateEffect(stateEffect: boolean): ToolBarV2Modifier
```

Sets whether or not to display the press status effect.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| stateEffect | boolean | Yes | press status effect. |

**Return value:**

| Type | Description |
| --- | --- |
| ToolBarV2Modifier | returns the instance of the ToolBarV2Modifier. |

