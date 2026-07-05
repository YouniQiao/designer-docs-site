# DomainAccountInfo

表示域账号信息。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## accountId

```TypeScript
accountId?: string
```

域账号标识。 此接口为系统接口，默认为undefined。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## serverConfigId

```TypeScript
serverConfigId?: string
```

域账号配置ID，默认为空字符串。

**Type:** string

**Since:** 18

**System capability:** SystemCapability.Account.OsAccount

## accountName

```TypeScript
accountName: string
```

域账号名。

**Type:** string

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

## domain

```TypeScript
domain: string
```

域名。

**Type:** string

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

## additionalInfo

```TypeScript
additionalInfo?: Record<string, Object>
```

域账号附加信息。 此接口仅可在Stage模型下使用。

**Type:** Record<string, Object>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

```TypeScript
additionalInfo?: Record<string, RecordData>
```

域账号附加信息。 此接口仅可在Stage模型下使用。

**Type:** Record<string, RecordData>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

## isAuthenticated

```TypeScript
isAuthenticated?: boolean
```

指示域账号是否已认证。true表示指定的域账号已认证；false表示指定的域账号未认证。 此接口为系统接口，默认为false。

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

