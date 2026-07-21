# CalleeCallback

Defines the callback of the registration message notification of the UIAbility.

**Since:** 9

<!--Device-unnamed-export interface CalleeCallback--><!--Device-unnamed-export interface CalleeCallback-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## Modules to Import

```TypeScript
import { Callee, Caller, OnReleaseCallback, OnRemoteStateChangeCallback, CalleeCallback } from '@kit.AbilityKit';
```

<a id="constructor"></a>
## constructor

```TypeScript
(indata: rpc.MessageSequence): rpc.Parcelable
```

Defines the callback of Callee.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-CalleeCallback-(indata: rpc.MessageSequence): rpc.Parcelable--><!--Device-CalleeCallback-(indata: rpc.MessageSequence): rpc.Parcelable-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| indata | rpc.MessageSequence | Yes | Data to be transferred. |

**Return value:**

| Type | Description |
| --- | --- |
| rpc.Parcelable | Returned data object. |

