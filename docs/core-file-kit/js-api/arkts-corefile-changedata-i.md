# ChangeData

Represents the data change information.

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## Modules to Import

```TypeScript
import { cloudSync } from '@ohos.file.cloudSync';
```

## isDirectory

```TypeScript
isDirectory: Array<boolean>
```

Whether the URIs with data changed are of directories. The value **true** means the URIs are of directories; the value **false** means the opposite.

**Type:** Array<boolean>

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## type

```TypeScript
type: NotifyType
```

Type of the data change.

**Type:** NotifyType

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## uris

```TypeScript
uris: Array<string>
```

List of URIs whose data needs to be changed.

**Type:** Array<string>

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

