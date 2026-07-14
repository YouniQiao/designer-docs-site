# FrameNode

Provides APIs for creating a specific type of FrameNode, which can be mounted through the basic API of the FrameNode and be displayed using a placeholder container. When **typeNode** is used to create [Text](../../apis-arkgraphics2d/arkts-apis/arkts-graphics-text.md), [Image](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md), [Select](../arkts-components/arkts-arkui-select.md), or [Toggle](../arkts-components/arkts-arkui-toggle.md) nodes, if the UI instance corresponding to the input [UIContext](arkts-arkui-uicontext.md) is destroyed, this API returns an invalid FrameNode that cannot be properly mounted or displayed.

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [typeNode](arkts-arkui-typenode-n.md) | Provides APIs for creating a specific type of FrameNode, which can be mounted through the basic API of the FrameNode and be displayed using a placeholder container. When **typeNode** is used to create [Text](../../apis-arkgraphics2d/arkts-apis/arkts-graphics-text.md), [Image](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md), [Select](../arkts-components/arkts-arkui-select.md), or [Toggle](../arkts-components/arkts-arkui-toggle.md) nodes, if the UI instance corresponding to the input [UIContext](arkts-arkui-uicontext.md) is destroyed, this API returns an invalid FrameNode that cannot be properly mounted or displayed. |

### Classes

| Name | Description |
| --- | --- |
| [FrameNode](arkts-arkui-framenode-c.md) | Defines FrameNode. |
| [NodeAdapter](arkts-arkui-nodeadapter-c.md) | Provides lazy loading capabilities for FrameNode data, implementing [LazyForEach](../arkts-components/arkts-arkui-lazyforeach.md) API functionality. &gt; **NOTE** &gt; &gt; Negative input parameters are ignored and trigger no processing. |

### Interfaces

| Name | Description |
| --- | --- |
| [CrossLanguageOptions](arkts-arkui-crosslanguageoptions-i.md) | Provides options for configuring or querying the cross-language access permissions for a FrameNode. For example, for nodes created using ArkTS, this API can control whether non-ArkTS languages are allowed to access or modify the attributes of these nodes. |
| [InteractionEventBindingInfo](arkts-arkui-interactioneventbindinginfo-i.md) | Describes the binding state of interaction events on components. When querying reveals an interaction event bound to the current node, this object provides detailed event binding information. |
| [LayoutConstraint](arkts-arkui-layoutconstraint-i.md) | Describes the layout constraints of the component. |
| [TypedFrameNode](arkts-arkui-typedframenode-i.md) | Extends [FrameNode](arkts-arkui-framenode-c.md) to define a FrameNode with specific type constraints. |

### Enums

| Name | Description |
| --- | --- |
| [ChildrenCountMode](arkts-arkui-childrencountmode-e.md) | Enum for children count mode. Specifies how to count children when querying number of child nodes. |
| [ExpandMode](arkts-arkui-expandmode-e.md) | Enumerates the expansion mode of child nodes. |
| [UIState](arkts-arkui-uistate-e.md) | Enumerates polymorphic style states, which are used to process polymorphic styles. |

### Types

| Name | Description |
| --- | --- |
| [UIStatesChangeHandler](arkts-arkui-uistateschangehandler-t.md) | Defines the callback triggered when the UI state changes. Defines the callback triggered on UI state changes. It receives the current [UIState](arkts-arkui-uistate-e.md) value when triggered. The parameter represents **UIState** enumerated values or their bitwise combinations. |

