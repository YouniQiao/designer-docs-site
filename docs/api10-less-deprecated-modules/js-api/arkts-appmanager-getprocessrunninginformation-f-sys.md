# getProcessRunningInformation

## getProcessRunningInformation

```TypeScript
function getProcessRunningInformation(): Promise<Array<ProcessRunningInfo>>
```

Obtains information about the running processes. This API uses a promise to return the result. > This API is deprecated since API version 9. You are advised to use > [appManager.getRunningProcessInformation](../../apis-ability-kit/arkts-apis/arkts-appmanager-getrunningprocessinformation-f.md#getRunningProcessInformation-1) > instead.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager:appManager#getRunningProcessInformation

**Required permissions:** 

- API version8  to  10: ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ProcessRunningInfo>> | Promise used to return the information about the running processes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16000050 | Internal error. Possible causes: 1. Failed to connect to the system service; |

## getProcessRunningInformation

```TypeScript
function getProcessRunningInformation(callback: AsyncCallback<Array<ProcessRunningInfo>>): void
```

Obtains information about the running processes. This API uses an asynchronous callback to return the result. > This API is deprecated since API version 9. You are advised to use > [appManager.getRunningProcessInformation]{ > @link @ohos.app.ability.appManager:appManager.getRunningProcessInformation()} instead.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager:appManager#getRunningProcessInformation

**Required permissions:** 

- API version8  to  10: ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;ProcessRunningInfo>> | Yes | Callback used to return the result. If the API call  is successful, err is undefined and data is the information about the running processes. Otherwise,  err is an error object. You can perform error handling or other custom processing. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. Possible causes: 1. Failed to connect to the system service; |

