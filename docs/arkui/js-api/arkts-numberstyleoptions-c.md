# NumberStyleOptions

NumberStyleOptions定义了列表型和紧凑型Counter的属性和事件。 继承于[InlineStyleOptions](arkts-inlinestyleoptions-c.md#InlineStyleOptions)。

**Inheritance:** NumberStyleOptionsextends: InlineStyleOptions.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterType,DateData,CounterComponent,CounterOptions } from '@kit.ArkUI';
```

## onBlurDecrease

```TypeScript
onBlurDecrease?: () => void
```

当前Counter组件的减小按钮失去焦点时触发的回调。 默认值：不触发减少按钮失去焦点时的回调。 值为undefined时，按默认值处理。

**Type:** () => void

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onFocusDecrease

```TypeScript
onFocusDecrease?: () => void
```

当前Counter组件的减小按钮获取焦点时触发的回调。 默认值：不触发减少按钮获取焦点时的回调。 值为undefined时，按默认值处理。

**Type:** () => void

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onFocusIncrease

```TypeScript
onFocusIncrease?: () => void
```

当前Counter组件的增加按钮获取焦点时触发的回调。 默认值：不触发增加按钮获取焦点时的回调。 值为undefined时，按默认值处理。

**Type:** () => void

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onBlurIncrease

```TypeScript
onBlurIncrease?: () => void
```

当前Counter组件的增加按钮失去焦点时触发的回调。 默认值：不触发增加按钮失去焦点时的回调。 值为undefined时，按默认值处理。

**Type:** () => void

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## label

```TypeScript
label?: ResourceStr
```

设置Counter的说明文本。 默认值：' ' 值为undefined时，按默认值处理。

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

