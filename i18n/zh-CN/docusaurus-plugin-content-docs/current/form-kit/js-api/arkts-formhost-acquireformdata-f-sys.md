# acquireFormData

## acquireFormData

```TypeScript
function acquireFormData(formId: string, callback: AsyncCallback<Record<string, Object>>): void
```

Requests data from the widget provider. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Widget ID. |
| callback | AsyncCallback&lt;Record&lt;string, Object>> | 是 | Callback used to return the API call result and the  shared data. [since 11] |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Widget ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Record&lt;string, Object>> | The promise returned by the function. [since 10 - 10]  @returns { Promise> } Promise used to return the API call result and the shared  data. [since 11] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred.  invalid input parameter during form operation |

