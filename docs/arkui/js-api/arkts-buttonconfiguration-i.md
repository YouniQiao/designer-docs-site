# ButtonConfiguration

开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]CommonConfiguration。

**Inheritance:** ButtonConfigurationextends: CommonConfiguration<ButtonConfiguration>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## pressed

```TypeScript
pressed: boolean
```

指示是否按下Button。 true：按下；false：未按下。 默认值：false **说明：** 此按压属性生效区域大小为原本Button组件的大小，而非build出来的新组件大小。

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## triggerClick

```TypeScript
triggerClick: ButtonTriggerClickCallback
```

使用builder新构建出来组件的点击事件。

**Type:** ButtonTriggerClickCallback

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## label

```TypeScript
label: string
```

Button的文本标签。 **说明**：当文本字符的长度超过按钮本身的宽度时，文本将会被截断。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

