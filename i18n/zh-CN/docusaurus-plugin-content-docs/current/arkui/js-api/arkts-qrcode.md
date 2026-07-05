# qrcode

定义QRCode组件实例。

## qrcode

```TypeScript
qrcode(value: ResourceStr)
```

创建二维码组件，通过扫描组件显示的二维码图案可以获取二维码中包含的字符串信息。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceStr | 是 | 二维码内容字符串。最大支持512个字符，若超出，则截取前512个字符。 从API version 20开始，支持Resource类型。 说明：  设置为null时与设置字符串“null”效果一致；设置为undefined时与设置字符串“undefined”效果一致；当传入空字符串时，将生成无效二维码。 [since 20] |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [QRCodeAttribute](arkts-qrcodeattribute-c.md) | 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [QRCodeInterface](arkts-qrcodeinterface-i.md) | 用于显示单个二维码的组件。 > **说明：** > - 二维码组件的像素点数量与内容有关，组件尺寸过小可能导致内容无法展示，此时需要适当调整组件尺寸。 > |

### 常量

| 名称 | 描述 |
| --- | --- |
| [QRCode](arkts-qrcode-con.md#QRCode) | 用于显示单个二维码的组件。 > **说明：** > - 二维码组件的像素点数量与内容有关，组件尺寸过小可能导致内容无法展示，此时需要适当调整组件尺寸。 > ###### 子组件 无 |
| [QRCodeInstance](arkts-qrcode-con.md#QRCodeInstance) | 定义QRCode组件实例。 |

