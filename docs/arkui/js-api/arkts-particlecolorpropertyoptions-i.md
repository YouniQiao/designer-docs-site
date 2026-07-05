# ParticleColorPropertyOptions

设置粒子颜色属性更新器配置。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## distributionType

```TypeScript
distributionType?: DistributionType
```

粒子初始颜色随机值分布，允许用户选择颜色随机值生成的分布类型，支持均匀分布或正态（高斯）分布。 默认值：DistributionType.UNIFORM

**Type:** DistributionType

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## range

```TypeScript
range: ParticleTuple<ResourceColor, ResourceColor>
```

粒子初始颜色区间，粒子发射器生成粒子的初始颜色在range区间随机取值。 默认值：range:[Color.White,Color.White]

**Type:** ParticleTuple<ResourceColor, ResourceColor>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## updater

```TypeScript
updater?: ParticleColorUpdaterOptions<UPDATER>
```

颜色属性变化配置。颜色属性变化类型type有三类： 1、当type为ParticleUpdater.NONE，表示无变化，则config类型为 [ParticleColorPropertyUpdaterConfigs](arkts-particlecolorpropertyupdaterconfigs-i.md#ParticleColorPropertyUpdaterConfigs)[ParticleUpdater.NONE]。 2、type为ParticleUpdater.RANDOM，表示随机变化，则config类型为 [ParticleColorPropertyUpdaterConfigs](arkts-particlecolorpropertyupdaterconfigs-i.md#ParticleColorPropertyUpdaterConfigs)[ParticleUpdater.RANDOM]。 3、type为ParticleUpdater.CURVE,表示按动画曲线变化，则config类型为 [ParticleColorPropertyUpdaterConfigs](arkts-particlecolorpropertyupdaterconfigs-i.md#ParticleColorPropertyUpdaterConfigs)[ParticleUpdater.CURVE]。 默认值：type默认为 ParticleUpdater.NONE。 **说明**： 当type为ParticleUpdater.RANDOM或者ParticleUpdater.CURVE时，updater中颜色配置的优先级高于range中的颜色配置。在updater配置的动画时间周期内，以updater中的颜色配 置来变化；在updater配置的动画时间周期外，以range中的颜色配置来变化。

**Type:** ParticleColorUpdaterOptions<UPDATER>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

