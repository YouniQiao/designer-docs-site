# RenderResourceFactory

The render resource factory. RenderResourceFactory is used to create resources that can be shared across Scenes that share a RenderContext

**Since:** 20

<!--Device-unnamed-export interface RenderResourceFactory--><!--Device-unnamed-export interface RenderResourceFactory-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## createImage

```TypeScript
createImage(params: SceneResourceParameters): Promise<Image>
```

Create an image.

**Since:** 20

<!--Device-RenderResourceFactory-createImage(params: SceneResourceParameters): Promise<Image>--><!--Device-RenderResourceFactory-createImage(params: SceneResourceParameters): Promise<Image>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SceneResourceParameters](arkts-arkgraphics3d-scene-sceneresourceparameters-i.md) | Yes | the param of creating an image |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Image> | promise an image |

## createImageStream

```TypeScript
createImageStream(params: SceneResourceParameters): Promise<ImageStream>
```

Create an image stream.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-RenderResourceFactory-createImageStream(params: SceneResourceParameters): Promise<ImageStream>--><!--Device-RenderResourceFactory-createImageStream(params: SceneResourceParameters): Promise<ImageStream>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SceneResourceParameters](arkts-arkgraphics3d-scene-sceneresourceparameters-i.md) | Yes | the param of creating an image stream |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ImageStream> | promise an image stream |

## createMesh

```TypeScript
createMesh(params: SceneResourceParameters, geometry: GeometryDefinition): Promise<MeshResource>
```

Create a Mesh from an array of vertices.

**Since:** 20

<!--Device-RenderResourceFactory-createMesh(params: SceneResourceParameters, geometry: GeometryDefinition): Promise<MeshResource>--><!--Device-RenderResourceFactory-createMesh(params: SceneResourceParameters, geometry: GeometryDefinition): Promise<MeshResource>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SceneResourceParameters](arkts-arkgraphics3d-scene-sceneresourceparameters-i.md) | Yes | the param of creating a Mesh object |
| geometry | [GeometryDefinition](arkts-arkgraphics3d-scenetypes-geometrydefinition-c.md) | Yes | what sort of a geometric shape to create |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<MeshResource> | promise a Mesh |

## createSampler

```TypeScript
createSampler(params:SceneResourceParameters): Promise<Sampler>
```

Create a Sampler.

**Since:** 20

<!--Device-RenderResourceFactory-createSampler(params:SceneResourceParameters): Promise<Sampler>--><!--Device-RenderResourceFactory-createSampler(params:SceneResourceParameters): Promise<Sampler>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SceneResourceParameters](arkts-arkgraphics3d-scene-sceneresourceparameters-i.md) | Yes | the param of create a sampler |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Sampler> | - promise a sampler |

## createScene

```TypeScript
createScene(uri?: ResourceStr): Promise<Scene>
```

Create a new scene from a Resource.If uri is not provided, will return an empty scene.

**Since:** 20

<!--Device-RenderResourceFactory-createScene(uri?: ResourceStr): Promise<Scene>--><!--Device-RenderResourceFactory-createScene(uri?: ResourceStr): Promise<Scene>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | [ResourceStr](../../apis-arkui/arkts-apis/arkts-arkui-resourcestr-t.md) | No | the resource of creating a scene |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Scene> | promise a scene |

## createShader

```TypeScript
createShader(params: SceneResourceParameters): Promise<Shader>
```

Create a shader.

**Since:** 20

<!--Device-RenderResourceFactory-createShader(params: SceneResourceParameters): Promise<Shader>--><!--Device-RenderResourceFactory-createShader(params: SceneResourceParameters): Promise<Shader>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SceneResourceParameters](arkts-arkgraphics3d-scene-sceneresourceparameters-i.md) | Yes | the param of creating a shader |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Shader> | promise a shader |

