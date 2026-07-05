# column

Defines Column Component instance.

## column

```TypeScript
column(options?: ColumnOptions)
```

创建垂直方向线性布局容器，可以设置子组件的间距。 > **说明：** > > 在复杂界面中使用多组件嵌套时，若布局组件的嵌套层数过深或嵌套的组件数量过多，将会产生额外开销。建议通过移除冗余节点、利用布局边界减少布局计算、合理采用渲染控制语法及布局组件方法来优化性能。最佳实践请参考 > [布局优化指导](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve-layout-performance)。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ColumnOptions | 否 |  |

```TypeScript
column(options?: ColumnOptions | ColumnOptionsV2)
```

创建垂直方向线性布局容器，可以设置子组件的间距。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ColumnOptions \| ColumnOptionsV2 | 否 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [ColumnAttribute](arkts-columnattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 支持[通用事件]{@link common}。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ColumnInterface](arkts-columninterface-i.md) | 沿垂直方向布局的容器。 > **说明：** > Column未设置高度或宽度时，在主轴或交叉轴方向上自适应子组件大小。 |
| [ColumnOptions](arkts-columnoptions-i.md) | 设置Column组件的子组件间距属性。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [ColumnOptionsV2](arkts-columnoptionsv2-i.md) | 设置Column组件的子组件间距属性。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [SpaceType](arkts-spacetype-t.md) | Column组件构造函数中space支持的数据类型，取值类型为下表类型中的并集。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Column](arkts-column-con.md#Column) | 沿垂直方向布局的容器。 > **说明：** > Column未设置高度或宽度时，在主轴或交叉轴方向上自适应子组件大小。 ###### 子组件 可以包含子组件。 |
| [ColumnInstance](arkts-column-con.md#ColumnInstance) | Defines Column Component instance. |

