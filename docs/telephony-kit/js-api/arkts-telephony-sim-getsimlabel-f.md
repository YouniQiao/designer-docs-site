# getSimLabel

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

<a id="getsimlabel"></a>
## getSimLabel

```TypeScript
function getSimLabel(slotId: number, callback: AsyncCallback<SimLabel>): void
```

Obtains the SIM card label.

**Since:** 20

<!--Device-sim-function getSimLabel(slotId: int, callback: AsyncCallback<SimLabel>): void--><!--Device-sim-function getSimLabel(slotId: int, callback: AsyncCallback<SimLabel>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | SIM card slot ID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;SimLabel&gt; | Yes | Callback used to return the SIM card label. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getSimLabel(0, (err: BusinessError, data: sim.SimLabel) => {
  console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


<a id="getsimlabel-1"></a>
## getSimLabel

```TypeScript
function getSimLabel(slotId: number): Promise<SimLabel>
```

Obtains the SIM card label.

**Since:** 20

<!--Device-sim-function getSimLabel(slotId: int): Promise<SimLabel>--><!--Device-sim-function getSimLabel(slotId: int): Promise<SimLabel>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | SIM card slot ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SimLabel&gt; | Promise used to return the SIM card label. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getSimLabel(0).then((data: sim.SimLabel) => {
  console.info(`getSimLabel success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getSimState failed, promise: err->${JSON.stringify(err)}`);
});

```

