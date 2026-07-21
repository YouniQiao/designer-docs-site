# ResourceImageAttachmentOptions

Defines the settings for images of the ResourceStr type.

**Since:** 15

<!--Device-unnamed-declare interface ResourceImageAttachmentOptions--><!--Device-unnamed-declare interface ResourceImageAttachmentOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## colorFilter

```TypeScript
colorFilter?: ColorFilterType
```

Image color filter of the styled string.

**Type:** ColorFilterType

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-ResourceImageAttachmentOptions-colorFilter?: ColorFilterType--><!--Device-ResourceImageAttachmentOptions-colorFilter?: ColorFilterType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## layoutStyle

```TypeScript
layoutStyle?: ImageAttachmentLayoutStyle
```

Image layout.

**Type:** ImageAttachmentLayoutStyle

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-ResourceImageAttachmentOptions-layoutStyle?: ImageAttachmentLayoutStyle--><!--Device-ResourceImageAttachmentOptions-layoutStyle?: ImageAttachmentLayoutStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## objectFit

```TypeScript
objectFit?: ImageFit
```

Image scaling type. The **ImageFit.MATRIX** enum value is not supported.

Default value: **ImageFit.Cover**

**Type:** ImageFit

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-ResourceImageAttachmentOptions-objectFit?: ImageFit--><!--Device-ResourceImageAttachmentOptions-objectFit?: ImageFit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## resourceValue

```TypeScript
resourceValue: Optional<ResourceStr>
```

Image data source.

**Type:** Optional&lt;ResourceStr&gt;

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-ResourceImageAttachmentOptions-resourceValue: Optional<ResourceStr>--><!--Device-ResourceImageAttachmentOptions-resourceValue: Optional<ResourceStr>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
size?: SizeOptions
```

Image size.

**Type:** SizeOptions

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-ResourceImageAttachmentOptions-size?: SizeOptions--><!--Device-ResourceImageAttachmentOptions-size?: SizeOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## supportSvg2

```TypeScript
supportSvg2?: boolean
```

Whether to enable [enhanced SVG tag parsing capabilities](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md).

**true**: Enable enhanced SVG tag parsing. **false**: Use original SVG tag parsing.

Default value: **false**

**Type:** boolean

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ResourceImageAttachmentOptions-supportSvg2?: boolean--><!--Device-ResourceImageAttachmentOptions-supportSvg2?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## syncLoad

```TypeScript
syncLoad?: boolean
```

Whether to load the image synchronously. By default, the image is loaded asynchronously. During synchronous loading, the UI thread is blocked and the placeholder image is not displayed.

**true**: synchronous loading; **false**: asynchronous loading.

Default value: **false**

**Type:** boolean

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-ResourceImageAttachmentOptions-syncLoad?: boolean--><!--Device-ResourceImageAttachmentOptions-syncLoad?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## verticalAlign

```TypeScript
verticalAlign?: ImageSpanAlignment
```

Alignment mode of the image with the text.

Default value: **ImageSpanAlignment.BOTTOM**

**Type:** ImageSpanAlignment

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-ResourceImageAttachmentOptions-verticalAlign?: ImageSpanAlignment--><!--Device-ResourceImageAttachmentOptions-verticalAlign?: ImageSpanAlignment-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

