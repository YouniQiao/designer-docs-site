# CounterV2CommonOptions

CounterV2CommonOptions定义了CounterV2的共通属性和事件。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterV2Component,CounterV2Options,CounterV2Type,CounterV2DateData } from '@kit.ArkUI';
```

## onHoverDecrease

```TypeScript
onHoverDecrease?: OnCounterV2HoverCallback
```

鼠标进入或退出CounterV2组件的"减小按钮"时，触发该回调。 默认值：undefined，表示不触发该回调。 值为undefined时，按默认值处理。

**Type:** OnCounterV2HoverCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onHoverIncrease

```TypeScript
onHoverIncrease?: OnCounterV2HoverCallback
```

鼠标进入或退出CounterV2组件的"增加按钮"时，触发该回调。 默认值：undefined，表示不触发该回调。 值为undefined时，按默认值处理。

**Type:** OnCounterV2HoverCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## step

```TypeScript
step?: int
```

设置CounterV2的步长。 取值范围：大于等于1的整数。 默认值：1 超出取值范围按默认值处理。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## focusable

```TypeScript
focusable?: boolean
```

设置CounterV2是否可获焦。 **说明：** 该属性对列表型和紧凑型CounterV2生效。 默认值：true true：CounterV2可获焦；false：CounterV2不可获焦。 值为undefined时，按默认值处理。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

