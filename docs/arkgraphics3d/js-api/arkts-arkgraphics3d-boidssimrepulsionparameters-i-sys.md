# BoidsSimRepulsionParameters (System API)

Boids simulation repulsion field parameters.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## accelerationMag

```TypeScript
accelerationMag?: number
```

Magnitude of repulsion acceleration applied away from the entity. Range: [0, +inf). Default: 0.0
If a value exceeding the valid range is assigned, it will be clamped.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## radius

```TypeScript
radius?: number
```

Radius of influence. Boids strictly within this distance from the entity are pushed away
(force is zero at the boundary). Range: [0, +inf). Default: 0.0
If a value exceeding the valid range is assigned, it will be clamped.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

