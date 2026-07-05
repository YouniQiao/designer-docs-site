# removePreferencesFromCacheSync

## removePreferencesFromCacheSync

```TypeScript
function removePreferencesFromCacheSync(context: Context, options: Options): void
```

Removes a **Preferences** instance from the cache. This API returns the result synchronously. After an application calls [getPreferences]sendablePreferences.getPreferences for the first time to obtain a **Preferences** instance, the obtained **Preferences** instance is cached. When the application calls [getPreferences]sendablePreferences.getPreferences again, the **Preferences** instance will be read from the cache instead of from the persistent file. After this API is called to remove the instance from the cache, calling **getPreferences** again will read data from the persistent file and create a **Preferences** instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. |
| options | Options | Yes | Configuration options of the Preferences instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 15500000 | Inner error. |
| 15501001 | The operations is supported in stage mode only. |
| 15501002 | Invalid dataGroupId. |

