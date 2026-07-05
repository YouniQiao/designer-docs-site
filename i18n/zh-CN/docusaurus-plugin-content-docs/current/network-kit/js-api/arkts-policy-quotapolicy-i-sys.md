# QuotaPolicy

Policies that limit network quota.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { policy } from '@kit.NetworkKit';
```

## lastLimitRemind

```TypeScript
lastLimitRemind?: number
```

The time of the last limit reminder. For notifying only, default: REMIND_NEVER.

**类型：** number

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## limitAction

```TypeScript
limitAction: LimitAction
```

The action while the used bytes reach the limit, see {@link LimitAction}.

**类型：** LimitAction

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## warningBytes

```TypeScript
warningBytes: number
```

The warning threshold of traffic, default: DATA_USAGE_UNKNOWN.

**类型：** number

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## periodDuration

```TypeScript
periodDuration: string
```

The period and the start time for quota policy, default: "M1" (Monthly cycle).

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## limitBytes

```TypeScript
limitBytes: number
```

The limit threshold of traffic, default: DATA_USAGE_UNKNOWN.

**类型：** number

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## metered

```TypeScript
metered: boolean
```

Is metered network or not.

**类型：** boolean

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## lastWarningRemind

```TypeScript
lastWarningRemind?: number
```

The time of the last warning reminder. For notifying only, default: REMIND_NEVER.

**类型：** number

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

