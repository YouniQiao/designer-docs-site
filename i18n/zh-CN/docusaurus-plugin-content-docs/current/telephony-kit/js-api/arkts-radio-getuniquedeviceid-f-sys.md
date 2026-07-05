# getUniqueDeviceId

## getUniqueDeviceId

```TypeScript
function getUniqueDeviceId(slotId: int, callback: AsyncCallback<string>): void
```

Obtains the unique device ID of a specified card slot of the device. If the device is registered with a 3GPP-compliant network, the international mobile equipment identity (IMEI) is returned. If the device is registered with a 3GPP2-compliant network, the mobile equipment identifier (MEID) is returned.

**起始版本：** 8

**需要权限：** 

 ohos.permission.GET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |
| callback | AsyncCallback&lt;string> | 是 | Indicates the callback for getting the unique device ID.  Returns an empty string if the unique device ID does not exist. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getUniqueDeviceId(slotId, (err: BusinessError, data: string) => {
    if (err) {
        console.error(`getUniqueDeviceId failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getUniqueDeviceId success, callback: data->${JSON.stringify(data)}`);
});

```

## getUniqueDeviceId

```TypeScript
function getUniqueDeviceId(slotId?: int): Promise<string>
```

Obtains the unique device ID of a specified card slot of the device. If the device is registered with a 3GPP-compliant network, the international mobile equipment identity (IMEI) is returned. If the device is registered with a 3GPP2-compliant network, the mobile equipment identifier (MEID) is returned.

**起始版本：** 8

**需要权限：** 

 ohos.permission.GET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 否 | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns the unique device ID.  Returns an empty string if the unique device ID does not exist. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getUniqueDeviceId(slotId).then((data: string) => {
    console.info(`getUniqueDeviceId success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getUniqueDeviceId failed, promise: err->${JSON.stringify(err)}`);
});

```

## getUniqueDeviceId

```TypeScript
function getUniqueDeviceId(callback: AsyncCallback<string>): void
```

Obtains the unique device ID of a specified card slot of the device. If the device is registered with a 3GPP-compliant network, the international mobile equipment identity (IMEI) is returned. If the device is registered with a 3GPP2-compliant network, the mobile equipment identifier (MEID) is returned.

**起始版本：** 8

**需要权限：** 

 ohos.permission.GET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | 是 | Indicates the callback for getting the unique device ID.  Returns an empty string if the unique device ID does not exist. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

radio.getUniqueDeviceId((err: BusinessError, data: string) => {
    if (err) {
        console.error(`getUniqueDeviceId failed, callback: err->${JSON.stringify(err)}}`);
        return;
    }
    console.info(`getUniqueDeviceId success, callback: data->${JSON.stringify(data)}`);
});

```

