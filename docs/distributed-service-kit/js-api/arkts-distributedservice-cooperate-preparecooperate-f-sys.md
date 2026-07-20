# prepareCooperate (System API)

## Modules to Import

```TypeScript
import { cooperate } from '@kit.DistributedServiceKit';
```

## prepareCooperate

```TypeScript
function prepareCooperate(callback: AsyncCallback<void>): void
```

Prepares for screen hopping. This API uses an asynchronous callback to return the result.

**Since:** 11

**Required permissions:** ohos.permission.COOPERATE_MANAGER

<!--Device-cooperate-function prepareCooperate(callback: AsyncCallback<void>): void--><!--Device-cooperate-function prepareCooperate(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the operation result. If the operation is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types.<br>3. Parameter verification failed.**ArkTS mode:** This error code applies only to ArkTS-Dyn. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  cooperate.prepareCooperate((error: BusinessError) => {
    if (error) {
      console.error(`Keyboard mouse crossing prepareCooperate failed, error: ${JSON.stringify(error,
        [`code`, `message`])}`);
      return;
    }
    console.info(`Keyboard mouse crossing prepareCooperate success.`);
  });
} catch (error) {
  console.error(`Keyboard mouse crossing prepareCooperate failed, error: ${JSON.stringify(error,
    [`code`, `message`])}`);
}

```


## prepareCooperate

```TypeScript
function prepareCooperate(): Promise<void>
```

Prepares for screen hopping. This API uses a promise to return the result.

**Since:** 11

**Required permissions:** ohos.permission.COOPERATE_MANAGER

<!--Device-cooperate-function prepareCooperate(): Promise<void>--><!--Device-cooperate-function prepareCooperate(): Promise<void>-End-->

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types.<br>3. Parameter verification failed.**ArkTS mode:** This error code applies only to ArkTS-Dyn. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  cooperate.prepareCooperate().then(() => {
    console.info(`Keyboard mouse crossing prepareCooperate success.`);
  }, (error: BusinessError) => {
    console.error(`Keyboard mouse crossing prepareCooperate failed, error: ${JSON.stringify(error,
      [`code`, `message`])}`);
  });
} catch (error) {
  console.error(`Keyboard mouse crossing prepareCooperate failed, error: ${JSON.stringify(error,
    [`code`, `message`])}`);
}

```

