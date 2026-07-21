# RectShape

Represents a rectangle shape used in the **clipShape** and **maskShape** APIs.

This API inherits from [BaseShape](arkts-arkui-arkui-shape-baseshape-c.md).

**Inheritance/Implementation:** RectShape extends [BaseShape<RectShape>](BaseShape<RectShape>)

**Since:** 12

<!--Device-unnamed-export declare class RectShape extends BaseShape<RectShape>--><!--Device-unnamed-export declare class RectShape extends BaseShape<RectShape>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { RectShape, CircleShape, EllipseShape, PathShape } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(options?: RectShapeOptions | RoundRectShapeOptions)
```

A constructor used to create a **RectShape** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-RectShape-constructor(options?: RectShapeOptions | RoundRectShapeOptions)--><!--Device-RectShape-constructor(options?: RectShapeOptions | RoundRectShapeOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [RectShapeOptions](arkts-arkui-arkui-shape-rectshapeoptions-i.md) \| RoundRectShapeOptions | No | Rectangle parameters. |

<a id="radius"></a>
## radius

```TypeScript
radius(radius: number | string | Array<number | string>): RectShape
```

Sets the radius of the rectangle border corners.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-RectShape-radius(radius: number | string | Array<number | string>): RectShape--><!--Device-RectShape-radius(radius: number | string | Array<number | string>): RectShape-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | number \| string \| Array&lt;number \| string&gt; | Yes | Radius of the rectangle border corners. When an array is provided, it should contain exactly four elements, corresponding to the radius of the upper left, upper right, lower left, and lower right corners of the rectangle, respectively. If more than four elements are contained, only the first four are accepted.<br> When the parameter type is number, the valid value range is [0, +∞). When the parameter type is string, the value must conform to the [Length](arkts-arkui-length-t.md) type specification.<br>Unit: vp.<br>If the value is invalid, 0 vp is used. |

**Return value:**

| Type | Description |
| --- | --- |
| [RectShape](arkts-arkui-arkui-shape-rectshape-c.md) | **RectShape** object. |

<a id="radiusheight"></a>
## radiusHeight

```TypeScript
radiusHeight(rHeight: number | string): RectShape
```

Sets the radius height of the rectangle border corners.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-RectShape-radiusHeight(rHeight: number | string): RectShape--><!--Device-RectShape-radiusHeight(rHeight: number | string): RectShape-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rHeight | number \| string | Yes | Radius height of the rectangle border corners.<br> When the parameter type is number, the valid value range is [0, +∞). When the parameter type is string, the value must conform to the [Length](arkts-arkui-length-t.md) type specification.<br>Unit: vp.<br>If the value is invalid, 0 vp is used. |

**Return value:**

| Type | Description |
| --- | --- |
| [RectShape](arkts-arkui-arkui-shape-rectshape-c.md) | **RectShape** object. |

<a id="radiuswidth"></a>
## radiusWidth

```TypeScript
radiusWidth(rWidth: number | string): RectShape
```

Sets the radius width of the rectangle border corners.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-RectShape-radiusWidth(rWidth: number | string): RectShape--><!--Device-RectShape-radiusWidth(rWidth: number | string): RectShape-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rWidth | number \| string | Yes | Radius width of the rectangle border corners.<br> When the parameter type is number, the valid value range is [0, +∞). When the parameter type is string, the value must conform to the [Length](arkts-arkui-length-t.md) type specification.<br>Unit: vp.<br>If the value is invalid, 0 vp is used. |

**Return value:**

| Type | Description |
| --- | --- |
| [RectShape](arkts-arkui-arkui-shape-rectshape-c.md) | **RectShape** object. |

