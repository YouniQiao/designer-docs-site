# dataMigration (System API)

## Modules to Import

```TypeScript
import { fontManager } from '@ohos.fontManager';
```

## dataMigration

```TypeScript
function dataMigration(callback: DataMigrationCallback): number
```

Starts a migration task during device upgrade.

**Since:** 23

**Required permissions:** ohos.permission.UPDATE_FONT

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DataMigrationCallback | Yes | Callback function for data migration. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Result of starting the data migration task. The value **0** indicates that the process is startedsuccessfully. Otherwise, the process fails to be started. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system application. |
| [31100110](../errorcode-font-manager.md#31100110-failed-to-call-the-api-due-to-system-errors) |  |
| [31100111](../errorcode-font-manager.md#31100111-migration-task-being-executed) |  |

