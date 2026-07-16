# ImageSpan

As a child of the [Text]{@link text} and [ContainerSpan]{@link container_span} components, the **ImageSpan**
component is used to display inline images.


## ImageSpan

```TypeScript
ImageSpan(value: ResourceStr | PixelMap)
```

Defines the constructor of ImageSpan.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceStr \| PixelMap | Yes | Image source. Both local and network images are supported.<br>When usingan image referenced using a relative path, for example, **ImageSpan("common/test.jpg")**, the **ImageSpan**component cannot be called across bundles or modules. Therefore, you are advised to use **$r** to referenceimage resources that need to be used globally.<br>- The supported formats include PNG, JPG, BMP, SVG, GIF, andHEIF.<br>- Base64 strings are supported. The value format is data:image/[png\|jpeg\|bmp\|webp\|heif];base64,[base64 data], where *[base64 data]* is a Base64 string.<br>- Character string prefixed with file://data/storage, which is used to read image resources in the file folder in the application installation directory.Ensure that the application has the read permission to the files in the specified path. |

## Summary

- [ImageLoadResult](arkts-arkui-imagespan-imageloadresult-i.md)
- [ImageCompleteCallback](arkts-arkui-imagespan-imagecompletecallback-t.md)
