# ParticleOptions

设置粒子参数。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## acceleration

```TypeScript
acceleration?: AccelerationOptions<ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER>
```

粒子加速度配置。 **说明**： speed表示加速度大小，angle表示加速度方向（单位为角度）。 默认值：{ speed:{range:[0.0,0.0]},angle:{range:[0.0,0.0]} }

**Type:** AccelerationOptions<ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color?: ParticleColorPropertyOptions<COLOR_UPDATER>
```

粒子颜色配置。 **说明**： 默认值：{ range:[Color.White,Color.White] } 。图片粒子不支持设置颜色。

**Type:** ParticleColorPropertyOptions<COLOR_UPDATER>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## spin

```TypeScript
spin?: ParticlePropertyOptions<number, SPIN_UPDATER>
```

粒子自旋角度配置。 默认值：{range:[0.0,0.0]} 方向：正数表示顺时针旋转，负数表示逆时针旋转。

**Type:** ParticlePropertyOptions<number, SPIN_UPDATER>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## scale

```TypeScript
scale?: ParticlePropertyOptions<number, SCALE_UPDATER>
```

粒子大小配置。 默认值：{ range:[1.0,1.0] }

**Type:** ParticlePropertyOptions<number, SCALE_UPDATER>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## velocity

```TypeScript
velocity?: VelocityOptions
```

粒子速度配置。 **说明**： speed表示速度大小。angle表示速度的方向（单位为角度），以元素几何中心为坐标原点，水平方向为X轴，正数表示顺时针方向旋转角度。 默认值：{ speed:[0.0,0.0],angle:[0.0,0.0] }

**Type:** VelocityOptions

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## opacity

```TypeScript
opacity?: ParticlePropertyOptions<number, OPACITY_UPDATER>
```

粒子透明度配置。 默认值：{ range:[1.0,1.0] }

**Type:** ParticlePropertyOptions<number, OPACITY_UPDATER>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## emitter

```TypeScript
emitter: EmitterOptions<PARTICLE>
```

粒子发射器配置。

**Type:** EmitterOptions<PARTICLE>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

