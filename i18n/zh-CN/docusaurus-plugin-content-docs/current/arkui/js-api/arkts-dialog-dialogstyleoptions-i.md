# DialogStyleOptions

固定样式对话框的选项。

**继承实现关系：** DialogStyleOptions继承自：DialogBaseOptions。

**起始版本：** 26.1.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { DialogButtonOrientation,DialogState,DialogResult,DialogBaseController,DialogBaseAlignment,DialogDismissal } from '@kit.ArkUI';
```

## sheets

```TypeScript
sheets?: Array<DialogSheet>
```

action-sheet样式的表单项数组。 提供时，对话框将显示供用户选择的工作表项目。

**类型：** Array<DialogSheet>

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## buttons

```TypeScript
buttons?: Array<DialogButton>
```

对话框中的按钮数组。 提供时，对话框显示为带有按钮的警报样式对话框。 与图纸一起使用时，按钮显示在图纸列表下方。

**类型：** Array<DialogButton>

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## subtitle

```TypeScript
subtitle?: ResourceStr
```

对话框的副标题。

**类型：** ResourceStr

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## gridCount

```TypeScript
gridCount?: int
```

对话框的网格计数。 取值限定为整数。

**类型：** int

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## message

```TypeScript
message?: DialogMessage
```

对话框的消息内容和文字样式。

**类型：** DialogMessage

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: ResourceStr
```

对话框标题。

**类型：** ResourceStr

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## buttonDirection

```TypeScript
buttonDirection?: DialogButtonOrientation
```

按钮的排列。

**类型：** DialogButtonOrientation

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

