# @ohos.app.agent.agentManager

The module provides the capability to interact with agents in the system.

**Since:** 24

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { agentManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[connectAgentExtensionAbility](arkts-agentmanager-connectagentextensionability-f-sys.md#connectAgentExtensionAbility-1) | Connects to an AgentExtensionAbility. |
| <!--DelRow-->[connectServiceExtensionAbility](arkts-agentmanager-connectserviceextensionability-f-sys.md#connectServiceExtensionAbility-1) | Connects an AgentExtensionAbility to a ServiceExtensionAbility. If the target service extension ability is visible, you can connect to it. If the target service extension ability is invisible, you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to connect to it. If the target service extension ability is on a remote device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC. |
| <!--DelRow-->[deleteAgentCard](arkts-agentmanager-deleteagentcard-f-sys.md#deleteAgentCard-1) | Deletes the AgentCard within specified agent id. |
| <!--DelRow-->[disconnectAgentExtensionAbility](arkts-agentmanager-disconnectagentextensionability-f-sys.md#disconnectAgentExtensionAbility-1) | Disconnects to an AgentExtensionAbility. |
| <!--DelRow-->[disconnectServiceExtensionAbility](arkts-agentmanager-disconnectserviceextensionability-f-sys.md#disconnectServiceExtensionAbility-1) | Disconnects an AgentExtensionAbility from a ServiceExtensionAbility, in contrast to {@link connectServiceExtensionAbility}. |
| <!--DelRow-->[getAgentCardByAgentId](arkts-agentmanager-getagentcardbyagentid-f-sys.md#getAgentCardByAgentId-1) | Gets the AgentCard within specified agent id. |
| <!--DelRow-->[getAgentCardsByBundleName](arkts-agentmanager-getagentcardsbybundlename-f-sys.md#getAgentCardsByBundleName-1) | Gets all AgentCards within specified bundleName. |
| <!--DelRow-->[getAllAgentCards](arkts-agentmanager-getallagentcards-f-sys.md#getAllAgentCards-1) | Gets all AgentCards on the device. |
| <!--DelRow-->[notifyLowCodeAgentComplete](arkts-agentmanager-notifylowcodeagentcomplete-f-sys.md#notifyLowCodeAgentComplete-1) | Notifies that the specified LOW_CODE agent has completed. |
| <!--DelRow-->[registerAgentCard](arkts-agentmanager-registeragentcard-f-sys.md#registerAgentCard-1) | Registers an AgentCard. If `agentCard.type` is not specified, it defaults to `agentConstant.AgentCardType.APP`. When the type is `APP` or `LOW_CODE`, `appInfo` is validated, especially `bundleName` and `abilityName`. A maximum of 1000 AgentCards can be registered under one bundle. |
| <!--DelRow-->[updateAgentCard](arkts-agentmanager-updateagentcard-f-sys.md#updateAgentCard-1) | Updates the AgentCard within specified agent id. |

