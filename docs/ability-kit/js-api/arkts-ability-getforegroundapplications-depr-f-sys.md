# getForegroundApplications (System API)

## getForegroundApplications

```TypeScript
function getForegroundApplications(callback: AsyncCallback<Array<AppStateData>>): void
```

getForegroundApplications.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getForegroundApplications

**Required permissions:** ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;AppStateData&gt;&gt; | Yes | Return all application information currently in theforeground in the form of callback. |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';

appManager.getForegroundApplications((err, data) => {
  if (err) {
    console.error(`GetForegroundApplications failed, error code: ${err.code}, error msg: ${err.message}.`);
  } else {
    console.info(`GetForegroundApplications success, data: ${JSON.stringify(data)}.`);
  }
});

```


## getForegroundApplications

```TypeScript
function getForegroundApplications(): Promise<Array<AppStateData>>
```

getForegroundApplications.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getForegroundApplications

**Required permissions:** ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AppStateData&gt;&gt; | Returns the list of AppStateData. |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

appManager.getForegroundApplications()
  .then((data) => {
    console.info(`GetForegroundApplications success, data: ${JSON.stringify(data)}.`);
  })
  .catch((err: BusinessError) => {
    console.error(`GetForegroundApplications failed, error code: ${err.code}, error msg: ${err.message}.`);
  });

```

