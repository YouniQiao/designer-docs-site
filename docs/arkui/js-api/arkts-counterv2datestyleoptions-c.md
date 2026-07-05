# CounterV2DateStyleOptions

CounterV2DateStyleOptions定义日期内联型CounterV2的属性和事件。 继承于[CounterV2CommonOptions](arkts-counterv2commonoptions-c.md#CounterV2CommonOptions)。

**Inheritance:** CounterV2DateStyleOptionsextends: CounterV2CommonOptions.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterV2Component,CounterV2Options,CounterV2Type,CounterV2DateData } from '@kit.ArkUI';
```

## month

```TypeScript
month?: int
```

设置日期内联型初始月份。 默认值：1 取值范围：[1, 12] 超出取值范围按默认值处理。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## year

```TypeScript
year?: int
```

设置日期内联型初始年份。 默认值：1 取值范围：[1, 5000] 超出取值范围按默认值处理。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDateChange

```TypeScript
onDateChange?: OnDateCounterV2ChangeCallback
```

当日期改变时，返回当前日期。 值为undefined时，不显示当前的日期值。

**Type:** OnDateCounterV2ChangeCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## day

```TypeScript
day?: int
```

设置日期内联型初始日。 默认值：1 取值范围：[1, 31] 必须为合法日期，如month为2月时，day传入30将视为异常值，按默认值处理。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

