# AuthUser

表示授权用户数据。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## permExpiryTime

```TypeScript
permExpiryTime: number
```

表示授权到期时间。取值范围大于等于0，超出此范围将被强转为非符号整数。单位：s。

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## authAccount

```TypeScript
authAccount: string
```

表示被授权用户账号。不超过255字节，超出此范围抛出错误码19100001。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## authAccountType

```TypeScript
authAccountType: AccountType
```

表示被授权用户账号类型。

**Type:** AccountType

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## dlpFileAccess

```TypeScript
dlpFileAccess: DLPFileAccess
```

表示被授予的权限。

**Type:** DLPFileAccess

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

