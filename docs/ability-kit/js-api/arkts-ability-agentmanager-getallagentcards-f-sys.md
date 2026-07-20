# getAllAgentCards (System API)

## Modules to Import

```TypeScript
import { agentManager } from '@kit.AbilityKit';
```

## getAllAgentCards

```TypeScript
function getAllAgentCards(): Promise<Array<AgentCard>>
```

Gets all AgentCards on the device.

**Since:** 24

**Required permissions:** ohos.permission.GET_AGENT_CARD

**Model restriction:** This API can be used only in the stage model.

<!--Device-agentManager-function getAllAgentCards(): Promise<Array<AgentCard>>--><!--Device-agentManager-function getAllAgentCards(): Promise<Array<AgentCard>>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<AgentCard>> | Returns the array of AgentCard. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1.Connect to system service failed.2.System service failed to communicate with dependency module. |

