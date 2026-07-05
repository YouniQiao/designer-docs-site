# subscribe

## subscribe

```TypeScript
function subscribe(events: MechEventType[], callback: Callback<MechEvent>): void
```

Subscribe to the specified events.

**Since:** 26.0.0

**System capability:** SystemCapability.Mechanic.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| events | MechEventType[] | Yes | Events to subscribe to. |
| callback | Callback&lt;MechEvent> | Yes | Callback of event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |
| 33300003 | Feature not supported. |

