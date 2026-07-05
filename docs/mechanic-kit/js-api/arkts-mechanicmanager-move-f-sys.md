# move

## move

```TypeScript
function move(mechId: int, params: MoveParams): Promise<Result>
```

Move a mechanical device with the specified parameters.

**Since:** 26.0.0

**System capability:** SystemCapability.Mechanic.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mechId | int | Yes | ID of the mechanical device.  The value should be an integer. |
| params | MoveParams | Yes | Parameters to use when moving. |

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

