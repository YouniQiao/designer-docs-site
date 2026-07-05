# notifyFormsEnableUpdate

## notifyFormsEnableUpdate

```TypeScript
function notifyFormsEnableUpdate(
    formIds: Array<string>,
    isEnableUpdate: boolean,
    callback: AsyncCallback<void>
  ): void
```

Instructs the widgets to enable or disable updates. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | Yes | List of widget IDs. |
| isEnableUpdate | boolean | Yes | Whether the widget can be updated.  true: The widget can be updated.  false: The widget cannot be updated. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the notification is sent,  error is undefined; otherwise, error is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16501000 | An internal functional error occurred. |
| 16501003 | The form cannot be operated by the current application. |

## notifyFormsEnableUpdate

```TypeScript
function notifyFormsEnableUpdate(formIds: Array<string>, isEnableUpdate: boolean): Promise<void>
```

Instructs the widgets to enable or disable updates. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | Yes | List of widget IDs. |
| isEnableUpdate | boolean | Yes | Whether the widget can be updated.  true: The widget can be updated.  false: The widget cannot be updated. |

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
| 16501003 | The form cannot be operated by the current application. |

