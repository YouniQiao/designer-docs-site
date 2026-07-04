# DateStyleOptions

Defines the date style options.

**Inheritance/Implementation:** DateStyleOptions extends [CommonOptions](arkts-arkui-commonoptions-c.md#commonoptions)

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterType, DateData, CounterComponent, CounterOptions } from '@ohos.arkui.advanced.Counter';
```

## day

```TypeScript
day?: number
```

Set the day of the counter component.

**Type:** number

**Default:** 1

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## month

```TypeScript
month?: number
```

Set the month of the counter component.

**Type:** number

**Default:** 1

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDateChange

```TypeScript
onDateChange?: (date: DateData) => void
```

Trigger an event when the date of the counter has been changed.

**Type:** (date: DateData) => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## year

```TypeScript
year?: number
```

Set the year of the counter component, ranges from 1 to 5000.

**Type:** number

**Default:** 1

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

