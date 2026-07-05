# BackupExtensionAbility

Class to be override for backup extension ability.

**起始版本：** 10

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

## 导入模块

```TypeScript
import { BundleVersion } from '@kit.CoreFileKit';
```

## getBackupCompatibilityInfo

```TypeScript
getBackupCompatibilityInfo(extInfo: string) : Promise<string>
```

Callback to be called when getting application backup compatibilityInfo. Developer could override this method to provide the backup compatibilityInfo.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| extInfo | string | 是 | Information about the capabilities of the peer. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Return backup compatibilityInfo, support promise. |

## getBackupInfo

```TypeScript
getBackupInfo(): string
```

Callback to be called when getting application backupInfo. Developer could override this method to provide the backupInfo.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Return the backup application's info. |

## getRestoreCompatibilityInfo

```TypeScript
getRestoreCompatibilityInfo(extInfo: string) : Promise<string>
```

Callback to be called when getting application restore compatibilityInfo. Developer could override this method to provide the restore compatibilityInfo.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| extInfo | string | 是 | Information about the capabilities of the peer. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Return restore compatibilityInfo, support promise. |

## onBackup

```TypeScript
onBackup(): void
```

Callback to be called when the backup procedure is started. Developer could override this method to build files to be backup.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**示例：**

```TypeScript
class BackupExt extends BackupExtensionAbility {
  async onBackup() {
    console.info('onBackup');
  }
}

```

## onBackupEx

```TypeScript
onBackupEx(backupInfo: string): string | Promise<string>
```

Callback to be called when the backup procedure is started. Developer could override this method to restore.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| backupInfo | string | 是 | BackupInfo to be backup, the param is a JSON string,  it is an array, each array element includes detail and type now. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Return backup result, support promise, the result is a JSON string,  it includes type, errorCode and errorInfo now. |

**示例：**

```TypeScript
import { BackupExtensionAbility, BundleVersion } from '@kit.CoreFileKit';

interface ErrorInfo {
  type: string,
  errorCode: number,
  errorInfo: string
}
class BackupExt extends BackupExtensionAbility {
  onBackupEx(backupInfo: string): string {
    try {
      if (backupInfo == "") {
        // 当backupInfo为空时，应用根据业务自行做处理。
        console.info("backupInfo is empty");
      }
      console.info(`onBackupEx ok`);
      let errorInfo: ErrorInfo = {
        type: "ErrorInfo",
        errorCode: 0,
        errorInfo: "app customized error info"
      }
      return JSON.stringify(errorInfo);
    } catch (err) {
      console.error(`BackupExt error. Code:${err.code}, message:${err.message}`);
    }
    return "";
  }
} 


import { BackupExtensionAbility, BundleVersion } from '@kit.CoreFileKit';

interface ErrorInfo {
  type: string,
  errorCode: number,
  errorInfo: string
}
class BackupExt extends BackupExtensionAbility {
  // 异步实现
  async onBackupEx(backupInfo: string): Promise<string> {
    try {
      if (backupInfo == "") {
        // 当backupInfo为空时，应用根据业务自行做处理。
        console.info("backupInfo is empty");
      }
      console.info(`onBackupEx ok`);
      let errorInfo: ErrorInfo = {
        type: "ErrorInfo",
        errorCode: 0,
        errorInfo: "app customized error info"
      }
      return JSON.stringify(errorInfo);
    } catch (err) {
      console.error(`BackupExt error. Code:${err.code}, message:${err.message}`);
    }
    return "";
  }
} 

```

## onProcess

```TypeScript
onProcess(): string
```

Callback to be called when getting backup/restore process info. Developer could override this method to provide the backup/restore process info.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Return the backup/restore process info. |

**示例：**

```TypeScript
import { BackupExtensionAbility } from '@kit.CoreFileKit';
import { taskpool } from '@kit.ArkTS';

@Sendable
class MigrateProgressInfo {
  private migrateProgress: string = '';
  private name: string = "test"; // appName
  private processed: number = 0; // 已处理的数据
  private total: number = 100; // 总数
  private isPercentage: boolean = true // 可选字段，true表示需要按百分比的格式化展示进度，false或者不实现该字段表示按具体项数展示进度

  getMigrateProgress(): string {
    this.migrateProgress = `{"progressInfo": [{"name": "${this.name}", "processed": "${this.processed}", "total": "${
      this.total}", "isPercentage": "${this.isPercentage}"}]}`;
    return this.migrateProgress;
  }

  updateProcessed(processed: number) {
    this.processed = processed;
  }
}

class BackupExt extends BackupExtensionAbility {
  private progressInfo: MigrateProgressInfo = new MigrateProgressInfo();

  // 如下代码中，appJob方法为模拟的实际业务代码，args为appJob方法的参数，用于提交到taskpool中，开启子线程进行工作
  async onBackup() {
    console.info(`onBackup begin`);
    let args = 100; // args为appJob方法的参数
    let jobTask: taskpool.Task = new taskpool.LongTask(appJob, this.progressInfo, args);
    try {
      await taskpool.execute(jobTask, taskpool.Priority.LOW);
    } catch (error) {
      console.error("onBackup error." + error.message);
    }
    taskpool.terminateTask(jobTask); // 需要手动销毁
    console.info(`onBackup end`);
  }

  async onRestore() {
    console.info(`onRestore begin`);
    let args = 100; // args为appJob方法的参数
    let jobTask: taskpool.Task = new taskpool.LongTask(appJob, this.progressInfo, args);
    try {
      await taskpool.execute(jobTask, taskpool.Priority.LOW);
    } catch (error) {
      console.error("onRestore error." + error.message);
    }
    taskpool.terminateTask(jobTask); // 需要手动销毁
    console.info(`onRestore end`);
  }


  onProcess(): string {
    console.info(`onProcess begin`);
    return this.progressInfo.getMigrateProgress();
  }
}

@Concurrent
function appJob(progressInfo: MigrateProgressInfo, args: number) : string {
  console.info(`appJob begin, args is: ` + args);
  // 在业务执行时刷新已处理进度
  let currentProcessed: number = 0;
  // 模拟业务实际逻辑
  for (let i = 0; i < args; i++) {
    currentProcessed = i;
    progressInfo.updateProcessed(currentProcessed);
  }
  return "ok";
}

```

## onRelease

```TypeScript
onRelease(scenario: int): Promise<void>
```

Callback to be called before extension ability exits. Developer could override this method to clean abnormal data.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scenario | int | 是 | The value 1 indicates backup and the value 2 indicates restoration. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function |

**示例：**

```TypeScript
// 以清理文件为例
import { BackupExtensionAbility, fileIo } from '@kit.CoreFileKit';

const SCENARIO_BACKUP: number = 1;
const SCENARIO_RESTORE: number = 2;
// 需要清理的临时目录
let filePath: string = '/data/storage/el2/base/.temp/';

class BackupExt extends BackupExtensionAbility {
  async onRelease(scenario: number): Promise<void> {
    try {
      if (scenario == SCENARIO_BACKUP) {
        // 备份场景，应用自行实现处理，以清理备份产生的临时文件为例
        console.info(`onRelease begin`);
        await fileIo.rmdir(filePath);
        console.info(`onRelease end, rmdir succeed`);
      }
      if (scenario == SCENARIO_RESTORE) {
        // 恢复场景，应用自行实现处理，以清理恢复产生的临时文件为例
        console.info(`onRelease begin`);
        await fileIo.rmdir(filePath);
        console.info(`onRelease end, rmdir succeed`);
      }
    } catch (error) {
      console.error(`onRelease failed with error. Code: ${error.code}, message: ${error.message}`);
    }
  }
}

```

## onRestore

```TypeScript
onRestore(bundleVersion: BundleVersion): void
```

Callback to be called when the restore procedure is started. Developer could override this method to restore from copies for various bundle versions.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleVersion | BundleVersion | 是 | Bundle version to be restore. |

**示例：**

```TypeScript
import { BackupExtensionAbility, BundleVersion } from '@kit.CoreFileKit';

class BackupExt extends BackupExtensionAbility {
  async onRestore(bundleVersion : BundleVersion) {
    console.info(`onRestore ok ${JSON.stringify(bundleVersion)}`);
  }
}

```

## onRestoreEx

```TypeScript
onRestoreEx(bundleVersion: BundleVersion, restoreInfo: string): string | Promise<string>
```

Callback to be called when the restore procedure is started. Developer could override this method to restore.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleVersion | BundleVersion | 是 | Bundle version to be restore. |
| restoreInfo | string | 是 | RestoreInfo to be restore, the param is a JSON string,  it is an array, each array element includes detail and type now. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Return restore result, support promise. the result is a JSON string,  it includes type, errorCode and errorInfo now. |

**示例：**

```TypeScript
import { BackupExtensionAbility, BundleVersion } from '@kit.CoreFileKit';
interface ErrorInfo {
  type: string,
  errorCode: number,
  errorInfo: string
}
class BackupExt extends BackupExtensionAbility {
  // 异步实现
  async onRestoreEx(bundleVersion : BundleVersion, restoreInfo: string): Promise<string> {
    try {
      if (restoreInfo == "") {
        // 当restoreInfo为空时，应用根据业务自行做处理。
        console.info("restoreInfo is empty");
      }
      console.info(`onRestoreEx ok ${JSON.stringify(bundleVersion)}`);
      let errorInfo: ErrorInfo = {
        type: "ErrorInfo",
        errorCode: 0,
        errorInfo: "app customized error info"
      }
      return JSON.stringify(errorInfo);
    } catch (err) {
      console.error(`onRestoreEx error. Code:${err.code}, message:${err.message}`);
    }
    return "";
  }
}


import { BackupExtensionAbility, BundleVersion } from '@kit.CoreFileKit';
interface ErrorInfo {
  type: string,
  errorCode: number,
  errorInfo: string
}

class BackupExt extends BackupExtensionAbility {
  // 同步实现
  onRestoreEx(bundleVersion : BundleVersion, restoreInfo: string): string {
    try {
      if (restoreInfo == "") {
        // 当restoreInfo为空时，应用根据业务自行做处理。
        console.info("restoreInfo is empty");
      }
      console.info(`onRestoreEx ok ${JSON.stringify(bundleVersion)}`);
      let errorInfo: ErrorInfo = {
        type: "ErrorInfo",
        errorCode: 0,
        errorInfo: "app customized error info"
      }
      return JSON.stringify(errorInfo);
    } catch (err) {
      console.error(`onRestoreEx error. Code:${err.code}, message:${err.message}`);
    }
    return "";
  }
}


```

## context

```TypeScript
context: BackupExtensionContext
```

Indicates backup extension ability context.

**类型：** BackupExtensionContext

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

