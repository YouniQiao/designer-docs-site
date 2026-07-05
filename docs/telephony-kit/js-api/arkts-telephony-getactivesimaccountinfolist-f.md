# getActiveSimAccountInfoList

## Modules to Import

```TypeScript
import { sim } from '@ohos.telephony.sim';
```

## getActiveSimAccountInfoList

```TypeScript
function getActiveSimAccountInfoList(callback: AsyncCallback<Array<IccAccountInfo>>): void
```

Get the list of active SIM card account information.

**Since:** 10

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;IccAccountInfo&gt;&gt; | Yes | The callback is used toreturn the array of {@link IccAccountInfo}. The ICCID and phone number will be nullif has no ohos.permission.GET_TELEPHONY_STATE. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300004](../errorcode-telephony.md#8300004-sim-card-not-detected) | No SIM card found. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getActiveSimAccountInfoList((err: BusinessError, data: Array<sim.IccAccountInfo>) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


## getActiveSimAccountInfoList

```TypeScript
function getActiveSimAccountInfoList(): Promise<Array<IccAccountInfo>>
```

Get the list of active SIM card account information.

**Since:** 10

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;IccAccountInfo&gt;&gt; | Returns the array of {@link IccAccountInfo}. The ICCIDand phone number will be null if has no ohos.permission.GET_TELEPHONY_STATE. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300004](../errorcode-telephony.md#8300004-sim-card-not-detected) | No SIM card found. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getActiveSimAccountInfoList().then((data: Array<sim.IccAccountInfo>) => {
    console.info(`getActiveSimAccountInfoList success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getActiveSimAccountInfoList failed, promise: err->${JSON.stringify(err)}`);
});

```

