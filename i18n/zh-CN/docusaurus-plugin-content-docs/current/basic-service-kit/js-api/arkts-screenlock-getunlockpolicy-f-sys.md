# getUnlockPolicy

## getUnlockPolicy

```TypeScript
function getUnlockPolicy(userId: int): UnlockPolicy
```

Obtains the authentication policy used to unlock the screen.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_SCREEN_LOCK

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.ScreenLock

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | int | 是 | Local user ID of the OS account. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UnlockPolicy | The unlock policy. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed: applications that are not system applications  cannot use system API. |
| 13200002 | The screen lock management service is abnormal. |
| 13200004 | The userId is not the same as the caller, and the caller is not authorized. |

