# on

## on('cellInfoChange')

```TypeScript
function on(type: 'cellInfoChange', callback: Callback<Array<CellInformation>>): void
```

Callback when the cell information corresponding to the default sim card is updated.

**起始版本：** 8

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Telephony.StateRegistry

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cellInfoChange' | 是 | Event type. Indicates the cellInfoChange event to be subscribed to. |
| callback | Callback&lt;Array&lt;CellInformation>> | 是 | Indicates the callback for getting  an array of instances of the classes derived from {@link CellInformation}. |

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
import { radio } from '@kit.TelephonyKit';

observer.on('cellInfoChange', (data: Array<radio.CellInformation>) => {
    console.info("on cellInfoChange, data:" + JSON.stringify(data));
});

```

## on('cellInfoChange')

```TypeScript
function on(type: 'cellInfoChange', options: ObserverOptions, callback: Callback<Array<CellInformation>>): void
```

Callback when the cell information corresponding to a monitored {@code slotId} is updated.

**起始版本：** 11

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Telephony.StateRegistry

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cellInfoChange' | 是 | Event type. Indicates the cellInfoChange event to be subscribed to. |
| options | ObserverOptions | 是 | Indicates the options for observer. |
| callback | Callback&lt;Array&lt;CellInformation>> | 是 | Indicates the callback for getting  an array of instances of the classes derived from {@link CellInformation}. |

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
import { radio } from '@kit.TelephonyKit';

let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('cellInfoChange', options, (data: Array<radio.CellInformation>) => {
    console.info("on cellInfoChange, data:" + JSON.stringify(data));
});

```

