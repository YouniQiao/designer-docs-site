# BaseShape

继承自[CommonShapeMethod](arkts-commonshapemethod-c.md#CommonShapeMethod)。

**Inheritance:** BaseShapeextends: CommonShapeMethod<T>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { RectShape,CircleShape,EllipseShape,PathShape } from '@kit.ArkUI';
```

## height

```TypeScript
height(height: Length): T
```

设置形状的高度。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | Length | Yes | 形状的高度。 单位：vp 取值为异常值时按照0vp处理。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前对象。 |

## size

```TypeScript
size(size: SizeOptions): T
```

设置形状的大小。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | SizeOptions | Yes | 形状的大小。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前对象。 |

## width

```TypeScript
width(width: Length): T
```

设置形状的宽度。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | Length | Yes | 形状的宽度。 单位：vp 取值为异常值时按照0vp处理。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前对象。 |

