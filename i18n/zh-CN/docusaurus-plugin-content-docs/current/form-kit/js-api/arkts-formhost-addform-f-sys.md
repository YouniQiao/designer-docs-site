# addForm

## addForm

```TypeScript
function addForm(want: Want): Promise<formInfo.RunningFormInfo>
```

Add a form. You can use this method to create a theme form.

**起始版本：** 12

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates want of the form. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;formInfo.RunningFormInfo> | Return the form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16501000 | An internal functional error occurred. |

