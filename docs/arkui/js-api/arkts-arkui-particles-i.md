# Particles

Defines the particle array.

> **NOTE**  
>  
> To standardize anonymous object definitions, the element definitions here have been revised in API version 18.  
> While historical version information is preserved for anonymous objects, there may be cases where the outer element  
> 's @since version number is higher than inner elements'. This does not affect interface usability.

**Since:** 18

<!--Device-unnamed-interface Particles<  PARTICLE extends ParticleType,  COLOR_UPDATER extends ParticleUpdater,  OPACITY_UPDATER extends ParticleUpdater,  SCALE_UPDATER extends ParticleUpdater,  ACC_SPEED_UPDATER extends ParticleUpdater,  ACC_ANGLE_UPDATER extends ParticleUpdater,  SPIN_UPDATER extends ParticleUpdater>--><!--Device-unnamed-interface Particles<  PARTICLE extends ParticleType,  COLOR_UPDATER extends ParticleUpdater,  OPACITY_UPDATER extends ParticleUpdater,  SCALE_UPDATER extends ParticleUpdater,  ACC_SPEED_UPDATER extends ParticleUpdater,  ACC_ANGLE_UPDATER extends ParticleUpdater,  SPIN_UPDATER extends ParticleUpdater>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## particles

```TypeScript
particles: Array<
    ParticleOptions<
      PARTICLE,
      COLOR_UPDATER,
      OPACITY_UPDATER,
      SCALE_UPDATER,
      ACC_SPEED_UPDATER,
      ACC_ANGLE_UPDATER,
      SPIN_UPDATER
    >
  >
```

An array of particle options, each of which covers the emitter, color, opacity, scale, velocity, acceleration, and spin speed of particles. For details, see [ParticleOptions](arkts-arkui-particleoptions-i.md).

**Type:** Array&lt;     ParticleOptions&lt;       PARTICLE,       COLOR_UPDATER,       OPACITY_UPDATER,       SCALE_UPDATER,       ACC_SPEED_UPDATER,       ACC_ANGLE_UPDATER,       SPIN_UPDATER     &gt;   &gt;

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Particles-particles: Array<
    ParticleOptions<
      PARTICLE,
      COLOR_UPDATER,
      OPACITY_UPDATER,
      SCALE_UPDATER,
      ACC_SPEED_UPDATER,
      ACC_ANGLE_UPDATER,
      SPIN_UPDATER
    >
  >--><!--Device-Particles-particles: Array<
    ParticleOptions<
      PARTICLE,
      COLOR_UPDATER,
      OPACITY_UPDATER,
      SCALE_UPDATER,
      ACC_SPEED_UPDATER,
      ACC_ANGLE_UPDATER,
      SPIN_UPDATER
    >
  >-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

