# disableCellularData

## disableCellularData

```TypeScript
function disableCellularData(callback: AsyncCallback<void>): void
```

Disable cellular data services.

**起始版本：** 7

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CellularData

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | The callback of disableCellularData. |

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

data.disableCellularData((err: BusinessError) => {
    if(err) {
        console.error(`disableCellularData fail. code: ${err.code}, message: ${err.message}`);
    } else {
        console.info(`disableCellularData success`);
    }
});

```

## disableCellularData

```TypeScript
function disableCellularData(): Promise<void>
```

Disable cellular data services.

**起始版本：** 7

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CellularData

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the disableCellularData. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**示例：**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.disableCellularData().then(() => {
    console.info(`disableCellularData success.`);
}).catch((err: BusinessError) => {
    console.error(`disableCellularData fail. code: ${err.code}, message: ${err.message}`);
});

```

