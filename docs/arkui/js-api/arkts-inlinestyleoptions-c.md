# InlineStyleOptions

InlineStyleOptions定义了数值内联型Counter的属性和事件。 继承于[CommonOptions](arkts-commonoptions-c.md#CommonOptions)。

**Inheritance:** InlineStyleOptionsextends: CommonOptions.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterType,DateData,CounterComponent,CounterOptions } from '@kit.ArkUI';
```

## min

```TypeScript
min?: number
```

设置Counter的最小值。 默认值：0 取值范围：(-∞, +∞) 值为undefined时，按默认值处理。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
onChange?: (value: number) => void
```

数值改变时，返回当前值。 value：当前显示的数值。 默认值：数值改变时，不返回值。 值为undefined时，按默认值处理。

**Type:** (value: number) => void

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## max

```TypeScript
max?: number
```

设置Counter的最大值。 默认值：999 取值范围：(-∞, +∞) 值为undefined时，按默认值处理。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textWidth

```TypeScript
textWidth?: number
```

设置数值文本的宽度。 默认值：自适应文本宽度。 取值范围：[0, +∞) 单位：vp 超出取值范围时，如果值为undefined，按默认值处理，否则按最大值处理。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value?: number
```

设置Counter的初始值。 默认值：0 取值范围：[min, max]，其中min和max分别对应下述Counter的最小值和最大值。 超出取值范围时，如果值为undefined，按默认值处理，否则按最大值处理。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

