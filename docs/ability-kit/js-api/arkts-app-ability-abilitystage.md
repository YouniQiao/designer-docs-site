# @ohos.app.ability.AbilityStage

## Modules to Import

```TypeScript
import { AbilityStage } from '@kit.AbilityKit';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AbilityStage](arkts-abilitystage-c.md) | AbilityStage是一个[Module](docroot://quick-start/application-package-overview.md#应用的多module设计机制)级别的组件管理器，用于进行Module级别的资源 预加载、线程创建等初始化操作，以及维护Module下的应用状态。AbilityStage与Module一一对应，即一个Module拥有一个AbilityStage。 应用的[HAP](docroot://quick-start/hap-package.md)/[HSP](docroot://quick-start/in-app-hsp.md)在首次加载时会创建一个AbilityStage实例。当一 个Module中存在AbilityStage和其他组件（UIAbility/ExtensionAbility组件），AbilityStage实例会早于其他组件实例创建。 AbilityStage拥有[onCreate()]{@link AbilityStage.onCreate}、[onDestroy()]{@link AbilityStage.onDestroy}生命周期回调和 [onAcceptWant()]{@link AbilityStage.onAcceptWant}、[onConfigurationUpdate()]{@link AbilityStage.onConfigurationUpdate} 、[onMemoryLevel()]{@link AbilityStage.onMemoryLevel}事件回调等。 |

