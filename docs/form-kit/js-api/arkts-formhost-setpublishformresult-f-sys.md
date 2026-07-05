# setPublishFormResult

## setPublishFormResult

```TypeScript
function setPublishFormResult(formId: string, result: formInfo.PublishFormResult): void
```

Sets the result for the operation of adding a widget to the home screen.

**Since:** 12

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |
| result | formInfo.PublishFormResult | Yes | Result of the operation. |

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

