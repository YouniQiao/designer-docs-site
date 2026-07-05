# Volume

获取所有卷。

**Since:** 9

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { volumeManager } from '@kit.CoreFileKit';
```

## path

```TypeScript
path: string
```

卷设备的挂载地址，一般为/mnt/data/external/{uuid}。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## removable

```TypeScript
removable: boolean
```

表示卷设备是否可移除，当前仅支持可移除存储设备。true为可移除；false为不可移除。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## description

```TypeScript
description: string
```

卷设备描述。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## diskId

```TypeScript
diskId: string
```

卷设备所属的磁盘ID，一个磁盘可以有一个或者多个卷设备。磁盘设备ID的格式为disk-{主设备号}-{次设备号}，与卷设备ID相似。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## state

```TypeScript
state: int
```

卷设备状态标识： 0：卸载状态 UNMOUNTED。 1：检查状态 CHECKING。 2：挂载状态 MOUNTED。 3：正在弹出状态 EJECTING。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## id

```TypeScript
id: string
```

卷设备ID的格式为vol-{主设备号}-{次设备号}，主设备号用来区分不同种类的设备， 次设备号用来区分同一类型的多个设备，卷设备ID会随着插卡顺序不同而变化。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## fsType

```TypeScript
fsType: string
```

文件系统的类型，常见有ext2、vfat、NTFS等。 **说明**：从API version 24开始，支持ISO9660、UDF。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## uuid

```TypeScript
uuid: string
```

卷设备uuid是卷设备的通用唯一识别码，不会随着插卡顺序变化而变化，但是卷设备的格式化会改变卷设备的uuid。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

