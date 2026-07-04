# Config (System API)

Implements configuration, acquisition, and listening for properties.

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { config } from '@ohos.accessibility.config';
```

## get

```TypeScript
get(): Promise<T>
```

Obtains the value of a property. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T&gt; | Promise used to return the value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { config } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

config.highContrastText.get().then((data: boolean) => {
  console.info(`succeeded in getting highContrastText, data is ${data}`);
}).catch((err: BusinessError) => {
  console.error(`failed to get highContrastText, Code is ${err.code}, message is ${err.message}`);
});

```

## get

```TypeScript
get(callback: AsyncCallback<T>): void
```

Obtains the property value. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;T&gt; | Yes | Callback used to return the property value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { config } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

config.highContrastText.get((err: BusinessError, data: boolean) => {
  if (err) {
    console.error(`failed to get highContrastText, Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info(`succeeded in getting highContrastText, data is ${data}`);
});

```

## off

```TypeScript
off(callback?: Callback<T>): void
```

Cancels the listener for property changes. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.READ_ACCESSIBILITY_CONFIG

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;T&gt; | No | Callback used to unregister. The value must be the same as the value of**callback** in **on()**. If this parameter is not specified, listening will be disabled for all callbackscorresponding to the specified type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { config } from '@kit.AccessibilityKit';

config.highContrastText.off((data: boolean) => {
  console.info(`Unsubscribe highContrastText success, result: ${JSON.stringify(data)}`);
});

```

## on

```TypeScript
on(callback: Callback<T>): void
```

Adds a listener for property changes. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.READ_ACCESSIBILITY_CONFIG

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;T&gt; | Yes | Callback invoked when the property changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

**Example**

```TypeScript
import { config } from '@kit.AccessibilityKit';

config.highContrastText.on((data: boolean) => {
  console.info(`subscribe highContrastText success, result: ${JSON.stringify(data)}`);
});

```

## set

```TypeScript
set(value: T): Promise<void>
```

Sets the value of a property. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.WRITE_ACCESSIBILITY_CONFIG

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | Property value to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

**Example**

```TypeScript
import { config } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let value: boolean = true;

config.highContrastText.set(value).then(() => {
  console.info(`succeeded in setting highContrastText value is ${value}`);
}).catch((err: BusinessError) => {
  console.error(`failed to set highContrastText, Code is ${err.code}, message is ${err.message}`);
});

```

## set

```TypeScript
set(value: T, callback: AsyncCallback<void>): void
```

Sets the property value. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.WRITE_ACCESSIBILITY_CONFIG

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | Property value to set. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

**Example**

```TypeScript
import { config } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let value: boolean = true;

config.highContrastText.set(value, (err: BusinessError) => {
  if (err) {
    console.error(`failed to set highContrastText, Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info(`succeeded in setting highContrastText, value is ${value}`);
});

```

