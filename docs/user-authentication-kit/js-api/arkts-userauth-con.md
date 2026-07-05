# Constants

## MAX_ALLOWABLE_REUSE_DURATION

```TypeScript
const MAX_ALLOWABLE_REUSE_DURATION: 300000
```

复用解锁认证结果最大有效时长，值为300000毫秒（5分钟）。用于限制认证结果复用的最大时长，防止长时间复用过期的认证结果带来的安全风险。该常量可作为 [ReuseUnlockResult]userAuth.ReuseUnlockResult中reuseDuration参数的最大值。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## MAX_ALLOWABLE_REUSE_DURATION

```TypeScript
const MAX_ALLOWABLE_REUSE_DURATION: int
```

永久锁定时长，单位为毫秒。取值为0x7fffffffff，代表认证永久锁定，不代表具体锁定时长。 取值范围为全体整数。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## PERMANENT_LOCKOUT_DURATION

```TypeScript
const PERMANENT_LOCKOUT_DURATION: int = 0x7fffffff
```

永久冻结时间，值为0x7fffffff毫秒。当认证不通过次数达到上限后，认证器将进入永久冻结状态，此时需要通过PIN认证才能解锁。该值用于标识认证器的永久冻结状态，可通过 [AuthLockState]userAuth.AuthLockState的lockoutDuration字段返回。

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## PERMANENT_LOCKOUT_DURATION

```TypeScript
const PERMANENT_LOCKOUT_DURATION: int
```

永久锁定时长，单位为毫秒。取值为0x7fffffffff，代表认证永久锁定，不代表具体锁定时长。 取值范围为全体整数。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

