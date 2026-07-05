# Disk

Disk information.

**Since:** 26.0.0

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { volumeManager } from '@kit.CoreFileKit';
```

## removable

```TypeScript
removable: boolean
```

Indicates that the disk can be removed.The value true indicates that the disk can be removed.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## volumeIds

```TypeScript
volumeIds: Array<string>
```

Indicates the volume of a disk. A disk may contain multiple volumes.

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## diskId

```TypeScript
diskId: string
```

Disk ID, in the disk-{Primary device ID}-{Secondary device ID} format.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## diskType

```TypeScript
diskType: DiskType
```

Disk type.

**Type:** DiskType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## extraInfo

```TypeScript
extraInfo: string
```

Disk information extension field.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## sizeBytes

```TypeScript
sizeBytes: long
```

Disk total size. <br>Unit: Byte.

**Type:** long

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

