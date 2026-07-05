# qrcode

定义QRCode组件实例。

## qrcode

```TypeScript
qrcode(value: ResourceStr)
```

创建二维码组件，通过扫描组件显示的二维码图案可以获取二维码中包含的字符串信息。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceStr | Yes | 二维码内容字符串。最大支持512个字符，若超出，则截取前512个字符。 从API version 20开始，支持Resource类型。 说明：  设置为null时与设置字符串“null”效果一致；设置为undefined时与设置字符串“undefined”效果一致；当传入空字符串时，将生成无效二维码。 [since 20] |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [QRCodeAttribute](arkts-qrcodeattribute-c.md) | 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。 |

### Interfaces

| Name | Description |
| --- | --- |
| [QRCodeInterface](arkts-qrcodeinterface-i.md) | 用于显示单个二维码的组件。 > **说明：** > - 二维码组件的像素点数量与内容有关，组件尺寸过小可能导致内容无法展示，此时需要适当调整组件尺寸。 > |

### Constants

| Name | Description |
| --- | --- |
| [QRCode](arkts-qrcode-con.md#QRCode) | 用于显示单个二维码的组件。 > **说明：** > - 二维码组件的像素点数量与内容有关，组件尺寸过小可能导致内容无法展示，此时需要适当调整组件尺寸。 > ###### 子组件 无 |
| [QRCodeInstance](arkts-qrcode-con.md#QRCodeInstance) | 定义QRCode组件实例。 |

