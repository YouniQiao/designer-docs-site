# getRdbStore

## getRdbStore

```TypeScript
function getRdbStore(context: Context, config: StoreConfig, callback: AsyncCallback<RdbStore>): void
```

Obtains an RdbStore instance. You can set the **config** parameter as required and use **RdbStore** APIs to perform data operations. This API uses an asynchronous callback to return the result. If no database file exists in the corresponding sandbox directory, a database file is created. For details, see [StoreConfig](arkts-relationalstore-storeconfig-i.md#StoreConfig). If a database file exists in the corresponding directory, the existing database file is opened. When creating a database, you should consider whether to configure the [encrypt](arkts-relationalstore-storeconfig-i.md#StoreConfig) parameter. Once the database is created, you are not allowed to change this parameter. | Encryption Type When the RDB Store Is Opened | Encryption Type When the RDB Store Is Created | Result| | ------- | -------------------------------- | ---- | | Non-encryption| Encryption | The RDB store is opened in encrypted mode. | | Encryption| Non-encryption | The RDB store is opened in non-encrypted mode. | Currently, **getRdbStore()** does not support multi-thread concurrent operations.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| config | StoreConfig | 是 | Configuration of the RDB store. |
| callback | AsyncCallback&lt;RdbStore> | 是 | Callback invoked to return the RDB store obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800010 | Failed to open or delete the database by an invalid database path. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14801001 | The operation is supported in the stage model only. [since 10] |
| 14801002 | Invalid data group ID. [since 10] |
| 14800017 | StoreConfig is changed. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800020 | The secret key is corrupted or lost. [since 14] |

**示例：**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let store: relationalStore.RdbStore | undefined = undefined;
let context = featureAbility.getContext();

const STORE_CONFIG: relationalStore.StoreConfig = {
  name: "RdbTest.db",
  securityLevel: relationalStore.SecurityLevel.S3
};

relationalStore.getRdbStore(context, STORE_CONFIG, async (err: BusinessError, rdbStore: relationalStore.RdbStore) => {
  if (err) {
    console.error(`Get RdbStore failed, code is ${err.code},message is ${err.message}`);
    return;
  }
  console.info('Get RdbStore successfully.');
  store = rdbStore;
  // 成功获取到 rdbStore 后执行后续操作
});


import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

let store: relationalStore.RdbStore | undefined = undefined;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    const STORE_CONFIG: relationalStore.StoreConfig = {
      name: "RdbTest.db",
      securityLevel: relationalStore.SecurityLevel.S3
    };

    relationalStore.getRdbStore(this.context, STORE_CONFIG, async (err: BusinessError, rdbStore: relationalStore.RdbStore) => {
      if (err) {
        console.error(`Get RdbStore failed, code is ${err.code},message is ${err.message}`);
        return;
      }
      console.info('Get RdbStore successfully.');
      store = rdbStore;
      // 成功获取到 rdbStore 后执行后续操作
    });
  }
}

```

## getRdbStore

```TypeScript
function getRdbStore(context: Context, config: StoreConfig): Promise<RdbStore>
```

Obtains an RdbStore instance. You can set the **config** parameter as required and use **RdbStore** APIs to perform data operations. This API uses a promise to return the result. If no database file exists in the corresponding sandbox directory, a database file is created. For details, see [StoreConfig](arkts-relationalstore-storeconfig-i.md#StoreConfig). If a database file exists in the corresponding directory, the existing database file is opened. When creating a database, you should consider whether to configure the [encrypt](arkts-relationalstore-storeconfig-i.md#StoreConfig) parameter. Once the database is created, you are not allowed to change this parameter. | Encryption Type When the RDB Store Is Opened | Encryption Type When the RDB Store Is Created | Result| | ------- | -------------------------------- | ---- | | Non-encryption| Encryption | The RDB store is opened in encrypted mode. | | Encryption| Non-encryption | The RDB store is opened in non-encrypted mode. | Currently, **getRdbStore()** does not support multi-thread concurrent operations.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| config | StoreConfig | 是 | Configuration of the RDB store. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;RdbStore> | Promise used to return the RdbStore object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800010 | Failed to open or delete the database by an invalid database path. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14801001 | The operation is supported in the stage model only. [since 10] |
| 14801002 | Invalid data group ID. [since 10] |
| 14800017 | StoreConfig is changed. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800020 | The secret key is corrupted or lost. [since 14] |
| 14800022 | SQLite: Callback routine requested an abort. [since 14] |
| 14800023 | SQLite: Access permission denied. [since 14] |

**示例：**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let store: relationalStore.RdbStore | undefined = undefined;
let context = featureAbility.getContext();

const STORE_CONFIG: relationalStore.StoreConfig = {
  name: "RdbTest.db",
  securityLevel: relationalStore.SecurityLevel.S3
};

relationalStore.getRdbStore(context, STORE_CONFIG).then(async (rdbStore: relationalStore.RdbStore) => {
  store = rdbStore;
  console.info('Get RdbStore successfully.');
}).catch((err: BusinessError) => {
  console.error(`Get RdbStore failed, code is ${err.code},message is ${err.message}`);
});


import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

let store: relationalStore.RdbStore | undefined = undefined;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    const STORE_CONFIG: relationalStore.StoreConfig = {
      name: "RdbTest.db",
      securityLevel: relationalStore.SecurityLevel.S3
    };

    relationalStore.getRdbStore(this.context, STORE_CONFIG).then(async (rdbStore: relationalStore.RdbStore) => {
      store = rdbStore;
      console.info('Get RdbStore successfully.');
    }).catch((err: BusinessError) => {
      console.error(`Get RdbStore failed, code is ${err.code},message is ${err.message}`);
    });
  }
}

```

