# ToolBarModifier

Declare ToolBarModifier use in ToolBar

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ToolBarOption, ItemState, ToolBar, ToolBarOptions, ToolBarModifier } from '@ohos.arkui.advanced.ToolBar';
```

## backgroundColor

```TypeScript
backgroundColor(backgroundColor: ResourceColor): ToolBarModifier
```

Sets the backgroundColor of the toolBar.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| backgroundColor | ResourceColor | Yes | toolBar's backgroundColor. |

**Return value:**

| Type | Description |
| --- | --- |
| ToolBarModifier | returns the instance of the ToolBarModifier. |

## height

```TypeScript
height(height: LengthMetrics): ToolBarModifier
```

Sets the height of the toolBar.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | LengthMetrics | Yes | toolBar's height. |

**Return value:**

| Type | Description |
| --- | --- |
| ToolBarModifier | returns the instance of the ToolBarModifier. |

## padding

```TypeScript
padding(padding: LengthMetrics): ToolBarModifier
```

Sets the left and right padding of the toolbar.

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
| ToolBarModifier | returns the instance of the ToolBarModifier. |

## stateEffect

```TypeScript
stateEffect(stateEffect: boolean): ToolBarModifier
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
| ToolBarModifier | returns the instance of the ToolBarModifier. |

