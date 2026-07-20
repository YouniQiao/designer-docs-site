# getProcessRunningInfos

## getProcessRunningInfos

```TypeScript
function getProcessRunningInfos(): Promise<Array<ProcessRunningInfo>>
```

Obtains information about the running processes. This API uses a promise to return the result.

> This API is deprecated since API version 9. You are advised to use  
> [appManager.getRunningProcessInformation](arkts-ability-appmanager-getrunningprocessinformation-f.md#getrunningprocessinformation-1)  
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getRunningProcessInformation

**Required permissions:** ohos.permission.GET_RUNNING_INFO

<!--Device-appManager-function getProcessRunningInfos(): Promise<Array<ProcessRunningInfo>>--><!--Device-appManager-function getProcessRunningInfos(): Promise<Array<ProcessRunningInfo>>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<ProcessRunningInfo>> | Promise used to return the information about the running processes. |

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
> [appManager.getRunningProcessInformation](arkts-ability-appmanager-getrunningprocessinformation-f.md#getrunningprocessinformation-1)  
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getRunningProcessInformation

**Required permissions:** ohos.permission.GET_RUNNING_INFO

<!--Device-appManager-function getProcessRunningInfos(callback: AsyncCallback<Array<ProcessRunningInfo>>): void--><!--Device-appManager-function getProcessRunningInfos(callback: AsyncCallback<Array<ProcessRunningInfo>>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<ProcessRunningInfo>> | Yes | Callback used to return the information about the running processes. |

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

