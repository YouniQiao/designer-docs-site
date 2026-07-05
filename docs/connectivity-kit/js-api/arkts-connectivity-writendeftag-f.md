# writeNdefTag

## Modules to Import

```TypeScript
import { connectedTag } from '@ohos.connectedTag';
```

## writeNdefTag

```TypeScript
function writeNdefTag(data: string): Promise<void>
```

Writes the NDEF Data.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** write

**Required permissions:** ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.ConnectedTag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string | Yes | The Data to write. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The void. |

**Example**

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let rawData = "010203"; // change it to be correct.
connectedTag.writeNdefTag(rawData).then(() => {
    console.info("connectedTag.writeNdefTag Promise success.");
}).catch((err: BusinessError)=> {
    console.error("connectedTag.writeNdefTag Promise err: " + err);
});

```


## writeNdefTag

```TypeScript
function writeNdefTag(data: string, callback: AsyncCallback<void>): void
```

Writes the NDEF Data.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** write

**Required permissions:** ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.ConnectedTag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string | Yes | The Data to write. |
| callback | AsyncCallback&lt;void&gt; | Yes |  |

**Example**

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';

let rawData = "010203"; // change it to be correct.
connectedTag.writeNdefTag(rawData, (err)=> {
    if (err) {
        console.error("connectedTag.writeNdefTag AsyncCallback err: " + err);
    } else {
        console.info("connectedTag.writeNdefTag AsyncCallback success.");
    }
});

```

