# Updater (System API)

Defines a tool class for updating the system online.

**Since:** 9

<!--Device-update-export interface Updater--><!--Device-update-export interface Updater-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { update } from '@kit.BasicServicesKit';
```

## checkNewVersion

```TypeScript
checkNewVersion(callback: AsyncCallback<CheckResult>): void
```

Checks whether a new version is available. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-checkNewVersion(callback: AsyncCallback<CheckResult>): void--><!--Device-Updater-checkNewVersion(callback: AsyncCallback<CheckResult>): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<CheckResult> | Yes | Callback used to return the package check result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Check for a new version and obtain the check result using a callback.
  onlineUpdater.checkNewVersion((checkNewVersionError: BusinessError,  
    checkResult: update.CheckResult) => {
      // Handle the error.
      if (checkNewVersionError) {
        console.error(`checkNewVersion error, code:${checkNewVersionError.code}, message:${checkNewVersionError.message}.`);
        return;
      }
      console.info(`checkNewVersion isExistNewVersion  ${checkResult?.isExistNewVersion}`);
    });
} catch (error) {
  let errInfo: BusinessError = error as BusinessError;
  console.error(`Failed to get updater. Code: ${errInfo.code}, message: ${errInfo.message}.`);
}

```

## checkNewVersion

```TypeScript
checkNewVersion(): Promise<CheckResult>
```

Checks whether a new version is available. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-checkNewVersion(): Promise<CheckResult>--><!--Device-Updater-checkNewVersion(): Promise<CheckResult>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<CheckResult> | Promise used to return the package check result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Check for a new version.
  onlineUpdater.checkNewVersion().then((result: update.CheckResult) => {
    console.info(`checkNewVersion isExistNewVersion: ${result.isExistNewVersion}`);
    // Version digest information
    console.info(`checkNewVersion versionDigestInfo: ${result.newVersionInfo.versionDigestInfo.versionDigest}`);
    }).catch((checkNewVersionError: BusinessError) => {
      console.error(`checkNewVersion promise error, code:${checkNewVersionError.code}, message:${checkNewVersionError.message}.`);
    });
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`Fail to checkNewVersion. Code: ${err.code}, message: ${err.message}.`);
}

```

## clearError

```TypeScript
clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions, callback: AsyncCallback<void>): void
```

Clears errors. If an exception occurs during version download or installation, the update package and update status are cleared. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions, callback: AsyncCallback<void>): void--><!--Device-Updater-clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | [VersionDigestInfo](arkts-basicservices-update-versiondigestinfo-i-sys.md) | Yes | Version digest information. |
| clearOptions | [ClearOptions](arkts-basicservices-update-clearoptions-i-sys.md) | Yes | Clear options. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If errors are cleared successfully,**err** is **undefined**; otherwise, **err** is an error object. |

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

// Version digest information. Call checkNewVersion to check for a new version and confirm the value of isExistNewVersion is true first.
// Obtain the value from the newVersionInfo.versionDigestInfo field in the returned result.
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: 'versionDigest' // Obtain the actual value from the result returned by checkNewVersion.
};

// Options for clearing errors
const clearOptions: update.ClearOptions = {
  status: update.UpgradeStatus.UPGRADE_FAIL,
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Clear errors and use a callback to return the result.
  onlineUpdater.clearError(versionDigestInfo, clearOptions, (clearFailError: BusinessError) => {
    if (clearFailError) {
      // Error clearing fails.
      console.error(`clearError execute error. code:${clearFailError.code}, message:${clearFailError.message}.`);
    } else {
      // Error clearing succeeds.
      console.info(`clearError execute success`);
    };
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## clearError

```TypeScript
clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions): Promise<void>
```

Clears errors. If an exception occurs during version download or installation, the update package and update status are cleared. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions): Promise<void>--><!--Device-Updater-clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions): Promise<void>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | [VersionDigestInfo](arkts-basicservices-update-versiondigestinfo-i-sys.md) | Yes | Version digest information. |
| clearOptions | [ClearOptions](arkts-basicservices-update-clearoptions-i-sys.md) | Yes | Clear options. |

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

// Version digest information. Call checkNewVersion to check for a new version and confirm the value of isExistNewVersion is true first.
// Obtain the value from the newVersionInfo.versionDigestInfo field in the returned result.
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: 'versionDigest' // Obtain the actual value from the result returned by checkNewVersion.
};

// Options for clearing errors
const clearOptions: update.ClearOptions = {
  status: update.UpgradeStatus.UPGRADE_FAIL,
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Clear errors.
  onlineUpdater.clearError(versionDigestInfo, clearOptions).then(() => {
    console.info(`clearError execute success`);
  }).catch((clearFailError: BusinessError) => {
    console.error(`clearError execute error. code:${clearFailError.code}, message:${clearFailError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## download

```TypeScript
download(
      versionDigestInfo: VersionDigestInfo,
      downloadOptions: DownloadOptions,
      callback: AsyncCallback<void>
    ): void
```

Downloads the new version. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-download(
      versionDigestInfo: VersionDigestInfo,
      downloadOptions: DownloadOptions,
      callback: AsyncCallback<void>
    ): void--><!--Device-Updater-download(
      versionDigestInfo: VersionDigestInfo,
      downloadOptions: DownloadOptions,
      callback: AsyncCallback<void>
    ): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | [VersionDigestInfo](arkts-basicservices-update-versiondigestinfo-i-sys.md) | Yes | Version digest information. |
| downloadOptions | [DownloadOptions](arkts-basicservices-update-downloadoptions-i-sys.md) | Yes | Download options. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the download is successful,**err** is **undefined**; otherwise, **err** is an error object. |

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

// Version digest information. Call checkNewVersion to check for a new version and confirm the value of isExistNewVersion is true first.
// Obtain the value from the newVersionInfo.versionDigestInfo field in the returned result.
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: 'versionDigest' // Obtain the actual value from the result returned by checkNewVersion.
};

// Download options
const downloadOptions: update.DownloadOptions = {
  allowNetwork: update.NetType.CELLULAR, // Whether to allow download over data network
  order: update.Order.DOWNLOAD // Download
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Download the upgrade package.
  onlineUpdater.download(versionDigestInfo, downloadOptions, (downloadError: BusinessError) => {
    if (downloadError) {
      // Download failed.
      console.error(`download error. code:${downloadError.code}, message:${downloadError.message}.`);
    } else {
      // The download is successful.
      console.info(`download success`);
    };
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## download

```TypeScript
download(versionDigestInfo: VersionDigestInfo, downloadOptions: DownloadOptions): Promise<void>
```

Downloads the new version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-download(versionDigestInfo: VersionDigestInfo, downloadOptions: DownloadOptions): Promise<void>--><!--Device-Updater-download(versionDigestInfo: VersionDigestInfo, downloadOptions: DownloadOptions): Promise<void>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | [VersionDigestInfo](arkts-basicservices-update-versiondigestinfo-i-sys.md) | Yes | Version digest information. |
| downloadOptions | [DownloadOptions](arkts-basicservices-update-downloadoptions-i-sys.md) | Yes | Download options. |

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

// Version digest information. Call checkNewVersion to check for a new version and confirm the value of isExistNewVersion is true first.
// Obtain the value from the newVersionInfo.versionDigestInfo field in the returned result.
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: 'versionDigest' // Obtain the actual value from the result returned by checkNewVersion.
};

// Download options
const downloadOptions: update.DownloadOptions = {
  allowNetwork: update.NetType.CELLULAR, // Whether to allow download over data network
  order: update.Order.DOWNLOAD // Download
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Download the upgrade package.
  onlineUpdater.download(versionDigestInfo, downloadOptions).then(() => {
    console.info(`download start`);
  }).catch((downloadError: BusinessError) => {
    console.error(`download error. code:${downloadError.code}, message:${downloadError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## getCurrentVersionDescription

```TypeScript
getCurrentVersionDescription(
      descriptionOptions: DescriptionOptions,
      callback: AsyncCallback<Array<ComponentDescription>>
    ): void
```

Obtains the description of the current version. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-getCurrentVersionDescription(
      descriptionOptions: DescriptionOptions,
      callback: AsyncCallback<Array<ComponentDescription>>
    ): void--><!--Device-Updater-getCurrentVersionDescription(
      descriptionOptions: DescriptionOptions,
      callback: AsyncCallback<Array<ComponentDescription>>
    ): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptionOptions | [DescriptionOptions](arkts-basicservices-update-descriptionoptions-i-sys.md) | Yes | Options of the description file. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<Array<ComponentDescription>> | Yes | Callback used to return the description of the current version. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter verification failed. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
// Options of the description file
const descriptionOptions: update.DescriptionOptions = {
  format: update.DescriptionFormat.STANDARD, // Standard format
  language: 'zh-cn' // Chinese
};

try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);

  // Obtain the description of the current version.
  onlineUpdater.getCurrentVersionDescription(descriptionOptions, (currentDescriptionError, info) => {
    if (currentDescriptionError) {
      console.error(`getCurrentVersionDescription error, code:${currentDescriptionError.code}, message:${currentDescriptionError.message}.`);
      return;
    }
    console.info(`getCurrentVersionDescription info ${JSON.stringify(info)}`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## getCurrentVersionDescription

```TypeScript
getCurrentVersionDescription(descriptionOptions: DescriptionOptions): Promise<Array<ComponentDescription>>
```

Obtains the description of the current version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-getCurrentVersionDescription(descriptionOptions: DescriptionOptions): Promise<Array<ComponentDescription>>--><!--Device-Updater-getCurrentVersionDescription(descriptionOptions: DescriptionOptions): Promise<Array<ComponentDescription>>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptionOptions | [DescriptionOptions](arkts-basicservices-update-descriptionoptions-i-sys.md) | Yes | Options of the description file. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<ComponentDescription>> | Promise used to return the description of the current version. |

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
// Options of the description file
const descriptionOptions: update.DescriptionOptions = {
  format: update.DescriptionFormat.STANDARD, // Standard format
  language: 'zh-cn' // Chinese
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);

  // Obtain the description of the current version.
  onlineUpdater.getCurrentVersionDescription(descriptionOptions).then((info: Array<update.ComponentDescription>) => {
    console.info(`getCurrentVersionDescription promise info ${JSON.stringify(info)}`);
  }).catch((descriptionError: BusinessError) => {
    console.error(`getCurrentVersionDescription error, code:${descriptionError.code}, message:${descriptionError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## getCurrentVersionInfo

```TypeScript
getCurrentVersionInfo(callback: AsyncCallback<CurrentVersionInfo>): void
```

Obtains information about the current version. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-getCurrentVersionInfo(callback: AsyncCallback<CurrentVersionInfo>): void--><!--Device-Updater-getCurrentVersionInfo(callback: AsyncCallback<CurrentVersionInfo>): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<CurrentVersionInfo> | Yes | Callback used to return information about the current version. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);

  // Obtain the current version information and obtain the version details using a callback.
  onlineUpdater.getCurrentVersionInfo((currentVersionInfoError: BusinessError,
    currentVersionInfo: update.CurrentVersionInfo) => {
    if (currentVersionInfoError) {
      console.error(`getCurrentVersionInfo error, code:${currentVersionInfoError.code}, message:${currentVersionInfoError.message}.`);
      return;
    }
    console.info(`info osVersion = ${currentVersionInfo?.osVersion}`);
    console.info(`info deviceName = ${currentVersionInfo?.deviceName}`);
    console.info(`info displayVersion = ${currentVersionInfo?.versionComponents[0].displayVersion}`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## getCurrentVersionInfo

```TypeScript
getCurrentVersionInfo(): Promise<CurrentVersionInfo>
```

Obtains information about the current version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-getCurrentVersionInfo(): Promise<CurrentVersionInfo>--><!--Device-Updater-getCurrentVersionInfo(): Promise<CurrentVersionInfo>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<CurrentVersionInfo> | Promise used to return information about the current version. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Obtain the current version information.
  onlineUpdater.getCurrentVersionInfo().then((info: update.CurrentVersionInfo) => {
    console.info(`info osVersion = ${info.osVersion}`);
    console.info(`info deviceName = ${info.deviceName}`);
    console.info(`info displayVersion = ${info.versionComponents[0].displayVersion}`);
  }).catch((currentVersionInfoError: BusinessError) => {
    console.error(`getCurrentVersionInfo error, code:${currentVersionInfoError.code}, message:${currentVersionInfoError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## getNewVersionDescription

```TypeScript
getNewVersionDescription(
      versionDigestInfo: VersionDigestInfo,
      descriptionOptions: DescriptionOptions,
      callback: AsyncCallback<Array<ComponentDescription>>
    ): void
```

Obtains the description of the new version. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-getNewVersionDescription(
      versionDigestInfo: VersionDigestInfo,
      descriptionOptions: DescriptionOptions,
      callback: AsyncCallback<Array<ComponentDescription>>
    ): void--><!--Device-Updater-getNewVersionDescription(
      versionDigestInfo: VersionDigestInfo,
      descriptionOptions: DescriptionOptions,
      callback: AsyncCallback<Array<ComponentDescription>>
    ): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | [VersionDigestInfo](arkts-basicservices-update-versiondigestinfo-i-sys.md) | Yes | Version digest information. |
| descriptionOptions | [DescriptionOptions](arkts-basicservices-update-descriptionoptions-i-sys.md) | Yes | Options of the description file. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<Array<ComponentDescription>> | Yes | Callback used to return the description of the new version. |

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

// Version digest information
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: 'versionDigest' // Obtain the version digest information from the checkNewVersion result.
};

// Options of the description file
const descriptionOptions: update.DescriptionOptions = {
  format: update.DescriptionFormat.STANDARD, // Standard format
  language: 'zh-cn' // Chinese
};

try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Obtain the description of the new version.
  onlineUpdater.getNewVersionDescription(versionDigestInfo, descriptionOptions, (descriptionError, descriptionInfo) => {
    if (descriptionError) {
      console.error(`getNewVersionDescription error, code:${descriptionError.code}, message:${descriptionError.message}.`);
      return;
    }
    console.info(`getNewVersionDescription info ${JSON.stringify(descriptionInfo)}`);
  });
} catch (error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## getNewVersionDescription

```TypeScript
getNewVersionDescription(
      versionDigestInfo: VersionDigestInfo,
      descriptionOptions: DescriptionOptions
    ): Promise<Array<ComponentDescription>>
```

Obtains the description of the new version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-getNewVersionDescription(
      versionDigestInfo: VersionDigestInfo,
      descriptionOptions: DescriptionOptions
    ): Promise<Array<ComponentDescription>>--><!--Device-Updater-getNewVersionDescription(
      versionDigestInfo: VersionDigestInfo,
      descriptionOptions: DescriptionOptions
    ): Promise<Array<ComponentDescription>>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | [VersionDigestInfo](arkts-basicservices-update-versiondigestinfo-i-sys.md) | Yes | Version digest information. |
| descriptionOptions | [DescriptionOptions](arkts-basicservices-update-descriptionoptions-i-sys.md) | Yes | Options of the description file. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<ComponentDescription>> | Promise used to return the description of the new version. |

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

// Version digest information. Call checkNewVersion to check for a new version and confirm the value of isExistNewVersion is true first.
// Obtain the value from the newVersionInfo.versionDigestInfo field in the returned result.
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: 'versionDigest' // Obtain the actual value from the result returned by checkNewVersion.
};

// Options of the description file
const descriptionOptions: update.DescriptionOptions = {
  format: update.DescriptionFormat.STANDARD, // Standard format
  language: 'zh-cn' // Chinese
};

try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);

  // Obtain the description of the new version.
  onlineUpdater.getNewVersionDescription(versionDigestInfo, descriptionOptions)
    .then((info: Array<update.ComponentDescription>) => {
    console.info(`getNewVersionDescription promise info ${JSON.stringify(info)}`);
  }).catch((descriptionError: BusinessError) => {
    console.error(`getNewVersionDescription promise error, code:${descriptionError.code}, message:${descriptionError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## getNewVersionInfo

```TypeScript
getNewVersionInfo(callback: AsyncCallback<NewVersionInfo>): void
```

Obtains information about the new version. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-getNewVersionInfo(callback: AsyncCallback<NewVersionInfo>): void--><!--Device-Updater-getNewVersionInfo(callback: AsyncCallback<NewVersionInfo>): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<NewVersionInfo> | Yes | Callback used to return the new version information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Obtain the new version information and obtain the version details using a callback.
  onlineUpdater.getNewVersionInfo((getNewVersionInfoError: BusinessError, newInfo: update.NewVersionInfo) => {
    if (getNewVersionInfoError) {
      console.error(`getNewVersionInfo error, code:${getNewVersionInfoError.code}, message:${getNewVersionInfoError.message}.`);
      return;
    }
    console.info(`info displayVersion = ${newInfo?.versionComponents[0].displayVersion}`);
    console.info(`info innerVersion = ${newInfo?.versionComponents[0].innerVersion}`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## getNewVersionInfo

```TypeScript
getNewVersionInfo(): Promise<NewVersionInfo>
```

Obtains information about the new version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-getNewVersionInfo(): Promise<NewVersionInfo>--><!--Device-Updater-getNewVersionInfo(): Promise<NewVersionInfo>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<NewVersionInfo> | Promise used to return the new version information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Obtain new version information.
  onlineUpdater.getNewVersionInfo().then((info: update.NewVersionInfo) => {
    console.info(`info displayVersion = ${info.versionComponents[0].displayVersion}`);
    console.info(`info innerVersion = ${info.versionComponents[0].innerVersion}`);
  }).catch((getNewVersionInfoError: BusinessError) => {
    console.error(`getNewVersionInfo promise error, code:${getNewVersionInfoError.code}, message:${getNewVersionInfoError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## getTaskInfo

```TypeScript
getTaskInfo(callback: AsyncCallback<TaskInfo>): void
```

Obtains information about the update task. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-getTaskInfo(callback: AsyncCallback<TaskInfo>): void--><!--Device-Updater-getTaskInfo(callback: AsyncCallback<TaskInfo>): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<TaskInfo> | Yes | Callback used to return information about the update task. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);

  // Obtain the update task information and use a callback to receive the task status.
  onlineUpdater.getTaskInfo((taskInfoError: BusinessError, taskInfo: update.TaskInfo) => {
    if (taskInfoError) {
      console.error(`getTaskInfo error, code:${taskInfoError.code}, message:${taskInfoError.message}.`);
      return;
    }
    console.info(`getTaskInfo existTask= ${taskInfo?.existTask}`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## getTaskInfo

```TypeScript
getTaskInfo(): Promise<TaskInfo>
```

Obtains information about the update task. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-getTaskInfo(): Promise<TaskInfo>--><!--Device-Updater-getTaskInfo(): Promise<TaskInfo>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<TaskInfo> | Promise used to return information about the update task. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Obtain information about the update task.
  onlineUpdater.getTaskInfo().then((info: update.TaskInfo) => {
    console.info(`getTaskInfo existTask= ${info.existTask}`);
  }).catch((taskInfoError: BusinessError) => {
    // Handle the failure of obtaining the task information.
    console.error(`Failed to get task info. code:${taskInfoError.code}, message:${taskInfoError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## getUpgradePolicy

```TypeScript
getUpgradePolicy(callback: AsyncCallback<UpgradePolicy>): void
```

Obtains the update policy. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-getUpgradePolicy(callback: AsyncCallback<UpgradePolicy>): void--><!--Device-Updater-getUpgradePolicy(callback: AsyncCallback<UpgradePolicy>): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<UpgradePolicy> | Yes | Callback used to return the update policy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Obtain the upgrade policy and use a callback to receive the policy configuration.
  onlineUpdater.getUpgradePolicy((upgradePolicyError: BusinessError, policy: update.UpgradePolicy) => {
    if (upgradePolicyError) {
      console.error(`getUpgradePolicy error. code:${upgradePolicyError.code}, message:${upgradePolicyError.message}.`);
      return;
    }
    console.info(`policy downloadStrategy = ${policy?.downloadStrategy}`);
    console.info(`policy autoUpgradeStrategy = ${policy?.autoUpgradeStrategy}`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## getUpgradePolicy

```TypeScript
getUpgradePolicy(): Promise<UpgradePolicy>
```

Obtains the update policy. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-getUpgradePolicy(): Promise<UpgradePolicy>--><!--Device-Updater-getUpgradePolicy(): Promise<UpgradePolicy>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<UpgradePolicy> | Promise used to return the update policy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Obtain the upgrade policy.
  onlineUpdater.getUpgradePolicy().then((policy: update.UpgradePolicy) => {
    console.info(`policy downloadStrategy = ${policy.downloadStrategy}`);
    console.info(`policy autoUpgradeStrategy = ${policy.autoUpgradeStrategy}`);
  }).catch((upgradePolicyError: BusinessError) => {
    console.error(`getUpgradePolicy error. code:${upgradePolicyError.code}, message:${upgradePolicyError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## off

```TypeScript
off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void
```

Disables listening for update events. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-Updater-off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void--><!--Device-Updater-off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void-End-->

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
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Unregister the event listener.
  onlineUpdater.off(eventClassifyInfo, (eventInfo: update.EventInfo) => {
    console.info(`onlineUpdater off ${JSON.stringify(eventInfo)}`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## on

```TypeScript
on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void
```

Enables listening for update events. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-Updater-on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void--><!--Device-Updater-on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void-End-->

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
  extraInfo: '' // Additional information. If this parameter is left empty, no additional information is available.
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Register an event listener to monitor the update status in real time.
  onlineUpdater.on(eventClassifyInfo, (eventInfo: update.EventInfo) => {
    console.info(`updater on ${JSON.stringify(eventInfo)}`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## pauseDownload

```TypeScript
pauseDownload(
      versionDigestInfo: VersionDigestInfo,
      pauseDownloadOptions: PauseDownloadOptions,
      callback: AsyncCallback<void>
    ): void
```

Pauses download of the new version. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-pauseDownload(
      versionDigestInfo: VersionDigestInfo,
      pauseDownloadOptions: PauseDownloadOptions,
      callback: AsyncCallback<void>
    ): void--><!--Device-Updater-pauseDownload(
      versionDigestInfo: VersionDigestInfo,
      pauseDownloadOptions: PauseDownloadOptions,
      callback: AsyncCallback<void>
    ): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | [VersionDigestInfo](arkts-basicservices-update-versiondigestinfo-i-sys.md) | Yes | Version digest information. |
| pauseDownloadOptions | [PauseDownloadOptions](arkts-basicservices-update-pausedownloadoptions-i-sys.md) | Yes | Options for pausing download. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the download is paused successfully, **err** is **undefined**; otherwise, **err** is an error object. |

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

// Version digest information. Call checkNewVersion to check for a new version and confirm the value of isExistNewVersion is true first.
// Obtain the value from the newVersionInfo.versionDigestInfo field in the returned result.
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: 'versionDigest' // Obtain the actual value from the result returned by checkNewVersion.
};

// Options for pausing download
const pauseDownloadOptions: update.PauseDownloadOptions = {
  isAllowAutoResume: true // Whether to allow automatic resuming of download
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Pause the download of the update package.
  onlineUpdater.pauseDownload(versionDigestInfo, pauseDownloadOptions,
    (pauseDownloadError: BusinessError) => {
    if (pauseDownloadError) {
      console.error(`pauseDownload error. code:${pauseDownloadError.code}, message:${pauseDownloadError.message}.`);
    } else {
      console.info(`pauseDownload success`);
    };
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## pauseDownload

```TypeScript
pauseDownload(versionDigestInfo: VersionDigestInfo, pauseDownloadOptions: PauseDownloadOptions): Promise<void>
```

Pauses download of the new version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-pauseDownload(versionDigestInfo: VersionDigestInfo, pauseDownloadOptions: PauseDownloadOptions): Promise<void>--><!--Device-Updater-pauseDownload(versionDigestInfo: VersionDigestInfo, pauseDownloadOptions: PauseDownloadOptions): Promise<void>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | [VersionDigestInfo](arkts-basicservices-update-versiondigestinfo-i-sys.md) | Yes | Version digest information. |
| pauseDownloadOptions | [PauseDownloadOptions](arkts-basicservices-update-pausedownloadoptions-i-sys.md) | Yes | Options for pausing download. |

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

// Version digest information. Call checkNewVersion to check for a new version and confirm the value of isExistNewVersion is true first.
// Obtain the value from the newVersionInfo.versionDigestInfo field in the returned result.
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: 'versionDigest' // Obtain the actual value from the result returned by checkNewVersion.
};

// Options for pausing download
const pauseDownloadOptions: update.PauseDownloadOptions = {
  isAllowAutoResume: true // Whether to allow automatic resuming of download
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Pause the download of the update package.
  onlineUpdater.pauseDownload(versionDigestInfo, pauseDownloadOptions).then(() => {
    console.info(`pauseDownload`);
  }).catch((pauseDownloadError: BusinessError) => {
    console.error(`pauseDownload error. code:${pauseDownloadError.code}, message:${pauseDownloadError.message}.`);
    
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## resumeDownload

```TypeScript
resumeDownload(
      versionDigestInfo: VersionDigestInfo,
      resumeDownloadOptions: ResumeDownloadOptions,
      callback: AsyncCallback<void>
    ): void
```

Resumes download of the new version. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-resumeDownload(
      versionDigestInfo: VersionDigestInfo,
      resumeDownloadOptions: ResumeDownloadOptions,
      callback: AsyncCallback<void>
    ): void--><!--Device-Updater-resumeDownload(
      versionDigestInfo: VersionDigestInfo,
      resumeDownloadOptions: ResumeDownloadOptions,
      callback: AsyncCallback<void>
    ): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | [VersionDigestInfo](arkts-basicservices-update-versiondigestinfo-i-sys.md) | Yes | Version digest information. |
| resumeDownloadOptions | [ResumeDownloadOptions](arkts-basicservices-update-resumedownloadoptions-i-sys.md) | Yes | Options for resuming download. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the download is resumed successfully, **err** is **undefined**; otherwise, **err** is an error object. |

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

// Version digest information. Call checkNewVersion to check for a new version and confirm the value of isExistNewVersion is true first.
// Obtain the value from the newVersionInfo.versionDigestInfo field in the returned result.
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: 'versionDigest' // Obtain the actual value from the result returned by checkNewVersion.
};

// Options for resuming download
const resumeDownloadOptions: update.ResumeDownloadOptions = {
  allowNetwork: update.NetType.CELLULAR, // Whether to allow download over data network
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Resume the download of the update package.
  onlineUpdater.resumeDownload(versionDigestInfo, resumeDownloadOptions,
    (resumeDownloadError: BusinessError) => {
    if (resumeDownloadError) {
      console.error(`resumeDownload error. code:${resumeDownloadError.code}, message:${resumeDownloadError.message}.`);
    } else {
      console.info(`resumeDownload success`);
    };
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## resumeDownload

```TypeScript
resumeDownload(versionDigestInfo: VersionDigestInfo, resumeDownloadOptions: ResumeDownloadOptions): Promise<void>
```

Resumes download of the new version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-resumeDownload(versionDigestInfo: VersionDigestInfo, resumeDownloadOptions: ResumeDownloadOptions): Promise<void>--><!--Device-Updater-resumeDownload(versionDigestInfo: VersionDigestInfo, resumeDownloadOptions: ResumeDownloadOptions): Promise<void>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | [VersionDigestInfo](arkts-basicservices-update-versiondigestinfo-i-sys.md) | Yes | Version digest information. |
| resumeDownloadOptions | [ResumeDownloadOptions](arkts-basicservices-update-resumedownloadoptions-i-sys.md) | Yes | Options for resuming download. |

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

// Version digest information. Call checkNewVersion to check for a new version and confirm the value of isExistNewVersion is true first.
// Obtain the value from the newVersionInfo.versionDigestInfo field in the returned result.
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: 'versionDigest' // Obtain the actual value from the result returned by checkNewVersion.
};

// Options for resuming download
const resumeDownloadOptions: update.ResumeDownloadOptions = {
  allowNetwork: update.NetType.CELLULAR, // Whether to allow download over data network
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Resume the download of the update package.
  onlineUpdater.resumeDownload(versionDigestInfo, resumeDownloadOptions).then(() => {
    console.info(`resumeDownload start`);
  }).catch((resumeDownloadError: BusinessError) => {
    console.error(`resumeDownload error. code:${resumeDownloadError.code}, message:${resumeDownloadError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## setUpgradePolicy

```TypeScript
setUpgradePolicy(policy: UpgradePolicy, callback: AsyncCallback<void>): void
```

Sets the update policy. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-setUpgradePolicy(policy: UpgradePolicy, callback: AsyncCallback<void>): void--><!--Device-Updater-setUpgradePolicy(policy: UpgradePolicy, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | [UpgradePolicy](arkts-basicservices-update-upgradepolicy-i-sys.md) | Yes | Update policy. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the upgrade policy is set successfully, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const upgradePolicy: update.UpgradePolicy = {
  downloadStrategy: false, // Disable automatic download.
  autoUpgradeStrategy: false, // Disable automatic upgrade.
  autoUpgradePeriods: [ { start: 120, end: 240 }] // Automatic update period, in minutes
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Set the upgrade policy and use a call back to return the result.
  onlineUpdater.setUpgradePolicy(upgradePolicy, (setUpgradePolicyError: BusinessError) => {
    if (setUpgradePolicyError) {
      console.error(`setUpgradePolicy error, code:${setUpgradePolicyError.code}, message:${setUpgradePolicyError.message}.`);
    } else {
      console.info(`setUpgradePolicy success`);
    };
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## setUpgradePolicy

```TypeScript
setUpgradePolicy(policy: UpgradePolicy): Promise<void>
```

Sets the update policy. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-setUpgradePolicy(policy: UpgradePolicy): Promise<void>--><!--Device-Updater-setUpgradePolicy(policy: UpgradePolicy): Promise<void>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | [UpgradePolicy](arkts-basicservices-update-upgradepolicy-i-sys.md) | Yes | Update policy. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const upgradePolicy: update.UpgradePolicy = {
  downloadStrategy: false, // Disable automatic download.
  autoUpgradeStrategy: false, // Disable automatic upgrade.
  autoUpgradePeriods: [ { start: 120, end: 240 }] // Automatic update period, in minutes
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Set the upgrade policy.
  onlineUpdater.setUpgradePolicy(upgradePolicy).then(() => {
    console.info(`setUpgradePolicy success`);
  }).catch((setUpgradePolicyError: BusinessError) => {
    console.error(`setUpgradePolicy promise error, code:${setUpgradePolicyError.code}, message:${setUpgradePolicyError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## terminateUpgrade

```TypeScript
terminateUpgrade(callback: AsyncCallback<void>): void
```

Terminates the update. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-terminateUpgrade(callback: AsyncCallback<void>): void--><!--Device-Updater-terminateUpgrade(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the update is terminated successfully, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Terminate the upgrade and use a callback to return the result.
  onlineUpdater.terminateUpgrade((terminateUpgradeError: BusinessError) => {
    if (terminateUpgradeError) {
      console.error(`terminateUpgrade error, code:${terminateUpgradeError.code}, message:${terminateUpgradeError.message}.`);
    } else {
      console.info(`terminateUpgrade success`);
    };
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## terminateUpgrade

```TypeScript
terminateUpgrade(): Promise<void>
```

Terminates the update. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-terminateUpgrade(): Promise<void>--><!--Device-Updater-terminateUpgrade(): Promise<void>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Terminate the upgrade task.
  onlineUpdater.terminateUpgrade().then(() => {
    console.info(`terminateUpgrade success`);
  }).catch((terminateUpgradeError: BusinessError) => {
    console.error(`terminateUpgrade error, code:${terminateUpgradeError.code}, message:${terminateUpgradeError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## upgrade

```TypeScript
upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions, callback: AsyncCallback<void>): void
```

Updates the version. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions, callback: AsyncCallback<void>): void--><!--Device-Updater-upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | [VersionDigestInfo](arkts-basicservices-update-versiondigestinfo-i-sys.md) | Yes | Version digest information. |
| upgradeOptions | [UpgradeOptions](arkts-basicservices-update-upgradeoptions-i-sys.md) | Yes | Update options. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the update is successful,**err** is **undefined**; otherwise, **err** is an error object. |

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

// Version digest information. Call checkNewVersion to check for a new version and confirm the value of isExistNewVersion is true first.
// Obtain the value from the newVersionInfo.versionDigestInfo field in the returned result.
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: 'versionDigest' // Obtain the actual value from the result returned by checkNewVersion.
};

// Installation options
const upgradeOptions: update.UpgradeOptions = {
  order: update.Order.INSTALL // Installation command
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Install the upgrade package.
  onlineUpdater.upgrade(versionDigestInfo, upgradeOptions, (upgradeError: BusinessError) => {
    if (upgradeError) {
      console.error(`upgrade error. code:${upgradeError.code}, message:${upgradeError.message}.`);
    } else {
      console.info(`upgrade success`);
    };
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

## upgrade

```TypeScript
upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions): Promise<void>
```

Updates the version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

<!--Device-Updater-upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions): Promise<void>--><!--Device-Updater-upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions): Promise<void>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | [VersionDigestInfo](arkts-basicservices-update-versiondigestinfo-i-sys.md) | Yes | Version digest information. |
| upgradeOptions | [UpgradeOptions](arkts-basicservices-update-upgradeoptions-i-sys.md) | Yes | Update options. |

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

// Version digest information. Call checkNewVersion to check for a new version and confirm the value of isExistNewVersion is true first.
// Obtain the value from the newVersionInfo.versionDigestInfo field in the returned result.
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: 'versionDigest' // Obtain the actual value from the result returned by checkNewVersion.
};

// Installation options
const upgradeOptions: update.UpgradeOptions = {
  order: update.Order.INSTALL // Installation command
};
try {
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);
  // Install the upgrade package.
  onlineUpdater.upgrade(versionDigestInfo, upgradeOptions).then(() => {
    console.info(`upgrade start`);
  }).catch((upgradeError: BusinessError) => {
    console.error(`upgrade error. code:${upgradeError.code}, message:${upgradeError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get onlineUpdater error: ${error}`);
}

```

