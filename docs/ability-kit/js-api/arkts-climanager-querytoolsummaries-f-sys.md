# queryToolSummaries

## queryToolSummaries

```TypeScript
function queryToolSummaries(): Promise<Array<ToolSummary>>
```

Query all tool summary information. The summary information only contains the fields: name, description, version.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.QUERY_CLI_TOOL

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ToolSummary>> | List of full tool summaries. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 35600050 | System Error. 1. Connect to system service failed;  2.System service failed to communicate with dependency module. |

