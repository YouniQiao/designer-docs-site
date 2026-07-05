# ShowDialogOptions

Defines the option of show dialog.

**起始版本：** 11

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { ShowActionMenuOptions,Button,ShowToastOptions,ShowDialogOptions,ShowDialogSuccessResponse } from '@kit.ArkUI';
```

## cancel

```TypeScript
cancel?: (data: string, code: string) => void
```

Called when the operation is cancelled.

**类型：** (data: string, code: string) => void

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## buttons

```TypeScript
buttons?: [Button, Button?, Button?]
```

Array of buttons in the dialog box. The array structure is {text:'button', color: '#666666'}. One to three buttons are supported. The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.

**类型：** [Button, Button?, Button?]

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## success

```TypeScript
success?: (data: ShowDialogSuccessResponse) => void
```

Called when the dialog box is displayed.

**类型：** (data: ShowDialogSuccessResponse) => void

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## complete

```TypeScript
complete?: (data: string) => void
```

Called when the dialog box is closed.

**类型：** (data: string) => void

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## message

```TypeScript
message?: string
```

Text body.

**类型：** string

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: string
```

Title of the text to display.

**类型：** string

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

