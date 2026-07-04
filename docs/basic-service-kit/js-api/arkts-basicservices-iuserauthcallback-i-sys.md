# IUserAuthCallback (System API)

Provides callbacks for user authentication.

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@ohos.account.osAccount';
```

## onAcquireInfo

```TypeScript
onAcquireInfo?: (module: number, acquire: number, extraInfo: Uint8Array) => void
```

Called to acquire identity authentication information.

**Type:** (module: number, acquire: number, extraInfo: Uint8Array) => void

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## onResult

```TypeScript
onResult: (result: number, extraInfo: AuthResult) => void
```

Called to return the result code and authentication result.

**Type:** (result: number, extraInfo: AuthResult) => void

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

