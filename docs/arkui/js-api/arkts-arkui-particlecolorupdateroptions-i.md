# ParticleColorUpdaterOptions

How the color property is updated.

> **NOTE**  
>  
> To standardize anonymous object definitions, the element definitions here have been revised in API version 18.  
> While historical version information is preserved for anonymous objects, there may be cases where the outer element  
> 's @since version number is higher than inner elements'. This does not affect interface usability.

**Since:** 18

<!--Device-unnamed-interface ParticleColorUpdaterOptions<UPDATER extends ParticleUpdater>--><!--Device-unnamed-interface ParticleColorUpdaterOptions<UPDATER extends ParticleUpdater>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## config

```TypeScript
config: ParticleColorPropertyUpdaterConfigs[UPDATER]
```

Color updater configuration.

The available options of **type** are as follows:

1. **ParticleUpdater.NONE**: The property does not change. In this case,the **config** type is [ParticleColorPropertyUpdaterConfigs](arkts-arkui-particlecolorpropertyupdaterconfigs-i.md)[ParticleUpdater.NONE].2. **ParticleUpdater.RANDOM**: The property changes randomly. In this case,the **config** type is [ParticleColorPropertyUpdaterConfigs](arkts-arkui-particlecolorpropertyupdaterconfigs-i.md)[ParticleUpdater.RANDOM].3. **ParticleUpdater.CURVE**: The property changes with the animation curve.In this case, the **config** type is [ParticleColorPropertyUpdaterConfigs](arkts-arkui-particlecolorpropertyupdaterconfigs-i.md)[ParticleUpdater.CURVE].

**NOTE**

When **type** is set to **ParticleUpdater.RANDOM** or **ParticleUpdater.CURVE**, the color configuration in **updater** has higher priority than that in **range**. During the animation period specified by updater, the color changes based on the color configuration in updater. Before the animation period specified by updater, the color changes based on the color configuration in range.

**Type:** ParticleColorPropertyUpdaterConfigs[UPDATER]

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ParticleColorUpdaterOptions-config: ParticleColorPropertyUpdaterConfigs[UPDATER]--><!--Device-ParticleColorUpdaterOptions-config: ParticleColorPropertyUpdaterConfigs[UPDATER]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type: UPDATER
```

Type of property updating.

The default value of **type** is **ParticleUpdater.NONE**.

**Type:** UPDATER

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ParticleColorUpdaterOptions-type: UPDATER--><!--Device-ParticleColorUpdaterOptions-type: UPDATER-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

