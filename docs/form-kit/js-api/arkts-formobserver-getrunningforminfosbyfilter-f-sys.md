# getRunningFormInfosByFilter

## getRunningFormInfosByFilter

```TypeScript
function getRunningFormInfosByFilter(
    formProviderFilter: formInfo.FormProviderFilter
  ): Promise<Array<formInfo.RunningFormInfo>>
```

Obtains the RunningFormInfo objects by FormProviderFilter.

**Since:** 10

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formProviderFilter | formInfo.FormProviderFilter | Yes | Indicates the form provider app info. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;formInfo.RunningFormInfo>> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## getRunningFormInfosByFilter

```TypeScript
function getRunningFormInfosByFilter(
    formProviderFilter: formInfo.FormProviderFilter,
    callback: AsyncCallback<Array<formInfo.RunningFormInfo>>
  ): void
```

Obtains the RunningFormInfo objects by FormProviderFilter.

**Since:** 10

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formProviderFilter | formInfo.FormProviderFilter | Yes | Indicates the form provider app info. |
| callback | AsyncCallback&lt;Array&lt;formInfo.RunningFormInfo>> | Yes | The callback of getFormInstancesByFilter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

