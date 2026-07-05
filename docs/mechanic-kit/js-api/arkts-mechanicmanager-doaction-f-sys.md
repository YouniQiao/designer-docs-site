# doAction

## doAction

```TypeScript
function doAction(mechId: int, actionType: ActionType): Promise<Result>
```

Execute an action sequence.

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
| Promise&lt;Result> | Promise that returns the execution result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |
| 33300003 | Feature not supported. |

