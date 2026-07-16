# @ohos.ability.particleAbility

The particleAbility module provides APIs for operating a DataAbility and ServiceAbility. You can use the APIs to
start and terminate a ParticleAbility, obtain a dataAbilityHelper object, and connect to or disconnect from a
ServiceAbility.

**Since:** 7

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## Modules to Import

```TypeScript
import { particleAbility } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [acquireDataAbilityHelper](arkts-ability-acquiredataabilityhelper-f.md#acquiredataabilityhelper-1) | Obtains a dataAbilityHelper object.&gt; **NOTE**&gt;&gt; For details about the startup rules for the components in the FA model, see&gt; [Component Startup Rules (FA Model)](../../../../application-models/component-startup-rules-fa.md).&gt; To access a DataAbility of another application, the target application must be configured with associated&gt; startup (**AssociateWakeUp** set to **true**). |
| [cancelBackgroundRunning](arkts-ability-cancelbackgroundrunning-f.md#cancelbackgroundrunning-1) | Requests to cancel a continuous task from the system. This API uses an asynchronous callback to return the result. |
| [cancelBackgroundRunning](arkts-ability-cancelbackgroundrunning-f.md#cancelbackgroundrunning-2) | Requests to cancel a continuous task from the system. This API uses a promise to return the result. |
| [connectAbility](arkts-ability-connectability-f.md#connectability-1) | Connects this ability to a ServiceAbility.&gt; **NOTE**&gt;&gt; For details about the startup rules for the components in the FA model, see&gt; [Component Startup Rules (FA Model)](../../../../application-models/component-startup-rules-fa.md).&gt; &gt; To connect to a ServiceAbility of another application, the target application must be configured with&gt; associated startup (**AssociateWakeUp** set to **true**). |
| [disconnectAbility](arkts-ability-disconnectability-f.md#disconnectability-1) | Disconnects this ability from a specific ServiceAbility. This API uses an asynchronous callback to return theresult. |
| [disconnectAbility](arkts-ability-disconnectability-f.md#disconnectability-2) | Disconnects this ability from a specific ServiceAbility. This API uses a promise to return the result. |
| [startAbility](arkts-ability-startability-f.md#startability-1) | Starts a ParticleAbility. This API uses an asynchronous callback to return the result.&gt; **NOTE**&gt;&gt; For details about the startup rules for the components in the FA model, see&gt; [Component Startup Rules (FA Model)](../../../../application-models/component-startup-rules-fa.md). |
| [startAbility](arkts-ability-startability-f.md#startability-2) | Starts a ParticleAbility. This API uses a promise to return the result.&gt; **NOTE**&gt;&gt; For details about the startup rules for the components in the FA model, see&gt; [Component Startup Rules (FA Model)](../../../../application-models/component-startup-rules-fa.md). |
| [startBackgroundRunning](arkts-ability-startbackgroundrunning-f.md#startbackgroundrunning-1) | Requests a continuous task from the system. This API uses an asynchronous callback to return the result. |
| [startBackgroundRunning](arkts-ability-startbackgroundrunning-f.md#startbackgroundrunning-2) | Requests a continuous task from the system. This API uses a promise to return the result. |
| [terminateSelf](arkts-ability-terminateself-f.md#terminateself-1) | Terminates this ParticleAbility. This API uses an asynchronous callback to return the result. |
| [terminateSelf](arkts-ability-terminateself-f.md#terminateself-2) | Terminates this ParticleAbility. This API uses a promise to return the result. |

### Enums

| Name | Description |
| --- | --- |
| [ErrorCode](arkts-ability-errorcode-e.md) | Enumerates the error codes that may be returned when an ability is started. |

