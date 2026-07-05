# InlineStyleOptions

Defines the inline style options.

**Inheritance/Implementation:** InlineStyleOptions extends [CommonOptions](arkts-arkui-commonoptions-c.md#commonoptions)

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterType, DateData, CounterComponent, CounterOptions } from '@ohos.arkui.advanced.Counter';
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

**System capability:** SystemCapability.ArkUI.ArkUI.Full

