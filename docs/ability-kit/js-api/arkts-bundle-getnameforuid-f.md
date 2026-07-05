# getNameForUid

## getNameForUid

```TypeScript
function getNameForUid(uid: number, callback: AsyncCallback<string>): void
```

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager#getBundleNameByUid

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes |  |
| callback | AsyncCallback&lt;string> | Yes |  |

## getNameForUid

```TypeScript
function getNameForUid(uid: number): Promise<string>
```

通过uid获取对应的Bundle名称，使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | 要查询的uid。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns the bundle name. |

