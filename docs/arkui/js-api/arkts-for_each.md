# for_each

## for_each

```TypeScript
for_each(
    arr: Array<any>,
    itemGenerator: (item: any, index: number)
```

ForEach接口基于数组类型数据来进行循环渲染，需要与容器组件配合使用，且接口返回的组件应当是允许包含在ForEach父容器组件中的子组件。例如，[ListItem]{@link list_item}组件要求ForEach的父容 器组件必须为[List]{@link list}组件或[ListItemGroup]{@link list_item_group}组件。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arr | Array&lt;any> | Yes | 数据源，为`Array`类型的数组。 设置为undefined时ForEach接口不生效。 说明： - 可以设置为空数组，此时不会创建子组件。  - 可以设置返回值为数组类型的函数，例如`arr.slice(1, 3)`，但设置的函数不应改变包括数组本身在内的任何状态变量，例如不应使用`Array.splice()`,`Array.sort()`或  `Array.reverse()`这些会改变原数组的函数。 |
| itemGenerator | (item: any, index: number) => void | Yes | 组件生成函数。 - 为数组中的每个元素创建对应的组件。 - `item`参数（可选）：`arr`数组中的数据项。 - `index`参  数（可选）：`arr`数组中的数据项索引。 说明： - 组件的类型必须是`ForEach`的父容器所允许的。例如，`ListItem`组件要求`ForEach`的父容器组件必须为`List`组件。 |
| keyGenerator | (item: any, index: number) => string | No | 键值生成函数。 - 为数据源`arr`的每个数组项生成唯一且持久的键值。开发者可以通过该函数自定义键值生成规则。 - `item`参数（可选）：  `arr`数组中的数据项。 - `index`参数（可选）：`arr`数组中的数据项索引。 说明： - 如果函数缺省，框架默认的键值生成函数为  `(item: T, index: number) => { return index + '__' + JSON.stringify(item); }` - 键值生成函数不应改变任何组件状态。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ForEachAttribute](arkts-foreachattribute-c.md) | 支持[拖拽排序]{@link common}属性。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ForEachInterface](arkts-foreachinterface-i.md) | ForEach接口基于数组类型数据来进行循环渲染。 > **说明：** 开发者指南见：[ForEach开发者指南](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)。 |

### Constants

| Name | Description |
| --- | --- |
| [ForEach](arkts-for-each-con.md#ForEach) | ForEach接口基于数组类型数据来进行循环渲染。 > **说明：** 开发者指南见：[ForEach开发者指南](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)。 |

