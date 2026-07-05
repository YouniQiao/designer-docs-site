# off

## off('imsRegStateChange')

```TypeScript
function off(type: 'imsRegStateChange', slotId: int, imsType: ImsServiceType, callback?: Callback<ImsRegInfo>): void
```

Unsubscribe from imsRegStateChange event.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'imsRegStateChange' | 是 | Event type. Indicates the imsRegStateChange event to unsubscribe from. |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| imsType | ImsServiceType | 是 | Indicates the ims service type of the {@link ImsServiceType}. |
| callback | Callback&lt;ImsRegInfo> | 否 | Indicates the callback for getting  an instance of the {@link ImsRegInfo} class. |

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
let slotId: number = 0;
let mode: radio.ImsServiceType = radio.ImsServiceType.TYPE_VIDEO;
radio.off('imsRegStateChange', slotId, mode, (data: radio.ImsRegInfo) => {
    console.info(`off imsRegStateChange success, callback: data->${JSON.stringify(data)}`);
});

```

