# queryToolSummaries (System API)

## Modules to Import

```TypeScript
import { cliManager } from '@kit.AbilityKit';
```

## queryToolSummaries

```TypeScript
function queryToolSummaries(): Promise<Array<ToolSummary>>
```

Query all tool summary information. The summary information only contains the fields: name, description, version.

**Since:** 26.0.0

**Required permissions:** ohos.permission.QUERY_CLI_TOOL

**Model restriction:** This API can be used only in the stage model.

<!--Device-cliManager-function queryToolSummaries(): Promise<Array<ToolSummary>>--><!--Device-cliManager-function queryToolSummaries(): Promise<Array<ToolSummary>>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<ToolSummary>> | List of full tool summaries. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| 35600050 | System Error. 1. Connect to system service failed;2.System service failed to communicate with dependency module. |

