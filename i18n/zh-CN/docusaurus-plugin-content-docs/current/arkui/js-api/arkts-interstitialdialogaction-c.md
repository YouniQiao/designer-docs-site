# InterstitialDialogAction

Declare dialog action.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { IconStyle,TitlePosition,BottomOffset,InterstitialDialogAction } from '@kit.ArkUI';
```

## closeDialog

```TypeScript
closeDialog(): void
```

Execute a dialog close event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(dialogOptions: DialogOptions)
```

The constructor transfers parameter settings.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dialogOptions | DialogOptions | 是 | Creates a new dialog action object. |

## openDialog

```TypeScript
openDialog(): void
```

Execute a dialog open event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

