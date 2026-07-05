# cleanBundleCacheFiles

## cleanBundleCacheFiles

```TypeScript
function cleanBundleCacheFiles(bundleName: string, callback: AsyncCallback<void>): void
```

清除指定应用程序的缓存数据，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.REMOVE_CACHE_FILES

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指示要清除其缓存数据的应用Bundle名称。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。 |

## cleanBundleCacheFiles

```TypeScript
function cleanBundleCacheFiles(bundleName: string): Promise<void>
```

清除指定应用程序的缓存数据，使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.REMOVE_CACHE_FILES

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指示要清除其缓存数据的应用Bundle名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

