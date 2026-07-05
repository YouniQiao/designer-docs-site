# IIdmCallback

表示身份管理回调类。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## onAcquireInfo

```TypeScript
onAcquireInfo?: (module: int, acquire: int, extraInfo: Uint8Array) => void
```

身份管理信息获取回调函数。

**Type:** (module: int, acquire: int, extraInfo: Uint8Array) => void

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## onResult

```TypeScript
onResult: (result: int, extraInfo: RequestResult) => void
```

身份管理操作结果回调函数，返回结果码和请求结果信息。

**Type:** (result: int, extraInfo: RequestResult) => void

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

