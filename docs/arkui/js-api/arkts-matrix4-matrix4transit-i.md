# Matrix4Transit

矩阵对象。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { matrix4 } from '@kit.ArkUI';
```

## combine

```TypeScript
combine(options: Matrix4Transit): Matrix4Transit
```

Matrix的叠加函数，可以将两个矩阵的效果叠加起来生成一个新的矩阵对象。会改变调用该函数的原始矩阵。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Matrix4Transit | Yes | 待叠加的矩阵对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Matrix4Transit | 矩阵叠加后的对象。 |

## copy

```TypeScript
copy(): Matrix4Transit
```

Matrix的拷贝函数，可以拷贝一份当前的矩阵对象。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Matrix4Transit | 当前矩阵的拷贝对象。 |

## invert

```TypeScript
invert(): Matrix4Transit
```

Matrix的逆函数，可以返回一个当前矩阵对象的逆矩阵，即效果正好相反。会改变调用该函数的原始矩阵。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Matrix4Transit | 当前矩阵的逆矩阵对象。 |

## rotate

```TypeScript
rotate(options: RotateOption): Matrix4Transit
```

Matrix的旋转函数，可以为当前矩阵增加x轴/y轴/z轴旋转效果。会改变调用该函数的原始矩阵。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RotateOption | Yes | 设置旋转参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Matrix4Transit | 旋转效果后的矩阵对象。 |

## scale

```TypeScript
scale(options: ScaleOption): Matrix4Transit
```

Matrix的缩放函数，可以为当前矩阵增加x轴/y轴/z轴缩放效果。会改变调用该函数的原始矩阵。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ScaleOption | Yes | 设置缩放参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Matrix4Transit | 缩放效果后的矩阵对象。 |

## setPolyToPoly

```TypeScript
setPolyToPoly(options: PolyToPolyOptions): Matrix4Transit
```

将一个多边形的顶点坐标映射到另外一个多边形的顶点坐标。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PolyToPolyOptions | Yes | 映射相关的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Matrix4Transit | 当前矩阵变换后的对象。 |

## skew

```TypeScript
skew(x: number, y: number): Matrix4Transit
```

Matrix的倾斜函数，可以为当前矩阵增加x轴/y轴倾斜效果。会改变调用该函数的原始矩阵。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | 设置x轴倾斜参数。 |
| y | number | Yes | 设置y轴倾斜参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Matrix4Transit | 倾斜效果后的矩阵对象。 |

## transformPoint

```TypeScript
transformPoint(options: [number, number]): [number, number]
```

Matrix的坐标点转换函数，可以将当前的变换效果作用到一个坐标点上。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [number, number] | Yes | 需要转换的坐标点。 |

**Return value:**

| Type | Description |
| --- | --- |
| [number, number] | 返回矩阵变换后的Point对象。 |

## translate

```TypeScript
translate(options: TranslateOption): Matrix4Transit
```

Matrix的平移函数，可以为当前矩阵增加x轴/y轴/z轴平移效果。会改变调用该函数的原始矩阵。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TranslateOption | Yes | 设置平移参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Matrix4Transit | 平移效果后的矩阵对象。 |

