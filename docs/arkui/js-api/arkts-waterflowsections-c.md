# WaterFlowSections

瀑布流分组信息。 > **说明：** > > 使用splice、push、update修改分组信息后需要保证所有分组子节点总数与瀑布流实际子节点总数一致，否则会出现瀑布流因为不能正常布局而无法滑动的问题。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

创建一个瀑布流分组。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## length

```TypeScript
length(): number
```

获取瀑布流中分组数量。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 瀑布流中分组数量。 |

## push

```TypeScript
push(section: SectionOptions): boolean
```

将指定分组添加到瀑布流末尾。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| section | SectionOptions | Yes | 添加到瀑布流末尾的分组。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 分组添加成功返回true，添加失败（新分组的itemsCount不是非负数）返回false。 |

## splice

```TypeScript
splice(start: number, deleteCount?: number, sections?: Array<SectionOptions>): boolean
```

移除或者替换已存在的分组和/或添加新分组。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes | 从0开始计算的索引，会转换为整数，表示要开始改变分组的位置。 说明： 1. 如果索引是负数，则从末尾开始计算，使用`start +  WaterFlowSections.length()`。 2. 如果 `start =  WaterFlowSections.length()`，则在最后添加新分组。 |
| deleteCount | number | No |  |
| sections | Array&lt;SectionOptions> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 分组修改成功返回true；修改失败（要加入的分组中有任意分组的itemsCount不是非负数）返回false。 |

## update

```TypeScript
update(sectionIndex:number, section: SectionOptions): boolean
```

修改指定索引分组的配置信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sectionIndex | number | Yes | 从0开始计算的索引，会转换为整数，表示要修改的分组的位置。 说明： 1. 如果索引是负数，则从末尾开始计算，使用`sectionIndex  + WaterFlowSections.length()`。 2. 如果`sectionIndex = WaterFlowSections.length()`，则在最后添加新分组。 |
| section | SectionOptions | Yes | 新的分组信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 分组是否更新成功，新分组的itemsCount不是非负数时返回false。 |

## values

```TypeScript
values(): Array<SectionOptions>
```

获取瀑布流中所有分组配置信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;SectionOptions> | 瀑布流中所有分组配置信息。 |

