# RenderResourceFactory

The render resource factory. RenderResourceFactory is used to create resources that can be shared across Scenes that share a RenderContext

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## createScene

```TypeScript
createScene(uri: ResourceStr, param: SceneLoadParams): Promise<Scene>
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

