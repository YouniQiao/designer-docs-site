# writeNdefTag

## writeNdefTag

```TypeScript
function writeNdefTag(data: string): Promise<void>
```

Writes the NDEF Data.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.connectedTag/connectedTag#write

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.ConnectedTag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | string | 是 | The Data to write. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The void. |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.connectedTag/connectedTag#write

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.ConnectedTag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | string | 是 | The Data to write. |
| callback | AsyncCallback&lt;void> | 是 |  |

**示例：**

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

