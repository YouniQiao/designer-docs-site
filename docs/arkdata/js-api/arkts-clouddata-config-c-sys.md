# Config

提供配置端云协同的方法，包括云同步打开、关闭、清除数据、数据变化通知。

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudData } from '@kit.ArkData';
```

## batchQueryLastSyncInfo

```TypeScript
static batchQueryLastSyncInfo(
        accountId: string,
        bundleInfos: Array<BundleInfo>
    ): Promise<Record<string, Record<string, SyncInfo>>>
```

批量查询上一次端云同步的信息，使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| bundleInfos | Array&lt;BundleInfo> | Yes | 批量查询的应用信息数组。取值范围：数组长度为[1, 30]，超过该范围返回14800001错误码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, Record&lt;string, SyncInfo>>> | Promise对象，返回应用包名以及对应数据库的上一次端云同步信息结果集。外层Record的键为应用  包名，内层Record的键为数据库名。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed,  usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 801 | Capability not supported  because the device does not support the device-cloud capability. |
| 14800001 | Invalid arguments. Possible causes: 1. the accountId is empty;  2. the bundlename is null; 3. the number of bundleInfos exceeds the upper limit or the number is 0. |

## changeAppCloudSwitch

```TypeScript
static changeAppCloudSwitch(
      accountId: string,
      bundleName: string,
      status: boolean,
      callback: AsyncCallback<void>
    ): void
```

修改单个应用端云协同开关，使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| bundleName | string | Yes | 应用包名。 |
| status | boolean | Yes | 应用的端云协同开关信息。true为打开该应用端云开关，false为关闭该应用端云开关。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当修改单个应用端云协同开关成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let account: string = 'test_id';
let bundleName: string = 'test_bundleName';
try {
  cloudData.Config.changeAppCloudSwitch(account, bundleName, true, (err: BusinessError) => {
    if (err === undefined) {
      console.info('Succeeded in changing App cloud switch');
    } else {
      console.error(`Failed to change App cloud switch. Code: ${err.code}, message: ${err.message}`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## changeAppCloudSwitch

```TypeScript
static changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean): Promise<void>
```

修改单个应用端云协同开关，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| bundleName | string | Yes | 应用包名。 |
| status | boolean | Yes | 应用的端云协同开关信息。true为打开该应用端云开关，false为关闭该应用端云开关。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let account: string = 'test_id';
let bundleName: string = 'test_bundleName';
try {
  cloudData.Config.changeAppCloudSwitch(account, bundleName, true).then(() => {
    console.info('Succeeded in changing App cloud switch');
  }).catch((err: BusinessError) => {
    console.error(`Failed to change App cloud switch. Code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## changeAppCloudSwitch

```TypeScript
static changeAppCloudSwitch(
      accountId: string,
      bundleName: string,
      status: boolean,
      config?: SwitchConfig
    ): Promise<void>
```

修改单个应用端云协同开关，使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| bundleName | string | Yes | 应用包名。 |
| status | boolean | Yes | 应用的端云协同开关信息。true为打开该应用端云开关，false为关闭该应用端云开关。 |
| config | SwitchConfig | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let account: string = 'test_id';
let bundleName: string = 'test_bundleName';
let config: cloudData.SwitchConfig = {
  dbInfo: {
    'test_storeName1': {
      enable: true,
      tableInfo: {
        'test_tableName1': true,
        'test_tableName2': false
      }
    }
  }
}
try {
  cloudData.Config.changeAppCloudSwitch(account, bundleName, true, config).then(() => {
    console.info('Succeeded in changing App cloud switch');
  }).catch((err: BusinessError) => {
    console.error(`Failed to change App cloud switch. Code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## clear

```TypeScript
static clear(
      accountId: string,
      appActions: Record<string, ClearAction>,
      callback: AsyncCallback<void>
    ): void
```

清除本地下载的云端数据，使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| appActions | Record&lt;string, ClearAction> | Yes | 要清除数据的应用信息及清除规则。 [since 10 - 10] |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当清除本地下载的云端数据成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let account: string = "test_id";
type dataType = Record<string, cloudData.ClearAction>
let appActions: dataType = {
  'test_bundleName1': cloudData.ClearAction.CLEAR_CLOUD_INFO,
  'test_bundleName2': cloudData.ClearAction.CLEAR_CLOUD_DATA_AND_INFO
};
try {
  cloudData.Config.clear(account, appActions, (err: BusinessError) => {
    if (err === undefined) {
      console.info('Succeeding in clearing cloud data');
    } else {
      console.error(`Failed to clear cloud data. Code: ${err.code}, message: ${err.message}`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## clear

```TypeScript
static clear(accountId: string, appActions: Record<string, ClearAction>): Promise<void>
```

清除本地下载的云端数据，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| appActions | Record&lt;string, ClearAction> | Yes | 要清除数据的应用信息及清除规则。 [since 11] |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by  VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let account: string = "test_id";
type dataType = Record<string, cloudData.ClearAction>;
let appActions: dataType = {
  'test_bundleName1': cloudData.ClearAction.CLEAR_CLOUD_INFO,
  'test_bundleName2': cloudData.ClearAction.CLEAR_CLOUD_DATA_AND_INFO
};
try {
  cloudData.Config.clear(account, appActions).then(() => {
    console.info('Succeeding in clearing cloud data');
  }).catch((err: BusinessError) => {
    console.error(`Failed to clear cloud data. Code: ${err.code}, message: ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## clear

```TypeScript
static clear(
      accountId: string,
      appActions: Record<string, ClearAction>,
      config?: Record<string, ClearConfig>
    ): Promise<void>
```

清除本地下载的云端数据，使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| appActions | Record&lt;string, ClearAction> | Yes | 要清除数据的应用信息及清除规则。 |
| config | Record&lt;string, ClearConfig> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let account: string = "test_id";
let appActions: Record<string, cloudData.ClearAction> = {
  'test_bundleName1': cloudData.ClearAction.CLEAR_CLOUD_INFO,
  'test_bundleName2': cloudData.ClearAction.CLEAR_CLOUD_DATA_AND_INFO,
  'test_bundleName3': cloudData.ClearAction.CLEAR_CLOUD_NONE,
};
let config: Record<stringm, cloudData.ClearConfig> = {
  'test_bundleName': {
    dbInfo: {
      'test_storeName': {
        action: cloudData.ClearAction.CLEAR_CLOUD_INFO,
        tableInfo: {
          'test_tableName1': cloudData.ClearAction.CLEAR_CLOUD_INFO,
          'test_tableName2': cloudData.ClearAction.CLEAR_CLOUD_DATA_AND_INFO,
        }
      }
    }
  }
}
try {
  cloudData.Config.clear(account, appActions, config).then(() => {
    console.info('Succeeding in clearing cloud data');
  }).catch((err: BusinessError) => {
    console.error(`Failed to clear cloud data. Code: ${err.code}, message: ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## cloudSync

```TypeScript
static cloudSync(
      bundleName: string,
      storeId: string,
      mode: relationalStore.SyncMode,
      progress: Callback<relationalStore.ProgressDetails>
    ): Promise<void>
```

对指定应用的数据进行端云同步，使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 待端云同步数据的应用包名。 |
| storeId | string | Yes | 待端云同步的数据库名。 |
| mode | relationalStore.SyncMode | Yes | 端云同步类型。 |
| progress | Callback&lt;relationalStore.ProgressDetails> | Yes | 同步进度回调。返回ProgressDetails实例对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed,  usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 801 | Capability not supported. |
| 14800001 | Invalid arguments. Possible causes: 1. Empty conditions;  2. Missing GROUP BY clause. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { relationalStore } from '@kit.ArkData';

try{
  cloudData.Config.cloudSync("bundleName", "storeId", relationalStore.SyncMode.SYNC_MODE_TIME_FIRST, (progress)=>{
    console.info('Succeeded in getting progress details.');
  }).then(() => {
      console.info('Succeeded in syncing cloud data.');
  }).catch((err: BusinessError) => {
      console.error(`Failed to sync cloud data. Code: ${err.code}, message: ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to sync cloud data. Code: ${e.code}, message: ${e.message}`);
}

```

## cloudSyncEx

```TypeScript
static cloudSyncEx(
        bundleInfo: BundleInfo,
        config: relationalStore.CloudSyncConfig,
        progress: Callback<relationalStore.ProgressDetails>
    ): Promise<void>
```

对指定应用的数据按照云同步配置信息进行端云同步，当 [CloudSyncConfig](docroot://reference/apis-arkdata/js-apis-data-relationalStore-sys.md#cloudsyncconfig)中的 downloadOnly为true时，端云同步仅把云侧数据同步到本地，使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleInfo | BundleInfo | Yes | 应用包信息配置。BundleInfo的实例对象。 |
| config | relationalStore.CloudSyncConfig | Yes | 云同步配置。 |
| progress | Callback&lt;relationalStore.ProgressDetails> | Yes | 进度回调函数。返回ProgressDetails实例对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed,  usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application is not a system application. |
| 801 | Capability not supported  because the device does not support the device-cloud capability. |
| 14800001 | Invalid arguments. Possible causes: 1. Empty conditions. |

## disableCloud

```TypeScript
static disableCloud(accountId: string, callback: AsyncCallback<void>): void
```

关闭端云协同，使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当关闭端云协同成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let account: string = 'test_id';
try {
  cloudData.Config.disableCloud(account, (err: BusinessError) => {
    if (err === undefined) {
      console.info('Succeeded in disabling cloud');
    } else {
      console.error(`Failed to disableCloud. Code: ${err.code}, message: ${err.message}`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## disableCloud

```TypeScript
static disableCloud(accountId: string): Promise<void>
```

关闭端云协同，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let account: string = 'test_id';
try {
  cloudData.Config.disableCloud(account).then(() => {
    console.info('Succeeded in disabling cloud');
  }).catch((err: BusinessError) => {
    console.error(`Failed to disableCloud. Code: ${err.code}, message: ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## enableCloud

```TypeScript
static enableCloud(
      accountId: string,
      switches: Record<string, boolean>,
      callback: AsyncCallback<void>
    ): void
```

打开端云协同开关，使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| switches | Record&lt;string, boolean> | Yes | 各应用的端云协同开关信息。true为打开该应用端云开关，false为关闭该应用端云开关。 [since 11] |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当打开端云协同功能成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let account: string = 'test_id';
let switches: Record<string, boolean> = { 'test_bundleName1': true, 'test_bundleName2': false };
try {
  cloudData.Config.enableCloud(account, switches, (err: BusinessError) => {
    if (err === undefined) {
      console.info('Succeeded in enabling cloud');
    } else {
      console.error(`Failed to enable.Code: ${err.code}, message: ${err.message}`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## enableCloud

```TypeScript
static enableCloud(accountId: string, switches: Record<string, boolean>): Promise<void>
```

打开端云协同开关，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| switches | Record&lt;string, boolean> | Yes | 各应用的端云协同开关信息。true为打开该应用端云开关，false为关闭该应用端云开关。 [since 11] |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by  VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let account: string = 'test_id';
let switches: Record<string, boolean> = { 'test_bundleName1': true, 'test_bundleName2': false };
try {
  cloudData.Config.enableCloud(account, switches).then(() => {
    console.info('Succeeded in enabling cloud');
  }).catch((err: BusinessError) => {
    console.error(`Failed to enable.Code: ${err.code}, message: ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## notifyDataChange

```TypeScript
static notifyDataChange(extInfo: ExtraData, userId?: int): Promise<void>
```

通知云端的数据变更，可以通过extInfo中的extraData字段指定变更的数据库名和表名，可通过userId指定用户ID，使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extInfo | ExtraData | Yes | 透传数据，包含通知数据变更后的应用信息。 |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, which  is usually returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let eventId: string = "cloud_data_change";
let extraData: string = '{"data":"{"accountId":"aaa","bundleName":"com.bbb.xxx","containerName":"alias", "databaseScopes": ["private", "shared"],"recordTypes":"["xxx","yyy","zzz"]"}"}';
let userId: number = 100;
try {
  cloudData.Config.notifyDataChange({
    eventId: eventId, extraData: extraData
  }, userId).then(() => {
    console.info('Succeeded in notifying the change of data');
  }).catch((err: BusinessError) => {
    console.error(`Failed to notify the change of data. Code: ${err.code}, message: ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## notifyDataChange

```TypeScript
static notifyDataChange(extInfo: ExtraData, callback: AsyncCallback<void>): void
```

通知云端的数据变更，可以通过extInfo中的extraData字段指定变更的数据库名和表名，使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extInfo | ExtraData | Yes | 透传数据，包含通知数据变更后的应用信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当数据变更通知成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, which  is usually returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let eventId: string = "cloud_data_change";
let extraData: string = '{"data":"{"accountId":"aaa","bundleName":"com.bbb.xxx","containerName":"alias", "databaseScopes": ["private", "shared"],"recordTypes":"["xxx","yyy","zzz"]"}"}';
try {
  cloudData.Config.notifyDataChange({
    eventId: eventId, extraData: extraData
  }, (err: BusinessError) => {
    if (err === undefined) {
      console.info('Succeeded in notifying the change of data');
    } else {
      console.error(`Failed to notify the change of data. Code: ${err.code}, message: ${err.message}`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## notifyDataChange

```TypeScript
static notifyDataChange(extInfo: ExtraData, userId: int, callback: AsyncCallback<void>): void
```

通知云端的数据变更，可以通过extInfo中的extraData字段指定变更的数据库名和表名，可通过userId指定用户ID，使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extInfo | ExtraData | Yes | 透传数据，包含通知数据变更后的应用信息。 |
| userId | int | Yes | 用户ID，对应为系统中现有的用户ID。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当数据变更通知成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, which  is usually returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let eventId: string = "cloud_data_change";
let extraData: string = '{"data":"{"accountId":"aaa","bundleName":"com.bbb.xxx","containerName":"alias", "databaseScopes": ["private", "shared"],"recordTypes":"["xxx","yyy","zzz"]"}"}';
let userId: number = 100;
try {
  cloudData.Config.notifyDataChange({
    eventId: eventId, extraData: extraData
  }, userId, (err: BusinessError) => {
    if (err === undefined) {
      console.info('Succeeded in notifying the change of data');
    } else {
      console.error(`Failed to notify the change of data. Code: ${err.code}, message: ${err.message}`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## notifyDataChange

```TypeScript
static notifyDataChange(accountId: string, bundleName: string): Promise<void>
```

通知云端的数据变更，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| bundleName | string | Yes | 应用包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let account: string = 'test_id';
let bundleName: string = 'test_bundleName';
try {
  cloudData.Config.notifyDataChange(account, bundleName).then(() => {
    console.info('Succeeded in notifying the change of data');
  }).catch((err: BusinessError) => {
    console.error(`Failed to notify the change of data. Code: ${err.code}, message: ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## notifyDataChange

```TypeScript
static notifyDataChange(accountId: string, bundleName: string, callback: AsyncCallback<void>): void
```

通知云端的数据变更，使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| bundleName | string | Yes | 应用包名。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当通知云端的数据变更成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let account: string = 'test_id';
let bundleName: string = 'test_bundleName';
try {
  cloudData.Config.notifyDataChange(account, bundleName, (err: BusinessError) => {
    if (err === undefined) {
      console.info('Succeeded in notifying the change of data');
    } else {
      console.error(`Failed to notify the change of data. Code: ${err.code}, message: ${err.message}`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## offSyncInfoChanged

```TypeScript
static offSyncInfoChanged(
        bundleInfos: Array<BundleInfo>,
        progress?: Callback<Record<string, Record<string, SyncInfo>>>
    ): void
```

取消订阅应用同步信息变化，使用callback异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleInfos | Array&lt;BundleInfo> | Yes | 取消订阅的应用信息数组。取值范围：数组长度为[1, 30]，超过该范围返回14800001错误码。取消订阅时应用信息的storeId需要与订  阅时保持一致。 |
| progress | Callback&lt;Record&lt;string, Record&lt;string, SyncInfo>>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed,  usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 801 | Capability not supported  because the device does not support the device-cloud capability. |
| 14800001 | Invalid arguments. Possible causes: 1. bundlename is null;  2. the number of bundleInfos exceeds the upper limit or the number is 0. |

## onSyncInfoChanged

```TypeScript
static onSyncInfoChanged(
        bundleInfos: Array<BundleInfo>,
        progress: Callback<Record<string, Record<string, SyncInfo>>>
    ): void
```

订阅应用同步信息变化，使用callback异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleInfos | Array&lt;BundleInfo> | Yes | 订阅的应用信息数组。取值范围：数组长度为[1, 30]，超过该范围返回14800001错误码。 |
| progress | Callback&lt;Record&lt;string, Record&lt;string, SyncInfo>>> | Yes | 回调函数。返回应用包名以及对应数据库的同步信息结果集。外层Record的键为应用  包名，内层Record的键为数据库名。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed,  usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 801 | Capability not supported  because the device does not support the device-cloud capability. |
| 14800001 | Invalid arguments. Possible causes: 1. bundlename is null;  2. the number of bundleInfos exceeds the upper limit or the number is 0. |

## queryLastSyncInfo

```TypeScript
static queryLastSyncInfo(
        accountId: string,
        bundleName: string,
        storeId?: string
    ): Promise<Record<string, SyncInfo>>
```

查询上一次端云同步信息，使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| bundleName | string | Yes | 应用包名。 |
| storeId | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, SyncInfo>> | 返回数据库名以及上一次端云同步的信息结果集。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const accountId:string = "accountId";
const bundleName:string = "bundleName";
const storeId:string = "storeId";
try {
    cloudData.Config.queryLastSyncInfo(accountId, bundleName, storeId).then((result) => {
    	console.info(`Succeeded in querying last syncinfo. Info is ${JSON.stringify(result)}`);
	}).catch((err: BusinessError) => {
    	console.error(`Failed to query last syncinfo. Error code is ${err.code}, message is ${err.message}`);
	});
} catch(e) {
    let error = e as BusinessError;
  	console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## queryStatistics

```TypeScript
static queryStatistics(
        accountId: string,
        bundleName: string,
        storeId?: string
    ): Promise<Record<string, Array<StatisticInfo>>>
```

查询端云统计信息，返回未同步、已同步且端云信息一致和已同步且端云信息不一致的统计信息，使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 已登录的云账号ID。 |
| bundleName | string | Yes | 应用包名。 |
| storeId | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, Array&lt;StatisticInfo>>> | 返回以表名为键、统计信息数组为值的结果集。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const accountId:string = "accountId";
const bundleName:string = "bundleName";
const storeId:string = "storeId";

cloudData.Config.queryStatistics(accountId, bundleName, storeId).then((result) => {
    console.info(`Succeeded in querying statistics. Info is ${JSON.stringify(result)}`);
}).catch((err: BusinessError) => {
    console.error(`Failed to query statistics. Error code is ${err.code}, message is ${err.message}`);
});

```

## setGlobalCloudStrategy

```TypeScript
static setGlobalCloudStrategy(strategy: StrategyType, param?: Array<commonType.ValueType>): Promise<void>
```

设置全局云同步策略，使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | StrategyType | Yes | 配置的策略类型。 |
| param | Array&lt;commonType.ValueType> | No | 策略参数。不填写时默认为空，默认取消所有配置。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

cloudData.Config.setGlobalCloudStrategy(cloudData.StrategyType.NETWORK, [cloudData.NetWorkStrategy.WIFI]).then(() => {
    console.info('Succeeded in setting the global cloud strategy');
}).catch((err: BusinessError) => {
    console.error(`Failed to set global cloud strategy. Code: ${err.code}, message: ${err.message}`);
});

```

## stopCloudSync

```TypeScript
static stopCloudSync(bundleInfos: Array<BundleInfo>): Promise<void>
```

停止与云端的数据同步，使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CLOUDDATA_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleInfos | Array&lt;BundleInfo> | Yes | 应用包信息配置数组。取值范围：数组长度为[1, 30]，超过该范围返回14800001错误码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed,  usually the result returned by VerifyAccessToken. |
| 202 | if permission verification failed, application which is not a system  application uses system API. |
| 801 | Capability not supported  because the device does not support the device-cloud capability. |
| 14800001 | Invalid arguments. Possible causes: 1. bundlename is null;  2. the number of bundleInfos exceeds the upper limit or the number is 0. |

