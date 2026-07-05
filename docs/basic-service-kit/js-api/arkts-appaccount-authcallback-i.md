# AuthCallback

认证器回调类。

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

## Modules to Import

```TypeScript
import { appAccount } from '@kit.BasicServicesKit';
```

## onRequestRedirected

```TypeScript
onRequestRedirected: (request: Want) => void
```

通知请求被跳转。

**Type:** (request: Want) => void

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

## onRequestContinued

```TypeScript
onRequestContinued?: () => void
```

通知请求被继续处理。

**Type:** () => void

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

## onResult

```TypeScript
onResult: (code: int, result?: AuthResult) => void
```

通知请求结果。

**Type:** (code: int, result?: AuthResult) => void

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

