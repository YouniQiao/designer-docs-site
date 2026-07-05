# DateStyleOptions

DateStyleOptions定义日期内联型Counter的属性和事件。 继承于[CommonOptions](arkts-commonoptions-c.md#CommonOptions)。

**Inheritance:** DateStyleOptionsextends: CommonOptions.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterType,DateData,CounterComponent,CounterOptions } from '@kit.ArkUI';
```

## month

```TypeScript
month?: number
```

设置日期内联型初始月份。 默认值：1 取值范围：[1, 12] 超出取值范围按默认值处理。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## year

```TypeScript
year?: number
```

设置日期内联型初始年份。 默认值：1 取值范围：[1, 5000] 超出取值范围按默认值处理。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDateChange

```TypeScript
onDateChange?: (date: DateData) => void
```

当日期改变时，返回当前日期。 date：当前显示的日期值。 值为undefined时，不显示当前的日期值。

**Type:** (date: DateData) => void

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## day

```TypeScript
day?: number
```

设置日期内联型初始日。 默认值：1 取值范围：[1, 31] 超出取值范围按默认值处理。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

