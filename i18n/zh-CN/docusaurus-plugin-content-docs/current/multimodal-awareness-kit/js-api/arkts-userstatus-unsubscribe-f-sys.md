# unsubscribe

## unsubscribe

```TypeScript
function unsubscribe(featureId: UserStatusFeature, callback?: Callback<UserStatusData>): int
```

Unsubscribes from user status monitoring.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.UserStatus

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| featureId | UserStatusFeature | 是 | Indicates the feature to be unsubscribed from. |
| callback | Callback&lt;UserStatusData> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns 0 if the operation succeeds; otherwise, returns a non-zero value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission check failed. A non-system application uses the system API. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 33900001 | Service exception. Possible causes:  1. System error, such as null pointer and container-related exception.  2. Node-API invocation exception, such as invalid Node-API status. |
| 33900003 | Unsubscription failed. Possible causes:  1. Callback failure.  2. Node-API invocation exception, such as invalid Node-API status.  3. IPC request exception. |

