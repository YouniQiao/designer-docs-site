# LocalUpdater (System API)

Defines a tool class for updating the local firmware.

**Since:** 9

<!--Device-update-export interface LocalUpdater--><!--Device-update-export interface LocalUpdater-End-->

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

Installs the update package. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-LocalUpdater-applyNewVersion(upgradeFiles: Array<UpgradeFile>, callback: AsyncCallback<void>): void--><!--Device-LocalUpdater-applyNewVersion(upgradeFiles: Array<UpgradeFile>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeFiles | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<UpgradeFile> | Yes | Update file. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the update package is installed successfully, **err** is **undefined**; otherwise, **err** is an error object. |

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
  filePath: '/data/local/tmp/updater.zip' // Local update package path. The user needs to download the upgrade package from the official website of the vendor or an official channel and save it to an accessible storage path of the device, for example, /data/local/tmp/updater.zip.
}];

try {
  // Obtain a LocalUpdater object.
  let localUpdater = update.getLocalUpdater();
  // Install the new version.
  localUpdater.applyNewVersion(upgradeFiles, (applyNewVersionError: BusinessError) => {
    if (applyNewVersionError) {
      console.error(`applyNewVersion error, code:${applyNewVersionError.code}, message:${applyNewVersionError.message}.`);
      return;
    }
    console.info(`applyNewVersion success`);
  });
} catch (error) {
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

<!--Device-LocalUpdater-applyNewVersion(upgradeFiles: Array<UpgradeFile>): Promise<void>--><!--Device-LocalUpdater-applyNewVersion(upgradeFiles: Array<UpgradeFile>): Promise<void>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeFiles | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<UpgradeFile> | Yes | Update file. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

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
  filePath: '/data/local/tmp/updater.zip' // Local update package path. The user needs to download the upgrade package from the official website of the vendor or an official channel and save it to an accessible storage path of the device, for example, /data/local/tmp/updater.zip.
}];

try {
  // Obtain a LocalUpdater object.
  let localUpdater = update.getLocalUpdater();
  // Install the new version.
  localUpdater.applyNewVersion(upgradeFiles).then(() => {
    console.info(`applyNewVersion success`);
  }).catch((applyNewVersionError: BusinessError) => {
    console.error(`applyNewVersion error, code:${applyNewVersionError.code}, message:${applyNewVersionError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get localUpdater error: ${error}`);
}

```

## off

```TypeScript
off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void
```

Disables listening for update events. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-LocalUpdater-off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void--><!--Device-LocalUpdater-off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventClassifyInfo | [EventClassifyInfo](arkts-basicservices-update-eventclassifyinfo-i-sys.md) | Yes | Event information. |
| taskCallback | [UpgradeTaskCallback](arkts-basicservices-update-upgradetaskcallback-t-sys.md) | No | Event callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
const eventClassifyInfo: update.EventClassifyInfo = {
  eventClassify: update.EventClassify.TASK, // Task event type
  extraInfo: ''
};
// Define the callback for task updates, which is used to process the upgrade task event.
let onTaskUpdate: update.UpgradeTaskCallback = (eventInfo: update.EventInfo) => {
  console.info(`on eventInfo id `, eventInfo.eventId);
};

try {
  // Obtain a LocalUpdater object.
  let localUpdater = update.getLocalUpdater();
  // Unregister a local upgrade event listener.
  localUpdater.off(eventClassifyInfo, onTaskUpdate);
} catch (error) {
  console.error(`Fail to get localUpdater error: ${error}`);
}

```

## on

```TypeScript
on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void
```

Enables listening for update events. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-LocalUpdater-on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void--><!--Device-LocalUpdater-on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventClassifyInfo | [EventClassifyInfo](arkts-basicservices-update-eventclassifyinfo-i-sys.md) | Yes | Event information. |
| taskCallback | [UpgradeTaskCallback](arkts-basicservices-update-upgradetaskcallback-t-sys.md) | Yes | Event callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
const eventClassifyInfo: update.EventClassifyInfo = {
  eventClassify: update.EventClassify.TASK, // Task event type
  extraInfo: ''
};
// Define the callback for task updates, which is used to process the upgrade task event.
let onTaskUpdate: update.UpgradeTaskCallback = (eventInfo: update.EventInfo) => {
  console.info(`on eventInfo id `, eventInfo.eventId);
};

try {
  // Obtain a LocalUpdater object.
  let localUpdater = update.getLocalUpdater();
  // Register a local upgrade event listener.
  localUpdater.on(eventClassifyInfo, onTaskUpdate);
} catch (error) {
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

<!--Device-LocalUpdater-verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string, callback: AsyncCallback<void>): void--><!--Device-LocalUpdater-verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeFile | [UpgradeFile](arkts-basicservices-update-upgradefile-i-sys.md) | Yes | Update file. |
| certsFile | string | Yes | Path of the certificate file. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the verification is successful,**err** is **undefined**; otherwise, **err** is an error object. |

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
  filePath: '/data/local/tmp/updater.zip' // Local update package path. The user needs to download the upgrade package from the official website of the vendor or an official channel and save it to an accessible storage path of the device, for example, /data/local/tmp/updater.zip.
};
// certsFile is the certificate file path, which needs to be downloaded from the official website of the vendor and saved to an accessible path on the device.
const certsFile = '/path/to/certificate.cert'; // Certificate file path, which needs to be downloaded from the official website of the vendor.

try {
  // Obtain a LocalUpdater object.
  let localUpdater = update.getLocalUpdater();
  // Verify the upgrade package.
  localUpdater.verifyUpgradePackage(upgradeFile, certsFile, (verifyUpgradePackageError: BusinessError) => {
    if (verifyUpgradePackageError) {
      console.error(`verifyUpgradePackage error, code:${verifyUpgradePackageError.code}, message:${verifyUpgradePackageError.message}.`);
      return;
    }
    console.info(`verifyUpgradePackage success`);
  });
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`Fail to get localUpdater. Code: ${err.code}, message: ${err.message}.`);
}

```

## verifyUpgradePackage

```TypeScript
verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string): Promise<void>
```

Verifies the update package. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-LocalUpdater-verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string): Promise<void>--><!--Device-LocalUpdater-verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string): Promise<void>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeFile | [UpgradeFile](arkts-basicservices-update-upgradefile-i-sys.md) | Yes | Update file. |
| certsFile | string | Yes | Path of the certificate file. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

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
  filePath: '/data/local/tmp/updater.zip' // Local update package path. The user needs to download the upgrade package from the official website of the vendor or an official channel and save it to an accessible storage path of the device, for example, /data/local/tmp/updater.zip.
};

// certsFile is the certificate file path, which needs to be downloaded from the official website of the vendor and saved to an accessible path on the device.
const certsFile = '/path/to/certificate.cert'; // Certificate file path, which needs to be downloaded from the official website of the vendor.

try {
  // Obtain a LocalUpdater object.
  let localUpdater = update.getLocalUpdater();
  // Verify the upgrade package.
  localUpdater.verifyUpgradePackage(upgradeFile, certsFile).then(() => {
    console.info(`verifyUpgradePackage success`);
  }).catch((verifyUpgradePackageError: BusinessError) => {
    console.error(`verifyUpgradePackage error, code:${verifyUpgradePackageError.code}, message:${verifyUpgradePackageError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get localUpdater error: ${error}`);
}

```

