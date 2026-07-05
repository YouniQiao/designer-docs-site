# write

## write

```TypeScript
function write(data: number[]): Promise<void>
```

Writes the NDEF data to the connected NFC tag.

**起始版本：** 9

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.ConnectedTag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | number[] | 是 | Indicates the NDEF data to send, which is a byte array. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The void. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3200101 | Connected NFC tag running state is abnormal in service. |

**示例：**

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

**起始版本：** 9

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.ConnectedTag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | number[] | 是 | Indicates the NDEF data to send, which is a byte array. |
| callback | AsyncCallback&lt;void> | 是 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3200101 | Connected NFC tag running state is abnormal in service. |

**示例：**

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

