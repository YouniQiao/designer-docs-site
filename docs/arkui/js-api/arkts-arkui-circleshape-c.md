# CircleShape

Represents a circle shape used in the **clipShape** and **maskShape** APIs. This API inherits from [BaseShape](arkts-arkui-baseshape-c.md#baseshape).

**Inheritance/Implementation:** CircleShape extends [BaseShape<CircleShape>](BaseShape<CircleShape>)

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { RectShape, CircleShape, EllipseShape, PathShape } from '@ohos.arkui.shape';
```

## constructor

```TypeScript
constructor(options?: ShapeSize)
```

A constructor used to create a **CircleShape** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ShapeSize | No | Size of the shape. |

