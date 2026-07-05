# queryTools

## queryTools

```TypeScript
function queryTools(): Promise<Array<ToolInfo>>
```

Query all detailed information of tools

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.QUERY_CLI_TOOL

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ToolInfo>> | List of full tool detail info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 35600050 | System Error. 1. Connect to system service failed;  2.System service failed to communicate with dependency module. |

