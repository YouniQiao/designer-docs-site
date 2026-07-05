# createKVManager

## Modules to Import

```TypeScript
import { distributedKVStore } from '@ohos.data.distributedKVStore';
```

## createKVManager

```TypeScript
function createKVManager(config: KVManagerConfig): KVManager
```

Creates a **KVManager** instance for KV store management.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | KVManagerConfig | Yes | Configuration of the **KVManager** instance, including the bundle name (cannot beempty) of the caller and user information. |

**Return value:**

| Type | Description |
| --- | --- |
| KVManager | **KVManager** instance created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

**Example**

Stage model:

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let kvManager: distributedKVStore.KVManager;
let appId: string = 'com.example.datamanagertest';

export default class EntryAbility extends UIAbility {
  onCreate() {
    console.info("MyAbilityStage onCreate");
    let context = this.context;
    const kvManagerConfig: distributedKVStore.KVManagerConfig = {
      context: context,
      bundleName: appId
    }
    try {
      kvManager = distributedKVStore.createKVManager(kvManagerConfig);
      console.info("Succeeded in creating KVManager");
    } catch (e) {
      let error = e as BusinessError;
      console.error(`Failed to create KVManager.code is ${error.code},message is ${error.message}`);
    }
    if (kvManager !== undefined) {
      // Perform subsequent operations such as creating a KV store.
      // ...
    }
  }
}

```

FA model:

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let kvManager: distributedKVStore.KVManager;
let appId: string = 'com.example.datamanagertest';
let context = featureAbility.getContext();
const kvManagerConfig: distributedKVStore.KVManagerConfig = {
  context: context,
  bundleName: appId
}
try {
  kvManager = distributedKVStore.createKVManager(kvManagerConfig);
  console.info("Succeeded in creating KVManager");
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to create KVManager.code is ${error.code},message is ${error.message}`);
}
if (kvManager !== undefined) {
  kvManager = kvManager as distributedKVStore.KVManager;
  // Perform subsequent operations such as creating a KV store.
  // ...
}

```

