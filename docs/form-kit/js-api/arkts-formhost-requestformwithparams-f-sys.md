# requestFormWithParams

## requestFormWithParams

```TypeScript
function requestFormWithParams(formId: string, wantParams?: Record<string, Object>): Promise<void>
```

Carries parameters to request a widget update. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |
| wantParams | Record&lt;string, Object> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16501000 | An internal functional error occurred. |
| 16501001 | The ID of the form to be operated does not exist. |
| 16501003 | The form cannot be operated by the current application. |

