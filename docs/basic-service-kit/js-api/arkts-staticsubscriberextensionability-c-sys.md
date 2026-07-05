# StaticSubscriberExtensionAbility

StaticSubscriberExtensionAbility模块提供静态订阅者ExtensionAbility类别的能力。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { StaticSubscriberExtensionAbility } from '@kit.BasicServicesKit';
```

## onReceiveEvent

```TypeScript
onReceiveEvent(event: CommonEventData): void
```

静态订阅者通用事件回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | CommonEventData | Yes | 静态订阅者通用事件回调。 |

**Example**

```TypeScript
import { commonEventManager } from '@kit.BasicServicesKit';

  class MyStaticSubscriberExtensionAbility extends StaticSubscriberExtensionAbility {
      onReceiveEvent(event: commonEventManager.CommonEventData) {
          console.info(`onReceiveEvent, event: ${JSON.stringify(event)}`);
      }
  }

```

## context

```TypeScript
context: StaticSubscriberExtensionContext
```

上下文。

**Type:** StaticSubscriberExtensionContext

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

