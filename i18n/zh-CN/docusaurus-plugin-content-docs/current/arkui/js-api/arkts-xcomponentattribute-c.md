# XComponentAttribute

Defines XComponentAttribute.

**继承实现关系：** XComponentAttribute继承自：CommonMethod<XComponentAttribute>。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## enableAnalyzer

```TypeScript
enableAnalyzer(enable: boolean)
```

Sets whether to enable the AI image analyzer, which supports subject recognition, text recognition, and object lookup. For the settings to take effect, this attribute must be used together with StartImageAnalyzer and StopImageAnalyzer of XComponentController. This feature cannot be used together with the overlay attribute. If both are set, the CustomBuilder attribute in overlay has no effect. This feature also depends on device capabilities.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Whether to enable the AI image analyzer. |

## enableSecure

```TypeScript
enableSecure(isSecure: boolean)
```

Sets whether to enable the secure surface to protect the content rendered within the component from being captured or recorded.

**起始版本：** 13

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isSecure | boolean | 是 | Whether to enable the secure surface. |

## enableTransparentLayer

```TypeScript
enableTransparentLayer(enabled: boolean)
```

Enable transparent layer for XComponent.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | whether to enable transparent layer for XComponent. |

## hdrBrightness

```TypeScript
hdrBrightness(brightness: number)
```

Set hdrBrightness for XComponent.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| brightness | number | 是 | control the brightness of HDR video |

## hdrBrightness

```TypeScript
hdrBrightness(brightness: number, type?: HdrType)
```

Set hdrBrightness for XComponent.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| brightness | number | 是 | control the brightness of HDR video |
| type | HdrType | 否 | the HDR type of the XComponent |

## onDestroy

```TypeScript
onDestroy(event: VoidCallback)
```

Triggered when the plug-in is destroyed. Anonymous Object Rectification.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | VoidCallback | 是 | Callback after the XComponent is destroyed. |

## onLoad

```TypeScript
onLoad(callback: OnNativeLoadCallback)
```

Triggered when the plug-in is loaded. Anonymous Object Rectification.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnNativeLoadCallback | 是 | Callback after the surface held by the XComponent is created. |

