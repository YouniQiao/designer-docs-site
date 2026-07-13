# @ohos.file.volumeManager

The **volumeManager** module provides APIs for querying and managing volumes and disks, including querying volume
information, mounting or unmounting a volume, partitioning a disk, and formatting a volume.

**Since:** 9

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { volumeManager } from '@kit.CoreFileKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [burn](arkts-corefile-burn-f-sys.md#burn-1) | Burns data to a volume. This API uses a promise to return the result. |
| [createIsoImage](arkts-corefile-createisoimage-f-sys.md#createisoimage-1) | Creates an ISO image from a volume. This API uses a promise to return the result. |
| [createPartition](arkts-corefile-createpartition-f-sys.md#createpartition-1) | Creates a partition on a disk. This API uses a promise to return the result. |
| [deletePartition](arkts-corefile-deletepartition-f-sys.md#deletepartition-1) | Deletes a partition on a disk. This API uses a promise to return the result. |
| [eject](arkts-corefile-eject-f-sys.md#eject-1) | Ejects a volume. This API uses a promise to return the result. |
| [erase](arkts-corefile-erase-f-sys.md#erase-1) | Erases a volume. This API uses a promise to return the result. |
| [format](arkts-corefile-format-f-sys.md#format-1) | Formats a volume. This API uses an asynchronous callback to return the result. Currently, only the virtual fileallocation table (VFAT), ext4 and exFAT file systems are supported. Only unmounted volumes can be formatted. Aftera volume is formatted, the UUID, mounting path, and description of the volume will change. |
| [format](arkts-corefile-format-f-sys.md#format-2) | Formats a volume. This API uses a promise to return the result. Currently, only the virtual file allocation table (VFAT), ext4 and exFAT file systems are supported. Only unmounted volumes can be formatted. After a volume isformatted, the UUID, mounting path, and description of the volume will change. |
| [formatPartition](arkts-corefile-formatpartition-f-sys.md#formatpartition-1) | Formats a partition on a disk. This API uses a promise to return the result. |
| [getAllDisks](arkts-corefile-getalldisks-f-sys.md#getalldisks-1) | Querying Information About All Disks. |
| [getAllVolumes](arkts-corefile-getallvolumes-f-sys.md#getallvolumes-1) | Obtains information about all volumes of this external storage device. This API uses an asynchronous callback toreturn the result. |
| [getAllVolumes](arkts-corefile-getallvolumes-f-sys.md#getallvolumes-2) | Obtains information about all volumes of this external storage device. This API uses a promise to return theresult. |
| [getDiskById](arkts-corefile-getdiskbyid-f-sys.md#getdiskbyid-1) | Querying disk information based on the disk ID. |
| [getOpProcess](arkts-corefile-getopprocess-f-sys.md#getopprocess-1) | Gets the operation progress of a volume. This API uses a promise to return the result. |
| [getPartitionTable](arkts-corefile-getpartitiontable-f-sys.md#getpartitiontable-1) | Obtains partition table information based on the disk ID. This API uses a promise to return the result. |
| [getVolumeById](arkts-corefile-getvolumebyid-f-sys.md#getvolumebyid-1) | Obtains information about a volume based on the volume ID. This API uses an asynchronous callback to return theresult. |
| [getVolumeById](arkts-corefile-getvolumebyid-f-sys.md#getvolumebyid-2) | Obtains information about a volume based on the volume ID. This API uses a promise to return the result. |
| [getVolumeByUuid](arkts-corefile-getvolumebyuuid-f-sys.md#getvolumebyuuid-1) | Obtains information about a volume based on the UUID. This API uses an asynchronous callback to return the result. |
| [getVolumeByUuid](arkts-corefile-getvolumebyuuid-f-sys.md#getvolumebyuuid-2) | Obtains information about a volume based on the universally unique identifier (UUID). This API uses a promise toreturn the result. |
| [isVolumeInUse](arkts-corefile-isvolumeinuse-f-sys.md#isvolumeinuse-1) | Query whether the specified volume is currently in use. This API uses a promise to return the result. |
| [mount](arkts-corefile-mount-f-sys.md#mount-1) | Mounts a volume. This API uses an asynchronous callback to return the result. Currently, only the FAT, exFAT, ext4and NTFS file systems are supported. |
| [mount](arkts-corefile-mount-f-sys.md#mount-2) | Mounts a volume. This API uses a promise to return the result. Currently, only the FAT, exFAT, ext4 and NTFS filesystems are supported. |
| [partition](arkts-corefile-partition-f-sys.md#partition-1) | Partitions a disk. This API uses an asynchronous callback to return the result. The system supports access tomulti-partition disks. Currently, this API can partition a disk into only one partition. |
| [partition](arkts-corefile-partition-f-sys.md#partition-2) | Partitions a disk. This API uses a promise to return the result. The system supports access to multi-partitiondisks. Currently, this API can partition a disk into only one partition. |
| [setVolumeDescription](arkts-corefile-setvolumedescription-f-sys.md#setvolumedescription-1) | Sets volume description. This API uses an asynchronous callback to return the result. |
| [setVolumeDescription](arkts-corefile-setvolumedescription-f-sys.md#setvolumedescription-2) | Sets volume description. This API uses a promise to return the result. |
| [unmount](arkts-corefile-unmount-f-sys.md#unmount-1) | Unmounts a volume. This API uses an asynchronous callback to return the result. |
| [unmount](arkts-corefile-unmount-f-sys.md#unmount-2) | Unmounts a volume. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [Disk](arkts-corefile-disk-i-sys.md) | Disk information. |
| [FormatParams](arkts-corefile-formatparams-i-sys.md) | Format options for partition formatting. |
| [PartitionInfo](arkts-corefile-partitioninfo-i-sys.md) | Partition information. |
| [PartitionParams](arkts-corefile-partitionparams-i-sys.md) | Partition creation options. |
| [PartitionTableInfo](arkts-corefile-partitiontableinfo-i-sys.md) | Partition table information. |
| [Volume](arkts-corefile-volume-i-sys.md) | Get All Volumes. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DiskType](arkts-corefile-disktype-e-sys.md) | Disk type. |
<!--DelEnd-->

