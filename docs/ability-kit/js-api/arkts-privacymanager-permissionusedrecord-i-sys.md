# PermissionUsedRecord

某个权限的访问记录。

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
```

## lastAccessDuration

```TypeScript
lastAccessDuration: long
```

最后一次访问时长。 单位为：毫秒。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## accessCount

```TypeScript
accessCount: int
```

该权限访问总次数，表示在查询时间窗口内成功使用该权限的累计次数。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## lastAccessTime

```TypeScript
lastAccessTime: long
```

最后一次访问时间。 单位为：毫秒。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## lastRejectTime

```TypeScript
lastRejectTime: long
```

最后一次拒绝时间。 单位为：毫秒。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## enhancedIdentity

```TypeScript
enhancedIdentity?: string
```

扩展身份，长度不超过48个字符。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## accessRecords

```TypeScript
accessRecords: Array<UsedRecordDetail>
```

访问记录集合，仅当flag为FLAG_PERMISSION_USAGE_DETAIL时生效。 默认值：查询最近10条成功访问记录。

**Type:** Array<UsedRecordDetail>

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## rejectRecords

```TypeScript
rejectRecords: Array<UsedRecordDetail>
```

拒绝记录集合，仅当flag为FLAG_PERMISSION_USAGE_DETAIL时生效。 默认值：查询最近10条失败或拒绝记录。

**Type:** Array<UsedRecordDetail>

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## rejectCount

```TypeScript
rejectCount: int
```

该权限拒绝总次数，表示在查询时间窗口内权限访问失败或被拒绝的累计次数。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## permissionName

```TypeScript
permissionName: Permissions
```

权限名，用于标识当前统计记录对应的敏感权限。

**Type:** Permissions

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

