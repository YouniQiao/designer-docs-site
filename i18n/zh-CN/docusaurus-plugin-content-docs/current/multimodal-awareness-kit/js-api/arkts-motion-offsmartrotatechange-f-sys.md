# offSmartRotateChange

## offSmartRotateChange

```TypeScript
function offSmartRotateChange(callback?: Callback<SmartRotateEvent>): void
```

Unsubscribe to smart rotate sensor event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.Motion

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SmartRotateEvent> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 31500001 | Service exception. Possible causes: 1. A system error, such as null pointer,  container-related exception; 2. N-API invocation exception, invalid N-API status. |

