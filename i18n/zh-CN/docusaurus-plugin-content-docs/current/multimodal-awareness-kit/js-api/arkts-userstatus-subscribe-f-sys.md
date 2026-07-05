# subscribe

## subscribe

```TypeScript
function subscribe(featureId: UserStatusFeature, callback: Callback<UserStatusData>,
    deviceInfo?: DeviceInfo[]): int
```

Subscribes to user status monitoring.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.UserStatus

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| featureId | UserStatusFeature | 是 | Indicates the feature to be unsubscribed to. |
| callback | Callback&lt;UserStatusData> | 是 | Callback used to return user status data. |
| deviceInfo | DeviceInfo[] | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the registered callback ID. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system application. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 33900001 | Service exception. Possible causes:  1. System error, such as null pointer and container-related exception.  2. Node-API invocation exception, such as invalid Node-API status. |
| 33900002 | Subscription failed. Possible causes:  1. Callback registration failed.  2. Failed to bind native object to JS wrapper.  3. Node-API invocation exception, such as invalid Node-API status.  4. IPC request exception. |

