# IIdmCallback (System API)

Provides callbacks for IDM.

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

Called to acquire IDM information.

**Type:** (module: number, acquire: number, extraInfo: Uint8Array) => void

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## onResult

```TypeScript
onResult: (result: number, extraInfo: RequestResult) => void
```

Called to return the result code and request result information.

**Type:** (result: number, extraInfo: RequestResult) => void

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

