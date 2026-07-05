# newSEService

## newSEService

```TypeScript
function newSEService(type: 'serviceState', callback: Callback<ServiceState>): SEService
```

Establish a new connection that can be used to connect to all the SEs available in the system. The connection process can be quite long, so it happens in an asynchronous way. It is usable only if the specified callback is called or if isConnected() returns true.

**Since:** 10

**Deprecated since:** 12

**Substitute:** omapi#createService

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serviceState' | Yes | nfc serviceState |
| callback | Callback&lt;ServiceState> | Yes | The callback to return the service. |

**Return value:**

| Type | Description |
| --- | --- |
| SEService | The new SEService instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |

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

