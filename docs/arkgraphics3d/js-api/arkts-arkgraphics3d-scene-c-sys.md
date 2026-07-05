# Scene

Defines the 3d scene.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## load

```TypeScript
static load(uri: ResourceStr, param: SceneLoadParams):Promise<Scene>
```

Create a new scene from a SceneLoadParams.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | ResourceStr | Yes | the resource of creating a scene |
| param | SceneLoadParams | Yes | the params for scene load |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Scene&gt; | Promise used to return a scene |

