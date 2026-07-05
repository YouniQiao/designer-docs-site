# requestPublishForm

## requestPublishForm

```TypeScript
function requestPublishForm(want: Want, callback: AsyncCallback<string>): void
```

Requests to publish a widget to the widget host. This API uses an asynchronous callback to return the result. The widget host is usually the home screen.

**起始版本：** 11

**需要权限：** 

 ohos.permission.AGENT_REQUIRE_FORM

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Publish request, which must contain the following fields:  bundleName: bundle name of the target widget.  abilityName: ability of the target widget.  parameters:  - ohos.extra.param.key.form_dimension: dimension of the target widget.  - ohos.extra.param.key.form_name: name of the target widget.  - ohos.extra.param.key.module_name: module name of the target widget. |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the widget ID. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**需要权限：** 

 ohos.permission.AGENT_REQUIRE_FORM

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Publish request, which must contain the following fields:  bundleName: bundle name of the target widget.  abilityName: ability of the target widget.  parameters:  - ohos.extra.param.key.form_dimension: dimension of the target widget.  - ohos.extra.param.key.form_name: name of the target widget.  - ohos.extra.param.key.module_name: module name of the target widget. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the widget ID. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |
| 16501008 | Waiting for the form addition to the desktop timed out. [since 12] |

