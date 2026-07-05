# AuthResult

表示认证结果的对象。

**Since:** 8

**Deprecated since:** 9

**Substitute:** userAuth.AuthResultInfo

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## remainTimes

```TypeScript
remainTimes?: number
```

剩余的认证操作次数。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** userAuth.AuthResultInfo.remainAttempts

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## freezingTime

```TypeScript
freezingTime?: number
```

认证操作的冻结时间。单位为毫秒。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** userAuth.AuthResultInfo.lockoutDuration

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## token

```TypeScript
token?: Uint8Array
```

认证通过的令牌信息。

**Type:** Uint8Array

**Since:** 8

**Deprecated since:** 9

**Substitute:** userAuth.AuthResultInfo.token

**System capability:** SystemCapability.UserIAM.UserAuth.Core

