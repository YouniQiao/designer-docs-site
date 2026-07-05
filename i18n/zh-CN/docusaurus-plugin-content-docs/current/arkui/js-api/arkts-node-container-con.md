# Constants

## NodeContainer

```TypeScript
declare const NodeContainer: NodeContainerInterface
```

基础组件，用于挂载自定义节点（如[FrameNode]FrameNode或[BuilderNode]BuilderNode），并通过 [NodeController](arkts-nodecontroller-c.md#NodeController)动态控制节点的上树和下树。组件不支持尾随添加子节点，接受一个 [NodeController](arkts-nodecontroller-c.md#NodeController)实例接口，需与NodeController组合使用。 > **说明：** > - 该组件下仅支持挂载自定义节点[FrameNode]FrameNode或者是[BuilderNode]BuilderNode中获取的根节点FrameNode。 > > - 不支持挂载查询获得的系统组件代理节点，请参见[isModifiable](arkts-framenode-c.md#isModifiable)。 > > - 当前不支持使用[动态属性设置]common。 > > - 该组件下的节点树构建时会使用UI实例[UIContext]@ohos.arkui.UIContext，实例切换时可能会因实例不匹配，导致所绑定 > [NodeController](arkts-nodecontroller-c.md#NodeController)的[makeNode](arkts-nodecontroller-c.md#makeNode)回调方法的 > 入参为undefined，因此该组件当前不支持跨实例的节点复用。 > > - 该组件未销毁时，不会主动触发挂载节点的下树。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## NodeContainerInstance

```TypeScript
declare const NodeContainerInstance: NodeContainerAttribute
```

Defines NodeContainer Component instance.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

