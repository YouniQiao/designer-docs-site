# LayerMask

Defines the layer mask of the node.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

<!--Device-unnamed-export interface LayerMask--><!--Device-unnamed-export interface LayerMask-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## getEnabled

ArkTS-Dyn:
```TypeScript
getEnabled(index: number): boolean
```

ArkTS-Sta:
```TypeScript
getEnabled(index: int): boolean
```

Get whether layer mask is enabled.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

<!--Device-LayerMask-getEnabled(index: int): boolean--><!--Device-LayerMask-getEnabled(index: int): boolean-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | the layer mask |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | whether layer mask is enabled |

## setEnabled

ArkTS-Dyn:
```TypeScript
setEnabled(index: number, enabled: boolean): void
```

ArkTS-Sta:
```TypeScript
setEnabled(index: int, enabled: boolean): void
```

Set whether the layer mask is enabled.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

<!--Device-LayerMask-setEnabled(index: int, enabled: boolean): void--><!--Device-LayerMask-setEnabled(index: int, enabled: boolean): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | the layer mask |
| enabled | boolean | Yes | whether layer mask is enabled |

