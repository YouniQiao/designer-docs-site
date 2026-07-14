# RenderResourceFactory

The render resource factory. RenderResourceFactory is used to create resources that can be shared across Scenes that share a RenderContext

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## createImage

```TypeScript
createImage(params: SceneResourceParameters): Promise<Image>
```

Create an image.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneResourceParameters | Yes | the param of creating an image |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Image&gt; | promise an image |

## createImageStream

```TypeScript
createImageStream(params: SceneResourceParameters): Promise<ImageStream>
```

Create an image stream.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneResourceParameters | Yes | the param of creating an image stream |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ImageStream&gt; | promise an image stream |

## createMesh

```TypeScript
createMesh(params: SceneResourceParameters, geometry: GeometryDefinition): Promise<MeshResource>
```

Create a Mesh from an array of vertices.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneResourceParameters | Yes | the param of creating a Mesh object |
| geometry | GeometryDefinition | Yes | what sort of a geometric shape to create |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MeshResource&gt; | promise a Mesh |

## createSampler

```TypeScript
createSampler(params:SceneResourceParameters): Promise<Sampler>
```

Create a Sampler.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneResourceParameters | Yes | the param of create a sampler |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Sampler&gt; | - promise a sampler |

## createScene

```TypeScript
createScene(uri?: ResourceStr): Promise<Scene>
```

Create a new scene from a Resource. If uri is not provided, will return an empty scene.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | ResourceStr | No | the resource of creating a scene |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Scene&gt; | promise a scene |

## createShader

```TypeScript
createShader(params: SceneResourceParameters): Promise<Shader>
```

Create a shader.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneResourceParameters | Yes | the param of creating a shader |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Shader&gt; | promise a shader |

