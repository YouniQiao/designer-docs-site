# LocalUpdater

提供本地固件更新功能的工具类。

**Since:** 9

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { update } from '@kit.BasicServicesKit';
```

## applyNewVersion

```TypeScript
applyNewVersion(upgradeFiles: Array<UpgradeFile>, callback: AsyncCallback<void>): void
```

安装升级包。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeFiles | Array&lt;UpgradeFile> | Yes | 升级文件。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当安装升级包执行成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter verification failed. |
| 11500104 | IPC error. |

**Example**

```TypeScript
const upgradeFiles: Array<update.UpgradeFile> = [{
  fileType: update.ComponentType.OTA, // OTA package
  filePath: "path" // Path of the local update package
}];

try {
  let localUpdater = update.getLocalUpdater();
  localUpdater.applyNewVersion(upgradeFiles, (err) => {
    console.info(`applyNewVersion error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get localUpdater error: ${error}`);
}

```

## applyNewVersion

```TypeScript
applyNewVersion(upgradeFiles: Array<UpgradeFile>): Promise<void>
```

安装升级包。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeFiles | Array&lt;UpgradeFile> | Yes | 升级文件。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter verification failed. |
| 11500104 | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const upgradeFiles: Array<update.UpgradeFile> = [{
  fileType: update.ComponentType.OTA, // OTA package
  filePath: "path" // Path of the local update package
}];

try {
  let localUpdater = update.getLocalUpdater();
  localUpdater.applyNewVersion(upgradeFiles).then(() => {
    console.info(`applyNewVersion success`);
  }).catch((err: BusinessError) => {
    console.error(`applyNewVersion error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get localUpdater error: ${error}`);
}

```

## off

```TypeScript
off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void
```

取消注册事件监听。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventClassifyInfo | EventClassifyInfo | Yes | 事件信息。 |
| taskCallback | UpgradeTaskCallback | No | 事件回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
const eventClassifyInfo: update.EventClassifyInfo = {
  eventClassify: update.EventClassify.TASK, // Listening for update events
  extraInfo: ""
};

let onTaskUpdate: update.UpgradeTaskCallback = (eventInfo: update.EventInfo) => {
  console.info(`on eventInfo id `, eventInfo.eventId);
};

try {
  let localUpdater = update.getLocalUpdater();
  localUpdater.off(eventClassifyInfo, onTaskUpdate);
} catch(error) {
  console.error(`Fail to get localUpdater error: ${error}`);
}

```

## on

```TypeScript
on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void
```

注册事件监听。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventClassifyInfo | EventClassifyInfo | Yes | 事件信息。 |
| taskCallback | UpgradeTaskCallback | Yes | 事件回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
const eventClassifyInfo: update.EventClassifyInfo = {
  eventClassify: update.EventClassify.TASK, // Listening for update events
  extraInfo: ""
};

let onTaskUpdate: update.UpgradeTaskCallback = (eventInfo: update.EventInfo) => {
  console.info(`on eventInfo id `, eventInfo.eventId);
};

try {
  let localUpdater = update.getLocalUpdater();
  localUpdater.on(eventClassifyInfo, onTaskUpdate);
} catch(error) {
  console.error(`Fail to get localUpdater error: ${error}`);
}

```

## verifyUpgradePackage

```TypeScript
verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string, callback: AsyncCallback<void>): void
```

校验升级包。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeFile | UpgradeFile | Yes | 升级文件。 |
| certsFile | string | Yes | 证书文件路径。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当校验成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter verification failed. |
| 11500104 | IPC error. |

**Example**

```TypeScript
const upgradeFile: update.UpgradeFile = {
  fileType: update.ComponentType.OTA, // OTA package
  filePath: "path" // Path of the local update package
};

try {
  let localUpdater = update.getLocalUpdater();
  localUpdater.verifyUpgradePackage(upgradeFile, "certFilePath", (err) => {
    console.info(`verifyUpgradePackage error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get localUpdater error: ${error}`);
}

```

## verifyUpgradePackage

```TypeScript
verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string): Promise<void>
```

校验升级包。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeFile | UpgradeFile | Yes | 升级文件。 |
| certsFile | string | Yes | 证书文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter verification failed. |
| 11500104 | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const upgradeFile: update.UpgradeFile = {
  fileType: update.ComponentType.OTA, // OTA package
  filePath: "path" // Path of the local update package
};

try {
  let localUpdater = update.getLocalUpdater();
  localUpdater.verifyUpgradePackage(upgradeFile, "certFilePath").then(() => {
    console.info(`verifyUpgradePackage success`);
  }).catch((err: BusinessError) => {
    console.error(`verifyUpgradePackage error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get localUpdater error: ${error}`);
}

```

