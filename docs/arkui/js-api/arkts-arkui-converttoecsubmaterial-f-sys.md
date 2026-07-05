# convertToECSubMaterial (System API)

## Modules to Import

```TypeScript
import { uiMaterial } from '@ohos.arkui.uiMaterial';
```

## convertToECSubMaterial

```TypeScript
function convertToECSubMaterial(material: uiMaterial.ImmersiveMaterial) : uiMaterial.ImmersiveMaterial
```

Convert from ImmersiveMaterial to another ImmersiveMaterial set on sub component of EffectComponent.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| material | uiMaterial.ImmersiveMaterial | Yes | The ImmersiveMaterial. |

**Return value:**

| Type | Description |
| --- | --- |
| uiMaterial.ImmersiveMaterial | The ImmersiveMaterial set on sub component of EffectComponent. |

