# BoidsSimParameters

每个boid绑定的群组模拟参数.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## maxTurnRate

```TypeScript
maxTurnRate?: Vec3
```

每模拟帧每轴最大转向速率. 取值范围：[0, +∞) per axis. 默认值：每轴约为0.0377.

**Type:** Vec3

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## alignmentWeight

```TypeScript
alignmentWeight?: double
```

boid在alignmentDistance范围内匹配邻近个体平均航向的强度。取值范围：[0, +∞)。默认值：0.0

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## maxAccelerationMag

```TypeScript
maxAccelerationMag?: double
```

boid每模拟帧可达到的最大加速度. 取值范围：[0, +∞). 默认值：约为39.06.

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## repulsionWeight

```TypeScript
repulsionWeight?: double
```

斥力场对该boid的排斥强度。取值范围：[0, +∞)。默认值：0.0

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## maxVelocityMag

```TypeScript
maxVelocityMag?: double
```

boid每模拟帧可达到的最大速度. 取值范围：[0, +∞). 默认值：约为0.625.

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## boundaryMaxPos

```TypeScript
boundaryMaxPos?: Vec3
```

约束boid运动的轴对齐包围盒最大角点. 默认值：(0, 0, 0).

**Type:** Vec3

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## cohesionDistance

```TypeScript
cohesionDistance?: double
```

凝聚规则的感知半径。此距离范围内的boid会相互聚集。取值范围：[0, +∞)。默认值：0.0

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## boundaryMinPos

```TypeScript
boundaryMinPos?: Vec3
```

约束boid运动的轴对齐包围盒最小角点。当boundaryMinPos的任何分量大于等于对应boundaryMaxPos分量时，该boid被视为无边界。默认值：(0, 0, 0)。

**Type:** Vec3

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## alignmentDistance

```TypeScript
alignmentDistance?: double
```

对齐规则的感知半径。此距离范围内的boid会对齐航向。取值范围：[0, +∞)。默认值：0.0

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## gravityWeight

```TypeScript
gravityWeight?: double
```

引力场对该boid的吸引强度。取值范围：[0, +∞)。默认值：0.0

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## boundaryDistance

```TypeScript
boundaryDistance?: double
```

边界斥力生效的距离。取值范围：[0, +∞)。默认值：0.0

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## cohesionWeight

```TypeScript
cohesionWeight?: double
```

boid在cohesionDistance范围内朝向邻近个体平均位置的强度。取值范围：[0, +∞)。默认值：0.0

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## separationDistance

```TypeScript
separationDistance?: double
```

分离规则的感知半径。此距离范围内的boid会产生分离力（边界处力为零）。取值范围：[0, +∞)。默认值：0.0

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## separationWeight

```TypeScript
separationWeight?: double
```

boid在separationDistance范围内避开邻近个体的强度。取值范围：[0, +∞)。默认值：0.0

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## initialRotation

```TypeScript
initialRotation?: Quaternion
```

boid的初始旋转. 未设置时，使用实体的当前变换旋转. 默认值：(NaN, NaN, NaN, NaN).

**Type:** Quaternion

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## initialPosition

```TypeScript
initialPosition?: Vec3
```

boid的初始位置. 未设置时，使用实体的当前变换位置. 默认值：(NaN, NaN, NaN).

**Type:** Vec3

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## initialVelocity

```TypeScript
initialVelocity?: Vec3
```

boid的初始速度. 默认值：(0, 0, 0).

**Type:** Vec3

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## boundaryWeight

```TypeScript
boundaryWeight?: double
```

boid在boundaryDistance范围内被边界墙推回的强度。取值范围：[0, +∞)。默认值：0.0

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

