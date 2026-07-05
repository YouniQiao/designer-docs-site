# SceneResourceFactory

场景资源工厂.

**Inheritance:** SceneResourceFactoryextends: RenderResourceFactory.

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
| params | SceneNodeParameters | Yes | 创建相机的参数 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Camera> | 返回创建的相机 |

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
| params | SceneNodeParameters | Yes | 创建相机的参数 |
| cameraParams | CameraParameters | Yes | 相机特定的额外参数 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Camera> | 返回创建的相机 |

## createEffect

```TypeScript
createEffect(params: EffectParameters): Promise<Effect>
```

创建特效.

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | EffectParameters | Yes | 创建特效的参数. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Effect> | 返回创建的特效. |

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
| params | SceneResourceParameters | Yes | 创建环境对象的参数 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Environment> | 返回创建的环境 |

## createGeometry

```TypeScript
createGeometry(params: SceneNodeParameters, mesh:MeshResource): Promise<Geometry>
```

创建几何节点.

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | SceneNodeParameters | Yes | 创建几何体的参数 |
| mesh | MeshResource | Yes | resource - 几何体的网格数据 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Geometry> | 返回创建的几何体 |

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
| lightType | LightType | Yes | 光源类型 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Light> | 返回创建的光源 |

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
| materialType | MaterialType | Yes | 材质类型 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Material> | 返回创建的材质 |

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
| params | SceneNodeParameters | Yes | 创建节点的参数 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Node> | 返回创建的节点 |

