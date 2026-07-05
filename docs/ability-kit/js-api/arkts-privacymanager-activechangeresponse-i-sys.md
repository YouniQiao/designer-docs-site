# ActiveChangeResponse

表示某次权限使用状态变化的详情。

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
```

## callingTokenId

```TypeScript
callingTokenId?: int
```

接口调用方的应用身份标识，当activeStatus为INACTIVE时该值无效。 默认值：0。

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## activeStatus

```TypeScript
activeStatus: PermissionActiveStatus
```

权限使用状态变化类型。

**Type:** PermissionActiveStatus

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## tokenId

```TypeScript
tokenId: int
```

被订阅的应用身份标识。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## enhancedIdentity

```TypeScript
enhancedIdentity?: string
```

扩展身份，用于标识调用方的附加身份信息。当需要区分同一应用下不同调用来源的权限使用记录时返回此字段。 最大长度为48。默认值：空字符串。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## deviceId

```TypeScript
deviceId: string
```

权限使用状态发生变化时所在设备的ID。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## usedType

```TypeScript
usedType?: PermissionUsedType
```

敏感权限使用类型，当activeStatus为INACTIVE时该值无效。 默认值：NORMAL_TYPE。

**Type:** PermissionUsedType

**Since:** 18

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## permissionName

```TypeScript
permissionName: Permissions
```

权限使用状态发生变化的权限名。

**Type:** Permissions

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

