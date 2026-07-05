# Updater

提供系统在线更新功能的工具类。

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

检查新版本信息。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CheckResult> | Yes | 回调函数，返回搜包结果对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

检查新版本信息。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CheckResult> | Promise对象，返回搜包结果对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

清除异常状态，版本下载、安装异常时，清理升级包文件及升级状态。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | 版本摘要信息。 |
| clearOptions | ClearOptions | Yes | 清除选项。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当清除异常成功时，err为undefined，否则为错误对象。 |

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

清除异常状态，版本下载、安装异常时，清理升级包文件及升级状态。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | 版本摘要信息。 |
| clearOptions | ClearOptions | Yes | 清除选项。 |

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

下载新版本。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | 版本摘要信息。 |
| downloadOptions | DownloadOptions | Yes | 下载选项。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当下载成功时，err为undefined，否则为错误对象。 |

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

下载新版本。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | 版本摘要信息。 |
| downloadOptions | DownloadOptions | Yes | 下载选项。 |

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

获取当前版本描述信息。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptionOptions | DescriptionOptions | Yes | 描述文件选项。 |
| callback | AsyncCallback&lt;Array&lt;ComponentDescription>> | Yes | 回调函数，返回当前版本描述信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter verification failed. |
| 11500104 | IPC error. |

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

获取当前版本描述信息。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptionOptions | DescriptionOptions | Yes | 描述文件选项。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ComponentDescription>> | Promise对象，返回当前版本描述信息。 |

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

获取当前版本信息。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CurrentVersionInfo> | Yes | 回调函数，返回当前版本信息对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

获取当前版本信息。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CurrentVersionInfo> | Promise对象，返回当前版本信息对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

获取新版本描述信息。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | 版本摘要信息。 |
| descriptionOptions | DescriptionOptions | Yes | 描述文件选项。 |
| callback | AsyncCallback&lt;Array&lt;ComponentDescription>> | Yes | 回调函数，返回新版本描述信息。 |

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

获取新版本描述信息。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | 版本摘要信息。 |
| descriptionOptions | DescriptionOptions | Yes | 描述文件选项。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ComponentDescription>> | Promise对象，返回新版本描述信息。 |

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

获取新版本信息。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;NewVersionInfo> | Yes | 回调函数，返回新版本信息对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

获取新版本信息。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NewVersionInfo> | Promise对象，返回新版本信息对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

获取升级任务信息。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;TaskInfo> | Yes | 回调函数，返回升级任务信息对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

获取升级任务信息。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;TaskInfo> | Promise对象，返回任务信息对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

获取升级策略信息。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;UpgradePolicy> | Yes | 回调函数，返回升级策略信息对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

获取升级策略。通过promise方式作为异步方法。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;UpgradePolicy> | Promise对象，返回升级策略信息对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

暂停下载新版本。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | 版本摘要信息。 |
| pauseDownloadOptions | PauseDownloadOptions | Yes | 暂停下载选项。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当暂停下载成功时，err为undefined，否则为错误对象。 |

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

暂停下载新版本。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | 版本摘要信息。 |
| pauseDownloadOptions | PauseDownloadOptions | Yes | 暂停下载选项。 |

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

恢复下载新版本。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | 版本摘要信息。 |
| resumeDownloadOptions | ResumeDownloadOptions | Yes | 恢复下载选项。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当恢复下载成功时，err为undefined，否则为错误对象。 |

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

恢复下载新版本。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | 版本摘要信息。 |
| resumeDownloadOptions | ResumeDownloadOptions | Yes | 恢复下载选项。 |

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

设置升级策略。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | UpgradePolicy | Yes | 升级策略。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置升级策略成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

设置升级策略。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | UpgradePolicy | Yes | 升级策略。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

终止升级。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当终止升级执行成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

终止升级。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

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

升级新版本。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | 版本摘要信息。 |
| upgradeOptions | UpgradeOptions | Yes | 更新选项。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当升级执行成功时，err为undefined，否则为错误对象。 |

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

升级新版本。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_SYSTEM

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| versionDigestInfo | VersionDigestInfo | Yes | 版本摘要信息。 |
| upgradeOptions | UpgradeOptions | Yes | 更新选项。 |

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

