# CounterV2NumberStyleOptions

CounterV2NumberStyleOptions定义了列表型和紧凑型CounterV2的属性和事件。 继承于[CounterV2InlineStyleOptions](arkts-counterv2inlinestyleoptions-c.md#CounterV2InlineStyleOptions)。

**Inheritance:** CounterV2NumberStyleOptionsextends: CounterV2InlineStyleOptions.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterV2Component,CounterV2Options,CounterV2Type,CounterV2DateData } from '@kit.ArkUI';
```

## onBlurDecrease

```TypeScript
onBlurDecrease?: VoidCallback
```

当CounterV2组件的"减小按钮"失去焦点时，触发该回调。 默认值：undefined，表示不触发该回调。 值为undefined时，按默认值处理。

**Type:** VoidCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onFocusDecrease

```TypeScript
onFocusDecrease?: VoidCallback
```

当CounterV2组件的"减小按钮"获取焦点时，触发该回调。 默认值：undefined，表示不触发该回调。 值为undefined时，按默认值处理。

**Type:** VoidCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onFocusIncrease

```TypeScript
onFocusIncrease?: VoidCallback
```

当CounterV2组件的"增加按钮"获取焦点时，触发该回调。 默认值：undefined，表示不触发该回调。 值为undefined时，按默认值处理。

**Type:** VoidCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onBlurIncrease

```TypeScript
onBlurIncrease?: VoidCallback
```

当CounterV2组件的"增加按钮"失去焦点时，触发该回调。 默认值：undefined，表示不触发该回调。 值为undefined时，按默认值处理。

**Type:** VoidCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## label

```TypeScript
label?: ResourceStr
```

设置CounterV2的说明文本。 默认值：' ' 值为undefined时，按默认值处理。

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

