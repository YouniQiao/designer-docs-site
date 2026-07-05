# queryCapabilities

## queryCapabilities

```TypeScript
function queryCapabilities(capabilities: UserStatusAtomicCap[]): UserStatusAtomicCap[]
```

Queries device-supported atomic capabilities.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.UserStatus

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| capabilities | UserStatusAtomicCap[] | 是 | List of atomic capabilities to query. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UserStatusAtomicCap[] | Returns the list of device-supported atomic capabilities. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission check failed. A non-system application uses the system API. |
| 33900001 | Service exception. Possible causes:  1. Node-API invocation exception, such as invalid Node-API status.  2. IPC request exception. |

