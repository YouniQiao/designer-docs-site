# column_split

Defines ColumnSplit Component instance.

## column_split

```TypeScript
column_split()
```

带分割线的子组件纵向布局。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [ColumnSplitAttribute](arkts-columnsplitattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 支持[通用事件]{@link common}。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ColumnSplitDividerStyle](arkts-columnsplitdividerstyle-i.md) | 设置子组件与上下分割线的距离。 > **说明：** > > 与[RowSplit]{@link row_split}相同，ColumnSplit的分割线可调整上下两侧子组件的高度，子组件的高度调整范围受其最大最小高度限制。 > > 支持[clip]{@link CommonMethod#clip(value: boolean)}、[margin]{@link CommonMethod#margin}等通用属性，未设置clip属性时，其默认值为true。 |
| [ColumnSplitInterface](arkts-columnsplitinterface-i.md) | 将子组件纵向布局，并在每个子组件之间插入横向分割线。 > **说明： |

### 常量

| 名称 | 描述 |
| --- | --- |
| [ColumnSplit](arkts-column-split-con.md#ColumnSplit) | 将子组件纵向布局，并在每个子组件之间插入横向分割线。 > **说明：** ###### 子组件 可以包含子组件。 ColumnSplit通过分割线限制子组件的高度。初始化时，分割线位置根据子组件的高度来计算。初始化后，动态修改子组件的高度不生效，分割线位置保持不变，可通过拖动相邻分割线改变子组件高度。 初始化后，动态修改[margin]{@link CommonMethod#margin}、[border]{@link CommonMethod#border}、 [padding]{@link CommonMethod#padding}通用属性导致子组件尺寸大于相邻分割线间距的异常情况下，不支持拖动分割线改变子组件的高度。 |
| [ColumnSplitInstance](arkts-column-split-con.md#ColumnSplitInstance) | Defines ColumnSplit Component instance. |

