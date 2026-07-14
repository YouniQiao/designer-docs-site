# @ohos.app.ability.sendableContextManager

The sendableContextManager module provides APIs for converting between Context and [SendableContext](arkts-ability-sendablecontext-i.md) objects.

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { sendableContextManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [convertFromContext](arkts-ability-convertfromcontext-f.md#convertfromcontext-1) | Converts a Context object to a SendableContext object. |
| [convertToAbilityStageContext](arkts-ability-converttoabilitystagecontext-f.md#converttoabilitystagecontext-1) | Converts a SendableContext object to an AbilityStageContext object. |
| [convertToApplicationContext](arkts-ability-converttoapplicationcontext-f.md#converttoapplicationcontext-1) | Converts a SendableContext object to an ApplicationContext object. |
| [convertToContext](arkts-ability-converttocontext-f.md#converttocontext-1) | Converts a SendableContext object to a Context object. |
| [convertToUIAbilityContext](arkts-ability-converttouiabilitycontext-f.md#converttouiabilitycontext-1) | Converts a SendableContext object to a UIAbilityContext object. |
| [setEventHubMultithreadingEnabled](arkts-ability-seteventhubmultithreadingenabled-f.md#seteventhubmultithreadingenabled-1) | Enables the cross-thread data transfer feature of [EventHub](arkts-ability-eventhub-c.md) in [Context](arkts-ability-context-depr-i.md). &gt; **NOTE** &gt; &gt; - When multiple Context objects communicate, you need to call this API to set each Context object to support &gt; EventHub cross-thread data transfer. |

### Types

| Name | Description |
| --- | --- |
| [SendableContext](arkts-ability-sendablecontext-t.md) | Level-2 module SendableContext. |

