# getImageSourceSupportedFormats

## getImageSourceSupportedFormats

```TypeScript
function getImageSourceSupportedFormats(): string[]
```

获取支持解码的图片格式，图片格式以mime type表示。

**Since:** 20

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Return value:**

| Type | Description |
| --- | --- |
| string[] | 支持解码的图片格式（mime type）列表。 |

**Example**

```TypeScript
async function GetImageSourceSupportedFormats() {
    let formats = image.getImageSourceSupportedFormats();
    console.info('formats:', formats);
}

async function IsSupportedTiffFormat() {
    let formats = image.getImageSourceSupportedFormats();
    return formats.includes("image/tiff");
}


```

