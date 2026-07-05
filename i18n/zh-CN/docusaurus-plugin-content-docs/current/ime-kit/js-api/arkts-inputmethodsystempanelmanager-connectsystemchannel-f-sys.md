# connectSystemChannel

## connectSystemChannel

```TypeScript
function connectSystemChannel(): Promise<void>
```

Connect system channel for the panel and input method.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.CONNECT_IME_ABILITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. |
| 202 | not system application. |
| 12800008 | input method manager service error. Possible causes:  a system error, such as null pointer, IPC exception. |
| 12800026 | input method system panel error. Possible causes:  1. the system panel not connected. 2. ipc failed due to the large amount of data transferred or other reasons.  3. the caller is not system panel. |

