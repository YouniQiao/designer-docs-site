# AuthResultInfo

表示认证结果信息，用于描述认证结果。

**Since:** 9

**Deprecated since:** 11

**Substitute:** userAuth.UserAuthResult

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## result

```TypeScript
result: number
```

认证结果。

**Type:** number

**Since:** 9

**Deprecated since:** 11

**Substitute:** userAuth.UserAuthResult.result

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## lockoutDuration

```TypeScript
lockoutDuration?: number
```

认证操作的锁定时长，时间单位为毫秒ms。

**Type:** number

**Since:** 9

**Deprecated since:** 11

**Substitute:** userAuth.AuthLockState.lockoutDuration

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## remainAttempts

```TypeScript
remainAttempts?: number
```

剩余的认证尝试次数。

**Type:** number

**Since:** 9

**Deprecated since:** 11

**Substitute:** userAuth.AuthLockState.remainingAuthAttempts

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## token

```TypeScript
token?: Uint8Array
```

用户身份认证通过的凭证。

**Type:** Uint8Array

**Since:** 9

**Deprecated since:** 11

**Substitute:** userAuth.UserAuthResult.token

**System capability:** SystemCapability.UserIAM.UserAuth.Core

