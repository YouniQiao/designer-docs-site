# getUserDataDir (System API)

## Modules to Import

```TypeScript
import { Environment } from '@kit.CoreFileKit';
```

## getUserDataDir

```TypeScript
function getUserDataDir(): Promise<string>
```

Obtains the root directory of user files. This API uses a promise to return the result.

**Since:** 8

<!--Device-Environment-function getUserDataDir(): Promise<string>--><!--Device-Environment-function getUserDataDir(): Promise<string>-End-->

**System capability:** SystemCapability.FileManagement.File.Environment

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the root directory of user files. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |


## getUserDataDir

```TypeScript
function getUserDataDir(callback: AsyncCallback<string>): void
```

Obtains the root directory of user files. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-Environment-function getUserDataDir(callback: AsyncCallback<string>): void--><!--Device-Environment-function getUserDataDir(callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.FileManagement.File.Environment

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Callback used to return the root directory of user files. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

