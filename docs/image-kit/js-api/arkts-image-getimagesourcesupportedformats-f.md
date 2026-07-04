# getImageSourceSupportedFormats

## Modules to Import

```TypeScript
import { image } from '@ohos.multimedia.image';
```

## getImageSourceSupportedFormats

```TypeScript
function getImageSourceSupportedFormats(): string[]
```

Obtains the supported decoding formats, represented by MIME types.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Return value:**

| Type | Description |
| --- | --- |
| string[] | List of supported decoding formats (MIME types). |

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

