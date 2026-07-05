# notifyFormsPrivacyProtected

## notifyFormsPrivacyProtected

```TypeScript
function notifyFormsPrivacyProtected(
    formIds: Array<string>,
    isProtected: boolean,
    callback: AsyncCallback<void>
  ): void
```

Notifies that the privacy protection status of the specified widgets changes. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | Yes | ID of the widgets. |
| isProtected | boolean | Yes | Whether a widget requires privacy protection.  true: The widget requires privacy protection.  false: The widget does not require privacy protection. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If privacy protection is set  successfully, error is undefined; otherwise, error is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16501000 | An internal functional error occurred. |

## notifyFormsPrivacyProtected

```TypeScript
function notifyFormsPrivacyProtected(formIds: Array<string>, isProtected: boolean): Promise<void>
```

Notifies that the privacy protection status of the specified widgets changes. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | Yes | ID of the widgets. |
| isProtected | boolean | Yes | Whether a widget requires privacy protection.  true: The widget requires privacy protection.  false: The widget does not require privacy protection. |

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

