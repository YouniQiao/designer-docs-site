# getShortcutInfoByAbility (System API)

## Modules to Import

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
```

<a id="getshortcutinfobyability"></a>
## getShortcutInfoByAbility

```TypeScript
function getShortcutInfoByAbility(bundleName: string, moduleName: string, abilityName: string, userId?: number, appIndex?: number): Array<ShortcutInfo>
```

Obtains shortcut info by bundleName, moduleName, abilityName, userId and appIndex.If you need to obtains shortcut info under the current user, ohos.permission.GET_BUNDLE_INFO_PRIVILEGED needs to be applied for.If you need to obtains shortcut info under other users, ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS need to be applied for.

**Since:** 24

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)

**Model restriction:** This API can be used only in the stage model.

<!--Device-shortcutManager-function getShortcutInfoByAbility(bundleName: string, moduleName: string, abilityName: string, userId?: int, appIndex?: int): Array<ShortcutInfo>--><!--Device-shortcutManager-function getShortcutInfoByAbility(bundleName: string, moduleName: string, abilityName: string, userId?: int, appIndex?: int): Array<ShortcutInfo>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Indicates the bundle name. |
| moduleName | string | Yes | Indicates the module name. |
| abilityName | string | Yes | Indicates the ability name. |
| userId | number | No | Indicates the user ID. |
| appIndex | number | No | Indicates the index of clone app. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ShortcutInfo&gt; | An array of ShortcutInfo objects. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundle is not found. |
| [17700002](../errorcode-bundle.md#17700002-module-name-does-not-exist) | The specified module is not found. |
| [17700003](../errorcode-bundle.md#17700003-ability-name-does-not-exist) | The specified ability is not found. |
| [17700004](../errorcode-bundle.md#17700004-user-id-does-not-exist) | The specified user id is not found. |
| [17700026](../errorcode-bundle.md#17700026-bundle-disabled) | The specified bundle is disabled. |
| [17700061](../errorcode-bundle.md#17700061-appindex-for-a-clone-is-invalid) | The specified app index is invalid. |

