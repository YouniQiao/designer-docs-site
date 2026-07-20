# AuthCallback

Implements authenticator callbacks.

**Since:** 9

<!--Device-appAccount-interface AuthCallback--><!--Device-appAccount-interface AuthCallback-End-->

**System capability:** SystemCapability.Account.AppAccount

## Modules to Import

```TypeScript
import { appAccount } from '@kit.BasicServicesKit';
```

## onRequestContinued

```TypeScript
onRequestContinued?: () => void
```

Called to continue to process the request.

**Type:** () => void

**Since:** 9

<!--Device-AuthCallback-onRequestContinued?: () => void--><!--Device-AuthCallback-onRequestContinued?: () => void-End-->

**System capability:** SystemCapability.Account.AppAccount

## onRequestRedirected

```TypeScript
onRequestRedirected: (request: Want) => void
```

Called to redirect a request.

**Type:** (request: Want) => void

**Since:** 9

<!--Device-AuthCallback-onRequestRedirected: (request: Want) => void--><!--Device-AuthCallback-onRequestRedirected: (request: Want) => void-End-->

**System capability:** SystemCapability.Account.AppAccount

## onResult

```TypeScript
onResult: (code: number, result?: AuthResult) => void
```

Called to return the result of an authentication request.

**Type:** (code: number, result?: AuthResult) => void

**Since:** 9

<!--Device-AuthCallback-onResult: (code: int, result?: AuthResult) => void--><!--Device-AuthCallback-onResult: (code: int, result?: AuthResult) => void-End-->

**System capability:** SystemCapability.Account.AppAccount

