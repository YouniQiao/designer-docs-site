# downloadFile

## downloadFile

```TypeScript
function downloadFile(context: BaseContext, config: DownloadConfig, callback: AsyncCallback<DownloadTask>): void
```

创建并启动一个下载任务，使用callback异步回调，支持HTTP协议。通过 [on('complete'|'pause'|'remove')]request.DownloadTask.on(type: 'complete' | 'pause' | 'remove', callback: () => void) 可获取任务下载时的状态信息，包括任务完成、暂停或移除。通过 [on('fail')]request.DownloadTask.on(type: 'fail', callback: (err: int) => void)可获取任务下载时的错误信息。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**起始版本：** 9

**需要权限：** 

 ohos.permission.INTERNET

**系统能力：** SystemCapability.MiscServices.Download

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | 基于应用程序的上下文。 |
| config | DownloadConfig | 是 | 下载的配置信息。 |
| callback | AsyncCallback&lt;DownloadTask> | 是 | 回调函数。当下载任务成功，err为undefined，data为获取到的DownloadTask对象；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The permissions check fails. |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 13400001 | Invalid file or file system error. |
| 13400002 | File path not supported or invalid. |
| 13400003 | Task service ability error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // 需要手动将url替换为真实服务器的HTTP协议地址
  request.downloadFile(context, {
    url: 'https://xxxx/xxxxx.hap',
    filePath: 'xxx/xxxxx.hap'
  }, (err: BusinessError, data: request.DownloadTask) => {
    if (err) {
      console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
      return;
    }
  });
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

## downloadFile

```TypeScript
function downloadFile(context: BaseContext, config: DownloadConfig): Promise<DownloadTask>
```

创建并启动一个下载任务，使用Promise异步回调，支持HTTP协议。通过 [on('complete'|'pause'|'remove')]request.DownloadTask.on(type: 'complete' | 'pause' | 'remove', callback: () => void) 可以获取任务下载时的状态信息，包括任务完成、暂停或移除。通过 [on('fail')]request.DownloadTask.on(type: 'fail', callback: (err: int) => void)可以获取任务下载时的错误信息。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**起始版本：** 9

**需要权限：** 

 ohos.permission.INTERNET

**系统能力：** SystemCapability.MiscServices.Download

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | 基于应用程序的上下文。 |
| config | DownloadConfig | 是 | 下载的配置信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DownloadTask> | 使用Promise方式，异步返回下载任务DownloadTask的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The permissions check fails. |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 13400001 | Invalid file or file system error. |
| 13400002 | File path not supported or invalid. |
| 13400003 | Task service ability error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  // 需要手动将url替换为真实服务器的HTTP协议地址
  request.downloadFile(context, { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
     let downloadTask: request.DownloadTask = data;
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
}

```

