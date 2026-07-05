# isSupportAction

## isSupportAction

```TypeScript
function isSupportAction(mechId: int, actionType: ActionType): boolean
```

Check whether the specific action type is supported.

**Since:** 26.0.0

**System capability:** SystemCapability.Mechanic.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mechId | int | Yes | ID of the mechanical device.  The value should be an integer. |
| actionType | ActionType | Yes | Type of action sequence. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Indicates whether the action type is supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |

