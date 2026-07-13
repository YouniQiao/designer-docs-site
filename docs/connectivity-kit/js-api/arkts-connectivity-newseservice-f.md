# newSEService

## Modules to Import

```TypeScript
import { omapi } from '@kit.ConnectivityKit';
```

## newSEService

```TypeScript
function newSEService(type: 'serviceState', callback: Callback<ServiceState>): SEService
```

Establish a new connection that can be used to connect to all the SEs available in the system.
The connection process can be quite long, so it happens in an asynchronous way. It is usable only
if the specified callback is called or if isConnected() returns true.

**Since:** 10

**Deprecated since:** 12

**Substitutes:** [createService](arkts-connectivity-createservice-f.md#createservice-1)

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serviceState' | Yes | nfc serviceState |
| callback | Callback&lt;ServiceState&gt; | Yes | The callback to return the service. |

**Return value:**

| Type | Description |
| --- | --- |
| SEService | The new SEService instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { omapi } from '@kit.ConnectivityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let seService : omapi.SEService;

function secureElementDemo() {
    // Obtain the service.
    try {
        seService = omapi.newSEService("serviceState", (state) => {
        hilog.info(0x0000, 'testTag', 'se service state = %{public}s', JSON.stringify(state));
        });
    } catch (error) {
        hilog.error(0x0000, 'testTag', 'newSEService error %{public}s', JSON.stringify(error));
    }
    if (seService == undefined || !seService.isConnected()) {
        hilog.error(0x0000, 'testTag', 'secure element service disconnected.');
        return;
    }
}

```

