# Node

Defines Node interface.

**Inheritance/Implementation:** Node extends [SceneResource](arkts-arkgraphics3d-sceneresource-i.md#sceneresource)

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## getNodeByPath

```TypeScript
getNodeByPath(path: string): Node | null
```

Get node by path.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | the path of the node queried |

**Return value:**

| Type | Description |
| --- | --- |
| Node | @syscap SystemCapability.ArkUi.Graphics3D |

## children

```TypeScript
readonly children: Container<Node>
```

Children of the node.

**Type:** Container<Node>

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## layerMask

```TypeScript
readonly layerMask: LayerMask
```

Layer mask of the node.

**Type:** LayerMask

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## nodeType

```TypeScript
readonly nodeType: NodeType
```

Type of the node.

**Type:** NodeType

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## parent

```TypeScript
readonly parent: Node | null
```

Parent of the node.

**Type:** Node | null

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## path

```TypeScript
readonly path: string
```

Path of the node.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## position

```TypeScript
position: Position3
```

position of the node, the unit is the scene unit in the world coordinate system (e.g., cm, m, km).

**Type:** Position3

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## rotation

```TypeScript
rotation: Quaternion
```

Rotation of the node.

**Type:** Quaternion

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## scale

```TypeScript
scale: Scale3
```

Scale of the node.

**Type:** Scale3

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## visible

```TypeScript
visible: boolean
```

Visibility flag for the node.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

