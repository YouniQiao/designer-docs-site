# FrameNode

Defines FrameNode.

**Since:** 11

<!--Device-unnamed-export class FrameNode--><!--Device-unnamed-export class FrameNode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## addComponentContent

```TypeScript
addComponentContent<T>(content: ComponentContent<T> | ReactiveComponentContent<T>): void
```

Adds component content. The current node must be modifiable, which means the return value of [isModifiable](arkts-arkui-framenode-c.md#ismodifiable-1) must be **true**. If the node is not modifiable, an exception is thrown.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-addComponentContent<T>(content: ComponentContent<T> | ReactiveComponentContent<T>): void--><!--Device-FrameNode-addComponentContent<T>(content: ComponentContent<T> | ReactiveComponentContent<T>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | [ComponentContent](../arkts-components/arkts-arkui-componentcontent-t.md)<T> \| ReactiveComponentContent<T> | Yes | Component content to display on the FrameNode.<br>**Since:** 22 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. |

## addSupportedUIStates

```TypeScript
addSupportedUIStates(uiStates: number, statesChangeHandler: UIStatesChangeHandler, excludeInner?: boolean): void
```

Adds the polymorphic style states supported by the component.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FrameNode-addSupportedUIStates(uiStates: number, statesChangeHandler: UIStatesChangeHandler, excludeInner?: boolean): void--><!--Device-FrameNode-addSupportedUIStates(uiStates: number, statesChangeHandler: UIStatesChangeHandler, excludeInner?: boolean): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiStates | number | Yes | UI states of the target node to be processed.<br>Multiple states can be specified simultaneously using bitwise OR operations, for example,**targetUIStates = UIState.PRESSED  \|  UIState.FOCUSED**. |
| statesChangeHandler | [UIStatesChangeHandler](arkts-arkui-uistateschangehandler-t.md) | Yes | Callback invoked when the state changes. |
| excludeInner | boolean | No | Whether to disable the default state style processing. Default value:**false**.<br> **true**: Disable default state style processing. **false**: Enable default state style processing. |

## adoptChild

```TypeScript
adoptChild(child: FrameNode): void
```

Adopts the target node as an affiliated node. The adopted node must not have an existing parent. This API is not used to add a node as a child node. Instead, it only allows the node to receive lifecycle callbacks of the corresponding child node.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-FrameNode-adoptChild(child: FrameNode): void--><!--Device-FrameNode-adoptChild(child: FrameNode): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| child | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Node to be adopted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The current FrameNode is not modifiable. |
| [100025](../errorcode-node.md#100025-invalid-parameter-value) | The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: "The parameter 'child' is invalid: it cannot be disposed." |
| [100026](../errorcode-node.md#100026-the-instance-object-used-to-call-the-api-has-been-unbound-from-the-backend-entity-node) | The current FrameNode has been disposed. |

## appendChild

```TypeScript
appendChild(node: FrameNode): void
```

Appends a child node to the end of this FrameNode. If this FrameNode is not modifiable, an exception is thrown.When **appendChild** is called, [typeNode](arkts-arkui-typenode-n.md) validates the type or number of child nodes. If the validation fails, an exception is thrown. For specific limitations, see [typeNode](arkts-arkui-typenode-n.md).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-appendChild(node: FrameNode): void--><!--Device-FrameNode-appendChild(node: FrameNode): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Child node to append.<br> The target node must not be a declaratively created node,that is, a FrameNode that is not modifiable. Only declarative nodes obtained from a BuilderNode can be used as child nodes. If the child node does not meet the specifications, an exception is thrown.<br> The FrameNode cannot have a parent node. Otherwise, an exception is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. |
| [100025](../errorcode-node.md#100025-invalid-parameter-value) | The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: "The parameter 'node' is invalid: it cannot be adopted."<br>**Applicable version:** 22 and later |

## cancelAnimations

```TypeScript
cancelAnimations(properties: AnimationPropertyType[]): boolean
```

Cancels all animations for specified properties on the FrameNode. This API executes synchronously in the node's owning thread and blocks until cancellation completes. Upon successful cancellation, the node's property values revert to their current display state at the time of cancellation.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FrameNode-cancelAnimations(properties: AnimationPropertyType[]): boolean--><!--Device-FrameNode-cancelAnimations(properties: AnimationPropertyType[]): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| properties | [AnimationPropertyType](arkts-arkui-enums-animationpropertytype-e.md)[] | Yes | Array of animation properties to cancel. You can simultaneously cancel the animations of multiple properties on the node. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Animation cancellation status.<br>**true**: successful.<br>**false**: failed.<br>The possible causes are as follows:<br>Additional notes:<br> 1. The node has been released (the [dispose](arkts-arkui-framenode-c.md#dispose-1) API has been called).<br> 2. The node is a built-in component proxy (where [isModifiable](arkts-arkui-framenode-c.md#ismodifiable-1) returns **false**).<br> 3. The property array contains invalid enumerated values.<br> 4. System error. Example: system IPC communication error.<br>Additional notes:<br> 1. This API returns **true** for properties without active animations, if there are no system errors.<br> 2. Valid parameters with normal node returning **false** indicate a system exception. In this case, you can retry cancellation later or use [createAnimation](arkts-arkui-framenode-c.md#createanimation-1) with a zero duration as an alternative. |

## clearChildren

```TypeScript
clearChildren(): void
```

Clears all child nodes of this FrameNode. If this FrameNode is not modifiable, an exception is thrown.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-clearChildren(): void--><!--Device-FrameNode-clearChildren(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. |

## constructor

```TypeScript
constructor(uiContext: UIContext)
```

A constructor used to create a FrameNode.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-constructor(uiContext: UIContext)--><!--Device-FrameNode-constructor(uiContext: UIContext)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | Yes | UI context for node creation. |

## convertPosition

```TypeScript
convertPosition(position: Position, targetNode: FrameNode): Position
```

Converts a coordinate point from this node's coordinate system to the target node's coordinate system.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-FrameNode-convertPosition(position: Position, targetNode: FrameNode): Position--><!--Device-FrameNode-convertPosition(position: Position, targetNode: FrameNode): Position-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | [Position](arkts-arkui-units-position-i.md) | Yes | Coordinates relative to the current node's coordinate system. |
| targetNode | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Target node for coordinate transformation. |

**Return value:**

| Type | Description |
| --- | --- |
| [Position](arkts-arkui-units-position-i.md) | Converted coordinates relative to the target node's local coordinate system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100024](../errorcode-node.md#100024-no-common-ancestor-node-between-nodes) | The current FrameNode and the target FrameNode do not have a common ancestor node. |
| [100025](../errorcode-node.md#100025-invalid-parameter-value) | The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: "The parameter 'targetNode' is invalid: it cannot be disposed." |

## convertPositionFromWindow

```TypeScript
convertPositionFromWindow(positionByWindow: Position): Position
```

Converts the coordinates of a point from the coordinate system of the window where the current node is located to the coordinate system of the current node.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-FrameNode-convertPositionFromWindow(positionByWindow: Position): Position--><!--Device-FrameNode-convertPositionFromWindow(positionByWindow: Position): Position-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| positionByWindow | [Position](arkts-arkui-units-position-i.md) | Yes | Relative coordinates in the coordinate system of the window where the current node is located. |

**Return value:**

| Type | Description |
| --- | --- |
| [Position](arkts-arkui-units-position-i.md) | Converted coordinates in the coordinate system of the current node. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100026](../errorcode-node.md#100026-the-instance-object-used-to-call-the-api-has-been-unbound-from-the-backend-entity-node) | The current FrameNode has been disposed. |
| [100028](../errorcode-node.md#100028-current-node-is-not-on-the-main-node-tree) | The current FrameNode is not on the main tree. |

## convertPositionToWindow

```TypeScript
convertPositionToWindow(positionByLocal: Position): Position
```

Converts the coordinates of a point from the coordinate system of the current node to the coordinate system of the window where the current node is located.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-FrameNode-convertPositionToWindow(positionByLocal: Position): Position--><!--Device-FrameNode-convertPositionToWindow(positionByLocal: Position): Position-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| positionByLocal | [Position](arkts-arkui-units-position-i.md) | Yes | Coordinates relative to the current node's coordinate system. |

**Return value:**

| Type | Description |
| --- | --- |
| [Position](arkts-arkui-units-position-i.md) | Converted coordinates in the coordinate system of the window where the current node is located. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100026](../errorcode-node.md#100026-the-instance-object-used-to-call-the-api-has-been-unbound-from-the-backend-entity-node) | The current FrameNode has been disposed. |
| [100028](../errorcode-node.md#100028-current-node-is-not-on-the-main-node-tree) | The current FrameNode is not on the main tree. |

## createAnimation

```TypeScript
createAnimation(property: AnimationPropertyType, startValue: Optional<number[]>, endValue: number[], param: AnimateParam): boolean
```

Creates a property animation for the FrameNode.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FrameNode-createAnimation(property: AnimationPropertyType, startValue: Optional<number[]>, endValue: number[], param: AnimateParam): boolean--><!--Device-FrameNode-createAnimation(property: AnimationPropertyType, startValue: Optional<number[]>, endValue: number[], param: AnimateParam): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | [AnimationPropertyType](arkts-arkui-enums-animationpropertytype-e.md) | Yes | Animation property type. |
| startValue | [Optional](../arkts-components/arkts-arkui-optional-t.md)<number[]> | Yes | Animation start value. The value can be **undefined** or an array. If the value is **undefined**, the animation uses the last set value of the property on the node as the starting value. If the value is an array, the length must match the property type requirements:<br>-**AnimationPropertyType.ROTATION**: [rotationX, rotationY, rotationZ] in degrees (°).<br>-**AnimationPropertyType.TRANSLATION**: [translateX, translateY] in px.<br>- **AnimationPropertyType.SCALE**:[scaleX, scaleY](scale factors).<br>- **AnimationPropertyType.OPACITY**: [opacity](value range: [0, 1]).<br>For the first animation of a property, **startValue** must be explicitly specified. For subsequent animations,it is recommended that you either omit **startValue** or set it to the previous animation's end value to avoid abrupt changes. |
| endValue | number[] | Yes | Animation end value. The value is an array. The array length must match the property type requirements:<br>- **AnimationPropertyType.ROTATION**: [rotationX, rotationY, rotationZ] in degrees (°).<br>- **AnimationPropertyType.TRANSLATION**: [translateX, translateY] in px.<br>-**AnimationPropertyType.SCALE**: [scaleX, scaleY](scale factors).<br>- **AnimationPropertyType.OPACITY**:[opacity](value range: [0, 1]). |
| param | [AnimateParam](../arkts-components/arkts-arkui-common-animateparam-i.md) | Yes | Animation parameters, including the duration, animation curve, and end callback. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the animation is created successfully.<br>Returns **true** if the animation is created successfully. If an end callback is specified in the animation parameters, it will be invoked upon animation completion.<br>Returns **false** if the animation creation fails. The end callback will not be invoked even if specified.<br>Possible failure reasons:<br>Additional notes:<br> 1. The node has been released (the [dispose](arkts-arkui-framenode-c.md#dispose-1) API has been called).<br> 2. The node is a built-in component proxy (where [isModifiable](arkts-arkui-framenode-c.md#ismodifiable-1) returns **false**).<br> 3. There is an invalid property enumeration or length mismatch between the property type and **startValue** or **endValue** arrays.<br> 4. No start value is available (**startValue** is **undefined** for the first animation of a property) or the start and end values are identical. |

## createFrameNodes

```TypeScript
static createFrameNodes(uiContext: UIContext, count: number): FrameNode[]
```

Creates a specified number of FrameNodes in batches and returns a FrameNode array.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-FrameNode-static createFrameNodes(uiContext: UIContext, count: number): FrameNode[]--><!--Device-FrameNode-static createFrameNodes(uiContext: UIContext, count: number): FrameNode[]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | Yes | UI context for node creation. |
| count | number | Yes | Number of nodes to be created. The value is an integer greater than 0. If the value is less than or equal to 0 or is not an integer, an empty array is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| [FrameNode](arkts-arkui-framenode-c.md)[] | Array of created FrameNodes. |

## dispose

```TypeScript
dispose(): void
```

Immediately releases the reference to the underlying FrameNode entity.

> **NOTE**  
>  
> - After the **dispose** API is called, the FrameNode object no longer corresponds to any entity FrameNode. In  
> this case, attempts to call certain query APIs, such as [getMeasuredSize](arkts-arkui-framenode-c.md#getmeasuredsize-1) and  
> [getLayoutPosition](arkts-arkui-framenode-c.md#getlayoutposition-1), will result in a JS crash in the application.  
>  
> - To check whether the current FrameNode object corresponds to an entity FrameNode, you can use  
> [getUniqueId](arkts-arkui-framenode-c.md#getuniqueid-1) API. A **UniqueId** value greater than 0 indicates that the object is  
> associated with an entity FrameNode.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-dispose(): void--><!--Device-FrameNode-dispose(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## disposeTree

```TypeScript
disposeTree(): void
```

Traverses down the tree and recursively releases the subtree with this node as the root.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-disposeTree(): void--><!--Device-FrameNode-disposeTree(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getChild

```TypeScript
getChild(index: number): FrameNode | null
```

Obtains the child node in the specified position of this node.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getChild(index: number): FrameNode | null--><!--Device-FrameNode-getChild(index: number): FrameNode | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the child node to obtain.<br>The value range of index is [0, +∞). If the current node has n child nodes, the valid value range of index is [0, n-1]. |

**Return value:**

| Type | Description |
| --- | --- |
| [FrameNode](arkts-arkui-framenode-c.md) | Child node obtained. If the FrameNode does not contain the specified child node, null is returned. |

## getChild

```TypeScript
getChild(index: number, expandMode?: ExpandMode): FrameNode | null
```

Obtains a child node at a specified index from this FrameNode, with optional support for specifying the expansion mode of the child node.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-FrameNode-getChild(index: number, expandMode?: ExpandMode): FrameNode | null--><!--Device-FrameNode-getChild(index: number, expandMode?: ExpandMode): FrameNode | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the child node to obtain.<br>The value range of index is [0, +∞). If the current node has n child nodes, the valid value range of index is [0, n-1]. |
| expandMode | [ExpandMode](arkts-arkui-framenode-expandmode-e.md) | No | Expansion mode of the child node.<br>Default value: **ExpandMode.EXPAND**. |

**Return value:**

| Type | Description |
| --- | --- |
| [FrameNode](arkts-arkui-framenode-c.md) | Child node obtained. If the FrameNode does not contain the specified child node, null is returned. |

## getChildrenCount

```TypeScript
getChildrenCount(): number
```

Obtains the number of child nodes of this FrameNode.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getChildrenCount(): number--><!--Device-FrameNode-getChildrenCount(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of child nodes of the current FrameNode. |

## getChildrenCount

```TypeScript
getChildrenCount(countMode?: ChildrenCountMode): number
```

Get the children count of the current FrameNode with specified count mode.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-FrameNode-getChildrenCount(countMode?: ChildrenCountMode): int--><!--Device-FrameNode-getChildrenCount(countMode?: ChildrenCountMode): int-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| countMode | [ChildrenCountMode](arkts-arkui-framenode-childrencountmode-e.md) | No | The children count mode. Default value is ChildrenCountMode.ALL_EXPAND. |

**Return value:**

| Type | Description |
| --- | --- |
| number | - Returns the number of children of the current FrameNode based on the count mode. |

## getCrossLanguageOptions

```TypeScript
getCrossLanguageOptions(): CrossLanguageOptions
```

Obtains the cross-language access options for this FrameNode. For example, for nodes created using ArkTS, this API can obtain whether non-ArkTS languages are allowed to set the properties of these nodes and perform operations on the cross-language component tree. Since API version 26.0.0, this API can obtain whether non-ArkTS languages are allowed to perform operations on the component tree.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-FrameNode-getCrossLanguageOptions(): CrossLanguageOptions--><!--Device-FrameNode-getCrossLanguageOptions(): CrossLanguageOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [CrossLanguageOptions](arkts-arkui-framenode-crosslanguageoptions-i.md) | Cross-ArkTS language access options. |

## getCustomProperty

```TypeScript
getCustomProperty(name: string): Object | undefined
```

Obtains the component's custom property by its name.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getCustomProperty(name: string): Object | undefined--><!--Device-FrameNode-getCustomProperty(name: string): Object | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the custom property. |

**Return value:**

| Type | Description |
| --- | --- |
| [Object](../../apis-na/arkts-apis/arkts-na-lib-es5-object-i.md) | Value of the custom property. |

## getFirstChild

```TypeScript
getFirstChild(): FrameNode | null
```

Obtains the first child node of this FrameNode.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getFirstChild(): FrameNode | null--><!--Device-FrameNode-getFirstChild(): FrameNode | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [FrameNode](arkts-arkui-framenode-c.md) | First child node. If the FrameNode does not contain any child node, null is returned. |

## getFirstChildIndexWithoutExpand

```TypeScript
getFirstChildIndexWithoutExpand(): number
```

Obtains the sequence number of the first child node of this node that is in the main node tree. The child node sequence numbers are calculated based on all child nodes.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-FrameNode-getFirstChildIndexWithoutExpand(): number--><!--Device-FrameNode-getFirstChildIndexWithoutExpand(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Sequence number of the first child node of this node that is in the main node tree. |

## getFrameNodeById

```TypeScript
getFrameNodeById(id: string): FrameNode | null
```

Searches for all child nodes layer by layer from the current node (which is used as the root node) and returns the first node that matches the specified ID. The search sequence is as follows: Search for direct child nodes first,then level-2 child nodes, and so on. The search stops as soon as a matching node is found.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-FrameNode-getFrameNodeById(id: string): FrameNode | null--><!--Device-FrameNode-getFrameNodeById(id: string): FrameNode | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | ID of the child node to be queried, which is the same as the [component ID](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md). |

**Return value:**

| Type | Description |
| --- | --- |
| [FrameNode](arkts-arkui-framenode-c.md) | First node that matches the specified ID, which is returned by searching for all child nodes layer by layer from the current node (which is used as the root node). If no child node of the current node matches the specified ID, a null is returned. |

## getFrameNodeByUniqueId

```TypeScript
getFrameNodeByUniqueId(id: number): FrameNode | null
```

Searches for and returns the child node with the specified unique ID (which can be obtained using the [getUniqueId](arkts-arkui-framenode-c.md#getuniqueid-1) API) under the current node (which is used as the root node).

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-FrameNode-getFrameNodeByUniqueId(id: int): FrameNode | null--><!--Device-FrameNode-getFrameNodeByUniqueId(id: int): FrameNode | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Unique ID of the child node to be queried.<br>The value should be an integer. |

**Return value:**

| Type | Description |
| --- | --- |
| [FrameNode](arkts-arkui-framenode-c.md) | Child node with the unique ID, which is found from the current node (which is used as the root node). If the child node with the unique ID cannot be found under the current node, a null is returned. |

## getGlobalPositionOnDisplay

```TypeScript
getGlobalPositionOnDisplay(): Position
```

Obtains the position offset of this FrameNode relative to the global display, in vp.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FrameNode-getGlobalPositionOnDisplay(): Position--><!--Device-FrameNode-getGlobalPositionOnDisplay(): Position-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Position](arkts-arkui-units-position-i.md) | Position offset of the node relative to the global display, in vp. |

## getId

```TypeScript
getId(): string
```

Obtains the node ID set by the user, which is the same as the value of the [component ID](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getId(): string--><!--Device-FrameNode-getId(): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | Node ID set by the user, which is the same as the value of the [component ID](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md). |

## getInspectorInfo

```TypeScript
getInspectorInfo(): Object
```

Obtains the structure information of the node, which is consistent with what is found in DevEco Studio's built-in <!--RP1-->ArkUI Inspector <!--RP1End-->tool.

> **NOTE**  
>  
> The **getInspectorInfo** API is designed for debugging purposes to obtain information about all nodes. Frequent  
> calls to this API may cause performance degradation.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getInspectorInfo(): Object--><!--Device-FrameNode-getInspectorInfo(): Object-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Object](../../apis-na/arkts-apis/arkts-na-lib-es5-object-i.md) | Structure information of the node. |

## getInteractionEventBindingInfo

```TypeScript
getInteractionEventBindingInfo(eventType: EventQueryType): InteractionEventBindingInfo | undefined
```

Obtains the event binding information for the target node. Returns **undefined** if the specified interaction event type is not bound to the component node.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-FrameNode-getInteractionEventBindingInfo(eventType: EventQueryType): InteractionEventBindingInfo | undefined--><!--Device-FrameNode-getInteractionEventBindingInfo(eventType: EventQueryType): InteractionEventBindingInfo | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | [EventQueryType](arkts-arkui-enums-eventquerytype-e.md) | Yes | Type of the interaction event to query. |

**Return value:**

| Type | Description |
| --- | --- |
| [InteractionEventBindingInfo](arkts-arkui-framenode-interactioneventbindinginfo-i.md) | Returns an **InteractionEventBindingInfo** object containing event binding details if the interaction event is bound to the current node; returns **undefined** otherwise. |

## getLastChildIndexWithoutExpand

```TypeScript
getLastChildIndexWithoutExpand(): number
```

Obtains the sequence number of the last child node of this node that is in the main node tree. The child node sequence numbers are calculated based on all child nodes.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-FrameNode-getLastChildIndexWithoutExpand(): number--><!--Device-FrameNode-getLastChildIndexWithoutExpand(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Sequence number of the last child node of this node that is in the main node tree. |

## getLayoutPosition

```TypeScript
getLayoutPosition(): Position
```

Obtains the position offset of this FrameNode relative to the parent component after layout, in px. The offset is the result of the parent component's layout on this node; therefore, the **offset** attribute that takes effect after layout and the **position** attribute that does not participate in layout do not affect this offset value.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getLayoutPosition(): Position--><!--Device-FrameNode-getLayoutPosition(): Position-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Position](arkts-arkui-units-position-i.md) | Position offset of the current FrameNode relative to the parent component after layout, in px. |

## getMeasuredSize

```TypeScript
getMeasuredSize(): Size
```

Obtains the measured size of this FrameNode, in px.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getMeasuredSize(): Size--><!--Device-FrameNode-getMeasuredSize(): Size-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Size](../arkts-components/arkts-arkui-canvas-size-i.md) | Measured size of the node, in px. |

## getNextSibling

```TypeScript
getNextSibling(): FrameNode | null
```

Obtains the next sibling node of this FrameNode.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getNextSibling(): FrameNode | null--><!--Device-FrameNode-getNextSibling(): FrameNode | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [FrameNode](arkts-arkui-framenode-c.md) | Next sibling node of the current FrameNode. If the FrameNode does not have the next sibling node, null is returned. |

## getNodePropertyValue

```TypeScript
getNodePropertyValue(property: AnimationPropertyType): number[]
```

Obtains the property value of the FrameNode.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FrameNode-getNodePropertyValue(property: AnimationPropertyType): number[]--><!--Device-FrameNode-getNodePropertyValue(property: AnimationPropertyType): number[]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | [AnimationPropertyType](arkts-arkui-enums-animationpropertytype-e.md) | Yes | Animation property type. |

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Current property value from the render node. The array length corresponds to the property type.<br>The return value format varies by property:<br>- An empty array (length 0) is returned if the node has been disposed, the [dispose](arkts-arkui-framenode-c.md#dispose-1)API has been called, or the property enumeration is invalid.<br>- **AnimationPropertyType.ROTATION**: [rotationX, rotationY, rotationZ] in degrees (°).<br>- **AnimationPropertyType.TRANSLATION**: [translateX, translateY] in px.<br>- **AnimationPropertyType.SCALE**: [scaleX, scaleY](scale factors).<br>- **AnimationPropertyType.OPACITY**: [opacity].<br>1. After animation cancellation, the node's property value is restored to the display value at the time of cancellation, which can be obtained using this API.<br>2. During animation playback, this API returns the final target value rather than real-time interpolated values.<br> |

## getNodeType

```TypeScript
getNodeType(): string
```

Obtains the type of the node. For built-in components, the node type corresponds to the component name. For example, the node type of the [Button](../arkts-components/arkts-arkui-button.md) component is **Button**. For custom components that implement rendering, the node type is **__Common__**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getNodeType(): string--><!--Device-FrameNode-getNodeType(): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | Type of the node. |

## getOpacity

```TypeScript
getOpacity(): number
```

Obtains the opacity of the node. The minimum value is 0, and the maximum value is 1.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getOpacity(): number--><!--Device-FrameNode-getOpacity(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Opacity of the node. Value range: [0, 1]. A larger value indicates lower opacity. |

## getParent

```TypeScript
getParent(): FrameNode | null
```

Obtains the parent node of this FrameNode.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getParent(): FrameNode | null--><!--Device-FrameNode-getParent(): FrameNode | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [FrameNode](arkts-arkui-framenode-c.md) | Parent node of the current FrameNode. If the FrameNode does not contain a parent node, null is returned. |

## getPositionToParent

```TypeScript
getPositionToParent(): Position
```

Obtains the position offset of this FrameNode relative to the parent component, in vp.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getPositionToParent(): Position--><!--Device-FrameNode-getPositionToParent(): Position-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Position](arkts-arkui-units-position-i.md) | Position offset of the node relative to the parent component, in vp. |

## getPositionToParentWithTransform

```TypeScript
getPositionToParentWithTransform(): Position
```

Obtains the position offset of a FrameNode relative to its drawing-enabled parent component, in vp. Drawing attributes include [transform](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#transform) and [translate](../arkts-components/arkts-arkui-common-commonmethod-c.md#translate-1). This API returns the upper left corner coordinates after component layout.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getPositionToParentWithTransform(): Position--><!--Device-FrameNode-getPositionToParentWithTransform(): Position-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Position](arkts-arkui-units-position-i.md) | Position offset of the node relative to the parent component, in vp. If other drawing attributes (such as **transform** and **translate**) are set, the return value may slightly deviate due to the precision of floating point numbers. |

## getPositionToScreen

```TypeScript
getPositionToScreen(): Position
```

Obtains the position offset of this FrameNode relative to the screen, in vp.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getPositionToScreen(): Position--><!--Device-FrameNode-getPositionToScreen(): Position-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Position](arkts-arkui-units-position-i.md) | Position offset of the node relative to the screen, in vp. |

## getPositionToScreenWithTransform

```TypeScript
getPositionToScreenWithTransform(): Position
```

Obtains the position offset of a FrameNode relative to the drawing-enabled screen, in vp. Drawing attributes include [transform](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#transform)and [translate](../arkts-components/arkts-arkui-common-commonmethod-c.md#translate-1). This API returns the upper left corner coordinates after component layout.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getPositionToScreenWithTransform(): Position--><!--Device-FrameNode-getPositionToScreenWithTransform(): Position-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Position](arkts-arkui-units-position-i.md) | Position offset of the node relative to the screen, in vp. If other drawing attributes (such as **transform** and **translate**) are set, the return value may slightly deviate due to the precision of floating point numbers. |

## getPositionToWindow

```TypeScript
getPositionToWindow(): Position
```

Obtains the position offset of this FrameNode relative to the window, in vp.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getPositionToWindow(): Position--><!--Device-FrameNode-getPositionToWindow(): Position-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Position](arkts-arkui-units-position-i.md) | Position offset of the node relative to the window, in vp. |

## getPositionToWindowWithTransform

```TypeScript
getPositionToWindowWithTransform(): Position
```

Obtains the position offset of a FrameNode relative to the drawing-enabled window, in vp. Drawing attributes include [transform](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#transform)and [translate](../arkts-components/arkts-arkui-common-commonmethod-c.md#translate-1). This API returns the upper left corner coordinates after component layout.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getPositionToWindowWithTransform(): Position--><!--Device-FrameNode-getPositionToWindowWithTransform(): Position-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Position](arkts-arkui-units-position-i.md) | Position offset of the node relative to the window, in vp. If other drawing attributes (such as **transform** and **translate**) are set, the return value may slightly deviate due to the precision of floating point numbers. |

## getPreviousSibling

```TypeScript
getPreviousSibling(): FrameNode | null
```

Obtains the previous sibling node of this FrameNode.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getPreviousSibling(): FrameNode | null--><!--Device-FrameNode-getPreviousSibling(): FrameNode | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [FrameNode](arkts-arkui-framenode-c.md) | Previous sibling node of the current FrameNode. If the FrameNode does not have the previous sibling node, null is returned. |

## getRenderNode

```TypeScript
getRenderNode(): RenderNode | null
```

Obtains the [RenderNode](arkts-arkui-rendernode-c.md) held by the FrameNode.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getRenderNode(): RenderNode | null--><!--Device-FrameNode-getRenderNode(): RenderNode | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [RenderNode](arkts-arkui-rendernode-c.md) | **RenderNode** instance. If the current FrameNode does not hold any RenderNode,**null** is returned. If the current FrameNode is a node created by a declarative component, **null** is returned. |

## getUniqueId

```TypeScript
getUniqueId(): number
```

Obtains the system-assigned unique ID of the node.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getUniqueId(): number--><!--Device-FrameNode-getUniqueId(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | System-assigned unique ID of the node. |

## getUserConfigBorderWidth

```TypeScript
getUserConfigBorderWidth(): Edges<LengthMetrics>
```

Obtains the border width set by the user.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getUserConfigBorderWidth(): Edges<LengthMetrics>--><!--Device-FrameNode-getUserConfigBorderWidth(): Edges<LengthMetrics>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Edges](arkts-arkui-units-edges-i.md)<LengthMetrics> | Border width set by the user. |

## getUserConfigMargin

```TypeScript
getUserConfigMargin(): Edges<LengthMetrics>
```

Obtains the margin set by the user.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getUserConfigMargin(): Edges<LengthMetrics>--><!--Device-FrameNode-getUserConfigMargin(): Edges<LengthMetrics>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Edges](arkts-arkui-units-edges-i.md)<LengthMetrics> | Margin set by the user. |

## getUserConfigPadding

```TypeScript
getUserConfigPadding(): Edges<LengthMetrics>
```

Obtains the padding set by the user.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getUserConfigPadding(): Edges<LengthMetrics>--><!--Device-FrameNode-getUserConfigPadding(): Edges<LengthMetrics>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Edges](arkts-arkui-units-edges-i.md)<LengthMetrics> | Padding set by the user. |

## getUserConfigSize

```TypeScript
getUserConfigSize(): SizeT<LengthMetrics>
```

Obtains the width and height set by the user.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-getUserConfigSize(): SizeT<LengthMetrics>--><!--Device-FrameNode-getUserConfigSize(): SizeT<LengthMetrics>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [SizeT](../arkts-components/arkts-arkui-sizet-t.md)<LengthMetrics> | Width and height set by the user. |

## insertChildAfter

```TypeScript
insertChildAfter(child: FrameNode, sibling: FrameNode | null): void
```

Inserts a child node after the specified child node of this FrameNode. If this FrameNode is not modifiable, an exception is thrown.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-insertChildAfter(child: FrameNode, sibling: FrameNode | null): void--><!--Device-FrameNode-insertChildAfter(child: FrameNode, sibling: FrameNode | null): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| child | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Child node to add.<br>The target child node must not be a declaratively created node,that is, a FrameNode that is not modifiable. Only declarative nodes obtained from a BuilderNode can be used as child nodes. If the child node does not meet the specifications, an exception is thrown.<br> The child node cannot have a parent node. Otherwise, an exception is thrown. |
| sibling | FrameNode \| null | Yes | Node after which the new child node will be inserted. If this parameter is left empty, the new node is inserted before the first subnode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. |
| [100025](../errorcode-node.md#100025-invalid-parameter-value) | The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: "The parameter 'child' is invalid: it cannot be adopted."<br>**Applicable version:** 22 and later |

## invalidate

```TypeScript
invalidate(): void
```

Invalidates this FrameNode to trigger a re-rendering of the self-drawing content.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-invalidate(): void--><!--Device-FrameNode-invalidate(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## invalidateAttributes

```TypeScript
invalidateAttributes(): void
```

Forces immediate node property updates in this frame.

By default, property modifications applied after the build phase are deferred until the next frame.

This API ensures rendering synchronization by triggering immediate property updates.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-FrameNode-invalidateAttributes(): void--><!--Device-FrameNode-invalidateAttributes(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isAttached

```TypeScript
isAttached(): boolean
```

Obtains whether the node is mounted to the main node tree.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-isAttached(): boolean--><!--Device-FrameNode-isAttached(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the node is mounted to the main node tree.<br>The value **true** means that the node is mounted to the main node tree, and **false** means the opposite. |

## isClipToFrame

```TypeScript
isClipToFrame(): boolean
```

Checks whether the node is clipped to the component area. This API returns **true** after the [dispose](arkts-arkui-framenode-c.md#dispose-1) API is called to release the reference to the FrameNode.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-isClipToFrame(): boolean--><!--Device-FrameNode-isClipToFrame(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the node is clipped to the component area.<br>The value **true** means that the node is clipped to the component area, and **false** means the opposite. |

## isDisposed

```TypeScript
isDisposed(): boolean
```

Checks whether this FrameNode object has released its reference to its backend entity node. Frontend nodes maintain references to corresponding backend entity nodes. After a node calls the **dispose** API to release this reference,subsequent API calls may cause crashes or return default values. This API facilitates validation of node validity prior to operations, thereby mitigating risks in scenarios where calls after disposal are required.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FrameNode-isDisposed(): boolean--><!--Device-FrameNode-isDisposed(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the reference to the backend node is released. The value **true** means that the reference to backend node is released, and **false** means the opposite. |

## isInRenderState

```TypeScript
isInRenderState(): boolean
```

Checks whether this node is in render state. A node is considered to be in render state when its corresponding RenderNode is present in the render tree.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-FrameNode-isInRenderState(): boolean--><!--Device-FrameNode-isInRenderState(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the node is in render state.<br>**true**: The node is in render state. **false**: The node is not in render state. |

## isModifiable

```TypeScript
isModifiable(): boolean
```

Checks whether this FrameNode is modifiable.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-isModifiable(): boolean--><!--Device-FrameNode-isModifiable(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether this FrameNode is modifiable.<br>The value **true** means that the FrameNode is modifiable, and **false** means the opposite.<br>Returns **false** if the node is a system component proxy node in a [custom component node](../../../../ui/arkts-user-defined-node.md#custom-component-node-framenode) or the node has been [disposed](arkts-arkui-framenode-c.md#dispose-1).<br>When **false** is returned, the current FrameNode does not support operations such as [appendChild](arkts-arkui-framenode-c.md#appendchild-1), [insertChildAfter](arkts-arkui-framenode-c.md#insertchildafter-1),[removeChild](arkts-arkui-framenode-c.md#removechild-1), [clearChildren](arkts-arkui-framenode-c.md#clearchildren-1),[createAnimation](arkts-arkui-framenode-c.md#createanimation-1), and [cancelAnimations](arkts-arkui-framenode-c.md#cancelanimations-1). |

## isOnMainTree

```TypeScript
isOnMainTree(): boolean
```

Queries whether a node is mounted to the main node tree.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-FrameNode-isOnMainTree(): boolean--><!--Device-FrameNode-isOnMainTree(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the node is mounted to the main node tree.<br>The value **true** means that the node is mounted to the main node tree, and **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100026](../errorcode-node.md#100026-the-instance-object-used-to-call-the-api-has-been-unbound-from-the-backend-entity-node) | The current FrameNode has been disposed. |

## isTransferred

```TypeScript
isTransferred(): boolean
```

Returns a flag indicating whether the current FrameNode was obtained through dynamic-static conversion,includes conversions in both directions: dynamic-to-static and static-to-dynamic.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-FrameNode-isTransferred(): boolean--><!--Device-FrameNode-isTransferred(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - Returns true if the FrameNode was converted between dynamic and static states,otherwise, returns false. |

## isVisible

```TypeScript
isVisible(): boolean
```

Obtains whether the node is visible.

> **NOTE**  
>  
> The visibility of a node is determined by the **visibility** attribute of the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-isVisible(): boolean--><!--Device-FrameNode-isVisible(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the node is visible.<br>The value **true** means that the node is visible, and **false** means the opposite. |

## layout

```TypeScript
layout(position: Position): void
```

Lays out this FrameNode, specifying the layout positions for the FrameNode and its child nodes. If the layout method is overridden, the overridden method is called. It is recommended that this API be called in [onLayout](arkts-arkui-framenode-c.md#onlayout-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-layout(position: Position): void--><!--Device-FrameNode-layout(position: Position): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | [Position](arkts-arkui-units-position-i.md) | Yes | Position information used in layout. |

## measure

```TypeScript
measure(constraint: LayoutConstraint): void
```

Measures this FrameNode and calculates its size based on the layout constraints of the parent container. If the measurement method is overridden, the overridden method is called. It is recommended that this API be called in [onMeasure](arkts-arkui-framenode-c.md#onmeasure-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-measure(constraint: LayoutConstraint): void--><!--Device-FrameNode-measure(constraint: LayoutConstraint): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| constraint | [LayoutConstraint](arkts-arkui-framenode-layoutconstraint-i.md) | Yes | Parent container layout constraints used for measurement. |

## moveTo

```TypeScript
moveTo(targetParent: FrameNode, index?: number): void
```

Moves this FrameNode to a specified position within the target FrameNode. If this FrameNode is not modifiable, an exception is thrown. When **targetParent** is a [typeNode](arkts-arkui-typenode-n.md), the API validates the type or number of child nodes. If the validation fails, an exception is thrown. For specific limitations, see [typeNode](arkts-arkui-typenode-n.md).

> **NOTE**  
>  
> Currently, only the following types of [TypedFrameNode](arkts-arkui-framenode-typedframenode-i.md) are supported for the movement  
> operations: [Stack](arkts-arkui-typenode-stack-t.md), [XComponent](arkts-arkui-typenode-xcomponent-t.md). This API does not work for  
> other node types.  
>  
> This API only supports [BuilderNode](arkts-arkui-buildernode-c.md) with root components of these types:  
> [Stack](../arkts-components/arkts-arkui-stack.md), [XComponent](../arkts-components/arkts-arkui-xcomponent.md), [EmbeddedComponent](../arkts-components/arkts-arkui-embeddedcomponent.md). This API  
> does not work for other component types.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-FrameNode-moveTo(targetParent: FrameNode, index?: number): void--><!--Device-FrameNode-moveTo(targetParent: FrameNode, index?: number): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetParent | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Target parent node.<br>The target parent node must not be a declaratively created node, that is, a FrameNode that is not modifiable. If it does not meet the specifications, an exception is thrown. |
| index | number | No | Index of the child node. The current FrameNode will be inserted before the child node at the specified sequence number in the target FrameNode. If the target FrameNode has *n* nodes, the value range for **index** is 0, *n*-1].<br>If the parameter is invalid or not specified, the current FrameNode will be added to the end of the target FrameNode.<br>Default value: **-1** |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. |
| [100027](../errorcode-node.md#100027-the-current-node-has-been-adopted-as-a-child-node) | The current node has been adopted.<br>**Applicable version:** 22 and later |

## onDraw

```TypeScript
onDraw?(context: DrawContext): void
```

Implements custom drawing for the FrameNode. This API overrides the default drawing behavior and is invoked during FrameNode content rendering.

Note: The Canvas provided in the [DrawContext](arkts-arkui-graphics-drawcontext-c.md) parameter is a temporary command-recording canvas, not the actual rendering canvas of the node. For usage instructions, see [Adjusting the Transformation Matrix of the Custom Drawing Canvas](../../../../ui/arkts-user-defined-arktsNode-frameNode.md#adjusting-the-transformation-matrix-of-the-custom-drawing-canvas).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-onDraw?(context: DrawContext): void--><!--Device-FrameNode-onDraw?(context: DrawContext): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [DrawContext](../arkts-components/arkts-arkui-drawcontext-t.md) | Yes | Graphics drawing context. The self-drawing area cannot exceed the component's own size. |

## onLayout

```TypeScript
onLayout(position: Position): void
```

Called when this FrameNode needs to determine its layout. This API provides custom layout and overrides the default layout method. It can be used to specify how the FrameNode and its child nodes are positioned and sized within the layout.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-onLayout(position: Position): void--><!--Device-FrameNode-onLayout(position: Position): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | [Position](arkts-arkui-units-position-i.md) | Yes | Position information used in layout. |

## onMeasure

```TypeScript
onMeasure(constraint: LayoutConstraint): void
```

Called when this FrameNode needs to determine its size. This API provides custom measurement and overrides the default measurement method.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-onMeasure(constraint: LayoutConstraint): void--><!--Device-FrameNode-onMeasure(constraint: LayoutConstraint): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| constraint | [LayoutConstraint](arkts-arkui-framenode-layoutconstraint-i.md) | Yes | Layout constraints used by the component for measurement. |

## recycle

```TypeScript
recycle(): void
```

Triggers child component recycling in global reuse scenarios and fully releases FrameNode backend resources for reuse. This ensures efficient resource reclamation and reuse.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-FrameNode-recycle(): void--><!--Device-FrameNode-recycle(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## removeAdoptedChild

```TypeScript
removeAdoptedChild(child: FrameNode): void
```

Removes a previously-adopted affiliated node.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-FrameNode-removeAdoptedChild(child: FrameNode): void--><!--Device-FrameNode-removeAdoptedChild(child: FrameNode): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| child | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Node to remove. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The current FrameNode is not modifiable. |
| [100025](../errorcode-node.md#100025-invalid-parameter-value) | The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: "The parameter 'child' is invalid: it cannot be null." |
| [100026](../errorcode-node.md#100026-the-instance-object-used-to-call-the-api-has-been-unbound-from-the-backend-entity-node) | The current FrameNode has been disposed. |

## removeChild

```TypeScript
removeChild(node: FrameNode): void
```

Deletes the specified child node from this FrameNode. If this FrameNode is not modifiable, an exception is thrown.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-removeChild(node: FrameNode): void--><!--Device-FrameNode-removeChild(node: FrameNode): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Child node to delete. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. |

## removeSupportedUIStates

```TypeScript
removeSupportedUIStates(uiStates: number): void
```

Removes the state processing registration from the component.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FrameNode-removeSupportedUIStates(uiStates: number): void--><!--Device-FrameNode-removeSupportedUIStates(uiStates: number): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiStates | number | Yes | UI states to be removed.<br>Multiple states can be specified simultaneously using bitwise OR operations, for example, **targetUIStates = UIState.PRESSED  \|  UIState.FOCUSED**. |

## reuse

```TypeScript
reuse(): void
```

Triggers child component reuse in global reuse scenarios to recycle FrameNode backend resources and improve resource utilization. To ensure adequate resource availability, call this API after the **recycle** API has been executed.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-FrameNode-reuse(): void--><!--Device-FrameNode-reuse(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setCrossLanguageOptions

```TypeScript
setCrossLanguageOptions(options: CrossLanguageOptions): void
```

Sets the cross-language access options for this FrameNode. For example, for nodes created using ArkTS, this API can set whether non-ArkTS languages are allowed to set the attributes of these nodes. Since API version 26.0.0, this API can set whether non-ArkTS languages are allowed to perform operations on the component tree. If the current FrameNode is not modifiable or does not support setting cross-language access options, an exception will be thrown.

> **NOTE**  
>  
> Currently, the cross-ArkTS language access option can only be configured for the following components:  
> [Scroll](arkts-arkui-typenode-scroll-t.md), [Swiper](arkts-arkui-typenode-swiper-t.md), [List](arkts-arkui-typenode-list-t.md),  
> [ListItem](arkts-arkui-typenode-listitem-t.md), [ListItemGroup](arkts-arkui-typenode-listitemgroup-t.md),  
> [WaterFlow](arkts-arkui-typenode-waterflow-t.md), [FlowItem](arkts-arkui-typenode-flowitem-t.md), [Grid](arkts-arkui-typenode-grid-t.md),  
> [GridItem](arkts-arkui-typenode-griditem-t.md), [TextInput](arkts-arkui-typenode-textinput-t.md), [TextArea](arkts-arkui-typenode-textarea-t.md),  
> [Column](arkts-arkui-typenode-column-t.md), [Row](arkts-arkui-typenode-row-t.md), [Stack](arkts-arkui-typenode-stack-t.md),  
> [Flex](arkts-arkui-typenode-flex-t.md), [RelativeContainer](arkts-arkui-typenode-relativecontainer-t.md),  
> [Progress](arkts-arkui-typenode-progress-t.md), [LoadingProgress](arkts-arkui-typenode-loadingprogress-t.md),  
> [Image](arkts-arkui-typenode-image-t.md), [Button](arkts-arkui-typenode-button-t.md), [CheckBox](arkts-arkui-typenode-checkbox-t.md),  
> [Radio](arkts-arkui-typenode-radio-t.md), [Slider](arkts-arkui-typenode-slider-t.md), [Toggle](arkts-arkui-typenode-toggle-t.md), and  
> [TypedFrameNode](arkts-arkui-framenode-typedframenode-i.md) of the [XComponent](arkts-arkui-typenode-xcomponent-t.md) type.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-FrameNode-setCrossLanguageOptions(options: CrossLanguageOptions): void--><!--Device-FrameNode-setCrossLanguageOptions(options: CrossLanguageOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [CrossLanguageOptions](arkts-arkui-framenode-crosslanguageoptions-i.md) | Yes | Cross-ArkTS language access options. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100022](../errorcode-node.md#100022-crosslanguage-common-attribute-configuration-not-supported) | The FrameNode cannot be set whether to support cross-language common attribute setting. |

## setLayoutPosition

```TypeScript
setLayoutPosition(position: Position): void
```

Sets the position of this FrameNode after layout. The default unit is PX.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-setLayoutPosition(position: Position): void--><!--Device-FrameNode-setLayoutPosition(position: Position): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | [Position](arkts-arkui-units-position-i.md) | Yes | Position of the FrameNode after layout. |

## setMeasuredSize

```TypeScript
setMeasuredSize(size: Size): void
```

Sets the measured size of this FrameNode. The default unit is PX. If the configured width or height values are negative, they are automatically set to 0.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-setMeasuredSize(size: Size): void--><!--Device-FrameNode-setMeasuredSize(size: Size): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | [Size](../arkts-components/arkts-arkui-canvas-size-i.md) | Yes | Measured size of the FrameNode. |

## setNeedsLayout

```TypeScript
setNeedsLayout(): void
```

Marks this FrameNode as needing layout, so that it will be relaid out in the next frame.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-setNeedsLayout(): void--><!--Device-FrameNode-setNeedsLayout(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## commonAttribute

```TypeScript
get commonAttribute(): CommonAttribute
```

Obtains the **CommonAttribute** API associated with the FrameNode, which is used to configure [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) and [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md).

Note that only the attributes of a custom node can be modified.

> **NOTE**  
>  
> The visual representation of the FrameNode is similar to that of a [Stack](../arkts-components/arkts-arkui-stack.md) container that is aligned  
> to the top start edge.  
>  
> For details about the supported attributes, see  
> [attributeModifier Support for Attributes and Events](../../../../ui/arkts-user-defined-extension-attributeModifier.md#attributemodifier-support-for-attributes-and-events).

**Type:** CommonAttribute

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-get commonAttribute(): CommonAttribute--><!--Device-FrameNode-get commonAttribute(): CommonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## commonEvent

```TypeScript
get commonEvent(): UICommonEvent
```

Obtains the **UICommonEvent** object held in this FrameNode to set basic events. The set basic events will compete with declaratively defined events for event handling without overriding them. If both event callbacks are registered, the declaratively defined event callback takes precedence.

In scenarios involving **LazyForEach**, where nodes may be destroyed and reconstructed, you need to reset or re-attach event listeners to the newly created nodes to ensure they respond to events correctly.

**Type:** UICommonEvent

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameNode-get commonEvent(): UICommonEvent--><!--Device-FrameNode-get commonEvent(): UICommonEvent-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## gestureEvent

```TypeScript
get gestureEvent(): UIGestureEvent
```

Obtains the **UIGestureEvent** object held by this FrameNode, which is used to set gesture events bound to the component. Gesture events set using the **gestureEvent** API will not override gestures bound using the [declarative gesture API](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md). If both APIs are used to set gestures, the declarative API takes precedence.

**Type:** UIGestureEvent

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-FrameNode-get gestureEvent(): UIGestureEvent--><!--Device-FrameNode-get gestureEvent(): UIGestureEvent-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

