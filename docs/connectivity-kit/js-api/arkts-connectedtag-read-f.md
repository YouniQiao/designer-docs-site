# read

## read

```TypeScript
function read(): Promise<number[]>
```

Reads the NDEF data from the connected NFC tag.

**Since:** 9

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.ConnectedTag

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number[]> | The reponse NDEF data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3200101 | Connected NFC tag running state is abnormal in service. |

**Example**

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';

connectedTag.read().then((data) => {
    console.info("connectedTag read Promise data = " + data);
}).catch((err: BusinessError)=> {
    console.error("connectedTag read Promise err: " + err);
});

```

## read

```TypeScript
function read(callback: AsyncCallback<number[]>): void
```

Reads the NDEF data from the connected NFC tag.

**Since:** 9

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.ConnectedTag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number[]> | Yes | The callback to receive the data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3200101 | Connected NFC tag running state is abnormal in service. |

**Example**

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';

connectedTag.read((err, data)=> {
    if (err) {
        console.error("connectedTag read AsyncCallback err: " + err);
    } else {
        console.info("connectedTag read AsyncCallback data: " + data);
    }
});

```

