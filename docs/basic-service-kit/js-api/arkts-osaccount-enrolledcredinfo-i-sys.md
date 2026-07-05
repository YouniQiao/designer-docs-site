# EnrolledCredInfo

表示已注册凭据的信息。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## validityPeriod

```TypeScript
validityPeriod?: long
```

指示凭据有效期，单位为ms。默认为undefined，表示有效期未定义。

**Type:** long

**Since:** 20

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## credentialId

```TypeScript
credentialId: Uint8Array
```

指示凭据索引，默认为空。

**Type:** Uint8Array

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## templateId

```TypeScript
templateId: Uint8Array
```

指示凭据模板ID。

**Type:** Uint8Array

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## authSubType

```TypeScript
authSubType: AuthSubType
```

指示认证凭据子类型。

**Type:** AuthSubType

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## authType

```TypeScript
authType: AuthType
```

身份验证凭据类型。

**Type:** AuthType

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## isAbandoned

```TypeScript
isAbandoned?: boolean
```

指示凭据是否废弃。废弃后的凭据可能作为备份凭据保存一段时间。true表示已废弃，false表示未废弃。默认为undefined，表示是否废弃未定义。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

