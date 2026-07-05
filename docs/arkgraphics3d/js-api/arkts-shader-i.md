# Shader

着色器资源.

**Inheritance:** Shaderextends: SceneResource.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## setShaderInputs

```TypeScript
setShaderInputs(inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>): void
```

设置着色器输入。与属性版本功能相同，但性能更优。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputs | Record&lt;string, double \| Vec2 \| Vec3 \| Vec4 \| Image> | Yes | 着色器的输入 |

## inputs

```TypeScript
readonly inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>
```

着色器输入.

**Type:** Record<string, double | Vec2 | Vec3 | Vec4 | Image>

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

