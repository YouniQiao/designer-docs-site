# IUserAuthCallback

表示用户认证回调类。

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

身份认证信息获取回调函数。

**Type:** (module: int, acquire: int, extraInfo: Uint8Array) => void

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## onResult

```TypeScript
onResult: (result: int, extraInfo: AuthResult) => void
```

身份认证结果回调函数，返回结果码和认证结果信息。

**Type:** (result: int, extraInfo: AuthResult) => void

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

