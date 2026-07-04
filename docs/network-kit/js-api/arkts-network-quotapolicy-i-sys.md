# QuotaPolicy (System API)

Policies that limit network quota.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { policy } from '@ohos.net.policy';
```

## lastLimitRemind

```TypeScript
lastLimitRemind?: number
```

The time of the last limit reminder. For notifying only, default: REMIND_NEVER.

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

## lastWarningRemind

```TypeScript
lastWarningRemind?: number
```

The time of the last warning reminder. For notifying only, default: REMIND_NEVER.

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

## limitAction

```TypeScript
limitAction: LimitAction
```

The action while the used bytes reach the limit, see {@link LimitAction}.

**Type:** LimitAction

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

## limitBytes

```TypeScript
limitBytes: number
```

The limit threshold of traffic, default: DATA_USAGE_UNKNOWN.

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

## metered

```TypeScript
metered: boolean
```

Is metered network or not.

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

## periodDuration

```TypeScript
periodDuration: string
```

The period and the start time for quota policy, default: "M1" (Monthly cycle).

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

## warningBytes

```TypeScript
warningBytes: number
```

The warning threshold of traffic, default: DATA_USAGE_UNKNOWN.

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

