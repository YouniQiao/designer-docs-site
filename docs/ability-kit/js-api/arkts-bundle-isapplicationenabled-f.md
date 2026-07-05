# isApplicationEnabled

## isApplicationEnabled

```TypeScript
function isApplicationEnabled(bundleName: string, callback: AsyncCallback<boolean>): void
```

根据给定的bundleName查询指定应用程序是否已经启用，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数，返回boolean代表是否启用。 |

## isApplicationEnabled

```TypeScript
function isApplicationEnabled(bundleName: string): Promise<boolean>
```

根据给定的bundleName查询指定应用程序是否已经启用，使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise形式返回boolean代表是否启用。 |

