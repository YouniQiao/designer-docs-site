# OsAccountSubProfile

系统账号子Profile的定义

**Since:** 26.0.0

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## osAccountLocalId

```TypeScript
osAccountLocalId: int
```

子profile所属系统账号的本地标识符。 取值范围为全体整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## index

```TypeScript
index: int
```

系统账号子profile的位置索引，取值范围：0~子profile个数减1。 该索引在每个系统账号下唯一，由系统在创建子Profile时自动分配。 取值范围为全体整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## distributedInfo

```TypeScript
distributedInfo?: distributedAccount.DistributedInfo
```

系统账号子profile绑定的分布式账号信息。

**Type:** distributedAccount.DistributedInfo

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## id

```TypeScript
id: int
```

系统账号子profile的标识符。 取值范围为全体整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

