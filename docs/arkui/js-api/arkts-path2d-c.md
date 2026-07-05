# Path2D

路径对象，支持通过对象的接口进行路径的描述，并通过Canvas的stroke接口或者fill接口进行绘制。 > **说明：** > > Path2D对象不支持重置已设置的路径，如需新路径可重新创建一个空的Path2D对象。 > > Path2D对象的方法无法对 > [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md) > 和 > [OffscreenCanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-offscreencanvasrenderingcontext2d.md) > 对象中设置的路径生效。

**Inheritance:** Path2Dextends: CanvasPath.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## addPath

```TypeScript
addPath(path: Path2D, transform?: Matrix2D): void
```

将另一个路径添加到当前的路径对象中，并使用Matrix2D对象对新添加的路径对象进行图形变换。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | Path2D | Yes | 需要添加到当前路径的路径对象，路径单位：px。  异常值undefined和null按无效值处理。 |
| transform | Matrix2D | No | 新增路径的变换矩阵对象。  异常值undefined和null按无效值处理。  默认值：null。 |

## constructor

```TypeScript
constructor()
```

构造一个空的Path2D对象。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(unit: LengthMetricsUnit)
```

构造一个空的Path2D对象，支持配置Path2D对象的单位模式。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| unit | LengthMetricsUnit | Yes |  |

## constructor

```TypeScript
constructor(path: Path2D)
```

使用路径对象构造Path2D对象。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | Path2D | Yes | 路径对象。 |

## constructor

```TypeScript
constructor(path: Path2D, unit: LengthMetricsUnit)
```

使用路径对象构造Path2D对象，支持配置Path2D对象的单位模式。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | Path2D | Yes | 路径对象。 |
| unit | LengthMetricsUnit | Yes |  |

## constructor

```TypeScript
constructor(d: string)
```

使用符合SVG路径描述规范的路径字符串构造Path2D对象。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| d | string | Yes | 符合SVG路径描述规范的路径字符串，格式参考  [SVG路径描述规范](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg路径描述规范)，  异常值按无效值处理。 |

## constructor

```TypeScript
constructor(description: string, unit: LengthMetricsUnit)
```

使用符合SVG路径描述规范的路径字符串构造Path2D对象，支持配置Path2D对象的单位模式。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| description | string | Yes | 符合SVG路径描述规范的路径字符串，格式参考  [SVG路径描述规范](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg路径描述规范)，  异常值按无效值处理。 |
| unit | LengthMetricsUnit | Yes |  |

