# BaseShape

This API inherits from [CommonShapeMethod](arkts-arkui-commonshapemethod-c.md#commonshapemethod).

**Inheritance/Implementation:** BaseShape extends [CommonShapeMethod<T>](CommonShapeMethod<T>)

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { RectShape, CircleShape, EllipseShape, PathShape } from '@ohos.arkui.shape';
```

## height

```TypeScript
height(height: Length): T
```

Sets the height of a shape.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | Length | Yes | Height of the shape.<br>Unit: vp.<br>If the value is invalid, 0 vp is used. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current object. |

## size

```TypeScript
size(size: SizeOptions): T
```

Sets the size of a shape.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | SizeOptions | Yes | Size of the shape. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current object. |

## width

```TypeScript
width(width: Length): T
```

Sets the width of a shape.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | Length | Yes | Width of the shape.<br>Unit: vp.<br>If the value is invalid, 0 vp is used. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current object. |

