# getEvent

## getEvent

```TypeScript
function getEvent(node: FrameNode, nodeType: 'Scroll'): UIScrollEvent | undefined
```

获取Scroll节点中持有的UIScrollEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取事件时所需的目标节点。 |
| nodeType | 'Scroll' | Yes | 获取Scroll节点类型的滚动事件。 |

**Return value:**

| Type | Description |
| --- | --- |
| UIScrollEvent | UIScrollEvent object for the Scroll node, or undefined if it  fails to be obtained. |

## getEvent

```TypeScript
function getEvent(node: FrameNode, nodeType: 'List'): UIListEvent | undefined
```

获取List节点中持有的UIListEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取事件时所需的目标节点。 |
| nodeType | 'List' | Yes | 获取List节点类型的滚动事件。 |

**Return value:**

| Type | Description |
| --- | --- |
| UIListEvent | UIListEvent object for the List node, or undefined if it fails to  be obtained. |

## getEvent

```TypeScript
function getEvent(node: FrameNode, nodeType: 'WaterFlow'): UIWaterFlowEvent | undefined
```

获取[WaterFlow]typeNode.WaterFlow节点中持有的UIWaterFlowEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置 两个事件回调的时候，优先回调声明式事件。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取事件时所需的目标节点。 |
| nodeType | 'WaterFlow' | Yes | 获取WaterFlow节点类型的滚动事件。 |

**Return value:**

| Type | Description |
| --- | --- |
| UIWaterFlowEvent | UIWaterFlowEvent object for the WaterFlow node, or undefined  if it fails to be obtained. |

## getEvent

```TypeScript
function getEvent(node: FrameNode, nodeType: 'Grid'): UIGridEvent | undefined
```

获取Grid节点中持有的UIGridEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取事件时所需的目标节点。 |
| nodeType | 'Grid' | Yes | 获取Grid节点类型的滚动事件。 |

**Return value:**

| Type | Description |
| --- | --- |
| UIGridEvent | UIGridEvent object for the Grid node, or undefined if it fails to  be obtained. |

