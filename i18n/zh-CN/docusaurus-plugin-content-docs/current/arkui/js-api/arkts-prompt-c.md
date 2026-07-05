# Prompt

Defines the prompt interface.

**起始版本：** 11

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { ShowActionMenuOptions,Button,ShowToastOptions,ShowDialogOptions,ShowDialogSuccessResponse } from '@kit.ArkUI';
```

## showActionMenu

```TypeScript
static showActionMenu(options: ShowActionMenuOptions): void
```

Displays the menu.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ShowActionMenuOptions | 是 | Options. |

## showDialog

```TypeScript
static showDialog(options: ShowDialogOptions): void
```

Displays the dialog box.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ShowDialogOptions | 是 | Options. |

## showToast

```TypeScript
static showToast(options: ShowToastOptions): void
```

Displays the notification text.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ShowToastOptions | 是 | Options. |

