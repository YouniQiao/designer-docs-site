# DLPProperty

表示授权相关信息。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## offlineAccess

```TypeScript
offlineAccess: boolean
```

表示是否是离线打开。true表示允许离线打开，false表示不可离线打开。

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## everyoneAccessList

```TypeScript
everyoneAccessList?: Array<DLPFileAccess>
```

表示授予所有人的权限，默认为空。

**Type:** Array<DLPFileAccess>

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## contactAccount

```TypeScript
contactAccount: string
```

表示联系人账号。长度不超过255字节，超出此范围抛出错误码19100001。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## countdown

```TypeScript
countdown?: number
```

表示文件可被查看的有效时间，超时后打开的文件将自动关闭，默认为0，单位：秒。取值范围大于等于0。无范围限制。

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.DataLossPrevention

## ownerAccount

```TypeScript
ownerAccount: string
```

表示权限设置者账号。长度不超过255字节，超出此范围抛出错误码19100001。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## authUserList

```TypeScript
authUserList?: Array<AuthUser>
```

表示授权用户列表，默认为空。

**Type:** Array<AuthUser>

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## extensionFields

```TypeScript
extensionFields?: Record<string, Object>
```

表示DLP文件的扩展属性，默认为空。

**Type:** Record<string, Object>

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.DataLossPrevention

## expireTime

```TypeScript
expireTime?: number
```

表示文件权限到期时间戳，默认为空。取值范围大于等于0，超出此范围抛出错误码。单位：s。

**Type:** number

**Since:** 11

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## ownerAccountType

```TypeScript
ownerAccountType: AccountType
```

表示权限设置者账号类型。

**Type:** AccountType

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## ownerAccountID

```TypeScript
ownerAccountID: string
```

表示权限设置者账号的ID。长度不超过255字节，超出此范围抛出错误码19100001。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## waterMarkConfig

```TypeScript
waterMarkConfig?: boolean
```

表示是否要求添加水印。true表示要求添加水印，false表示不要求添加水印，默认为空。

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Security.DataLossPrevention

## allowedOpenCount

```TypeScript
allowedOpenCount?: number
```

表示允许打开的次数，默认为0。无范围限制。

**Type:** number

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

## actionUponExpiry

```TypeScript
actionUponExpiry?: ActionType
```

表示到期后文件是否允许打开（打开后拥有编辑权限），仅在expireTime不为空时生效，默认为空。

**Type:** ActionType

**Since:** 20

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## fileId

```TypeScript
fileId?: string
```

表示文件的标识，默认为空。长度不超过255字节，超出此范围抛出错误码19100001。

**Type:** string

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

