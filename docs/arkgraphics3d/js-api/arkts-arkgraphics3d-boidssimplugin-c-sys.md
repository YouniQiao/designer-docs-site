# BoidsSimPlugin (System API)

Boids simulation plugin. Provides static methods to manage boids simulation components.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## getDefaultBoidsSimWorld

```TypeScript
static getDefaultBoidsSimWorld(scene: Scene): BoidsSimWorld | null
```

Get the default boids simulation world for the given scene.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scene | Scene | Yes | the scene to get the boids simulation world from |

**Return value:**

| Type | Description |
| --- | --- |
| BoidsSimWorld | boids simulation world, or null if the plugin is not loaded |

