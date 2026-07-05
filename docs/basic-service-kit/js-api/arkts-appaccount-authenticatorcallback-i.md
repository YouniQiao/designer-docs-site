# AuthenticatorCallback

OAuth认证器回调接口。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用[AuthCallback]appAccount.AuthCallback替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** appAccount.AuthCallback

**System capability:** SystemCapability.Account.AppAccount

## Modules to Import

```TypeScript
import { appAccount } from '@kit.BasicServicesKit';
```

## onRequestRedirected

```TypeScript
onRequestRedirected: (request: Want) => void
```

通知请求被跳转。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用[onRequestRedirected](#onrequestredirected9)替代。

**Type:** (request: Want) => void

**Since:** 8

**Deprecated since:** 9

**Substitute:** AppAccount.AuthCallback.onRequestRedirected

**System capability:** SystemCapability.Account.AppAccount

## onResult

```TypeScript
onResult: (code: number, result: { [key: string]: any }) => void
```

通知请求结果。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用[onResult](#onresult9)替代。

**Type:** (code: number, result: { [key: string]: any }) => void

**Since:** 8

**Deprecated since:** 9

**Substitute:** AppAccount.AuthCallback.onResult

**System capability:** SystemCapability.Account.AppAccount

