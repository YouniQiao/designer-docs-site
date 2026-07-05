# DistributedInfo

提供操作系统账号的分布式信息。

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## Modules to Import

```TypeScript
import { distributedAccount } from '@kit.BasicServicesKit';
```

## nickname

```TypeScript
nickname?: string
```

分布式账号的昵称，默认为空。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

## name

```TypeScript
name: string
```

分布式账号名称，非空字符串。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## avatar

```TypeScript
avatar?: string
```

分布式账号的头像，默认为空。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

## id

```TypeScript
id: string
```

分布式账号UID，非空字符串。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## event

```TypeScript
event: string
```

分布式账号登录状态，包括登录、登出、Token失效和注销，分别对应以下字符串： - Ohos.account.event.LOGIN - Ohos.account.event.LOGOUT - Ohos.account.event.TOKEN_INVALID - Ohos.account.event.LOGOFF

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## scalableData

```TypeScript
scalableData?: object
```

分布式账号扩展信息，根据业务所需，以k-v形式传递定制化信息，默认为空。

**Type:** object

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

```TypeScript
scalableData?: Record<string, RecordData>
```

分布式账号扩展信息，根据业务所需，以k-v形式传递定制化信息，默认为空。

**Type:** Record<string, RecordData>

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

## status

```TypeScript
readonly status?: DistributedAccountStatus
```

分布式账号的状态，枚举类型，默认为未登录状态。

**Type:** DistributedAccountStatus

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

