# AuthCallback

Implements authenticator callbacks.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

## Modules to Import

```TypeScript
import { appAccount } from '@ohos.account.appAccount';
```

## onRequestContinued

```TypeScript
onRequestContinued?: () => void
```

Called to continue to process the request.

**Type:** () => void

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

## onRequestRedirected

```TypeScript
onRequestRedirected: (request: Want) => void
```

Called to redirect a request.

**Type:** (request: Want) => void

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

## onResult

```TypeScript
onResult: (code: number, result?: AuthResult) => void
```

Called to return the result of an authentication request.

**Type:** (code: number, result?: AuthResult) => void

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

