# select

Defines Select Component instance.

## select

```TypeScript
select(options: Array<SelectOption>)
```

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Array&lt;SelectOption> | Yes | 设置下拉选项。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [SelectAttribute](arkts-selectattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### Interfaces

| Name | Description |
| --- | --- |
| [MenuItemConfiguration](arkts-menuitemconfiguration-i.md) | 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。 |
| [MenuOutlineOptions](arkts-menuoutlineoptions-i.md) | 下拉菜单框的外描边参数对象。 |
| [SelectInterface](arkts-selectinterface-i.md) | 提供下拉选择菜单，让用户在多个选项间选择。 > **说明： |
| [SelectOption](arkts-selectoption-i.md) | 下拉菜单项的信息。 |

### Enums

| Name | Description |
| --- | --- |
| [ArrowPosition](arkts-arrowposition-e.md) | 箭头的位置。 |
| [AvoidanceMode](arkts-avoidancemode-e.md) | 下拉菜单避让模式的枚举选项。 |
| [MenuAlignType](arkts-menualigntype-e.md) | 下拉菜单的对齐方式。 |

### Types

| Name | Description |
| --- | --- |
| [OnSelectCallback](arkts-onselectcallback-t.md) | 下拉菜单选中某一项时触发的回调函数类型定义。 |

### Constants

| Name | Description |
| --- | --- |
| [Select](arkts-select-con.md#Select) | 提供下拉选择菜单，让用户在多个选项间选择。 > **说明：** ###### 子组件 无 |
| [SelectInstance](arkts-select-con.md#SelectInstance) | Defines Select Component instance. |

