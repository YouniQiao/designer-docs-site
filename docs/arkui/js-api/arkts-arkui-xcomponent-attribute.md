# XComponent properties/events

Defines XComponentAttribute.

**Inheritance/Implementation:** XComponentAttribute extends [CommonMethod<XComponentAttribute>](CommonMethod<XComponentAttribute>)

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableAnalyzer

```TypeScript
enableAnalyzer(enable: boolean)
```

Sets whether to enable the AI image analyzer, which supports subject recognition, text recognition, and object lookup. For the settings to take effect, this attribute must be used together with StartImageAnalyzer and StopImageAnalyzer of XComponentController. This feature cannot be used together with the overlay attribute. If both are set, the CustomBuilder attribute in overlay has no effect. This feature also depends on device capabilities.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable the AI image analyzer. |

## enableSecure

```TypeScript
enableSecure(isSecure: boolean)
```

Sets whether to enable the secure surface to protect the content rendered within the component from being captured or recorded.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isSecure | boolean | Yes | Whether to enable the secure surface. |

## hdrBrightness

```TypeScript
hdrBrightness(brightness: number)
```

Set hdrBrightness for XComponent.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| brightness | number | Yes | control the brightness of HDR video |

## hdrBrightness

```TypeScript
hdrBrightness(brightness: number, type?: HdrType)
```

Set hdrBrightness for XComponent.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| brightness | number | Yes | control the brightness of HDR video |
| type | HdrType | No | the HDR type of the XComponent |

## onDestroy

```TypeScript
onDestroy(event: VoidCallback)
```

Triggered when the plug-in is destroyed. Anonymous Object Rectification.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | Callback after the XComponent is destroyed. |

## onLoad

```TypeScript
onLoad(callback: OnNativeLoadCallback)
```

Triggered when the plug-in is loaded. Anonymous Object Rectification.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnNativeLoadCallback | Yes | Callback after the surface held by the XComponent is created. |

