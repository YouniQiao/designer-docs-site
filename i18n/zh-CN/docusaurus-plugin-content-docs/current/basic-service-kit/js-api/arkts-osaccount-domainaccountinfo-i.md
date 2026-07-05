# DomainAccountInfo

表示域账号信息。

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

## 导入模块

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## accountId

```TypeScript
accountId?: string
```

域账号标识。 此接口为系统接口，默认为undefined。

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

## serverConfigId

```TypeScript
serverConfigId?: string
```

域账号配置ID，默认为空字符串。

**类型：** string

**起始版本：** 18

**系统能力：** SystemCapability.Account.OsAccount

## accountName

```TypeScript
accountName: string
```

域账号名。

**类型：** string

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

## domain

```TypeScript
domain: string
```

域名。

**类型：** string

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

## additionalInfo

```TypeScript
additionalInfo?: Record<string, Object>
```

域账号附加信息。 此接口仅可在Stage模型下使用。

**类型：** Record<string, Object>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Account.OsAccount

```TypeScript
additionalInfo?: Record<string, RecordData>
```

域账号附加信息。 此接口仅可在Stage模型下使用。

**类型：** Record<string, RecordData>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Account.OsAccount

## isAuthenticated

```TypeScript
isAuthenticated?: boolean
```

指示域账号是否已认证。true表示指定的域账号已认证；false表示指定的域账号未认证。 此接口为系统接口，默认为false。

**类型：** boolean

**起始版本：** 11

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

