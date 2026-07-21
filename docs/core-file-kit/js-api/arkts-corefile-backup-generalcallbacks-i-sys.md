# GeneralCallbacks (System API)

General callbacks for both backup and restore procedure.The backup service will notify the client by these callbacks.

**Since:** 10

<!--Device-backup-interface GeneralCallbacks--><!--Device-backup-interface GeneralCallbacks-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { backup } from '@kit.CoreFileKit';
```

<a id="onprocess"></a>
## onProcess

```TypeScript
onProcess(bundleName: string, process: string): void
```

Callback called when the backup_sa service return result information.The first return string parameter indicates the result of the bundle.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-GeneralCallbacks-onProcess(bundleName: string, process: string): void--><!--Device-GeneralCallbacks-onProcess(bundleName: string, process: string): void-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | the bundleName that triggers the callback. |
| process | string | Yes | the process info of the bundle. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed,application which is not a system application uses system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3.Parameter verification failed. |
| 13500006 | Tar error |
| 13500008 | Untar error |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900005 | I/O error |
| 13900011 | Out of memory |
| 13900020 | Invalid argument |
| 13900025 | No space left on device |

<a id="onresultreport"></a>
## onResultReport

```TypeScript
onResultReport(bundleName: string, result: string): void
```

Callback called when the backup service return result information.The first return string parameter indicates the bundleName that triggers the callback.The second return string parameter indicates the result of the bundle.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-GeneralCallbacks-onResultReport(bundleName: string, result: string): void--><!--Device-GeneralCallbacks-onResultReport(bundleName: string, result: string): void-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | the bundleName that triggers the callback. |
| result | string | Yes | the result of the bundle. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed,application which is not a system application uses system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3.Parameter verification failed. |
| 13600001 | IPC error |
| 13900005 | I/O error |
| 13900011 | Out of memory |
| 13900025 | No space left on device |
| 13900042 | Unknown error |

## onAllBundlesEnd

```TypeScript
onAllBundlesEnd: AsyncCallback<undefined>
```

Callback called when the all the bundles to backup/restore are done or aborted unexpectedly.

**Type:** AsyncCallback&lt;undefined&gt;

**Since:** 10

<!--Device-GeneralCallbacks-onAllBundlesEnd: AsyncCallback<undefined>--><!--Device-GeneralCallbacks-onAllBundlesEnd: AsyncCallback<undefined>-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

## onBackupServiceDied

```TypeScript
onBackupServiceDied: Callback<undefined>
```

Callback called when the backup service dies unexpectedly.

**Type:** Callback&lt;undefined&gt;

**Since:** 10

<!--Device-GeneralCallbacks-onBackupServiceDied: Callback<undefined>--><!--Device-GeneralCallbacks-onBackupServiceDied: Callback<undefined>-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

## onBackupSizeReport

```TypeScript
onBackupSizeReport?: OnBackupSizeReport
```

Callback called when the backup_sa service return result information.The first return string parameter indicates the result of the scanned bundle datasize.

**Type:** OnBackupSizeReport

**Since:** 18

<!--Device-GeneralCallbacks-onBackupSizeReport?: OnBackupSizeReport--><!--Device-GeneralCallbacks-onBackupSizeReport?: OnBackupSizeReport-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

## onBundleBegin

```TypeScript
onBundleBegin: AsyncCallback<string, void | string>
```

Callback called when a backup/restore procedure for an bundle is started.The first return string parameter indicates the name of the bundle.The second return string parameter indicates that when BusinessError errors occur,the callback data is the name of the bundle.

**Type:** AsyncCallback&lt;string, void \| string&gt;

**Since:** 12

<!--Device-GeneralCallbacks-onBundleBegin: AsyncCallback<string, void | string>--><!--Device-GeneralCallbacks-onBundleBegin: AsyncCallback<string, void | string>-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

## onBundleEnd

```TypeScript
onBundleEnd: AsyncCallback<string, void | string>
```

Callback called when a backup/restore procedure for an bundle ends successfully or gets aborted unexpectedly.The first return string parameter indicates the name of the bundle.The second return string parameter indicates that when BusinessError errors occur,the callback data is the name of the bundle.

**Type:** AsyncCallback&lt;string, void \| string&gt;

**Since:** 12

<!--Device-GeneralCallbacks-onBundleEnd: AsyncCallback<string, void | string>--><!--Device-GeneralCallbacks-onBundleEnd: AsyncCallback<string, void | string>-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

## onFileReady

```TypeScript
onFileReady: AsyncCallback<File>
```

Callback called when the backup service tries to send files to the client.The File argument indicates a file to send to the client.The returned file is owned by the backup service and will be cleaned by the service once the file is closed.

**Type:** AsyncCallback&lt;File&gt;

**Since:** 10

<!--Device-GeneralCallbacks-onFileReady: AsyncCallback<File>--><!--Device-GeneralCallbacks-onFileReady: AsyncCallback<File>-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

## onFileReadyBatch

```TypeScript
onFileReadyBatch?: OnFileReadyBatch
```

Callback called when the backup service tries to send files to the client.The File argument indicates a file to send to the client.The returned file is owned by the backup service and will be cleaned by the service once the file is closed.

**Type:** OnFileReadyBatch

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-GeneralCallbacks-onFileReadyBatch?: OnFileReadyBatch--><!--Device-GeneralCallbacks-onFileReadyBatch?: OnFileReadyBatch-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

## onMigrateResult

```TypeScript
onMigrateResult?: AsyncCallback<string, void | string>
```

Callback called when the migrate result is reported.The first return string parameter indicates the name of the bundle.The second return string parameter indicates that when BusinessError errors occur,the callback data is the name of the bundle.

**Type:** AsyncCallback&lt;string, void \| string&gt;

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-GeneralCallbacks-onMigrateResult?: AsyncCallback<string, void | string>--><!--Device-GeneralCallbacks-onMigrateResult?: AsyncCallback<string, void | string>-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

