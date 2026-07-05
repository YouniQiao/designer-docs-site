# onSystemPrivateCommand

## onSystemPrivateCommand

```TypeScript
function onSystemPrivateCommand(callback: Callback<Record<string, CommandDataType>>): void
```

Subscribe to the event when the input method application sends private data commands.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, CommandDataType>> | Yes | callback triggered when  an input method application sends a private data command. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |

