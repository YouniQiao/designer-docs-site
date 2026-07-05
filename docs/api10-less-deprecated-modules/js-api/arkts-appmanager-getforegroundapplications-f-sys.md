# getForegroundApplications

## getForegroundApplications

```TypeScript
function getForegroundApplications(callback: AsyncCallback<Array<AppStateData>>): void
```

获取所有当前处于前台的应用信息。该应用信息由[AppStateData]application/AppStateData:AppStateData定义。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#getForegroundApplications

**Required permissions:** 

 ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;AppStateData>> | Yes | 回调函数，返回所有当前处于前台的应用信息。 |

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

获取所有当前处于前台的应用信息。该应用信息由[AppStateData]application/AppStateData:AppStateData定义。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#getForegroundApplications

**Required permissions:** 

 ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AppStateData>> | Promise对象，返回所有当前处于前台的应用信息。 |

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

