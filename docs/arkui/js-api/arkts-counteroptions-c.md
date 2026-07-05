# CounterOptions

CounterOptions定义Counter类型及样式。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterType,DateData,CounterComponent,CounterOptions } from '@kit.ArkUI';
```

## dateOptions

```TypeScript
dateOptions?: DateStyleOptions
```

日期型内联型Counter的样式。 默认值：显示0001/01/01的日期型内联型Counter。 值为undefined时，按默认值处理。

**Type:** DateStyleOptions

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## numberOptions

```TypeScript
numberOptions?: NumberStyleOptions
```

列表型和紧凑型Counter的样式。 默认值：显示计数器为0的列表型或紧凑型Counter。 值为undefined时，按默认值处理。

**Type:** NumberStyleOptions

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type: CounterType
```

指定当前Counter的类型。

**Type:** CounterType

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## inlineOptions

```TypeScript
inlineOptions?: InlineStyleOptions
```

普通数字内联调节型Counter的样式。 默认值：显示计数器为0的普通数字内联调节型Counter。 值为undefined时，按默认值处理。

**Type:** InlineStyleOptions

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## direction

```TypeScript
direction?: Direction
```

布局方向。 默认值：Direction.Auto 值为undefined时，按默认值处理。

**Type:** Direction

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

