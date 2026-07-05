# isCellularDataEnabled

## isCellularDataEnabled

```TypeScript
function isCellularDataEnabled(callback: AsyncCallback<boolean>): void
```

Check whether cellular data services are enabled.

**起始版本：** 7

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Telephony.CellularData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Indicates the callback for checking whether cellular data services  are enabled. Returns {@code true} if cellular data services are enabled; returns {@code false} otherwise. |

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

data.isCellularDataEnabled((err: BusinessError, contextData: boolean) => {
    if(err) {
        console.error(`isCellularDataEnabled fail. code: ${err.code}, message: ${err.message}, contextData: ${contextData}`);
    } else {
        console.info(`isCellularDataEnabled success`);
    }
});

```

## isCellularDataEnabled

```TypeScript
function isCellularDataEnabled(): Promise<boolean>
```

Check whether cellular data services are enabled.

**起始版本：** 7

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Telephony.CellularData

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if cellular data services are enabled.  Returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**示例：**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.isCellularDataEnabled().then((contextData: boolean) => {
    console.info(`isCellularDataEnabled success, contextData: ${contextData}`);
}).catch((err: BusinessError) => {
    console.error(`isCellularDataEnabled fail. code: ${err.code}, message: ${err.message}`);
});

```

