# getPreferences

## getPreferences

```TypeScript
function getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>): void
```

Obtains a **Preferences** instance. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| name | string | 是 | Name of the Preferences instance. |
| callback | AsyncCallback&lt;Preferences> | 是 | Callback used to return the result. If the operation is successful  , err is undefined and the Preferences instance obtained is returned. Otherwise, err is an  error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context = featureAbility.getContext();
let dataPreferences: preferences.Preferences | null = null;

preferences.getPreferences(context, 'myStore', (err: BusinessError, val: preferences.Preferences) => {
  if (err) {
    console.error("Failed to get preferences. Code = " + err.code + ", message = " + err.message);
    return;
  }
  dataPreferences = val;
  console.info("Succeeded in getting preferences.");
})


import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

let dataPreferences: preferences.Preferences | null = null;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    preferences.getPreferences(this.context, 'myStore', (err: BusinessError, val: preferences.Preferences) => {
      if (err) {
        console.error("Failed to get preferences. Code = " + err.code + ", message = " + err.message);
        return;
      }
      dataPreferences = val;
      console.info("Succeeded in getting preferences.");
    })
  }
}

```

## getPreferences

```TypeScript
function getPreferences(context: Context, options: Options, callback: AsyncCallback<Preferences>): void
```

Obtains a **Preferences** instance. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| options | Options | 是 | Configuration options of the Preferences instance. |
| callback | AsyncCallback&lt;Preferences> | 是 | Callback used to return the result. If the operation is successful  , err is undefined and the Preferences instance obtained is returned. Otherwise, err is an  error object. |

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
let dataPreferences: preferences.Preferences | null = null;

let options: preferences.Options = { name: 'myStore' };
preferences.getPreferences(context, options, (err: BusinessError, val: preferences.Preferences) => {
  if (err) {
    console.error("Failed to get preferences. Code = " + err.code + ", message = " + err.message);
    return;
  }
  dataPreferences = val;
  console.info("Succeeded in getting preferences.");
})


import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

let dataPreferences: preferences.Preferences | null = null;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let options: preferences.Options = { name: 'myStore' };
    preferences.getPreferences(this.context, options, (err: BusinessError, val: preferences.Preferences) => {
      if (err) {
        console.error("Failed to get preferences. Code = " + err.code + ", message = " + err.message);
        return;
      }
      dataPreferences = val;
      console.info("Succeeded in getting preferences.");
    })
  }
}

```

## getPreferences

```TypeScript
function getPreferences(context: Context, name: string): Promise<Preferences>
```

Obtains a **Preferences** instance. This API uses a promise to return the result.

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
| Promise&lt;Preferences> | Promise used to return the Preferences instance obtained. |

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

let dataPreferences: preferences.Preferences | null = null;
let sp = preferences.getPreferences(context, 'myStore');
sp.then((object: preferences.Preferences) => {
  dataPreferences = object;
  console.info("Succeeded in getting preferences.");
}).catch((err: BusinessError) => {
  console.error("Failed to get preferences. Code = " + err.code + ", message = " + err.message);
})


import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

let dataPreferences: preferences.Preferences | null = null;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let sp = preferences.getPreferences(this.context, 'myStore');
    sp.then((object: preferences.Preferences) => {
      dataPreferences = object;
      console.info("Succeeded in getting preferences.");
    }).catch((err: BusinessError) => {
      console.error("Failed to get preferences. Code = " + err.code + ", message = " + err.message);
    })
  }
}

```

## getPreferences

```TypeScript
function getPreferences(context: Context, options: Options): Promise<Preferences>
```

Obtains a **Preferences** instance. This API uses a promise to return the result.

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
| Promise&lt;Preferences> | Promise used to return the Preferences instance obtained. |

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

let dataPreferences: preferences.Preferences | null = null;
let options: preferences.Options = { name: 'myStore' };
let sp = preferences.getPreferences(context, options);
sp.then((object: preferences.Preferences) => {
  dataPreferences = object;
  console.info("Succeeded in getting preferences.");
}).catch((err: BusinessError) => {
  console.error("Failed to get preferences. Code = " + err.code + ", message = " + err.message);
})


import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

let dataPreferences: preferences.Preferences | null = null;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let options: preferences.Options = { name: 'myStore' };
    let sp = preferences.getPreferences(this.context, options);
    sp.then((object: preferences.Preferences) => {
      dataPreferences = object;
      console.info("Succeeded in getting preferences.");
    }).catch((err: BusinessError) => {
      console.error("Failed to get preferences. Code = " + err.code + ", message = " + err.message);
    })
  }
}

```

