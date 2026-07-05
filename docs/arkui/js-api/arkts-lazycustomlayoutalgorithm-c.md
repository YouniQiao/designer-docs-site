# LazyCustomLayoutAlgorithm

Defines the lazy custom layout algorithm.

**Inheritance:** LazyCustomLayoutAlgorithmimplements: LazyLayoutAlgorithm.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(option?: LazyCustomLayoutAlgorithmOptions)
```

Constructor.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | LazyCustomLayoutAlgorithmOptions | No |  |

## onLayout

```TypeScript
onLayout(self: FrameNode, position: Position): void
```

Method to assign a position to the DynamicLayout FrameNode and each of its children. It can be used to specify the layout location of DynamicLayout FrameNode and its children.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| self | FrameNode | Yes | The FrameNode of DynamicLayout component. |
| position | Position | Yes | The position of the node, will be used when executing layout method. |

## onMeasure

```TypeScript
onMeasure(self: FrameNode, constraint: LayoutConstraint, helper?: LazyLayoutHelper): void
```

Method to measure the DynamicLayout FrameNode and its content to determine the measured size.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| self | FrameNode | Yes | The FrameNode of DynamicLayout component. |
| constraint | LayoutConstraint | Yes | The layout constraint of the node,  which will be used in measure process. |
| helper | LazyLayoutHelper | No |  |

