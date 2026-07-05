# BoidsSimRepulsionParameters

Boids模拟斥力场参数。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## accelerationMag

```TypeScript
accelerationMag?: double
```

施加于boid、方向远离实体的排斥加速度大小。取值范围：[0, +∞)。默认值：0.0

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## radius

```TypeScript
radius?: double
```

作用半径。实体在此距离范围内的boid会被推开（边界处力为零）。取值范围：[0, +∞)。默认值：0.0

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

