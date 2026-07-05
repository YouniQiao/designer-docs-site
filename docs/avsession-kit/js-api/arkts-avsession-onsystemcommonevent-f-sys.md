# onSystemCommonEvent

## onSystemCommonEvent

```TypeScript
function onSystemCommonEvent(callback: EventProcess): void
```

Register system common event callback

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | EventProcess | Yes | Used to handle event when the common command is received |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |
| 6600101 | Session service exception. |

