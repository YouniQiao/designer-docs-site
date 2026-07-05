# querySession (System API)

## Modules to Import

```TypeScript
import { cliManager } from '@ohos.app.cli.cliManager';
```

## querySession

```TypeScript
function querySession(sessionId: string): Promise<CliSessionInfo>
```

Query session status.

**Since:** 26.0.0

**Required permissions:** ohos.permission.EXEC_CLI_TOOL

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | string | Yes | The session id of target tool process. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CliSessionInfo&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| 35600032 | The session does not exist. |
| 35600050 | System Error. 1. Connect to system service failed;2.System service failed to communicate with dependency module. |

