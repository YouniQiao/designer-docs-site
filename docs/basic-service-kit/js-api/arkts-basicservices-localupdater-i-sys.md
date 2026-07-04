# LocalUpdater (System API)

Defines a tool class for updating the local firmware.

**Since:** 9

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { update } from '@ohos.update';
```

## applyNewVersion

```TypeScript
applyNewVersion(upgradeFiles: Array<UpgradeFile>, callback: AsyncCallback<void>): void
```

Installs the update package. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeFiles | Array&lt;UpgradeFile&gt; | Yes | Update file. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the update package is installedsuccessfully, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter verification failed. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

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

Installs the update package. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeFiles | Array&lt;UpgradeFile&gt; | Yes | Update file. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter verification failed. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

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

Disables listening for update events. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventClassifyInfo | EventClassifyInfo | Yes | Event information. |
| taskCallback | UpgradeTaskCallback | No | Event callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

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

Enables listening for update events. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventClassifyInfo | EventClassifyInfo | Yes | Event information. |
| taskCallback | UpgradeTaskCallback | Yes | Event callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

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

Verifies the update package. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeFile | UpgradeFile | Yes | Update file. |
| certsFile | string | Yes | Path of the certificate file. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the verification is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter verification failed. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

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

Verifies the update package. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeFile | UpgradeFile | Yes | Update file. |
| certsFile | string | Yes | Path of the certificate file. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter verification failed. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

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

