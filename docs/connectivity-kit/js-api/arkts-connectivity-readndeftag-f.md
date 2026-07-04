# readNdefTag

## Modules to Import

```TypeScript
import { connectedTag } from '@ohos.connectedTag';
```

## readNdefTag

```TypeScript
function readNdefTag(): Promise<string>
```

Reads the NDEF Data.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** read

**Required permissions:** ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.ConnectedTag

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns the NDEF Data. |

**Example**

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';

connectedTag.readNdefTag().then((data) => {
    console.info("connectedTag readNdefTag Promise data = " + data);
}).catch((err: BusinessError)=> {
    console.error("connectedTag readNdefTag Promise err: " + err);
});

```


## readNdefTag

```TypeScript
function readNdefTag(callback: AsyncCallback<string>): void
```

Reads the NDEF Data.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** read

**Required permissions:** ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.ConnectedTag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string&gt; | Yes |  |

**Example**

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';

connectedTag.readNdefTag((err, data)=> {
    if (err) {
        console.error("connectedTag readNdefTag AsyncCallback err: " + err);
    } else {
        console.info("connectedTag readNdefTag AsyncCallback data: " + data);
    }
});

```

