# Node

定义Node接口.

**Inheritance:** Nodeextends: SceneResource.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## getNodeByPath

```TypeScript
getNodeByPath(path: string): Node | null
```

通过路径获取节点.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 要查询的节点路径 |

**Return value:**

| Type | Description |
| --- | --- |
| Node |  |

## parent

```TypeScript
readonly parent: Node | null
```

节点的父节点.

**Type:** Node | null

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## path

```TypeScript
readonly path: string
```

节点路径.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## visible

```TypeScript
visible: boolean
```

节点可见性标志.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## children

```TypeScript
readonly children: Container<Node>
```

节点的子节点.

**Type:** Container<Node>

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## rotation

```TypeScript
rotation: Quaternion
```

节点旋转.

**Type:** Quaternion

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## scale

```TypeScript
scale: Scale3
```

节点缩放.

**Type:** Scale3

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## layerMask

```TypeScript
readonly layerMask: LayerMask
```

节点图层掩码.

**Type:** LayerMask

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## position

```TypeScript
position: Position3
```

节点位置, 单位为世界坐标系下的场景单位（例如cm、m、km等）.

**Type:** Position3

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## nodeType

```TypeScript
readonly nodeType: NodeType
```

节点类型.

**Type:** NodeType

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

