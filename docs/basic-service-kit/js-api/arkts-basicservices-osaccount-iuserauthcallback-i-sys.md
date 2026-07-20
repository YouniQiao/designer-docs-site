# IUserAuthCallback (System API)

Provides callbacks for user authentication.

**Since:** 8

<!--Device-osAccount-interface IUserAuthCallback--><!--Device-osAccount-interface IUserAuthCallback-End-->

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## onAcquireInfo

```TypeScript
onAcquireInfo?: (module: number, acquire: number, extraInfo: Uint8Array) => void
```

Called to acquire identity authentication information.

**Type:** (module: number, acquire: number, extraInfo: Uint8Array) => void

**Since:** 8

<!--Device-IUserAuthCallback-onAcquireInfo?: (module: int, acquire: int, extraInfo: Uint8Array) => void--><!--Device-IUserAuthCallback-onAcquireInfo?: (module: int, acquire: int, extraInfo: Uint8Array) => void-End-->

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## onResult

```TypeScript
onResult: (result: number, extraInfo: AuthResult) => void
```

Called to return the result code and authentication result.

**Type:** (result: number, extraInfo: AuthResult) => void

**Since:** 8

<!--Device-IUserAuthCallback-onResult: (result: int, extraInfo: AuthResult) => void--><!--Device-IUserAuthCallback-onResult: (result: int, extraInfo: AuthResult) => void-End-->

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

