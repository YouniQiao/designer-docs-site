# sendMessage (System API)

## Modules to Import

```TypeScript
import { cliManager } from '@kit.AbilityKit';
```

## sendMessage

```TypeScript
function sendMessage(sessionId: string, message: string): Promise<void>
```

Send event to target process.

**Since:** 26.0.0

**Required permissions:** ohos.permission.EXEC_CLI_TOOL

**Model restriction:** This API can be used only in the stage model.

<!--Device-cliManager-function sendMessage(sessionId: string, message: string): Promise<void>--><!--Device-cliManager-function sendMessage(sessionId: string, message: string): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | string | Yes | The session id of target tool process. |
| message | string | Yes | The message to write, max length is 10240. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| 35600032 | The session does not exist. |
| 35600033 | failed to write message to tool. |
| 35600050 | System Error. 1. Connect to system service failed;2.System service failed to communicate with dependency module. |

