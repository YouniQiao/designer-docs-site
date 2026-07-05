# FileSystemRequestConfig

Parameters required to perform garbage collection (GC).

**Since:** 23

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { backup } from '@kit.CoreFileKit';
```

## triggerType

```TypeScript
triggerType: int
```

Specifies the trigger type for garbage collection (0-default Device GC).

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

## writeSize

```TypeScript
writeSize: int
```

Defines the target size (in MBytes) for garbage collection.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

## waitTime

```TypeScript
waitTime: int
```

Sets the maximum wait time (in seconds) for GC operation.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

