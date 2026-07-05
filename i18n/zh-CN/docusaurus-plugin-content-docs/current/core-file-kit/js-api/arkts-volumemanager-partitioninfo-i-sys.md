# PartitionInfo

Partition information.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { volumeManager } from '@kit.CoreFileKit';
```

## endSector

```TypeScript
endSector: long
```

End sector of the partition.

**类型：** long

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

## startSector

```TypeScript
startSector: long
```

Start sector of the partition.

**类型：** long

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

## diskId

```TypeScript
diskId: string
```

Disk ID.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

## fsType

```TypeScript
fsType: string
```

File system type. Common file systems are **ext4**, **vfat**, **exfat**, **NTFS**, **f2fs**, and **hmfs**.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

## partitionNum

```TypeScript
partitionNum: int
```

Partition number.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

## sizeBytes

```TypeScript
sizeBytes: long
```

Partition total size. <br>Unit: Byte.

**类型：** long

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

