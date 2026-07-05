# readNdefTag

## readNdefTag

```TypeScript
function readNdefTag(): Promise<string>
```

Reads the NDEF Data.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.connectedTag/connectedTag#read

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.ConnectedTag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns the NDEF Data. |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.connectedTag/connectedTag#read

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.ConnectedTag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | 是 |  |

**示例：**

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

