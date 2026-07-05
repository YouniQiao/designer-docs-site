# RenderResourceFactory

渲染资源工厂，用于创建可在共享RenderContext的场景间共享的资源。

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## createImage

```TypeScript
createImage(params: SceneResourceParameters): Promise<Image>
```

创建图像.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneResourceParameters | Yes | 创建图像的参数 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Image> | 返回创建的图像 |

## createImageStream

```TypeScript
createImageStream(params: SceneResourceParameters): Promise<ImageStream>
```

创建图像流.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneResourceParameters | Yes | 创建图像流的参数 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ImageStream> | 返回创建的图像流 |

## createMesh

```TypeScript
createMesh(params: SceneResourceParameters, geometry: GeometryDefinition): Promise<MeshResource>
```

从顶点数组创建网格.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneResourceParameters | Yes | 创建网格对象的参数 |
| geometry | GeometryDefinition | Yes | 要创建的几何形状类型 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MeshResource> | 返回创建的网格 |

## createSampler

```TypeScript
createSampler(params:SceneResourceParameters): Promise<Sampler>
```

创建采样器.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneResourceParameters | Yes | 创建采样器的参数 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Sampler> | - 返回创建的采样器 |

## createScene

```TypeScript
createScene(uri?: ResourceStr): Promise<Scene>
```

从资源创建新场景. 如果未提供uri，将返回空场景.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | ResourceStr | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Scene> | 返回创建的场景 |

## createScene

```TypeScript
createScene(uri: ResourceStr, param: SceneLoadParams): Promise<Scene>
```

从SceneLoadParams创建新场景.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | ResourceStr | Yes | 创建场景的资源 |
| param | SceneLoadParams | Yes | 场景加载参数 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Scene> | 返回场景的Promise |

## createShader

```TypeScript
createShader(params: SceneResourceParameters): Promise<Shader>
```

创建着色器.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneResourceParameters | Yes | 创建着色器的参数 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Shader> | 返回创建的着色器 |

