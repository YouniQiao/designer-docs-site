# bindController

## bindController

```TypeScript
export function bindController(node: FrameNode, controller: TextController, nodeType: 'Text'): void
```

将文本控制器[TextController]TextController绑定到[Text]typeNode.Text节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言 访问，则抛出异常。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 绑定文本控制器的目标节点。 |
| controller | TextController | Yes | 文本控制器。 |
| nodeType | 'Text' | Yes | 绑定输入框控制器的目标节点的节点类型为Text。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100023 | Parameter error. Possible causes: 1. The component type of the node  is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| 100021 | The FrameNode is not modifiable. |

## bindController

```TypeScript
export function bindController(node: FrameNode, controller: SwiperController, nodeType: 'Swiper'): void
```

将控制器[SwiperController]SwiperController绑定到[Swiper]typeNode.Swiper节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果 不支持跨语言访问，则抛出异常。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 绑定控制器的目标节点。 |
| controller | SwiperController | Yes | Swiper容器组件的控制器。 |
| nodeType | 'Swiper' | Yes | 绑定控制器的目标节点的节点类型为Swiper。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100023 | Parameter error. Possible causes: 1. The component type of the node  is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| 100021 | The FrameNode is not modifiable. |

## bindController

```TypeScript
function bindController(node: FrameNode, controller: Scroller, nodeType: 'Scroll'): void
```

将滚动控制器[Scroller]Scroller绑定到[Scroll]typeNode.Scroll节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异 常。从API version 26.0.0开始，该接口支持声明式方式创建的节点，API version 26.0.0以下版本不支持。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 绑定滚动控制器的目标节点。 |
| controller | Scroller | Yes | the controller which is bind to 绑定滚动控制器的目标节点。 |
| nodeType | 'Scroll' | Yes | 绑定滚动控制器的目标节点的节点类型为Scroll。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. the type of the node is error.  2. the node is null or undefined. |
| 100021 | The FrameNode is not modifiable. Introduced in API version 15 and will not  be threw above API version 24. [since 15 - 24] |

## bindController

```TypeScript
export function bindController(node: FrameNode, controller: Scroller, nodeType: 'List'): void
```

将滚动控制器[Scroller]Scroller绑定到[List]typeNode.List节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。从 API version 26.0.0开始，该接口支持声明式方式创建的节点，API version 26.0.0以下版本不支持。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 绑定滚动控制器的目标节点。 |
| controller | Scroller | Yes | 滚动控制器。 |
| nodeType | 'List' | Yes | 绑定滚动控制器的目标节点的节点类型为List。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100023 | Parameter error. Possible causes: 1. The component type of the node is  incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| 100021 | The FrameNode is not modifiable. Introduced in API version 20 and will not  be threw above API version 24. [since 20 - 24] |

## bindController

```TypeScript
export function bindController(node: FrameNode, controller: TextInputController, nodeType: 'TextInput'): void
```

将输入框控制器[TextInputController]TextInputController绑定到[TextInput]typeNode.TextInput节点。若该节点非ArkTS语言创建，则需 要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口从API版本26.0.0开始支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 绑定输入框控制器的目标节点。 |
| controller | TextInputController | Yes | 输入框控制器。 |
| nodeType | 'TextInput' | Yes | 绑定输入框控制器的目标节点的节点类型为TextInput。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100023 | Parameter error. Possible causes: 1. The component type of the node  is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| 100021 | The FrameNode is not modifiable. |

## bindController

```TypeScript
export function bindController(node: FrameNode, controller: Scroller, nodeType: 'WaterFlow'): void
```

将滚动控制器[Scroller]Scroller绑定到[WaterFlow]typeNode.WaterFlow节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访 问，则抛出异常。从API version 26.0.0开始，该接口支持声明式方式创建的节点，API version 26.0.0以下版本不支持。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 绑定滚动控制器的目标节点。 |
| controller | Scroller | Yes | 滚动控制器。 |
| nodeType | 'WaterFlow' | Yes | 绑定滚动控制器的目标节点的节点类型为WaterFlow。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100023 | Parameter error. Possible causes: 1. The component type of the node  is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| 100021 | The FrameNode is not modifiable. Introduced in API version 20 and will not  be threw above API version 24. [since 20 - 24] |

## bindController

```TypeScript
export function bindController(node: FrameNode, controller: TextAreaController, nodeType: 'TextArea'): void
```

将输入框控制器[TextAreaController]TextAreaController绑定到[TextArea]typeNode.TextArea节点。若该节点非ArkTS语言创建，则需要设置是 否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口从API版本26.0.0开始支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 绑定输入框控制器的目标节点。 |
| controller | TextAreaController | Yes | 输入框控制器。 |
| nodeType | 'TextArea' | Yes | 绑定输入框控制器的目标节点的节点类型为TextArea。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100023 | Parameter error. Possible causes: 1. The component type of the node  is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| 100021 | The FrameNode is not modifiable. |

## bindController

```TypeScript
export function bindController(node: FrameNode, controller: Scroller, nodeType: 'Grid'): void
```

将滚动控制器[Scroller]Scroller绑定到[Grid]typeNode.Grid节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。从 API version 26.0.0开始，该接口支持声明式方式创建的节点，API version 26.0.0以下版本不支持。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 绑定滚动控制器的目标节点。 |
| controller | Scroller | Yes | 滚动控制器。 |
| nodeType | 'Grid' | Yes | 绑定滚动控制器的目标节点的节点类型为Grid。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100023 | Parameter error. Possible causes: 1. The component type of the node  is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined. |
| 100021 | The FrameNode is not modifiable. Introduced in API version 20 and will not  be threw above API version 24. [since 20 - 24] |

