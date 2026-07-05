# ShowActionMenuOptions

Defines the option of ShowActionMenu.

**起始版本：** 11

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { ShowActionMenuOptions,Button,ShowToastOptions,ShowDialogOptions,ShowDialogSuccessResponse } from '@kit.ArkUI';
```

## fail

```TypeScript
fail?: (errMsg: string) => void
```

Called when the operation is cancelled.

**类型：** (errMsg: string) => void

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## buttons

```TypeScript
buttons: [Button, Button?, Button?, Button?, Button?, Button?]
```

Array of buttons in the dialog box. The array structure is {text:'button', color: '#666666'}. One to six buttons are supported.

**类型：** [Button, Button?, Button?, Button?, Button?, Button?]

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## success

```TypeScript
success?: (tapIndex: number, errMsg: string) => void
```

Called when the dialog box is displayed.

**类型：** (tapIndex: number, errMsg: string) => void

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## complete

```TypeScript
complete?: () => void
```

Called when the dialog box is closed.

**类型：** () => void

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

