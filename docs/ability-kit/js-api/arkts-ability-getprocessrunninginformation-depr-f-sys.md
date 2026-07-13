# getProcessRunningInformation (System API)

## getProcessRunningInformation

```TypeScript
function getProcessRunningInformation(): Promise<Array<ProcessRunningInfo>>
```

Obtains information about the running processes. This API uses a promise to return the result.

> This API is deprecated since API version 9. You are advised to use
> [appManager.getRunningProcessInformation](arkts-ability-getrunningprocessinformation-f.md#getrunningprocessinformation-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getRunningProcessInformation

**Required permissions:** 
- API version 8 - 10: ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ProcessRunningInfo&gt;&gt; | Promise used to return the information about the running processes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1. Failed to connect to the system service; |


## getProcessRunningInformation

```TypeScript
function getProcessRunningInformation(callback: AsyncCallback<Array<ProcessRunningInfo>>): void
```

Obtains information about the running processes. This API uses an asynchronous callback to return the result.

> This API is deprecated since API version 9. You are advised to use
> [appManager.getRunningProcessInformation]{
> @link @ohos.app.ability.appManager:appManager.getRunningProcessInformation()} instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getRunningProcessInformation

**Required permissions:** 
- API version 8 - 10: ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;ProcessRunningInfo&gt;&gt; | Yes | Callback used to return the result. If the API callis successful, **err** is **undefined** and **data** is the information about the running processes. Otherwise,**err** is an error object. You can perform error handling or other custom processing. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1. Failed to connect to the system service; |

