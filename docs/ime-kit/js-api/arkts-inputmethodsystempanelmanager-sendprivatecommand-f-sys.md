# sendPrivateCommand

## sendPrivateCommand

```TypeScript
function sendPrivateCommand(commandData: Record<string, CommandDataType>): Promise<void>
```

Send private command.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| commandData | Record&lt;string, CommandDataType> | Yes | command data which will be sent. Max size 32KB. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |
| 12800026 | input method system panel error. Possible causes:  1. the system panel not connected. 2. ipc failed due to the large amount of data transferred or other reasons.  3. the caller is not system panel. |

