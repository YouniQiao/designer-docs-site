# getProcessRunningInfos

## getProcessRunningInfos

```TypeScript
function getProcessRunningInfos(): Promise<Array<ProcessRunningInfo>>
```

Obtains information about the running processes. This API uses a promise to return the result.

> This API is deprecated since API version 9. You are advised to use
> [appManager.getRunningProcessInformation](arkts-ability-getrunningprocessinformation-f.md#getrunningprocessinformation-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getRunningProcessInformation

**Required permissions:** ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ProcessRunningInfo&gt;&gt; | Promise used to return the information about the running processes. |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

appManager.getProcessRunningInfos().then((data) => {
  console.info(`The process running infos is: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
  console.error(`error: ${JSON.stringify(error)}`);
});

```


## getProcessRunningInfos

```TypeScript
function getProcessRunningInfos(callback: AsyncCallback<Array<ProcessRunningInfo>>): void
```

Obtains information about the running processes. This API uses an asynchronous callback to return the result.

> This API is deprecated since API version 9. You are advised to use
> [appManager.getRunningProcessInformation](arkts-ability-getrunningprocessinformation-f.md#getrunningprocessinformation-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getRunningProcessInformation

**Required permissions:** ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;ProcessRunningInfo&gt;&gt; | Yes | Callback used to return the information about the runningprocesses. |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';

appManager.getProcessRunningInfos((error, data) => {
  if (error && error.code !== 0) {
    console.error(`getProcessRunningInfos fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`getProcessRunningInfos success, data: ${JSON.stringify(data)}`);
  }
});

```

