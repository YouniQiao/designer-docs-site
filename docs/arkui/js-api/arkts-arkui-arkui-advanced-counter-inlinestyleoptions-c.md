# InlineStyleOptions

Defines the inline style options.

**Inheritance/Implementation:** InlineStyleOptions extends [CommonOptions](arkts-arkui-arkui-advanced-counter-commonoptions-c.md)

**Since:** 11

<!--Device-unnamed-declare class InlineStyleOptions extends CommonOptions--><!--Device-unnamed-declare class InlineStyleOptions extends CommonOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterType, DateData, CounterComponent, CounterOptions } from '@kit.ArkUI';
```

## max

```TypeScript
max?: number
```

Set maximum value of the counter component

**Type:** number

**Default:** 999

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-InlineStyleOptions-max?: number--><!--Device-InlineStyleOptions-max?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## min

```TypeScript
min?: number
```

Set minimum value of the counter component

**Type:** number

**Default:** 0

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-InlineStyleOptions-min?: number--><!--Device-InlineStyleOptions-min?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
onChange?: (value: number) => void
```

Trigger an event when the value of the counter has been changed.

**Type:** (value: number) => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-InlineStyleOptions-onChange?: (value: number) => void--><!--Device-InlineStyleOptions-onChange?: (value: number) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textWidth

```TypeScript
textWidth?: number
```

Set text width of the counter component, ranges greater than or equal to 0

**Type:** number

**Default:** 0

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-InlineStyleOptions-textWidth?: number--><!--Device-InlineStyleOptions-textWidth?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value?: number
```

Set initial value of the counter component, ranges from min to max.

**Type:** number

**Default:** 0

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-InlineStyleOptions-value?: number--><!--Device-InlineStyleOptions-value?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

