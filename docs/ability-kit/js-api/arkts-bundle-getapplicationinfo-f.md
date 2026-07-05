# getApplicationInfo

## getApplicationInfo

```TypeScript
function getApplicationInfo(bundleName: string,
    bundleFlags: number, userId: number, callback: AsyncCallback<ApplicationInfo>): void
```

根据给定的Bundle名称获取指定用户下的ApplicationInfo，使用callback异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| bundleFlags | number | Yes | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中应用信息相关flag。 |
| userId | number | Yes | 用户ID。取值范围：大于等于0。 |
| callback | AsyncCallback&lt;ApplicationInfo> | Yes | 程序启动作为入参的回调函数，返回应用程序信息。 |

## getApplicationInfo

```TypeScript
function getApplicationInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<ApplicationInfo>): void
```

根据给定的Bundle名称获取ApplicationInfo，使用callback异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| bundleFlags | number | Yes | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中应用信息相关flag。 |
| callback | AsyncCallback&lt;ApplicationInfo> | Yes | 程序启动作为入参的回调函数，返回应用程序信息。 |

## getApplicationInfo

```TypeScript
function getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number): Promise<ApplicationInfo>
```

根据给定的Bundle名称获取ApplicationInfo。使用Promise异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| bundleFlags | number | Yes | 用于指定返回的应用信息对象中包含信息的标记。取值范围请参考[BundleFlag说明]bundle.BundleFlag中应用信息相关flag。 |
| userId | number | No | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ApplicationInfo> | Promise形式返回应用程序信息。 |

