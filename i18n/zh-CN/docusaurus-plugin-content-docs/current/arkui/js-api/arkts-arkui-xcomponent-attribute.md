# XComponent属性/事件

定义XComponentAttribute。

**继承/实现关系：** XComponentAttribute extends [CommonMethod<XComponentAttribute>](CommonMethod<XComponentAttribute>)

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## enableAnalyzer

```TypeScript
enableAnalyzer(enable: boolean)
```

设置是否启用AI图像分析器，支持主体识别、文字识别和查找对象。
要使设置生效，此属性必须与XComponentController的StartImageAnalyzer和StopImageAnalyzer一起使用。
此特性不能与overlay属性同时使用。
如果两者都设置，overlay中的CustomBuilder属性将不生效。此特性还依赖于设备能力。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**元服务API：** 从API版本12开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 是否启用AI图像分析器。 |

## enableSecure

```TypeScript
enableSecure(isSecure: boolean)
```

设置是否启用安全surface，以保护组件内渲染的内容不被截屏或录屏。

**起始版本：** 13

**模型约束：** 此接口仅可在Stage模型下使用。

**元服务API：** 从API版本13开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isSecure | boolean | 是 | 是否启用安全surface。 |

## hdrBrightness

```TypeScript
hdrBrightness(brightness: number)
```

为XComponent设置hdrBrightness。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| brightness | number | 是 | 控制HDR视频的亮度。 |

## hdrBrightness

```TypeScript
hdrBrightness(brightness: number, type?: HdrType)
```

为XComponent设置hdrBrightness。

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**元服务API：** 从API版本24开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| brightness | number | 是 | 控制HDR视频的亮度。 |
| type | HdrType | 否 | XComponent的HDR类型。 |

## onDestroy

```TypeScript
onDestroy(event: VoidCallback)
```

当插件销毁时触发。
Anonymous Object Rectification.

**起始版本：** 18

**元服务API：** 从API版本18开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | VoidCallback | 是 | XComponent销毁后的回调。 |

## onLoad

```TypeScript
onLoad(callback: OnNativeLoadCallback)
```

当插件加载时触发。
Anonymous Object Rectification.

**起始版本：** 18

**元服务API：** 从API版本18开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnNativeLoadCallback | 是 | XComponent所持有的surface创建完成后的回调。 |

