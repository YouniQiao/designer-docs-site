# UsedRecordDetail

单次访问记录详情。

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
```

## lockScreenStatus

```TypeScript
lockScreenStatus?: int
```

访问时的锁屏状态。 - 1，表示非锁屏场景使用权限。 - 2，表示锁屏场景使用权限。 默认值：1。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## accessDuration

```TypeScript
accessDuration: long
```

访问时长。 单位为：毫秒。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## count

```TypeScript
count?: int
```

访问次数。在accessRecords中表示成功访问次数，在rejectRecords中表示失败或拒绝次数。 默认值：0。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## usedType

```TypeScript
usedType?: PermissionUsedType
```

敏感权限访问方式。 默认值：NORMAL_TYPE。

**Type:** PermissionUsedType

**Since:** 12

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## timestamp

```TypeScript
timestamp: long
```

访问时的时间戳。 单位为：毫秒。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## status

```TypeScript
status: int
```

访问状态。0表示停止使用，1表示前台使用，2表示后台使用。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

