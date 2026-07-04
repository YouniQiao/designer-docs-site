# DLPPermissionInfo

Represents the permission information about a DLP file.

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

## Modules to Import

```TypeScript
import { dlpPermission } from '@ohos.dlpPermission';
```

## dlpFileAccess

```TypeScript
dlpFileAccess: DLPFileAccess
```

User permission on the DLP file, for example, read-only.

**Type:** DLPFileAccess

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

## flags

```TypeScript
flags: number
```

Operations that can be performed on the DLP file. The value is a combination of different [ActionFlagTypes](arkts-dataprotection-actionflagtype-e.md#actionflagtype). If the value is out of range, error code 19100001 is thrown.

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

