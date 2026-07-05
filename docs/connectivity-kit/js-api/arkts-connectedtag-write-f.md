# write

## write

```TypeScript
function write(data: number[]): Promise<void>
```

Writes the NDEF data to the connected NFC tag.

**Since:** 9

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.ConnectedTag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | number[] | Yes | Indicates the NDEF data to send, which is a byte array. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3200101 | Connected NFC tag running state is abnormal in service. |

**Example**

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let rawData = [0x01, 0x02, 0x03]; // change it to be correct.
connectedTag.write(rawData).then(() => {
    console.info("connectedTag.write Promise success.");
}).catch((err: BusinessError)=> {
    console.error("connectedTag.write Promise err: " + err);
});

```

## write

```TypeScript
function write(data: number[], callback: AsyncCallback<void>): void
```

Writes the NDEF data to the connected NFC tag.

**Since:** 9

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.ConnectedTag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | number[] | Yes | Indicates the NDEF data to send, which is a byte array. |
| callback | AsyncCallback&lt;void> | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3200101 | Connected NFC tag running state is abnormal in service. |

**Example**

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';

let rawData = [0x01, 0x02, 0x03]; // change it to be correct.
connectedTag.write(rawData, (err)=> {
    if (err) {
        console.error("connectedTag.write AsyncCallback err: " + err);
    } else {
        console.info("connectedTag.write AsyncCallback success.");
    }
});

```

