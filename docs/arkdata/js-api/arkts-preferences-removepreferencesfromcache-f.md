# removePreferencesFromCache

## removePreferencesFromCache

```TypeScript
function removePreferencesFromCache(context: Context, name: string, callback: AsyncCallback<void>): void
```

Removes a **Preferences** instance from the cache. This API uses an asynchronous callback to return the result. After an application calls [getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) for the first time to obtain a **Preferences** instance, the obtained **Preferences** instance is cached. When the application calls [getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) again, the **Preferences** instance will be read from the cache instead of from the persistent file. After this API is called to remove the instance from the cache, calling **getPreferences** again will read data from the persistent file and create a **Preferences** instance. Avoid using a removed **Preferences** instance to perform data operations, which may cause data inconsistency. Instead, set the removed **Preferences** instance to null. The system will reclaim them in a unified manner. If [GSKV](docroot://database/data-persistence-by-preferences.md#gskv) is used, you are advised to manually call this API once when the process exits. This operation writes the data cache page to the disk, which can reduce the time required for calling the **getPreferences** API next time. Otherwise, data restoration is required at the bottom layer when the **getPreferences** API is called. The time required for data restoration depends on the number of data cache pages that are not written to the disk.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| name | string | Yes | Name of the Preferences instance. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**Example**

```TypeScript
// Obtain the context.
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();
preferences.removePreferencesFromCache(context, 'myStore', (err: BusinessError) => {
  if (err) {
    console.error("Failed to remove preferences. code =" + err.code + ", message =" + err.message);
    return;
  }
  console.info("Succeeded in removing preferences.");
})


import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    preferences.removePreferencesFromCache(this.context, 'myStore', (err: BusinessError) => {
      if (err) {
        console.error("Failed to remove preferences. code =" + err.code + ", message =" + err.message);
        return;
      }
      console.info("Succeeded in removing preferences.");
    })
  }
}

```

## removePreferencesFromCache

```TypeScript
function removePreferencesFromCache(context: Context, options: Options, callback: AsyncCallback<void>): void
```

Removes a **Preferences** instance from the cache. This API uses an asynchronous callback to return the result. After an application calls [getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) for the first time to obtain a **Preferences** instance, the obtained **Preferences** instance is cached. When the application calls [getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) again, the **Preferences** instance will be read from the cache instead of from the persistent file. After this API is called to remove the instance from the cache, calling **getPreferences** again will read data from the persistent file and create a **Preferences** instance. Avoid using a removed **Preferences** instance to perform data operations, which may cause data inconsistency. Instead, set the removed **Preferences** instance to null. The system will reclaim them in a unified manner. If [GSKV](docroot://database/data-persistence-by-preferences.md#gskv) is used, you are advised to manually call this API once when the process exits. This operation writes the data cache page to the disk, which can reduce the time required for calling the **getPreferences** API next time. Otherwise, data restoration is required at the bottom layer when the **getPreferences** API is called. The time required for data restoration depends on the number of data cache pages that are not written to the disk.

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| options | Options | Yes | Configuration options of the Preferences instance. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 15501001 | The operations is supported in stage mode only. |
| 15501002 | Invalid dataGroupId. |
| 15500000 | Inner error. [since 11] |

**Example**

```TypeScript
// Obtain the context.
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();
let options: preferences.Options = { name: 'myStore' };
preferences.removePreferencesFromCache(context, options, (err: BusinessError) => {
  if (err) {
    console.error("Failed to remove preferences. code =" + err.code + ", message =" + err.message);
    return;
  }
  console.info("Succeeded in removing preferences.");
})


import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let options: preferences.Options = { name: 'myStore' };
    preferences.removePreferencesFromCache(this.context, options, (err: BusinessError) => {
      if (err) {
        console.error("Failed to remove preferences. code =" + err.code + ", message =" + err.message);
        return;
      }
      console.info("Succeeded in removing preferences.");
    })
  }
}

```

## removePreferencesFromCache

```TypeScript
function removePreferencesFromCache(context: Context, name: string): Promise<void>
```

Removes a **Preferences** instance from the cache. This API uses a promise to return the result. After an application calls [getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) for the first time to obtain a **Preferences** instance, the obtained **Preferences** instance is cached. When the application calls [getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) again, the **Preferences** instance will be read from the cache instead of from the persistent file. After this API is called to remove the instance from the cache, calling **getPreferences** again will read data from the persistent file and create a **Preferences** instance. Avoid using a removed **Preferences** instance to perform data operations, which may cause data inconsistency. Instead, set the removed **Preferences** instance to null. The system will reclaim them in a unified manner. If [GSKV](docroot://database/data-persistence-by-preferences.md#gskv) is used, you are advised to manually call this API once when the process exits. This operation writes the data cache page to the disk, which can reduce the time required for calling the **getPreferences** API next time. Otherwise, data restoration is required at the bottom layer when the **getPreferences** API is called. The time required for data restoration depends on the number of data cache pages that are not written to the disk.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| name | string | Yes | Name of the Preferences instance. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**Example**

```TypeScript
// Obtain the context.
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();
let promise = preferences.removePreferencesFromCache(context, 'myStore');
promise.then(() => {
  console.info("Succeeded in removing preferences.");
}).catch((err: BusinessError) => {
  console.error("Failed to remove preferences. code =" + err.code + ", message =" + err.message);
})


import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let promise = preferences.removePreferencesFromCache(this.context, 'myStore');
    promise.then(() => {
      console.info("Succeeded in removing preferences.");
    }).catch((err: BusinessError) => {
      console.error("Failed to remove preferences. code =" + err.code + ", message =" + err.message);
    })
  }
}

```

## removePreferencesFromCache

```TypeScript
function removePreferencesFromCache(context: Context, options: Options): Promise<void>
```

Removes a **Preferences** instance from the cache. This API uses a promise to return the result. After an application calls [getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) for the first time to obtain a **Preferences** instance, the obtained **Preferences** instance is cached. When the application calls [getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) again, the **Preferences** instance will be read from the cache instead of from the persistent file. After this API is called to remove the instance from the cache, calling **getPreferences** again will read data from the persistent file and create a **Preferences** instance. Avoid using a removed **Preferences** instance to perform data operations, which may cause data inconsistency. Instead, set the removed **Preferences** instance to null. The system will reclaim them in a unified manner. If [GSKV](docroot://database/data-persistence-by-preferences.md#gskv) is used, you are advised to manually call this API once when the process exits. This operation writes the data cache page to the disk, which can reduce the time required for calling the **getPreferences** API next time. Otherwise, data restoration is required at the bottom layer when the **getPreferences** API is called. The time required for data restoration depends on the number of data cache pages that are not written to the disk.

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| options | Options | Yes | Configuration options of the Preferences instance. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 15501001 | The operations is supported in stage mode only. |
| 15501002 | Invalid dataGroupId. |
| 15500000 | Inner error. [since 11] |

**Example**

```TypeScript
// Obtain the context.
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();
let options: preferences.Options = { name: 'myStore' };
let promise = preferences.removePreferencesFromCache(context, options);
promise.then(() => {
  console.info("Succeeded in removing preferences.");
}).catch((err: BusinessError) => {
  console.error("Failed to remove preferences. code =" + err.code + ", message =" + err.message);
})


import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let options: preferences.Options = { name: 'myStore' };
    let promise = preferences.removePreferencesFromCache(this.context, options);
    promise.then(() => {
      console.info("Succeeded in removing preferences.");
    }).catch((err: BusinessError) => {
      console.error("Failed to remove preferences. code =" + err.code + ", message =" + err.message);
    })
  }
}

```

