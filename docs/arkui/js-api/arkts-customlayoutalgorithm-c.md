# CustomLayoutAlgorithm

自定义布局算法类。 > **说明：** > > CustomLayoutAlgorithm类对象可以赋值给LayoutAlgorithm类型变量，作为[DynamicLayout]@ohos.arkui.components.ArkDynamicLayout组件 > 的入参指定布局算法。

**Inheritance:** CustomLayoutAlgorithmimplements: LayoutAlgorithm.

**Since:** 24

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onLayout

```TypeScript
onLayout(self: FrameNode, position: Position): void
```

通过重写此函数，开发者可以自定义排列子组件的位置。ArkUI框架会在动态布局组件确定位置时，将该组件对应的FrameNode和布局位置通过onLayout传递给开发者。不允许在onLayout函数中改变状态变量。 > **说明：** > > 在此函数中，开发者可以调用[FrameNode](arkts-framenode-c.md#FrameNode)的 > [getChild()]FrameNode:FrameNode#getChild(index: number)方法获取子组件FrameNode，调用 > [FrameNode](arkts-framenode-c.md#FrameNode)的[layout()](arkts-framenode-c.md#layout)方法设置子组件位置，参考DynamicLayout组件 > [示例1（自定义布局算法实现瀑布流布局）](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md#示例1自定义布局算法实现瀑布流布局)。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| self | FrameNode | Yes | 动态布局组件在组件树上的实体节点。 |
| position | Position | Yes | 动态布局组件进行布局时使用的位置信息。 |

## onMeasure

```TypeScript
onMeasure(self: FrameNode, constraint: LayoutConstraint): void
```

通过重写此函数，开发者可以自定义测量子组件的大小。ArkUI框架会在动态布局组件确定尺寸时，将该组件对应的FrameNode和布局约束通过onMeasure传递给开发者。不允许在onMeasure函数中改变状态变量。 > **说明：** > > 在此函数中，开发者可以调用[FrameNode](arkts-framenode-c.md#FrameNode)的 > [getChild()]FrameNode:FrameNode#getChild(index: number)方法获取子组件FrameNode，调用 > [FrameNode](arkts-framenode-c.md#FrameNode)的[measure()](arkts-framenode-c.md#measure)方法测量子组件大小，参考DynamicLayout组 > 件 > [示例1（自定义布局算法实现瀑布流布局）](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md#示例1自定义布局算法实现瀑布流布局)。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| self | FrameNode | Yes | 动态布局组件在组件树上的实体节点。 |
| constraint | LayoutConstraint | Yes | 动态布局组件进行测量时使用的布局约束。 |

