# StepperItemAttribute

**Inheritance:** StepperItemAttributeextends: CommonMethod<StepperItemAttribute>.

**Since:** 8

**Deprecated since:** 22

**Substitute:** Swiper#SwiperAttribute

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## nextLabel

```TypeScript
nextLabel(value: string)
```

设置右侧文本按钮内容，最后一页默认值为“开始”，其余页默认值为“下一步”。 > **说明：** > 从API version 8开始支持，从API version 22开始废弃，建议使用[showNext]SwiperController#showNext替代。

**Since:** 8

**Deprecated since:** 22

**Substitute:** Swiper.SwiperController#showNext

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | 右侧文本按钮内容。字符串超长时，先缩小再换行（2行）最后截断。 |

## prevLabel

```TypeScript
prevLabel(value: string)
```

设置左侧文本按钮内容，第一页没有左侧文本按钮，当步骤导航器大于一页时，除第一页外默认值都为“返回”。 > **说明：** > 从API version 8开始支持，从API version 22开始废弃，建议使用[showPrevious]SwiperController#showPrevious替代。

**Since:** 8

**Deprecated since:** 22

**Substitute:** Swiper.SwiperController#showPrevious

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | 左侧文本按钮内容。字符串超长时，先缩小再换行（2行）最后截断。 |

## status

```TypeScript
status(value?: ItemState)
```

设置步骤导航器nextLabel的显示状态。 > **说明：** > 从API version 8开始支持，从API version 22开始废弃，建议使用[indicatorInteractive]SwiperAttribute#indicatorInteractive替代。

**Since:** 8

**Deprecated since:** 22

**Substitute:** Swiper.SwiperAttribute#indicatorInteractive

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ItemState | No | 步骤导航器nextLabel的显示状态。 默认值：ItemState.Normal |

