# getBundleInfo

## getBundleInfo

```TypeScript
function getBundleInfo(bundleName: string,
    bundleFlags: number, options: BundleOptions, callback: AsyncCallback<BundleInfo>): void
```

根据给定的Bundle名称获取BundleInfo，使用callback异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 7

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| bundleFlags | number | Yes | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中包信息相关flag。 |
| options | BundleOptions | Yes | 包含userid。 |
| callback | AsyncCallback&lt;BundleInfo> | Yes | 程序启动作为入参的回调函数，返回包信息。 |

## getBundleInfo

```TypeScript
function getBundleInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void
```

根据给定的Bundle名称获取BundleInfo，使用callback异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 7

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 需要查询的应用Bundle名称。 |
| bundleFlags | number | Yes | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中包信息相关flag。 |
| callback | AsyncCallback&lt;BundleInfo> | Yes | 程序启动作为入参的回调函数，返回包信息。 |

## getBundleInfo

```TypeScript
function getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions): Promise<BundleInfo>
```

根据给定的Bundle名称获取BundleInfo，使用Promise异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 7

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| bundleFlags | number | Yes | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中包信息相关flag。 |
| options | BundleOptions | No | 包含userid的查询选项。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleInfo> | Promise对象，获取成功时返回包信息。 |

