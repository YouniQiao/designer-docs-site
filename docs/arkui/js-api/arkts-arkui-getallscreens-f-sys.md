# getAllScreens (System API)

## Modules to Import

```TypeScript
import { screen } from '@ohos.screen';
```

## getAllScreens

```TypeScript
function getAllScreens(callback: AsyncCallback<Array<Screen>>): void
```

Obtains all screens. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Screen&gt;&gt; | Yes | Callback used to return all the Screen objects obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let screenClass: screen.Screen | null = null;
// Obtain all screen objects.
screen.getAllScreens((err: BusinessError, data: Array<screen.Screen>) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to get all screens. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in getting all screens. Data: ${JSON.stringify(data)}`);
  if (data.length > 0) {
    screenClass = data[0];
  }
});

```


## getAllScreens

```TypeScript
function getAllScreens(callback: AsyncCallback<Array<Screen>>, isNeedUnused?: boolean): void
```

Obtains all screens. This API uses an asynchronous callback to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Screen&gt;&gt; | Yes | Callback used to return the result. If obtaining all screens issuccessful is successful, **err** is **undefined**, and the returned object is screen object set obtained.Otherwise, **err** is an error object. |
| isNeedUnused | boolean | No | Indicates whether unused screen information is required.This parameter is optional. If not provided, the unused screen information will not be returned<br>Default value: false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |


## getAllScreens

```TypeScript
function getAllScreens(): Promise<Array<Screen>>
```

Obtains all screens. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Screen&gt;&gt; | Promise used to return all the Screen objects obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let screenClass: screen.Screen | null = null;
// Obtain all screen objects.
let promise: Promise<Array<screen.Screen>> = screen.getAllScreens();
promise.then((data: Array<screen.Screen>) => {
  if(data.length > 0){
    screenClass = data[0];
  }
  console.info(`Succeeded in getting all screens. Data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get all screens. Code: ${err.code}, message: ${err.message}`);
});

```


## getAllScreens

```TypeScript
function getAllScreens(isNeedUnused?: boolean): Promise<Array<Screen>>
```

Obtains all screens. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNeedUnused | boolean | No | Indicates whether unused screen information is required.This parameter is optional. If not provided, the unused screen information will not be returned<br>Default value: false. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Screen&gt;&gt; | Promise used to return all the Screen objects obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |

