# setScreenLockDisabled

## setScreenLockDisabled

```TypeScript
function setScreenLockDisabled(disable: boolean, userId: int): Promise<boolean>
```

Disable screen lock showing for os account local userId. This only becomes effective when there is no password.

**起始版本：** 12

**需要权限：** 

 ohos.permission.ACCESS_SCREEN_LOCK

**系统能力：** SystemCapability.MiscServices.ScreenLock

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| disable | boolean | 是 | disable or enable screen lock showing. |
| userId | int | 是 | Os account local userId. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |
| 13200002 | the screenlock management service is abnormal. |

