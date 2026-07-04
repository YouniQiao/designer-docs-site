# clearUpApplicationData (System API)

## clearUpApplicationData

```TypeScript
function clearUpApplicationData(bundleName: string): Promise<void>
```

Clear up application data by bundle name

**Since:** 8

**Deprecated since:** 9

**Substitutes:** clearUpApplicationData

**Required permissions:** ohos.permission.CLEAN_APPLICATION_DATA

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | bundle name. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

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

Clear up application data by bundle name

**Since:** 8

**Deprecated since:** 9

**Substitutes:** clearUpApplicationData

**Required permissions:** ohos.permission.CLEAN_APPLICATION_DATA

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | bundle name. |
| callback | AsyncCallback&lt;void&gt; | Yes | Represents the specified callback method. |

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

