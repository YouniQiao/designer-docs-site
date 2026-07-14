# Camera

Defines camera.

**Inheritance/Implementation:** Camera extends [Node](arkts-arkgraphics3d-node-i.md)

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## getProjectionMatrix

```TypeScript
getProjectionMatrix(): Mat4x4
```

Get the projection matrix of this camera.

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| Mat4x4 | -- the projection matrix of this camera |

## getViewMatrix

```TypeScript
getViewMatrix(): Mat4x4
```

Get the view matrix of this camera.

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| Mat4x4 | -- the view matrix of this camera |

## raycast

```TypeScript
raycast(viewPosition: Vec2, params: RaycastParameters): Promise<RaycastResult[]>
```

Casts a ray to a position on the screen and lists what the ray hits.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| viewPosition | Vec2 | Yes | Position to cast in the normalized device coordinates. |
| params | RaycastParameters | Yes | Options used to execute the ray cast. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RaycastResult[]&gt; | - Promise used to return an array of hit results, sorted from the closest to the farthest. The array may be empty. |

## clearColor

```TypeScript
clearColor: Color | null
```

Background clear color (environment background overrides this color, BACKGROUND_NONE is needed for this to actually take effect).

**Type:** Color | null

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## effects

```TypeScript
readonly effects: Container<Effect>
```

The effects to apply on the camera output.

**Type:** Container<Effect>

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

## enabled

```TypeScript
enabled: boolean
```

Whether the camera is enabled.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## farPlane

```TypeScript
farPlane: number
```

Far plane of the camera, the unit is the scene unit in the world coordinate system (e.g., cm, m, km).

**Type:** number

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## fov

```TypeScript
fov: number
```

Field of view of the camera, the unit is radian.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## msaa

```TypeScript
msaa?: boolean
```

Controls whether MSAA is enabled or not.

**Type:** boolean

**Default:** false

**Since:** 22

**System capability:** SystemCapability.ArkUi.Graphics3D

## nearPlane

```TypeScript
nearPlane: number
```

Near plane of the camera, the unit is the scene unit in the world coordinate system (e.g., cm, m, km).

**Type:** number

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## postProcess

```TypeScript
postProcess: PostProcessSettings | null
```

The post processing settings of the camera.

**Type:** PostProcessSettings | null

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## renderingPipeline

```TypeScript
renderingPipeline?: RenderingPipelineType
```

Controls the rendering pipeline. Note that if FORWARD_LIGHTWEIGHT pipeline is selected, some features will be unavailable.

**Type:** RenderingPipelineType

**Default:** RenderingPipelineType.FORWARD_LIGHTWEIGHT

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

