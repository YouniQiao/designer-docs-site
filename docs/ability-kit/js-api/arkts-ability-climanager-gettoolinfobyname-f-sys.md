# getToolInfoByName (System API)

## Modules to Import

```TypeScript
import { cliManager } from '@kit.AbilityKit';
```

## getToolInfoByName

```TypeScript
function getToolInfoByName(toolName: string): Promise<ToolInfo>
```

Get detailed information of a single tool by its name

**Since:** 26.0.0

**Required permissions:** ohos.permission.QUERY_CLI_TOOL

**Model restriction:** This API can be used only in the stage model.

<!--Device-cliManager-function getToolInfoByName(toolName: string): Promise<ToolInfo>--><!--Device-cliManager-function getToolInfoByName(toolName: string): Promise<ToolInfo>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| toolName | string | Yes | The name of target tool. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ToolInfo> | detailed information of tool. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| 35600030 | No tool with the specified name exists. |
| 35600050 | System Error. 1. Connect to system service failed;2.System service failed to communicate with dependency module. |

