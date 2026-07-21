# deactivate (System API)

## Modules to Import

```TypeScript
import { cooperate } from '@kit.DistributedServiceKit';
```

<a id="deactivate"></a>
## deactivate

```TypeScript
function deactivate(isUnchained: boolean, callback: AsyncCallback<void>): void
```

Stops screen hopping. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** [deactivateCooperate(isUnchained:](arkts-distributedservice-cooperate-deactivatecooperate-f-sys.md#deactivatecooperate-1)

<!--Device-cooperate-function deactivate(isUnchained: boolean, callback: AsyncCallback<void>): void--><!--Device-cooperate-function deactivate(isUnchained: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isUnchained | boolean | Yes | Whether to disable the cross-device link.<br> The value **true** means to disable the cross-device link, and the value **false** means the opposite. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the operation result. If the operation is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types.<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  cooperate.deactivate(false, (error: BusinessError) => {
    if (error) {
      console.error(`Stop Keyboard mouse crossing failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
      return;
    }
    console.info(`Stop Keyboard mouse crossing success.`);
  });
} catch (error) {
  console.error(`Stop Keyboard mouse crossing failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
}

```


<a id="deactivate-1"></a>
## deactivate

```TypeScript
function deactivate(isUnchained: boolean): Promise<void>
```

Stops screen hopping. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** [deactivateCooperate(isUnchained:](arkts-distributedservice-cooperate-deactivatecooperate-f-sys.md#deactivatecooperate-1)

<!--Device-cooperate-function deactivate(isUnchained: boolean): Promise<void>--><!--Device-cooperate-function deactivate(isUnchained: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isUnchained | boolean | Yes | Whether to disable the cross-device link.<br> The value **true** means to disable the cross-device link, and the value **false** means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  cooperate.deactivate(false).then(() => {
    console.info(`Stop Keyboard mouse crossing success.`);
  }, (error: BusinessError) => {
    console.error(`Stop Keyboard mouse crossing failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
  });
} catch (error) {
  console.error(`Stop Keyboard mouse crossing failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
}

```

