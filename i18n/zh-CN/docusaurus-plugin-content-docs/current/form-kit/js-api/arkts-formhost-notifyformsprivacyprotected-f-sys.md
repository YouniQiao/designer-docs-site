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

**起始版本：** 9

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | 是 | ID of the widgets. |
| isProtected | boolean | 是 | Whether a widget requires privacy protection.  true: The widget requires privacy protection.  false: The widget does not require privacy protection. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If privacy protection is set  successfully, error is undefined; otherwise, error is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | 是 | ID of the widgets. |
| isProtected | boolean | 是 | Whether a widget requires privacy protection.  true: The widget requires privacy protection.  false: The widget does not require privacy protection. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16501000 | An internal functional error occurred. |

