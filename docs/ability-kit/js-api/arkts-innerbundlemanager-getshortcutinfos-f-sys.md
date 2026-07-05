# getShortcutInfos

## getShortcutInfos

```TypeScript
function getShortcutInfos(bundleName: string, callback: AsyncCallback<Array<ShortcutInfo>>): void
```

根据给定的Bundle名称获取快捷方式信息，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [getShortcutInfo]@ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| callback | AsyncCallback&lt;Array&lt;ShortcutInfo>> | Yes | 程序启动作为入参的回调函数，返回快捷方式信息。 |

## getShortcutInfos

```TypeScript
function getShortcutInfos(bundleName: string): Promise<Array<ShortcutInfo>>
```

根据给定的Bundle名称获取快捷方式信息，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [getShortcutInfo]@ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ShortcutInfo>> | Promise形式返回快捷方式信息。 |

