# @ohos.app.ability.UIAbility

## Modules to Import

```TypeScript
import { Callee, Caller, OnReleaseCallback, OnRemoteStateChangeCallback, CalleeCallback } from '@kit.AbilityKit';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [UIAbility](arkts-ability-uiability-c.md) | Application component that has the UI. It provides lifecycle callbacks such as component creation, destruction, and foreground/background switching, and supports background communication. |

### Interfaces

| Name | Description |
| --- | --- |
| [Callee](arkts-ability-callee-i.md) | Background communication object created by the system for the UIAbility, known as the Callee UIAbility (Callee), which is capable of receiving data sent from the Caller object. |
| [CalleeCallback](arkts-ability-calleecallback-i.md) | Defines the callback of the registration message notification of the UIAbility. |
| [Caller](arkts-ability-caller-i.md) | A Caller UIAbility can use the [startAbilityByCall](arkts-ability-uiabilitycontext-c.md#startabilitybycall-1) API to start the target Callee UIAbility. After the target UIAbility is started successfully, a Caller object is returned to the caller for communication. |
| [OnReleaseCallback](arkts-ability-onreleasecallback-i.md) | Defines the callback that is invoked when the stub on the target UIAbility is disconnected. |
| [OnRemoteStateChangeCallback](arkts-ability-onremotestatechangecallback-i.md) | Defines the callback that is invoked when the remote UIAbility state changes in the collaboration scenario. |

