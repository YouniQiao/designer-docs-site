# getCrossingSwitchState (System API)

## Modules to Import

```TypeScript
import { cooperate } from '@kit.DistributedServiceKit';
```

## getCrossingSwitchState

```TypeScript
function getCrossingSwitchState(networkId: string, callback: AsyncCallback<boolean>): void
```

Obtains the screen hopping status of the target device. This API uses an asynchronous callback to return the
result.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** getCooperateSwitchState(networkId:

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | Descriptor of the target device for screen hopping. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. The value **true** indicates thatscreen hopping is enabled, and the value **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types.<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let deviceDescriptor = "networkId";
try {
  cooperate.getCrossingSwitchState(deviceDescriptor, (error: BusinessError, data: boolean) => {
    if (error) {
      console.error(`Get the status failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
      return;
    }
    console.info(`Get the status success, data: ${JSON.stringify(data)}`);
  });
} catch (error) {
  console.error(`Get the status failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
}

```


## getCrossingSwitchState

```TypeScript
function getCrossingSwitchState(networkId: string): Promise<boolean>
```

Obtains the screen hopping status of the target device. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** getCooperateSwitchState(networkId:

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | Descriptor of the target device for screen hopping. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** indicates that screen hoppingis enabled, and the value **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types.<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let deviceDescriptor = "networkId";
try {
  cooperate.getCrossingSwitchState(deviceDescriptor).then((data: boolean) => {
    console.info(`Get the status success, data: ${JSON.stringify(data)}`);
  }, (error: BusinessError) => {
    console.error(`Get the status failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
  });
} catch (error) {
  console.error(`Get the status failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
}

```

