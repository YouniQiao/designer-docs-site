# getSimState

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

## getSimState

```TypeScript
function getSimState(slotId: number, callback: AsyncCallback<SimState>): void
```

Obtains the state of the SIM card in a specified slot.

**Since:** 6

<!--Device-sim-function getSimState(slotId: int, callback: AsyncCallback<SimState>): void--><!--Device-sim-function getSimState(slotId: int, callback: AsyncCallback<SimState>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from {@code 0} to the maximum card slot index number supported by the device. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<SimState> | Yes | Indicates the callback for getting one of the following SIM card states:&lt;ul&gt;&lt;li&gt;{@code SimState#SIM_STATE_UNKNOWN}&lt;li&gt;{@code SimState#SIM_STATE_NOT_PRESENT}&lt;li&gt;{@code SimState#SIM_STATE_LOCKED}&lt;li&gt;{@code SimState#SIM_STATE_NOT_READY}&lt;li&gt;{@code SimState#SIM_STATE_READY}&lt;li&gt;{@code SimState#SIM_STATE_LOADED}&lt;/ul&gt; |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getSimState(0, (err: BusinessError, data: sim.SimState) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


## getSimState

```TypeScript
function getSimState(slotId: number): Promise<SimState>
```

Obtains the state of the SIM card in a specified slot.

**Since:** 6

<!--Device-sim-function getSimState(slotId: int): Promise<SimState>--><!--Device-sim-function getSimState(slotId: int): Promise<SimState>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from {@code 0} to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<SimState> | Returns one of the following SIM card states:&lt;ul&gt;&lt;li&gt;{@code SimState#SIM_STATE_UNKNOWN}&lt;li&gt;{@code SimState#SIM_STATE_NOT_PRESENT}&lt;li&gt;{@code SimState#SIM_STATE_LOCKED}&lt;li&gt;{@code SimState#SIM_STATE_NOT_READY}&lt;li&gt;{@code SimState#SIM_STATE_READY}&lt;li&gt;{@code SimState#SIM_STATE_LOADED}&lt;/ul&gt; |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getSimState(0).then((data: sim.SimState) => {
    console.info(`getSimState success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getSimState failed, promise: err->${JSON.stringify(err)}`);
});

```

