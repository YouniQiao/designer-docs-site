# AddPermissionUsedRecordOptions

添加权限使用记录可选参数集。

**Since:** 12

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
```

## enhancedIdentity

```TypeScript
enhancedIdentity?: string
```

扩展身份，用于标识调用方的附加身份信息。当需要区分同一应用下不同调用来源的权限使用记录时传入此字段。长度不超过48个字符，调用 [addPermissionUsedRecord]privacyManager.addPermissionUsedRecord时传入超长值会返回错误码12100001。 最大长度为48。默认值：空字符串。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## usedType

```TypeScript
usedType?: PermissionUsedType
```

敏感权限使用类型。 默认值：NORMAL_TYPE。

**Type:** PermissionUsedType

**Since:** 12

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

