# getBundleInstaller

## getBundleInstaller

```TypeScript
function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void
```

获取用于安装包的接口，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;BundleInstaller> | Yes | 回调函数，返回安装接口对象。 |

## getBundleInstaller

```TypeScript
function getBundleInstaller(): Promise<BundleInstaller>
```

获取用于安装包的接口，使用Promise异步回调，返回安装接口对象。

**Since:** 7

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleInstaller> | Promise对象，返回安装接口对象。 |

