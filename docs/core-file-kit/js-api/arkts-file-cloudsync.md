# @ohos.file.cloudSync

该模块向应用提供端云同步能力，包括启动/停止端云同步以及启动/停止原图下载功能。

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## Modules to Import

```TypeScript
import { cloudSync } from '@kit.CoreFileKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getCoreFileSyncState](arkts-cloudsync-getcorefilesyncstate-f.md#getCoreFileSyncState-1) | 同步方法获取云盘文件同步上行状态。 |
| <!--DelRow-->[getFileSyncState](arkts-cloudsync-getfilesyncstate-f-sys.md#getFileSyncState-1) | 异步方法获取文件同步状态。使用Promise异步回调。 |
| <!--DelRow-->[getFileSyncState](arkts-cloudsync-getfilesyncstate-f-sys.md#getFileSyncState-2) | 异步方法获取文件同步状态。使用callback异步回调。 |
| <!--DelRow-->[getFileSyncState](arkts-cloudsync-getfilesyncstate-f-sys.md#getFileSyncState-3) | 获取文件同步状态。 |
| <!--DelRow-->[optimizeStorage](arkts-cloudsync-optimizestorage-f-sys.md#optimizeStorage-1) | 优化图库已同步云空间的本地资源，按照本地剩余空间执行自动老化策略。使用Promise异步回调。 |
| [registerChange](arkts-cloudsync-registerchange-f.md#registerChange-1) | 订阅监听指定文件的变化通知。callback返回更改的数据。 |
| <!--DelRow-->[startOptimizeSpace](arkts-cloudsync-startoptimizespace-f-sys.md#startOptimizeSpace-1) | 优化图库已同步云空间的本地资源，执行立即优化空间策略，对老化天数前未访问的本地图片/视频进行优化。使用Promise异步回调。callback返回优化进度。 startOptimizeSpace的使用和stopOptimizeSpace方法调用一一对应，重复开启将返回其他任务正在执行的错误信息（22400006）。 |
| <!--DelRow-->[stopOptimizeSpace](arkts-cloudsync-stopoptimizespace-f-sys.md#stopOptimizeSpace-1) | 同步方法停止图库云图资源空间优化，和startOptimizeSpace配对使用。 |
| [unregisterChange](arkts-cloudsync-unregisterchange-f.md#unregisterChange-1) | 取消订阅监听指定文件的变化通知。 |

### Classes

| Name | Description |
| --- | --- |
| [CloudFileCache](arkts-cloudsync-cloudfilecache-c.md) | 云盘文件缓存对象，用来支撑文件管理应用原文件下载流程。 |
| <!--DelRow-->[Download](arkts-cloudsync-download-c-sys.md) | 云文件下载对象，用来支撑图库应用原图文件下载流程。在使用前，需要先创建Download实例。 |
| [FileSync](arkts-cloudsync-filesync-c.md) | 云盘同步对象，用于支撑文件管理器应用完成云盘文件的端云同步流程。在使用前，需要先创建FileSync实例。 |
| [FileVersion](arkts-cloudsync-fileversion-c.md) | 端云文件版本管理类。支持对端云文件的历史版本进行管理，提供获取文件历史版本信息列表的能力，通过历史版本信息，可将历史版本下载到本地；并提供历史版本文件替换当前本地文件的能力，针对版本冲突，提供查询冲突标志，解除冲突标志的能力。 |
| <!--DelRow-->[GallerySync](arkts-cloudsync-gallerysync-c-sys.md) | 云图同步对象，用来支撑图库应用媒体资源端云同步流程。在使用前，需要先创建GallerySync实例。 |
| [MultiDownloadProgress](arkts-cloudsync-multidownloadprogress-c.md) | 云文件批量缓存的进度信息。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ChangeData](arkts-cloudsync-changedata-i.md) | 定义变更数据。 |
| [DownloadProgress](arkts-cloudsync-downloadprogress-i.md) | 云文件下载过程。 |
| [FailedFileInfo](arkts-cloudsync-failedfileinfo-i.md) | 云文件批量缓存失败列表及失败原因。 |
| [HistoryVersion](arkts-cloudsync-historyversion-i.md) | 端云文件历史版本信息，调用端云文件版本管理类[FileVersion]{@link cloudSync.FileVersion}的 [gethistoryversionlist]{@link cloudSync.FileVersion.getHistoryVersionList}方法时，历史版本列表中的属性。 |
| <!--DelRow-->[OptimizeSpaceParam](arkts-cloudsync-optimizespaceparam-i-sys.md) | 立即优化空间设置参数，设置优化总空间和老化天数。 |
| <!--DelRow-->[OptimizeSpaceProgress](arkts-cloudsync-optimizespaceprogress-i-sys.md) | 立即优化空间状态和当前进度。 |
| [SyncProgress](arkts-cloudsync-syncprogress-i.md) | 端云同步过程。 |
| <!--DelRow-->[UploadProgress](arkts-cloudsync-uploadprogress-i-sys.md) | 文件上传进度信息。 |
| [VersionDownloadProgress](arkts-cloudsync-versiondownloadprogress-i.md) | 历史版本文件下载状态和进度信息，调用端云文件版本管理类[FileVersion]{@link cloudSync.FileVersion}的 [downloadHistoryVersion]{@link cloudSync.FileVersion.downloadHistoryVersion}方法时，回调函数的入参类型。 |

### Enums

| Name | Description |
| --- | --- |
| [DownloadErrorType](arkts-cloudsync-downloaderrortype-e.md) | 端云下载错误类型，为枚举类型。 |
| [DownloadFileType](arkts-cloudsync-downloadfiletype-e.md) | 云盘缓存文件类型的枚举。 |
| [ErrorType](arkts-cloudsync-errortype-e.md) | 端云同步失败类型，为枚举类型。 - 当前阶段，同步过程中，当开启无限量使用移动数据网络，移动数据网络和WIFI均不可用时，才会返回NETWORK_UNAVAILABLE；开启无限量使用移动数据网络，若有一种类型网络可用，则能正常同步。 - 同步过程中，非充电场景下，电量低于10%，完成当前批上行同步后停止同步，返回低电量； - 触发同步时，非充电场景下，若电量低于10%，则不允许同步 - 上行时，若云端空间不足，则文件上行失败，云端无该文件记录。 |
| [FileState](arkts-cloudsync-filestate-e.md) | 端云文件同步状态，为枚举类型。 |
| <!--DelRow-->[FileSyncState](arkts-cloudsync-filesyncstate-e-sys.md) | 端云文件同步状态，为枚举类型。 |
| [NotifyType](arkts-cloudsync-notifytype-e.md) | 数据变更通知类型。 |
| <!--DelRow-->[OptimizeState](arkts-cloudsync-optimizestate-e-sys.md) | 优化空间状态，为枚举类型。 |
| [State](arkts-cloudsync-state-e.md) | 云文件下载状态，为枚举类型。 |
| [SyncState](arkts-cloudsync-syncstate-e.md) | 端云同步状态，为枚举类型。 > **说明：** > > 以下同步状态发生变更时，如果应用注册了同步过程事件监听，则通过回调通知应用。 |
| <!--DelRow-->[UploadState](arkts-cloudsync-uploadstate-e-sys.md) | 文件上传状态的枚举。 |

