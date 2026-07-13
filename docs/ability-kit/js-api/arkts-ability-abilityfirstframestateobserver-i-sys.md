# AbilityFirstFrameStateObserver (System API)

The module defines the observer used to listen for the first frame rendering completion event of a given ability. It
is used as an input parameter of
[on](arkts-ability-on-f-sys.md#on-5)
to listen for the completion event.

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## onAbilityFirstFrameDrawn

```TypeScript
onAbilityFirstFrameDrawn(data: AbilityFirstFrameStateData): void
```

Called when the first frame of the ability is rendered.

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | AbilityFirstFrameStateData | Yes | Data returned after the first frame is rendered. |

