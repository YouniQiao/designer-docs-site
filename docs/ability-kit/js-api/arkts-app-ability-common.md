# @ohos.app.ability.common

You can use this module to reference the ability public module class.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { common } from '@kit.AbilityKit';
```

## Summary

### Types

| Name | Description |
| --- | --- |
| [AbilityResult](arkts-ability-abilityresult-t.md) | Defines the result code and data returned when a started ability is terminated. |
| [AbilityStageContext](arkts-ability-abilitystagecontext-t.md) | Defines the context environment for the [AbilityStage](arkts-ability-abilitystage-c.md). It inherits from Context. |
| [AbilityStartCallback](arkts-ability-abilitystartcallback-t.md) | Defines the callback invoked to return the UIExtensionAbility startup result. It is usually used as an input parameter in [UIAbilityContext.startAbilityByType](arkts-ability-uiabilitycontext-c.md#startabilitybytype-1) or [UIExtensionContext.startAbilityByType](arkts-ability-uiextensioncontentsession-c.md#startabilitybytype-1) . |
| [AgentAppInfo](arkts-ability-agentappinfo-t.md) | Application-related information for the agent. |
| [AgentCapabilities](arkts-ability-agentcapabilities-t.md) | Capabilities in an AgentCard represent the specific skills, services, and functions that an agent can perform or provide within the system. |
| [AgentCard](arkts-ability-agentcard-t.md) | The AgentCard information describes the basic information and capabilities provided by an Agent. |
| [AgentExtensionContext](arkts-ability-agentextensioncontext-t.md) | The context of the agent service ability. |
| [AgentHostProxy](arkts-ability-agenthostproxy-t.md) | The AgentHostProxy is a proxy object for the client connected to the Agent, through which it can communicate with the Agent's connection counterpart. |
| [AgentProvider](arkts-ability-agentprovider-t.md) | The Provider in an AgentCard refers to the organization or platform that issues and manages the agent's credentials. |
| [AgentSkill](arkts-ability-agentskill-t.md) | Skills in an AgentCard represent the specific abilities, expertise, and proficiencies that an agent possesses for performing tasks or solving problems. |
| [AppServiceExtensionContext](arkts-ability-appserviceextensioncontext-t.md) | Defines the context environment for the [AppServiceExtensionAbility](../../../../reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md) . It inherits from Context. |
| [ApplicationContext](arkts-ability-applicationcontext-t.md) | Defines the application context. It inherits from Context. |
| [BaseContext](arkts-ability-basecontext-t.md) | Defines the parent class of all context types. |
| [ConnectOptions](arkts-ability-connectoptions-t.md) | Defines the connection options. It is used as an input parameter for connection to a background service, to receive the connection status with the background service. |
| [Context](arkts-ability-context-t.md) | Defines the context base class for the [stage model](../../../../application-models/ability-terminology.md#stage-model). |
| [EmbeddableUIAbilityContext](arkts-ability-embeddableuiabilitycontext-t.md) | Defines the context environment for the [EmbeddableUIAbility](arkts-ability-embeddableuiability-c.md). It inherits from Context. |
| [EventHub](arkts-ability-eventhub-t.md) | Defines EventHub, which is an event communication mechanism based on the publish-subscribe pattern. |
| [ExtensionContext](arkts-ability-extensioncontext-t.md) | Defines the context environment for the [ExtensionAbility](arkts-ability-extensionability-c.md). It inherits from Context. |
| [FormEditExtensionContext](arkts-ability-formeditextensioncontext-t.md) | The context of form edit extension. It allows access to formEditExtension-specific resources. |
| [FormExtensionContext](arkts-ability-formextensioncontext-t.md) | The context of form extension. It allows access to formExtension-specific resources. |
| [LiveFormExtensionContext](arkts-ability-liveformextensioncontext-t.md) | The context of live form extension. It allows access to liveFormExtension-specific resources. |
| [PacMap](arkts-ability-pacmap-t.md) | Defines the container of basic data types. |
| [PhotoEditorExtensionContext](arkts-ability-photoeditorextensioncontext-t.md) | The context of an photo editor extension ability. |
| [UIAbilityContext](arkts-ability-uiabilitycontext-t.md) | Defines the context environment for the [UIAbility](arkts-app-ability-uiability.md). It inherits from Context. |
| [UIExtensionContext](arkts-ability-uiextensioncontext-t.md) | Defines the context environment for the [UIExtensionAbility](arkts-ability-uiextensionability-c.md). It inherits from Context. |
| [UIServiceExtensionConnectCallback](arkts-ability-uiserviceextensionconnectcallback-t.md) | Defines the connection callback. It is used as an input parameter for connection to a UIServiceExtensionAbility, to provide the callback for the connection. |
| [UIServiceProxy](arkts-ability-uiserviceproxy-t.md) | Defines the capability for data communication with the UIServiceExtensionAbility. UIServiceExtensionAbility is a special type of ExtensionAbility provided by the system and is used to provide extended capabilities related to floating windows. |
| [VpnExtensionContext](arkts-ability-vpnextensioncontext-t.md) | The context of vpn extension. It allows access to vpnExtension-specific resources. The class of auto startup info. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [AgentExtensionConnectCallback](arkts-ability-agentextensionconnectcallback-t-sys.md) | Represents the AgentExtensionConnectCallback type. |
| [AgentProxy](arkts-ability-agentproxy-t-sys.md) | Represents the AgentProxy type. |
| [AutoFillExtensionContext](arkts-ability-autofillextensioncontext-t-sys.md) | Level-2 module AutoFillExtensionContext. |
| [AutoStartupCallback](arkts-ability-autostartupcallback-t-sys.md) | Level-2 module AutoStartupCallback. |
| [AutoStartupInfo](arkts-ability-autostartupinfo-t-sys.md) | Level-2 module AutoStartupInfo. |
| [CliToolEvent](arkts-ability-clitoolevent-t-sys.md) | The event data of cli execute. |
| [FunctionInfo](arkts-ability-functioninfo-t-sys.md) | Describes the basic information of a function. |
| [ServiceExtensionContext](arkts-ability-serviceextensioncontext-t-sys.md) | Level-2 module ServiceExtensionContext. |
| [ToolEventCallback](arkts-ability-tooleventcallback-t-sys.md) | Define the cli event callback function. |
| [ToolInfo](arkts-ability-toolinfo-t-sys.md) | Define basic information about the CLI tool. |
| [ToolSummary](arkts-ability-toolsummary-t-sys.md) | Define basic summary information about the CLI tool. |
| [UIServiceExtensionContext](arkts-ability-uiserviceextensioncontext-t-sys.md) | Level-2 module UIServiceExtensionContext. |
| [UIServiceHostProxy](arkts-ability-uiservicehostproxy-t-sys.md) | Level-2 module UIServiceHostProxy. |
<!--DelEnd-->

