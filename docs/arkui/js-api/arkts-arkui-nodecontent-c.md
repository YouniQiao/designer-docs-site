# NodeContent

NodeContent is the entity encapsulation of the node content.

**Inheritance/Implementation:** NodeContent extends [Content](arkts-arkui-content-c.md)

**Since:** 12

<!--Device-unnamed-export class NodeContent extends Content--><!--Device-unnamed-export class NodeContent extends Content-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="addframenode"></a>
## addFrameNode

```TypeScript
addFrameNode(node: FrameNode): void
```

Adds a FrameNode to this **NodeContent** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NodeContent-addFrameNode(node: FrameNode): void--><!--Device-NodeContent-addFrameNode(node: FrameNode): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](../arkts-components/arkts-arkui-framenode-t.md) | Yes | FrameNode to add. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100025](../errorcode-node.md#100025-invalid-parameter-value) | The parameter is invalid. Details about the invalid parameter and the reason are included in the error message.For example: "The parameter 'node' is invalid: it cannot be adopted."<br>**Applicable version:** 22 and later |

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

A constructor used to create a **NodeContent** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NodeContent-constructor()--><!--Device-NodeContent-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="removeframenode"></a>
## removeFrameNode

```TypeScript
removeFrameNode(node: FrameNode): void
```

Removes a FrameNode from this **NodeContent** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NodeContent-removeFrameNode(node: FrameNode): void--><!--Device-NodeContent-removeFrameNode(node: FrameNode): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](../arkts-components/arkts-arkui-framenode-t.md) | Yes | FrameNode to remove. |

