# execTool (System API)

## Modules to Import

```TypeScript
import { cliManager } from '@kit.AbilityKit';
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

<!--Device-cliManager-function execTool(toolName: string, subCommand: string, args: Record<string, Object>, challenge: string,
    execOptions?: ExecOptions): Promise<CliSessionInfo>--><!--Device-cliManager-function execTool(toolName: string, subCommand: string, args: Record<string, Object>, challenge: string,
    execOptions?: ExecOptions): Promise<CliSessionInfo>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| toolName | string | Yes | The name of target tool. |
| subCommand | string | Yes | The subCommand of this execute action. |
| args | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)<string, Object> | Yes | The input args of tool. |
| challenge | string | Yes | The unique identifier get from access token manager. |
| execOptions | [ExecOptions](arkts-ability-climanager-execoptions-i-sys.md) | No | The options of this action. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<CliSessionInfo> | execute result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| 35600030 | No tool with the specified name exists. |
| 35600031 | Maximum number of processes has been reached. |
| 35600050 | System Error. 1. Failed to connect to the system service;2. The system service failed to communicate with the dependent module. |

