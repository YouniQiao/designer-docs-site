# NodeContainer

**NodeContainer** is a basic component for mounting custom nodes (such as [FrameNode]{@link FrameNode} or
[BuilderNode]{@link BuilderNode}) and dynamically managing node attachment and detachment through
[NodeController]{@link NodeController:NodeController}. This component does not support adding trailing child
components and requires a [NodeController]{@link NodeController:NodeController} instance for operation. It must be
used in combination with **NodeController**.
> **NOTE**
> Only custom [FrameNodes]{@link FrameNode} or the root FrameNode obtained from a [BuilderNode]{@link BuilderNode}
> can be attached to this component.
> [Proxy nodes]{@link FrameNode:FrameNode#isModifiable} of built-in system components obtained through querying
> cannot be attached to this component.
>
> This component does not work with the [attribute modifier]{@link common}.
>
> A [UIContext]{@link @ohos.arkui.UIContext} instance is used to construct the node tree for this component. During
> instance switching, the input parameter of the [makeNode]{@link NodeController:NodeController#makeNode} callback
> method of the bound [NodeController]{@link NodeController:NodeController} may be **undefined** due to instance
> mismatch. Therefore, this component does not support cross-instance node reuse.
>
> When this component is not destroyed, the unmounting of its mounted child nodes will not be triggered.


## NodeContainer

```TypeScript
NodeContainer(controller: import('../api/@ohos.arkui.node').NodeController)
```

Creates a **NodeContainer** component.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NodeContainerInterface-(controller: import('../api/@ohos.arkui.node').NodeController): NodeContainerAttribute--><!--Device-NodeContainerInterface-(controller: import('../api/@ohos.arkui.node').NodeController): NodeContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controller | import('../api/@ohos.arkui.node').NodeController | Yes | **NodeController** instance used to control the upper and lower tree nodes in the **NodeContainer**. It represents the lifecycle of the **NodeContainer**.  |

## Summary

