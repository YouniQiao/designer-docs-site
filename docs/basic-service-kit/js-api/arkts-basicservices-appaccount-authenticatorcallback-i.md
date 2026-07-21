# AuthenticatorCallback

Provides OAuth authenticator callbacks.

> **NOTE**  
>  
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use  
> [AuthCallback](arkts-basicservices-appaccount-authcallback-i.md) instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [AuthCallback](arkts-basicservices-appaccount-authcallback-i.md)

<!--Device-appAccount-interface AuthenticatorCallback--><!--Device-appAccount-interface AuthenticatorCallback-End-->

**System capability:** SystemCapability.Account.AppAccount

## Modules to Import

```TypeScript
import { appAccount } from '@kit.BasicServicesKit';
```

## onRequestRedirected

```TypeScript
onRequestRedirected: (request: Want) => void
```

Called to redirect a request.

> **NOTE**  
>  
> This API is supported since API version 8 and deprecated since API version 9. Use [onRequestRedirected](#onrequestredirected9) instead.

**Type:** (request: Want) =&gt; void

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [onRequestRedirected](arkts-basicservices-appaccount-authcallback-i.md#onrequestredirected)

<!--Device-AuthenticatorCallback-onRequestRedirected: (request: Want) => void--><!--Device-AuthenticatorCallback-onRequestRedirected: (request: Want) => void-End-->

**System capability:** SystemCapability.Account.AppAccount

## onResult

```TypeScript
onResult: (code: number, result: { [key: string]: any }) => void
```

Called to return the result of an authentication request.

> **NOTE**  
>  
> This API is supported since API version 8 and deprecated since API version 9. Use [onResult](#onresult9) instead.

**Type:** (code: number, result: { [key: string]: any }) =&gt; void

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [onResult](arkts-basicservices-appaccount-authcallback-i.md#onresult)

<!--Device-AuthenticatorCallback-onResult: (code: number, result: { [key: string]: any }) => void--><!--Device-AuthenticatorCallback-onResult: (code: number, result: { [key: string]: any }) => void-End-->

**System capability:** SystemCapability.Account.AppAccount

