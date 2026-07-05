# decodeImage

## decodeImage

```TypeScript
function decodeImage(encodedImage: image.PixelMap): Promise<string>
```

Decodes the information carried in the image. This API uses a promise to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.MultimodalAwareness.MetadataBinding

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| encodedImage | image.PixelMap | 是 | Image with metadata encoded. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise object, which is used to return the encoded metadata of the image. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission check failed. A non-system application uses the system API. |
| 32100001 | Internal handling failed. |
| 32100003 | Decode process fail. Possible causes:  1. Image is not an encoded Image.  2. Image destroyed, decoding failed. |

**示例：**

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

