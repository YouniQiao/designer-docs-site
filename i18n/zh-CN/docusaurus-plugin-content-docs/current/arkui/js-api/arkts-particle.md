# particle

## particle

```TypeScript
<
    PARTICLE extends ParticleType,
    COLOR_UPDATER extends ParticleUpdater,
    OPACITY_UPDATER extends ParticleUpdater,
    SCALE_UPDATER extends ParticleUpdater,
    ACC_SPEED_UPDATER extends ParticleUpdater,
    ACC_ANGLE_UPDATER extends ParticleUpdater,
    SPIN_UPDATER extends ParticleUpdater
  >(particles: Particles<
      PARTICLE,
      COLOR_UPDATER,
      OPACITY_UPDATER,
      SCALE_UPDATER,
      ACC_SPEED_UPDATER,
      ACC_ANGLE_UPDATER,
      SPIN_UPDATER
    >): ParticleAttribute
```

create a particle array. Anonymous Object Rectification.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| particles | Particles&lt;
      PARTICLE,
      COLOR_UPDATER,
      OPACITY_UPDATER,
      SCALE_UPDATER,
      ACC_SPEED_UPDATER,
      ACC_ANGLE_UPDATER,
      SPIN_UPDATER
    > | 是 | Array of particles. [since 18] |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [ParticleAttribute](arkts-particleattribute-c.md) | 除支持[通用属性]{@link common}外还支持以下属性： |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AccelerationOptions](arkts-accelerationoptions-i.md) | 粒子加速度配置。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [DisturbanceFieldOptions](arkts-disturbancefieldoptions-i.md) | 设置粒子扰动场参数。 |
| [EmitterOptions](arkts-emitteroptions-i.md) | 粒子发射器的配置。 |
| [EmitterParticleOptions](arkts-emitterparticleoptions-i.md) | 粒子配置。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [EmitterProperty](arkts-emitterproperty-i.md) | 设置发射器属性。 |
| [FieldRegion](arkts-fieldregion-i.md) | 用于设置粒子场的区域信息。 |
| [ImageParticleParameters](arkts-imageparticleparameters-i.md) | 设置图片选项。 |
| [ParticleAnnulusRegion](arkts-particleannulusregion-i.md) | 用于设置环形发射器区域的配置信息。 > **说明：** > > - outerRadius、innerRadius小于零或使用百分比单位时，会按零进行处理。 > > - 当outerRadius小于innerRadius时（即外圆半径小于内圆半径时），会将当前较小的值作为新的内圆半径，将较大的值作为新的外圆半径。 > > - 当endAngle小于startAngle时（即结束角度小于起始角度时），会将当前较小的值作为新的起始角度，将较大的值作为新的结束角度。 > > ![](docroot://reference/apis-arkui/arkui-ts/figures/annulus.png) |
| [ParticleColorOptions](arkts-particlecoloroptions-i.md) | 颜色变化方式为均匀变化的时候，在区间内随机生成一个差值。r、g、b、a四个颜色通道每秒分别使用差值叠加当前颜色值，生成目标颜色值。实现颜色随机变化的效果。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [ParticleColorPropertyOptions](arkts-particlecolorpropertyoptions-i.md) | 设置粒子颜色属性更新器配置。 |
| [ParticleColorPropertyUpdaterConfigs](arkts-particlecolorpropertyupdaterconfigs-i.md) | 设置粒子颜色属性更新器的配置。 |
| [ParticleColorUpdaterOptions](arkts-particlecolorupdateroptions-i.md) | 颜色属性变化配置。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [ParticleConfigs](arkts-particleconfigs-i.md) | 设置粒子配置项。 |
| [ParticleInterface](arkts-particleinterface-i.md) | Defines the particle Interface. |
| [ParticleOptions](arkts-particleoptions-i.md) | 设置粒子参数。 |
| [ParticlePropertyAnimation](arkts-particlepropertyanimation-i.md) | 设置粒子属性生命周期。 |
| [ParticlePropertyOptions](arkts-particlepropertyoptions-i.md) | 设置粒子属性选项。 |
| [ParticlePropertyUpdaterConfigs](arkts-particlepropertyupdaterconfigs-i.md) | 设置粒子属性更新器配置。 |
| [Particles](arkts-particles-i.md) | 粒子动画的集合。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [ParticleUpdaterOptions](arkts-particleupdateroptions-i.md) | 颜色属性变化配置。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [PointParticleParameters](arkts-pointparticleparameters-i.md) | 设置粒子半径。 |
| [RippleFieldOptions](arkts-ripplefieldoptions-i.md) | 用于描述粒子波动场信息的参数。 |
| [VelocityFieldOptions](arkts-velocityfieldoptions-i.md) | 用于描述粒子速度场信息的参数。 |
| [VelocityOptions](arkts-velocityoptions-i.md) | 粒子速度配置。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [DistributionType](arkts-distributiontype-e.md) | 初始颜色随机值分布类型。 |
| [DisturbanceFieldShape](arkts-disturbancefieldshape-e.md) | 粒子形状。 |
| [ParticleEmitterShape](arkts-particleemittershape-e.md) | 粒子发射器形状。 |
| [ParticleType](arkts-particletype-e.md) | 粒子类型。 |
| [ParticleUpdater](arkts-particleupdater-e.md) | 粒子变化类型。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ParticleTuple](arkts-particletuple-t.md) | 粒子元组，表示定义一些动画参数的类型。 |
| [PositionT](arkts-positiont-t.md) | Defines the PositionT type. |
| [SizeT](arkts-sizet-t.md) | Defines the SizeT type. |
| [Vector2T](arkts-vector2t-t.md) | 定义Vector2T类型。其中Vector2T类型包含x和y两个属性值。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Particle](arkts-particle-con.md#Particle) | Defines Particle Component. |

