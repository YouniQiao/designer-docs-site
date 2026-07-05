# subscribe

## subscribe

```TypeScript
function subscribe(events: MechEventType[], callback: Callback<MechEvent>): void
```

Subscribe to the specified events.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Mechanic.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| events | MechEventType[] | 是 | Events to subscribe to. |
| callback | Callback&lt;MechEvent> | 是 | Callback of event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |
| 33300003 | Feature not supported. |

