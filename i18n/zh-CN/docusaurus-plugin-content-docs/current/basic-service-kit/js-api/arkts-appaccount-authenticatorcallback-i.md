# AuthenticatorCallback

OAuth认证器回调接口。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用[AuthCallback]appAccount.AuthCallback替代。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** appAccount.AuthCallback

**系统能力：** SystemCapability.Account.AppAccount

## 导入模块

```TypeScript
import { appAccount } from '@kit.BasicServicesKit';
```

## onRequestRedirected

```TypeScript
onRequestRedirected: (request: Want) => void
```

通知请求被跳转。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用[onRequestRedirected](#onrequestredirected9)替代。

**类型：** (request: Want) => void

**起始版本：** 8

**废弃版本：** 9

**替代接口：** AppAccount.AuthCallback.onRequestRedirected

**系统能力：** SystemCapability.Account.AppAccount

## onResult

```TypeScript
onResult: (code: number, result: { [key: string]: any }) => void
```

通知请求结果。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用[onResult](#onresult9)替代。

**类型：** (code: number, result: { [key: string]: any }) => void

**起始版本：** 8

**废弃版本：** 9

**替代接口：** AppAccount.AuthCallback.onResult

**系统能力：** SystemCapability.Account.AppAccount

