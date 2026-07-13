# VelocityOptions

Defines velocity options.

* > **NOTE**
>
> To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
> While historical version information is preserved for anonymous objects, there may be cases where the outer
> element's @since version number is higher than inner elements'. This does not affect interface usability.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## angle

```TypeScript
angle: ParticleTuple<number, number>
```

Direction (in angles) in which the particle moves, with the geometric center of the element as the coordinate
origin and the horizontal direction as the x-axis. A positive number indicates clockwise rotation.

**Type:** ParticleTuple<number, number>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## speed

```TypeScript
speed: ParticleTuple<number, number>
```

Time rate at which the particle moves.

**Type:** ParticleTuple<number, number>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

