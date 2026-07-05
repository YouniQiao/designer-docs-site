# RectShape

用于clipShape和maskShape接口的矩形形状。 继承自[BaseShape](arkts-baseshape-c.md#BaseShape)。

**Inheritance:** RectShapeextends: BaseShape<RectShape>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { RectShape,CircleShape,EllipseShape,PathShape } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options?: RectShapeOptions | RoundRectShapeOptions)
```

创建RectShape对象。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RectShapeOptions \| RoundRectShapeOptions | No | 矩形形状参数。 |

## radius

```TypeScript
radius(radius: number | string | Array<number | string>): RectShape
```

设置矩形形状的圆角半径。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | number \| string \| Array&lt;number \| string> | Yes | 矩形形状的圆角半径。仅接受数组的前四个元素，分别为矩形左上，右上，左下，右下的圆角半径。 类型为  number时取值范围是[0, +∞)，string时是[Length]Length。 单位：vp 取值为异常值时按照0vp处理。 |

**Return value:**

| Type | Description |
| --- | --- |
| RectShape | 返回RectShape对象。 |

## radiusHeight

```TypeScript
radiusHeight(rHeight: number | string): RectShape
```

设置矩形形状圆角半径的高度。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rHeight | number \| string | Yes | 矩形形状圆角半径的高度。 类型为number时取值范围是  [0, +∞)，string时是[Length]Length。 单位：vp 取值为异常值时按照0vp处理。 |

**Return value:**

| Type | Description |
| --- | --- |
| RectShape | 返回RectShape对象。 |

## radiusWidth

```TypeScript
radiusWidth(rWidth: number | string): RectShape
```

设置矩形形状圆角半径的宽度。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rWidth | number \| string | Yes | 矩形形状圆角半径的宽度。 类型为number时取值范围是  [0, +∞)，string时是[Length]Length。 单位：vp 取值为异常值时按照0vp处理。 |

**Return value:**

| Type | Description |
| --- | --- |
| RectShape | 返回RectShape对象。 |

