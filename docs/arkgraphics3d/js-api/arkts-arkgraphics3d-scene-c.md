# Scene

Defines the 3d scene.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## cloneNode

```TypeScript
cloneNode(node: Node, parent: Node, name: string): Node | null
```

clone a node or a subtree whose root node is the input node

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | input node to be cloned |
| parent | Node | Yes | the parent node which the cloned node will be set as its child node |
| name | string | Yes | the name of the cloned node |

**Return value:**

| Type | Description |
| --- | --- |
| Node | the clone result, return null if clone is failed. |

## createComponent

```TypeScript
createComponent(node: Node, name: string): Promise<SceneComponent>
```

Create a new component.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | The node the component is attached to |
| name | string | Yes | The name of the component to load. Valid names are defined by each plugin. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SceneComponent&gt; | - The newly added component. |

## destroy

```TypeScript
destroy(): void
```

Release all native scene resources. All TS references will be undefined.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## getComponent

```TypeScript
getComponent(node: Node, name: string): SceneComponent | null
```

Get component by name.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | The node component is attached to. |
| name | string | Yes | name of the component |

**Return value:**

| Type | Description |
| --- | --- |
| SceneComponent | @syscap SystemCapability.ArkUi.Graphics3D |

## getDefaultRenderContext

```TypeScript
static getDefaultRenderContext(): RenderContext | null
```

Get default render context

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| RenderContext | -- The default RenderContext instance@static |

## getNodeByPath

```TypeScript
getNodeByPath(path: string, type?: NodeType): Node | null
```

Get a node by path.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | the path of the node |
| type | NodeType | No | verify the type of node, if it does not match, return null |

**Return value:**

| Type | Description |
| --- | --- |
| Node | if the node is found by it's path |

## getResourceFactory

```TypeScript
getResourceFactory(): SceneResourceFactory
```

Get resource factory.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| SceneResourceFactory | if the node is found by it's path |

## importNode

```TypeScript
importNode(name: string, node: Node, parent: Node | null): Node
```

Import node into the scene. The original node may come from separate Scene.
The node will be cloned and any modifications to the old node will not be visible after the import.

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | The name of the newly created node. |
| node | Node | Yes | The node to be imported. |
| parent | Node \| null | Yes | The parent node or null for root |

**Return value:**

| Type | Description |
| --- | --- |
| Node | The newly created node. |

## importScene

```TypeScript
importScene(name: string, scene: Scene, parent: Node | null): Node
```

Import scene into the scene as a node. The node hierarchy will appear under the parent node.
All animations from the scene will be duplicated in the scene.

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | The name of the newly created node |
| scene | Scene | Yes | The scene to be imported. |
| parent | Node \| null | Yes | The parent node or null for root |

**Return value:**

| Type | Description |
| --- | --- |
| Node | The newly created node. |

## load

```TypeScript
static load(uri? : ResourceStr): Promise<Scene>
```

Create a new scene from a ResourceStr.
If uri is not provided, will return an empty scene.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | ResourceStr | No | the resource of creating a scene |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Scene&gt; | promise a scene@static |

## renderFrame

```TypeScript
renderFrame(params?: RenderParameters): boolean
```

A new frame is rendered for all active camera.

**Since:** 15

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | RenderParameters | No | Rendering parameters |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if rendering was scheduled, false otherwise |

## animations

```TypeScript
get animations(): Animation[]
```

The animations of the scene.

**Type:** Animation[]

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## environment

```TypeScript
set environment(value: Environment)
```

The environment of the scene.

**Type:** Environment

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## renderConfiguration

```TypeScript
get renderConfiguration(): RenderConfiguration
```

render configuration settings

**Type:** RenderConfiguration

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

## root

```TypeScript
get root(): Node | null
```

The root node of the scene.

**Type:** Node

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

