# @ohos.app.ability.common

本模块提供Ability Kit中常用公共能力的纯类型定义，包含各类上下文对象、回调接口和数据结构。本模块仅导出类型声明，不包含具体实现逻辑或可执行代码。

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
| [AbilityResult](arkts-common-abilityresult-t.md) | 定义Ability被拉起并退出后返回的结果码和数据。 |
| [AbilityStageContext](arkts-common-abilitystagecontext-t.md) | [AbilityStage]{@link @ohos.app.ability.AbilityStage:AbilityStage}组件上下文，继承自Context。 |
| [AbilityStageContext](arkts-common-abilitystagecontext-t.md) | [AbilityStage]{@link @ohos.app.ability.AbilityStage:AbilityStage}组件上下文，继承自Context。 |
| [AbilityStartCallback](arkts-common-abilitystartcallback-t.md) | 定义了拉起UIExtensionAbility的回调结果，通常作为 [UIAbilityContext.startAbilityByType]{@link ./application/UIAbilityContext:UIAbilityContext.startAbilityByType(type: string, wantParam: Record<string, Object>, abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>)} / [UIExtensionContext.startAbilityByType]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession.startAbilityByType(type: string, wantParam: Record<string, Object>, abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>)} 的入参传入。 |
| [AgentAppInfo](arkts-common-agentappinfo-t.md) | agent的应用程序相关信息。 |
| [AgentCapabilities](arkts-common-agentcapabilities-t.md) | AgentCard中的功能表示特定的skills、服务和功能 agent可以在系统内执行或提供。 |
| [AgentCard](arkts-common-agentcard-t.md) | AgentCard在系统中显示agent的配置文件和联系信息。 |
| <!--DelRow-->[AgentExtensionConnectCallback](arkts-common-agentextensionconnectcallback-t-sys.md) | 表示AgentExtensionConnectCallback类型。 |
| [AgentExtensionContext](arkts-common-agentextensioncontext-t.md) | agent service ability的上下文。 |
| [AgentHostProxy](arkts-common-agenthostproxy-t.md) | AgentHostProxy是连接到Agent的客户端的代理对象，通过它可以与agent.的连接对应方通信。 |
| [AgentProvider](arkts-common-agentprovider-t.md) | AgentCard中的Provider是指发行和的组织或平台。 管理代理的凭据。 |
| <!--DelRow-->[AgentProxy](arkts-common-agentproxy-t-sys.md) | 表示AgentProxy类型。 |
| [AgentSkill](arkts-common-agentskill-t.md) | AgentCard中的技能表示特定的 skills、专业知识和熟练程度 用于执行任务或解决问题的代理。 |
| [ApplicationContext](arkts-common-applicationcontext-t.md) | 应用上下文，继承自Context。 |
| [ApplicationContext](arkts-common-applicationcontext-t.md) | 应用上下文，继承自Context。 |
| [AppServiceExtensionContext](arkts-common-appserviceextensioncontext-t.md) | [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md) 组件上下文，继承自Context。 |
| [AppServiceExtensionContext](arkts-common-appserviceextensioncontext-t.md) | [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md) 组件上下文，继承自Context。 |
| <!--DelRow-->[AutoFillExtensionContext](arkts-common-autofillextensioncontext-t-sys.md) | AutoFillExtensionContext二级模块。 |
| <!--DelRow-->[AutoFillExtensionContext](arkts-common-autofillextensioncontext-t-sys.md) | AutoFillExtensionContext二级模块。 |
| <!--DelRow-->[AutoStartupCallback](arkts-common-autostartupcallback-t-sys.md) | AutoStartupCallback二级模块。 |
| <!--DelRow-->[AutoStartupInfo](arkts-common-autostartupinfo-t-sys.md) | AutoStartupInfo二级模块。 |
| [BaseContext](arkts-common-basecontext-t.md) | 所有Context类型的父类。 |
| [BaseContext](arkts-common-basecontext-t.md) | 所有Context类型的父类。 |
| [ConnectOptions](arkts-common-connectoptions-t.md) | 在连接指定的后台服务时作为入参，用于接收与后台服务的连接状态。 |
| [Context](arkts-common-context-t.md) | [Stage模型](docroot://application-models/ability-terminology.md#stage模型)的上下文基类。 |
| [Context](arkts-common-context-t.md) | [Stage模型](docroot://application-models/ability-terminology.md#stage模型)的上下文基类。 |
| [EmbeddableUIAbilityContext](arkts-common-embeddableuiabilitycontext-t.md) | [EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}组件上下文，继承自Context。 |
| [EventHub](arkts-common-eventhub-t.md) | EventHub是系统提供的基于发布-订阅模式实现的事件通信机制。 |
| [EventHub](arkts-common-eventhub-t.md) | EventHub是系统提供的基于发布-订阅模式实现的事件通信机制。 |
| [ExtensionContext](arkts-common-extensioncontext-t.md) | [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}组件上下文，继承自Context。 |
| [ExtensionContext](arkts-common-extensioncontext-t.md) | [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}组件上下文，继承自Context。 |
| [FormEditExtensionContext](arkts-common-formeditextensioncontext-t.md) | The context of form edit extension. It allows access to formEditExtension-specific resources. |
| [FormEditExtensionContext](arkts-common-formeditextensioncontext-t.md) | The context of form edit extension. It allows access to formEditExtension-specific resources. |
| [FormExtensionContext](arkts-common-formextensioncontext-t.md) | The context of form extension. It allows access to formExtension-specific resources. |
| [FormExtensionContext](arkts-common-formextensioncontext-t.md) | The context of form extension. It allows access to formExtension-specific resources. |
| [LiveFormExtensionContext](arkts-common-liveformextensioncontext-t.md) | The context of live form extension. It allows access to liveFormExtension-specific resources. |
| [LiveFormExtensionContext](arkts-common-liveformextensioncontext-t.md) | The context of live form extension. It allows access to liveFormExtension-specific resources. |
| [PacMap](arkts-common-pacmap-t.md) | 存储基础数据类型的容器。 |
| [PhotoEditorExtensionContext](arkts-common-photoeditorextensioncontext-t.md) | The context of an photo editor extension ability. |
| [PhotoEditorExtensionContext](arkts-common-photoeditorextensioncontext-t.md) | The context of an photo editor extension ability. |
| <!--DelRow-->[ServiceExtensionContext](arkts-common-serviceextensioncontext-t-sys.md) | ServiceExtensionContext二级模块。 |
| <!--DelRow-->[ServiceExtensionContext](arkts-common-serviceextensioncontext-t-sys.md) | ServiceExtensionContext二级模块。 |
| [UIAbilityContext](arkts-common-uiabilitycontext-t.md) | [UIAbility]{@link @ohos.app.ability.UIAbility}组件上下文，继承自Context。 |
| [UIAbilityContext](arkts-common-uiabilitycontext-t.md) | [UIAbility]{@link @ohos.app.ability.UIAbility}组件上下文，继承自Context。 |
| [UIExtensionContext](arkts-common-uiextensioncontext-t.md) | [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}组件上下文，继承自Context。 |
| [UIExtensionContext](arkts-common-uiextensioncontext-t.md) | [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}组件上下文，继承自Context。 |
| [UIServiceExtensionConnectCallback](arkts-common-uiserviceextensionconnectcallback-t.md) | 在连接指定的UIServiceExtensionAbility服务时作为入参，用于提供UIServiceExtensionAbility连接回调数据能力。 |
| [UIServiceExtensionConnectCallback](arkts-common-uiserviceextensionconnectcallback-t.md) | 在连接指定的UIServiceExtensionAbility服务时作为入参，用于提供UIServiceExtensionAbility连接回调数据能力。 |
| <!--DelRow-->[UIServiceExtensionContext](arkts-common-uiserviceextensioncontext-t-sys.md) | UIServiceExtensionContext二级模块。 |
| <!--DelRow-->[UIServiceExtensionContext](arkts-common-uiserviceextensioncontext-t-sys.md) | UIServiceExtensionContext二级模块。 |
| <!--DelRow-->[UIServiceHostProxy](arkts-common-uiservicehostproxy-t-sys.md) | UIServiceHostProxy二级模块。 |
| <!--DelRow-->[UIServiceHostProxy](arkts-common-uiservicehostproxy-t-sys.md) | UIServiceHostProxy二级模块。 |
| [UIServiceProxy](arkts-common-uiserviceproxy-t.md) | UIServiceProxy提供了与UIServiceExtensionAbility服务端数据通信的能力。UIServiceExtensionAbility是一类特殊的ExtensionAbility组件，这类组件由系统提供，通 常用于提供浮窗组件相关扩展能力。 |
| [UIServiceProxy](arkts-common-uiserviceproxy-t.md) | UIServiceProxy提供了与UIServiceExtensionAbility服务端数据通信的能力。UIServiceExtensionAbility是一类特殊的ExtensionAbility组件，这类组件由系统提供，通 常用于提供浮窗组件相关扩展能力。 |
| [VpnExtensionContext](arkts-common-vpnextensioncontext-t.md) | The context of vpn extension. It allows access to vpnExtension-specific resources. The class of auto startup info. |

