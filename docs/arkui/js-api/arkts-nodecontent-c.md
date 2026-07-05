# NodeContent

NodeContent是节点内容的实体封装。

**Inheritance:** NodeContentextends: Content.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## addFrameNode

```TypeScript
addFrameNode(node: FrameNode): void
```

根据参数将FrameNode添加到NodeContent中。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 需要添加的FrameNode。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100025 | The parameter is invalid. Details about the invalid parameter and the reason  are included in the error message.  For example: "The parameter 'node' is invalid: it cannot be adopted." [since 22] |

## constructor

```TypeScript
constructor()
```

节点内容的实体封装。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## removeFrameNode

```TypeScript
removeFrameNode(node: FrameNode): void
```

根据参数将FrameNode从NodeContent中删除。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 需要删除的FrameNode。 |

