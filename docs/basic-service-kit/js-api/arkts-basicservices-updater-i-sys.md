# Updater (System API)

Defines a tool class for updating the system online.

**Since:** 9

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

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CheckResult&gt; | Yes | Callback used to return the package check result. |

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
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.checkNewVersion((err: BusinessError, result: update.CheckResult) => {
  console.info(`checkNewVersion isExistNewVersion  ${result?.isExistNewVersion}`);
});
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## checkNewVersion

```TypeScript
checkNewVersion(): Promise<CheckResult>
```

Checks whether a new version is available. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CheckResult&gt; | Promise used to return the package check result. |

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
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.checkNewVersion().then((result: update.CheckResult) => {
    console.info(`checkNewVersion isExistNewVersion: ${result.isExistNewVersion}`);
    // Version digest information
    console.info(`checkNewVersion versionDigestInfo: ${result.newVersionInfo.versionDigestInfo.versionDigest}`);
    }).catch((err: BusinessError)=>{
      console.error(`checkNewVersion promise error ${JSON.stringify(err)}`);
    });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}


```

## clearError

```TypeScript
clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions, callback: AsyncCallback<void>): void
```

Clears errors. If an exception occurs during version download or installation, the update package and update
status are cleared. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | Version digest information. |
| clearOptions | ClearOptions | Yes | Clear options. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If errors are cleared successfully,**err** is **undefined**; otherwise, **err** is an error object. |

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
  versionDigest: "versionDigest" // Version digest information in the check result
};

// Options for clearing errors
const clearOptions: update.ClearOptions = {
  status: update.UpgradeStatus.UPGRADE_FAIL,
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.clearError(versionDigestInfo, clearOptions, (err: BusinessError) => {
    console.info(`clearError error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## clearError

```TypeScript
clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions): Promise<void>
```

Clears errors. If an exception occurs during version download or installation, the update package and update
status are cleared. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | Version digest information. |
| clearOptions | ClearOptions | Yes | Clear options. |

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

// Version digest information
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: "versionDigest" // Version digest information in the check result
};

// Options for clearing errors
const clearOptions: update.ClearOptions = {
  status: update.UpgradeStatus.UPGRADE_FAIL,
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.clearError(versionDigestInfo, clearOptions).then(() => {
    console.info(`clearError success`);
  }).catch((err: BusinessError) => {
    console.error(`clearError error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
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

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | Version digest information. |
| downloadOptions | DownloadOptions | Yes | Download options. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the download is successful,**err** is **undefined**; otherwise, **err** is an error object. |

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
  versionDigest: "versionDigest" // Version digest information in the check result
};

// Download options
const downloadOptions: update.DownloadOptions = {
  allowNetwork: update.NetType.CELLULAR, // Whether to allow download over data network
  order: update.Order.DOWNLOAD // Download
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.download(versionDigestInfo, downloadOptions, (err: BusinessError) => {
    console.info(`download error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## download

```TypeScript
download(versionDigestInfo: VersionDigestInfo, downloadOptions: DownloadOptions): Promise<void>
```

Downloads the new version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | Version digest information. |
| downloadOptions | DownloadOptions | Yes | Download options. |

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

// Version digest information
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: "versionDigest" // Version digest information in the check result
};

// Download options
const downloadOptions: update.DownloadOptions = {
  allowNetwork: update.NetType.CELLULAR, // Whether to allow download over data network
   order: update.Order.DOWNLOAD // Download
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.download(versionDigestInfo, downloadOptions).then(() => {
    console.info(`download start`);
  }).catch((err: BusinessError) => {
    console.error(`download error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
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

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptionOptions | DescriptionOptions | Yes | Options of the description file. |
| callback | AsyncCallback&lt;Array&lt;ComponentDescription&gt;&gt; | Yes | Callback used to return the description of thecurrent version. |

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
  language: "zh-cn" // Chinese
};

try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.getCurrentVersionDescription(descriptionOptions, (err, info) => {
    console.info(`getCurrentVersionDescription info ${JSON.stringify(info)}`);
    console.info(`getCurrentVersionDescription err ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## getCurrentVersionDescription

```TypeScript
getCurrentVersionDescription(descriptionOptions: DescriptionOptions): Promise<Array<ComponentDescription>>
```

Obtains the description of the current version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptionOptions | DescriptionOptions | Yes | Options of the description file. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ComponentDescription&gt;&gt; | Promise used to return the description of the current version. |

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
  language: "zh-cn" // Chinese
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.getCurrentVersionDescription(descriptionOptions).then((info: Array<update.ComponentDescription>) => {
    console.info(`getCurrentVersionDescription promise info ${JSON.stringify(info)}`);
  }).catch((err: BusinessError) => {
    console.error(`getCurrentVersionDescription promise error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## getCurrentVersionInfo

```TypeScript
getCurrentVersionInfo(callback: AsyncCallback<CurrentVersionInfo>): void
```

Obtains information about the current version. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CurrentVersionInfo&gt; | Yes | Callback used to return information about the currentversion. |

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
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.getCurrentVersionInfo((err: BusinessError, info: update.CurrentVersionInfo) => {
    console.info(`info osVersion = ${info?.osVersion}`);
    console.info(`info deviceName = ${info?.deviceName}`);
    console.info(`info displayVersion = ${info?.versionComponents[0].displayVersion}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## getCurrentVersionInfo

```TypeScript
getCurrentVersionInfo(): Promise<CurrentVersionInfo>
```

Obtains information about the current version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CurrentVersionInfo&gt; | Promise used to return information about the current version. |

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
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.getCurrentVersionInfo().then((info: update.CurrentVersionInfo) => {
    console.info(`info osVersion = ${info.osVersion}`);
    console.info(`info deviceName = ${info.deviceName}`);
    console.info(`info displayVersion = ${info.versionComponents[0].displayVersion}`);
  }).catch((err: BusinessError) => {
    console.error(`getCurrentVersionInfo promise error ${JSON.stringify(err)}`);
  });
} catch(error) {
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

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | Version digest information. |
| descriptionOptions | DescriptionOptions | Yes | Options of the description file. |
| callback | AsyncCallback&lt;Array&lt;ComponentDescription&gt;&gt; | Yes | Callback used to return the description of thenew version. |

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
  versionDigest: "versionDigest" // Version digest information in the check result
};

// Options of the description file
const descriptionOptions: update.DescriptionOptions = {
  format: update.DescriptionFormat.STANDARD, // Standard format
  language: "zh-cn" // Chinese
};

try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.getNewVersionDescription(versionDigestInfo, descriptionOptions, (err, info) => {
    console.info(`getNewVersionDescription info ${JSON.stringify(info)}`);
    console.info(`getNewVersionDescription err ${JSON.stringify(err)}`);
  });
} catch(error) {
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

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | Version digest information. |
| descriptionOptions | DescriptionOptions | Yes | Options of the description file. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ComponentDescription&gt;&gt; | Promise used to return the description of the new version. |

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
  versionDigest: "versionDigest" // Version digest information in the check result
};

// Options of the description file
const descriptionOptions: update.DescriptionOptions = {
  format: update.DescriptionFormat.STANDARD, // Standard format
  language: "zh-cn" // Chinese
};

try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.getNewVersionDescription(versionDigestInfo, descriptionOptions)
    .then((info: Array<update.ComponentDescription>)=> {
    console.info(`getNewVersionDescription promise info ${JSON.stringify(info)}`);
  }).catch((err: BusinessError) => {
    console.error(`getNewVersionDescription promise error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## getNewVersionInfo

```TypeScript
getNewVersionInfo(callback: AsyncCallback<NewVersionInfo>): void
```

Obtains information about the new version. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;NewVersionInfo&gt; | Yes | Callback used to return the new version information. |

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
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.getNewVersionInfo((err: BusinessError, info: update.NewVersionInfo) => {
    console.info(`info displayVersion = ${info?.versionComponents[0].displayVersion}`);
    console.info(`info innerVersion = ${info?.versionComponents[0].innerVersion}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## getNewVersionInfo

```TypeScript
getNewVersionInfo(): Promise<NewVersionInfo>
```

Obtains information about the new version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NewVersionInfo&gt; | Promise used to return the new version information. |

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
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.getNewVersionInfo().then((info: update.NewVersionInfo) => {
    console.info(`info displayVersion = ${info.versionComponents[0].displayVersion}`);
    console.info(`info innerVersion = ${info.versionComponents[0].innerVersion}`);
  }).catch((err: BusinessError) => {
    console.error(`getNewVersionInfo promise error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## getTaskInfo

```TypeScript
getTaskInfo(callback: AsyncCallback<TaskInfo>): void
```

Obtains information about the update task. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;TaskInfo&gt; | Yes | Callback used to return information about the update task. |

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
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.getTaskInfo((err: BusinessError, info: update.TaskInfo) => {
    console.info(`getTaskInfo isexistTask= ${info?.existTask}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## getTaskInfo

```TypeScript
getTaskInfo(): Promise<TaskInfo>
```

Obtains information about the update task. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;TaskInfo&gt; | Promise used to return information about the update task. |

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
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.getTaskInfo().then((info: update.TaskInfo) => {
    console.info(`getTaskInfo isexistTask= ${info.existTask}`);
  }).catch((err: BusinessError) => {
    console.error(`getTaskInfo promise error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## getUpgradePolicy

```TypeScript
getUpgradePolicy(callback: AsyncCallback<UpgradePolicy>): void
```

Obtains the update policy. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;UpgradePolicy&gt; | Yes | Callback used to return the update policy. |

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
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.getUpgradePolicy((err: BusinessError, policy: update.UpgradePolicy) => {
    console.info(`policy downloadStrategy = ${policy?.downloadStrategy}`);
    console.info(`policy autoUpgradeStrategy = ${policy?.autoUpgradeStrategy}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## getUpgradePolicy

```TypeScript
getUpgradePolicy(): Promise<UpgradePolicy>
```

Obtains the update policy. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;UpgradePolicy&gt; | Promise used to return the update policy. |

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
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.getUpgradePolicy().then((policy: update.UpgradePolicy) => {
    console.info(`policy downloadStrategy = ${policy.downloadStrategy}`);
    console.info(`policy autoUpgradeStrategy = ${policy.autoUpgradeStrategy}`);
  }).catch((err: BusinessError)  => {
    console.error(`getUpgradePolicy promise error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
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
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.off(eventClassifyInfo, (eventInfo: update.EventInfo) => {
    console.info(`updater off ${JSON.stringify(eventInfo)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
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
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.on(eventClassifyInfo, (eventInfo: update.EventInfo) => {
    console.info(`updater on ${JSON.stringify(eventInfo)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
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

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | Version digest information. |
| pauseDownloadOptions | PauseDownloadOptions | Yes | Options for pausing download. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the download is pausedsuccessfully, **err** is **undefined**; otherwise, **err** is an error object. |

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
  versionDigest: "versionDigest" // Version digest information in the check result
};

// Options for pausing download
const pauseDownloadOptions: update.PauseDownloadOptions = {
  isAllowAutoResume: true // Whether to allow automatic resuming of download
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.pauseDownload(versionDigestInfo, pauseDownloadOptions, (err: BusinessError) => {
    console.info(`pauseDownload error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## pauseDownload

```TypeScript
pauseDownload(versionDigestInfo: VersionDigestInfo, pauseDownloadOptions: PauseDownloadOptions): Promise<void>
```

Pauses download of the new version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | Version digest information. |
| pauseDownloadOptions | PauseDownloadOptions | Yes | Options for pausing download. |

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

// Version digest information
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: "versionDigest" // Version digest information in the check result
};

// Options for pausing download
const pauseDownloadOptions: update.PauseDownloadOptions = {
  isAllowAutoResume: true // Whether to allow automatic resuming of download
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.pauseDownload(versionDigestInfo, pauseDownloadOptions).then(() => {
    console.info(`pauseDownload`);
  }).catch((err: BusinessError)  => {
    console.error(`pauseDownload error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
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

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | Version digest information. |
| resumeDownloadOptions | ResumeDownloadOptions | Yes | Options for resuming download. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the download is resumedsuccessfully, **err** is **undefined**; otherwise, **err** is an error object. |

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
const versionDigestInfo : update.VersionDigestInfo= {
  versionDigest: "versionDigest" // Version digest information in the check result
};

// Options for resuming download
const resumeDownloadOptions : update.ResumeDownloadOptions= {
  allowNetwork: update.NetType.CELLULAR, // Whether to allow download over data network
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.resumeDownload(versionDigestInfo, resumeDownloadOptions, (err: BusinessError) => {
    console.info(`resumeDownload error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## resumeDownload

```TypeScript
resumeDownload(versionDigestInfo: VersionDigestInfo, resumeDownloadOptions: ResumeDownloadOptions): Promise<void>
```

Resumes download of the new version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | Version digest information. |
| resumeDownloadOptions | ResumeDownloadOptions | Yes | Options for resuming download. |

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

// Version digest information
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: "versionDigest" // Version digest information in the check result
};

// Options for resuming download
const resumeDownloadOptions: update.ResumeDownloadOptions = {
  allowNetwork: update.NetType.CELLULAR, // Whether to allow download over data network
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.resumeDownload(versionDigestInfo, resumeDownloadOptions).then(() => {
    console.info(`resumeDownload start`);
  }).catch((err: BusinessError) => {
    console.error(`resumeDownload error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## setUpgradePolicy

```TypeScript
setUpgradePolicy(policy: UpgradePolicy, callback: AsyncCallback<void>): void
```

Sets the update policy. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | UpgradePolicy | Yes | Update policy. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the upgrade policy is setsuccessfully, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const policy: update.UpgradePolicy = {
  downloadStrategy: false,
  autoUpgradeStrategy: false,
  autoUpgradePeriods: [ { start: 120, end: 240 }] // Automatic update period, in minutes
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.setUpgradePolicy(policy, (err: BusinessError) => {
    console.info(`setUpgradePolicy result: ${err}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## setUpgradePolicy

```TypeScript
setUpgradePolicy(policy: UpgradePolicy): Promise<void>
```

Sets the update policy. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | UpgradePolicy | Yes | Update policy. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const policy: update.UpgradePolicy = {
  downloadStrategy: false,
  autoUpgradeStrategy: false,
  autoUpgradePeriods: [ { start: 120, end: 240 }] // Automatic update period, in minutes
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.setUpgradePolicy(policy).then(() => {
    console.info(`setUpgradePolicy success`);
  }).catch((err: BusinessError) => {
    console.error(`setUpgradePolicy promise error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## terminateUpgrade

```TypeScript
terminateUpgrade(callback: AsyncCallback<void>): void
```

Terminates the update. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the update is terminatedsuccessfully, **err** is **undefined**; otherwise, **err** is an error object. |

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
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.terminateUpgrade((err: BusinessError) => {
    console.info(`terminateUpgrade error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## terminateUpgrade

```TypeScript
terminateUpgrade(): Promise<void>
```

Terminates the update. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

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
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.terminateUpgrade().then(() => {
    console.info(`terminateUpgrade success`);
  }).catch((err: BusinessError) => {
    console.error(`terminateUpgrade error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## upgrade

```TypeScript
upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions, callback: AsyncCallback<void>): void
```

Updates the version. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | Version digest information. |
| upgradeOptions | UpgradeOptions | Yes | Update options. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the update is successful,**err** is **undefined**; otherwise, **err** is an error object. |

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
  versionDigest: "versionDigest" // Version digest information in the check result
};

// Installation options
const upgradeOptions: update.UpgradeOptions = {
  order: update.Order.INSTALL // Installation command
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.upgrade(versionDigestInfo, upgradeOptions, (err: BusinessError) => {
    console.info(`upgrade error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

## upgrade

```TypeScript
upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions): Promise<void>
```

Updates the version. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | Version digest information. |
| upgradeOptions | UpgradeOptions | Yes | Update options. |

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

// Version digest information
const versionDigestInfo: update.VersionDigestInfo = {
  versionDigest: "versionDigest" // Version digest information in the check result
};

// Installation options
const upgradeOptions: update.UpgradeOptions = {
  order: update.Order.INSTALL // Installation command
};
try {
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: "com.ohos.ota.updateclient",
    businessType: {
      vendor: update.BusinessVendor.PUBLIC,
      subType: update.BusinessSubType.FIRMWARE
    }
  };
  let updater = update.getOnlineUpdater(upgradeInfo);
  updater.upgrade(versionDigestInfo, upgradeOptions).then(() => {
    console.info(`upgrade start`);
  }).catch((err: BusinessError) => {
    console.error(`upgrade error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get updater error: ${error}`);
}

```

