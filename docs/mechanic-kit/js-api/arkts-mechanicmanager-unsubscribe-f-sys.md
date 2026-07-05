# unSubscribe

## unSubscribe

```TypeScript
function unSubscribe(events: MechEventType[]): void
```

Unsubscribes the specified events.

**Since:** 26.0.0

**System capability:** SystemCapability.Mechanic.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| events | MechEventType[] | Yes | Events to be unsubscribed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |
| 33300003 | Feature not supported. |

