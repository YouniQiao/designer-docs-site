# getAllDesktopShortcutInfo (System API)

## Modules to Import

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
```

<a id="getalldesktopshortcutinfo"></a>
## getAllDesktopShortcutInfo

```TypeScript
function getAllDesktopShortcutInfo(userId: number): Promise<Array<ShortcutInfo>>
```

Obtains the information about all shortcuts of the given user.

**Since:** 12

**Required permissions:** ohos.permission.MANAGE_SHORTCUTS

<!--Device-shortcutManager-function getAllDesktopShortcutInfo(userId: int): Promise<Array<ShortcutInfo>>--><!--Device-shortcutManager-function getAllDesktopShortcutInfo(userId: int): Promise<Array<ShortcutInfo>>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID, which can be obtained by calling [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-1). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ShortcutInfo&gt;&gt; | Promise that returns the shortcut information defined in the application configuration file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Verify permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [17700004](../errorcode-bundle.md#17700004-user-id-does-not-exist) | The specified user ID is not found. |

