# getProcessRunningInfos (System API)

## Modules to Import

```TypeScript
import { appManager } from '@ohos.app.ability.appManager';
```

## getProcessRunningInfos

```TypeScript
function getProcessRunningInfos(): Promise<Array<ProcessInformation>>
```

Obtains information about the running processes of the current application. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [getRunningProcessInformation](arkts-ability-getrunningprocessinformation-f.md#getrunningprocessinformation-1)

**Required permissions:** 
- API version 9 - 10: ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ProcessInformation&gt;&gt; | Promise used to return the API call result and the process runninginformation. You can perform error handling or custom processing in this callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1. Connect to system service failed; |


## getProcessRunningInfos

```TypeScript
function getProcessRunningInfos(callback: AsyncCallback<Array<ProcessInformation>>): void
```

Obtains information about the running processes of the current application. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [getRunningProcessInformation](arkts-ability-getrunningprocessinformation-f.md#getrunningprocessinformation-1)

**Required permissions:** 
- API version 9 - 10: ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;ProcessInformation&gt;&gt; | Yes | Callback used to return the result. If the API call issuccessful, **err** is **undefined** and **data** is the information about the running processes. Otherwise, **err**is an error object. You can perform error handling or other custom processing. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1. Connect to system service failed; |

