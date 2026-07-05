# DownloadTask

下载任务，使用下列方法前，需要先获取DownloadTask对象，promise形式通过 [request.downloadFile]request.downloadFile(context: BaseContext, config: DownloadConfig)获取，callback形式通过 [request.downloadFile]request.downloadFile(context: BaseContext, config: DownloadConfig, callback: AsyncCallback<DownloadTask>) 获取。

**Since:** 6

**System capability:** SystemCapability.MiscServices.Download

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## delete

```TypeScript
delete(callback: AsyncCallback<boolean>): void
```

移除下载的任务，使用callback异步回调。 > **说明：** > > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示移除下载任务成功；返回false表示移除下载任务失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    downloadTask.delete((err: BusinessError, result: boolean) => {
      if (err) {
        console.error(`Failed to remove the download task. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('Succeeded in removing the download task.');
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## delete

```TypeScript
delete(): Promise<boolean>
```

移除下载的任务，使用Promise异步回调。 > **说明：** > > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示移除下载任务成功；返回false表示移除下载任务失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    data.delete().then((result: boolean) => {
      console.info('Succeeded in removing the download task.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to remove the download task. Code: ${err.code}, message: ${err.message}`);
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## getTaskInfo

```TypeScript
getTaskInfo(callback: AsyncCallback<DownloadInfo>): void
```

查询下载的任务，使用callback异步回调。 > **说明：** > > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DownloadInfo> | Yes | 回调函数。当查询下载任务操作成功，err为undefined，data为获取到的DownloadInfo对象；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    downloadTask.getTaskInfo((err: BusinessError, downloadInfo: request.DownloadInfo) => {
      if (err) {
        console.error(`Failed to query the download mimeType. Code: ${err.code}, message: ${err.message}`);
      } else {
        console.info('Succeeded in querying the download mimeType');
      }
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## getTaskInfo

```TypeScript
getTaskInfo(): Promise<DownloadInfo>
```

查询下载任务的信息，使用Promise异步回调。 > **说明：** > > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DownloadInfo> | Promise对象，返回DownloadInfo对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    downloadTask.getTaskInfo().then((downloadInfo: request.DownloadInfo) => {
      console.info('Succeeded in querying the download task')
    }).catch((err: BusinessError) => {
      console.error(`Failed to query the download task. Code: ${err.code}, message: ${err.message}`)
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
} 

```

## getTaskMimeType

```TypeScript
getTaskMimeType(callback: AsyncCallback<string>): void
```

查询下载任务的 MimeType（HTTP中表示资源的媒体类型），使用callback异步回调。 > **说明：** > > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。当查询下载任务MimeType成功，err为undefined，data为获取到的下载任务的MimeType的对象；否则为错误对  象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    downloadTask.getTaskMimeType((err: BusinessError, data: string) => {
      if (err) {
        console.error(`Failed to query the download mimeType. Code: ${err.code}, message: ${err.message}`);
      } else {
        console.info('Succeeded in querying the download mimeType');
      }
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## getTaskMimeType

```TypeScript
getTaskMimeType(): Promise<string>
```

查询下载的任务的MimeType(HTTP中表示资源的媒体类型)，使用Promise异步回调。 > **说明：** > > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。返回下载任务的MimeType。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    downloadTask.getTaskMimeType().then((data: string) => {
      console.info('Succeeded in querying the download MimeType');
    }).catch((err: BusinessError) => {
      console.error(`Failed to query the download MimeType. Code: ${err.code}, message: ${err.message}`)
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## off('progress')

```TypeScript
off(type: 'progress', callback?: (receivedSize: long, totalSize: long) => void): void
```

取消订阅下载任务进度事件。

**Since:** 6

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'progress' | Yes | 取消订阅的事件类型。 - 取值为'progress'，表示下载的进度信息。 |
| callback | (receivedSize: long, totalSize: long) => void | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    let progressCallback1 = (receivedSize: number, totalSize: number) => {
      console.info('Download delete progress notification.' + 'receivedSize:' + receivedSize + 'totalSize:' + totalSize);
    };
    let progressCallback2 = (receivedSize: number, totalSize: number) => {
      console.info('Download delete progress notification.' + 'receivedSize:' + receivedSize + 'totalSize:' + totalSize);
    };
    downloadTask.on('progress', progressCallback1);
    downloadTask.on('progress', progressCallback2);
    // Unsubscribe from progressCallback1.
    downloadTask.off('progress', progressCallback1);
    // Unsubscribe from all callbacks of download progress events.
    downloadTask.off('progress');
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## off('complete' | 'pause' | 'remove')

```TypeScript
off(type: 'complete' | 'pause' | 'remove', callback?: () => void): void
```

取消订阅下载任务相关的事件。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'pause' \| 'remove' | Yes | 取消订阅的事件类型。 - 取值为'complete'，表示下载任务完成。 - 取值为'pause'，表示下载任  务暂停。 - 取值为'remove'，表示下载任务移除。 |
| callback | () => void | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    let completeCallback1 = () => {
      console.info('Download delete complete notification.');
    };
    let completeCallback2 = () => {
      console.info('Download delete complete notification.');
    };
    downloadTask.on('complete', completeCallback1);
    downloadTask.on('complete', completeCallback2);
    // Unsubscribe from completeCallback1.
    downloadTask.off('complete', completeCallback1);
    // Unsubscribe from all callbacks of the download completion events.
    downloadTask.off('complete');

    let pauseCallback1 = () => {
      console.info('Download delete pause notification.');
    };
    let pauseCallback2 = () => {
      console.info('Download delete pause notification.');
    };
    downloadTask.on('pause', pauseCallback1);
    downloadTask.on('pause', pauseCallback2);
    // Unsubscribe from pauseCallback1.
    downloadTask.off('pause', pauseCallback1);
    // Unsubscribe from all callbacks of the download pause events.
    downloadTask.off('pause');

    let removeCallback1 = () => {
      console.info('Download delete remove notification.');
    };
    let removeCallback2 = () => {
      console.info('Download delete remove notification.');
    };
    downloadTask.on('remove', removeCallback1);
    downloadTask.on('remove', removeCallback2);
    // Unsubscribe from removeCallback1.
    downloadTask.off('remove', removeCallback1);
    // Unsubscribe from all callbacks of the download removal events.
    downloadTask.off('remove');
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}  

```

## off('complete' | 'pause' | 'remove')

```TypeScript
off(type: 'complete' | 'pause' | 'remove', callback?: () => void): void
```

取消订阅下载任务相关的事件。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'pause' \| 'remove' | Yes | 取消订阅的事件类型。 - 取值为'complete'，表示下载任务完成。 - 取值为'pause'，表示下载任  务暂停。 - 取值为'remove'，表示下载任务移除。 |
| callback | () => void | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    let completeCallback1 = () => {
      console.info('Download delete complete notification.');
    };
    let completeCallback2 = () => {
      console.info('Download delete complete notification.');
    };
    downloadTask.on('complete', completeCallback1);
    downloadTask.on('complete', completeCallback2);
    // Unsubscribe from completeCallback1.
    downloadTask.off('complete', completeCallback1);
    // Unsubscribe from all callbacks of the download completion events.
    downloadTask.off('complete');

    let pauseCallback1 = () => {
      console.info('Download delete pause notification.');
    };
    let pauseCallback2 = () => {
      console.info('Download delete pause notification.');
    };
    downloadTask.on('pause', pauseCallback1);
    downloadTask.on('pause', pauseCallback2);
    // Unsubscribe from pauseCallback1.
    downloadTask.off('pause', pauseCallback1);
    // Unsubscribe from all callbacks of the download pause events.
    downloadTask.off('pause');

    let removeCallback1 = () => {
      console.info('Download delete remove notification.');
    };
    let removeCallback2 = () => {
      console.info('Download delete remove notification.');
    };
    downloadTask.on('remove', removeCallback1);
    downloadTask.on('remove', removeCallback2);
    // Unsubscribe from removeCallback1.
    downloadTask.off('remove', removeCallback1);
    // Unsubscribe from all callbacks of the download removal events.
    downloadTask.off('remove');
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}  

```

## off('complete' | 'pause' | 'remove')

```TypeScript
off(type: 'complete' | 'pause' | 'remove', callback?: () => void): void
```

取消订阅下载任务相关的事件。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'pause' \| 'remove' | Yes | 取消订阅的事件类型。 - 取值为'complete'，表示下载任务完成。 - 取值为'pause'，表示下载任  务暂停。 - 取值为'remove'，表示下载任务移除。 |
| callback | () => void | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    let completeCallback1 = () => {
      console.info('Download delete complete notification.');
    };
    let completeCallback2 = () => {
      console.info('Download delete complete notification.');
    };
    downloadTask.on('complete', completeCallback1);
    downloadTask.on('complete', completeCallback2);
    // Unsubscribe from completeCallback1.
    downloadTask.off('complete', completeCallback1);
    // Unsubscribe from all callbacks of the download completion events.
    downloadTask.off('complete');

    let pauseCallback1 = () => {
      console.info('Download delete pause notification.');
    };
    let pauseCallback2 = () => {
      console.info('Download delete pause notification.');
    };
    downloadTask.on('pause', pauseCallback1);
    downloadTask.on('pause', pauseCallback2);
    // Unsubscribe from pauseCallback1.
    downloadTask.off('pause', pauseCallback1);
    // Unsubscribe from all callbacks of the download pause events.
    downloadTask.off('pause');

    let removeCallback1 = () => {
      console.info('Download delete remove notification.');
    };
    let removeCallback2 = () => {
      console.info('Download delete remove notification.');
    };
    downloadTask.on('remove', removeCallback1);
    downloadTask.on('remove', removeCallback2);
    // Unsubscribe from removeCallback1.
    downloadTask.off('remove', removeCallback1);
    // Unsubscribe from all callbacks of the download removal events.
    downloadTask.off('remove');
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}  

```

## off('fail')

```TypeScript
off(type: 'fail', callback?: (err: int) => void): void
```

取消订阅下载任务失败事件。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'fail' | Yes | 取消订阅的事件类型。 - 取值为'fail'，表示下载失败。 |
| callback | (err: int) => void | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    let failCallback1 = (err: number) => {
      console.error(`Failed to download the task. Code: ${err}`);
    };
    let failCallback2 = (err: number) => {
      console.error(`Failed to download the task. Code: ${err}`);
    };
    downloadTask.on('fail', failCallback1);
    downloadTask.on('fail', failCallback2);
    // Unsubscribe from failCallback1.
    downloadTask.off('fail', failCallback1);
    // Unsubscribe from all callbacks of the download failure events.
    downloadTask.off('fail');
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## offComplete

```TypeScript
offComplete(callback?: DownloadCompleteCallback): void
```

Called when the current download session complete.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadCompleteCallback | No |  |

## offFail

```TypeScript
offFail(callback?: DownloadFailCallback): void
```

Called when the current download session fails.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadFailCallback | No |  |

## offPause

```TypeScript
offPause(callback?: DownloadPauseCallback): void
```

Called when the current download session pause.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadPauseCallback | No |  |

## offProgress

```TypeScript
offProgress(callback?: DownloadProgressCallback): void
```

Called when the current download session is in process.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadProgressCallback | No |  |

## offRemove

```TypeScript
offRemove(callback?: DownloadRemoveCallback): void
```

Called when the current download session remove.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadRemoveCallback | No |  |

## on('progress')

```TypeScript
on(type: 'progress', callback: (receivedSize: long, totalSize: long) => void): void
```

订阅下载任务进度事件，使用callback异步回调。 > **说明：** > > 应用处于后台时，为满足功耗性能要求，不支持调用此接口进行回调。

**Since:** 6

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'progress' | Yes | 订阅的事件类型。 - 取值为'progress'，表示下载的进度信息，当任务进度有进展时触发该事件。 |
| callback | (receivedSize: long, totalSize: long) => void | Yes | 下载任务进度的回调函数，返回已上传文件大小和上传文件大小总和，单位为字节（B）。在下载过程中，若服务器使用chunk方式传输导致无法从请求头中获取文件总大小时，  totalSize为 -1。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    let progressCallback = (receivedSize: number, totalSize: number) => {
      console.info("download receivedSize:" + receivedSize + " totalSize:" + totalSize);
    };
    downloadTask.on('progress', progressCallback);
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## on('complete' | 'pause' | 'remove')

```TypeScript
on(type: 'complete' | 'pause' | 'remove', callback: () => void): void
```

订阅下载任务相关的事件，使用callback异步回调。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'pause' \| 'remove' | Yes | 订阅的事件类型。 - 取值为'complete'，表示下载任务完成，任务完成时触发该事件。 - 取值为'  pause'，表示下载任务暂停，任务暂停时触发该事件。 - 取值为'remove'，表示下载任务移除，任务移除时触发该事件。 |
| callback | () => void | Yes | 下载任务相关的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    let completeCallback = () => {
      console.info('Download task completed.');
    };
    downloadTask.on('complete', completeCallback);

    let pauseCallback = () => {
      console.info('Download task pause.');
    };
    downloadTask.on('pause', pauseCallback);

    let removeCallback = () => {
      console.info('Download task remove.');
    };
    downloadTask.on('remove', removeCallback);
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## on('complete' | 'pause' | 'remove')

```TypeScript
on(type: 'complete' | 'pause' | 'remove', callback: () => void): void
```

订阅下载任务相关的事件，使用callback异步回调。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'pause' \| 'remove' | Yes | 订阅的事件类型。 - 取值为'complete'，表示下载任务完成，任务完成时触发该事件。 - 取值为'  pause'，表示下载任务暂停，任务暂停时触发该事件。 - 取值为'remove'，表示下载任务移除，任务移除时触发该事件。 |
| callback | () => void | Yes | 下载任务相关的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    let completeCallback = () => {
      console.info('Download task completed.');
    };
    downloadTask.on('complete', completeCallback);

    let pauseCallback = () => {
      console.info('Download task pause.');
    };
    downloadTask.on('pause', pauseCallback);

    let removeCallback = () => {
      console.info('Download task remove.');
    };
    downloadTask.on('remove', removeCallback);
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## on('complete' | 'pause' | 'remove')

```TypeScript
on(type: 'complete' | 'pause' | 'remove', callback: () => void): void
```

订阅下载任务相关的事件，使用callback异步回调。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'pause' \| 'remove' | Yes | 订阅的事件类型。 - 取值为'complete'，表示下载任务完成，任务完成时触发该事件。 - 取值为'  pause'，表示下载任务暂停，任务暂停时触发该事件。 - 取值为'remove'，表示下载任务移除，任务移除时触发该事件。 |
| callback | () => void | Yes | 下载任务相关的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    let completeCallback = () => {
      console.info('Download task completed.');
    };
    downloadTask.on('complete', completeCallback);

    let pauseCallback = () => {
      console.info('Download task pause.');
    };
    downloadTask.on('pause', pauseCallback);

    let removeCallback = () => {
      console.info('Download task remove.');
    };
    downloadTask.on('remove', removeCallback);
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## on('fail')

```TypeScript
on(type: 'fail', callback: (err: int) => void): void
```

订阅下载任务失败事件，使用callback异步回调。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'fail' | Yes | 订阅的事件类型。 - 取值为'fail'，表示下载失败，任务失败时触发该事件。 |
| callback | (err: int) => void | Yes | 下载失败的回调函数。错误原因见  [下载任务的错误码](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    let failCallback = (err: number) => {
      console.error(`Failed to download the task. Code: ${err}`);
    };
    downloadTask.on('fail', failCallback);
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## onComplete

```TypeScript
onComplete(callback: DownloadCompleteCallback): void
```

Called when the current download session complete.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadCompleteCallback | Yes | The callback function for the download complete event. |

## onFail

```TypeScript
onFail(callback: DownloadFailCallback): void
```

Called when the current download session fails.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadFailCallback | Yes | The callback function for the download fail event. |

## onPause

```TypeScript
onPause(callback: DownloadPauseCallback): void
```

Called when the current download session pause.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadPauseCallback | Yes | The callback function for the download pause event. |

## onProgress

```TypeScript
onProgress(callback: DownloadProgressCallback): void
```

Called when the current download session is in process.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadProgressCallback | Yes | The callback function for the download progress event. |

## onRemove

```TypeScript
onRemove(callback: DownloadRemoveCallback): void
```

Called when the current download session remove.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadRemoveCallback | Yes | The callback function for the download remove event. |

## pause

```TypeScript
pause(callback: AsyncCallback<void>): void
```

暂停下载正在运行中的任务，使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [suspend]request.DownloadTask.suspend(callback: AsyncCallback<boolean>)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** request.DownloadTask.suspend(callback:

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当暂停下载任务成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
downloadTask.pause((err: BusinessError) => {
  if(err) {
    console.error(`Failed to pause the download task. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in pausing the download task.');
});

```

## pause

```TypeScript
pause(): Promise<void>
```

暂停下载正在运行中的任务，使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[suspend]request.DownloadTask.suspend()替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** request.DownloadTask.suspend()

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
downloadTask.pause().then(() => {    
  console.info('Succeeded in pausing the download task.');
}).catch((err: BusinessError) => {
  console.error(`Failed to pause the download task. Code: ${err.code}, message: ${err.message}`);
});

```

## query

```TypeScript
query(callback: AsyncCallback<DownloadInfo>): void
```

查询下载任务，返回下载任务的信息，使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [getTaskInfo]request.DownloadTask.getTaskInfo(callback: AsyncCallback<DownloadInfo>)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** request.DownloadTask.getTaskInfo(callback:

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DownloadInfo> | Yes | 回调函数。当查询下载任务成功，err为undefined，data为获取到的DownloadInfo对象；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
downloadTask.query((err: BusinessError, downloadInfo: request.DownloadInfo)=>{
  if(err) {
    console.error(`Failed to query the download mimeType. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info('Succeeded in querying the download task.');
  }
});

```

## query

```TypeScript
query(): Promise<DownloadInfo>
```

查询下载任务，返回下载任务的信息，使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃,建议使用[getTaskInfo]request.DownloadTask.getTaskInfo()替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** request.DownloadTask.getTaskInfo()

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DownloadInfo> | Promise对象。返回DownloadInfo。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
downloadTask.query().then((downloadInfo) => {    
  console.info('Succeeded in querying the download task.')
}).catch((err: BusinessError) => {
  console.error(`Failed to query the download task. Code: ${err.code}, message: ${err.message}`)
});

```

## queryMimeType

```TypeScript
queryMimeType(callback: AsyncCallback<string>): void
```

查询下载的任务的MimeType，使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [getTaskMimeType]request.DownloadTask.getTaskMimeType(callback: AsyncCallback<string>)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** request.DownloadTask.getTaskMimeType(callback:

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。当查询下载任务的MimeType成功，err为undefined，data为获取到的任务的MimeType对象；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
downloadTask.queryMimeType((err: BusinessError, data: string)=>{
  if(err) {
    console.error(`Failed to query the download mimeType. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info('Succeeded in querying the download mimeType.');
  }
});

```

## queryMimeType

```TypeScript
queryMimeType(): Promise<string>
```

查询下载任务的MimeType，使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[getTaskMimeType]request.DownloadTask.getTaskMimeType()替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** request.DownloadTask.getTaskMimeType()

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。返回下载任务的MimeType。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
downloadTask.queryMimeType().then((data: string) => {    
  console.info('Succeeded in querying the download MimeType.');
}).catch((err: BusinessError) => {
  console.error(`Failed to query the download MimeType. Code: ${err.code}, message: ${err.message}`)
});

```

## remove

```TypeScript
remove(callback: AsyncCallback<boolean>): void
```

移除下载的任务，使用callback异步回调。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [delete]request.UploadTask.delete(callback: AsyncCallback<boolean>)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** request.UploadTask.delete(callback:

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示移除下载任务成功；返回false表示移除下载任务失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
downloadTask.remove((err, result)=>{
  if(err) {
    console.error(`Failed to remove the download task. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in removing the download task.');
});

```

## remove

```TypeScript
remove(): Promise<boolean>
```

移除下载的任务，使用Promise异步回调。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用[delete]request.UploadTask.delete()替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** request.UploadTask.delete()

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示移除下载任务成功；返回false表示移除下载任务失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
downloadTask.remove().then((result) => {
  console.info('Succeeded in removing the download task.');
}).catch ((err: BusinessError) => {
  console.error(`Failed to remove the download task. Code: ${err.code}, message: ${err.message}`);
});

```

## restore

```TypeScript
restore(callback: AsyncCallback<boolean>): void
```

重新启动被暂停的下载任务，使用callback异步回调。 > **说明：** > > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示重新启动已暂停的下载任务成功；返回false表示重新启动下载任务失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    downloadTask.restore((err: BusinessError, result: boolean) => {
      if (err) {
        console.error(`Failed to resume the download task. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('Succeeded in resuming the download task.');
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## restore

```TypeScript
restore(): Promise<boolean>
```

重新启动被暂停的下载任务，使用Promise异步回调。 > **说明：** > > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示重新启动被暂停的下载任务成功；返回false表示重新启动被暂停的下载任务失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    downloadTask.restore().then((result: boolean) => {
      console.info('Succeeded in resuming the download task.')
    }).catch((err: BusinessError) => {
      console.error(`Failed to resume the download task. Code: ${err.code}, message: ${err.message}`);
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## resume

```TypeScript
resume(callback: AsyncCallback<void>): void
```

重新启动被暂停的下载任务，使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [restore]request.DownloadTask.restore(callback: AsyncCallback<boolean>)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** request.DownloadTask.restore(callback:

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当重新启动已暂停的下载任务成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
downloadTask.resume((err: BusinessError) => {
  if (err) {
    console.error(`Failed to resume the download task. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in resuming the download task.');
});

```

## resume

```TypeScript
resume(): Promise<void>
```

重新启动被暂停的下载任务，使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[restore]request.DownloadTask.restore()替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** request.DownloadTask.restore()

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
downloadTask.resume().then(() => {
  console.info('Succeeded in resuming the download task.')
}).catch((err: BusinessError) => {
  console.error(`Failed to resume the download task. Code: ${err.code}, message: ${err.message}`);
});

```

## suspend

```TypeScript
suspend(callback: AsyncCallback<boolean>): void
```

暂停下载正在运行中的任务，已暂停的任务可被[restore]request.DownloadTask.restore()恢复，使用callback异步回调。 > **说明：** > > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示暂停下载任务成功；返回false表示暂停下载任务失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    downloadTask.suspend((err: BusinessError, result: boolean) => {
      if (err) {
        console.error(`Failed to pause the download task. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('Succeeded in pausing the download task.');
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## suspend

```TypeScript
suspend(): Promise<boolean>
```

暂停下载正在运行中的任务，已暂停的任务可被[restore]request.DownloadTask.restore()恢复，使用Promise异步回调。 > **说明：** > > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Download

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示暂停下载正在运行中的任务成功；返回false表示暂停下载正在运行中的任务失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // Replace the URL with the HTTP address of the real server.
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    let downloadTask: request.DownloadTask = data;
    downloadTask.suspend().then((result: boolean) => {
      console.info('Succeeded in pausing the download task.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to pause the download task. Code: ${err.code}, message: ${err.message}`);
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

