# @ohos.file.storageStatistics

该模块提供空间查询相关的常用功能：包括对内外卡的空间查询、对应用分类数据统计的查询、对应用数据的查询等。

**Since:** 8

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

## Modules to Import

```TypeScript
import { storageStatistics } from '@kit.CoreFileKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[getAllExtBundleStats](arkts-storagestatistics-getallextbundlestats-f-sys.md#getAllExtBundleStats-1) | 获取指定用户下所有系统应用或系统服务的空间占用详情。使用Promise异步回调。 |
| <!--DelRow-->[getBundleStats](arkts-storagestatistics-getbundlestats-f-sys.md#getBundleStats-1) | 异步获取应用存储数据的空间大小（单位为Byte），以callback方式返回。 |
| <!--DelRow-->[getBundleStats](arkts-storagestatistics-getbundlestats-f-sys.md#getBundleStats-2) | 异步获取应用存储数据的空间大小（单位为Byte），以Promise方式返回。 |
| [getCurrentBundleInodes](arkts-storagestatistics-getcurrentbundleinodes-f.md#getCurrentBundleInodes-1) | 获取当前应用的inode占用量，使用Promise异步回调。 |
| [getCurrentBundleStats](arkts-storagestatistics-getcurrentbundlestats-f.md#getCurrentBundleStats-1) | 应用异步获取当前应用存储空间大小（单位为Byte），使用callback异步回调。 |
| [getCurrentBundleStats](arkts-storagestatistics-getcurrentbundlestats-f.md#getCurrentBundleStats-2) | 应用异步获取当前应用存储空间大小（单位为Byte），以Promise方式返回。 |
| <!--DelRow-->[getExtBundleStats](arkts-storagestatistics-getextbundlestats-f-sys.md#getExtBundleStats-1) | 获取指定用户、指定系统应用包名或系统服务名称的空间占用详情。使用Promise异步回调。 |
| [getFreeInodes](arkts-storagestatistics-getfreeinodes-f.md#getFreeInodes-1) | 获取文件系统的inode资源剩余量，仅支持查询系统数据分区。使用Promise异步回调。 |
| [getFreeSize](arkts-storagestatistics-getfreesize-f.md#getFreeSize-1) | 获取内置存储的可用空间大小（单位为Byte），以Promise方式返回。 |
| <!--DelRow-->[getFreeSize](arkts-storagestatistics-getfreesize-f-sys.md#getFreeSize-1) | 获取内置存储的可用空间大小（单位为Byte），以callback方式返回。 |
| <!--DelRow-->[getFreeSizeOfVolume](arkts-storagestatistics-getfreesizeofvolume-f-sys.md#getFreeSizeOfVolume-1) | 异步获取外置存储设备中指定卷设备的可用空间大小（单位为Byte），以callback方式返回。 |
| <!--DelRow-->[getFreeSizeOfVolume](arkts-storagestatistics-getfreesizeofvolume-f-sys.md#getFreeSizeOfVolume-2) | 异步获取外置存储设备中指定卷设备的可用空间大小（单位为Byte），以Promise方式返回。 |
| <!--DelRow-->[getFreeSizeSync](arkts-storagestatistics-getfreesizesync-f-sys.md#getFreeSizeSync-1) | 同步获取内置存储的可用空间大小（单位为Byte）。 |
| <!--DelRow-->[getSystemDataSize](arkts-storagestatistics-getsystemdatasize-f-sys.md#getSystemDataSize-1) | 获取系统数据的总空间大小，使用Promise异步回调。 |
| <!--DelRow-->[getSystemSize](arkts-storagestatistics-getsystemsize-f-sys.md#getSystemSize-1) | 异步获取系统数据的空间大小（单位为Byte），以callback方式返回。 |
| <!--DelRow-->[getSystemSize](arkts-storagestatistics-getsystemsize-f-sys.md#getSystemSize-2) | 异步获取系统数据的空间大小（单位为Byte），以Promise方式返回。 |
| [getTotalInodes](arkts-storagestatistics-gettotalinodes-f.md#getTotalInodes-1) | 获取文件系统的inode资源总量，仅支持查询系统数据分区。使用Promise异步回调。 |
| [getTotalSize](arkts-storagestatistics-gettotalsize-f.md#getTotalSize-1) | 获取内置存储的总空间大小（单位为Byte），以Promise方式返回。 |
| <!--DelRow-->[getTotalSize](arkts-storagestatistics-gettotalsize-f-sys.md#getTotalSize-1) | 获取内置存储的总空间大小（单位为Byte），以callback方式返回。 |
| <!--DelRow-->[getTotalSizeOfVolume](arkts-storagestatistics-gettotalsizeofvolume-f-sys.md#getTotalSizeOfVolume-1) | 异步获取外置存储设备中指定卷设备的总空间大小（单位为Byte），以callback方式返回。 |
| <!--DelRow-->[getTotalSizeOfVolume](arkts-storagestatistics-gettotalsizeofvolume-f-sys.md#getTotalSizeOfVolume-2) | 异步获取外置存储设备中指定卷设备的总空间大小（单位为Byte），以Promise方式返回。 |
| <!--DelRow-->[getTotalSizeSync](arkts-storagestatistics-gettotalsizesync-f-sys.md#getTotalSizeSync-1) | 同步获取内置存储的总空间大小（单位为Byte）。 |
| <!--DelRow-->[getUserStorageStats](arkts-storagestatistics-getuserstoragestats-f-sys.md#getUserStorageStats-1) | 异步获取当前用户各类别存储空间大小（单位为Byte），以Promise方式返回。 |
| <!--DelRow-->[getUserStorageStats](arkts-storagestatistics-getuserstoragestats-f-sys.md#getUserStorageStats-2) | 异步获取当前用户各类别存储空间大小（单位为Byte），以callback方式返回。 |
| <!--DelRow-->[getUserStorageStats](arkts-storagestatistics-getuserstoragestats-f-sys.md#getUserStorageStats-3) | 异步获取指定用户各类别存储空间大小（单位为Byte），以Promise方式返回。 |
| <!--DelRow-->[getUserStorageStats](arkts-storagestatistics-getuserstoragestats-f-sys.md#getUserStorageStats-4) | 异步获取指定用户各类别存储空间大小（单位为Byte），以callback方式返回。 |
| <!--DelRow-->[listUserdataDirInfo](arkts-storagestatistics-listuserdatadirinfo-f-sys.md#listUserdataDirInfo-1) | 查询用户设备中/data目录下的空间占用详情，使用Promise异步回调。 |
| <!--DelRow-->[setExtBundleStats](arkts-storagestatistics-setextbundlestats-f-sys.md#setExtBundleStats-1) | 系统应用或系统服务上报自身的空间占用信息。使用Promise异步回调。 > **说明**： > > 入参stats中的flag为false时，businessName必须为某个应用的包名。 |

### Interfaces

| Name | Description |
| --- | --- |
| [BundleStats](arkts-storagestatistics-bundlestats-i.md) | 获取捆绑包统计信息。 |
| <!--DelRow-->[ExtBundleStats](arkts-storagestatistics-extbundlestats-i-sys.md) | 系统应用或系统服务的空间占用详情。 |
| <!--DelRow-->[StorageStats](arkts-storagestatistics-storagestats-i-sys.md) |  |
| <!--DelRow-->[UserdataDirInfo](arkts-storagestatistics-userdatadirinfo-i-sys.md) | 用户设备中/data目录下的空间占用详情。 |

