# setApplicationEnabled

## setApplicationEnabled

```TypeScript
function setApplicationEnabled(bundleName: string, isEnable: boolean, callback: AsyncCallback<void>): void
```

设置是否启用指定的应用程序，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指示需要启用或禁用的应用Bundle名称。 |
| isEnable | boolean | Yes | 指定是否启用应用程序。true表示启用，false表示禁用。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。 |

## setApplicationEnabled

```TypeScript
function setApplicationEnabled(bundleName: string, isEnable: boolean): Promise<void>
```

设置是否启用指定的应用程序，使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指示需要启用或禁用的应用Bundle名称。 |
| isEnable | boolean | Yes | 指定是否启用应用程序。true表示启用，false禁用。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

