# acquireFormData

## acquireFormData

```TypeScript
function acquireFormData(formId: string, callback: AsyncCallback<Record<string, Object>>): void
```

Requests data from the widget provider. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |
| callback | AsyncCallback&lt;Record&lt;string, Object>> | Yes | Callback used to return the API call result and the  shared data. [since 11] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred.  invalid input parameter during form operation |

## acquireFormData

```TypeScript
function acquireFormData(formId: string): Promise<Record<string, Object>>
```

Requests data from the widget provider. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, Object>> | The promise returned by the function. [since 10 - 10]  @returns { Promise> } Promise used to return the API call result and the shared  data. [since 11] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred.  invalid input parameter during form operation |

