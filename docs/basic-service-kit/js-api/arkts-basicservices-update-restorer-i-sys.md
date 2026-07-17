# Restorer (System API)

Defines a tool class for restoring factory settings.

**Since:** 9

<!--Device-update-export interface Restorer--><!--Device-update-export interface Restorer-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { update } from '@kit.BasicServicesKit';
```

## deepFactoryReset

```TypeScript
deepFactoryReset(factoryResetStrategy: FactoryResetStrategy): Promise<void>
```

Clears the user data partition and OS partition by means of overwriting. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** ohos.permission.FACTORY_RESET

**Model restriction:** This API can be used only in the stage model.

<!--Device-Restorer-deepFactoryReset(factoryResetStrategy: FactoryResetStrategy): Promise<void>--><!--Device-Restorer-deepFactoryReset(factoryResetStrategy: FactoryResetStrategy): Promise<void>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| factoryResetStrategy | [FactoryResetStrategy](arkts-basicservices-update-factoryresetstrategy-i-sys.md) | Yes | Factory reset strategy. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  // Obtain a Restorer object for restoring factory settings.
  let factoryRestorer = update.getRestorer();
  // Create a FactoryResetStrategy object.
  let factoryResetStrategy: update.FactoryResetStrategy = {
    scope: update.FactoryResetScope.DATA, // The reset scope is user data.
    strategy: 'deepFactoryReset test' // Reset scope
  };
  // Perform deep factory reset.
  factoryRestorer.deepFactoryReset(factoryResetStrategy).then(() => {
    console.info(`deepFactoryReset success`);
  }).catch((deepResetError: BusinessError) => {
    console.error(`deepFactoryReset error, code:${deepResetError.code}, message:${deepResetError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get factoryRestorer: ${error}`);
}

```

## factoryReset

```TypeScript
factoryReset(callback: AsyncCallback<void>): void
```

Clears the user data partition. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.FACTORY_RESET

<!--Device-Restorer-factoryReset(callback: AsyncCallback<void>): void--><!--Device-Restorer-factoryReset(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the factory reset is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Obtain a Restorer object for restoring factory settings.
  let factoryRestorer = update.getRestorer();
  // Restore factory settings.
  factoryRestorer.factoryReset((resetError: BusinessError) => {
    if (resetError) {
      console.error(`factoryReset error, code:${resetError.code}, message:${resetError.message}.`);
      return;
    }
    console.info(`factoryReset success`);
  });
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`Fail to get factoryRestorer. Code: ${err.code}, message: ${err.message}.`);
}

```

## factoryReset

```TypeScript
factoryReset(): Promise<void>
```

Clears the user data partition. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.FACTORY_RESET

<!--Device-Restorer-factoryReset(): Promise<void>--><!--Device-Restorer-factoryReset(): Promise<void>-End-->

**System capability:** SystemCapability.Update.UpdateService

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
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Obtain a Restorer object for restoring factory settings.
  let factoryRestorer = update.getRestorer();
  // Restore factory settings.
  factoryRestorer.factoryReset().then(() => {
    console.info(`factoryReset success`);
  }).catch((resetError: BusinessError) => {
    console.error(`factoryReset error, code:${resetError.code}, message:${resetError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get factoryRestorer: ${error}`);
}

```

## forceFactoryReset

```TypeScript
forceFactoryReset(): Promise<void>
```

Clears the user data partition and the file key. This API uses a promise to return the result.

**Since:** 23

**Required permissions:** ohos.permission.FORCE_FACTORY_RESET

<!--Device-Restorer-forceFactoryReset(): Promise<void>--><!--Device-Restorer-forceFactoryReset(): Promise<void>-End-->

**System capability:** SystemCapability.Update.UpdateService

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
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  // Obtain a Restorer object for restoring factory settings.
  let factoryRestorer = update.getRestorer();
  // Perform forcible factory reset.
  factoryRestorer.forceFactoryReset().then(() => {
    console.info(`forceFactoryReset success`);
  }).catch((forceResetError: BusinessError) => {
    console.error(`forceFactoryReset error, code:${forceResetError.code}, message:${forceResetError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get factoryRestorer: ${error}`);
}

```

## getDeepFactoryResetInfo

```TypeScript
getDeepFactoryResetInfo(factoryResetStrategy: FactoryResetStrategy): Promise<FactoryResetInfo>
```

Obtains the factory reset information. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** ohos.permission.FACTORY_RESET

**Model restriction:** This API can be used only in the stage model.

<!--Device-Restorer-getDeepFactoryResetInfo(factoryResetStrategy: FactoryResetStrategy): Promise<FactoryResetInfo>--><!--Device-Restorer-getDeepFactoryResetInfo(factoryResetStrategy: FactoryResetStrategy): Promise<FactoryResetInfo>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| factoryResetStrategy | [FactoryResetStrategy](arkts-basicservices-update-factoryresetstrategy-i-sys.md) | Yes | Factory reset strategy. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<FactoryResetInfo> | Promise used to return the factory reset information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [11500104](../../apis-basic-services-kit/errorcode-update.md#11500104-ipc-error) | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Create a FactoryResetStrategy object.
let factoryResetStrategy: update.FactoryResetStrategy = {
  scope: update.FactoryResetScope.DATA, // The reset scope is user data.
  strategy: 'getDeepFactoryResetInfo test' // Reset scope
};
try {
  // Obtain a Restorer object for restoring factory settings.
  let factoryRestorer = update.getRestorer();
  // Query the deep factory reset strategy.
  factoryRestorer.getDeepFactoryResetInfo(factoryResetStrategy).then((deepResetInfo: update.FactoryResetInfo) => {
    console.info(`getDeepFactoryResetInfo success`);
  }).catch((resetInfoError: BusinessError) => {
    console.error(`getDeepFactoryResetInfo promise error, code:${resetInfoError.code}, message:${resetInfoError.message}.`);
  });
} catch (error) {
  console.error(`Fail to get factoryRestorer: ${error}`);
}

```

