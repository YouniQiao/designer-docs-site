# onSystemCommonEvent (System API)

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

<a id="onsystemcommonevent"></a>
## onSystemCommonEvent

```TypeScript
function onSystemCommonEvent(callback: EventProcess): void
```

Register system common event callback

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-avSession-function onSystemCommonEvent(callback: EventProcess): void--><!--Device-avSession-function onSystemCommonEvent(callback: EventProcess): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | EventProcess | Yes | Used to handle event when the common command is received |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |

