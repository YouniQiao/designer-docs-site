# bindController

<a id="bindcontroller"></a>
## bindController

```TypeScript
export function bindController(node: FrameNode, controller: TextController, nodeType: 'Text'): void
```

Binds a [TextController](../arkts-components/arkts-arkui-textcontroller-c.md) instance to a [Text](arkts-arkui-typenode-text-t.md) node. Cross-language access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-typeNode-export function bindController(node: FrameNode, controller: TextController, nodeType: 'Text'): void--><!--Device-typeNode-export function bindController(node: FrameNode, controller: TextController, nodeType: 'Text'): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Target node for controller binding. |
| controller | [TextController](../arkts-components/arkts-arkui-textcontroller-c.md) | Yes | **TextController** instance to bind. |
| nodeType | 'Text' | Yes | Node type. Set to **'Text'**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100023](../errorcode-node.md#100023-parameter-error) | Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. |


<a id="bindcontroller-1"></a>
## bindController

```TypeScript
export function bindController(node: FrameNode, controller: SwiperController, nodeType: 'Swiper'): void
```

Binds a [SwiperController](../arkts-components/arkts-arkui-swipercontroller-c.md) instance to the [Swiper](arkts-arkui-typenode-swiper-t.md) node. Cross-language access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-typeNode-export function bindController(node: FrameNode, controller: SwiperController, nodeType: 'Swiper'): void--><!--Device-typeNode-export function bindController(node: FrameNode, controller: SwiperController, nodeType: 'Swiper'): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Target node for controller binding. |
| controller | [SwiperController](../arkts-components/arkts-arkui-swipercontroller-c.md) | Yes | **SwiperController** instance. |
| nodeType | 'Swiper' | Yes | Node type. Set to **'Swiper'**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100023](../errorcode-node.md#100023-parameter-error) | Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. |


<a id="bindcontroller-2"></a>
## bindController

```TypeScript
function bindController(node: FrameNode, controller: Scroller, nodeType: 'Scroll'): void
```

Binds the [Scroller](../arkts-components/arkts-arkui-scroller-c.md) to the [Scroll](arkts-arkui-typenode-scroll-t.md) node. Cross-language access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports declaratively created nodes since API version 26.0.0.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-typeNode-function bindController(node: FrameNode, controller: Scroller, nodeType: 'Scroll'): void--><!--Device-typeNode-function bindController(node: FrameNode, controller: Scroller, nodeType: 'Scroll'): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](arkts-arkui-framenode-c.md) | Yes | the target FrameNode. |
| controller | [Scroller](../arkts-components/arkts-arkui-scroller-c.md) | Yes | the controller which is bind to the target FrameNode. |
| nodeType | 'Scroll' | Yes | node type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. the type of the node is error.2. the node is null or undefined. |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. Introduced in API version 15 and will not be threw above API version 24.<br>**Applicable version:** 15 - 24 |


<a id="bindcontroller-3"></a>
## bindController

```TypeScript
export function bindController(node: FrameNode, controller: Scroller, nodeType: 'List'): void
```

Binds a [Scroller](../arkts-components/arkts-arkui-scroller-c.md) instance to the [List](arkts-arkui-typenode-list-t.md) node. Cross-language access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports declaratively created nodes since API version 26.0.0.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-typeNode-export function bindController(node: FrameNode, controller: Scroller, nodeType: 'List'): void--><!--Device-typeNode-export function bindController(node: FrameNode, controller: Scroller, nodeType: 'List'): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Target node to which the scroll controller is bound. |
| controller | [Scroller](../arkts-components/arkts-arkui-scroller-c.md) | Yes | Scroll controller. |
| nodeType | 'List' | Yes | Node type. Set to **'List'**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100023](../errorcode-node.md#100023-parameter-error) | Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. Introduced in API version 20 and will not be threw above API version 24.<br>**Applicable version:** 20 - 24 |


<a id="bindcontroller-4"></a>
## bindController

```TypeScript
export function bindController(node: FrameNode, controller: TextInputController, nodeType: 'TextInput'): void
```

Binds the [TextInputController](../arkts-components/arkts-arkui-textinputcontroller-c.md) to the [TextInput](arkts-arkui-typenode-textinput-t.md) node. Cross  
-language access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports declaratively created nodes since API version 26.0.0.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-typeNode-export function bindController(node: FrameNode, controller: TextInputController, nodeType: 'TextInput'): void--><!--Device-typeNode-export function bindController(node: FrameNode, controller: TextInputController, nodeType: 'TextInput'): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Target node to which the input box controller is bound. |
| controller | [TextInputController](../arkts-components/arkts-arkui-textinputcontroller-c.md) | Yes | Input box controller. |
| nodeType | 'TextInput' | Yes | Node type. Set to **'TextInput'**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100023](../errorcode-node.md#100023-parameter-error) | Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. |


<a id="bindcontroller-5"></a>
## bindController

```TypeScript
export function bindController(node: FrameNode, controller: Scroller, nodeType: 'WaterFlow'): void
```

Binds a [Scroller](../arkts-components/arkts-arkui-scroller-c.md) instance to the [WaterFlow](arkts-arkui-typenode-waterflow-t.md) node. Cross-language access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports declaratively created nodes since API version 26.0.0.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-typeNode-export function bindController(node: FrameNode, controller: Scroller, nodeType: 'WaterFlow'): void--><!--Device-typeNode-export function bindController(node: FrameNode, controller: Scroller, nodeType: 'WaterFlow'): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Target node to which the scroll controller is bound. |
| controller | [Scroller](../arkts-components/arkts-arkui-scroller-c.md) | Yes | Scroll controller. |
| nodeType | 'WaterFlow' | Yes | Node type. Set to **'WaterFlow'**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100023](../errorcode-node.md#100023-parameter-error) | Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. Introduced in API version 20 and will not be threw above API version 24.<br>**Applicable version:** 20 - 24 |


<a id="bindcontroller-6"></a>
## bindController

```TypeScript
export function bindController(node: FrameNode, controller: TextAreaController, nodeType: 'TextArea'): void
```

Binds a [TextAreaController](../arkts-components/arkts-arkui-textareacontroller-c.md) instance to the [TextArea](arkts-arkui-typenode-textarea-t.md) node.Cross-language access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports declaratively created nodes since API version 26.0.0.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-typeNode-export function bindController(node: FrameNode, controller: TextAreaController, nodeType: 'TextArea'): void--><!--Device-typeNode-export function bindController(node: FrameNode, controller: TextAreaController, nodeType: 'TextArea'): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Target node to which the input box controller is bound. |
| controller | [TextAreaController](../arkts-components/arkts-arkui-textareacontroller-c.md) | Yes | Input box controller. |
| nodeType | 'TextArea' | Yes | Node type. Set to **'TextArea'**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100023](../errorcode-node.md#100023-parameter-error) | Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. |


<a id="bindcontroller-7"></a>
## bindController

```TypeScript
export function bindController(node: FrameNode, controller: Scroller, nodeType: 'Grid'): void
```

Binds a [Scroller](../arkts-components/arkts-arkui-scroller-c.md) instance to the [Grid](arkts-arkui-typenode-grid-t.md) node. Cross-language access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports declaratively created nodes since API version 26.0.0.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-typeNode-export function bindController(node: FrameNode, controller: Scroller, nodeType: 'Grid'): void--><!--Device-typeNode-export function bindController(node: FrameNode, controller: Scroller, nodeType: 'Grid'): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](arkts-arkui-framenode-c.md) | Yes | Target node to which the scroll controller is bound. |
| controller | [Scroller](../arkts-components/arkts-arkui-scroller-c.md) | Yes | Scroll controller. |
| nodeType | 'Grid' | Yes | Node type. Set to **'Grid'**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100023](../errorcode-node.md#100023-parameter-error) | Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| [100021](../errorcode-node.md#100021-framenode-not-modifiable) | The FrameNode is not modifiable. Introduced in API version 20 and will not be threw above API version 24.<br>**Applicable version:** 20 - 24 |

