# DisableAlertBeforeBackPageOptions

Defines the option of DisableAlertBeforeBackPage.

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.router#RouterOptions

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { BackRouterOptions,DisableAlertBeforeBackPageOptions,RouterOptions,RouterState,EnableAlertBeforeBackPageOptions } from '@kit.ArkUI';
```

## cancel

```TypeScript
cancel?: (errMsg: string) => void
```

Called when the operation is cancelled.

**类型：** (errMsg: string) => void

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.router#RouterOptions

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## success

```TypeScript
success?: (errMsg: string) => void
```

Called when the dialog box is displayed.

**类型：** (errMsg: string) => void

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.router#RouterOptions

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## complete

```TypeScript
complete?: () => void
```

Called when the dialog box is closed.

**类型：** () => void

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.router#RouterOptions

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

