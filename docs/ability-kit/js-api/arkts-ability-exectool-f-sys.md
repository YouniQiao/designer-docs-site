# execTool (System API)

## Modules to Import

```TypeScript
import { cliManager } from '@ohos.app.cli.cliManager';
```

## execTool

```TypeScript
function execTool(toolName: string, subCommand: string, args: Record<string, Object>, challenge: string,
    execOptions?: ExecOptions): Promise<CliSessionInfo>
```

Execute a CLI command

**Since:** 26.0.0

**Required permissions:** ohos.permission.EXEC_CLI_TOOL

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| toolName | string | Yes | The name of target tool. |
| subCommand | string | Yes | The subCommand of this execute action. |
| args | Record&lt;string, Object&gt; | Yes | The input args of tool. |
| challenge | string | Yes | The unique identifier get from access token manager. |
| execOptions | ExecOptions | No | The options of this action. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CliSessionInfo&gt; | execute result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| 35600030 | No tool with the specified name exists. |
| 35600031 | Maximum number of processes has been reached. |
| 35600050 | System Error. 1. Failed to connect to the system service;2. The system service failed to communicate with the dependent module. |

