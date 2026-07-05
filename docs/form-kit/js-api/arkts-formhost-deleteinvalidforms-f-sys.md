# deleteInvalidForms

## deleteInvalidForms

```TypeScript
function deleteInvalidForms(formIds: Array<string>, callback: AsyncCallback<int>): void
```

Deletes invalid widgets from the list. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | Yes | List of valid widget IDs. |
| callback | AsyncCallback&lt;int> | Yes | Callback used to return the result. If the invalid widgets are deleted,  error is undefined and data is the number of widgets deleted; otherwise, error is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16501000 | An internal functional error occurred. |

## deleteInvalidForms

```TypeScript
function deleteInvalidForms(formIds: Array<string>): Promise<int>
```

Deletes invalid widgets from the list. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | Yes | List of valid widget IDs. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise used to return the number of widgets deleted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16501000 | An internal functional error occurred. |

