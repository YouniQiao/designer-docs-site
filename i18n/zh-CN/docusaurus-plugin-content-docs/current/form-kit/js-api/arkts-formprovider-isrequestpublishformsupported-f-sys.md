# isRequestPublishFormSupported

## isRequestPublishFormSupported

```TypeScript
function isRequestPublishFormSupported(callback: AsyncCallback<boolean>): void
```

Checks whether a widget can be added to the widget host. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Callback function that returns the query result. true: The widget  can be added to the widget host. false: The widget cannot be added to the widget host. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16501000 | An internal functional error occurred. |

## isRequestPublishFormSupported

```TypeScript
function isRequestPublishFormSupported(): Promise<boolean>
```

Checks whether a widget can be added to the widget host. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise that returns whether a widget can be added to the widget host.   true: The widget can be added to the widget host.   false: The widget cannot be added to the widget host. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 16500050 | IPC connection error. |
| 16501000 | An internal functional error occurred. |

