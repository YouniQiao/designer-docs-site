# OsAccountInfo

表示系统账号信息。

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## serialNumber

```TypeScript
serialNumber: long
```

系统账号SN码。

**Type:** long

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

## domainInfo

```TypeScript
domainInfo: DomainAccountInfo
```

域账号信息，默认为空。

**Type:** DomainAccountInfo

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

## isActived

```TypeScript
isActived: boolean
```

系统账号激活状态。true表示指定账号处于激活状态；false表示指定账号处于未激活状态。 **说明：**从API version 7开始支持，从API version 11开始废弃，建议使用isActivated。

**Type:** boolean

**Since:** 8

**Deprecated since:** 11

**Substitute:** osAccount.OsAccountInfo.isActivated

**System capability:** SystemCapability.Account.OsAccount

## isVerified

```TypeScript
isVerified: boolean
```

账号是否验证。true表示指定账号已验证；false表示指定账号未验证。 **说明：**从API version 7开始支持，从API version 11开始废弃，建议使用isUnlocked。

**Type:** boolean

**Since:** 8

**Deprecated since:** 11

**Substitute:** osAccount.OsAccountInfo.isUnlocked

**System capability:** SystemCapability.Account.OsAccount

## photo

```TypeScript
photo: string
```

系统账号头像，默认为空。

**Type:** string

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

## isUnlocked

```TypeScript
isUnlocked: boolean
```

账号是否已解锁（EL2级别目录是否解密）。true表示指定账号已解锁；false表示指定账号未解锁。

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.Account.OsAccount

## isActivated

```TypeScript
isActivated: boolean
```

系统账号是否激活。true表示指定账号已激活；false表示指定账号未激活。

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.Account.OsAccount

## type

```TypeScript
type: OsAccountType
```

系统账号类型。

**Type:** OsAccountType

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## constraints

```TypeScript
constraints: Array<string>
```

系统账号[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)，默认为空。

**Type:** Array<string>

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## localId

```TypeScript
localId: int
```

系统账号ID。

**Type:** int

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## lastLoginTime

```TypeScript
lastLoginTime: long
```

系统账号最后一次登录时间，以Unix时间戳格式表示，单位为s。

**Type:** long

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

## localName

```TypeScript
localName: string
```

系统账号名称。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## createTime

```TypeScript
createTime: long
```

系统账号创建时间，以Unix时间戳格式表示，单位为s。

**Type:** long

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

## isCreateCompleted

```TypeScript
isCreateCompleted: boolean
```

系统账号创建是否完整。true表示指定账号已创建完整；false表示指定账号未创建完整。

**Type:** boolean

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

## isLoggedIn

```TypeScript
isLoggedIn?: boolean
```

是否登录。true表示已登录；false表示未登录。 此接口为系统接口，默认为false。

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## distributedInfo

```TypeScript
distributedInfo: distributedAccount.DistributedInfo
```

分布式账号信息，默认为空。

**Type:** distributedAccount.DistributedInfo

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## shortName

```TypeScript
shortName?: string
```

系统账号的短名称。 此接口为系统接口，默认为空。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

