# SessionRestore

Control class for restore procedure.

**起始版本：** 10

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { backup } from '@kit.CoreFileKit';
```

## appendBundles

```TypeScript
appendBundles(remoteCapabilitiesFd: int, bundlesToBackup: string[], infos?: string[]): Promise<void>
```

Append new bundles and restoreInfos to be restore up during the restore.

**起始版本：** 12

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| remoteCapabilitiesFd | int | 是 | Opened JSON file that stores remote device capabilities.  You can use the getLocalCapabilities method to obtain the value. |
| bundlesToBackup | string[] | 是 | Bundles to restore. |
| infos | string[] | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900005 | I/O error |
| 13900011 | Out of memory |
| 13900020 | Invalid argument |
| 13900025 | No space left on device |
| 13900042 | Unknown error |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo, backup } from '@kit.CoreFileKit';

let generalCallbacks: backup.GeneralCallbacks = {
  onFileReady: (err: BusinessError, file: backup.File) => {
    if (err) {
      console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onFileReady success');
    fileIo.closeSync(file.fd);
  },
  onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleBegin success');
  },
  onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleEnd success');
  },
  onAllBundlesEnd: (err: BusinessError) => {
    if (err) {
      console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onAllBundlesEnd success');
  },
  onBackupServiceDied: () => {
    console.info('service died');
  },
  onResultReport: (bundleName: string, result: string) => {
    console.info(`onResultReport success, bundleName: ${bundleName}, result: ${result}`);
  },
  onProcess: (bundleName: string, process: string) => {
    console.info(`onProcess success, bundleName: ${bundleName}, process: ${process}`);
  }
};
let sessionRestore = new backup.SessionRestore(generalCallbacks); // 创建恢复流程
async function appendBundles() {
  let fileData : backup.FileData = {
    fd : -1
  }
  try {
    fileData = await backup.getLocalCapabilities();
    console.info('getLocalCapabilities success');
    let restoreApps: Array<string> = [
      "com.example.hiworld",
    ];
    await sessionRestore.appendBundles(fileData.fd, restoreApps);
    console.info('appendBundles success');
    // 携带扩展参数的调用
    let infos: Array<string> = [
      `
       {
        "infos":[
          {
            "details": [
              {
                "detail": [
                  {
                    "source": "com.example.hiworld", // 应用旧系统包名
                    "target": "com.example.helloworld" // 应用新系统包名
                  }
                ],
                "type": "app_mapping_relation"
              }
            ],
            "type":"broadcast"
          }
        ]
       }
      `
    ]
    await sessionRestore.appendBundles(fileData.fd, restoreApps, infos);
    console.info('appendBundles success');
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`getLocalCapabilities failed. Code: ${err.code}, message: ${err.message}`);
  } finally {
    fileIo.closeSync(fileData.fd);
  }
}

```

## appendBundles

```TypeScript
appendBundles(remoteCapabilitiesFd: int, bundlesToBackup: string[], callback: AsyncCallback<void>): void
```

Append new bundles to be restore up during the restore.

**起始版本：** 10

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| remoteCapabilitiesFd | int | 是 | Opened JSON file that stores remote device capabilities.  You can use the getLocalCapabilities method to obtain the value. |
| bundlesToBackup | string[] | 是 | Bundles to restore. |
| callback | AsyncCallback&lt;void> | 是 | Asynchronous callback to be called when appendBundles has finished. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900005 | I/O error |
| 13900011 | Out of memory |
| 13900020 | Invalid argument |
| 13900025 | No space left on device |
| 13900042 | Unknown error |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo, backup } from '@kit.CoreFileKit';

let generalCallbacks: backup.GeneralCallbacks = {
  onFileReady: (err: BusinessError, file: backup.File) => {
    if (err) {
      console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onFileReady success');
    fileIo.closeSync(file.fd);
  },
  onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleBegin success');
  },
  onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleEnd success');
  },
  onAllBundlesEnd: (err: BusinessError) => {
    if (err) {
      console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onAllBundlesEnd success');
  },
  onBackupServiceDied: () => {
    console.info('service died');
  },
  onResultReport: (bundleName: string, result: string) => {
    console.info(`onResultReport success, bundleName: ${bundleName}, result: ${result}`);
  },
  onProcess: (bundleName: string, process: string) => {
    console.info(`onProcess success, bundleName: ${bundleName}, process: ${process}`);
  }
};
let sessionRestore = new backup.SessionRestore(generalCallbacks); // 创建恢复流程
async function appendBundles() {
  let fileData : backup.FileData = {
    fd : -1
  }
  try {
    fileData = await backup.getLocalCapabilities();
    console.info('getLocalCapabilities success');
    let restoreApps: Array<string> = [
      "com.example.hiworld",
    ];
    sessionRestore.appendBundles(fileData.fd, restoreApps, (err: BusinessError) => {
      if (err) {
        console.error(`appendBundles failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('appendBundles success');
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`getLocalCapabilities failed. Code: ${err.code}, message: ${err.message}`);
  } finally {
    fileIo.closeSync(fileData.fd);
  }
}

```

## cancel

```TypeScript
cancel(bundleName: string): int
```

cancel the application being restore.

**起始版本：** 18

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Set the bundleName of the application to be canceled. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Return cancel result, 0 is success, 13500011 is fail, 13500012 is not have task. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

**示例：**

```TypeScript
import { fileIo, backup} from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let generalCallbacks: backup.GeneralCallbacks = {
  onFileReady: (err: BusinessError, file: backup.File) => {
    if (err) {
      // 文件fd传输失败，调用取消接口，取消此应用的恢复任务
      let result = sessionRestore.cancel(err.name);
      console.info('cancel result:' + result);
      console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onFileReady success');
    fileIo.closeSync(file.fd);
  },
  onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleBegin success');
  },
  onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleEnd success');
  },
  onAllBundlesEnd: (err: BusinessError) => {
    if (err) {
      console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onAllBundlesEnd success');
  },
  onBackupServiceDied: () => {
    console.info('service died');
  },
  onResultReport: (bundleName: string, result: string) => {
    console.info(`onResultReport success, bundleName: ${bundleName}, result: ${result}`);
  },
  onProcess: (bundleName: string, process: string) => {
    console.info(`onProcess success, bundleName: ${bundleName}, process: ${process}`);
  }
};
let sessionRestore = new backup.SessionRestore(generalCallbacks); // 创建恢复流程
async function cancelTest() {
  let fileData: backup.FileData = {
    fd: -1
  }
  fileData = await backup.getLocalCapabilities(); // 备份恢复框架提供的getLocalCapabilities接口获取能力集文件。
  let backupBundles: Array<string> = ["com.example.helloWorld"];
  sessionRestore.appendBundles(fileData.fd, backupBundles);
}

```

## cleanBundleTempDir

```TypeScript
cleanBundleTempDir(bundleName: string): Promise<boolean>
```

Provides an interface for the tool to clear temporary directories

**起始版本：** 20

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Set the bundleName of the application to be cleaned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Return clean result, true is success, false is fail. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |

**示例：**

```TypeScript
import { fileIo, backup} from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function cleanBundleTempDir(bundleName: string) {
  try {
    let res = await sessionRestore.cleanBundleTempDir(bundleName);
    if (res) {
      console.info(`cleanBundleTempDir succeeded.`);
    } else {
      console.info(`cleanBundleTempDir fail.`);
    }
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`cleanBundleTempDir failed. Code: ${err.code}, message: ${err.message}`);
  }
}

let generalCallbacks: backup.GeneralCallbacks = { // 定义备份/恢复过程中的通用回调
  // 文件发送成功回调
  onFileReady: (err: BusinessError, file: backup.File) => {
    if (err) {
      console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onFileReady succeeded.`);
    fileIo.closeSync(file.fd);
  },
  // 应用备份/恢复开始回调
  onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onBundleBegin succeeded.`);
  },
  // 应用备份/恢复结束回调，在此处调用cleanBundleTempDir进行清理
  onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    cleanBundleTempDir(bundleName);
  },
  onAllBundlesEnd: (err: BusinessError) => {
    if (err) {
      console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onAllBundlesEnd success`);
  },
  onBackupServiceDied: () => {
    console.info(`service died`);
  },
  onResultReport: (bundleName: string, result: string) => {
    console.info(`onResultReport success, bundleName: ${bundleName}, result: ${result}`);
  },
  onProcess: (bundleName: string, process: string) => {
    console.info(`onProcess success, bundleName: ${bundleName}, process: ${process}`);
  }
};
let sessionRestore = new backup.SessionRestore(generalCallbacks); // 创建恢复流程

```

## constructor

```TypeScript
constructor(callbacks: GeneralCallbacks)
```

Constructor for obtaining the instance of the SessionBackup class.

**起始版本：** 10

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbacks | GeneralCallbacks | 是 | Callbacks to be registered for the restore. |

**示例：**

```TypeScript
import { fileIo, backup} from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let generalCallbacks: backup.GeneralCallbacks = {
  onFileReady: (err: BusinessError, file: backup.File) => {
    if (err) {
      console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onFileReady success');
    fileIo.closeSync(file.fd);
  },
  onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleBegin success');
  },
  onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleEnd success');
  },
  onAllBundlesEnd: (err: BusinessError) => {
    if (err) {
      console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onAllBundlesEnd success');
  },
  onBackupServiceDied: () => {
    console.info('service died');
  },
  onResultReport: (bundleName: string, result: string) => {
    console.info(`onResultReport success, bundleName: ${bundleName}, result: ${result}`);
  },
  onProcess: (bundleName: string, process: string) => {
    console.info(`onProcess success, bundleName: ${bundleName}, process: ${process}`);
  }
};
let sessionRestore = new backup.SessionRestore(generalCallbacks); // 创建恢复流程

```

## getApkFileHandle

```TypeScript
getApkFileHandle(path: string, fileName: string): Promise<FileData>
```

Get the file handle of an APK file.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.BACKUP

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | The path to the APK file. |
| fileName | string | 是 | The name of the APK file. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FileData> | Promise used to return A FileData holding the file descriptor. The returned  file is a temporal file that will be deleted automatically when closed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900020 | Invalid argument |

**示例：**

```TypeScript
import { backup } from '@kit.CoreFileKit';
import { fileIo } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let generalCallbacks: backup.GeneralCallbacks = {
  onFileReady: (err: BusinessError, file: backup.File) => {
    if (err) {
      console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onFileReady succeeded.`);
    fileIo.closeSync(file.fd);
  },
  onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onBundleBegin succeeded.`);
  },
  onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onBundleEnd succeeded.`);
  },
  onAllBundlesEnd: (err: BusinessError) => {
    if (err) {
      console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onAllBundlesEnd succeeded.`);
  },
  onBackupServiceDied: () => {
    console.info(`service died`);
  },
  onResultReport: (bundleName: string, result: string) => {
    console.info(`onResultReport succeeded, bundleName: ${bundleName}, result: ${result}`);
  },
  onProcess: (bundleName: string, process: string) => {
    console.info(`onProcess succeeded, bundleName: ${bundleName}, process: ${process}`);
  },
  onMigrateResult: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onMigrateResult failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onMigrateResult succeeded, bundleName: ' + bundleName);
  }
};

async function testGetApkFileHandle() {
  let sessionRestore = new backup.SessionRestore(generalCallbacks);
  try {
    let fileData: backup.FileData = await sessionRestore.getApkFileHandle("/data/storage/el1/base/files", "app.apk");
    console.info("getApkFileHandle succeeded, fd: " + fileData.fd);
    // 使用完毕后关闭文件描述符
    fileIo.closeSync(fileData.fd);
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`getApkFileHandle failed. Code: ${err.code}, message: ${err.message}`);
  }
}

```

## getCompatibilityInfo

```TypeScript
getCompatibilityInfo(bundleName: string, extInfo: string): Promise<string>
```

Provides an interface for the tool to get compatibility info.

**起始版本：** 20

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Set the bundleName of the application that need to get compatibilityInfo. |
| extInfo | string | 是 | Indicates the extension information of application. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Return compatibility info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |

**示例：**

```TypeScript
import { fileIo, backup } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let generalCallbacks: backup.GeneralCallbacks = { // 定义备份/恢复过程中的通用回调
  onFileReady: (err: BusinessError, file: backup.File) => {
    if (err) {
      console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onFileReady succeeded.`);
    fileIo.closeSync(file.fd);
  },
  onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onBundleBegin succeeded.`);
  },
  onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onBundleEnd succeeded.`);
  },
  onAllBundlesEnd: (err: BusinessError) => {
    if (err) {
      console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onAllBundlesEnd success`);
  },
  onBackupServiceDied: () => {
    console.info(`service died`);
  },
  onResultReport: (bundleName: string, result: string) => {
    console.info(`onResultReport success, bundleName: ${bundleName}, result: ${result}`);
  },
  onProcess: (bundleName: string, process: string) => {
    console.info(`onProcess success, bundleName: ${bundleName}, process: ${process}`);
  }
};

async function getRestoreCompatibilityInfo() {
  let sessionRestore = new backup.SessionRestore(generalCallbacks); // 创建恢复流程
  let bundleName = "com.example.helloWorld";
  let extInfo = ""; // 空表示无需给应用传额外信息
  try {
    let retInfo = await sessionRestore.getCompatibilityInfo(bundleName, extInfo);
    if (retInfo) {
      console.info(`getCompatibilityInfo success ` + retInfo);
    } else {
      console.info(`bundle ` + bundleName + ' may not support getCompatibilityInfo');
    }
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`getCompatibilityInfo failed. Code: ${err.code}, message: ${err.message}`);
  }
}

```

## getFileHandle

```TypeScript
getFileHandle(fileMeta: FileMeta): Promise<void>
```

Request to get a shared file from the service. This interface is part of the zero-copy feature. Developers could get the file through onFileReady callback. When the client accomplished the file, use publishFile to publish.

**起始版本：** 10

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fileMeta | FileMeta | 是 | Metadata of the file to be sent. Note that all the files should come  from the backup procedure or the getLocalCapabilities method. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

**示例：**

```TypeScript
import { fileIo, backup} from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let generalCallbacks: backup.GeneralCallbacks = {
  onFileReady: (err: BusinessError, file: backup.File) => {
    if (err) {
      console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onFileReady success');
    fileIo.closeSync(file.fd);
  },
  onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleBegin success');
  },
  onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleEnd success');
  },
  onAllBundlesEnd: (err: BusinessError) => {
    if (err) {
      console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onAllBundlesEnd success');
  },
  onBackupServiceDied: () => {
    console.info('service died');
  },
  onResultReport: (bundleName: string, result: string) => {
    console.info(`onResultReport success, bundleName: ${bundleName}, result: ${result}`);
  },
  onProcess: (bundleName: string, process: string) => {
    console.info(`onProcess success, bundleName: ${bundleName}, process: ${process}`);
  }
};
let sessionRestore = new backup.SessionRestore(generalCallbacks); // 创建恢复流程
async function getFileHandle() {
  try {
    let fileMeta: backup.FileMeta = {
      bundleName: "com.example.hiworld",
      uri: "test.txt"
    }
    await sessionRestore.getFileHandle(fileMeta);
    console.info('getFileHandle success');
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`getFileHandle failed. Code: ${err.code}, message: ${err.message}`);
  }
}

```

## getFileHandle

```TypeScript
getFileHandle(fileMeta: FileMeta, callback: AsyncCallback<void>): void
```

Request to get a shared file from the service. This interface is part of the zero-copy feature. Developers could get the file through onFileReady callback. When the client accomplished the file, use publishFile to publish.

**起始版本：** 10

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fileMeta | FileMeta | 是 | Metadata of the file to be sent. Note that all the files should come  from the backup procedure or the getLocalCapabilities method. |
| callback | AsyncCallback&lt;void> | 是 | Asynchronous callback to be called when getFileHandle has finished. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

**示例：**

```TypeScript
import { fileIo, backup} from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let generalCallbacks: backup.GeneralCallbacks = {
  onFileReady: (err: BusinessError, file: backup.File) => {
    if (err) {
      console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onFileReady success');
    fileIo.closeSync(file.fd);
  },
  onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleBegin success');
  },
  onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleEnd success');
  },
  onAllBundlesEnd: (err: BusinessError) => {
    if (err) {
      console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onAllBundlesEnd success');
  },
  onBackupServiceDied: () => {
    console.info('service died');
  },
  onResultReport: (bundleName: string, result: string) => {
    console.info(`onResultReport success, bundleName: ${bundleName}, result: ${result}`);
  },
  onProcess: (bundleName: string, process: string) => {
    console.info(`onProcess success, bundleName: ${bundleName}, process: ${process}`);
  }
};
let sessionRestore = new backup.SessionRestore(generalCallbacks); // 创建恢复流程
let fileMeta: backup.FileMeta = {
  bundleName: "com.example.hiworld",
  uri: "test.txt"
}
sessionRestore.getFileHandle(fileMeta, (err: BusinessError) => {
  if (err) {
    console.error(`getFileHandle failed. Code: ${err.code}, message: ${err.message}`);
  }
  console.info('getFileHandle success');
});

```

## getFileHandles

```TypeScript
getFileHandles(fileMeta: FileMeta): Promise<void>
```

Request to get shared files from the service. This interface is part of the zero-copy feature. Developers could get the file through onFileReadyBatch callback. When the client accomplished the file, use publishFile to publish.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.BACKUP

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fileMeta | FileMeta | 是 | Metadata of the file to be sent. Note that all the files should come  from the backup procedure or the getLocalCapabilities method. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900020 | Invalid argument |

## getLocalCapabilities

```TypeScript
getLocalCapabilities(): Promise<FileData>
```

Obtain a Json file that describes local capabilities.

**起始版本：** 18

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FileData> | A FileData holding all the local capabilities. The returned file is a temporal file that will be  deleted automatically when closed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900020 | Invalid argument |
| 13900042 | Internal error |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo, backup } from '@kit.CoreFileKit';

interface test { // 用于解析能力文件
  bundleInfos: [];
  deviceType: string;
  systemFullName: string;
}

interface BundleInfo { // 用于获取单个应用的本地能力信息
  name: string;
  appIndex: number;
  versionCode: number;
  versionName: string;
  spaceOccupied: number;
  allToBackup: boolean;
  increSpaceOccupied?: number;
  fullBackupOnly: boolean;
  extensionName: string;
  restoreDeps: string;
  supportScene: string;
  extraInfo: object;
}

let generalCallbacks: backup.GeneralCallbacks = { // 定义备份/恢复过程中的通用回调
  onFileReady: (err: BusinessError, file: backup.File) => {
    if (err) {
      console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onFileReady success');
    fileIo.closeSync(file.fd);
  },
  onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleBegin success');
  },
  onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onBundleEnd success');
  },
  onAllBundlesEnd: (err: BusinessError) => {
    if (err) {
      console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onAllBundlesEnd success');
  },
  onBackupServiceDied: () => {
    console.info('service died');
  },
  onResultReport: (bundleName: string, result: string) => {
    console.info(`onResultReport success, bundleName: ${bundleName}, result: ${result}`);
  },
  onProcess: (bundleName: string, process: string) => {
    console.info(`onProcess success, bundleName: ${bundleName}, process: ${process}`);
  }
};
async function getLocalCapabilitiesTest() {
  let sessionRestore = new backup.SessionRestore(generalCallbacks); // 创建恢复流程
  let basePath = '/data/storage/el2/base/backup';
  let path = basePath + '/localCapabilities.json'; // 本地保存能力文件的路径
  try {
    let fileData = await sessionRestore.getLocalCapabilities(); // 获取本地能力文件
    if (fileData) {
      console.info('getLocalCapabilities success');
      console.info('fileData info:' + fileData.fd);
      if (!fileIo.accessSync(basePath)) {
        fileIo.mkdirSync(basePath);
        console.info('create success' + basePath);
      }
      fileIo.copyFileSync(fileData.fd, path); // 将获取的本地能力文件保存到本地
      fileIo.closeSync(fileData.fd);
    }
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`getLocalCapabilities failed with code: ${err.code}, message: ${err.message}`);
  }
  let data = fileIo.readTextSync(path, 'utf8'); // 从本地的能力文件中获取信息
  try {
    const jsonsObj: test | null = JSON.parse(data); // 解析本地的能力文件并打印部分信息
    if (jsonsObj) {
      const infos:BundleInfo [] = jsonsObj.bundleInfos;
      for (let i = 0; i < infos.length; i++) {
        console.info('name: ' + infos[i].name);
        console.info('appIndex: ' + infos[i].appIndex);
        console.info('allToBackup: ' + infos[i].allToBackup);
      }
      const systemFullName: string = jsonsObj.systemFullName;
      console.info('systemFullName: ' + systemFullName);
      const deviceType: string = jsonsObj.deviceType;
      console.info('deviceType: ' + deviceType);
    }
  } catch (error) {
    console.error(`parse failed with code: ${error.code}, message: ${error.message}`);
  }
}


{
 "backupVersion" : "16.0",
 "bundleInfos" :[{
   "allToBackup" : true,
   "extensionName" : "BackupExtensionAbility",
   "name" : "com.example.hiworld",
   "needToInstall" : false,
   "spaceOccupied" : 0,
   "versionCode" : 1000000,
   "versionName" : "1.0.0"
   }],
 "deviceType" : "default",
 "systemFullName" : "OpenHarmony-4.0.0.0"
}

```

## migrateFile

```TypeScript
migrateFile(pathInfo: PathInfo, fileMeta: FileMeta): Promise<void>
```

Migrate file from source path to destination path.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.BACKUP

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pathInfo | PathInfo | 是 | Path information containing source and destination paths. |
| fileMeta | FileMeta | 是 | File metadata containing bundleName and optional fileName. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900020 | Invalid argument |

**示例：**

```TypeScript
import { backup } from '@kit.CoreFileKit';
import { fileIo } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let generalCallbacks: backup.GeneralCallbacks = {
  onFileReady: (err: BusinessError, file: backup.File) => {
    if (err) {
      console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onFileReady succeeded.`);
    fileIo.closeSync(file.fd);
  },
  onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onBundleBegin succeeded.`);
  },
  onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onBundleEnd succeeded.`);
  },
  onAllBundlesEnd: (err: BusinessError) => {
    if (err) {
      console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`onAllBundlesEnd succeeded.`);
  },
  onBackupServiceDied: () => {
    console.info(`service died.`);
  },
  onResultReport: (bundleName: string, result: string) => {
    console.info(`onResultReport succeeded, bundleName: ${bundleName}, result: ${result}`);
  },
  onProcess: (bundleName: string, process: string) => {
    console.info(`onProcess succeeded, bundleName: ${bundleName}, process: ${process}`);
  },
  onMigrateResult: (err: BusinessError<string|void>, bundleName: string) => {
    if (err) {
      console.error(`onMigrateResult failed. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('onMigrateResult succeeded, bundleName: ' + bundleName);
  }
};

async function testMigrateFile() {
  let sessionRestore = new backup.SessionRestore(generalCallbacks);
  try {
    await sessionRestore.migrateFile(
      {
        srcPath: "/data/storage/el1/base/files/",
        destPath: "/data/storage/el2/base/files/"
      },
      {
        bundleName: "com.example.app",
        uri: "" // 按目录迁移文件时，将uri置为空
      }
    );
    console.info("migrateFile succeeded.");
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`migrateFile failed. Code: ${err.code}, message: ${err.message}`);
  }
}

```

## publishFile

```TypeScript
publishFile(fileMeta: FileMeta): Promise<void>
```

Publish the file handle to the backup service to make the service aware that the file's content is ready. This interface is part of the zero-copy feature.

**起始版本：** 10

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fileMeta | FileMeta | 是 | Metadata of the file to be sent. Make sure that the backup framework holds  this file by calling getFileHandle. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

**示例：**

```TypeScript
import { fileIo, backup} from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let g_session: backup.SessionRestore;
let initMap = new Map<string, number>();
let testFileNum = 123; // 123: 恢复所需文件个数示例
let testBundleName = 'com.example.myapplication'; // 测试包名
initMap.set(testBundleName, testFileNum);
let countMap = new Map<string, number>();
countMap.set(testBundleName, 0); // 实际写入文件个数初始化
async function publishFile(file: backup.FileMeta) {
  let fileMeta: backup.FileMeta = {
    bundleName: file.bundleName,
    uri: ''
  }
  await g_session.publishFile(fileMeta);
}
function createSessionRestore() {
  let generalCallbacks: backup.GeneralCallbacks = {
    onFileReady: (err: BusinessError, file: backup.File) => {
      if (err) {
        console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('onFileReady success');
      fileIo.closeSync(file.fd);
      let cnt = countMap.get(file.bundleName) || 0;
      countMap.set(file.bundleName, cnt + 1); // 实际写入文件个数更新
      // 恢复所需文件个数与实际写入文件个数相等时调用，保证数据的一致性和完整性
      if (countMap.get(file.bundleName) == initMap.get(file.bundleName)) { // 每个包的所有文件收到后触发publishFile
        publishFile(file);
      }
      console.info('publishFile success');
    },
    onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
      if (err) {
        console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('onBundleBegin success');
    },
    onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
      if (err) {
        console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('onBundleEnd success');
    },
    onAllBundlesEnd: (err: BusinessError) => {
      if (err) {
        console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('onAllBundlesEnd success');
    },
    onBackupServiceDied: () => {
      console.info('service died');
    },
    onResultReport: (bundleName: string, result: string) => {
      console.info(`onResultReport success, bundleName: ${bundleName}, result: ${result}`);
    },
    onProcess: (bundleName: string, process: string) => {
      console.info(`onProcess success, bundleName: ${bundleName}, process: ${process}`);
    }
  };
  let sessionRestore = new backup.SessionRestore(generalCallbacks); // 创建恢复流程
  return sessionRestore;
}
g_session = createSessionRestore();

```

## publishFile

```TypeScript
publishFile(fileMeta: FileMeta, callback: AsyncCallback<void>): void
```

Publish the file handle to the backup service to make the service aware that the file's content is ready. This interface is part of the zero-copy feature.

**起始版本：** 10

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fileMeta | FileMeta | 是 | Metadata of the file to be sent. Make sure that the backup framework holds  this file by calling getFileHandle. |
| callback | AsyncCallback&lt;void> | 是 | Asynchronous callback to be called when publishFile has finished. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

**示例：**

```TypeScript
import { fileIo, backup} from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let g_session: backup.SessionRestore;
let initMap = new Map<string, number>();
let testFileNum = 123; // 123: 恢复所需文件个数示例
let testBundleName = 'com.example.myapplication'; // 测试包名
initMap.set(testBundleName, testFileNum);
let countMap = new Map<string, number>();
countMap.set(testBundleName, 0); // 实际写入文件个数初始化
function createSessionRestore() {
  let generalCallbacks: backup.GeneralCallbacks = {
    onFileReady: (err: BusinessError, file: backup.File) => {
      if (err) {
        console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('onFileReady success');
      fileIo.closeSync(file.fd);
      let cnt = countMap.get(file.bundleName) || 0;
      countMap.set(file.bundleName, cnt + 1); // 实际写入文件个数更新
      // 恢复所需文件个数与实际写入文件个数相等时调用，保证数据的一致性和完整性
      if (countMap.get(file.bundleName) == initMap.get(file.bundleName)) { // 每个包的所有文件收到后触发publishFile
        let fileMeta: backup.FileMeta = {
          bundleName: file.bundleName,
          uri: ''
        }
        g_session.publishFile(fileMeta, (err: BusinessError) => {
          if (err) {
            console.error(`publishFile failed. Code: ${err.code}, message: ${err.message}`);
            return;
          }
          console.info('publishFile success');
        });
      }
    },
    onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
      if (err) {
        console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('onBundleBegin success');
    },
    onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
      if (err) {
        console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('onBundleEnd success');
    },
    onAllBundlesEnd: (err: BusinessError) => {
      if (err) {
        console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('onAllBundlesEnd success');
    },
    onBackupServiceDied: () => {
      console.info('service died');
    },
    onResultReport: (bundleName: string, result: string) => {
      console.info(`onResultReport success, bundleName: ${bundleName}, result: ${result}`);
    },
    onProcess: (bundleName: string, process: string) => {
     console.info(`onProcess success, bundleName: ${bundleName}, process: ${process}`);
    }
  };
  let sessionRestore = new backup.SessionRestore(generalCallbacks); // 创建恢复流程
  return sessionRestore;
}
g_session = createSessionRestore();

```

## release

```TypeScript
release(): Promise<void>
```

End restore process

**起始版本：** 12

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 13600001 | IPC error |
| 13900001 | Operation not permitted |
| 13900005 | I/O error |
| 13900042 | Unknown error |

**示例：**

```TypeScript
import { fileIo, backup} from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let g_session: backup.SessionRestore;
let initMap = new Map<string, number>();
let testFileNum = 123; // 123: 恢复所需文件个数示例
let testBundleName = 'com.example.myapplication'; // 测试包名
initMap.set(testBundleName, testFileNum);
let countMap = new Map<string, number>();
countMap.set(testBundleName, 0); // 实际写入文件个数初始化
function createSessionRestore() {
  let generalCallbacks: backup.GeneralCallbacks = {
    onFileReady: (err: BusinessError, file: backup.File) => {
      if (err) {
        console.error(`onFileReady failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('onFileReady success');
      fileIo.closeSync(file.fd);
      let cnt = countMap.get(file.bundleName) || 0;
      countMap.set(file.bundleName, cnt + 1); // 实际写入文件个数更新
      // 恢复所需文件个数与实际写入文件个数相等时调用，保证数据的一致性和完整性
      if (countMap.get(file.bundleName) == initMap.get(file.bundleName)) { // 每个包的所有文件收到后触发publishFile
        let fileMeta: backup.FileMeta = {
          bundleName: file.bundleName,
          uri: ''
        }
        g_session.publishFile(fileMeta, (err: BusinessError) => {
          if (err) {
            console.error(`publishFile failed. Code: ${err.code}, message: ${err.message}`);
            return;
          }
          console.info('publishFile success');
        });
      }
    },
    onBundleBegin: (err: BusinessError<string|void>, bundleName: string) => {
      if (err) {
        console.error(`onBundleBegin failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('onBundleBegin success');
    },
    onBundleEnd: (err: BusinessError<string|void>, bundleName: string) => {
      if (err) {
        console.error(`onBundleEnd failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('onBundleEnd success');
    },
    onAllBundlesEnd: (err: BusinessError) => {
      if (err) {
        console.error(`onAllBundlesEnd failed. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('onAllBundlesEnd success');
    },
    onBackupServiceDied: () => {
      console.info('service died');
    },
    onResultReport: (bundleName: string, result: string) => {
      console.info(`onResultReport success, bundleName: ${bundleName}, result: ${result}`);
    },
    onProcess: (bundleName: string, process: string) => {
      console.info(`onProcess success, bundleName: ${bundleName}, process: ${process}`);
    }
  };
  let sessionRestore = new backup.SessionRestore(generalCallbacks); // 创建恢复流程
  return sessionRestore;
}
g_session = createSessionRestore();
g_session.release();
console.info('release success');

```

