# StaticSubscriberExtensionAbility (System API)

The **StaticSubscriberExtensionAbility** module provides Extension abilities for static subscribers.

**Since:** 9

<!--Device-unnamed-declare class StaticSubscriberExtensionAbility--><!--Device-unnamed-declare class StaticSubscriberExtensionAbility-End-->

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

Represents a callback of the common event of a static subscriber.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-StaticSubscriberExtensionAbility-onReceiveEvent(event: CommonEventData): void--><!--Device-StaticSubscriberExtensionAbility-onReceiveEvent(event: CommonEventData): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [CommonEventData](arkts-basicservices-commoneventdata-commoneventdata-i.md) | Yes | Common event of a static subscriber. |

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

Context of the ExtensionAbility.

**Type:** StaticSubscriberExtensionContext

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

<!--Device-StaticSubscriberExtensionAbility-context: StaticSubscriberExtensionContext--><!--Device-StaticSubscriberExtensionAbility-context: StaticSubscriberExtensionContext-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

