# Scene

定义3D场景.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## cloneNode

```TypeScript
cloneNode(node: Node, parent: Node, name: string): Node | null
```

克隆以输入节点为根节点的节点或子树

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要克隆的输入节点 |
| parent | Node | Yes | 克隆节点将被设置为其子节点的父节点 |
| name | string | Yes | 克隆节点的名称 |

**Return value:**

| Type | Description |
| --- | --- |
| Node | 克隆结果，如果克隆失败则返回null. |

## createComponent

```TypeScript
createComponent(node: Node, name: string): Promise<SceneComponent>
```

创建新组件.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 组件附加到的节点 |
| name | string | Yes | 要加载的组件名称. 有效名称由各插件定义. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SceneComponent> | - 新添加的组件. |

## destroy

```TypeScript
destroy(): void
```

释放所有原生场景资源. 所有TS引用将变为undefined.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## getComponent

```TypeScript
getComponent(node: Node, name: string): SceneComponent | null
```

通过名称获取组件.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 组件附加到的节点. |
| name | string | Yes | 组件名称 |

**Return value:**

| Type | Description |
| --- | --- |
| SceneComponent |  |

## getDefaultRenderContext

```TypeScript
static getDefaultRenderContext(): RenderContext | null
```

获取默认渲染上下文

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| RenderContext | -- 默认RenderContext实例  @static |

## getNodeByPath

```TypeScript
getNodeByPath(path: string, type?: NodeType): Node | null
```

通过路径获取节点.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 节点路径 |
| type | NodeType | No | 验证节点类型，如果不匹配则返回null |

**Return value:**

| Type | Description |
| --- | --- |
| Node | 如果通过路径找到节点 |

## getResourceFactory

```TypeScript
getResourceFactory(): SceneResourceFactory
```

获取资源工厂.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| SceneResourceFactory | 如果通过路径找到节点 |

## importNode

```TypeScript
importNode(name: string, node: Node, parent: Node | null): Node
```

将节点导入场景. 原始节点可能来自另一个场景. 节点将被克隆，导入后对旧节点的修改将不可见.

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 新创建节点的名称. |
| node | Node | Yes | 要导入的节点. |
| parent | Node \| null | Yes | 父节点，根节点为null |

**Return value:**

| Type | Description |
| --- | --- |
| Node | 新创建的节点. |

## importScene

```TypeScript
importScene(name: string, scene: Scene, parent: Node | null): Node
```

将场景作为节点导入场景. 节点层级将出现在父节点下. 场景中的所有动画将被复制.

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 新创建节点的名称 |
| scene | Scene | Yes | The scene to be imported. |
| parent | Node \| null | Yes | 父节点，根节点为null |

**Return value:**

| Type | Description |
| --- | --- |
| Node | 新创建的节点. |

## load

```TypeScript
static load(uri? : ResourceStr): Promise<Scene>
```

从ResourceStr创建新场景. 如果未提供uri，将返回空场景.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | ResourceStr | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Scene> | 返回创建的场景  @static |

## load

```TypeScript
static load(uri: ResourceStr, param: SceneLoadParams):Promise<Scene>
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

## renderFrame

```TypeScript
renderFrame(params?: RenderParameters): boolean
```

为所有活动相机渲染新帧.

**Since:** 15

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | RenderParameters | No | 渲染参数 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果渲染被调度则返回true，否则返回false |

## environment

```TypeScript
get environment(): Environment
```

场景的环境.

**Type:** Environment

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
set environment(value: Environment)
```

场景的环境.

**Type:** Environment

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## root

```TypeScript
get root(): Node | null
```

场景的根节点.

**Type:** Node

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## animations

```TypeScript
get animations(): Animation[]
```

场景的动画.

**Type:** Animation[]

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## renderConfiguration

```TypeScript
get renderConfiguration(): RenderConfiguration
```

渲染配置设置

**Type:** RenderConfiguration

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

