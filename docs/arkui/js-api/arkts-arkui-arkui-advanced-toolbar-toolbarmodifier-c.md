# ToolBarModifier

Declare ToolBarModifier use in ToolBar

**Since:** 18

<!--Device-unnamed-export declare class ToolBarModifier--><!--Device-unnamed-export declare class ToolBarModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ToolBarOption, ItemState, ToolBar, ToolBarOptions, ToolBarModifier } from '@kit.ArkUI';
```

## backgroundColor

```TypeScript
backgroundColor(backgroundColor: ResourceColor): ToolBarModifier
```

Sets the backgroundColor of the toolBar.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ToolBarModifier-backgroundColor(backgroundColor: ResourceColor): ToolBarModifier--><!--Device-ToolBarModifier-backgroundColor(backgroundColor: ResourceColor): ToolBarModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| backgroundColor | [ResourceColor](arkts-arkui-resourcecolor-t.md) | Yes | toolBar's backgroundColor. |

**Return value:**

| Type | Description |
| --- | --- |
| [ToolBarModifier](arkts-arkui-arkui-advanced-toolbar-toolbarmodifier-c.md) | returns the instance of the ToolBarModifier. |

## height

```TypeScript
height(height: LengthMetrics): ToolBarModifier
```

Sets the height of the toolBar.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ToolBarModifier-height(height: LengthMetrics): ToolBarModifier--><!--Device-ToolBarModifier-height(height: LengthMetrics): ToolBarModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | [LengthMetrics](arkts-arkui-lengthmetrics-t.md) | Yes | toolBar's height. |

**Return value:**

| Type | Description |
| --- | --- |
| [ToolBarModifier](arkts-arkui-arkui-advanced-toolbar-toolbarmodifier-c.md) | returns the instance of the ToolBarModifier. |

## padding

```TypeScript
padding(padding: LengthMetrics): ToolBarModifier
```

Sets the left and right padding of the toolbar.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ToolBarModifier-padding(padding: LengthMetrics): ToolBarModifier--><!--Device-ToolBarModifier-padding(padding: LengthMetrics): ToolBarModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| padding | [LengthMetrics](arkts-arkui-lengthmetrics-t.md) | Yes | left and right padding. |

**Return value:**

| Type | Description |
| --- | --- |
| [ToolBarModifier](arkts-arkui-arkui-advanced-toolbar-toolbarmodifier-c.md) | returns the instance of the ToolBarModifier. |

## stateEffect

```TypeScript
stateEffect(stateEffect: boolean): ToolBarModifier
```

Sets whether or not to display the press status effect.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ToolBarModifier-stateEffect(stateEffect: boolean): ToolBarModifier--><!--Device-ToolBarModifier-stateEffect(stateEffect: boolean): ToolBarModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| stateEffect | boolean | Yes | press status effect. |

**Return value:**

| Type | Description |
| --- | --- |
| [ToolBarModifier](arkts-arkui-arkui-advanced-toolbar-toolbarmodifier-c.md) | returns the instance of the ToolBarModifier. |

