# prepare (System API)

## Modules to Import

```TypeScript
import { cooperate } from '@ohos.cooperate';
```

## prepare

```TypeScript
function prepare(callback: AsyncCallback<void>): void
```

Prepares for screen hopping. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** prepareCooperate(callback:

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the operation result. If the operation issuccessful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types.<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  cooperate.prepare((error: BusinessError) => {
    if (error) {
      console.error(`Keyboard mouse crossing prepare failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
      return;
    }
    console.info(`Keyboard mouse crossing prepare success.`);
  });
} catch (error) {
  console.error(`Keyboard mouse crossing prepare failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
}

```


## prepare

```TypeScript
function prepare(): Promise<void>
```

Prepares for screen hopping. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** [prepareCooperate()](arkts-distributedservice-preparecooperate-f-sys.md#preparecooperate-2)

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types.<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  cooperate.prepare().then(() => {
    console.info(`Keyboard mouse crossing prepare success.`);
  }, (error: BusinessError) => {
    console.error(`Keyboard mouse crossing prepare failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
  });
} catch (error) {
  console.error(`Keyboard mouse crossing prepare failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
}

```

