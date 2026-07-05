# @ohos.file.cloudSyncManager

该模块向云盘管理应用提供端云同步管理能力：包括全量下载的状态和停止原因，以及应用本地和云端文件数量信息。

**起始版本：** 10

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## 导入模块

```TypeScript
import { cloudSyncManager } from '@kit.CoreFileKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[changeAppCloudSwitch](arkts-cloudsyncmanager-changeappcloudswitch-f-sys.md#changeAppCloudSwitch-1) | 异步方法修改应用的端云文件同步开关。使用Promise异步回调。 |
| <!--DelRow-->[changeAppCloudSwitch](arkts-cloudsyncmanager-changeappcloudswitch-f-sys.md#changeAppCloudSwitch-2) | 异步方法修改应用的端云文件同步开关。使用callback异步回调。 |
| <!--DelRow-->[clean](arkts-cloudsyncmanager-clean-f-sys.md#clean-1) | 异步方法清理本地云相关数据。使用Promise异步回调。 |
| <!--DelRow-->[clean](arkts-cloudsyncmanager-clean-f-sys.md#clean-2) | 异步方法清理本地云相关数据。使用callback异步回调。 |
| <!--DelRow-->[disableCloud](arkts-cloudsyncmanager-disablecloud-f-sys.md#disableCloud-1) | 异步方法去使能端云协同能力。使用Promise异步回调。 |
| <!--DelRow-->[disableCloud](arkts-cloudsyncmanager-disablecloud-f-sys.md#disableCloud-2) | 异步方法去使能端云协同能力。使用callback异步回调。 |
| <!--DelRow-->[enableCloud](arkts-cloudsyncmanager-enablecloud-f-sys.md#enableCloud-1) | 异步方法使能端云协同能力。使用Promise异步回调。 |
| <!--DelRow-->[enableCloud](arkts-cloudsyncmanager-enablecloud-f-sys.md#enableCloud-2) | 异步方法使能端云协同能力。使用callback异步回调。 |
| <!--DelRow-->[getBundlesLocalFilePresentStatus](arkts-cloudsyncmanager-getbundleslocalfilepresentstatus-f-sys.md#getBundlesLocalFilePresentStatus-1) | 对接入云盘的应用，检测其在云盘存储空间内是否存在未上云文件，支持同时查询多个应用。使用Promise异步回调。 |
| <!--DelRow-->[getDowngradeDownloadTaskState](arkts-cloudsyncmanager-getdowngradedownloadtaskstate-f-sys.md#getDowngradeDownloadTaskState-1) | 查询接入云盘的应用的全量下载任务状态。使用Promise异步回调。 由于返回的DownloadProgress对象中不包含包名信息，因此在批量查询多个应用时，调用方需自行记录应用包名。 |
| <!--DelRow-->[notifyDataChange](arkts-cloudsyncmanager-notifydatachange-f-sys.md#notifyDataChange-1) | 通知端云服务指定账号下的特定应用云数据已发生变更。使用Promise异步回调。 |
| <!--DelRow-->[notifyDataChange](arkts-cloudsyncmanager-notifydatachange-f-sys.md#notifyDataChange-2) | 通知端云服务指定账号下的特定应用云数据已发生变更。使用callback异步回调。 |
| <!--DelRow-->[notifyDataChange](arkts-cloudsyncmanager-notifydatachange-f-sys.md#notifyDataChange-3) | 通知端云服务应用指定用户的云数据变更信息。使用Promise异步回调。 |
| <!--DelRow-->[notifyDataChange](arkts-cloudsyncmanager-notifydatachange-f-sys.md#notifyDataChange-4) | 通知端云服务应用指定用户的云数据变更信息。使用callback异步回调。 |

### 类

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DowngradeDownload](arkts-cloudsyncmanager-downgradedownload-c-sys.md) | 全量下载：为云盘管理应用提供集中下载云端数据的能力。 云盘全量下载对象，用于支撑云盘管理应用完成云盘文件的全量下载流程。 |
| [DownloadProgress](arkts-cloudsyncmanager-downloadprogress-c.md) | 全量下载任务的进度信息。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CloudFileInfo](arkts-cloudsyncmanager-cloudfileinfo-i.md) | 应用本地和云端文件个数以及大小信息。 |
| <!--DelRow-->[ExtraData](arkts-cloudsyncmanager-extradata-i-sys.md) | 云端数据变更信息。 |
| <!--DelRow-->[LocalFilePresentStatus](arkts-cloudsyncmanager-localfilepresentstatus-i-sys.md) | 检测结果对象，包含应用包名及其在云盘存储空间内是否存在未上云文件的状态信息。 |
| <!--DelRow-->[TransferProgress](arkts-cloudsyncmanager-transferprogress-i-sys.md) | 搬迁任务的进度信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[Action](arkts-cloudsyncmanager-action-e-sys.md) | 清理本地云相关数据时的Action，为枚举类型。 |
| [DownloadState](arkts-cloudsyncmanager-downloadstate-e.md) | 全量下载任务状态的枚举。 |
| [DownloadStopReason](arkts-cloudsyncmanager-downloadstopreason-e.md) | 全量下载停止原因的枚举，默认值为NO_STOP。 |
| <!--DelRow-->[TransferState](arkts-cloudsyncmanager-transferstate-e-sys.md) | 搬迁任务状态的枚举。 |
| <!--DelRow-->[TransferStopReason](arkts-cloudsyncmanager-transferstopreason-e-sys.md) | 搬迁停止原因的枚举。 |

