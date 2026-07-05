# removePreferencesFromCache

## removePreferencesFromCache

```TypeScript
function removePreferencesFromCache(context: Context, name: string, callback: AsyncCallback<void>): void
```

Removes a **Preferences** instance from the cache. This API uses an asynchronous callback to return the result. After an application calls [getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) for the first time to obtain a **Preferences** instance, the obtained **Preferences** instance is cached. When the application calls [getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) again, the **Preferences** instance will be read from the cache instead of from the persistent file. After this API is called to remove the instance from the cache, calling **getPreferences** again will read data from the persistent file and create a **Preferences** instance. Avoid using a removed **Preferences** instance to perform data operations, which may cause data inconsistency. Instead, set the removed **Preferences** instance to null. The system will reclaim them in a unified manner. If [GSKV](docroot://database/data-persistence-by-preferences.md#gskv) is used, you are advised to manually call this API once when the process exits. This operation writes the data cache page to the disk, which can reduce the time required for calling the **getPreferences** API next time. Otherwise, data restoration is required at the bottom layer when the **getPreferences** API is called. The time required for data restoration depends on the number of data cache pages that are not written to the disk.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| name | string | 是 | Name of the Preferences instance. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
// 获取context
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();
preferences.removePreferencesFromCache(context, 'myStore', (err: BusinessError) => {
  if (err) {
    console.error("Failed to remove preferences. code =" + err.code + ", message = " + err.message);
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
        console.error("Failed to remove preferences. code =" + err.code + ", message = " + err.message);
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

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| options | Options | 是 | Configuration options of the Preferences instance. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 15501001 | The operations is supported in stage mode only. |
| 15501002 | Invalid dataGroupId. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
// 获取context
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();
let options: preferences.Options = { name: 'myStore' };
preferences.removePreferencesFromCache(context, options, (err: BusinessError) => {
  if (err) {
    console.error("Failed to remove preferences. code =" + err.code + ", message = " + err.message);
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
        console.error("Failed to remove preferences. code =" + err.code + ", message = " + err.message);
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

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| name | string | 是 | Name of the Preferences instance. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
// 获取context
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();
let sp = preferences.removePreferencesFromCache(context, 'myStore');
sp.then(() => {
  console.info("Succeeded in removing preferences.");
}).catch((err: BusinessError) => {
  console.error("Failed to remove preferences. code =" + err.code + ", message = " + err.message);
})


import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let sp = preferences.removePreferencesFromCache(this.context, 'myStore');
    sp.then(() => {
      console.info("Succeeded in removing preferences.");
    }).catch((err: BusinessError) => {
      console.error("Failed to remove preferences. code =" + err.code + ", message = " + err.message);
    })
  }
}

```

## removePreferencesFromCache

```TypeScript
function removePreferencesFromCache(context: Context, options: Options): Promise<void>
```

Removes a **Preferences** instance from the cache. This API uses a promise to return the result. After an application calls [getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) for the first time to obtain a **Preferences** instance, the obtained **Preferences** instance is cached. When the application calls [getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) again, the **Preferences** instance will be read from the cache instead of from the persistent file. After this API is called to remove the instance from the cache, calling **getPreferences** again will read data from the persistent file and create a **Preferences** instance. Avoid using a removed **Preferences** instance to perform data operations, which may cause data inconsistency. Instead, set the removed **Preferences** instance to null. The system will reclaim them in a unified manner. If [GSKV](docroot://database/data-persistence-by-preferences.md#gskv) is used, you are advised to manually call this API once when the process exits. This operation writes the data cache page to the disk, which can reduce the time required for calling the **getPreferences** API next time. Otherwise, data restoration is required at the bottom layer when the **getPreferences** API is called. The time required for data restoration depends on the number of data cache pages that are not written to the disk.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| options | Options | 是 | Configuration options of the Preferences instance. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 15501001 | The operations is supported in stage mode only. |
| 15501002 | Invalid dataGroupId. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
// 获取context
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();
let options: preferences.Options = { name: 'myStore' };
let sp = preferences.removePreferencesFromCache(context, options);
sp.then(() => {
  console.info("Succeeded in removing preferences.");
}).catch((err: BusinessError) => {
  console.error("Failed to remove preferences. code =" + err.code + ", message = " + err.message);
})


import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let options: preferences.Options = { name: 'myStore' };
    let sp = preferences.removePreferencesFromCache(this.context, options);
    sp.then(() => {
      console.info("Succeeded in removing preferences.");
    }).catch((err: BusinessError) => {
      console.error("Failed to remove preferences. code =" + err.code + ", message = " + err.message);
    })
  }
}

```

