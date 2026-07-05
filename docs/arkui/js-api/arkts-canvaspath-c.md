# CanvasPath

路径对象，提供基本的路径绘制方法。路径相关API的详细说明请参见CanvasRenderingContext2D中的描述。

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## arc

```TypeScript
arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void
```

绘制弧线路径。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | 弧线圆心的x坐标值。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| y | number | Yes | 弧线圆心的y坐标值。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| radius | number | Yes | 弧线的圆半径。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| startAngle | number | Yes | 弧线的起始弧度。单位：弧度。 |
| endAngle | number | Yes | 弧线的终止弧度。单位：弧度。 |
| counterclockwise | boolean | No |  |

## arcTo

```TypeScript
arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void
```

依据圆弧经过的点和圆弧半径创建圆弧路径。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x1 | number | Yes | 圆弧经过的第一个点的x坐标值。 API version 18之前，设置NaN或Infinity时，整条路径  不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或  undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| y1 | number | Yes | 圆弧经过的第一个点的y坐标值。 API version 18之前，设置NaN或Infinity时，整条路径  不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或  undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| x2 | number | Yes | 圆弧经过的第二个点的x坐标值。 API version 18之前，设置NaN或Infinity时，整条路径  不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或  undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| y2 | number | Yes | 圆弧经过的第二个点的y坐标值。 API version 18之前，设置NaN或Infinity时，整条路径  不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或  undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| radius | number | Yes | 圆弧的圆半径值。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |

## bezierCurveTo

```TypeScript
bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void
```

创建三次贝塞尔曲线的路径。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cp1x | number | Yes | 第一个贝塞尔参数的x坐标值。 API version 18之前，设置NaN或Infinity时，整条路径  不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或  undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| cp1y | number | Yes | 第一个贝塞尔参数的y坐标值。 API version 18之前，设置NaN或Infinity时，整条路径  不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或  undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| cp2x | number | Yes | 第二个贝塞尔参数的x坐标值。 API version 18之前，设置NaN或Infinity时，整条路径  不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或  undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| cp2y | number | Yes | 第二个贝塞尔参数的y坐标值。 API version 18之前，设置NaN或Infinity时，整条路径  不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或  undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| x | number | Yes | 路径结束时的x坐标值。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| y | number | Yes | 路径结束时的y坐标值。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |

## closePath

```TypeScript
closePath(): void
```

将路径的当前点移回到路径的起点，当前点到起点间画一条直线。如果形状已经闭合或只有一个点，则此功能不执行任何操作。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ellipse

```TypeScript
ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void
```

在规定的矩形区域绘制一个椭圆。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | 椭圆圆心的x轴坐标。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| y | number | Yes | 椭圆圆心的y轴坐标。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| radiusX | number | Yes | 椭圆x轴的半径长度。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| radiusY | number | Yes | 椭圆y轴的半径长度。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| rotation | number | Yes | 椭圆的旋转角度。单位：弧度。 |
| startAngle | number | Yes | 椭圆绘制的起始点角度。单位：弧度。 |
| endAngle | number | Yes | 椭圆绘制的结束点角度。单位：弧度。 |
| counterclockwise | boolean | No |  |

## lineTo

```TypeScript
lineTo(x: number, y: number): void
```

从当前点绘制一条直线到目标点。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | 目标点X轴坐标。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| y | number | Yes | 目标点Y轴坐标。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |

## moveTo

```TypeScript
moveTo(x: number, y: number): void
```

将路径的当前坐标点移动到目标点，移动过程中不绘制线条。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | 目标点X轴坐标。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| y | number | Yes | 目标点Y轴坐标。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp   > 说明：  >  > API version 18之前，如果没有调用moveTo接口或传入无效参数，路径从(0,0)开始。  >  > API version 18及以后，如果没有调用moveTo接口或传入无效参数，路径将从第一个有效调用的  > lineTo、arcTo、bezierCurveTo或quadraticCurveTo的起始点开始。 |

## quadraticCurveTo

```TypeScript
quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void
```

创建二次贝塞尔曲线路径。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cpx | number | Yes | 贝塞尔参数的x坐标值。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| cpy | number | Yes | 贝塞尔参数的y坐标值。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| x | number | Yes | 路径结束时的x坐标值。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| y | number | Yes | 路径结束时的y坐标值。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |

## rect

```TypeScript
rect(x: number, y: number, w: number, h: number): void
```

创建矩形路径。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | 指定矩形的左上角x坐标值。 API version 18之前，设置NaN或Infinity时，整条路径  不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或  undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| y | number | Yes | 指定矩形的左上角y坐标值。 API version 18之前，设置NaN或Infinity时，整条路径  不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或  undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| w | number | Yes | 指定矩形的宽度。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |
| h | number | Yes | 指定矩形的高度。 API version 18之前，设置NaN或Infinity时，整条路径不显示；  设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时  当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp |

## roundRect

```TypeScript
roundRect(x: number, y: number, w: number, h: number, radii?: number | Array<number>): void
```

创建圆角矩形路径，此方法不会直接渲染内容，如需将圆角矩形绘制到画布上，可以使用fill或stroke方法。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | 矩形左上角x坐标值。 设置null时，按照0处理；设置undefined时，  按无效值处理，不进行绘制。 绘制完整矩形时，取值范围为[0, 画布宽度)。 默认单位：vp |
| y | number | Yes | 矩形左上角y坐标值。 设置null时，按照0处理；设置undefined时，  按无效值处理，不进行绘制。 绘制完整矩形时，取值范围为[0, 画布高度)。 默认单位：vp |
| w | number | Yes | 矩形的宽度。负值表示从右向左绘制矩形。 设置null时，按照0处理；  设置undefined时，按无效值处理，不进行绘制。 绘制完整矩形时，取值范围为[-x, 画布宽度 - x]。  默认单位：vp |
| h | number | Yes | 矩形的高度。负值表示向上绘制。 设置null时，按照0处理；  设置undefined时，按无效值处理，不进行绘制。 绘制完整矩形时，取值范围为[-y, 画布高度 - y]。  默认单位：vp |
| radii | number \| Array&lt;number> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 103701 | 参数错误。可能的原因：  1. 参数radii数组的元素个数为0或超过4个。  2. 参数radii中包含负数。 |

