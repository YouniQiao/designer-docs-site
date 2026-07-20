# BoidsSimWorld (System API)

Provides playback control and component management for boids simulation.

**Since:** 26.0.0

<!--Device-unnamed-export declare class BoidsSimWorld--><!--Device-unnamed-export declare class BoidsSimWorld-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## addBoidsSimComponent

```TypeScript
addBoidsSimComponent(node: Node, param: BoidsSimParameters): void
```

Add a boids simulation component to the given node.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-addBoidsSimComponent(node: Node, param: BoidsSimParameters): void--><!--Device-BoidsSimWorld-addBoidsSimComponent(node: Node, param: BoidsSimParameters): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the node to add the component to |
| param | [BoidsSimParameters](arkts-arkgraphics3d-sceneboidssim-boidssimparameters-i-sys.md) | Yes | boids simulation parameters |

## addBoidsSimGravityComponent

```TypeScript
addBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void
```

Add a gravity field component to the given node.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-addBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void--><!--Device-BoidsSimWorld-addBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the node to add the component to |
| param | [BoidsSimGravityParameters](arkts-arkgraphics3d-sceneboidssim-boidssimgravityparameters-i-sys.md) | Yes | gravity field parameters |

## addBoidsSimRepulsionComponent

```TypeScript
addBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void
```

Add a repulsion field component to the given node.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-addBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void--><!--Device-BoidsSimWorld-addBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the node to add the component to |
| param | [BoidsSimRepulsionParameters](arkts-arkgraphics3d-sceneboidssim-boidssimrepulsionparameters-i-sys.md) | Yes | repulsion field parameters |

## getBoidsSimComponent

```TypeScript
getBoidsSimComponent(node: Node): BoidsSimParameters | null
```

Get the boids simulation component parameters from the given node.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-getBoidsSimComponent(node: Node): BoidsSimParameters | null--><!--Device-BoidsSimWorld-getBoidsSimComponent(node: Node): BoidsSimParameters | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the node to query |

**Return value:**

| Type | Description |
| --- | --- |
| [BoidsSimParameters](arkts-arkgraphics3d-sceneboidssim-boidssimparameters-i-sys.md) | boids simulation parameters, or null if not found |

## getBoidsSimGravityComponent

```TypeScript
getBoidsSimGravityComponent(node: Node): BoidsSimGravityParameters | null
```

Get the gravity field component parameters from the given node.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-getBoidsSimGravityComponent(node: Node): BoidsSimGravityParameters | null--><!--Device-BoidsSimWorld-getBoidsSimGravityComponent(node: Node): BoidsSimGravityParameters | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the node to query |

**Return value:**

| Type | Description |
| --- | --- |
| [BoidsSimGravityParameters](arkts-arkgraphics3d-sceneboidssim-boidssimgravityparameters-i-sys.md) | gravity field parameters, or null if not found |

## getBoidsSimRepulsionComponent

```TypeScript
getBoidsSimRepulsionComponent(node: Node): BoidsSimRepulsionParameters | null
```

Get the repulsion field component parameters from the given node.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-getBoidsSimRepulsionComponent(node: Node): BoidsSimRepulsionParameters | null--><!--Device-BoidsSimWorld-getBoidsSimRepulsionComponent(node: Node): BoidsSimRepulsionParameters | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the node to query |

**Return value:**

| Type | Description |
| --- | --- |
| [BoidsSimRepulsionParameters](arkts-arkgraphics3d-sceneboidssim-boidssimrepulsionparameters-i-sys.md) | repulsion field parameters, or null if not found |

## pause

```TypeScript
pause(): void
```

Pause the simulation.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-pause(): void--><!--Device-BoidsSimWorld-pause(): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## play

```TypeScript
play(): void
```

Start or resume the simulation.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-play(): void--><!--Device-BoidsSimWorld-play(): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## removeBoidsSimComponent

```TypeScript
removeBoidsSimComponent(node: Node): void
```

Remove the boids simulation component from the given node.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-removeBoidsSimComponent(node: Node): void--><!--Device-BoidsSimWorld-removeBoidsSimComponent(node: Node): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the node to remove the component from |

## removeBoidsSimGravityComponent

```TypeScript
removeBoidsSimGravityComponent(node: Node): void
```

Remove the gravity field component from the given node.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-removeBoidsSimGravityComponent(node: Node): void--><!--Device-BoidsSimWorld-removeBoidsSimGravityComponent(node: Node): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the node to remove the component from |

## removeBoidsSimRepulsionComponent

```TypeScript
removeBoidsSimRepulsionComponent(node: Node): void
```

Remove the repulsion field component from the given node.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-removeBoidsSimRepulsionComponent(node: Node): void--><!--Device-BoidsSimWorld-removeBoidsSimRepulsionComponent(node: Node): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the node to remove the component from |

## setBoidsSimComponent

```TypeScript
setBoidsSimComponent(node: Node, param: BoidsSimParameters): void
```

Update the boids simulation component parameters on the given node.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-setBoidsSimComponent(node: Node, param: BoidsSimParameters): void--><!--Device-BoidsSimWorld-setBoidsSimComponent(node: Node, param: BoidsSimParameters): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the node to update |
| param | [BoidsSimParameters](arkts-arkgraphics3d-sceneboidssim-boidssimparameters-i-sys.md) | Yes | boids simulation parameters |

## setBoidsSimGravityComponent

```TypeScript
setBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void
```

Update the gravity field component parameters on the given node.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-setBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void--><!--Device-BoidsSimWorld-setBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the node to update |
| param | [BoidsSimGravityParameters](arkts-arkgraphics3d-sceneboidssim-boidssimgravityparameters-i-sys.md) | Yes | gravity field parameters |

## setBoidsSimRepulsionComponent

```TypeScript
setBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void
```

Update the repulsion field component parameters on the given node.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-setBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void--><!--Device-BoidsSimWorld-setBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [Node](arkts-arkgraphics3d-scenenodes-node-i.md) | Yes | the node to update |
| param | [BoidsSimRepulsionParameters](arkts-arkgraphics3d-sceneboidssim-boidssimrepulsionparameters-i-sys.md) | Yes | repulsion field parameters |

## stop

```TypeScript
stop(): void
```

Stop the simulation and reset all boids to their initial state.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-stop(): void--><!--Device-BoidsSimWorld-stop(): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## isPlaying

```TypeScript
get isPlaying(): boolean
```

Whether the simulation is currently playing.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-BoidsSimWorld-get isPlaying(): boolean--><!--Device-BoidsSimWorld-get isPlaying(): boolean-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

