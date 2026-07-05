# CounterV2InlineStyleOptions

CounterV2InlineStyleOptions定义了数值内联型CounterV2的属性和事件。 继承于[CounterV2CommonOptions](arkts-counterv2commonoptions-c.md#CounterV2CommonOptions)。

**Inheritance:** CounterV2InlineStyleOptionsextends: CounterV2CommonOptions.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterV2Component,CounterV2Options,CounterV2Type,CounterV2DateData } from '@kit.ArkUI';
```

## min

```TypeScript
min?: int
```

设置CounterV2的最小值。 默认值：0 取值范围：(-∞, +∞) 值为undefined时，按默认值处理。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
onChange?: OnInlineCounterV2Change
```

数值改变时，返回当前值。 默认值：数值改变时，不返回值。 值为undefined时，按默认值处理。

**Type:** OnInlineCounterV2Change

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## max

```TypeScript
max?: int
```

设置CounterV2的最大值。 默认值：999 取值范围：(-∞, +∞) 值为undefined时，按默认值处理。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textWidth

```TypeScript
textWidth?: double
```

设置数值文本的宽度。 默认值：undefined 取值范围：[0, +∞) 单位：vp 不设置该属性或者设置为undefined时，文本宽度由内容自适应撑开。小于0时，按0处理。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value?: int
```

设置CounterV2的初始值。 默认值：0 取值范围：[min, max]，其中min和max分别对应下述CounterV2的最小值和最大值。 超出取值范围时，如果值为undefined，按默认值处理，否则按最大值处理。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

