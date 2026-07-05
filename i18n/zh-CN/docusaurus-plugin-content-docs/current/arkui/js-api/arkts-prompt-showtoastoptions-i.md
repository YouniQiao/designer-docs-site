# ShowToastOptions

Defines the options of ShowToast.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.promptAction/promptAction.ShowToastOptions

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { prompt } from '@kit.ArkUI';
```

## duration

```TypeScript
duration?: number
```

Duration of toast dialog box. The default value is 1500. The recommended value ranges from 1500 ms to 10000ms. NOTE: A value less than 1500 is automatically changed to 1500. The maximum value is 10000 ms.

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.promptAction/promptAction.ShowToastOptions#duration

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## bottom

```TypeScript
bottom?: string | number
```

The distance between toast dialog box and the bottom of screen.

**类型：** string | number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.promptAction/promptAction.ShowToastOptions#bottom

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## message

```TypeScript
message: string
```

Text to display.

**类型：** string

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.promptAction/promptAction.ShowToastOptions#message

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

