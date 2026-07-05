# getAllApplicationInfo

## getAllApplicationInfo

```TypeScript
function getAllApplicationInfo(bundleFlags: number,
    userId: number, callback: AsyncCallback<Array<ApplicationInfo>>): void
```

获取指定用户下所有已安装的应用信息，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中应用信息相关flag。 |
| userId | number | Yes | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |
| callback | AsyncCallback&lt;Array&lt;ApplicationInfo>> | Yes | 程序启动作为入参的回调函数，返回应用信息列表。 |

## getAllApplicationInfo

```TypeScript
function getAllApplicationInfo(bundleFlags: number, callback: AsyncCallback<Array<ApplicationInfo>>): void
```

获取调用方所在用户下已安装的应用信息，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中应用信息相关flag。 |
| callback | AsyncCallback&lt;Array&lt;ApplicationInfo>> | Yes | 程序启动作为入参的回调函数，返回应用信息列表。 |

## getAllApplicationInfo

```TypeScript
function getAllApplicationInfo(bundleFlags: number, userId?: number): Promise<Array<ApplicationInfo>>
```

获取指定用户下所有已安装的应用信息，使用promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中应用信息相关flag。 |
| userId | number | No | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ApplicationInfo>> | Promise对象，获取成功时返回应用信息列表。 |

