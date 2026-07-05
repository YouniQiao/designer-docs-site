# isScreenLockDisabled

## isScreenLockDisabled

```TypeScript
function isScreenLockDisabled(userId: int): boolean
```

Check whether screen lock is disabled for os account local userId.

**起始版本：** 12

**需要权限：** 

 ohos.permission.ACCESS_SCREEN_LOCK

**系统能力：** SystemCapability.MiscServices.ScreenLock

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | int | 是 | Os account local userId. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | whether screen lock is disabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |
| 13200002 | the screenlock management service is abnormal. |

