# getImagePackerSupportedFormats

## getImagePackerSupportedFormats

```TypeScript
function getImagePackerSupportedFormats(): string[]
```

获取支持编码的图片格式，图片格式以mime type表示。

**Since:** 20

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Return value:**

| Type | Description |
| --- | --- |
| string[] | 支持编码的图片格式（mime type）列表。 |

**Example**

```TypeScript
async function GetImagePackerSupportedFormats() {
    let formats = image.getImagePackerSupportedFormats();
    console.info('formats:', formats);
}

```

