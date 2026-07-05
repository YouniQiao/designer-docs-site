# getImsRegInfo

## getImsRegInfo

```TypeScript
function getImsRegInfo(slotId: int, imsType: ImsServiceType, callback: AsyncCallback<ImsRegInfo>): void
```

Get the IMS registration state info of specified IMS service type.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| imsType | ImsServiceType | 是 | Indicates the ims service type of the {@link ImsServiceType}. |
| callback | AsyncCallback&lt;ImsRegInfo> | 是 | Indicates an instance of the {@link ImsRegInfo} class. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
let mode: radio.ImsServiceType = radio.ImsServiceType.TYPE_VIDEO;
radio.getImsRegInfo(slotId, mode, (err: BusinessError, data: radio.ImsRegInfo) => {
    if (err) {
        console.error(`getImsRegInfo failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getImsRegInfo success, callback: data->${JSON.stringify(data)}`);
});

```

## getImsRegInfo

```TypeScript
function getImsRegInfo(slotId: int, imsType: ImsServiceType): Promise<ImsRegInfo>
```

Get the IMS registration state info of specified IMS service type.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| imsType | ImsServiceType | 是 | Indicates the ims service type of the {@link ImsServiceType}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ImsRegInfo> | Returns an instance of the {@link ImsRegInfo} class. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
let mode: radio.ImsServiceType = radio.ImsServiceType.TYPE_VIDEO;
radio.getImsRegInfo(slotId, mode).then((data: radio.ImsRegInfo) => {
    console.info(`getImsRegInfo success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getImsRegInfo failed, promise: err->${JSON.stringify(err)}`);
});

```

