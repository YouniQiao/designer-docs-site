# DialogStyleOptions

固定样式对话框的选项。

**Inheritance:** DialogStyleOptionsextends: DialogBaseOptions.

**Since:** 26.1.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { DialogButtonOrientation,DialogState,DialogResult,DialogBaseController,DialogBaseAlignment,DialogDismissal } from '@kit.ArkUI';
```

## sheets

```TypeScript
sheets?: Array<DialogSheet>
```

action-sheet样式的表单项数组。 提供时，对话框将显示供用户选择的工作表项目。

**Type:** Array<DialogSheet>

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## buttons

```TypeScript
buttons?: Array<DialogButton>
```

对话框中的按钮数组。 提供时，对话框显示为带有按钮的警报样式对话框。 与图纸一起使用时，按钮显示在图纸列表下方。

**Type:** Array<DialogButton>

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## subtitle

```TypeScript
subtitle?: ResourceStr
```

对话框的副标题。

**Type:** ResourceStr

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## gridCount

```TypeScript
gridCount?: int
```

对话框的网格计数。 取值限定为整数。

**Type:** int

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## message

```TypeScript
message?: DialogMessage
```

对话框的消息内容和文字样式。

**Type:** DialogMessage

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: ResourceStr
```

对话框标题。

**Type:** ResourceStr

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## buttonDirection

```TypeScript
buttonDirection?: DialogButtonOrientation
```

按钮的排列。

**Type:** DialogButtonOrientation

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

