# sendSystemCommonCommand

## sendSystemCommonCommand

```TypeScript
function sendSystemCommonCommand(command: string, args: ExtraInfo): Promise<string>
```

Send system control command. The system automatically selects the recipient.

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | string | Yes | The command name to be sent. |
| args | ExtraInfo | Yes | The parameters of command info |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | callback info for sync command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 6600101 | Session service exception. |
| 6600105 | Invalid session command. |
| 6600107 | Too many commands or events. |

