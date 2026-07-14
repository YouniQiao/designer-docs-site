# BounceSymbolEffect

Defines BounceSymbolEffect class, which inherits from **SymbolEffect**.

**Inheritance/Implementation:** BounceSymbolEffect extends [SymbolEffect](arkts-arkui-symboleffect-c.md)

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(scope?: EffectScope, direction?: EffectDirection)
```

A constructor used to create a **ScaleSymbolEffect** instance, which comes with a scaling animation effect.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scope | EffectScope | No | Effect scope.<br>Default value: **EffectScope.LAYER** |
| direction | EffectDirection | No | Effect direction.<br>Default value: **EffectDirection.DOWN** |

## direction

```TypeScript
direction?: EffectDirection
```

Effect direction. Default value: **EffectDirection.DOWN**

**Type:** EffectDirection

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## scope

```TypeScript
scope?: EffectScope
```

Effect scope. Default value: **EffectScope.LAYER**

**Type:** EffectScope

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

