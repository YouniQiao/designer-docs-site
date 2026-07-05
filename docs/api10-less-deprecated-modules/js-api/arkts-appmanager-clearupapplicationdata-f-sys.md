# clearUpApplicationData

## clearUpApplicationData

```TypeScript
function clearUpApplicationData(bundleName: string): Promise<void>
```

通过Bundle名称清除应用数据。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#clearUpApplicationData

**Required permissions:** 

 ohos.permission.CLEAN_APPLICATION_DATA

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示Bundle名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

let bundleName = 'bundleName';
appManager.clearUpApplicationData(bundleName)
  .then((data) => {
    console.info(`ClearUpApplicationData success, data: ${JSON.stringify(data)}.`);
  })
  .catch((err: BusinessError) => {
    console.error(`ClearUpApplicationData failed, error code: ${err.code}, error msg: ${err.message}.`);
  });

```

## clearUpApplicationData

```TypeScript
function clearUpApplicationData(bundleName: string, callback: AsyncCallback<void>)
```

通过Bundle名称清除应用数据。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#clearUpApplicationData

**Required permissions:** 

 ohos.permission.CLEAN_APPLICATION_DATA

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示Bundle名称。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当通过Bundle名称清除应用数据成功，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

let bundleName = 'bundleName';

function clearUpApplicationDataCallback(err: BusinessError, data: void) {
  if (err) {
    console.error(`ClearUpApplicationDataCallback failed, error code: ${err.code}, error msg: ${err.message}.`);
  } else {
    console.info(`ClearUpApplicationDataCallback success, data: ${JSON.stringify(data)}.`);
  }
}

appManager.clearUpApplicationData(bundleName, clearUpApplicationDataCallback);

```

