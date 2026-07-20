# isSystemReady (System API)

## Modules to Import

```TypeScript
import { formHost } from '@kit.FormKit';
```

## isSystemReady

```TypeScript
function isSystemReady(callback: AsyncCallback<void>): void
```

Checks whether the system is ready. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-formHost-function isSystemReady(callback: AsyncCallback<void>): void--><!--Device-formHost-function isSystemReady(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the check is successful,**error** is undefined; otherwise, **error** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


## isSystemReady

```TypeScript
function isSystemReady(): Promise<void>
```

Checks whether the system is ready. This API uses a promise to return the result.

**Since:** 9

<!--Device-formHost-function isSystemReady(): Promise<void>--><!--Device-formHost-function isSystemReady(): Promise<void>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |

