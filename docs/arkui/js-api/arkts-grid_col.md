# grid_col

Defines GridCol Component instance.

## grid_col

```TypeScript
grid_col(option?: GridColOptions)
```

栅格列布局组件。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | GridColOptions | No |  |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [GridColAttribute](arkts-gridcolattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 支持[通用事件]{@link common}。 |

### Interfaces

| Name | Description |
| --- | --- |
| [GridColColumnOption](arkts-gridcolcolumnoption-i.md) | 用于自定义指定在不同宽度设备类型上，栅格子组件占据的栅格数量单位。 - API version 20之前，仅配置部分断点下GridCol组件所占列数，取已配置的更小断点的列数补全未配置的列数。若未配置更小断点的列数，取默认值1。 <!--code_no_check--> ```ts span: {xs:2, md:4, lg:8} // 等于配置 span: {xs:2, sm:2, md:4, lg:8, xl:8, xxl:8} span: {md:4, lg:8} // 等于配置 span: {xs:1, sm:1, md:4, lg:8, xl:8, xxl:8} ``` - API version 20及以后，仅配置部分断点下GridCol组件所占列数，取已配置的更小断点的列数补全未配置的列数。若未配置更小断点的列数，取已配置的更大断点的列数补全未配置的列数。 <!--code_no_check--> ```ts span: {xs:2, md:4, lg:8} // 等于配置 span: {xs:2, sm:2, md:4, lg:8, xl:8, xxl:8} span: {md:4, lg:8} // 等于配置 span: {xs:4, sm:4, md:4, lg:8, xl:8, xxl:8} ``` - 建议手动配置不同断点下GridCol组件所占列数，避免默认补全列数的布局效果不符合预期。 |
| [GridColInterface](arkts-gridcolinterface-i.md) | 栅格子组件，必须作为栅格容器组件([GridRow]{@link grid_row})的子组件使用。 > **说明： |
| [GridColOptions](arkts-gridcoloptions-i.md) | 设置栅格列布局组件布局选项。 `span`、`offset`、`order`属性按照`xs`、`sm`、`md`、`lg`、`xl`、`xxl`的顺序具有“继承性”，未设置值的断点将会从前一个断点取值。 API version 20之后，`span`的继承规则见[GridColColumnOption]{@link GridColColumnOption}。 |

### Constants

| Name | Description |
| --- | --- |
| [GridCol](arkts-grid-col-con.md#GridCol) | 栅格子组件，必须作为栅格容器组件([GridRow]{@link grid_row})的子组件使用。 > **说明：** ###### 子组件 可以包含单个子组件。 |
| [GridColInstance](arkts-grid-col-con.md#GridColInstance) | Defines GridCol Component instance. |

