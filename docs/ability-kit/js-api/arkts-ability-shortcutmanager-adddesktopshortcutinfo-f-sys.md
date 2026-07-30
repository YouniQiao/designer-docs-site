# addDesktopShortcutInfo (System API)

## Modules to Import

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
```

## addDesktopShortcutInfo

```TypeScript
function addDesktopShortcutInfo(shortcutInfo: ShortcutInfo, userId: number): Promise<void>
```

Adds a shortcut for the given user. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.MANAGE_SHORTCUTS

<!--Device-shortcutManager-function addDesktopShortcutInfo(shortcutInfo: ShortcutInfo, userId: int): Promise<void>--><!--Device-shortcutManager-function addDesktopShortcutInfo(shortcutInfo: ShortcutInfo, userId: int): Promise<void>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shortcutInfo | [ShortcutInfo](arkts-ability-shortcutinfo-i-sys.md) | Yes | Shortcut information. |
| userId | number | Yes | User ID, which can be obtained by calling [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Verify permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundle name is not found. |
| [17700004](../errorcode-bundle.md#17700004-user-id-does-not-exist) | The specified user ID is not found. |
| [17700026](../errorcode-bundle.md#17700026-bundle-disabled) | The specified bundle is disabled. |
| [17700061](../errorcode-bundle.md#17700061-appindex-for-a-clone-is-invalid) | The specified app index is invalid. |
| [17700070](../errorcode-bundle.md#17700070-invalid-shortcut-id) | The specified shortcut id is illegal. |

