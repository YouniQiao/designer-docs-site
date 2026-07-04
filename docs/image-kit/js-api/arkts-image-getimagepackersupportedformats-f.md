# getImagePackerSupportedFormats

## Modules to Import

```TypeScript
import { image } from '@ohos.multimedia.image';
```

## getImagePackerSupportedFormats

```TypeScript
function getImagePackerSupportedFormats(): string[]
```

Obtains the supported encoding formats, represented by MIME types.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Return value:**

| Type | Description |
| --- | --- |
| string[] | List of supported encoding formats (MIME types). |

**Example**

```TypeScript
async function GetImagePackerSupportedFormats() {
    let formats = image.getImagePackerSupportedFormats();
    console.info('formats:', formats);
}

```

