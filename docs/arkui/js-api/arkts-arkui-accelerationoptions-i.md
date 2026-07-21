# AccelerationOptions

Particle acceleration.

> **NOTE**  
>  
> To standardize anonymous object definitions, the element definitions here have been revised in API version 18.  
> While historical version information is preserved for anonymous objects, there may be cases where the  
> outer element's @since version number is higher than inner elements'. This does not affect interface usability.

**Since:** 18

<!--Device-unnamed-declare interface AccelerationOptions<  ACC_SPEED_UPDATER extends ParticleUpdater,  ACC_ANGLE_UPDATER extends ParticleUpdater>--><!--Device-unnamed-declare interface AccelerationOptions<  ACC_SPEED_UPDATER extends ParticleUpdater,  ACC_ANGLE_UPDATER extends ParticleUpdater>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## angle

```TypeScript
angle?: ParticlePropertyOptions<number, ACC_ANGLE_UPDATER>
```

Acceleration direction (in angles).

Default value: **{range:[0.0,0.0]}**

**Type:** ParticlePropertyOptions&lt;number, ACC_ANGLE_UPDATER&gt;

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AccelerationOptions-angle?: ParticlePropertyOptions<number, ACC_ANGLE_UPDATER>--><!--Device-AccelerationOptions-angle?: ParticlePropertyOptions<number, ACC_ANGLE_UPDATER>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## speed

```TypeScript
speed?: ParticlePropertyOptions<number, ACC_SPEED_UPDATER>
```

Acceleration speed.

Default value: **{range:[0.0,0.0]}**

**Type:** ParticlePropertyOptions&lt;number, ACC_SPEED_UPDATER&gt;

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AccelerationOptions-speed?: ParticlePropertyOptions<number, ACC_SPEED_UPDATER>--><!--Device-AccelerationOptions-speed?: ParticlePropertyOptions<number, ACC_SPEED_UPDATER>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

