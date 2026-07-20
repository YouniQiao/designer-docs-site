# recoverForms (System API)

## Modules to Import

```TypeScript
import { formHost } from '@kit.FormKit';
```

## recoverForms

```TypeScript
function recoverForms(formIds: Array<string>): Promise<void>
```

Recovers recycled widgets and updates their status to non-recyclable, or updates the status of widgets to non-recyclable if the widgets are not recycled. This API uses a promise to return the result.

**Since:** 11

**Required permissions:** ohos.permission.REQUIRE_FORM

**Model restriction:** This API can be used only in the stage model.

<!--Device-formHost-function recoverForms(formIds: Array<string>): Promise<void>--><!--Device-formHost-function recoverForms(formIds: Array<string>): Promise<void>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Array of widget IDs. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permissions denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | caller is not system app. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | IPC connection error. |
| [16500060](../errorcode-form.md#16500060-service-connection-failure) | Service connection error. |
| [16501000](../errorcode-form.md#16501000-internal-function-error) | An internal functional error occurred. |


## recoverForms

```TypeScript
function recoverForms(formIds: Array<string>, callback: AsyncCallback<void>): void
```

Recovers widgets. This API uses an asynchronous callback to return the result.

**Since:** 11

**Required permissions:** ohos.permission.REQUIRE_FORM

**Model restriction:** This API can be used only in the stage model.

<!--Device-formHost-function recoverForms(formIds: Array<string>, callback: AsyncCallback<void>): void--><!--Device-formHost-function recoverForms(formIds: Array<string>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Array of widget IDs. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the widgets are recovered,**error** is **undefined**; otherwise, an exception is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permissions denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | caller is not system app. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | IPC connection error. |
| [16500060](../errorcode-form.md#16500060-service-connection-failure) | Service connection error. |
| [16501000](../errorcode-form.md#16501000-internal-function-error) | An internal functional error occurred. |

