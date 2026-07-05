# off

## off('imsRegStateChange')

```TypeScript
function off(type: 'imsRegStateChange', slotId: int, imsType: ImsServiceType, callback?: Callback<ImsRegInfo>): void
```

Unsubscribe from imsRegStateChange event.

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imsRegStateChange' | Yes | Event type. Indicates the imsRegStateChange event to unsubscribe from. |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| imsType | ImsServiceType | Yes | Indicates the ims service type of the {@link ImsServiceType}. |
| callback | Callback&lt;ImsRegInfo> | No | Indicates the callback for getting  an instance of the {@link ImsRegInfo} class. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
let slotId: number = 0;
let mode: radio.ImsServiceType = radio.ImsServiceType.TYPE_VIDEO;
radio.off('imsRegStateChange', slotId, mode, (data: radio.ImsRegInfo) => {
    console.info(`off imsRegStateChange success, callback: data->${JSON.stringify(data)}`);
});

```

