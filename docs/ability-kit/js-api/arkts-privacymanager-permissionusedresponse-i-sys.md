# PermissionUsedResponse

表示所有应用或设备的访问记录。

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
```

## bundleRecords

```TypeScript
bundleRecords: Array<BundleUsedRecord>
```

每个元素表示一个应用维度下的权限访问记录，开发者可进一步遍历permissionRecords获取具体权限使用详情。

**Type:** Array<BundleUsedRecord>

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## endTime

```TypeScript
endTime: long
```

查询记录的终止时间。 单位为：毫秒。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## beginTime

```TypeScript
beginTime: long
```

查询记录的起始时间。 单位为：毫秒。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

