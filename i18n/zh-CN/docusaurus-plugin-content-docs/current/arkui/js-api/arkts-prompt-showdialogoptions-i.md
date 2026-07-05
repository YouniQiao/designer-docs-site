# ShowDialogOptions

Defines the option of show dialog.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.promptAction/promptAction.ShowDialogOptions

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { prompt } from '@kit.ArkUI';
```

## buttons

```TypeScript
buttons?: [Button, Button?, Button?]
```

Array of buttons in the dialog box. The array structure is {text:'button', color: '#666666'}. One to three buttons are supported. The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.

**类型：** [Button, Button?, Button?]

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.promptAction/promptAction.ShowDialogOptions#buttons

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## message

```TypeScript
message?: string
```

Text body.

**类型：** string

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.promptAction/promptAction.ShowDialogOptions#message

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: string
```

Title of the text to display.

**类型：** string

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.promptAction/promptAction.ShowDialogOptions#title

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

