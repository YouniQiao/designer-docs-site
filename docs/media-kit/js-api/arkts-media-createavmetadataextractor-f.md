# createAVMetadataExtractor

## Modules to Import

```TypeScript
import { media } from '@ohos.multimedia.media';
```

## createAVMetadataExtractor

```TypeScript
function createAVMetadataExtractor(): Promise<AVMetadataExtractor>
```

Creates an AVMetadataExtractor instance. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVMetadataExtractor

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVMetadataExtractor&gt; | Promise used to return the AVMetadataExtractor instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400101](../errorcode-media.md#5400101-memory-allocation-failed) | No memory. Returned by promise. |

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

Creates an AVMetadataExtractor instance. This API uses an asynchronous callback to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Media.AVMetadataExtractor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVMetadataExtractor&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined** and **data** is the AVMetadataExtractor instance created; otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400101](../errorcode-media.md#5400101-memory-allocation-failed) | No memory. Returned by callback. |

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

