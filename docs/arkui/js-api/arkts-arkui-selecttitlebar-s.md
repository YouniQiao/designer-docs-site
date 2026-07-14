# SelectTitleBar

Declaration of the selectable title bar.

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SelectTitleBarMenuItem, SelectTitleBar } from '@kit.ArkUI';
```

## badgeValue

```TypeScript
badgeValue?: number
```

The number displayed in a badge.

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## hidesBackButton

```TypeScript
hidesBackButton?: boolean
```

Whether to hide the back arrow at the left side.

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## menuItems

```TypeScript
menuItems?: Array<SelectTitleBarMenuItem>
```

Menu items on the right side.

**Type:** Array<SelectTitleBarMenuItem>

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onSelected

```TypeScript
onSelected?: ((index: number) => void)
```

Callback function when an option is selected

**Type:** ((index: number) => void)

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
options: Array<SelectOption>
```

Options inside the drop-down list.

**Type:** Array<SelectOption>

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selected

```TypeScript
@Prop selected: number
```

Selected index of the initial options in the drop-down menu. The index of the first item is 0. If this attribute is not set, the default value is -1. Which means, no menu item is selected.

**Type:** number

**Since:** 20

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## subtitle

```TypeScript
subtitle?: ResourceStr
```

Sub-title of this title bar.

**Type:** ResourceStr

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

