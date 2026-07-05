# ConstraintChangeInfo

表示约束变更信息。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## isEnabled

```TypeScript
isEnabled: boolean
```

发生变更的约束的使能状态。默认：false。 true表示目标约束已使能；false表示目标约束未使能。

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## constraint

```TypeScript
constraint: string
```

发生变更的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)。

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

