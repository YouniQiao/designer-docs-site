# isSystemReady

## isSystemReady

```TypeScript
function isSystemReady(callback: AsyncCallback<void>): void
```

Checks whether the system is ready. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the check is successful,  error is undefined; otherwise, error is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## isSystemReady

```TypeScript
function isSystemReady(): Promise<void>
```

Checks whether the system is ready. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |

