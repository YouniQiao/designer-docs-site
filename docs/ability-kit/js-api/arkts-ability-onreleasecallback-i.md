# OnReleaseCallback

Defines the callback that is invoked when the stub on the target UIAbility is disconnected.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## Modules to Import

```TypeScript
import { Callee, Caller, OnReleaseCallback, OnRemoteStateChangeCallback, CalleeCallback } from '@ohos.app.ability.UIAbility';
```

## constructor

```TypeScript
(msg: string): void
```

Defines the callback of OnRelease.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| msg | string | Yes | Message used for disconnection. |

