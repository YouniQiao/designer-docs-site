# queryTools (System API)

## Modules to Import

```TypeScript
import { cliManager } from '@kit.AbilityKit';
```

## queryTools

```TypeScript
function queryTools(): Promise<Array<ToolInfo>>
```

Query all detailed information of tools

**Since:** 26.0.0

**Required permissions:** ohos.permission.QUERY_CLI_TOOL

**Model restriction:** This API can be used only in the stage model.

<!--Device-cliManager-function queryTools(): Promise<Array<ToolInfo>>--><!--Device-cliManager-function queryTools(): Promise<Array<ToolInfo>>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<ToolInfo>> | List of full tool detail info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| 35600050 | System Error. 1. Connect to system service failed;2.System service failed to communicate with dependency module. |

