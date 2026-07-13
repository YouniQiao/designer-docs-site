# SyncFolder (System API)

Encapsulates the sync root information.

**Since:** 21

**System capability:** SystemCapability.FileManagement.CloudDiskManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudDiskManager } from '@kit.CoreFileKit';
```

## bundleName

```TypeScript
bundleName: string
```

Bundle name of the sync root.

**Type:** string

**Since:** 21

**System capability:** SystemCapability.FileManagement.CloudDiskManager

**System API:** This is a system API.

## customAlias

```TypeScript
customAlias?: string
```

Custom alias displayed in the File Manager list. The default value is **undefined**.

**Type:** string

**Since:** 21

**System capability:** SystemCapability.FileManagement.CloudDiskManager

**System API:** This is a system API.

## displayNameResId

```TypeScript
displayNameResId?: number
```

Resource ID, which can be mapped to the alias displayed in the File Manager list. The default value is
**undefined**.

**Type:** number

**Since:** 21

**System capability:** SystemCapability.FileManagement.CloudDiskManager

**System API:** This is a system API.

## path

```TypeScript
path: string
```

URI of the sync root.

**Type:** string

**Since:** 21

**System capability:** SystemCapability.FileManagement.CloudDiskManager

**System API:** This is a system API.

## state

```TypeScript
state: SyncFolderState
```

State of the sync root.

**Type:** SyncFolderState

**Since:** 21

**System capability:** SystemCapability.FileManagement.CloudDiskManager

**System API:** This is a system API.

