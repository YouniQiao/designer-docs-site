# SegmentButtonItemOptionsArray

用于保存按钮信息的数组。 > **说明：** > > SegmentButtonItemOptionsArray仅支持保存2到5个按钮信息元素。

**Inheritance:** SegmentButtonItemOptionsArrayextends: Array<SegmentButtonItemOptions>.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CommonSegmentButtonOptions,SegmentButtonItemOptionsConstructorOptions,SegmentButtonIconTextItem,SegmentButtonItemOptions,SegmentButtonTextItem,CapsuleSegmentButtonOptions,SegmentButtonOptions,CapsuleSegmentButtonConstructionOptions,SegmentButtonItemTuple,SegmentButton,SegmentButtonItemArray,SegmentButtonItemOptionsArray,SegmentButtonIconItem,BorderRadiusMode,TabSegmentButtonConstructionOptions,TabSegmentButtonOptions,ItemRestriction,DimensionNoPercentage } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(elements: SegmentButtonItemTuple)
```

构造函数。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elements | SegmentButtonItemTuple | Yes | 按钮信息。 |

## create

```TypeScript
static create(elements: SegmentButtonItemTuple): SegmentButtonItemOptionsArray
```

创建一个SegmentButtonItemOptionsArray对象。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elements | SegmentButtonItemTuple | Yes | 按钮信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| SegmentButtonItemOptionsArray | 返回创建的SegmentButtonItemOptionsArray对象。 |

## pop

```TypeScript
pop(): SegmentButtonItemOptions | undefined
```

移除数组末尾最后一个元素，返回被移除的元素。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| SegmentButtonItemOptions | Element removed from the array. |

## push

```TypeScript
push(...items: SegmentButtonItemArray): number
```

在数组末尾添加新的元素，返回添加元素后数组的长度。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | SegmentButtonItemArray | Yes | 被添加的按钮信息数组。 默认值：0个被添加的按钮信息数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 添加元素后数组的长度。 |

## shift

```TypeScript
shift(): SegmentButtonItemOptions | undefined
```

移除数组开头第一个元素，返回被移除的元素。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| SegmentButtonItemOptions | Element removed from the array. |

## splice

```TypeScript
splice(start: number, deleteCount: number, ...items: SegmentButtonItemOptions[]): SegmentButtonItemOptions[]
```

在数组中，删除从start位置开始的deleteCount数量的元素，并插入items中的元素，返回一个包含了被删除的元素的数组。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes | 删除元素的起始位置。 |
| deleteCount | number | Yes | 删除元素的数量。 |
| items | SegmentButtonItemOptions[] | Yes | 从start开始要加入到数组中的元素。 默认值：不指定任何元素，将从数组中删除元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| SegmentButtonItemOptions[] | An array containing the removed elements. |

## unshift

```TypeScript
unshift(...items: SegmentButtonItemArray): number
```

在数组开头添加一个新的元素，返回添加元素后数组的长度。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | SegmentButtonItemArray | Yes | 添加的按钮信息数组。 默认值：0个被添加的按钮信息数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 添加元素后数组的长度。 |

