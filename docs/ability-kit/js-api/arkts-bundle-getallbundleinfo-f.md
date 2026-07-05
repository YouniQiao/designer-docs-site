# getAllBundleInfo

## getAllBundleInfo

```TypeScript
function getAllBundleInfo(bundleFlag: BundleFlag, userId: number, callback: AsyncCallback<Array<BundleInfo>>): void
```

获取系统中指定用户下所有的BundleInfo，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | Yes | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中包信息相关flag。 |
| userId | number | Yes | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |
| callback | AsyncCallback&lt;Array&lt;BundleInfo>> | Yes | 程序启动作为入参的回调函数，返回指定用户下所有包的BundleInfo。 |

## getAllBundleInfo

```TypeScript
function getAllBundleInfo(bundleFlag: BundleFlag, callback: AsyncCallback<Array<BundleInfo>>): void
```

获取当前用户所有的BundleInfo，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | Yes | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中包信息相关flag。 |
| callback | AsyncCallback&lt;Array&lt;BundleInfo>> | Yes | 程序启动作为入参的回调函数，返回所有可用的BundleInfo。 |

## getAllBundleInfo

```TypeScript
function getAllBundleInfo(bundleFlag: BundleFlag, userId?: number): Promise<Array<BundleInfo>>
```

获取指定用户所有的BundleInfo，使用Promise形式异步回调。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | Yes | 用于指定返回的包信息对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中包信息相关flag。 |
| userId | number | No | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleInfo>> | Promise形式返回所有可用的BundleInfo |

