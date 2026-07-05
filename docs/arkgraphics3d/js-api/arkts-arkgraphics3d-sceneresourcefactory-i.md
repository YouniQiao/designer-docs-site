# SceneResourceFactory

The scene resource factory.

**Inheritance/Implementation:** SceneResourceFactory extends [RenderResourceFactory](arkts-arkgraphics3d-renderresourcefactory-i.md#renderresourcefactory)

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## createCamera

```TypeScript
createCamera(params: SceneNodeParameters): Promise<Camera>
```

Create a camera.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneNodeParameters | Yes | the param of creating a camera |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Camera&gt; | promise a camera |

## createCamera

```TypeScript
createCamera(params: SceneNodeParameters, cameraParams: CameraParameters): Promise<Camera>
```

Create a camera.

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneNodeParameters | Yes | the param of creating a camera |
| cameraParams | CameraParameters | Yes | camera specific extra parameters |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Camera&gt; | promise a camera |

## createEffect

```TypeScript
createEffect(params: EffectParameters): Promise<Effect>
```

Create an effect.

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | EffectParameters | Yes | the params of creating an effect. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Effect&gt; | promise an effect. |

## createEnvironment

```TypeScript
createEnvironment(params: SceneResourceParameters): Promise<Environment>
```

Create an environment.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneResourceParameters | Yes | the param of creating an environment object |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Environment&gt; | promise an environment |

## createGeometry

```TypeScript
createGeometry(params: SceneNodeParameters, mesh:MeshResource): Promise<Geometry>
```

Create a geometry node.

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneNodeParameters | Yes | the param of creating a geometry |
| mesh | MeshResource | Yes | resource - The mesh data for the geometry |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Geometry&gt; | promise a geometry |

## createLight

```TypeScript
createLight(params: SceneNodeParameters, lightType: LightType): Promise<Light>
```

Create a light.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneNodeParameters | Yes | the param of creating a light |
| lightType | LightType | Yes | the type of the light |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Light&gt; | promise a light |

## createMaterial

```TypeScript
createMaterial(params: SceneResourceParameters, materialType: MaterialType): Promise<Material>
```

Create a material.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneResourceParameters | Yes | the param of creating a material |
| materialType | MaterialType | Yes | the type of the material |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Material&gt; | promise a material |

## createNode

```TypeScript
createNode(params: SceneNodeParameters): Promise<Node>
```

Create a node.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneNodeParameters | Yes | the param of creating a node |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Node&gt; | promise a node |

