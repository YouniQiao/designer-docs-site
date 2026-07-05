# getAttribute

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Text'): TextAttribute | undefined
```

Obtains the attributes of a **Text** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Text' | Yes | Node type. Set to **'Text'**. |

**Return value:**

| Type | Description |
| --- | --- |
| TextAttribute | Attributes of the **Text** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Column'): ColumnAttribute | undefined
```

Obtains the attributes of a **Column** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Column' | Yes | Node type. Set to **'Column'**. |

**Return value:**

| Type | Description |
| --- | --- |
| ColumnAttribute | Attributes of the **Column** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Row'): RowAttribute | undefined
```

Obtains the attributes of a **Row** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Row' | Yes | Node type. Set to **'Row'**. |

**Return value:**

| Type | Description |
| --- | --- |
| RowAttribute | Attributes of the **Row** node, or **undefined** if they fail to be obtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Stack'): StackAttribute | undefined
```

Obtains the attributes of a **Stack** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Stack' | Yes | Node type. Set to **'Stack'**. |

**Return value:**

| Type | Description |
| --- | --- |
| StackAttribute | Attributes of the **Stack** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Flex'): FlexAttribute | undefined
```

Obtains the Flex node attributes. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Flex' | Yes | Flex node type. |

**Return value:**

| Type | Description |
| --- | --- |
| FlexAttribute | Flex node type. If the operation fails, undefined is returned. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Swiper'): SwiperAttribute | undefined
```

Obtains the attributes of a **Swiper** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Swiper' | Yes | Node type. Set to **'Swiper'**. |

**Return value:**

| Type | Description |
| --- | --- |
| SwiperAttribute | Properties of the **Swiper** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Progress'): ProgressAttribute | undefined
```

Obtains the attributes of a **Progress** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Progress' | Yes | Node type. Set to **'Progress'**. |

**Return value:**

| Type | Description |
| --- | --- |
| ProgressAttribute | Properties of the **Progress** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
function getAttribute(node: FrameNode, nodeType: 'Scroll'): ScrollAttribute | undefined
```

Obtains the attributes of a **Scroll** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Scroll' | Yes | Node type. Set to **'Scroll'**. |

**Return value:**

| Type | Description |
| --- | --- |
| ScrollAttribute | Attributes of the **Scroll** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'RelativeContainer'): RelativeContainerAttribute | undefined
```

Obtains the attributes of a **RelativeContainer** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'RelativeContainer' | Yes | Node type. Set to **'RelativeContainer'**. |

**Return value:**

| Type | Description |
| --- | --- |
| RelativeContainerAttribute | Attributes of the **RelativeContainer** node, or **undefined**if they fail to be obtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'LoadingProgress'): LoadingProgressAttribute | undefined
```

Obtains the attributes of a [LoadingProgress](../arkts-components/arkts-arkui-loadingprogress.md) node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'LoadingProgress' | Yes | Node type. Set to **'LoadingProgress'**. |

**Return value:**

| Type | Description |
| --- | --- |
| LoadingProgressAttribute | Properties of the **LoadingProgress** node, or **undefined** ifthey fail to be obtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Image'): ImageAttribute | undefined
```

Obtains the attributes of an **Image** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Image' | Yes | Node type. Set to **'Image'**. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageAttribute | Properties of the **Image** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'List'): ListAttribute | undefined
```

Obtains the attributes of a **List** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'List' | Yes | Node type. Set to **'List'**. |

**Return value:**

| Type | Description |
| --- | --- |
| ListAttribute | Attributes of the **List** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'ListItem'): ListItemAttribute | undefined
```

Obtains the attributes of a **ListItem** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'ListItem' | Yes | Node type. Set to **'ListItem'**. |

**Return value:**

| Type | Description |
| --- | --- |
| ListItemAttribute | Attributes of the **ListItem** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'TextInput'): TextInputAttribute | undefined
```

Obtains the attributes of a **TextInput** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'TextInput' | Yes | Node type. Set to **'TextInput'**. |

**Return value:**

| Type | Description |
| --- | --- |
| TextInputAttribute | Properties of the **TextInput** node, or **undefined** if they fail tobe obtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Button'): ButtonAttribute | undefined
```

Obtains the attributes of a **Button** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Button' | Yes | Node type. Set to **'Button'**. |

**Return value:**

| Type | Description |
| --- | --- |
| ButtonAttribute | Attributes of the **Button** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'ListItemGroup'): ListItemGroupAttribute | undefined
```

Obtains the attributes of a **ListItemGroup** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'ListItemGroup' | Yes | Node type. Set to **'ListItemGroup'**. |

**Return value:**

| Type | Description |
| --- | --- |
| ListItemGroupAttribute | Attributes of the **ListItemGroup** node, or **undefined** if theyfail to be obtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'WaterFlow'): WaterFlowAttribute | undefined
```

Obtains the attributes of a **WaterFlow** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'WaterFlow' | Yes | Node type. Set to **'WaterFlow'**. |

**Return value:**

| Type | Description |
| --- | --- |
| WaterFlowAttribute | Properties of the **WaterFlow** node, or **undefined** if they fail tobe obtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'FlowItem'): FlowItemAttribute | undefined
```

Obtains the attributes of a **FlowItem** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'FlowItem' | Yes | Node type. Set to **'FlowItem'**. |

**Return value:**

| Type | Description |
| --- | --- |
| FlowItemAttribute | Properties of the **FlowItem** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'XComponent'): XComponentAttribute | undefined
```

Obtain the attributes of an **XComponent** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'XComponent' | Yes | Node type. Set to **'XComponent'**. |

**Return value:**

| Type | Description |
| --- | --- |
| XComponentAttribute | Properties of the **XComponent** node, or **undefined** if they failto be obtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Checkbox'): CheckboxAttribute | undefined
```

Obtains the attributes of a **Checkbox** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Checkbox' | Yes | Node type. Set to **'Checkbox'**. |

**Return value:**

| Type | Description |
| --- | --- |
| CheckboxAttribute | Attributes of the **Checkbox** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Radio'): RadioAttribute | undefined
```

Obtains the attributes of a **Radio** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Radio' | Yes | Node type. Set to **'Radio'**. |

**Return value:**

| Type | Description |
| --- | --- |
| RadioAttribute | Properties of the **Radio** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Slider'): SliderAttribute | undefined
```

Obtains the attributes of a **Slider** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Slider' | Yes | Node type. Set to **'Slider'**. |

**Return value:**

| Type | Description |
| --- | --- |
| SliderAttribute | Properties of the **Slider** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Toggle'): ToggleAttribute | undefined
```

Obtains the attributes of a **Toggle** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Toggle' | Yes | Node type. Set to **'Toggle'**. |

**Return value:**

| Type | Description |
| --- | --- |
| ToggleAttribute | Properties of the **Toggle** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'TextArea'): TextAreaAttribute | undefined
```

Obtains the attributes of a **TextArea** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'TextArea' | Yes | Node type. Set to **'TextArea'**. |

**Return value:**

| Type | Description |
| --- | --- |
| TextAreaAttribute | Properties of the **TextArea** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Grid'): GridAttribute | undefined
```

Obtains the attributes of a **Grid** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'Grid' | Yes | Node type. Set to **'Grid'**. |

**Return value:**

| Type | Description |
| --- | --- |
| GridAttribute | Properties of the **Grid** node, or **undefined** if they fail to beobtained. |


## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'GridItem'): GridItemAttribute | undefined
```

Obtains the attributes of a **GridItem** node. If the node is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node from which to obtain attributes. |
| nodeType | 'GridItem' | Yes | Node type. Set to **'GridItem'**. |

**Return value:**

| Type | Description |
| --- | --- |
| GridItemAttribute | Properties of the **GridItem** node, or **undefined** if they fail to beobtained. |

