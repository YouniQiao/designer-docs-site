# PointUtils

This class offers a comprehensive set of operations for handling common2D Point objects.

**Since:** 26.0.0

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## negate

```TypeScript
static negate(point: common2D.Point): void
```

取反点的坐标。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | common2D.Point | Yes | 指定要取反的点。 |

## offset

```TypeScript
static offset(point: common2D.Point, dx: double, dy: double): void
```

将点的坐标偏移dx, dy。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | common2D.Point | Yes | 指定要偏移的点。 |
| dx | double | Yes | 指示在x轴上偏移的距离（以像素为单位）。 |
| dy | double | Yes | 指示在y轴上偏移的距离（以像素为单位）。 |

