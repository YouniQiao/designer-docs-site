# BuilderNode

## Summary

### Classes

| Name | Description |
| --- | --- |
| [BuilderNode](arkts-arkui-buildernode-c.md) | class BuilderNode\&lt;Args extends Object[]&gt; Implements a BuilderNode, which can create a component tree through the stateless UI method [@Builder](../../../../ui/state-management/arkts-builder.md) and hold the root node of the component tree. A BuilderNode cannot be defined as a state variable. The FrameNode held in the BuilderNode is only used to mount the BuilderNode to other FrameNodes as a child node. Undefined behavior may occur if you set attributes or perform operations on subnodes of the FrameNode held by the BuilderNode. Therefore, after you have obtained a [RenderNode](arkts-arkui-rendernode-c.md) through the [getFrameNode](arkts-arkui-buildernode-c.md#getframenode-1) method of the BuilderNode and the [getRenderNode](arkts-arkui-framenode-c.md#getrendernode-1) method of the [FrameNode](arkts-arkui-framenode-c.md), avoid setting the attributes or operating the subnodes through APIs of [RenderNode](arkts-arkui-rendernode-c.md). |
| [ReactiveBuilderNode](arkts-arkui-reactivebuildernode-c.md) | **ReactiveBuilderNode** uses the stateless UI method [@Builder](../../../../ui/state-management/arkts-builder.md) to generate a component tree and holds the root node of the component tree. A ReactiveBuilderNode cannot be defined as a state variable. [FrameNode](arkts-arkui-framenode-c.md) held in **ReactiveBuilderNode** is used only to mount the ReactiveBuilderNode as a child node to another FrameNode. Undefined behavior may occur if you set attributes or perform operations on subnodes of the FrameNode held by the ReactiveBuilderNode. Therefore, after you have obtained a RenderNode through the [getFrameNode](arkts-arkui-buildernode-c.md#getframenode-1) method of the ReactiveBuilderNode and the [getRenderNode](arkts-arkui-framenode-c.md#getrendernode-1) method of the [FrameNode](arkts-arkui-framenode-c.md), avoid setting the attributes or operating the subnodes through APIs of [RenderNode](arkts-arkui-rendernode-c.md). |

### Interfaces

| Name | Description |
| --- | --- |
| [BuildOptions](arkts-arkui-buildoptions-i.md) | Defines the optional build options. |
| [RenderOptions](arkts-arkui-renderoptions-i.md) | Provides optional parameters for creating a BuilderNode. |

### Enums

| Name | Description |
| --- | --- |
| [NodeRenderType](arkts-arkui-noderendertype-e.md) | Enumerates the node rendering types. |

### Types

| Name | Description |
| --- | --- |
| [InputEventType](arkts-arkui-inputeventtype-t.md) | Defines the type of input event to be dispatched. For details, see [postInputEvent](arkts-arkui-buildernode-c.md#postinputevent-1). |

