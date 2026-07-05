# getDispatchInfo (System API)

## Modules to Import

```TypeScript
import { freeInstall } from '@ohos.bundle.freeInstall';
```

## getDispatchInfo

```TypeScript
function getDispatchInfo(callback: AsyncCallback<DispatchInfo>): void
```

Obtains the dispatch information. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DispatchInfo&gt; | Yes | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-asynccallback-i.md#asynccallback) used to return theresult. If the operation is successful, **err** is **null**, and **data** is the[DispatchInfo](arkts-ability-dispatchinfo-i-sys.md#dispatchinfo) object obtained. otherwise, **err** is an errorobject. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |


## getDispatchInfo

```TypeScript
function getDispatchInfo(): Promise<DispatchInfo>
```

Obtains the dispatch information. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DispatchInfo&gt; | Promise used to return the[DispatchInfo](arkts-ability-dispatchinfo-i-sys.md#dispatchinfo) object obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

