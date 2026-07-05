# getLaunchWantForBundle

## getLaunchWantForBundle

```TypeScript
function getLaunchWantForBundle(bundleName: string, callback: AsyncCallback<Want>): void
```

查询拉起指定应用的want对象，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| callback | AsyncCallback&lt;Want> | Yes | 程序启动作为入参的回调函数，返回拉起指定应用的want对象。 |

## getLaunchWantForBundle

```TypeScript
function getLaunchWantForBundle(bundleName: string): Promise<Want>
```

查询拉起指定应用的want对象，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Want> | Returns the Want for starting the application's main ability if any. |

