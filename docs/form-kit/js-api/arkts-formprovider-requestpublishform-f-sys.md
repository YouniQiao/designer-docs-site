# requestPublishForm

## requestPublishForm

```TypeScript
function requestPublishForm(
    want: Want,
    formBindingData: formBindingData.FormBindingData,
    callback: AsyncCallback<string>
  ): void
```

Requests to publish a widget to the widget host (usually the home screen). This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Publish request, which must contain the following fields: Information about the target widget.  abilityName: ability of the target widget. parameters: 'ohos.extra.param.key.form_dimension' '  ohos.extra.param.key.form_name' 'ohos.extra.param.key.module_name' |
| formBindingData | formBindingData.FormBindingData | Yes | Data used for creating the widget. |
| callback | AsyncCallback&lt;string> | Yes | Callback used to return the widget ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## requestPublishForm

```TypeScript
function requestPublishForm(want: Want, callback: AsyncCallback<string>): void
```

Requests to publish a widget to the widget host (usually the home screen). This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Publish request, which must contain the following fields: Information about the target widget.  abilityName: ability of the target widget. parameters: 'ohos.extra.param.key.form_dimension' '  ohos.extra.param.key.form_name' 'ohos.extra.param.key.module_name' |
| callback | AsyncCallback&lt;string> | Yes | Callback used to return the widget ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## requestPublishForm

```TypeScript
function requestPublishForm(want: Want, formBindingData?: formBindingData.FormBindingData): Promise<string>
```

Requests to publish a widget to the widget host (usually the home screen). This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Publish request, which must contain the following fields: Information about the target widget.  abilityName: ability of the target widget. parameters: 'ohos.extra.param.key.form_dimension' '  ohos.extra.param.key.form_name' 'ohos.extra.param.key.module_name' |
| formBindingData | formBindingData.FormBindingData | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise used to return the widget ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

