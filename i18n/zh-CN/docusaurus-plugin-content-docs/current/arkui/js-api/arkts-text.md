# text

定义文本组件实例。

## text

```TypeScript
text(content?: string | Resource, value?: TextOptions)
```

定义文本组件构造函数。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| content | string \| Resource | 否 | 文本内容。当不包含子组件[Span]{@link span}和未设置[属性字符串]{@link styled_string}时该参数生效。 默认  值：' ' 说明： 显示内容的优先级：属性字符串>Span>Text的文本内容。 |
| value | TextOptions | 否 | 文本组件初始化选项。 [since 11] |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [TextAttribute](arkts-textattribute-c.md) | 除支持[通用属性]{@link common}，还支持以下属性： **布局与对齐** 除支持[通用事件]{@link common}外，还支持以下事件： |
| [TextController](arkts-textcontroller-c.md) | Text组件的控制器。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [TextInterface](arkts-textinterface-i.md) | 显示一段文本的组件。 |
| [TextMarqueeOptions](arkts-textmarqueeoptions-i.md) | Marquee初始化参数。 |
| [TextOptions](arkts-textoptions-i.md) | Text初始化参数。 |
| [TextOverflowOptions](arkts-textoverflowoptions-i.md) | 文本超长显示方式对象。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [MarqueeStartPolicy](arkts-marqueestartpolicy-e.md) | Marquee的滚动方式，可选择默认持续滚动或条件触发滚动。 |
| [MarqueeState](arkts-marqueestate-e.md) | Marquee状态回调的返回值。 |
| [MarqueeUpdatePolicy](arkts-marqueeupdatepolicy-e.md) | 跑马灯组件属性更新后，跑马灯的滚动策略。 |
| [TextResponseType](arkts-textresponsetype-e.md) | 选择菜单的响应类型。 > **说明：** > > 菜单类型的匹配顺序如下。例如，用户长按文本时，根据以下规则查找： > |
| [TextSpanType](arkts-textspantype-e.md) | [Span]{@link span}类型信息。 > **说明：** > > 菜单类型的匹配顺序如下。例如，用户长按文本时，根据以下规则查找： > |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Text](arkts-text-con.md#Text) | 显示一段文本的组件。 ###### 子组件 可以包含[Span]{@link span}、[ImageSpan]{@link image_span}、[SymbolSpan]{@link symbol_span}和 [ContainerSpan]{@link container_span}子组件。 > **说明：** > > 使用[子组件](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#子组件)实现 > [图文混排](docroot://ui/arkts-text-image-layout.md)场景。 |
| [TextInstance](arkts-text-con.md#TextInstance) | 定义文本组件实例。 |

