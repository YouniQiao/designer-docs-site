# getRunningFormInfoById

## getRunningFormInfoById

```TypeScript
function getRunningFormInfoById(formId: string): Promise<formInfo.RunningFormInfo>
```

Obtains the RunningFormInfo object by formId.

**Since:** 10

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the form provider formId. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;formInfo.RunningFormInfo> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## getRunningFormInfoById

```TypeScript
function getRunningFormInfoById(formId: string, isUnusedIncluded: boolean): Promise<formInfo.RunningFormInfo>
```

Obtains the RunningFormInfo object by formId.

**Since:** 11

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the form provider formId. |
| isUnusedIncluded | boolean | Yes | Indicates whether to include unused form. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;formInfo.RunningFormInfo> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## getRunningFormInfoById

```TypeScript
function getRunningFormInfoById(formId: string, callback: AsyncCallback<formInfo.RunningFormInfo>): void
```

Obtains the RunningFormInfo object by formId.

**Since:** 10

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the form provider formId. |
| callback | AsyncCallback&lt;formInfo.RunningFormInfo> | Yes | The callback of getFormInstancesById. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## getRunningFormInfoById

```TypeScript
function getRunningFormInfoById(
    formId: string,
    isUnusedIncluded: boolean,
    callback: AsyncCallback<formInfo.RunningFormInfo>
  ): void
```

Obtains the RunningFormInfo object by formId.

**Since:** 11

**Required permissions:** 

 ohos.permission.OBSERVE_FORM_RUNNING

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the form provider formId. |
| isUnusedIncluded | boolean | Yes | Indicates whether to include unused form. |
| callback | AsyncCallback&lt;formInfo.RunningFormInfo> | Yes | The callback of getFormInstancesById. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

