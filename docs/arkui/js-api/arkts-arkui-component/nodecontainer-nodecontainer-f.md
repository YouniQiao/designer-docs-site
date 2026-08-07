# NodeContainer

## NodeContainer

```TypeScript
export declare function NodeContainer(
    controller: NodeController
): NodeContainerAttribute
```

Defines NodeContainer Component

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-unnamed-export declare function NodeContainer(    controller: NodeController): NodeContainerAttribute--><!--Device-unnamed-export declare function NodeContainer(    controller: NodeController): NodeContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controller | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | instance of NodeController. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ |  |


## NodeContainer

```TypeScript
export declare function NodeContainer(
    style: CustomBuilderT<NodeContainerAttribute>
): NodeContainerAttribute
```

Defines NodeContainer Component. It requires call setNodeContainerOptions at start of component attribute set-up,and it requires call applyAttributeFinish at end of component attribute set-up.

**Since:** 26.1.0

**ArkTS mode:** ArkTS-Sta only, since version 26.1.0.

**Decorator:** @Builder

**Model restriction:** This API can be used only in the stage model.

<!--Device-unnamed-export declare function NodeContainer(    style: CustomBuilderT<NodeContainerAttribute>): NodeContainerAttribute--><!--Device-unnamed-export declare function NodeContainer(    style: CustomBuilderT<NodeContainerAttribute>): NodeContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;\_\_\_MD\_LINK\_USD\_1\_\_\_&gt; | Yes | callback to set up NodeContainer's attributes. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | The attribute of NodeContainer. |

