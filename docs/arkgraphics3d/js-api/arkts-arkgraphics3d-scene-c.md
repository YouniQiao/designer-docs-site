# Scene

Defines the 3d scene.

**Since:** 12

<!--Device-unnamed-export declare class Scene--><!--Device-unnamed-export declare class Scene-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## cloneNode

```TypeScript
cloneNode(node: Node, parent: Node, name: string): Node | null
```

clone a node or a subtree whose root node is the input node

**Since:** 23

<!--Device-Scene-cloneNode(node: Node, parent: Node, name: string): Node | null--><!--Device-Scene-cloneNode(node: Node, parent: Node, name: string): Node | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | input node to be cloned |
| parent | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the parent node which the cloned node will be set as its child node |
| name | string | Yes | the name of the cloned node |

**Return value:**

| Type | Description |
| --- | --- |
| [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | the clone result, return null if clone is failed. |

## createComponent

```TypeScript
createComponent(node: Node, name: string): Promise<SceneComponent>
```

Create a new component.

**Since:** 20

<!--Device-Scene-createComponent(node: Node, name: string): Promise<SceneComponent>--><!--Device-Scene-createComponent(node: Node, name: string): Promise<SceneComponent>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | The node the component is attached to |
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

<!--Device-Scene-destroy(): void--><!--Device-Scene-destroy(): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## getComponent

```TypeScript
getComponent(node: Node, name: string): SceneComponent | null
```

Get component by name.

**Since:** 20

<!--Device-Scene-getComponent(node: Node, name: string): SceneComponent | null--><!--Device-Scene-getComponent(node: Node, name: string): SceneComponent | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | The node component is attached to. |
| name | string | Yes | name of the component |

**Return value:**

| Type | Description |
| --- | --- |
| [SceneComponent](arkts-arkgraphics3d-scene-scenecomponent-i.md) | @syscap SystemCapability.ArkUi.Graphics3D |

## getDefaultRenderContext

```TypeScript
static getDefaultRenderContext(): RenderContext | null
```

Get default render context

**Since:** 20

<!--Device-Scene-static getDefaultRenderContext(): RenderContext | null--><!--Device-Scene-static getDefaultRenderContext(): RenderContext | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| [RenderContext](arkts-arkgraphics3d-scene-rendercontext-i.md) | -- The default RenderContext instance@static |

## getNodeByPath

```TypeScript
getNodeByPath(path: string, type?: NodeType): Node | null
```

Get a node by path.

**Since:** 12

<!--Device-Scene-getNodeByPath(path: string, type?: NodeType): Node | null--><!--Device-Scene-getNodeByPath(path: string, type?: NodeType): Node | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | the path of the node |
| type | [NodeType](arkts-arkgraphics3d-scenenodes-nodetype-e.md) | No | verify the type of node, if it does not match, return null |

**Return value:**

| Type | Description |
| --- | --- |
| [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | if the node is found by it's path |

## getResourceFactory

```TypeScript
getResourceFactory(): SceneResourceFactory
```

Get resource factory.

**Since:** 12

<!--Device-Scene-getResourceFactory(): SceneResourceFactory--><!--Device-Scene-getResourceFactory(): SceneResourceFactory-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| [SceneResourceFactory](arkts-arkgraphics3d-scene-sceneresourcefactory-i.md) | if the node is found by it's path |

## importNode

```TypeScript
importNode(name: string, node: Node, parent: Node | null): Node
```

Import node into the scene. The original node may come from separate Scene.The node will be cloned and any modifications to the old node will not be visible after the import.

**Since:** 18

<!--Device-Scene-importNode(name: string, node: Node, parent: Node | null): Node--><!--Device-Scene-importNode(name: string, node: Node, parent: Node | null): Node-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | The name of the newly created node. |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | The node to be imported. |
| parent | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) \| null | Yes | The parent node or null for root |

**Return value:**

| Type | Description |
| --- | --- |
| [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | The newly created node. |

## importScene

```TypeScript
importScene(name: string, scene: Scene, parent: Node | null): Node
```

Import scene into the scene as a node. The node hierarchy will appear under the parent node.All animations from the scene will be duplicated in the scene.

**Since:** 18

<!--Device-Scene-importScene(name: string, scene: Scene, parent: Node | null): Node--><!--Device-Scene-importScene(name: string, scene: Scene, parent: Node | null): Node-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | The name of the newly created node |
| scene | [Scene](arkts-arkgraphics3d-scene-c.md) | Yes | The scene to be imported. |
| parent | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) \| null | Yes | The parent node or null for root |

**Return value:**

| Type | Description |
| --- | --- |
| [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | The newly created node. |

## load

```TypeScript
static load(uri? : ResourceStr): Promise<Scene>
```

Create a new scene from a ResourceStr.If uri is not provided, will return an empty scene.

**Since:** 12

<!--Device-Scene-static load(uri? : ResourceStr): Promise<Scene>--><!--Device-Scene-static load(uri? : ResourceStr): Promise<Scene>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | [ResourceStr](../../apis-arkui/arkts-apis/arkts-arkui-resourcestr-t.md) | No | the resource of creating a scene |

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

<!--Device-Scene-renderFrame(params?: RenderParameters): boolean--><!--Device-Scene-renderFrame(params?: RenderParameters): boolean-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [RenderParameters](arkts-arkgraphics3d-scene-renderparameters-i.md) | No | Rendering parameters |

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

<!--Device-Scene-get animations(): Animation[]--><!--Device-Scene-get animations(): Animation[]-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## environment

```TypeScript
set environment(value: Environment)
```

The environment of the scene.

**Type:** Environment

**Since:** 12

<!--Device-Scene-set environment(value: Environment)--><!--Device-Scene-set environment(value: Environment)-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## renderConfiguration

```TypeScript
get renderConfiguration(): RenderConfiguration
```

render configuration settings

**Type:** RenderConfiguration

**Since:** 23

<!--Device-Scene-get renderConfiguration(): RenderConfiguration--><!--Device-Scene-get renderConfiguration(): RenderConfiguration-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## root

```TypeScript
get root(): Node | null
```

The root node of the scene.

**Type:** Node

**Since:** 12

<!--Device-Scene-get root(): Node | null--><!--Device-Scene-get root(): Node | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

