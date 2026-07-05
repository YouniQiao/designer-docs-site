# OsAccountSubProfile (System API)

Definition of an OS account sub-profile.

**Since:** 26.0.0

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@ohos.account.osAccount';
```

## distributedInfo

```TypeScript
distributedInfo?: distributedAccount.DistributedInfo
```

Distributed account information bound to the OS account sub-profile.

**Type:** distributedAccount.DistributedInfo

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## id

```TypeScript
id: number
```

Identifier of the OS account sub-profile.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## index

```TypeScript
index: number
```

Position index of the OS account sub-profile, ranging from 0 to the number of sub-profiles minus 1. This index is unique within each OS account and is automatically assigned by the system when the sub-profile is created.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## osAccountLocalId

```TypeScript
osAccountLocalId: number
```

Local ID of the OS account to which the sub-profile belongs.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

