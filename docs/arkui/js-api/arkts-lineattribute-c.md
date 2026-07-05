# LineAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** LineAttributeextends: CommonShapeMethod<LineAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## endPoint

```TypeScript
endPoint(value: Array<any>)
```

设置直线终点坐标点（相对坐标），支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法，异常值按照默认值处理。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;any> | Yes | 直线终点坐标点（相对坐标），单位vp。 默认值：[0, 0] 异常值undefined和null按照默认值处理。 |

## startPoint

```TypeScript
startPoint(value: Array<any>)
```

设置直线起点坐标点（相对坐标），支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法，异常值按照默认值处理。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;any> | Yes | 直线起点坐标点（相对坐标），单位vp。 默认值：[0, 0] 异常值undefined和null按照默认值处理。 |

