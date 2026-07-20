# Scene

Defines the 3d scene.

**Since:** 12

<!--Device-unnamed-export declare class Scene--><!--Device-unnamed-export declare class Scene-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## load

```TypeScript
static load(uri: ResourceStr, param: SceneLoadParams):Promise<Scene>
```

Create a new scene from a SceneLoadParams.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Scene-static load(uri: ResourceStr, param: SceneLoadParams):Promise<Scene>--><!--Device-Scene-static load(uri: ResourceStr, param: SceneLoadParams):Promise<Scene>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | [ResourceStr](../../apis-arkui/arkts-apis/arkts-arkui-resourcestr-t.md) | Yes | the resource of creating a scene |
| param | [SceneLoadParams](arkts-arkgraphics3d-scene-sceneloadparams-i-sys.md) | Yes | the params for scene load |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Scene> | Promise used to return a scene |

