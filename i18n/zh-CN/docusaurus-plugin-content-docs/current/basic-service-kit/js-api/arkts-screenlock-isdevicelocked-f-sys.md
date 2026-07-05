# isDeviceLocked

## isDeviceLocked

```TypeScript
function isDeviceLocked(userId: int): boolean
```

Check whether the device is currently locked and the screenlock requires an identity to authenticate and unlock.

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.ScreenLock

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | int | 是 | Os account local userId. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the device is currently locked. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 13200002 | The screenlock management service is abnormal. |
| 13200004 | The userId is not same as the caller, and is not allowed for the caller. |

