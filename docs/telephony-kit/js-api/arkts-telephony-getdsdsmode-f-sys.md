# getDsdsMode (System API)

## Modules to Import

```TypeScript
import { sim } from '@ohos.telephony.sim';
```

## getDsdsMode

```TypeScript
function getDsdsMode(callback: AsyncCallback<DsdsMode>): void
```

Obtains the value of dsds mode.

**Since:** 11

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DsdsMode&gt; | Yes | Indicates the callback forgetting one of the following dsds mode states:&lt;ul&gt;&lt;li&gt;{@code DsdsMode#DSDS_MODE_V2}&lt;li&gt;{@code DsdsMode#DSDS_MODE_V3}&lt;li&gt;{@code DsdsMode#DSDS_MODE_V5_TDM}&lt;li&gt;{@code DsdsMode#DSDS_MODE_V5_DSDA}&lt;/ul&gt; |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect toservice. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

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

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DsdsMode&gt; | Returns one of the following dsds modestates:&lt;ul&gt;&lt;li&gt;{@code DsdsMode#DSDS_MODE_V2}&lt;li&gt;{@code DsdsMode#DSDS_MODE_V3}&lt;li&gt;{@code DsdsMode#DSDS_MODE_V5_TDM}&lt;li&gt;{@code DsdsMode#DSDS_MODE_V5_DSDA}&lt;/ul&gt; |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect toservice. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

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

