# badge

定义Badge组件实例。

## badge

```TypeScript
badge(value: BadgeParamWithNumber)
```

根据数字创建标记组件。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | BadgeParamWithNumber | 是 | 数字标记组件参数。 |

```TypeScript
badge(value: BadgeParamWithString)
```

根据字符串创建标记组件。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | BadgeParamWithString | 是 | 字符串标记组件参数。 |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [BadgeAttribute](arkts-badgeattribute-c.md) | 支持[通用属性]{@link common}。 支持[通用事件]{@link common}。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [BadgeInterface](arkts-badgeinterface-i.md) | 信息标记组件，可以附加在单个组件上用于信息提醒的容器组件。 ###### 子组件 支持单个子组件。 > **说明：** > > - 子组件类型：系统组件和自定义组件，支持渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 > [ForEach]{@link for_each}和[LazyForEach]{@link lazy_for_each}）。 > > - 自定义组件宽高默认为0，需要给其设置宽高，否则标记组件将不显示。 > > - 当存在多个子组件时，只有最后一个子组件会在界面上显示，但其余子组件的状态更新仍会使Badge及其子组件重新布局渲染。 > > - 不影响子组件布局，即不会主动规避子组件内容。 |
| [BadgeParam](arkts-badgeparam-i.md) | 包含用于创建Badge组件的基础参数。 |
| [BadgeParamWithNumber](arkts-badgeparamwithnumber-i.md) | BadgeParamWithNumber继承自[BadgeParam]{@link BadgeParam}，具有BadgeParam的全部属性。 |
| [BadgeParamWithString](arkts-badgeparamwithstring-i.md) | BadgeParamWithNumber继承自[BadgeParam]{@link BadgeParam}，具有BadgeParam的全部属性。 |
| [BadgeStyle](arkts-badgestyle-i.md) | Badge的样式。包括文本颜色、尺寸、字重、圆点颜色和尺寸等。 > **说明：** > > - 当`borderWidth`大于0且`borderColor`与`badgeColor`颜色不一致时，先绘制角标，再绘制描边。由于边缘像素经过抗锯齿处理，抗锯齿产生半透明像素，四角会出现 `badgeColor` 颜色的描边 > 线。如需实现相关场景，建议使用[Text]{@link text}组件设置[outline]{@link CommonMethod#outline(value: OutlineOptions)}代替Badge组件。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [BadgePosition](arkts-badgeposition-e.md) | 提示点显示位置。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Badge](arkts-badge-con.md#Badge) | 信息标记组件，可以附加在单个组件上用于信息提醒的容器组件。 ###### 子组件 支持单个子组件。 > **说明：** > > - 子组件类型：系统组件和自定义组件，支持渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 > [ForEach]{@link for_each}和[LazyForEach]{@link lazy_for_each}）。 > > - 自定义组件宽高默认为0，需要给其设置宽高，否则标记组件将不显示。 > > - 当存在多个子组件时，只有最后一个子组件会在界面上显示，但其余子组件的状态更新仍会使Badge及其子组件重新布局渲染。 > > - 不影响子组件布局，即不会主动规避子组件内容。 |
| [BadgeInstance](arkts-badge-con.md#BadgeInstance) | 定义Badge组件实例。 |

