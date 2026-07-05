# deleteRdbStore

## Modules to Import

```TypeScript
import { relationalStore } from '@ohos.data.relationalStore';
```

## deleteRdbStore

```TypeScript
function deleteRdbStore(context: Context, name: string, callback: AsyncCallback<void>): void
```

Deletes the RDB store with the specified database file name. This API uses a promise to return the result. If **vector** is set to **true** in [StoreConfig] {@link @ohos.data.relationalStore:relationalStore.StoreConfig} when an RDB store is created, using this API cannot delete the RDB store. Use [deleteRdbStore] {@link relationalStore.deleteRdbStore(context: Context, config: StoreConfig)} instead. Before calling **deleteRdbStore**, ensure that the **RdbStore** and **ResultSet** of the vector store have been closed.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context.<br>For details about the application context of the FA model, see[Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-depr-i.md#context).<br>For details about the application context of the stage model, see[Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-c.md#context). |
| name | string | Yes | Name of the RDB store to delete. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error. |
| [14800010](../../apis-basic-services-kit/errorcode-settings.md#14800010-uiability-required) | Failed to open or delete the database by an invalid database path. |

**Example**

FA model:

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();

relationalStore.deleteRdbStore(context, "RdbTest.db", (err: BusinessError) => {
  if (err) {
    console.error(`Delete RdbStore failed, code is ${err.code},message is ${err.message}`);
    return;
  }
  // After the database is deleted, the initialized RdbStore instance cannot be used.
  // Clear the related variables to release resources in time.
  console.info('Delete RdbStore successfully.');
});

```

Stage model:

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    relationalStore.deleteRdbStore(this.context, "RdbTest.db", (err: BusinessError) => {
      if (err) {
        console.error(`Delete RdbStore failed, code is ${err.code},message is ${err.message}`);
        return;
      }
      // After the database is deleted, the initialized RdbStore instance cannot be used.
      // Clear the related variables to release resources in time.
      console.info('Delete RdbStore successfully.');
    });
  }
}

```


## deleteRdbStore

```TypeScript
function deleteRdbStore(context: Context, config: StoreConfig, callback: AsyncCallback<void>): void
```

Deletes an RDB store. This API uses an asynchronous callback to return the result. After the deletion, you are advised to set the database object to null. If the database file is stored in the sandbox directory, use this API to delete the database. If multiple processes operate the same database, other processes should be notified about the database deletion so that they can detect and process the deletion. If a custom path is set in [StoreConfig](arkts-arkdata-storeconfig-i.md#storeconfig) during RDB store creation, using this API to delete the RDB store. Before calling **deleteRdbStore**, ensure that the **RdbStore** and **ResultSet** of the vector store have been closed.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context.<br>For details about the application context of the FA model, see[Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-depr-i.md#context).<br>For details about the application context of the stage model, see[Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-c.md#context). |
| config | StoreConfig | Yes | Configuration of the RDB store. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error. |
| [14800010](../../apis-basic-services-kit/errorcode-settings.md#14800010-uiability-required) | Failed to open or delete the database by an invalid database path. |
| [14801001](../errorcode-data-rdb.md#14801001-stage-model-required) | The operation is supported in the stage model only. |
| [14801002](../errorcode-data-rdb.md#14801002-invalid-datagroupid-in-storeconfig) | Invalid data group ID. |

**Example**

FA model:

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();

const STORE_CONFIG: relationalStore.StoreConfig = {
  name: "RdbTest.db",
  securityLevel: relationalStore.SecurityLevel.S3
};

relationalStore.deleteRdbStore(context, STORE_CONFIG, (err: BusinessError) => {
  if (err) {
    console.error(`Delete RdbStore failed, code is ${err.code},message is ${err.message}`);
    return;
  }
  // After the database is deleted, the initialized RdbStore instance cannot be used.
  // Clear the related variables to release resources in time.
  console.info('Delete RdbStore successfully.');
});

```

Stage model:

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    const STORE_CONFIG: relationalStore.StoreConfig = {
      name: "RdbTest.db",
      securityLevel: relationalStore.SecurityLevel.S3
    };
    relationalStore.deleteRdbStore(this.context, STORE_CONFIG, (err: BusinessError) => {
      if (err) {
        console.error(`Delete RdbStore failed, code is ${err.code},message is ${err.message}`);
        return;
      }
      // After the database is deleted, the initialized RdbStore instance cannot be used.
      // Clear the related variables to release resources in time.
      console.info('Delete RdbStore successfully.');
    });
  }
}

```


## deleteRdbStore

```TypeScript
function deleteRdbStore(context: Context, name: string): Promise<void>
```

Deletes an RDB store. This API uses a promise to return the result. After the deletion, you are advised to set the database object to null. If a custom path is set in [StoreConfig](arkts-arkdata-storeconfig-i.md#storeconfig) when an RDB store is created, using this API cannot delete the RDB store. Use [deleteRdbStore](arkts-arkdata-deleterdbstore-f.md#deleterdbstore-4) instead. Before calling **deleteRdbStore**, ensure that the **RdbStore** and **ResultSet** of the vector store have been closed.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context.<br>For details about the application context of the FA model, see[Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-depr-i.md#context).<br>For details about the application context of the stage model, see[Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-c.md#context). |
| name | string | Yes | Name of the RDB store to delete. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error. |
| [14800010](../../apis-basic-services-kit/errorcode-settings.md#14800010-uiability-required) | Failed to open or delete the database by an invalid database path. |

**Example**

FA model:

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();

relationalStore.deleteRdbStore(context, "RdbTest.db").then(() => {
  // After the database is deleted, the initialized RdbStore instance cannot be used.
  // Clear the related variables to release resources in time.
  console.info('Delete RdbStore successfully.');
}).catch((err: BusinessError) => {
  console.error(`Delete RdbStore failed, code is ${err.code},message is ${err.message}`);
});

```

Stage model:

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    relationalStore.deleteRdbStore(this.context, "RdbTest.db").then(() => {
      // After the database is deleted, the initialized RdbStore instance cannot be used.
      // Clear the related variables to release resources in time.
      console.info('Delete RdbStore successfully.');
    }).catch((err: BusinessError) => {
      console.error(`Delete RdbStore failed, code is ${err.code},message is ${err.message}`);
    });
  }
}

```


## deleteRdbStore

```TypeScript
function deleteRdbStore(context: Context, config: StoreConfig): Promise<void>
```

Deletes an RDB store. This API uses a promise to return the result. After the deletion, you are advised to set the database object to null. If the database file is stored in the sandbox directory, use this API to delete the database. If multiple processes operate the same database, other processes should be notified about the database deletion so that they can detect and process the deletion. If a custom path is set in [StoreConfig](arkts-arkdata-storeconfig-i.md#storeconfig) during RDB store creation, using this API to delete the RDB store. Before calling **deleteRdbStore**, ensure that the **RdbStore** and **ResultSet** of the vector store have been closed.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context.<br>For details about the application context of the FA model, see[Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-depr-i.md#context).<br>For details about the application context of the stage model, see[Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-c.md#context). |
| config | StoreConfig | Yes | Configuration of the RDB store. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error. |
| [14800010](../../apis-basic-services-kit/errorcode-settings.md#14800010-uiability-required) | Failed to open or delete the database by an invalid database path. |
| [14801001](../errorcode-data-rdb.md#14801001-stage-model-required) | The operation is supported in the stage model only. |
| [14801002](../errorcode-data-rdb.md#14801002-invalid-datagroupid-in-storeconfig) | Invalid data group ID. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 12 |

**Example**

FA model:

```TypeScript
import { featureAbility } from "@kit.AbilityKit";
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();

const STORE_CONFIG: relationalStore.StoreConfig = {
  name: "RdbTest.db",
  securityLevel: relationalStore.SecurityLevel.S3
};

relationalStore.deleteRdbStore(context, STORE_CONFIG).then(() => {
  // After the database is deleted, the initialized RdbStore instance cannot be used.
  // Clear the related variables to release resources in time.
  console.info('Delete RdbStore successfully.');
}).catch((err: BusinessError) => {
  console.error(`Delete RdbStore failed, code is ${err.code},message is ${err.message}`);
});

```

Stage model:

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    const STORE_CONFIG: relationalStore.StoreConfig = {
      name: "RdbTest.db",
      securityLevel: relationalStore.SecurityLevel.S3
    };
    relationalStore.deleteRdbStore(this.context, STORE_CONFIG).then(() => {
      // After the database is deleted, the initialized RdbStore instance cannot be used.
      // Clear the related variables to release resources in time.
      console.info('Delete RdbStore successfully.');
    }).catch((err: BusinessError) => {
      console.error(`Delete RdbStore failed, code is ${err.code},message is ${err.message}`);
    });
  }
}

```

