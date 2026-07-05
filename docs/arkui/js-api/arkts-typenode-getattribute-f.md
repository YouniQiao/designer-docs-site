# getAttribute

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Text'): TextAttribute | undefined
```

获取Text节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Text' | Yes | 获取Text节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| TextAttribute | Attributes of the Text node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Column'): ColumnAttribute | undefined
```

获取Column节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Column' | Yes | 获取Column节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| ColumnAttribute | Attributes of the Column node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Row'): RowAttribute | undefined
```

获取Row节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Row' | Yes | 获取Row节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| RowAttribute | Attributes of the Row node, or undefined if they fail to be obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Stack'): StackAttribute | undefined
```

获取Stack节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Stack' | Yes | 获取Stack节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| StackAttribute | Attributes of the Stack node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Flex'): FlexAttribute | undefined
```

获取Flex节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Flex' | Yes | 获取Flex节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| FlexAttribute | 获取Flex节点类型的属性。 If the operation fails, undefined is returned. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Swiper'): SwiperAttribute | undefined
```

获取Swiper节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Swiper' | Yes | 获取Swiper节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| SwiperAttribute | Properties of the Swiper node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Progress'): ProgressAttribute | undefined
```

获取Progress节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Progress' | Yes | 获取Progress节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| ProgressAttribute | Properties of the Progress node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
function getAttribute(node: FrameNode, nodeType: 'Scroll'): ScrollAttribute | undefined
```

获取Scroll节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Scroll' | Yes | 获取Scroll节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| ScrollAttribute | Attributes of the Scroll node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'RelativeContainer'): RelativeContainerAttribute | undefined
```

获取RelativeContainer节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'RelativeContainer' | Yes | 获取RelativeContainer节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| RelativeContainerAttribute | Attributes of the RelativeContainer node, or undefined  if they fail to be obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'LoadingProgress'): LoadingProgressAttribute | undefined
```

获取[LoadingProgress]loading_progress节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创 建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'LoadingProgress' | Yes | 获取LoadingProgress节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| LoadingProgressAttribute | Properties of the LoadingProgress node, or undefined if  they fail to be obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Image'): ImageAttribute | undefined
```

获取Image节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Image' | Yes | 获取Image节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageAttribute | Properties of the Image node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'List'): ListAttribute | undefined
```

获取List节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'List' | Yes | 获取List节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| ListAttribute | Attributes of the List node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'ListItem'): ListItemAttribute | undefined
```

获取ListItem节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'ListItem' | Yes | 获取ListItem节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| ListItemAttribute | Attributes of the ListItem node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'TextInput'): TextInputAttribute | undefined
```

获取TextInput节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'TextInput' | Yes | 获取TextInput节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| TextInputAttribute | Properties of the TextInput node, or undefined if they fail to  be obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Button'): ButtonAttribute | undefined
```

获取Button节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Button' | Yes | 获取Button节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| ButtonAttribute | Attributes of the Button node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'ListItemGroup'): ListItemGroupAttribute | undefined
```

获取ListItemGroup节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'ListItemGroup' | Yes | 获取ListItemGroup节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| ListItemGroupAttribute | Attributes of the ListItemGroup node, or undefined if they  fail to be obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'WaterFlow'): WaterFlowAttribute | undefined
```

获取WaterFlow节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'WaterFlow' | Yes | 获取WaterFlow节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| WaterFlowAttribute | Properties of the WaterFlow node, or undefined if they fail to  be obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'FlowItem'): FlowItemAttribute | undefined
```

获取FlowItem节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'FlowItem' | Yes | 获取FlowItem节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| FlowItemAttribute | Properties of the FlowItem node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'XComponent'): XComponentAttribute | undefined
```

获取XComponent节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'XComponent' | Yes | 获取XComponent节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| XComponentAttribute | Properties of the XComponent node, or undefined if they fail  to be obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Checkbox'): CheckboxAttribute | undefined
```

获取Checkbox节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Checkbox' | Yes | 获取Checkbox节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| CheckboxAttribute | Attributes of the Checkbox node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Radio'): RadioAttribute | undefined
```

获取Radio节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Radio' | Yes | 获取Radio节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| RadioAttribute | Properties of the Radio node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Slider'): SliderAttribute | undefined
```

获取Slider节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Slider' | Yes | 获取Slider节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| SliderAttribute | Properties of the Slider node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Toggle'): ToggleAttribute | undefined
```

获取Toggle节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Toggle' | Yes | 获取Toggle节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| ToggleAttribute | Properties of the Toggle node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'TextArea'): TextAreaAttribute | undefined
```

获取TextArea节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'TextArea' | Yes | 获取TextArea节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| TextAreaAttribute | Properties of the TextArea node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'Grid'): GridAttribute | undefined
```

获取Grid节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'Grid' | Yes | 获取Grid节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| GridAttribute | Properties of the Grid node, or undefined if they fail to be  obtained. |

## getAttribute

```TypeScript
export function getAttribute(node: FrameNode, nodeType: 'GridItem'): GridItemAttribute | undefined
```

获取GridItem节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 获取属性时所需的目标节点。 |
| nodeType | 'GridItem' | Yes | 获取GridItem节点类型的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| GridItemAttribute | Properties of the GridItem node, or undefined if they fail to be  obtained. |

