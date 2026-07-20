# SceneResourceFactory

The scene resource factory.

**Inheritance/Implementation:** SceneResourceFactory extends [RenderResourceFactory](arkts-arkgraphics3d-scene-renderresourcefactory-i.md)

**Since:** 12

<!--Device-unnamed-export interface SceneResourceFactory extends RenderResourceFactory--><!--Device-unnamed-export interface SceneResourceFactory extends RenderResourceFactory-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## createCamera

```TypeScript
createCamera(params: SceneNodeParameters): Promise<Camera>
```

Create a camera.

**Since:** 12

<!--Device-SceneResourceFactory-createCamera(params: SceneNodeParameters): Promise<Camera>--><!--Device-SceneResourceFactory-createCamera(params: SceneNodeParameters): Promise<Camera>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SceneNodeParameters](arkts-arkgraphics3d-scene-scenenodeparameters-i.md) | Yes | the param of creating a camera |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Camera> | promise a camera |

## createCamera

```TypeScript
createCamera(params: SceneNodeParameters, cameraParams: CameraParameters): Promise<Camera>
```

Create a camera.

**Since:** 21

<!--Device-SceneResourceFactory-createCamera(params: SceneNodeParameters, cameraParams: CameraParameters): Promise<Camera>--><!--Device-SceneResourceFactory-createCamera(params: SceneNodeParameters, cameraParams: CameraParameters): Promise<Camera>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SceneNodeParameters](arkts-arkgraphics3d-scene-scenenodeparameters-i.md) | Yes | the param of creating a camera |
| cameraParams | [CameraParameters](arkts-arkgraphics3d-scene-cameraparameters-i.md) | Yes | camera specific extra parameters |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Camera> | promise a camera |

## createEffect

```TypeScript
createEffect(params: EffectParameters): Promise<Effect>
```

Create an effect.

**Since:** 21

<!--Device-SceneResourceFactory-createEffect(params: EffectParameters): Promise<Effect>--><!--Device-SceneResourceFactory-createEffect(params: EffectParameters): Promise<Effect>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [EffectParameters](arkts-arkgraphics3d-scene-effectparameters-i.md) | Yes | the params of creating an effect. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Effect> | promise an effect. |

## createEnvironment

```TypeScript
createEnvironment(params: SceneResourceParameters): Promise<Environment>
```

Create an environment.

**Since:** 12

<!--Device-SceneResourceFactory-createEnvironment(params: SceneResourceParameters): Promise<Environment>--><!--Device-SceneResourceFactory-createEnvironment(params: SceneResourceParameters): Promise<Environment>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SceneResourceParameters](arkts-arkgraphics3d-scene-sceneresourceparameters-i.md) | Yes | the param of creating an environment object |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Environment> | promise an environment |

## createGeometry

```TypeScript
createGeometry(params: SceneNodeParameters, mesh:MeshResource): Promise<Geometry>
```

Create a geometry node.

**Since:** 18

<!--Device-SceneResourceFactory-createGeometry(params: SceneNodeParameters, mesh:MeshResource): Promise<Geometry>--><!--Device-SceneResourceFactory-createGeometry(params: SceneNodeParameters, mesh:MeshResource): Promise<Geometry>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SceneNodeParameters](arkts-arkgraphics3d-scene-scenenodeparameters-i.md) | Yes | the param of creating a geometry |
| mesh | [MeshResource](arkts-arkgraphics3d-sceneresources-meshresource-i.md) | Yes | resource - The mesh data for the geometry |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Geometry> | promise a geometry |

## createLight

```TypeScript
createLight(params: SceneNodeParameters, lightType: LightType): Promise<Light>
```

Create a light.

**Since:** 12

<!--Device-SceneResourceFactory-createLight(params: SceneNodeParameters, lightType: LightType): Promise<Light>--><!--Device-SceneResourceFactory-createLight(params: SceneNodeParameters, lightType: LightType): Promise<Light>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SceneNodeParameters](arkts-arkgraphics3d-scene-scenenodeparameters-i.md) | Yes | the param of creating a light |
| lightType | [LightType](arkts-arkgraphics3d-scenenodes-lighttype-e.md) | Yes | the type of the light |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Light> | promise a light |

## createMaterial

```TypeScript
createMaterial(params: SceneResourceParameters, materialType: MaterialType): Promise<Material>
```

Create a material.

**Since:** 12

<!--Device-SceneResourceFactory-createMaterial(params: SceneResourceParameters, materialType: MaterialType): Promise<Material>--><!--Device-SceneResourceFactory-createMaterial(params: SceneResourceParameters, materialType: MaterialType): Promise<Material>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SceneResourceParameters](arkts-arkgraphics3d-scene-sceneresourceparameters-i.md) | Yes | the param of creating a material |
| materialType | [MaterialType](../../apis-arkui/arkts-apis/arkts-arkui-uimaterial-materialtype-e.md) | Yes | the type of the material |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Material> | promise a material |

## createNode

```TypeScript
createNode(params: SceneNodeParameters): Promise<Node>
```

Create a node.

**Since:** 12

<!--Device-SceneResourceFactory-createNode(params: SceneNodeParameters): Promise<Node>--><!--Device-SceneResourceFactory-createNode(params: SceneNodeParameters): Promise<Node>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SceneNodeParameters](arkts-arkgraphics3d-scene-scenenodeparameters-i.md) | Yes | the param of creating a node |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Node> | promise a node |

