# select

Defines Select Component instance.

## select

```TypeScript
select(options: Array<SelectOption>)
```

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | Array&lt;SelectOption> | 是 | 设置下拉选项。 |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [SelectAttribute](arkts-selectattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### 接口

| 名称 | 描述 |
| --- | --- |
| [MenuItemConfiguration](arkts-menuitemconfiguration-i.md) | 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。 |
| [MenuOutlineOptions](arkts-menuoutlineoptions-i.md) | 下拉菜单框的外描边参数对象。 |
| [SelectInterface](arkts-selectinterface-i.md) | 提供下拉选择菜单，让用户在多个选项间选择。 > **说明： |
| [SelectOption](arkts-selectoption-i.md) | 下拉菜单项的信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ArrowPosition](arkts-arrowposition-e.md) | 箭头的位置。 |
| [AvoidanceMode](arkts-avoidancemode-e.md) | 下拉菜单避让模式的枚举选项。 |
| [MenuAlignType](arkts-menualigntype-e.md) | 下拉菜单的对齐方式。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [OnSelectCallback](arkts-onselectcallback-t.md) | 下拉菜单选中某一项时触发的回调函数类型定义。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Select](arkts-select-con.md#Select) | 提供下拉选择菜单，让用户在多个选项间选择。 > **说明：** ###### 子组件 无 |
| [SelectInstance](arkts-select-con.md#SelectInstance) | Defines Select Component instance. |

