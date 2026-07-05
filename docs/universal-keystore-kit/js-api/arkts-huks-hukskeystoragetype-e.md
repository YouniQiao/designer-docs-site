# HuksKeyStorageType

```TypeScript
export enum HuksKeyStorageType
```

表示密钥存储方式。

**Since:** 8

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_STORAGE_TEMP

```TypeScript
HUKS_STORAGE_TEMP = 0
```

表示通过本地直接管理密钥。 **说明：** 从API version 8开始支持，从API version 10开始废弃，由于开发者正常使用密钥管理过程中并不需要使用此TAG，故无替代接口。针对密钥派生场景，可使用 HUKS_STORAGE_ONLY_USED_IN_HUKS 与 HUKS_STORAGE_KEY_EXPORT_ALLOWED。

**Since:** 8

**Deprecated since:** 10

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_STORAGE_PERSISTENT

```TypeScript
HUKS_STORAGE_PERSISTENT = 1
```

表示通过HUKS service管理密钥。 **说明：** 从API version 8开始支持，从API version 10开始废弃，由于开发者正常使用密钥管理过程中并不需要使用此TAG，故无替代接口。针对密钥派生场景，可使用 HUKS_STORAGE_ONLY_USED_IN_HUKS 与 HUKS_STORAGE_KEY_EXPORT_ALLOWED。

**Since:** 8

**Deprecated since:** 10

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_STORAGE_ONLY_USED_IN_HUKS

```TypeScript
HUKS_STORAGE_ONLY_USED_IN_HUKS = 2
```

表示主密钥派生的密钥存储于huks中，由HUKS进行托管。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_STORAGE_KEY_EXPORT_ALLOWED

```TypeScript
HUKS_STORAGE_KEY_EXPORT_ALLOWED = 3
```

表示主密钥派生的密钥直接导出给业务方，HUKS不对其进行托管服务。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

