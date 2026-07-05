# isCellularDataRoamingEnabled

## isCellularDataRoamingEnabled

```TypeScript
function isCellularDataRoamingEnabled(slotId: int, callback: AsyncCallback<boolean>): void
```

Check whether roaming is enabled for cellular data services.

**起始版本：** 7

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Telephony.CellularData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the ID of a card slot.  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2. |
| callback | AsyncCallback&lt;boolean> | 是 | Indicates the callback for checking whether roaming is enabled  for cellular data services. Returns {@code true} if roaming is enabled for cellular data services;  returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**示例：**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.isCellularDataRoamingEnabled(0, (err: BusinessError, contextData: boolean) => {
    if(err) {
        console.error(`isCellularDataRoamingEnabled fail. code: ${err.code}, message: ${err.message}, contextData: ${contextData}`);
    } else {
        console.info(`isCellularDataRoamingEnabled success`);
    }
});

```

## isCellularDataRoamingEnabled

```TypeScript
function isCellularDataRoamingEnabled(slotId: int): Promise<boolean>
```

Check whether roaming is enabled for cellular data services.

**起始版本：** 7

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Telephony.CellularData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the ID of a card slot.  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if roaming is enabled for cellular data services.  Returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**示例：**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.isCellularDataRoamingEnabled(0).then((contextData: boolean) => {
    console.info(`isCellularDataRoamingEnabled success, contextData: ${contextData}`);
}).catch((err: BusinessError) => {
    console.error(`isCellularDataRoamingEnabled fail. code: ${err.code}, message: ${err.message}`);
});

```

