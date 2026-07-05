# requestPublishForm

## requestPublishForm

```TypeScript
function requestPublishForm(want: Want, callback: AsyncCallback<string>): void
```

Requests to publish a widget to the widget host. This API uses an asynchronous callback to return the result. The widget host is usually the home screen.

**Since:** 11

**Required permissions:** 

 ohos.permission.AGENT_REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Publish request, which must contain the following fields:  bundleName: bundle name of the target widget.  abilityName: ability of the target widget.  parameters:  - ohos.extra.param.key.form_dimension: dimension of the target widget.  - ohos.extra.param.key.form_name: name of the target widget.  - ohos.extra.param.key.module_name: module name of the target widget. |
| callback | AsyncCallback&lt;string> | Yes | Callback used to return the widget ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |
| 16501008 | Waiting for the form addition to the desktop timed out. [since 12] |

## requestPublishForm

```TypeScript
function requestPublishForm(want: Want): Promise<string>
```

Requests to publish a widget to the widget host. This API uses a promise to return the result. The widget host is usually the home screen.

**Since:** 11

**Required permissions:** 

 ohos.permission.AGENT_REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Publish request, which must contain the following fields:  bundleName: bundle name of the target widget.  abilityName: ability of the target widget.  parameters:  - ohos.extra.param.key.form_dimension: dimension of the target widget.  - ohos.extra.param.key.form_name: name of the target widget.  - ohos.extra.param.key.module_name: module name of the target widget. |

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
| 16501008 | Waiting for the form addition to the desktop timed out. [since 12] |

