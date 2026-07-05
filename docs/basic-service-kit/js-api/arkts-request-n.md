# request

request模块给应用提供上传下载文件、后台代理传输的基础功能。 - request暂不支持在Extension中调用。

**Since:** 6

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [agent](arkts-request-agent-n.md) | The request agent api. Supports "background" and "frontend" tasks as while. Though "background" and "frontend" here do not the same with process's concept. All tasks will be executed at request manager service and recorded. Background tasks is for concurrent transfer, such as caching videos for a later play. Frontend tasks is for instant transfer, such as submitting forms for a consumption bill. Background tasks use notification to tell user tasks' status information. Frontend tasks use callback to tell caller tasks' status information. Background has some automatically restore mechanism. Frontend tasks controlled by caller. Uses `multipart/form-data` in client request for upload. A `Content-Disposition: attachment; filename=<filename>` response from server leads to download. More details, please see the architecture documents of the request subsystem. Only front-end mode is supported in cross-platform scenarios. |

### Functions

| Name | Description |
| --- | --- |
| [download](arkts-request-download-f.md#download-1) | 创建并启动一个下载任务，使用callback异步回调。 |
| [download](arkts-request-download-f.md#download-2) | 创建并启动一个下载任务，使用Promise异步回调。 |
| [downloadFile](arkts-request-downloadfile-f.md#downloadFile-1) | 创建并启动一个下载任务，使用callback异步回调，支持HTTP协议。通过 [on('complete'|'pause'|'remove')](arkts-request-downloadtask-i.md#on) 可获取任务下载时的状态信息，包括任务完成、暂停或移除。通过 [on('fail')](arkts-request-downloadtask-i.md#on)可获取任务下载时的错误信息。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。 |
| [downloadFile](arkts-request-downloadfile-f.md#downloadFile-2) | 创建并启动一个下载任务，使用Promise异步回调，支持HTTP协议。通过 [on('complete'|'pause'|'remove')](arkts-request-downloadtask-i.md#on) 可以获取任务下载时的状态信息，包括任务完成、暂停或移除。通过 [on('fail')](arkts-request-downloadtask-i.md#on)可以获取任务下载时的错误信息。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。 |
| [upload](arkts-request-upload-f.md#upload-1) | 创建并启动一个上传任务，使用callback异步回调。 |
| [upload](arkts-request-upload-f.md#upload-2) | 创建并启动一个上传任务，使用Promise异步回调。 |
| [uploadFile](arkts-request-uploadfile-f.md#uploadFile-1) | 创建并启动一个上传任务，使用callback异步回调，支持HTTP协议。通过 [on('complete'|'fail')](arkts-request-uploadtask-i.md#on) 可获取任务上传时的成功信息或错误信息。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。 |
| [uploadFile](arkts-request-uploadfile-f.md#uploadFile-2) | 创建并启动一个上传任务，使用Promise异步回调，支持HTTP协议。通过 [on('complete'|'fail')](arkts-request-uploadtask-i.md#on) 可获取任务上传时的成功信息或错误信息。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。 |

### Interfaces

| Name | Description |
| --- | --- |
| [DownloadConfig](arkts-request-downloadconfig-i.md) | 下载任务的配置信息。 |
| [DownloadInfo](arkts-request-downloadinfo-i.md) | 下载任务信息，[getTaskInfo](arkts-request-downloadtask-i.md#getTaskInfo)接口的回调参数。 |
| [DownloadTask](arkts-request-downloadtask-i.md) | 下载任务，使用下列方法前，需要先获取DownloadTask对象，promise形式通过 [request.downloadFile](arkts-request-downloadfile-f.md#downloadFile-2)获取，callback形式通过 [request.downloadFile](arkts-request-downloadfile-f.md#downloadFile-1) 获取。 |
| [File](arkts-request-file-i.md) | [UploadConfig](arkts-request-uploadconfig-i.md#UploadConfig)中的文件列表。 |
| [RequestData](arkts-request-requestdata-i.md) | [UploadConfig](arkts-request-uploadconfig-i.md#UploadConfig)中的表单数据。 |
| [TaskState](arkts-request-taskstate-i.md) | 上传任务的任务信息，是 [on('complete' | 'fail')](arkts-request-uploadtask-i.md#on) 和 [off('complete' | 'fail')](arkts-request-uploadtask-i.md#off) 接口的回调参数。 |
| [UploadConfig](arkts-request-uploadconfig-i.md) | 上传任务的配置信息。 |
| [UploadTask](arkts-request-uploadtask-i.md) | 上传任务，使用下列方法前，需要先获取UploadTask对象，promise形式通过 [request.uploadFile](arkts-request-uploadfile-f.md#uploadFile-2)获取，callback形式通过 [request.uploadFile](arkts-request-uploadfile-f.md#uploadFile-1) 获取。 |

### Types

| Name | Description |
| --- | --- |
| [DownloadCompleteCallback](arkts-request-downloadcompletecallback-t.md) | The callback function for the download complete event. |
| [DownloadFailCallback](arkts-request-downloadfailcallback-t.md) | The callback function for the download fail event. <br>The value should be an integer. |
| [DownloadPauseCallback](arkts-request-downloadpausecallback-t.md) | The callback function for the download pause event. |
| [DownloadProgressCallback](arkts-request-downloadprogresscallback-t.md) | The callback function for the download progress event. |
| [DownloadRemoveCallback](arkts-request-downloadremovecallback-t.md) | The callback function for the download remove event. |
| [UploadHeaderReceiveCallback](arkts-request-uploadheaderreceivecallback-t.md) | The callback function for the HTTP Response Header event. |
| [UploadProgressCallback](arkts-request-uploadprogresscallback-t.md) | The callback function for the download progress event. |

### Constants

| Name | Description |
| --- | --- |
| [ERROR_CANNOT_RESUME](arkts-request-con.md#ERROR_CANNOT_RESUME) | 下载任务错误码：网络原因导致恢复下载失败。 |
| [ERROR_DEVICE_NOT_FOUND](arkts-request-con.md#ERROR_DEVICE_NOT_FOUND) | 下载任务错误码：找不到SD卡等存储设备。 |
| [ERROR_FILE_ALREADY_EXISTS](arkts-request-con.md#ERROR_FILE_ALREADY_EXISTS) | 下载任务错误码：要下载的文件已存在，下载会话无法覆盖现有文件。 |
| [ERROR_FILE_ERROR](arkts-request-con.md#ERROR_FILE_ERROR) | 下载任务错误码：文件操作失败。 |
| [ERROR_HTTP_DATA_ERROR](arkts-request-con.md#ERROR_HTTP_DATA_ERROR) | 下载任务错误码：HTTP传输失败。 |
| [ERROR_INSUFFICIENT_SPACE](arkts-request-con.md#ERROR_INSUFFICIENT_SPACE) | 下载任务错误码：存储空间不足。 |
| [ERROR_OFFLINE](arkts-request-con.md#ERROR_OFFLINE) | 下载任务错误码：网络未连接。 |
| [ERROR_TOO_MANY_REDIRECTS](arkts-request-con.md#ERROR_TOO_MANY_REDIRECTS) | 下载任务错误码：网络重定向过多导致的错误。 |
| [ERROR_UNHANDLED_HTTP_CODE](arkts-request-con.md#ERROR_UNHANDLED_HTTP_CODE) | 下载任务错误码：无法识别的HTTP代码。 |
| [ERROR_UNKNOWN](arkts-request-con.md#ERROR_UNKNOWN) | 下载任务错误码：未知错误。 例如：API version 12及以下版本，系统仅支持串行地尝试连接域名相关IP，不支持单个IP的连接时间控制。若DNS返回的首个IP被阻塞，可能会由于握手超时导致ERROR_UNKNOWN错误。 |
| [ERROR_UNSUPPORTED_NETWORK_TYPE](arkts-request-con.md#ERROR_UNSUPPORTED_NETWORK_TYPE) | 下载任务错误码：网络类型不匹配。 |
| [EXCEPTION_FILEIO](arkts-request-con.md#EXCEPTION_FILEIO) | 特有错误码：文件操作异常。 |
| [EXCEPTION_FILEPATH](arkts-request-con.md#EXCEPTION_FILEPATH) | 特有错误码：文件路径异常。 |
| [EXCEPTION_OTHERS](arkts-request-con.md#EXCEPTION_OTHERS) | 特有错误码：其他错误。 |
| [EXCEPTION_PARAMCHECK](arkts-request-con.md#EXCEPTION_PARAMCHECK) | 通用错误码：参数检查失败。 |
| [EXCEPTION_PERMISSION](arkts-request-con.md#EXCEPTION_PERMISSION) | 通用错误码：权限校验失败。 |
| [EXCEPTION_SERVICE](arkts-request-con.md#EXCEPTION_SERVICE) | 特有错误码：服务异常。 |
| [EXCEPTION_UNSUPPORTED](arkts-request-con.md#EXCEPTION_UNSUPPORTED) | 通用错误码：该设备不支持此API。 |
| [NETWORK_MOBILE](arkts-request-con.md#NETWORK_MOBILE) | 网络类型：使用蜂窝网络时允许下载的位标志。 |
| [NETWORK_WIFI](arkts-request-con.md#NETWORK_WIFI) | 网络类型：使用WLAN时允许下载的位标志。 |
| [PAUSED_BY_USER](arkts-request-con.md#PAUSED_BY_USER) | 下载任务暂停原因：用户暂停会话。 |
| [PAUSED_QUEUED_FOR_WIFI](arkts-request-con.md#PAUSED_QUEUED_FOR_WIFI) | 下载任务暂停原因：文件大小超过了使用蜂窝网络会话允许的最大值，下载被暂停并等待WLAN连接。 |
| [PAUSED_UNKNOWN](arkts-request-con.md#PAUSED_UNKNOWN) | 下载任务暂停原因：未知原因导致暂停下载。 |
| [PAUSED_WAITING_FOR_NETWORK](arkts-request-con.md#PAUSED_WAITING_FOR_NETWORK) | 下载任务暂停原因：网络问题导致下载暂停。 例如：网络断开。 |
| [PAUSED_WAITING_TO_RETRY](arkts-request-con.md#PAUSED_WAITING_TO_RETRY) | 下载任务暂停原因：网络错误导致下载会话将被重试。 |
| [SESSION_FAILED](arkts-request-con.md#SESSION_FAILED) | 下载任务状态码：下载会话已失败，将不会重试。 |
| [SESSION_PAUSED](arkts-request-con.md#SESSION_PAUSED) | 下载任务状态码：下载会话已暂停。 |
| [SESSION_PENDING](arkts-request-con.md#SESSION_PENDING) | 下载任务状态码：下载会话正在被调度中。 |
| [SESSION_RUNNING](arkts-request-con.md#SESSION_RUNNING) | 下载任务状态码：下载会话正在进行中。 |
| [SESSION_SUCCESSFUL](arkts-request-con.md#SESSION_SUCCESSFUL) | 下载任务状态码：下载会话已完成。 |

