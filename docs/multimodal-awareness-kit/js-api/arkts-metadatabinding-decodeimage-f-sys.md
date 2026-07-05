# decodeImage

## decodeImage

```TypeScript
function decodeImage(encodedImage: image.PixelMap): Promise<string>
```

Decodes the information carried in the image. This API uses a promise to return the result.

**Since:** 18

**System capability:** SystemCapability.MultimodalAwareness.MetadataBinding

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encodedImage | image.PixelMap | Yes | Image with metadata encoded. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise object, which is used to return the encoded metadata of the image. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission check failed. A non-system application uses the system API. |
| 32100001 | Internal handling failed. |
| 32100003 | Decode process fail. Possible causes:  1. Image is not an encoded Image.  2. Image destroyed, decoding failed. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';
import { metadataBinding } from '@kit.MultimodalAwarenessKit';
import { BusinessError } from '@kit.BasicServicesKit';

let encodeImage: image.PixelMap | undefined = undefined;
let captureMetadata: string = "";
metadataBinding.decodeImage(encodeImage).then((metadata: string) => {
  captureMetadata = metadata;
}).catch((error: BusinessError) => {
  console.error("decode image error" + error);
}); 

```

