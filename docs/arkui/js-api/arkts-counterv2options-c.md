# CounterV2Options

CounterV2Options定义CounterV2类型及样式。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterV2Component,CounterV2Options,CounterV2Type,CounterV2DateData } from '@kit.ArkUI';
```

## dateOptions

```TypeScript
dateOptions?: CounterV2DateStyleOptions
```

日期内联型CounterV2的样式。 默认值：显示0001/01/01的日期内联型CounterV2。 值为undefined时，按默认值处理。

**Type:** CounterV2DateStyleOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## numberOptions

```TypeScript
numberOptions?: CounterV2NumberStyleOptions
```

列表型和紧凑型CounterV2的样式。 默认值：显示计数器为0的列表型或紧凑型CounterV2。 值为undefined时，按默认值处理。

**Type:** CounterV2NumberStyleOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type: CounterV2Type
```

指定当前CounterV2的类型。

**Type:** CounterV2Type

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## inlineOptions

```TypeScript
inlineOptions?: CounterV2InlineStyleOptions
```

普通数字内联调节型CounterV2的样式。 默认值：显示计数器为0的普通数字内联调节型CounterV2。 值为undefined时，按默认值处理。

**Type:** CounterV2InlineStyleOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## direction

```TypeScript
direction?: Direction
```

布局方向。 默认值：Direction.Auto 值为undefined时，按默认值处理。

**Type:** Direction

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

