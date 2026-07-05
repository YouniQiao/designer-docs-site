# PhotoAssetCustomRecordManager

Defines the class of media asset custom record manager.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## addLcdJumpCount

```TypeScript
addLcdJumpCount(ids: Array<int>): Promise<Array<int>>
```

Add lcd jump count which fileId is in ids A maximum of 500 ids can be add at once.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ids | Array&lt;int> | 是 | ids which need to add share count. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;int>> | Returns list of fileId which add failed |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 23800151 | Scenario parameters fail to pass the verification.Possible causes:  1. The ids list is empty. 2. The number of ids lists exceeds 500. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

## addShareCount

```TypeScript
addShareCount(ids: Array<int>): Promise<Array<int>>
```

Add share count which fileId is in ids A maximum of 500 ids can be add at once.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ids | Array&lt;int> | 是 | ids which need to add share count. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;int>> | Returns list of fileId which add failed |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 23800151 | Scenario parameters fail to pass the verification.Possible causes:  1. The ids list is empty. 2. The number of ids lists exceeds 500. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

## createCustomRecords

```TypeScript
createCustomRecords(customRecords: Array<PhotoAssetCustomRecord>): Promise<void>
```

Creates custom records. A maximum of 200 custom records can be created at once.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| customRecords | Array&lt;PhotoAssetCustomRecord> | 是 | Custom records. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 23800151 | Scenario parameters fail to pass the verification. Possible causes:  1. The value range of mandatory parameters in photoAssetCustomRecord does not meet the requirements.  2. The transferred record already exists. 3. The number of transferred records exceeds 200. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function example(context: Context) {
  console.info('createCustomRecords');
  let crManager = photoAccessHelper.PhotoAssetCustomRecordManager.getCustomRecordManagerInstance(context);
  let crArray:Array<photoAccessHelper.PhotoAssetCustomRecord> = [
    {fileId:1,shareCount:1,lcdJumpCount:1}
  ];
  crManager.createCustomRecords(crArray).then(() => {
    console.info('createCustomRecords successful');
  }).catch((err: BusinessError) => {
    console.error(`createCustomRecords fail with error: ${err.code}, ${err.message}`);
  });
}

```

## getCustomRecordManagerInstance

```TypeScript
static getCustomRecordManagerInstance(context: Context): PhotoAssetCustomRecordManager
```

Get media asset custom record manager instance.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PhotoAssetCustomRecordManager | Returns media asset custom record manager instance |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 23800107 | Context is invalid  @static |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(context: Context) {
  console.info('getCustomRecordManagerInstance');
  try {
    let crManager = photoAccessHelper.PhotoAssetCustomRecordManager.getCustomRecordManagerInstance(context);
  } catch(err) {
    console.error(`getCustomRecordManagerInstance failed with error: ${err.code}, ${err.message}`);
  }
}

```

## getCustomRecordManagerInstance

```TypeScript
static getCustomRecordManagerInstance(context: Context): PhotoAssetCustomRecordManager | null
```

Get media asset custom record manager instance.

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PhotoAssetCustomRecordManager | Returns media asset custom record manager instance  if operation fails, return null. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 23800107 | Context is invalid  @static |

## getCustomRecords

```TypeScript
getCustomRecords(optionCheck: FetchOptions): Promise<FetchResult<PhotoAssetCustomRecord>>
```

Get custom records.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| optionCheck | FetchOptions | 是 | Options to fetch custom records. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;PhotoAssetCustomRecord>> | Returns fetchResult of PhotoAssetCustomRecord |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 23800151 | Scenario parameters fail to pass the verification.Possible causes:  1. The filter criteria or fetchColumns that are not supported by options are transferred. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(context: Context) {
  console.info('getCustomRecords');
  let crManager = photoAccessHelper.PhotoAssetCustomRecordManager.getCustomRecordManagerInstance(context);
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  predicates.equalTo('file_id', 1);
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  crManager.getCustomRecords(fetchOption).then(async (fetchResult) => {
    let record = await fetchResult.getFirstObject();
    console.info('record file id is ' + record.fileId);
  }).catch((err: BusinessError) => {
    console.error('getCustomRecords fail with error: ${err.code}, ${err.message}');
  });
}

```

## removeCustomRecords

```TypeScript
removeCustomRecords(optionCheck: FetchOptions): Promise<void>
```

Remove custom records.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| optionCheck | FetchOptions | 是 | Options to remove custom records. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 23800151 | Scenario parameters fail to pass the verification.Possible causes:  1. The filter criteria or fetchColumns that are not supported by options are transferred. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(context: Context) {
  console.info('removeCustomRecords');
  let crManager = photoAccessHelper.PhotoAssetCustomRecordManager.getCustomRecordManagerInstance(context);
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  predicates.equalTo('file_id', 1);
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  crManager.removeCustomRecords(fetchOption).then(() => {
    console.info('removeCustomRecords successful');
  }).catch((err: BusinessError) => {
    console.error(`removeCustomRecords fail with error: ${err.code}, ${err.message}`);
  });
}

```

## setCustomRecords

```TypeScript
setCustomRecords(customRecords: Array<PhotoAssetCustomRecord>): Promise<Array<int>>
```

Set custom records. A maximum of 200 custom records can be set at once.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| customRecords | Array&lt;PhotoAssetCustomRecord> | 是 | Custom records. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;int>> | Returns list of fileId in photoAssetCustomRecord which set failed |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 23800151 | Scenario parameters fail to pass the verification.Possible causes:  1. The value range of mandatory parameters in photoAssetCustomRecord does not meet the requirements.  2. The number of transferred records exceeds 200. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function example(context: Context) {
  console.info('setCustomRecords');
  let crManager = photoAccessHelper.PhotoAssetCustomRecordManager.getCustomRecordManagerInstance(context);
  let UpdateArray: Array<photoAccessHelper.PhotoAssetCustomRecord> = [
    {fileId:1,shareCount:2,lcdJumpCount:3},
    {fileId:2,shareCount:2,lcdJumpCount:3}
  ];
  crManager.setCustomRecords(UpdateArray).then((failIds) => {
    console.info('setCustomRecords successful');
  }).catch((err: BusinessError) => {
    console.error('setCustomRecords file with err: ${err.code}, ${err.message}');
  });
}

```

