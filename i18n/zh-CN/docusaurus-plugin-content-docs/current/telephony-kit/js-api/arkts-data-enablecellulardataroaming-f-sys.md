# enableCellularDataRoaming

## enableCellularDataRoaming

```TypeScript
function enableCellularDataRoaming(slotId: int, callback: AsyncCallback<void>): void
```

Enable cellular data roaming.

**起始版本：** 7

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CellularData

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the ID of a card slot.  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2. |
| callback | AsyncCallback&lt;void> | 是 | The callback of enableCellularDataRoaming. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**示例：**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.enableCellularDataRoaming(0, (err: BusinessError) => {
    if(err) {
        console.error(`enableCellularDataRoaming fail. code: ${err.code}, message: ${err.message}`);
    } else {
        console.info(`enableCellularDataRoaming success`);
    }
});

```

## enableCellularDataRoaming

```TypeScript
function enableCellularDataRoaming(slotId: int): Promise<void>
```

Enable cellular data roaming.

**起始版本：** 7

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CellularData

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the ID of a card slot.  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the enableCellularDataRoaming. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**示例：**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.enableCellularDataRoaming(0).then(() => {
    console.info(`enableCellularDataRoaming success.`);
}).catch((err: BusinessError) => {
    console.error(`enableCellularDataRoaming fail. code: ${err.code}, message: ${err.message}`);
});

```

