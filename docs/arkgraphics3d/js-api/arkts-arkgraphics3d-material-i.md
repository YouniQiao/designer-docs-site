# Material

Material resource.

**Inheritance/Implementation:** Material extends [SceneResource](arkts-arkgraphics3d-sceneresource-i.md#sceneresource)

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## alphaCutoff

```TypeScript
alphaCutoff?: number
```

Alpha cutoff value [0,1]. Enabled if < 1.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## blend

```TypeScript
blend?: Blend
```

Control whether the blend is enabled

**Type:** Blend

**Default:** undefined, which means that blending is disabled.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## cullMode

```TypeScript
cullMode?: CullMode
```

Culling mode.

**Type:** CullMode

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## materialType

```TypeScript
readonly materialType: MaterialType
```

Material resource type.

**Type:** MaterialType

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## polygonMode

```TypeScript
polygonMode?: PolygonMode
```

Polygon Mode of the material

**Type:** PolygonMode

**Default:** PolygonMode.FILL

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

## renderSort

```TypeScript
renderSort?: RenderSort
```

Render sorting priority for layers.

**Type:** RenderSort

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## shadowReceiver

```TypeScript
shadowReceiver?: boolean
```

Defines if the material can receive shadows.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

