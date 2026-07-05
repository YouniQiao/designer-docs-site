# RouterState

Defines the state of router.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router#RouterState

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { BackRouterOptions,DisableAlertBeforeBackPageOptions,RouterOptions,RouterState,EnableAlertBeforeBackPageOptions } from '@kit.ArkUI';
```

## path

```TypeScript
path: string
```

Path of the current page.

**类型：** string

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router.RouterState#path

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## name

```TypeScript
name: string
```

Name of the current page, that is, the file name.

**类型：** string

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router.RouterState#name

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## index

```TypeScript
index: number
```

Index of the current page in the stack. NOTE: The index starts from 1 from the bottom to the top of the stack.

**类型：** number

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router.RouterState#index

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

