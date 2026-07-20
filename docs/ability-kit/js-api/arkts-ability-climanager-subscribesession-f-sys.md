# subscribeSession (System API)

## Modules to Import

```TypeScript
import { cliManager } from '@kit.AbilityKit';
```

## subscribeSession

```TypeScript
function subscribeSession(sessionId: string, callback: ToolEventCallback): Promise<void>
```

Subscribe session event.

**Since:** 26.0.0

**Required permissions:** ohos.permission.EXEC_CLI_TOOL

**Model restriction:** This API can be used only in the stage model.

<!--Device-cliManager-function subscribeSession(sessionId: string, callback: ToolEventCallback): Promise<void>--><!--Device-cliManager-function subscribeSession(sessionId: string, callback: ToolEventCallback): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | string | Yes | The session id of target tool process. |
| callback | [ToolEventCallback](arkts-ability-tooleventcallback-i-sys.md) | Yes | The input args of tool. |

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
| 35600050 | System Error. 1. Connect to system service failed;2.System service failed to communicate with dependency module. |

