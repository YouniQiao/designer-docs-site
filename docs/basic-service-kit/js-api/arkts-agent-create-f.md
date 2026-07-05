# create

## create

```TypeScript
function create(context: BaseContext, config: Config, callback: AsyncCallback<Task>): void
```

创建需要上传或下载的任务，并将其排入队列。支持HTTP/HTTPS协议，使用callback异步回调。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 10

**Required permissions:** 

 ohos.permission.INTERNET

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | BaseContext | Yes | 基于应用程序的上下文。 |
| config | Config | Yes | 上传/下载任务的配置信息。 |
| callback | AsyncCallback&lt;Task> | Yes | 回调函数。当创建上传或下载任务成功，err为undefined，data为获取到的Task对象；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 13400001 | Invalid file or file system error. |
| 13400003 | Task service ability error. |
| 21900004 | The application task queue is full. |
| 21900005 | Operation with wrong task mode. |

## create

```TypeScript
function create(context: BaseContext, config: Config): Promise<Task>
```

创建需要上传或下载的任务，并将其排入队列。支持HTTP/HTTPS协议，使用Promise异步回调。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 10

**Required permissions:** 

 ohos.permission.INTERNET

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | BaseContext | Yes | 基于应用程序的上下文。 |
| config | Config | Yes | 上传/下载任务的配置信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Task> | Promise对象。返回任务配置信息的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 13400001 | Invalid file or file system error. |
| 13400003 | Task service ability error. |
| 21900004 | The application task queue is full. |
| 21900005 | Operation with wrong task mode. |

