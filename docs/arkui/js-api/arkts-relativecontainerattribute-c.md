# RelativeContainerAttribute

除支持[通用属性]common外，还支持如下属性： 支持[通用事件]common。

**Inheritance:** RelativeContainerAttributeextends: CommonMethod<RelativeContainerAttribute>.

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## barrier

```TypeScript
barrier(value: Array<BarrierStyle>)
```

设置RelativeContainer容器内的[屏障](docroot://ui/arkts-layout-development-relative-layout.md#多个组件的屏障)，Array中每个项目即为一条 barrier。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;BarrierStyle> | Yes | RelativeContainer容器内的屏障。 |

## barrier

```TypeScript
barrier(barrierStyle: Array<LocalizedBarrierStyle>)
```

设置RelativeContainer容器内的屏障，Array中每个项目即为一条barrier，支持定义镜像模式的屏障线。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| barrierStyle | Array&lt;LocalizedBarrierStyle> | Yes | RelativeContainer容器内的屏障。 |

## guideLine

```TypeScript
guideLine(value: Array<GuideLineStyle>)
```

设置RelativeContainer容器内的[辅助线](docroot://ui/arkts-layout-development-relative-layout.md#使用辅助线辅助定位子组件)，Array中每个项目即为一条 guideLine。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;GuideLineStyle> | Yes | RelativeContainer容器内的辅助线。 |

