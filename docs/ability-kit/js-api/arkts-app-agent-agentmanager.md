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

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [connectAgentExtensionAbility](arkts-ability-connectagentextensionability-f-sys.md#connectagentextensionability-1) | Connects to an AgentExtensionAbility. |
| [connectServiceExtensionAbility](arkts-ability-connectserviceextensionability-f-sys.md#connectserviceextensionability-1) | Connects an AgentExtensionAbility to a ServiceExtensionAbility. If the target service extension ability is visible, you can connect to it. If the target service extension ability is invisible, you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to connect to it. If the target service extension ability is on a remote device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC. |
| [deleteAgentCard](arkts-ability-deleteagentcard-f-sys.md#deleteagentcard-1) | Deletes the AgentCard within specified agent id. |
| [disconnectAgentExtensionAbility](arkts-ability-disconnectagentextensionability-f-sys.md#disconnectagentextensionability-1) | Disconnects to an AgentExtensionAbility. |
| [disconnectServiceExtensionAbility](arkts-ability-disconnectserviceextensionability-f-sys.md#disconnectserviceextensionability-1) | Disconnects an AgentExtensionAbility from a ServiceExtensionAbility, in contrast to {@link connectServiceExtensionAbility}. |
| [getAgentCardByAgentId](arkts-ability-getagentcardbyagentid-f-sys.md#getagentcardbyagentid-1) | Gets the AgentCard within specified agent id. |
| [getAgentCardsByBundleName](arkts-ability-getagentcardsbybundlename-f-sys.md#getagentcardsbybundlename-1) | Gets all AgentCards within specified bundleName. |
| [getAllAgentCards](arkts-ability-getallagentcards-f-sys.md#getallagentcards-1) | Gets all AgentCards on the device. |
| [notifyLowCodeAgentComplete](arkts-ability-notifylowcodeagentcomplete-f-sys.md#notifylowcodeagentcomplete-1) | Notifies that the specified LOW_CODE agent has completed. |
| [registerAgentCard](arkts-ability-registeragentcard-f-sys.md#registeragentcard-1) | Registers an AgentCard. If `agentCard.type` is not specified, it defaults to `agentConstant.AgentCardType.APP`. When the type is `APP` or `LOW_CODE`, `appInfo` is validated, especially `bundleName` and `abilityName`. A maximum of 1000 AgentCards can be registered under one bundle. |
| [updateAgentCard](arkts-ability-updateagentcard-f-sys.md#updateagentcard-1) | Updates the AgentCard within specified agent id. |
<!--DelEnd-->

