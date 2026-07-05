# AuthCallback

认证器回调类。

**起始版本：** 9

**系统能力：** SystemCapability.Account.AppAccount

## 导入模块

```TypeScript
import { appAccount } from '@kit.BasicServicesKit';
```

## onRequestRedirected

```TypeScript
onRequestRedirected: (request: Want) => void
```

通知请求被跳转。

**类型：** (request: Want) => void

**起始版本：** 9

**系统能力：** SystemCapability.Account.AppAccount

## onRequestContinued

```TypeScript
onRequestContinued?: () => void
```

通知请求被继续处理。

**类型：** () => void

**起始版本：** 9

**系统能力：** SystemCapability.Account.AppAccount

## onResult

```TypeScript
onResult: (code: int, result?: AuthResult) => void
```

通知请求结果。

**类型：** (code: int, result?: AuthResult) => void

**起始版本：** 9

**系统能力：** SystemCapability.Account.AppAccount

