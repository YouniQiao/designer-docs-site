# FrameNode

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [typeNode](arkts-typenode-n.md) | typeNode提供创建具体类型的FrameNode能力，可通过FrameNode的基础接口进行自定义的挂载，使用占位容器进行显示。 使用typeNode创建[Text]{@link text}、[Image]{@link image}、[Select]{@link select}、[Toggle]{@link toggle}节点时，当传入的 [UIContext]{@link @ohos.arkui.UIContext}对应的UI实例销毁后，调用该接口会返回一个无效的FrameNode节点，无法正常挂载和显示。 |

### Classes

| Name | Description |
| --- | --- |
| [FrameNode](arkts-framenode-c.md) | 定义FrameNode。 |
| [NodeAdapter](arkts-nodeadapter-c.md) | NodeAdapter提供FrameNode的数据懒加载能力，通过[LazyForEach]{@link lazy_for_each}实现接口功能。 > **说明：** > > 入参不能为负数，入参为负数时不做处理。 |

### Interfaces

| Name | Description |
| --- | --- |
| [CrossLanguageOptions](arkts-crosslanguageoptions-i.md) | 该接口用于配置或查询FrameNode的跨语言访问权限。例如，针对ArkTS语言创建的节点，可通过该接口控制是否允许通过非ArkTS语言进行属性访问或修改。 |
| [InteractionEventBindingInfo](arkts-interactioneventbindinginfo-i.md) | 组件的交互事件绑定状态信息。如果当前节点上绑定了所要查询的交互事件，调用查询接口时返回一个InteractionEventBindingInfo对象，指示事件绑定详细信息。 |
| [LayoutConstraint](arkts-layoutconstraint-i.md) | 描述组件的布局约束。 |
| [TypedFrameNode](arkts-typedframenode-i.md) | TypedFrameNode继承自[FrameNode]{@link FrameNode}，用于声明具体类型的FrameNode。 |

### Enums

| Name | Description |
| --- | --- |
| [ChildrenCountMode](arkts-childrencountmode-e.md) | 子节点计数模式枚举。用于指定获取子节点数量时的计数方式。 |
| [ExpandMode](arkts-expandmode-e.md) | 子节点展开模式枚举。 |
| [UIState](arkts-uistate-e.md) | 多态样式状态枚举，用于处理多态样式。 |

### Types

| Name | Description |
| --- | --- |
| [UIStatesChangeHandler](arkts-uistateschangehandler-t.md) | 当UI状态发生变化时触发的回调。接收回调触发时的[UIState]{@link UIState}状态，该参数的取值为UIState状态枚举值或其运算结果。 |

