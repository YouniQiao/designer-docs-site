# PopupButtonOptions

PopupButtonOptions定义按钮的相关属性和事件。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Popup,PopupOptions,PopupButtonOptions,PopupIconOptions,PopupTextOptions } from '@kit.ArkUI';
```

## action

```TypeScript
action?: () => void
```

设置按钮click回调。 默认不执行任何操作。

**Type:** () => void

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontSize

```TypeScript
fontSize?: number | string | Resource
```

设置按钮文本字体大小。 默认值：`$r('sys.float.ohos_id_text_size_button2')` string类型可选值：可以转化为数字的字符串（如'10'）或带长度单位的字符串（如'10px'），不支持设置百分比字符串。 为number类型时默认单位：fp。 设置值为异常值时取默认值。

**Type:** number | string | Resource

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## text

```TypeScript
text: ResourceStr
```

设置按钮内容。

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ResourceColor
```

设置按钮文本字体颜色。 默认值：`$r('sys.color.ohos_id_color_text_primary_activated')`

**Type:** ResourceColor

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

