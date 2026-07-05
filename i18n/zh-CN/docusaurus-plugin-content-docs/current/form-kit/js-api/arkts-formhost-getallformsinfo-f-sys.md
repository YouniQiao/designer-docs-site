# getAllFormsInfo

## getAllFormsInfo

```TypeScript
function getAllFormsInfo(callback: AsyncCallback<Array<formInfo.FormInfo>>): void
```

Obtains the widget information provided by all applications on the device (excluding template widgets). This API uses an asynchronous callback to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;formInfo.FormInfo>> | 是 | Callback used to return the result. If the widget  information is obtained, error is undefined and data is the information obtained; otherwise, error  is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16501000 | An internal functional error occurred. |

## getAllFormsInfo

```TypeScript
function getAllFormsInfo(): Promise<Array<formInfo.FormInfo>>
```

Obtains the widget information provided by all applications on the device (excluding template widgets). This API uses a promise to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;formInfo.FormInfo>> | Promise used to return the information obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16501000 | An internal functional error occurred. |

