# RouterOptions

Defines the option of router.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router#RouterOptions

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## 导入模块

```TypeScript
import { BackRouterOptions,DisableAlertBeforeBackPageOptions,RouterOptions,RouterState,EnableAlertBeforeBackPageOptions } from '@kit.ArkUI';
```

## params

```TypeScript
params?: Object
```

Data that needs to be passed to the destination page during navigation. After the destination page is displayed, the parameter can be directly used for the page. For example, this.data1 (data1 is the key value of the params used for page navigation.)

**类型：** Object

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router.RouterOptions#params

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## uri

```TypeScript
uri: string
```

URI of the destination page, which supports the following formats: 1. Absolute path of the page, which is provided by the pages list in the config.json file. Example: pages/index/index pages/detail/detail 2. Particular path. If the URI is a slash (/), the home page is displayed.

**类型：** string

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router.RouterOptions#url

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

