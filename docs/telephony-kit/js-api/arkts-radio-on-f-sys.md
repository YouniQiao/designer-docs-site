# on

## on('imsRegStateChange')

```TypeScript
function on(type: 'imsRegStateChange', slotId: int, imsType: ImsServiceType, callback: Callback<ImsRegInfo>): void
```

Called when the IMS registration state of specified IMS service type corresponding to a monitored {@code slotId} updates.

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imsRegStateChange' | Yes | Event type. Indicates the imsRegStateChange event to be subscribed to. |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| imsType | ImsServiceType | Yes | Indicates the ims service type of the {@link ImsServiceType}. |
| callback | Callback&lt;ImsRegInfo> | Yes | Indicates the callback for getting an instance of  the {@link ImsRegInfo} class. |

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
radio.on('imsRegStateChange', slotId, mode, (data: radio.ImsRegInfo) => {
    console.info(`on imsRegStateChange success, callback: data->${JSON.stringify(data)}`);
});

```

