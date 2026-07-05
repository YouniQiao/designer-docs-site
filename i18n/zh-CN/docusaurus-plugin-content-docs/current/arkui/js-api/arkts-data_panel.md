# data_panel

定义DataPanel组件实例。

## data_panel

```TypeScript
data_panel(options: DataPanelOptions)
```

创建数据面板组件。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | DataPanelOptions | 是 | 数据面板组件参数。 |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [DataPanelAttribute](arkts-datapanelattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |
| [LinearGradient](arkts-lineargradient-c.md) | 线性渐变颜色类。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ColorStop](arkts-colorstop-i.md) | 颜色断点类型，用于描述渐进色颜色断点。 |
| [DataPanelConfiguration](arkts-datapanelconfiguration-i.md) | 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。 |
| [DataPanelInterface](arkts-datapanelinterface-i.md) | 数据面板组件，用于将多个数据占比情况使用占比图进行展示。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。 |
| [DataPanelOptions](arkts-datapaneloptions-i.md) | 数据面板选项。 |
| [DataPanelShadowOptions](arkts-datapanelshadowoptions-i.md) | DataPanelShadowOptions继承自[MultiShadowOptions]{@link MultiShadowOptions}，具有MultiShadowOptions的全部属性。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [DataPanelType](arkts-datapaneltype-e.md) | 数据面板的类型。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [DataPanel](arkts-data-panel-con.md#DataPanel) | 数据面板组件，用于将多个数据占比情况使用占比图进行展示。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。 ###### 子组件 无 |
| [DataPanelInstance](arkts-data-panel-con.md#DataPanelInstance) | 定义DataPanel组件实例。 |

