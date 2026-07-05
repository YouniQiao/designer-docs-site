# getDsdsMode

## getDsdsMode

```TypeScript
function getDsdsMode(callback: AsyncCallback<DsdsMode>): void
```

Obtains the value of dsds mode.

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DsdsMode> | Yes | Indicates the callback for  getting one of the following dsds mode states:   {@code DsdsMode#DSDS_MODE_V2}  {@code DsdsMode#DSDS_MODE_V3}  {@code DsdsMode#DSDS_MODE_V5_TDM}  {@code DsdsMode#DSDS_MODE_V5_DSDA} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300002 | Operation failed. Cannot connect to  service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getDsdsMode((err: BusinessError, data: sim.DsdsMode) => {
    if (err) {
        console.error(`getDsdsMode failed, callback: err->${JSON.stringify(err)}`);
    } else {
        console.info(`getDsdsMode success, callback: data->${JSON.stringify(data)}`);
    }
});

```

## getDsdsMode

```TypeScript
function getDsdsMode(): Promise<DsdsMode>
```

Obtains the value of dsds mode.

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DsdsMode> | Returns one of the following dsds mode  states:   {@code DsdsMode#DSDS_MODE_V2}  {@code DsdsMode#DSDS_MODE_V3}  {@code DsdsMode#DSDS_MODE_V5_TDM}  {@code DsdsMode#DSDS_MODE_V5_DSDA} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300002 | Operation failed. Cannot connect to  service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

let promise = sim.getDsdsMode();
promise.then((data: sim.DsdsMode) => {
    console.info(`getDsdsMode success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getDsdsMode failed, promise: err->${JSON.stringify(err)}`);
});

```

