# off

## off('operationSubmitMetadata')

```TypeScript
function off(type: 'operationSubmitMetadata', bundleName: string, callback?: Callback<int>): void
```

Unsubscribes from system events that are used to obtain the encoded metadata. The respective callback will be unregistered.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.MultimodalAwareness.MetadataBinding

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'operationSubmitMetadata' | Yes | Event type. This parameter has a fixed value of  operationSubmitMetadata, indicating the system application's attempt to obtain the encoded metadata. |
| bundleName | string | Yes | Application bundle name. |
| callback | Callback&lt;int> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32100001 | Internal handling failed. |
| 32100005 | Unsubscribe Failed. Possible causes:  1. Abnormal system capability.  2. IPC communication abnormality. |

**Example**

```TypeScript
import { metadataBinding } from '@kit.MultimodalAwarenessKit';

let bundleName: string = '';
try {
  metadataBinding.off('operationSubmitMetadata', bundleName, (event: number) => {
  });
} catch (error) {
  console.error("unsubscript screenshot event" + error);
}

```

