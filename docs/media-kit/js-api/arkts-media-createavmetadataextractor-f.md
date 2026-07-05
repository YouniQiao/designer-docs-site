# createAVMetadataExtractor

## createAVMetadataExtractor

```TypeScript
function createAVMetadataExtractor(): Promise<AVMetadataExtractor>
```

创建AVMetadataExtractor实例。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVMetadataExtractor

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVMetadataExtractor> | Promise对象。异步返回元数据获取类对象（AVMetadataExtractor）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400101 | No memory. Returned by promise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let avMetadataExtractor: media.AVMetadataExtractor;
media.createAVMetadataExtractor().then((extractor: media.AVMetadataExtractor) => {
  if (extractor) {
    avMetadataExtractor = extractor;
    console.info('Succeeded in creating AVMetadataExtractor');
  } else {
    console.error(`Failed to create AVMetadataExtractor`);
  }
}).catch((error: BusinessError) => {
  console.error(`Failed to create AVMetadataExtractor, error message:${error.message}`);
});

```

## createAVMetadataExtractor

```TypeScript
function createAVMetadataExtractor(callback: AsyncCallback<AVMetadataExtractor>): void
```

创建AVMetadataExtractor实例。使用callback异步回调。

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVMetadataExtractor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVMetadataExtractor> | Yes | 回调函数。当创建AVMetadataExtractor实例成功，err为undefined，data为获取到的  AVMetadataExtractor实例，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400101 | No memory. Returned by callback. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let avMetadataExtractor: media.AVMetadataExtractor;
media.createAVMetadataExtractor((error: BusinessError, extractor: media.AVMetadataExtractor) => {
  if (extractor) {
    avMetadataExtractor = extractor;
    console.info('Succeeded in creating AVMetadataExtractor');
  } else {
    console.error(`Failed to create AVMetadataExtractor, error message:${error.message}`);
  }
});

```

