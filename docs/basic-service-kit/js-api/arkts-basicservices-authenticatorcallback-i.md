# AuthenticatorCallback

Provides OAuth authenticator callbacks. > **NOTE** > > This API is supported since API version 8 and deprecated since API version 9. You are advised to use > [AuthCallback](arkts-basicservices-authcallback-i.md#authcallback) instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [AuthCallback](arkts-basicservices-authcallback-i.md#authcallback)

**System capability:** SystemCapability.Account.AppAccount

## Modules to Import

```TypeScript
import { appAccount } from '@ohos.account.appAccount';
```

## onRequestRedirected

```TypeScript
onRequestRedirected: (request: Want) => void
```

Called to redirect a request. > **NOTE** > > This API is supported since API version 8 and deprecated since API version 9. Use [onRequestRedirected](#onrequestredirected9) instead.

**Type:** (request: Want) => void

**Since:** 8

**Deprecated since:** 9

**Substitutes:** onRequestRedirected

**System capability:** SystemCapability.Account.AppAccount

## onResult

```TypeScript
onResult: (code: number, result: { [key: string]: any }) => void
```

Called to return the result of an authentication request. > **NOTE** > > This API is supported since API version 8 and deprecated since API version 9. Use [onResult](#onresult9) instead.

**Type:** (code: number, result: { [key: string]: any }) => void

**Since:** 8

**Deprecated since:** 9

**Substitutes:** onResult

**System capability:** SystemCapability.Account.AppAccount

