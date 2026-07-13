# @ohos.app.ability.AbilityStage

## Modules to Import

```TypeScript
import { AbilityStage } from '@kit.AbilityKit';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AbilityStage](arkts-ability-abilitystage-c.md) | AbilityStage is a [module](../../../../quick-start/application-package-overview.md#multi-module-design-mechanism)-levelcomponent manager. It is used for initializing operations such as resource preloading and thread creation at themodule level, as well as maintaining the application state under the module. An AbilityStage instance corresponds toa module.When the [HAP](../../../../quick-start/hap-package.md) or [HSP](../../../../quick-start/in-app-hsp.md) of an applicationis first loaded, an AbilityStage instance is created. If a module contains both AbilityStage and other components (like UIAbility or ExtensionAbility), the AbilityStage instance is created before the other component instances.An AbilityStage has the lifecycle callbacks [onCreate()](arkts-ability-abilitystage-c.md#oncreate-1) and[onDestroy()](arkts-ability-abilitystage-c.md#ondestroy-1), and the event callbacks[onAcceptWant()](arkts-ability-abilitystage-c.md#onacceptwant-1),[onConfigurationUpdate()](arkts-ability-abilitystage-c.md#onconfigurationupdate-1), and[onMemoryLevel()](arkts-ability-abilitystage-c.md#onmemorylevel-1). |

