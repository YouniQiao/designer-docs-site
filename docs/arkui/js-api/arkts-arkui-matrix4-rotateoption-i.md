# RotateOption

Describes the rotation parameters.

**Since:** 7

<!--Device-matrix4-interface RotateOption--><!--Device-matrix4-interface RotateOption-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { matrix4 } from '@kit.ArkUI';
```

## angle

```TypeScript
angle?: number
```

Rotation angle.

Default value: **0**

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RotateOption-angle?: number--><!--Device-RotateOption-angle?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## centerX

```TypeScript
centerX?: number
```

Additional x-axis offset of the transformation center relative to the component's anchor.

Unit: px

Default value: **0**

**NOTE**

The value **0** indicates that the transformation center coincides with the component's x-axis anchor. For details about the implementation, see [Example 3: Implementing Rotation Around a Center Point](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#example-3-implementing-rotation-around-a-center-point).

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RotateOption-centerX?: number--><!--Device-RotateOption-centerX?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## centerY

```TypeScript
centerY?: number
```

Additional y-axis offset of the transformation center relative to the component's anchor.

Unit: px

Default value: **0**

**NOTE**

The value **0** indicates that the transformation center coincides with the component's y-axis anchor. For details about the implementation, see [Example 3: Implementing Rotation Around a Center Point](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#example-3-implementing-rotation-around-a-center-point).

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RotateOption-centerY?: number--><!--Device-RotateOption-centerY?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## x

```TypeScript
x?: number
```

X-coordinate of the rotation axis vector.

Default value: **0**

Value range: (-∞, +∞)

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RotateOption-x?: number--><!--Device-RotateOption-x?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## y

```TypeScript
y?: number
```

Y-coordinate of the rotation axis vector.

Default value: **0**

Value range: (-∞, +∞)

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RotateOption-y?: number--><!--Device-RotateOption-y?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## z

```TypeScript
z?: number
```

Z-coordinate of the rotation axis vector.

Default value: **0**

Value range: (-∞, +∞)

**NOTE**

The rotation axis vector is valid only when at least one of **x**, **y**, and **z** is not 0.

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RotateOption-z?: number--><!--Device-RotateOption-z?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

