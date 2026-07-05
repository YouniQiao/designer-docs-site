# PopupButtonOptions

Defines the button attributes and events.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Popup, PopupOptions, PopupButtonOptions, PopupIconOptions, PopupTextOptions } from '@ohos.arkui.advanced.Popup';
```

## action

```TypeScript
action?: () => void
```

Click callback of the button. By default, no operation is performed.

**Type:** () => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ResourceColor
```

Font color of the button text. Default value: **$r('sys.color.ohos_id_color_text_primary_activated')**

**Type:** ResourceColor

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontSize

```TypeScript
fontSize?: number | string | Resource
```

Font size of the button text. Default value: **$r('sys.float.ohos_id_text_size_button2')** The string value must be convertible to a number (for example, **'10'**) or include a length unit (for example, **'10px'**); percentage-based strings are not supported. Invalid values are handled as default values.

**Type:** number | string | Resource

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## text

```TypeScript
text: ResourceStr
```

Text of the button.

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

