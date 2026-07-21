# LayerMask

Defines the layer mask of the node.

**Since:** 12

<!--Device-unnamed-export interface LayerMask--><!--Device-unnamed-export interface LayerMask-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

<a id="getenabled"></a>
## getEnabled

```TypeScript
getEnabled(index: number): boolean
```

Get whether layer mask is enabled.

**Since:** 12

<!--Device-LayerMask-getEnabled(index: int): boolean--><!--Device-LayerMask-getEnabled(index: int): boolean-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | the layer mask |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | whether layer mask is enabled |

<a id="setenabled"></a>
## setEnabled

```TypeScript
setEnabled(index: number, enabled: boolean): void
```

Set whether the layer mask is enabled.

**Since:** 12

<!--Device-LayerMask-setEnabled(index: int, enabled: boolean): void--><!--Device-LayerMask-setEnabled(index: int, enabled: boolean): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | the layer mask |
| enabled | boolean | Yes | whether layer mask is enabled |

