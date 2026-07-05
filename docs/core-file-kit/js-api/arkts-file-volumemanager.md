# @ohos.file.volumeManager

该模块提供卷设备、磁盘设备查询和管理的相关功能：包括查询卷设备信息，对卷设备的挂载卸载、对磁盘设备分区以及卷设备的格式化等功能。

**Since:** 9

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { volumeManager } from '@kit.CoreFileKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[format](arkts-volumemanager-format-f-sys.md#format-1) | 对指定卷设备进行格式化，使用callback异步回调。当前仅支持vfat和exfat两种文件系统类型的格式化，只有处于卸载状态的 卷设备可以进行格式化，格式化后卷设备的uuid、挂载路径和卷设备描述均会发生变化。 |
| <!--DelRow-->[format](arkts-volumemanager-format-f-sys.md#format-2) | 对指定卷设备进行格式化，使用Promise异步回调。当前仅支持vfat和exfat两种文件系统类型的格式化，只有处于卸载状态的 卷设备可以进行格式化，格式化后卷设备的uuid、挂载路径和卷设备描述均会发生变化。 |
| <!--DelRow-->[getAllVolumes](arkts-volumemanager-getallvolumes-f-sys.md#getAllVolumes-1) | 获取当前外置存储中所有卷设备信息，使用callback异步回调。 |
| <!--DelRow-->[getAllVolumes](arkts-volumemanager-getallvolumes-f-sys.md#getAllVolumes-2) | 获取当前外置存储中所有卷设备信息，使用Promise异步回调。 |
| <!--DelRow-->[getVolumeById](arkts-volumemanager-getvolumebyid-f-sys.md#getVolumeById-1) | 通过指定卷设备id获得卷设备信息，使用callback异步回调。 |
| <!--DelRow-->[getVolumeById](arkts-volumemanager-getvolumebyid-f-sys.md#getVolumeById-2) | 通过卷设备id获得指定卷设备信息，使用Promise异步回调。 |
| <!--DelRow-->[getVolumeByUuid](arkts-volumemanager-getvolumebyuuid-f-sys.md#getVolumeByUuid-1) | 通过卷设备uuid获得指定卷设备信息，使用callback异步回调。 |
| <!--DelRow-->[getVolumeByUuid](arkts-volumemanager-getvolumebyuuid-f-sys.md#getVolumeByUuid-2) | 通过卷设备uuid获得指定卷设备信息，使用Promise异步回调。 |
| <!--DelRow-->[mount](arkts-volumemanager-mount-f-sys.md#mount-1) | 挂载指定卷设备，使用callback异步回调。当前仅支持vfat、exfat以及ntfs三种文件系统的卷设备挂载。 |
| <!--DelRow-->[mount](arkts-volumemanager-mount-f-sys.md#mount-2) | 挂载指定卷设备，使用Promise异步回调。当前仅支持vfat、exfat以及ntfs三种文件系统的卷设备挂载。 |
| <!--DelRow-->[partition](arkts-volumemanager-partition-f-sys.md#partition-1) | 对磁盘进行分区，使用callback异步回调。当前仅支持将磁盘设备重新分区为一个分区，系统是支持读取多分区的磁盘设备。 不支持对光盘进行分区。 |
| <!--DelRow-->[partition](arkts-volumemanager-partition-f-sys.md#partition-2) | 对磁盘设备进行分区，使用Promise异步回调。当前仅支持将磁盘设备重新分区为一个分区，系统是支持读取多分区的磁盘设备。 不支持对光盘进行分区。 |
| <!--DelRow-->[setVolumeDescription](arkts-volumemanager-setvolumedescription-f-sys.md#setVolumeDescription-1) | 修改指定卷设备描述，使用callback异步回调。当前仅支持修改ntfs和exfat两种文件系统类型的设备描述， 只有处于卸载状态的卷设备可以修改设备描述。 |
| <!--DelRow-->[setVolumeDescription](arkts-volumemanager-setvolumedescription-f-sys.md#setVolumeDescription-2) | 修改指定卷设备描述，使用Promise异步回调。当前仅支持修改ntfs和exfat两种文件系统类型的设备描述， 只有处于卸载状态的卷设备可以修改设备描述。 |
| <!--DelRow-->[unmount](arkts-volumemanager-unmount-f-sys.md#unmount-1) | 卸载指定卷设备，使用callback异步回调。 |
| <!--DelRow-->[unmount](arkts-volumemanager-unmount-f-sys.md#unmount-2) | 卸载指定卷设备，使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[Volume](arkts-volumemanager-volume-i-sys.md) | 获取所有卷。 |

