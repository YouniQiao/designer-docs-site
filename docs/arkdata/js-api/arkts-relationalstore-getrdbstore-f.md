# getRdbStore

## getRdbStore

```TypeScript
function getRdbStore(context: Context, config: StoreConfig, callback: AsyncCallback<RdbStore>): void
```

Obtains an RdbStore instance. You can set the **config** parameter as required and use **RdbStore** APIs to perform data operations. This API uses an asynchronous callback to return the result. If no database file exists in the corresponding sandbox directory, a database file is created. For details, see [StoreConfig](arkts-relationalstore-storeconfig-i.md#StoreConfig). If a database file exists in the corresponding directory, the existing database file is opened. When creating a database, you should consider whether to configure the [encrypt](arkts-relationalstore-storeconfig-i.md#StoreConfig) parameter. Once the database is created, you are not allowed to change this parameter. | Encryption Type When the RDB Store Is Opened | Encryption Type When the RDB Store Is Created | Result| | ------- | -------------------------------- | ---- | | Non-encryption| Encryption | The RDB store is opened in encrypted mode. | | Encryption| Non-encryption | The RDB store is opened in non-encrypted mode. | Currently, **getRdbStore()** does not support multi-thread concurrent operations.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| config | StoreConfig | Yes | Configuration of the RDB store. |
| callback | AsyncCallback&lt;RdbStore> | Yes | Callback invoked to return the RDB store obtained. |

**Error codes:**

| Error Code ID | Error Message |
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

**Example**

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
  // Perform subsequent operations after the rdbStore instance is successfully obtained.
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
      // Perform subsequent operations after the rdbStore instance is successfully obtained.
    });
  }
}

```

## getRdbStore

```TypeScript
function getRdbStore(context: Context, config: StoreConfig): Promise<RdbStore>
```

Obtains an RdbStore instance. You can set the **config** parameter as required and use **RdbStore** APIs to perform data operations. This API uses a promise to return the result. If no database file exists in the corresponding sandbox directory, a database file is created. For details, see [StoreConfig](arkts-relationalstore-storeconfig-i.md#StoreConfig). If a database file exists in the corresponding directory, the existing database file is opened. When creating a database, you should consider whether to configure the [encrypt](arkts-relationalstore-storeconfig-i.md#StoreConfig) parameter. Once the database is created, you are not allowed to change this parameter. | Encryption Type When the RDB Store Is Opened | Encryption Type When the RDB Store Is Created | Result| | ------- | -------------------------------- | ---- | | Non-encryption| Encryption | The RDB store is opened in encrypted mode. | | Encryption| Non-encryption | The RDB store is opened in non-encrypted mode. | Currently, **getRdbStore()** does not support multi-thread concurrent operations.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| config | StoreConfig | Yes | Configuration of the RDB store. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RdbStore> | Promise used to return the RdbStore object. |

**Error codes:**

| Error Code ID | Error Message |
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

**Example**

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

