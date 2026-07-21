# Shader

Shader resource.

**Inheritance/Implementation:** Shader extends [SceneResource](arkts-arkgraphics3d-sceneresources-sceneresource-i.md)

**Since:** 12

<!--Device-unnamed-export interface Shader extends SceneResource--><!--Device-unnamed-export interface Shader extends SceneResource-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

<a id="setshaderinputs"></a>
## setShaderInputs

```TypeScript
setShaderInputs(inputs: Record<string, number | Vec2 | Vec3 | Vec4 | Image>): void
```

Set shader inputs. Offers the same functionality for setting shader inputs as the property version,but with better performance.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-Shader-setShaderInputs(inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>): void--><!--Device-Shader-setShaderInputs(inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputs | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)&lt;string, number \| Vec2 \| Vec3 \| Vec4 \| Image&gt; | Yes | Inputs of the shader |

## inputs

```TypeScript
readonly inputs: Record<string, number | Vec2 | Vec3 | Vec4 | Image>
```

Shader inputs.

**Type:** Record&lt;string, number \| Vec2 \| Vec3 \| Vec4 \| Image&gt;

**Since:** 12

<!--Device-Shader-readonly inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>--><!--Device-Shader-readonly inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

