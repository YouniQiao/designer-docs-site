# grid_col

Defines GridCol Component instance.

## grid_col

```TypeScript
grid_col(option?: GridColOptions)
```

栅格列布局组件。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| option | GridColOptions | 否 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [GridColAttribute](arkts-gridcolattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 支持[通用事件]{@link common}。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [GridColColumnOption](arkts-gridcolcolumnoption-i.md) | 用于自定义指定在不同宽度设备类型上，栅格子组件占据的栅格数量单位。 - API version 20之前，仅配置部分断点下GridCol组件所占列数，取已配置的更小断点的列数补全未配置的列数。若未配置更小断点的列数，取默认值1。 <!--code_no_check--> ```ts span: {xs:2, md:4, lg:8} // 等于配置 span: {xs:2, sm:2, md:4, lg:8, xl:8, xxl:8} span: {md:4, lg:8} // 等于配置 span: {xs:1, sm:1, md:4, lg:8, xl:8, xxl:8} ``` - API version 20及以后，仅配置部分断点下GridCol组件所占列数，取已配置的更小断点的列数补全未配置的列数。若未配置更小断点的列数，取已配置的更大断点的列数补全未配置的列数。 <!--code_no_check--> ```ts span: {xs:2, md:4, lg:8} // 等于配置 span: {xs:2, sm:2, md:4, lg:8, xl:8, xxl:8} span: {md:4, lg:8} // 等于配置 span: {xs:4, sm:4, md:4, lg:8, xl:8, xxl:8} ``` - 建议手动配置不同断点下GridCol组件所占列数，避免默认补全列数的布局效果不符合预期。 |
| [GridColInterface](arkts-gridcolinterface-i.md) | 栅格子组件，必须作为栅格容器组件([GridRow]{@link grid_row})的子组件使用。 > **说明： |
| [GridColOptions](arkts-gridcoloptions-i.md) | 设置栅格列布局组件布局选项。 `span`、`offset`、`order`属性按照`xs`、`sm`、`md`、`lg`、`xl`、`xxl`的顺序具有“继承性”，未设置值的断点将会从前一个断点取值。 API version 20之后，`span`的继承规则见[GridColColumnOption]{@link GridColColumnOption}。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [GridCol](arkts-grid-col-con.md#GridCol) | 栅格子组件，必须作为栅格容器组件([GridRow]{@link grid_row})的子组件使用。 > **说明：** ###### 子组件 可以包含单个子组件。 |
| [GridColInstance](arkts-grid-col-con.md#GridColInstance) | Defines GridCol Component instance. |

