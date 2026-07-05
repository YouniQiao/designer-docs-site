# NodeContent

NodeContent is the entity encapsulation of the node content.

**Inheritance/Implementation:** NodeContent extends [Content](arkts-arkui-content-c.md#content)

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## addFrameNode

```TypeScript
addFrameNode(node: FrameNode): void
```

Adds a FrameNode to this **NodeContent** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | FrameNode to add. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100025](../errorcode-node.md#100025-invalid-parameter-value) | The parameter is invalid. Details about the invalid parameter and the reasonare included in the error message.For example: "The parameter 'node' is invalid: it cannot be adopted."<br>**Applicable version:** 22 |

## constructor

```TypeScript
constructor()
```

A constructor used to create a **NodeContent** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## removeFrameNode

```TypeScript
removeFrameNode(node: FrameNode): void
```

Removes a FrameNode from this **NodeContent** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | FrameNode to remove. |

