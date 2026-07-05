# data_panel

定义DataPanel组件实例。

## data_panel

```TypeScript
data_panel(options: DataPanelOptions)
```

创建数据面板组件。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | DataPanelOptions | Yes | 数据面板组件参数。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [DataPanelAttribute](arkts-datapanelattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |
| [LinearGradient](arkts-lineargradient-c.md) | 线性渐变颜色类。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ColorStop](arkts-colorstop-i.md) | 颜色断点类型，用于描述渐进色颜色断点。 |
| [DataPanelConfiguration](arkts-datapanelconfiguration-i.md) | 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。 |
| [DataPanelInterface](arkts-datapanelinterface-i.md) | 数据面板组件，用于将多个数据占比情况使用占比图进行展示。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。 |
| [DataPanelOptions](arkts-datapaneloptions-i.md) | 数据面板选项。 |
| [DataPanelShadowOptions](arkts-datapanelshadowoptions-i.md) | DataPanelShadowOptions继承自[MultiShadowOptions]{@link MultiShadowOptions}，具有MultiShadowOptions的全部属性。 |

### Enums

| Name | Description |
| --- | --- |
| [DataPanelType](arkts-datapaneltype-e.md) | 数据面板的类型。 |

### Constants

| Name | Description |
| --- | --- |
| [DataPanel](arkts-data-panel-con.md#DataPanel) | 数据面板组件，用于将多个数据占比情况使用占比图进行展示。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。 ###### 子组件 无 |
| [DataPanelInstance](arkts-data-panel-con.md#DataPanelInstance) | 定义DataPanel组件实例。 |

