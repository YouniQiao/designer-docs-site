# Preferences

Provides APIs for obtaining and modifying **Preferences** instances. **Preferences** inherits from [ISendable](docroot://arkts-utils/arkts-sendable.md#isendable) and can be passed between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads) by reference. Before calling any API of **Preferences**, obtain a **Preferences** instance by using [sendablePreferences.getPreferences]sendablePreferences.getPreferences.

**Inheritance:** Preferencesextends: lang.ISendable.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

## Modules to Import

```TypeScript
import { sendablePreferences } from '@kit.ArkData';
```

## clear

```TypeScript
clear(): Promise<void>
```

Clears this **Preferences** instance. This API uses a promise to return the result. You can use [flush]sendablePreferences.Preferences.flush to persist the **Preferences** instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15500000 | Inner error. |

## clearSync

```TypeScript
clearSync(): void
```

Clears this **Preferences** instance. This API returns the result synchronously. You can use [flush]sendablePreferences.Preferences.flush to persist the **Preferences** instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15500000 | Inner error. |

## delete

```TypeScript
delete(key: string): Promise<void>
```

Deletes a KV pair from this **Preferences** instance. This API uses a promise to return the result. You can use [flush]sendablePreferences.Preferences.flush to persist the **Preferences** instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be deleted. The value cannot be empty, and the maximum length is 1024 bytes. For  details,  see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

## deleteSync

```TypeScript
deleteSync(key: string): void
```

Deletes a KV pair from this **Preferences** instance. This API returns the result synchronously. You can use [flush]sendablePreferences.Preferences.flush to persist the **Preferences** instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be deleted. The value cannot be empty, and the maximum length is 1024 bytes. For  details,  see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

## flush

```TypeScript
flush(): Promise<void>
```

Flushes the data in this **Preferences** instance to the persistent file. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15500000 | Inner error. |

## flushSync

```TypeScript
flushSync(): void
```

Flushes the data in the cached **Preferences** instance to the persistent file.

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15500000 | Inner error. |

## get

```TypeScript
get(key: string, defValue: lang.ISendable): Promise<lang.ISendable>
```

Obtains the value of a key from this **Preferences** instance. This API uses a promise to return the result. If the value is null or is not of the default value type, **defValue** is returned.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be obtained. The value cannot be empty, and the maximum length is 1024 bytes. For  details,  see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants). |
| defValue | lang.ISendable | Yes | Default value to be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;lang.ISendable> | Promise used to return the value obtained.   This instance inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed  between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)  by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

## getAll

```TypeScript
getAll(): Promise<lang.ISendable>
```

Obtains all KV pairs from this **Preferences** instance. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;lang.ISendable> | Promise used to return the KV pairs obtained.   This object inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed  between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)  by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15500000 | Inner error. |

## getAllSync

```TypeScript
getAllSync(): lang.ISendable
```

Obtains all KV pairs from this **Preferences** instance. This API returns the result synchronously.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Return value:**

| Type | Description |
| --- | --- |
| lang.ISendable | All KV pairs obtained.   This object inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed  between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)  by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15500000 | Inner error. |

## getSync

```TypeScript
getSync(key: string, defValue: lang.ISendable): lang.ISendable
```

Obtains the value of a key from this **Preferences** instance. This API returns the result synchronously. If the value is null or is not of the default value type, **defValue** is returned.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be obtained. The value cannot be empty, and the maximum length is 1024 bytes. For  details, see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)  . |
| defValue | lang.ISendable | Yes | Default value to be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| lang.ISendable | Value obtained.   This instance inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed  between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)  by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

## has

```TypeScript
has(key: string): Promise<boolean>
```

Checks whether this **Preferences** instance contains the KV pair of the given key. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be checked. The value cannot be empty, and the maximum length is 1024 bytes. For  details,  see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. The value true means the Preferences  instance contains the KV pair; the value false means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

## hasSync

```TypeScript
hasSync(key: string): boolean
```

Checks whether this **Preferences** instance contains the KV pair of the given key. This API returns the result synchronously.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be checked. The value cannot be empty, and the maximum length is 1024 bytes. For  details,  see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | The value true means the Preferences instance contains the KV pair; the value  false means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

## off('change')

```TypeScript
off(type: 'change', callback?: Callback<string>): void
```

Unsubscribes from data changes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'change' | Yes | Event type. The value is 'change', which indicates data changes. |
| callback | Callback&lt;string> | No | Callback to unregister. If this parameter is not specified, this API  unregisters all callbacks for data changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

## off('multiProcessChange')

```TypeScript
off(type: 'multiProcessChange', callback?: Callback<string>): void
```

Unsubscribes from inter-process data changes. This API is provided for applications that have applied for [dataGroupId]sendablePreferences.Options. Avoid using this API for the applications that have not applied for **dataGroupId** because calling it in multiple process may damage the persistent files and cause data loss.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'multiProcessChange' | Yes | Event type. The value is 'multiProcessChange', which indicates inter-  process data changes. |
| callback | Callback&lt;string> | No | Callback to unregister. If this parameter is not specified, this API  unregisters all callbacks for data changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

## off('dataChange')

```TypeScript
off(type: 'dataChange', keys: Array<string>, callback?: Callback<lang.ISendable>): void
```

Unsubscribes from changes of specific data.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataChange' | Yes | Event type. The value is 'dataChange', which indicates data changes. |
| keys | Array&lt;string> | Yes | Keys to be unsubscribed from. If this parameter is not specified, this API  unsubscribes from the changes of all keys. |
| callback | Callback&lt;lang.ISendable> | No | Callback to unregister. If this parameter is not specified, this  API unregisters all callbacks for the changes of the specified data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

## on('change')

```TypeScript
on(type: 'change', callback: Callback<string>): void
```

Subscribes to data changes. The registered callback will be invoked to return the new value if the data change is [flushed]sendablePreferences.Preferences.flush.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'change' | Yes | Event type. The value is 'change', which indicates data changes. |
| callback | Callback&lt;string> | Yes | Callback used to return the key whose value is changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

## on('multiProcessChange')

```TypeScript
on(type: 'multiProcessChange', callback: Callback<string>): void
```

Subscribes to data changes between processes. When multiple processes hold the same preference file, calling [flush]sendablePreferences.Preferences.flush in any process (including the current process) will trigger the callback in this API. This API is provided for applications that have applied for [dataGroupId]sendablePreferences.Options. Avoid using this API for the applications that have not applied for **dataGroupId** because calling it in multiple process may damage the persistent files and cause data loss.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'multiProcessChange' | Yes | Event type. The value is 'multiProcessChange', which indicates inter-  process data changes. |
| callback | Callback&lt;string> | Yes | Callback used to return the key whose value is changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |
| 15500019 | Failed to obtain the subscription service. |

## on('dataChange')

```TypeScript
on(type: 'dataChange', keys: Array<string>, callback: Callback<lang.ISendable>): void
```

Subscribes to changes of specific data. The registered callback will be invoked only after the values of the specified keys are changed and [flushed]sendablePreferences.Preferences.flush.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataChange' | Yes | Event type. The value is 'dataChange', which indicates data changes. |
| keys | Array&lt;string> | Yes | Keys to be observed. |
| callback | Callback&lt;lang.ISendable> | Yes | Callback used to return the KV pairs changed. The keys are the  keys observed, and the values are the new values. The values support the following types: number, string,  boolean, bigint, and serializable object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

## put

```TypeScript
put(key: string, value: lang.ISendable): Promise<void>
```

Writes data to this **Preferences** instance. This API uses a promise to return the result. You can use [flush]sendablePreferences.Preferences.flush to persist the **Preferences** instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be modified. The value cannot be empty, and the maximum length is 1024 bytes. For  details,  see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants). |
| value | lang.ISendable | Yes | Value to write. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

## putSync

```TypeScript
putSync(key: string, value: lang.ISendable): void
```

Writes data to this **Preferences** instance. This API returns the result synchronously. You can use [flush]sendablePreferences.Preferences.flush to persist the **Preferences** instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be modified. The value cannot be empty, and the maximum length is 1024 bytes. For  details,  see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants). |
| value | lang.ISendable | Yes | Value to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

