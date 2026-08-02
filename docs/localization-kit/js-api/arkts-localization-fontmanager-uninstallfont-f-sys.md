# uninstallFont (System API)

## Modules to Import

```TypeScript
import { fontManager } from '@kit.LocalizationKit';
```

## uninstallFont

```TypeScript
function uninstallFont(fullName: string): Promise<number>
```

Uninstalls a font by name. This API uses a promise to return the result.

**Since:** 19

**Required permissions:** ohos.permission.UPDATE_FONT

<!--Device-fontManager-function uninstallFont(fullName: string): Promise<int>--><!--Device-fontManager-function uninstallFont(fullName: string): Promise<int>-End-->

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fullName | string | Yes | Name of the font to be uninstalled. You can obtain the font name by opening the **.ttf** or **.ttc** font file. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the result. The value **0** indicates that the uninstallation is successful, and any other value indicates that the uninstallation has failed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system application. |
| [31100107](../errorcode-font-manager.md#31100107-uninstalled-font-file-not-exist) | Font file does not exist. |
| [31100108](../errorcode-font-manager.md#31100108-failed-to-delete-font-file) | Font file delete error. |
| [31100109](../errorcode-font-manager.md#31100109-uninstallation-failed-due-to-other-errors) | Other error. |

