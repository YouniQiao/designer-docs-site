# getPreferencesSync

## getPreferencesSync

```TypeScript
function getPreferencesSync(context: Context, options: Options): Preferences
```

Obtains a **Preferences** instance. This API returns the result synchronously.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. |
| options | Options | Yes | Configuration options of the Preferences instance. |

**Return value:**

| Type | Description |
| --- | --- |
| Preferences | Preferences instance obtained.   This instance inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed  between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)  by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 15500000 | Inner error. |
| 15501001 | The operations is supported in stage mode only. |
| 15501002 | Invalid dataGroupId. |

