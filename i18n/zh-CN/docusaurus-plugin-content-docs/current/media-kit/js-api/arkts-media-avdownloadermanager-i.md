# AVDownloaderManager

Definition of the Offline Download Management Interface

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Media.Core

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## addAVDownloadTask

```TypeScript
addAVDownloadTask(source: MediaSource): string
```

Create a download task based on the media description.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| source | MediaSource | 是 | Media description, including at least the resource URL.  Value constraint:The value cannot be null. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | ID of the offline download task that is successfully added. |

## allowsCellularAccess

```TypeScript
allowsCellularAccess(value: boolean): void
```

Set the network environment for the download. By default, the download is performed only in the Wi-Fi environment.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | If is set to true, the download can be performed in any network environment,  Otherwise, the download is performed only in the free Wi-Fi network environment. |

## getDownloadTasks

```TypeScript
getDownloadTasks(): Array<string>
```

Obtains all offline download tasks in the Task Manager. Ended download tasks are automatically cleared.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | If a task exists in the task manager, the taskID array is returned. Otherwise null. |

## getTaskCacheDirectory

```TypeScript
getTaskCacheDirectory(taskId: string): string
```

Obtains the offline download cache directory of a specified task.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| taskId | string | 是 | ID of a task whose download cache directory is queried. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Return the accessible path of the offline download task on the disk. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400108 | If the specified ID is not in the manager, an error is returned. |

## getTaskProgress

```TypeScript
getTaskProgress(taskId: string): double
```

Remove a download task from the offline download manager

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| taskId | string | 是 | ID of the task for querying the progress. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Returns the approximate ratio of the download progress of a specified task.  Value range: [0.0-1.0)  If the returned value range is -1, the resource size is unknown. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400108 | If the specified ID is not in the manager, an error is returned. |

## getTaskStatus

```TypeScript
getTaskStatus(taskId: string): AVDownloadTaskState
```

Obtains the status of a specified offline download task. For details, see #AVDownloadTaskState.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| taskId | string | 是 | ID of a task whose status is queried. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AVDownloadTaskState | Returns the task status of a specified task. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400108 | If the specified ID is not in the manager, an error is returned. |

## offProgressChange

```TypeScript
offProgressChange(callback?: OnAVDownloadProgressChangeHandle): void
```

Deregisters a specified function's listening on task progress change events.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAVDownloadProgressChangeHandle | 否 |  |

## offStatusChange

```TypeScript
offStatusChange(callback?: OnAVDownloadTaskStateHandle): void
```

Deregisters a specified function's listening on task status change events.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAVDownloadTaskStateHandle | 否 |  |

## onProgressChange

```TypeScript
onProgressChange(callback: OnAVDownloadProgressChangeHandle): void
```

Registers a function to listen to the progress change value of an offline download task. The progress change of the offline download task exceeds 1% compared with that of the last time. The event is triggered after the interval exceeds 500 ms.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAVDownloadProgressChangeHandle | 是 | Prototype of the function called by the event.  The first parameter indicates the offline download task ID.  The second parameter indicates the progress of an offline download task.  The progress value ranges from 0.0 to 1.0,  If the value is -1, the size of the resource is unknown. |

## onStatusChange

```TypeScript
onStatusChange(callback: OnAVDownloadTaskStateHandle): void
```

Registering a Function for Listening on Status Changes of Offline Download Tasks

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAVDownloadTaskStateHandle | 是 | Prototype of the function invoked by the event.  The first parameter indicates the ID of the task whose status changes.  The second parameter indicates the new status of the task switchover. |

## pauseDownloadTask

```TypeScript
pauseDownloadTask(taskId?: string): void
```

Suspending the download of a specified task

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| taskId | string | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400108 | If the specified ID is not in the offline download task manager. |
| 5400102 | Operation not allowed. |

## release

```TypeScript
release(): void
```

Release resources used for AVDownloaderManager.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

## removeDownloadTask

```TypeScript
removeDownloadTask(taskId?: string): void
```

Remove a download task from the offline download manager

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| taskId | string | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400108 | If the specified ID is not in the offline download task manager. |

## resumeDownloadTask

```TypeScript
resumeDownloadTask(taskId?: string): void
```

Resuming Offline download of a Specified Task

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| taskId | string | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400108 | If the specified ID is not in the offline download task manager. |
| 5400102 | Operation not allowed. |

## setRequestTimeout

```TypeScript
setRequestTimeout(expired: int): void
```

Sets the network timeout interval for HTTP requests. If the timeout interval is exceeded, the download fails.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| expired | int | 是 | Timeout duration, in ms. If is not set, the default timeout duration is used.  The value should be an interager.  Description  If the value is less than 0, there is no timeout duration.. |

