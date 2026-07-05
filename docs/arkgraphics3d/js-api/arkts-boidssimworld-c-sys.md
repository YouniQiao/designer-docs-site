# BoidsSimWorld

群组模拟世界接口. 提供群组模拟的播放控制和组件管理.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## addBoidsSimComponent

```TypeScript
addBoidsSimComponent(node: Node, param: BoidsSimParameters): void
```

在指定节点上添加群组模拟组件.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要添加组件的节点 |
| param | BoidsSimParameters | Yes | 群组模拟参数 |

## addBoidsSimGravityComponent

```TypeScript
addBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void
```

在指定节点上添加引力场组件.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要添加组件的节点 |
| param | BoidsSimGravityParameters | Yes | 引力场参数 |

## addBoidsSimRepulsionComponent

```TypeScript
addBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void
```

在指定节点上添加斥力场组件.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要添加组件的节点 |
| param | BoidsSimRepulsionParameters | Yes | 斥力场参数 |

## getBoidsSimComponent

```TypeScript
getBoidsSimComponent(node: Node): BoidsSimParameters | null
```

获取指定节点上的群组模拟组件参数.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要查询的节点 |

**Return value:**

| Type | Description |
| --- | --- |
| BoidsSimParameters | 群组模拟参数，如果未找到则返回null |

## getBoidsSimGravityComponent

```TypeScript
getBoidsSimGravityComponent(node: Node): BoidsSimGravityParameters | null
```

获取指定节点上的引力场组件参数.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要查询的节点 |

**Return value:**

| Type | Description |
| --- | --- |
| BoidsSimGravityParameters | 引力场参数，如果未找到则返回null |

## getBoidsSimRepulsionComponent

```TypeScript
getBoidsSimRepulsionComponent(node: Node): BoidsSimRepulsionParameters | null
```

获取指定节点上的斥力场组件参数.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要查询的节点 |

**Return value:**

| Type | Description |
| --- | --- |
| BoidsSimRepulsionParameters | 斥力场参数，如果未找到则返回null |

## pause

```TypeScript
pause(): void
```

暂停模拟.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## play

```TypeScript
play(): void
```

开始或恢复模拟.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## removeBoidsSimComponent

```TypeScript
removeBoidsSimComponent(node: Node): void
```

从指定节点移除群组模拟组件.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要移除组件的节点 |

## removeBoidsSimGravityComponent

```TypeScript
removeBoidsSimGravityComponent(node: Node): void
```

从指定节点移除引力场组件.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要移除组件的节点 |

## removeBoidsSimRepulsionComponent

```TypeScript
removeBoidsSimRepulsionComponent(node: Node): void
```

从指定节点移除斥力场组件.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要移除组件的节点 |

## setBoidsSimComponent

```TypeScript
setBoidsSimComponent(node: Node, param: BoidsSimParameters): void
```

更新指定节点上的群组模拟组件参数.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要更新的节点 |
| param | BoidsSimParameters | Yes | 群组模拟参数 |

## setBoidsSimGravityComponent

```TypeScript
setBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void
```

更新指定节点上的引力场组件参数.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要更新的节点 |
| param | BoidsSimGravityParameters | Yes | 引力场参数 |

## setBoidsSimRepulsionComponent

```TypeScript
setBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void
```

更新指定节点上的斥力场组件参数.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | Node | Yes | 要更新的节点 |
| param | BoidsSimRepulsionParameters | Yes | 斥力场参数 |

## stop

```TypeScript
stop(): void
```

停止模拟并重置所有boid到初始状态.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## isPlaying

```TypeScript
get isPlaying(): boolean
```

模拟是否正在播放.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

