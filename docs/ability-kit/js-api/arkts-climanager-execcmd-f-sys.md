# execCmd

## execCmd

```TypeScript
function execCmd(cmd: string, execCmdOptions?: ExecCmdOptions): Promise<CliSessionInfo>
```

Execute a command. This API uses a promise to return the result.

**Since:** 26.1.0

**Required permissions:** 

 ohos.permission.EXEC_CLI_TOOL

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cmd | string | Yes | The command to execute. |
| execCmdOptions | ExecCmdOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CliSessionInfo> | Promise used to return CliSessionInfo. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 35600031 | Maximum number of processes has been reached. |
| 35600050 | System Error. 1. Failed to connect to the system service;  2. The system service failed to communicate with the dependent module. |

