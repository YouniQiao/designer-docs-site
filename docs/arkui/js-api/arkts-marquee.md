# marquee

定义跑马灯组件实例。

## marquee

```TypeScript
marquee(options: MarqueeOptions)
```

创建跑马灯组件。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | MarqueeOptions | Yes | 配置跑马灯组件的参数。 [since 18] |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [MarqueeAttribute](arkts-marqueeattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### Interfaces

| Name | Description |
| --- | --- |
| [MarqueeInterface](arkts-marqueeinterface-i.md) | 跑马灯组件，用于滚动展示一段单行文本。仅当文本内容宽度大于等于跑马灯组件宽度时滚动，当文本内容宽度小于跑马灯组件宽度时不滚动。 > **说明：** > 为了不影响滚动帧率，建议在滚动类组件中Marquee的个数不超过4个，或者使用[Text]{@link text}组件的[TextOverflow.MARQUEE]{@link TextOverflow}替代。 > > 对于Marquee组件动态帧率的场景，可以使用[MarqueeDynamicSyncScene]{@link @ohos.arkui.UIContext}接口实现。 > > 在文本宽度小于跑马灯组件宽度时，使用[属性动画]{@link common}实现滚动。 |
| [MarqueeOptions](arkts-marqueeoptions-i.md) | Marquee初始化参数。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### Constants

| Name | Description |
| --- | --- |
| [Marquee](arkts-marquee-con.md#Marquee) | 跑马灯组件，用于滚动展示一段单行文本。仅当文本内容宽度大于等于跑马灯组件宽度时滚动，当文本内容宽度小于跑马灯组件宽度时不滚动。 > **说明：** > 为了不影响滚动帧率，建议在滚动类组件中Marquee的个数不超过4个，或者使用[Text]{@link text}组件的[TextOverflow.MARQUEE]{@link TextOverflow}替代。 > > 对于Marquee组件动态帧率的场景，可以使用[MarqueeDynamicSyncScene]{@link @ohos.arkui.UIContext}接口实现。 > > 在文本宽度小于跑马灯组件宽度时，使用[属性动画]{@link common}实现滚动。 ###### 子组件 无 |
| [MarqueeInstance](arkts-marquee-con.md#MarqueeInstance) | 定义跑马灯组件实例。 |

