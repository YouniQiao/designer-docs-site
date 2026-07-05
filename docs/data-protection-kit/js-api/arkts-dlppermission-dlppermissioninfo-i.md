# DLPPermissionInfo

表示DLP文件的权限信息。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## flags

```TypeScript
flags: number
```

表示DLP文件的详细操作权限，取值范围由不同[ActionFlagType]dlpPermission.ActionFlagType的组合决定。

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

## dlpFileAccess

```TypeScript
dlpFileAccess: DLPFileAccess
```

表示DLP文件针对用户的授权类型，例如：只读。

**Type:** DLPFileAccess

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

