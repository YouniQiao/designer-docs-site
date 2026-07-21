# Matrix4Transit

Implements a **Matrix4Transit** object.

**Since:** 7

<!--Device-matrix4-interface Matrix4Transit--><!--Device-matrix4-interface Matrix4Transit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { matrix4 } from '@kit.ArkUI';
```

<a id="combine"></a>
## combine

```TypeScript
combine(options: Matrix4Transit): Matrix4Transit
```

Combines the effects of two matrices to generate a new matrix object. The matrix that calls this API will be changed.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Matrix4Transit-combine(options: Matrix4Transit): Matrix4Transit--><!--Device-Matrix4Transit-combine(options: Matrix4Transit): Matrix4Transit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Matrix4Transit](arkts-arkui-matrix4-matrix4transit-i.md) | Yes | Matrix object to be combined. |

**Return value:**

| Type | Description |
| --- | --- |
| [Matrix4Transit](arkts-arkui-matrix4-matrix4transit-i.md) | Object after matrix combination. |

<a id="copy"></a>
## copy

```TypeScript
copy(): Matrix4Transit
```

Copies this matrix object.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Matrix4Transit-copy(): Matrix4Transit--><!--Device-Matrix4Transit-copy(): Matrix4Transit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Matrix4Transit](arkts-arkui-matrix4-matrix4transit-i.md) | Copy object of the current matrix. |

<a id="invert"></a>
## invert

```TypeScript
invert(): Matrix4Transit
```

Inverts this matrix object. The matrix that calls this API will be changed.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Matrix4Transit-invert(): Matrix4Transit--><!--Device-Matrix4Transit-invert(): Matrix4Transit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Matrix4Transit](arkts-arkui-matrix4-matrix4transit-i.md) | Inverse matrix object of the current matrix. |

<a id="rotate"></a>
## rotate

```TypeScript
rotate(options: RotateOption): Matrix4Transit
```

Rotates this matrix object along the x, y, and z axes. The matrix that calls this API will be changed.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Matrix4Transit-rotate(options: RotateOption): Matrix4Transit--><!--Device-Matrix4Transit-rotate(options: RotateOption): Matrix4Transit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [RotateOption](arkts-arkui-matrix4-rotateoption-i.md) | Yes | Rotation configuration. |

**Return value:**

| Type | Description |
| --- | --- |
| [Matrix4Transit](arkts-arkui-matrix4-matrix4transit-i.md) | Matrix object after the rotation. |

<a id="scale"></a>
## scale

```TypeScript
scale(options: ScaleOption): Matrix4Transit
```

Scales this matrix object along the x, y, and z axes. The matrix that calls this API will be changed.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Matrix4Transit-scale(options: ScaleOption): Matrix4Transit--><!--Device-Matrix4Transit-scale(options: ScaleOption): Matrix4Transit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [ScaleOption](arkts-arkui-matrix4-scaleoption-i.md) | Yes | Scaling configuration. |

**Return value:**

| Type | Description |
| --- | --- |
| [Matrix4Transit](arkts-arkui-matrix4-matrix4transit-i.md) | Matrix object after the scaling. |

<a id="setpolytopoly"></a>
## setPolyToPoly

```TypeScript
setPolyToPoly(options: PolyToPolyOptions): Matrix4Transit
```

Maps the vertex coordinates of a polygon to those of another polygon.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Matrix4Transit-setPolyToPoly(options: PolyToPolyOptions): Matrix4Transit--><!--Device-Matrix4Transit-setPolyToPoly(options: PolyToPolyOptions): Matrix4Transit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [PolyToPolyOptions](arkts-arkui-matrix4-polytopolyoptions-i.md) | Yes | Parameters for mapping. |

**Return value:**

| Type | Description |
| --- | --- |
| [Matrix4Transit](arkts-arkui-matrix4-matrix4transit-i.md) | Matrix object after the mapping. |

<a id="skew"></a>
## skew

```TypeScript
skew(x: number, y: number): Matrix4Transit
```

Skews this matrix object along the x and y axes. The matrix that calls this API will be changed.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Matrix4Transit-skew(x: number, y: number): Matrix4Transit--><!--Device-Matrix4Transit-skew(x: number, y: number): Matrix4Transit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | Amount of skewing on the x-axis. |
| y | number | Yes | Amount of skewing on the y-axis. |

**Return value:**

| Type | Description |
| --- | --- |
| [Matrix4Transit](arkts-arkui-matrix4-matrix4transit-i.md) | Matrix object after the skewing. |

<a id="transformpoint"></a>
## transformPoint

```TypeScript
transformPoint(options: [number, number]): [number, number]
```

Applies the current transformation effect to a coordinate point.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Matrix4Transit-transformPoint(options: [number, number]): [number, number]--><!--Device-Matrix4Transit-transformPoint(options: [number, number]): [number, number]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [number, number] | Yes | Point to be transformed. |

**Return value:**

| Type | Description |
| --- | --- |
| [number, number] | Point object after matrix transformation |

<a id="translate"></a>
## translate

```TypeScript
translate(options: TranslateOption): Matrix4Transit
```

Translates this matrix object along the x, y, and z axes. The matrix that calls this API will be changed.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Matrix4Transit-translate(options: TranslateOption): Matrix4Transit--><!--Device-Matrix4Transit-translate(options: TranslateOption): Matrix4Transit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [TranslateOption](arkts-arkui-matrix4-translateoption-i.md) | Yes | Translation configuration. |

**Return value:**

| Type | Description |
| --- | --- |
| [Matrix4Transit](arkts-arkui-matrix4-matrix4transit-i.md) | Matrix object after the translation. |

