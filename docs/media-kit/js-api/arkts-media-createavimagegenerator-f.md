# createAVImageGenerator

## Modules to Import

```TypeScript
import { media } from '@ohos.multimedia.media';
```

## createAVImageGenerator

```TypeScript
function createAVImageGenerator(): Promise<AVImageGenerator>
```

Creates an AVImageGenerator instance. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Media.AVImageGenerator

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVImageGenerator&gt; | Promise used to return the result. If the operation is successful, anAVImageGenerator instance is returned; otherwise, **null** is returned. The API can be used to obtain a videothumbnail. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400101](../errorcode-media.md#5400101-memory-allocation-failed) | No memory. Returned by promise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let avImageGenerator: media.AVImageGenerator;
media.createAVImageGenerator().then((generator: media.AVImageGenerator) => {
  if (generator) {
    avImageGenerator = generator;
    console.info('Succeeded in creating AVImageGenerator');
  } else {
    console.error('Failed to create AVImageGenerator');
  }
}).catch((error: BusinessError) => {
  console.error(`Failed to create AVImageGenerator, error message:${error.message}`);
});

```


## createAVImageGenerator

```TypeScript
function createAVImageGenerator(callback: AsyncCallback<AVImageGenerator>): void
```

Creates an AVImageGenerator instance. This API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Media.AVImageGenerator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVImageGenerator&gt; | Yes | Callback used to return the result. If the operation issuccessful, an AVImageGenerator instance is returned; otherwise, **null** is returned. The API can be used toobtain a video thumbnail. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400101](../errorcode-media.md#5400101-memory-allocation-failed) | No memory. Returned by callback. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let avImageGenerator: media.AVImageGenerator;
media.createAVImageGenerator((error: BusinessError, generator: media.AVImageGenerator) => {
  if (generator) {
    avImageGenerator = generator;
    console.info('Succeeded in creating AVImageGenerator');
  } else {
    console.error(`Failed to create AVImageGenerator, error message:${error.message}`);
  }
});

```

