# BackRouterOptions

Defines the option of router back.

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.router#RouterOptions

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { BackRouterOptions,DisableAlertBeforeBackPageOptions,RouterOptions,RouterState,EnableAlertBeforeBackPageOptions } from '@kit.ArkUI';
```

## params

```TypeScript
params?: Object
```

Data that needs to be passed to the destination page during navigation.

**类型：** Object

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.router.RouterOptions#params

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## uri

```TypeScript
uri?: string
```

Returns to the page of the specified path. If the page with the specified path does not exist in the page stack, router.back() is called by default.

**类型：** string

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.router.RouterOptions#url

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

