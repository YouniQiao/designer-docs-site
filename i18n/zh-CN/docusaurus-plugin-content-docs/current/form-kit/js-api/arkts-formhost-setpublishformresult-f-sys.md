# setPublishFormResult

## setPublishFormResult

```TypeScript
function setPublishFormResult(formId: string, result: formInfo.PublishFormResult): void
```

Sets the result for the operation of adding a widget to the home screen.

**起始版本：** 12

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Widget ID. |
| result | formInfo.PublishFormResult | 是 | Result of the operation. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16501000 | An internal functional error occurred. |
| 16501001 | The ID of the form to be operated does not exist. |

