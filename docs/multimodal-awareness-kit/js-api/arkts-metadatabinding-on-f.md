# on

## on('operationSubmitMetadata')

```TypeScript
function on(type: 'operationSubmitMetadata', bundleName: string, callback: Callback<int>): void
```

Subscribes to a system event to obtain the encoded metadata. The application needs to register a callback to return the encoded metadata when the registered system event occurs.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.MultimodalAwareness.MetadataBinding

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'operationSubmitMetadata' | Yes | Event type. This parameter has a fixed value of  operationSubmitMetadata, indicating the system application's attempt to obtain the encoded metadata. |
| bundleName | string | Yes | Application bundle name. |
| callback | Callback&lt;int> | Yes | Callback used to return the encoded metadata. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32100001 | Internal handling failed. |
| 32100004 | Subscribe Failed. Possible causes:  1. Abnormal system capability.  2. IPC communication abnormality.  3. Algorithm loading exception. |

**Example**

```TypeScript
import { metadataBinding } from '@kit.MultimodalAwarenessKit';

let bundleName: string = '';
try {
  metadataBinding.on('operationSubmitMetadata', bundleName, (event: number) => {
    if (event == 1) {
      console.info("The screenshot request is intercepted and the app link is obtained");
    }
  });
} catch (error) {
  console.error("register screenshot event error");
}

```

