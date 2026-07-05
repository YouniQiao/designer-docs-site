# PolyToPolyOptions

多边形到多边形的映射选项。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { matrix4 } from '@kit.ArkUI';
```

## dstIndex

```TypeScript
dstIndex?: number
```

目标坐标起始索引。 默认值: src.length/2 取值范围：[0, +∞)

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## pointCount

```TypeScript
pointCount?:number
```

使用到的点数量。要使用的点的数量如果为0，则返回单位矩阵。如果为1，则返回一个将两个点改变之前的平移矩阵。如果为2-4，则返回一个变换矩阵。 默认值: 0 取值范围：[0, +∞)

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dst

```TypeScript
dst:Array<Point>
```

目标点坐标。

**Type:** Array<Point>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## src

```TypeScript
src: Array<Point>
```

源点坐标。

**Type:** Array<Point>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## srcIndex

```TypeScript
srcIndex?: number
```

源点坐标起始索引。 默认值:0 取值范围：[0, +∞)

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

