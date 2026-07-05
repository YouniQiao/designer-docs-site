# PartitionTableInfo

Partition table information.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { volumeManager } from '@kit.CoreFileKit';
```

## partitions

```TypeScript
partitions: Array<PartitionInfo>
```

Array of partition information.

**类型：** Array<PartitionInfo>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

## alignSector

```TypeScript
alignSector: int
```

Alignment sector.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

## partitionCount

```TypeScript
partitionCount: int
```

Number of partitions.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

## tableType

```TypeScript
tableType: string
```

Partition table type, such as 'gpt' or 'mbr'.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

## totalSector

```TypeScript
totalSector: long
```

Total number of sectors.

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

## sectorSize

```TypeScript
sectorSize: int
```

Sector size in bytes.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

