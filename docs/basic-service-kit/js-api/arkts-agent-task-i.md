# Task

上传或下载任务。使用该方法前需要先获取Task对象，promise形式通过 [request.agent.create]request.agent.create(context: BaseContext, config: Config)获取， callback形式通过 [request.agent.create]request.agent.create(context: BaseContext, config: Config, callback: AsyncCallback<Task>)获取。 > **说明：** > > Task对象及其挂载回调函数会在调用remove方法后释放并被系统自动回收。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## off

```TypeScript
off(event: 'progress', callback?: (progress: Progress) => void): void
```

取消订阅任务进度事件。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'progress' | Yes | 取消订阅的事件类型。 - 取值为'progress'，表示任务进度。 |
| callback | (progress: Progress) => void | No | 回调函数，发生相关的事件时触发该回调方法。若无此参数，则取消订阅的所有进度回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 21900005 | task mode error. [since 10 - 10] |

## off

```TypeScript
off(event: 'completed', callback?: (progress: Progress) => void): void
```

取消订阅任务完成事件。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'completed' | Yes | 取消订阅的事件类型。 - 取值为'completed'，表示任务完成。 |
| callback | (progress: Progress) => void | No | 回调函数，发生相关的事件时触发该回调方法。若无此参数，则取消订阅的所有完成回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 21900005 | Operation with wrong task mode. [since 10 - 10] |

## off

```TypeScript
off(event: 'failed', callback?: (progress: Progress) => void): void
```

取消订阅任务失败事件。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'failed' | Yes | 取消订阅的事件类型。 - 取值为'failed'，表示任务失败。 |
| callback | (progress: Progress) => void | No | 回调函数，发生相关的事件时触发该回调方法。若无此参数，则取消订阅的所有失败回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 21900005 | Operation with wrong task mode. [since 10 - 10] |

## off

```TypeScript
off(event: 'pause', callback?: (progress: Progress) => void): void
```

取消订阅任务暂停事件。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 11

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'pause' | Yes | 取消订阅的事件类型。 - 取值为'pause'，表示任务暂停。 |
| callback | (progress: Progress) => void | No | 回调函数，发生相关的事件时触发该回调方法。若无此参数，则取消订阅的所有暂停回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

## off

```TypeScript
off(event: 'resume', callback?: (progress: Progress) => void): void
```

取消订阅任务恢复事件。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 11

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'resume' | Yes | 取消订阅的事件类型。 - 取值为'resume'，表示任务恢复。 |
| callback | (progress: Progress) => void | No | 回调函数，发生相关的事件时触发该回调方法。若无此参数，则取消订阅的所有恢复回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

## off

```TypeScript
off(event: 'remove', callback?: (progress: Progress) => void): void
```

取消订阅任务移除事件。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 11

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'remove' | Yes | 取消订阅的事件类型。 - 取值为'remove'，表示任务被移除。 |
| callback | (progress: Progress) => void | No | 回调函数，发生相关的事件时触发该回调方法。若无此参数，则取消订阅的所有移除回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

## off

```TypeScript
off(event: 'response', callback?: Callback<HttpResponse>): void
```

取消订阅任务响应事件。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'response' | Yes | 取消订阅的事件类型。 - 取值为'response'，表示任务响应。 |
| callback | Callback&lt;HttpResponse> | No | 需要取消订阅的回调函数。若无此参数，则取消订阅当前类型的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

## off

```TypeScript
off(event: 'faultOccur', callback?: Callback<Faults>): void
```

取消订阅任务失败原因相关的事件。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'faultOccur' | Yes | 订阅的事件类型。 - 取值为'faultOccur'，表示任务失败。 |
| callback | Callback&lt;Faults> | No | 需要取消订阅的回调函数。若无此参数，则默认取消订阅当前类型的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

## off

```TypeScript
off(event: 'wait', callback?: Callback<WaitingReason>): void
```

取消订阅任务等待原因相关的事件。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'wait' | Yes | 订阅的事件类型。 - 取值为'wait'，表示任务等待。 |
| callback | Callback&lt;WaitingReason> | No | 需要取消订阅的回调函数。若无此参数，则默认取消订阅当前类型的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

## offCompleted

```TypeScript
offCompleted(callback?: ProgressCallback): void
```

Disables the specified callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProgressCallback | No |  |

## offFailed

```TypeScript
offFailed(callback?: ProgressCallback): void
```

Disables the specified callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProgressCallback | No |  |

## offFaultOccur

```TypeScript
offFaultOccur(callback?: Callback<Faults>): void
```

Disables the 'faultOccur' callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Faults> | No |  |

## offPause

```TypeScript
offPause(callback?: ProgressCallback): void
```

Disables the specified callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProgressCallback | No |  |

## offProgress

```TypeScript
offProgress(callback?: ProgressCallback): void
```

Disables the specified callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProgressCallback | No |  |

## offRemove

```TypeScript
offRemove(callback?: ProgressCallback): void
```

Disables the specified callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProgressCallback | No |  |

## offResponse

```TypeScript
offResponse(callback?: Callback<HttpResponse>): void
```

Disables the response callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;HttpResponse> | No |  |

## offResume

```TypeScript
offResume(callback?: ProgressCallback): void
```

Disables the specified callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProgressCallback | No |  |

## offWait

```TypeScript
offWait(callback?: Callback<WaitingReason>): void
```

Disables the wait callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;WaitingReason> | No |  |

## on

```TypeScript
on(event: 'progress', callback: (progress: Progress) => void): void
```

订阅任务进度的事件，使用callback异步回调。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'progress' | Yes | 订阅的事件类型。 - 取值为'progress'，表示任务进度，任务进度有进展时触发该事件。 |
| callback | (progress: Progress) => void | Yes | 回调函数，发生相关的事件时触发该回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 21900005 | task mode error. [since 10 - 10] |

## on

```TypeScript
on(event: 'completed', callback: (progress: Progress) => void): void
```

订阅任务完成事件，使用callback异步回调。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'completed' | Yes | 订阅的事件类型。 - 取值为'completed'，表示任务完成，任务完成时触发该事件。 |
| callback | (progress: Progress) => void | Yes | 回调函数，发生相关的事件时触发该回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 21900005 | task mode error. [since 10 - 10] |

## on

```TypeScript
on(event: 'failed', callback: (progress: Progress) => void): void
```

订阅任务失败事件，使用callback异步回调。可通过调用 [request.agent.show]request.agent.show(id: string)查看错误原因 。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'failed' | Yes | 订阅的事件类型。 - 取值为'failed'，表示任务失败，任务失败时触发该事件。 |
| callback | (progress: Progress) => void | Yes | 回调函数，发生相关的事件时触发该回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 21900005 | Operation with wrong task mode. [since 10 - 10] |

## on

```TypeScript
on(event: 'pause', callback: (progress: Progress) => void): void
```

订阅任务暂停事件，使用callback异步回调。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 11

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'pause' | Yes | 订阅的事件类型。 - 取值为'pause'，表示任务已暂停，任务暂停时触发该事件。 |
| callback | (progress: Progress) => void | Yes | 回调函数，发生相关的事件时触发该回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

## on

```TypeScript
on(event: 'resume', callback: (progress: Progress) => void): void
```

订阅任务恢复事件，使用callback异步回调。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 11

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'resume' | Yes | 订阅的事件类型。 - 取值为'resume'，表示任务恢复，任务恢复时触发该事件。 |
| callback | (progress: Progress) => void | Yes | 回调函数，发生相关的事件时触发该回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

## on

```TypeScript
on(event: 'remove', callback: (progress: Progress) => void): void
```

订阅任务移除事件，使用callback异步回调。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 11

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'remove' | Yes | 订阅的事件类型。 - 取值为'remove'，表示任务被移除，任务移除时触发该事件。 |
| callback | (progress: Progress) => void | Yes | 回调函数，发生相关的事件时触发该回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

## on

```TypeScript
on(event: 'response', callback: Callback<HttpResponse>): void
```

订阅任务响应头，使用callback异步回调。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'response' | Yes | 订阅的事件类型。 - 取值为'response'，表示任务响应，请求接收到响应时触发该事件。 |
| callback | Callback&lt;HttpResponse> | Yes | 回调函数，发生相关的事件时触发该回调方法，返回任务响应头的数据结构。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

## on

```TypeScript
on(event: 'faultOccur', callback: Callback<Faults>): void
```

订阅任务失败原因，使用callback形式返回结果。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'faultOccur' | Yes | 订阅的事件类型。 - 取值为'faultOccur'，表示任务失败。 |
| callback | Callback&lt;Faults> | Yes | 发生相关的事件时触发该回调方法，返回任务失败的原因。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

## on

```TypeScript
on(event: 'wait', callback: Callback<WaitingReason>): void
```

订阅任务等待原因，使用callback形式返回结果。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'wait' | Yes | 订阅的事件类型。 - 取值为'wait'，表示任务等待。 |
| callback | Callback&lt;WaitingReason> | Yes | 发生相关的事件时触发该回调方法，返回任务等待的原因。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

## onCompleted

```TypeScript
onCompleted(callback: ProgressCallback): void
```

Enables the specified callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProgressCallback | Yes | callback function with a `Progress` argument. |

## onFailed

```TypeScript
onFailed(callback: ProgressCallback): void
```

Enables the specified callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProgressCallback | Yes | callback function with a `Progress` argument. |

## onFaultOccur

```TypeScript
onFaultOccur(callback: Callback<Faults>): void
```

Enables the 'faultOccur' callback. This callback is triggered when the task failed. The returned `Faults` will contain the reason why the task failed.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Faults> | Yes | callback function with a `Faults` argument. |

## onPause

```TypeScript
onPause(callback: ProgressCallback): void
```

Enables the specified callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProgressCallback | Yes | callback function with a `Progress` argument. |

## onProgress

```TypeScript
onProgress(callback: ProgressCallback): void
```

Enables the specified callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProgressCallback | Yes | callback function with a `Progress` argument. |

## onRemove

```TypeScript
onRemove(callback: ProgressCallback): void
```

Enables the specified callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProgressCallback | Yes | callback function with a `Progress` argument. |

## onResponse

```TypeScript
onResponse(callback: Callback<HttpResponse>): void
```

Enables the response callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;HttpResponse> | Yes | callback function with an `HttpResponse` argument. |

## onResume

```TypeScript
onResume(callback: ProgressCallback): void
```

Enables the specified callback.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProgressCallback | Yes | callback function with a `Progress` argument. |

## onWait

```TypeScript
onWait(callback: Callback<WaitingReason>): void
```

Enables the wait callback. This callback is triggered when the task changes from other states to the waiting state. The returned `WaitingReason` will contain the reason why the task enters waiting state.

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;WaitingReason> | Yes | callback function with an `WaitingReason` argument. |

## pause

```TypeScript
pause(callback: AsyncCallback<void>): void
```

暂停任务，可以暂停正在等待/正在运行/正在重试的任务，已暂停的任务可被 [resume]request.agent.Task.resume(callback: AsyncCallback<void>)恢复。使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当暂停任务成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13400003 | Task service ability error. |
| 21900005 | Operation with wrong task mode. [since 10 - 10] |
| 21900007 | Operation with wrong task state. |

## pause

```TypeScript
pause(): Promise<void>
```

暂停任务，可以暂停正在等待/正在运行/正在重试的任务，已暂停的任务可被 [resume]request.agent.Task.resume(callback: AsyncCallback<void>)恢复。使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13400003 | Task service ability error. |
| 21900005 | Operation with wrong task mode. [since 10 - 10] |
| 21900007 | Operation with wrong task state. |

## resume

```TypeScript
resume(callback: AsyncCallback<void>): void
```

重新启动任务，可以恢复被暂停的任务。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当重新启动任务成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 13400003 | Task service ability error. |
| 21900005 | Operation with wrong task mode. [since 10 - 10] |
| 21900007 | Operation with wrong task state. |

## resume

```TypeScript
resume(): Promise<void>
```

重新启动任务，可以恢复被暂停的任务。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.Request.FileTransferAgent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 13400003 | Task service ability error. |
| 21900005 | Operation with wrong task mode. [since 10 - 10] |
| 21900007 | Operation with wrong task state. |

## setMaxSpeed

```TypeScript
setMaxSpeed(speed: long): Promise<void>
```

设置任务每秒能传输的字节数上限。使用Promise异步回调。

**Since:** 18

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speed | long | Yes | 设置任务每秒能传输的字节数上限，单位为字节（B），最小值为16384字节，同时该值不得低于  [MinSpeed]request.agent.MinSpeed设置的最低速度。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 13400003 | Task service ability error. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

启动一个任务。使用callback异步回调。 以下状态的任务可以被启动： 1. 刚被request.agent.create接口创建的任务。 2. 使用request.agent.create接口创建的已经失败或者停止的下载任务。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 10

**Required permissions:** 

 ohos.permission.INTERNET

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当开启任务成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 13400003 | Task service ability error. |
| 21900007 | Operation with wrong task state. |

## start

```TypeScript
start(): Promise<void>
```

启动一个任务。使用Promise异步回调。 以下状态的任务可以被启动： 1. 刚被request.agent.create接口创建的任务。 2. 使用request.agent.create接口创建的已经失败或者停止的下载任务。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 10

**Required permissions:** 

 ohos.permission.INTERNET

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 13400003 | Task service ability error. |
| 21900007 | Operation with wrong task state. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

停止任务，可以停止正在运行/正在等待/正在重试的任务，已停止的任务可被 [start]request.agent.Task.start(callback: AsyncCallback<void>)恢复。使用callback异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当停止任务成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13400003 | Task service ability error. |
| 21900007 | Operation with wrong task state. |

## stop

```TypeScript
stop(): Promise<void>
```

停止任务，可以停止正在运行/正在等待/正在重试的任务，已停止的任务可被 [start]request.agent.Task.start(callback: AsyncCallback<void>)恢复。使用Promise异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13400003 | Task service ability error. |
| 21900007 | Operation with wrong task state. |

## config

```TypeScript
config: Config
```

任务的配置信息。

**Type:** Config

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## tid

```TypeScript
readonly tid: string
```

任务id，由系统自动生成且唯一。

**Type:** string

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

