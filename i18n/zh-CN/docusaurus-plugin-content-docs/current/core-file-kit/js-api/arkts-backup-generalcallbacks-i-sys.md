# GeneralCallbacks

General callbacks for both backup and restore procedure. The backup service will notify the client by these callbacks.

**起始版本：** 10

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { backup } from '@kit.CoreFileKit';
```

## onProcess

```TypeScript
onProcess(bundleName: string, process: string): void
```

Callback called when the backup_sa service return result information. The first return string parameter indicates the result of the bundle.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | the bundleName that triggers the callback. |
| process | string | 是 | the process info of the bundle. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 13500006 | Tar error |
| 13500008 | Untar error |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900005 | I/O error |
| 13900011 | Out of memory |
| 13900020 | Invalid argument |
| 13900025 | No space left on device |

**示例：**

```TypeScript
import { backup } from '@kit.CoreFileKit';

onProcess: (bundleName: string, process: string) => {
  console.info('onProcess bundleName : ' + bundleName);
  console.info('onProcess processInfo : ' + process);
}

```

## onResultReport

```TypeScript
onResultReport(bundleName: string, result: string): void
```

Callback called when the backup service return result information. The first return string parameter indicates the bundleName that triggers the callback. The second return string parameter indicates the result of the bundle.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | the bundleName that triggers the callback. |
| result | string | 是 | the result of the bundle. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 13600001 | IPC error |
| 13900005 | I/O error |
| 13900011 | Out of memory |
| 13900025 | No space left on device |
| 13900042 | Unknown error |

## onResultReport

```TypeScript
onResultReport: OnResultReport
```

Callback called when the backup service return result information. The first return string parameter indicates the bundleName that triggers the callback. The second return string parameter indicates the result of the bundle.

**类型：** OnResultReport

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

## onBackupServiceDied

```TypeScript
onBackupServiceDied: Callback<undefined>
```

Callback called when the backup service dies unexpectedly.

**类型：** Callback<undefined>

**起始版本：** 10

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

## onProcess

```TypeScript
onProcess: OnProcess
```

Callback called when the backup_sa service return result information. The first return string parameter indicates the result of the bundle.

**类型：** OnProcess

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

## onBundleEnd

```TypeScript
onBundleEnd: AsyncCallback<string, void | string>
```

Callback called when a backup/restore procedure for an bundle ends successfully or gets aborted unexpectedly. The first return string parameter indicates the name of the bundle. The second return string parameter indicates that when BusinessError errors occur, the callback data is the name of the bundle.

**类型：** AsyncCallback<string, void | string>

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

```TypeScript
onBundleEnd: AsyncCallback<string, BundlePara>
```

Callback called when a backup/restore procedure for an bundle ends successfully or gets aborted unexpectedly. The first return string parameter indicates the name of the bundle. The second return string parameter indicates that when BusinessError errors occur, the callback data is the name of the bundle.

**类型：** AsyncCallback<string, BundlePara>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

## onFileReadyBatch

```TypeScript
onFileReadyBatch?: OnFileReadyBatch
```

Callback called when the backup service tries to send files to the client. The File argument indicates a file to send to the client. The returned file is owned by the backup service and will be cleaned by the service once the file is closed.

**类型：** OnFileReadyBatch

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

## onMigrateResult

```TypeScript
onMigrateResult?: AsyncCallback<string, void | string>
```

Callback called when the migrate result is reported. The first return string parameter indicates the name of the bundle. The second return string parameter indicates that when BusinessError errors occur, the callback data is the name of the bundle.

**类型：** AsyncCallback<string, void | string>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

## onAllBundlesEnd

```TypeScript
onAllBundlesEnd: AsyncCallback<undefined>
```

Callback called when the all the bundles to backup/restore are done or aborted unexpectedly.

**类型：** AsyncCallback<undefined>

**起始版本：** 10

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

## onBundleBegin

```TypeScript
onBundleBegin: AsyncCallback<string, void | string>
```

Callback called when a backup/restore procedure for an bundle is started. The first return string parameter indicates the name of the bundle. The second return string parameter indicates that when BusinessError errors occur, the callback data is the name of the bundle.

**类型：** AsyncCallback<string, void | string>

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

```TypeScript
onBundleBegin: AsyncCallback<string, BundlePara>
```

Callback called when a backup/restore procedure for an bundle is started. The first return string parameter indicates the name of the bundle. The second return string parameter indicates that when BusinessError errors occur, the callback data is the name of the bundle.

**类型：** AsyncCallback<string, BundlePara>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

## onBackupSizeReport

```TypeScript
onBackupSizeReport?: OnBackupSizeReport
```

Callback called when the backup_sa service return result information. The first return string parameter indicates the result of the scanned bundle datasize.

**类型：** OnBackupSizeReport

**起始版本：** 18

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

## onFileReady

```TypeScript
onFileReady: AsyncCallback<File>
```

Callback called when the backup service tries to send files to the client. The File argument indicates a file to send to the client. The returned file is owned by the backup service and will be cleaned by the service once the file is closed.

**类型：** AsyncCallback<File>

**起始版本：** 10

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

