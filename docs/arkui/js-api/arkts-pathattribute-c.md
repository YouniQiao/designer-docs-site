# PathAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** PathAttributeextends: CommonShapeMethod<PathAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## commands

```TypeScript
commands(value: ResourceStr)
```

设置符合[SVG路径描述规范](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg路径描述规范)的命令字符串，单位为px。像素单位转换 方法请参考[像素单位转换]common。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceStr | Yes | 线条绘制的路径。 默认值：空字符串 默认单位：px 异常值undefined和null按照默认值处理。 [since 20] |

