# RectShape

Represents a rectangle shape used in the **clipShape** and **maskShape** APIs.

This API inherits from [BaseShape](arkts-arkui-baseshape-c.md).

**Inheritance/Implementation:** RectShape extends [BaseShape<RectShape>](BaseShape<RectShape>)

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { RectShape, CircleShape, EllipseShape, PathShape } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options?: RectShapeOptions | RoundRectShapeOptions)
```

A constructor used to create a **RectShape** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RectShapeOptions \| RoundRectShapeOptions | No | Rectangle parameters. |

## radius

```TypeScript
radius(radius: number | string | Array<number | string>): RectShape
```

Sets the radius of the rectangle border corners.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | number \| string \| Array&lt;number \| string&gt; | Yes | Radius of the rectangle border corners. When an arrayis provided, it should contain exactly four elements, corresponding to the radius of the upper left, upperright, lower left, and lower right corners of the rectangle, respectively. If more than four elements arecontained, only the first four are accepted.<br> When the parameter type is number, the valid value range is[0, +∞). When the parameter type is string, the value must conform to the [Length](../arkts-components/arkts-arkui-length-t.md) type specification.<br>Unit: vp.<br>If the value is invalid, 0 vp is used. |

**Return value:**

| Type | Description |
| --- | --- |
| RectShape | **RectShape** object. |

## radiusHeight

```TypeScript
radiusHeight(rHeight: number | string): RectShape
```

Sets the radius height of the rectangle border corners.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rHeight | number \| string | Yes | Radius height of the rectangle border corners.<br> When the parameter type isnumber, the valid value range is[0, +∞). When the parameter type is string, the value must conform to the [Length](../arkts-components/arkts-arkui-length-t.md) type specification.<br>Unit: vp.<br>If the value is invalid, 0 vp is used. |

**Return value:**

| Type | Description |
| --- | --- |
| RectShape | **RectShape** object. |

## radiusWidth

```TypeScript
radiusWidth(rWidth: number | string): RectShape
```

Sets the radius width of the rectangle border corners.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rWidth | number \| string | Yes | Radius width of the rectangle border corners.<br> When the parameter type isnumber, the valid value range is[0, +∞). When the parameter type is string, the value must conform to the [Length](../arkts-components/arkts-arkui-length-t.md) type specification.<br>Unit: vp.<br>If the value is invalid, 0 vp is used. |

**Return value:**

| Type | Description |
| --- | --- |
| RectShape | **RectShape** object. |

