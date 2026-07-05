# grid_row

Defines GridRow Component instance.

## grid_row

```TypeScript
grid_row(option?: GridRowOptions)
```

栅格行布局容器。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| option | GridRowOptions | 否 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [GridRowAttribute](arkts-gridrowattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： |

### 接口

| 名称 | 描述 |
| --- | --- |
| [BreakPoints](arkts-breakpoints-i.md) | 设置栅格容器组件的断点。更多断点的说明参考[栅格容器断点](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)。 <!--code_no_check--> |
| [GridRowColumnOption](arkts-gridrowcolumnoption-i.md) | 栅格在不同宽度设备类型下，栅格列数。 API version 20之前，仅配置部分断点下GridRow组件的栅格列数，取已配置的更小断点的栅格列数补全未配置的栅格列数。若未配置更小断点的栅格列数，以默认栅格列数12补全未配置的栅格列数。 <!--code_no_check--> API version 20及以后，仅配置部分断点下GridRow组件的栅格列数，取已配置的更小断点的栅格列数补全未配置的栅格列数。若未配置更小断点的栅格列数，取已配置的更大断点的栅格列数补全未配置的栅格列数。 <!--code_no_check--> 建议手动配置不同断点下GridRow组件的栅格列数，避免默认补全的栅格列数的布局效果不符合预期。 每列栅格的宽度为GridRow的内容区大小减去栅格子组件的间距gutter，再除以总的栅格列数。比如，宽800px的GridRow设置columns为12，gutter设置为10px，padding设置为20px，那么每列栅格的宽度为 (800 - 20 * 2 - 10 * 11) / 12。 |
| [GridRowInterface](arkts-gridrowinterface-i.md) | 栅格布局可以为布局提供规律性的结构，解决多尺寸多设备的动态布局问题，保证不同设备上各个模块的布局一致性。 栅格容器组件，仅可以和栅格子组件([GridCol]{@link grid_col})在栅格布局场景中使用。 > **说明： |
| [GridRowOptions](arkts-gridrowoptions-i.md) | 设置栅格行布局容器的布局选项。 |
| [GridRowSizeOption](arkts-gridrowsizeoption-i.md) | 栅格在不同宽度设备类型下，gutter的大小。 |
| [GutterOption](arkts-gutteroption-i.md) | 栅格布局间距类型，用于描述栅格子组件不同方向的间距。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [BreakpointsReference](arkts-breakpointsreference-e.md) | 设置栅格容器组件的断点参照物。 |
| [GridRowDirection](arkts-gridrowdirection-e.md) | 栅格元素排列方向。 > **说明：** > > - 栅格元素仅支持Row/RowReverse排列，不支持column/ColumnReverse方向排列。 > > - 栅格子组件仅能通过span、offset计算子组件位置与大小。多个子组件span超过规定列数时自动换行。 > > - 单个元素span大小超过最大列数时后台默认span为最大column数。 > > - 新一行的Offset加上子组件的span超过总列数时，将下一个子组件在新的一行放置。 > > - 例：Item1: GridCol({ span: 6 })， Item2: GridCol({ span: 8, offset:11 })。 > > > > ! > [figures/gridRowOffsetToNextLine.png](docroot://reference/apis-arkui/arkui-ts/figures/gridRowOffsetToNextLine.png) |

### 常量

| 名称 | 描述 |
| --- | --- |
| [GridRow](arkts-grid-row-con.md#GridRow) | 栅格布局可以为布局提供规律性的结构，解决多尺寸多设备的动态布局问题，保证不同设备上各个模块的布局一致性。 栅格容器组件，仅可以和栅格子组件([GridCol]{@link grid_col})在栅格布局场景中使用。 > **说明：** ###### 子组件 可以包含GridCol子组件。 |
| [GridRowInstance](arkts-grid-row-con.md#GridRowInstance) | Defines GridRow Component instance. |

