# BoidsSimPlugin (System API)

Boids simulation plugin. Provides static methods to manage boids simulation components.

**Since:** 26.0.0

<!--Device-unnamed-export declare class BoidsSimPlugin--><!--Device-unnamed-export declare class BoidsSimPlugin-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

<a id="getdefaultboidssimworld"></a>
## getDefaultBoidsSimWorld

```TypeScript
static getDefaultBoidsSimWorld(scene: Scene): BoidsSimWorld | null
```

Get the default boids simulation world for the given scene.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimPlugin-static getDefaultBoidsSimWorld(scene: Scene): BoidsSimWorld | null--><!--Device-BoidsSimPlugin-static getDefaultBoidsSimWorld(scene: Scene): BoidsSimWorld | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scene | [Scene](../../apis-arkui/arkts-components/arkts-arkui-scene-t.md) | Yes | the scene to get the boids simulation world from |

**Return value:**

| Type | Description |
| --- | --- |
| [BoidsSimWorld](arkts-arkgraphics3d-sceneboidssim-boidssimworld-c-sys.md) | boids simulation world, or null if the plugin is not loaded |

