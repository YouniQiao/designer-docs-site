# Preferences

Provides APIs for obtaining and modifying the stored data. Before calling any API of **Preferences**, you must obtain a **Preferences** instance by using [preferences.getPreferences]preferences.getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>) .

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

## 导入模块

```TypeScript
import { preferences } from '@kit.ArkData';
```

## clear

```TypeScript
clear(callback: AsyncCallback<void>): void
```

Clears this **Preferences** instance. This API uses an asynchronous callback to return the result. You can use [flush]preferences.Preferences.flush(callback: AsyncCallback<void>) to persist the **Preferences** instance.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Mandatory parameters are left unspecified. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

dataPreferences.clear((err: BusinessError) =>{
  if (err) {
    console.error("Failed to clear. code =" + err.code + ", message = " + err.message);
    return;
  }
  console.info("Succeeded in clearing.");
})

```

## clear

```TypeScript
clear(): Promise<void>
```

Clears this **Preferences** instance. This API uses a promise to return the result. You can use [flush]preferences.Preferences.flush(callback: AsyncCallback<void>) to persist the **Preferences** instance.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let promise = dataPreferences.clear();
promise.then(() => {
  console.info("Succeeded in clearing.");
}).catch((err: BusinessError) => {
  console.error("Failed to clear. code =" + err.code + ", message = " + err.message);
})

```

## clearSync

```TypeScript
clearSync(): void
```

Clears this **Preferences** instance. This API returns the result synchronously. You can use [flush]preferences.Preferences.flush(callback: AsyncCallback<void>) to persist the **Preferences** instance.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**示例：**

```TypeScript
dataPreferences.clearSync();

```

## delete

```TypeScript
delete(key: string, callback: AsyncCallback<void>): void
```

Deletes a KV pair from this **Preferences** instance. This API uses an asynchronous callback to return the result. You can use [flush]preferences.Preferences.flush(callback: AsyncCallback<void>) to persist the **Preferences** instance.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key to be deleted. The value cannot be empty. For details about its maximum length, see  [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-preferences.md#constants). |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

dataPreferences.delete('startup', (err: BusinessError) => {
  if (err) {
    console.error("Failed to delete the key 'startup'. code =" + err.code + ", message = " + err.message);
    return;
  }
  console.info("Succeeded in deleting the key 'startup'.");
})

```

## delete

```TypeScript
delete(key: string): Promise<void>
```

Deletes a KV pair from this **Preferences** instance. This API uses a promise to return the result. You can use [flush]preferences.Preferences.flush(callback: AsyncCallback<void>) to persist the **Preferences** instance.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key to be deleted. The value cannot be empty. For details about its maximum length, see  [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-preferences.md#constants). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let deleteStartupPromise = dataPreferences.delete('startup');
deleteStartupPromise.then(() => {
  console.info("Succeeded in deleting the key 'startup'.");
}).catch((err: BusinessError) => {
  console.error("Failed to delete the key 'startup'. code =" + err.code +", message = " + err.message);
})

```

## deleteSync

```TypeScript
deleteSync(key: string): void
```

Deletes a KV pair from this **Preferences** instance. This API returns the result synchronously. You can use [flush]preferences.Preferences.flush(callback: AsyncCallback<void>) to persist the **Preferences** instance.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key to be deleted. The value cannot be empty. For details about its maximum length, see  [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-preferences.md#constants). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
dataPreferences.deleteSync('startup');

```

## flush

```TypeScript
flush(callback: AsyncCallback<void>): void
```

Flushes the data in this **Preferences** instance to the persistent file. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Mandatory parameters are left unspecified. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

dataPreferences.flush((err: BusinessError) => {
  if (err) {
    console.error("Failed to flush. code =" + err.code + ", message = " + err.message);
    return;
  }
  console.info("Succeeded in flushing.");
})

```

## flush

```TypeScript
flush(): Promise<void>
```

Flushes the data in this **Preferences** instance to the persistent file. This API uses a promise to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let flushResult = dataPreferences.flush();
flushResult.then(() => {
  console.info("Succeeded in flushing.");
}).catch((err: BusinessError) => {
  console.error("Failed to flush. code =" + err.code + ", message = " + err.message);
})

```

## flushSync

```TypeScript
flushSync(): void
```

Flushes the data in the cached **Preferences** instance to the persistent file.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15500000 | Inner error. |

**示例：**

```TypeScript
dataPreferences.flushSync();

```

## get

```TypeScript
get(key: string, defValue: ValueType, callback: AsyncCallback<ValueType>): void
```

Obtains the value of a key from this **Preferences** instance. This API uses an asynchronous callback to return the result. If the value is null or is not of the default value type, **defValue** is returned.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key to be obtained. The value cannot be empty. For details about its maximum length, see  [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-preferences.md#constants). |
| defValue | ValueType | 是 | Default value to be returned. |
| callback | AsyncCallback&lt;ValueType> | 是 | Callback used to return the result. If the operation is successful  , err is undefined and data is the value obtained. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

dataPreferences.get('startup', 'default', (err: BusinessError, val: preferences.ValueType) => {
  if (err) {
    console.error("Failed to get value of 'startup'. code =" + err.code + ", message = " + err.message);
    return;
  }
  console.info("Succeeded in getting value of 'startup'. val: " + val);
})

```

## get

```TypeScript
get(key: string, defValue: ValueType): Promise<ValueType>
```

Obtains the value of a key from this **Preferences** instance. This API uses a promise to return the result. If the value is null or is not of the default value type, **defValue** is returned.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key to be obtained. The value cannot be empty. For details about its maximum length, see  [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-preferences.md#constants). |
| defValue | ValueType | 是 | Default value to be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ValueType> | Promise used to return the value obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let data = dataPreferences.get('startup', 'default');
data.then((data: preferences.ValueType) => {
  console.info("Succeeded in getting value of 'startup'. Data: " + data);
}).catch((err: BusinessError) => {
  console.error("Failed to get value of 'startup'. code =" + err.code + ", message = " + err.message);
})

```

## getAll

```TypeScript
getAll(callback: AsyncCallback<Object>): void
```

Obtains all KV pairs from a **Preferences** instance. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Object> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and value provides all KV pairs obtained. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Mandatory parameters are left unspecified. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 由于ArkTS中无Object.keys，且无法使用for..in...
// 若报ArkTS问题，请将此方法单独抽离至一个ts文件中并暴露，在需要用到的ets文件中引入使用
function getObjKeys(obj: Object): string[] {
  let keys = Object.keys(obj);
  return keys;
}

dataPreferences.getAll((err: BusinessError, value: Object) => {
  if (err) {
    console.error("Failed to get all key-values. code =" + err.code + ", message = " + err.message);
    return;
  }
  let allKeys = getObjKeys(value);
  console.info("getAll keys = " + allKeys);
  console.info("getAll object = " + JSON.stringify(value));
})

```

## getAll

```TypeScript
getAll(): Promise<Object>
```

Obtains all KV pairs from this **Preferences** instance. This API uses a promise to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Object> | Promise used to return the KV pairs obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 由于ArkTS中无Object.keys，且无法使用for..in...
// 若报ArkTS问题，请将此方法单独抽离至一个ts文件中并暴露，在需要用到的ets文件中引入使用
function getObjKeys(obj: Object): string[] {
  let keys = Object.keys(obj);
  return keys;
}

let allData = dataPreferences.getAll();
allData.then((value: Object) => {
  let allKeys = getObjKeys(value);
  console.info('getAll keys = ' + allKeys);
  console.info("getAll object = " + JSON.stringify(value));
}).catch((err: BusinessError) => {
  console.error("Failed to get all key-values. code =" + err.code + ", message = " + err.message);
})

```

## getAllSync

```TypeScript
getAllSync(): Object
```

Obtains all KV pairs from this **Preferences** instance. This API returns the result synchronously.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Object | Returns all KV pairs obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
// 由于ArkTS中无Object.keys，且无法使用for..in...
// 若报ArkTS问题，请将此方法单独抽离至一个ts文件中并暴露，在需要用到的ets文件中引入使用
function getObjKeys(obj: Object): string[] {
  let keys = Object.keys(obj);
  return keys;
}

let value = dataPreferences.getAllSync();
let allKeys = getObjKeys(value);
console.info('getAll keys = ' + allKeys);
console.info("getAll object = " + JSON.stringify(value));

```

## getSync

```TypeScript
getSync(key: string, defValue: ValueType): ValueType
```

Obtains the value of a key from this **Preferences** instance. This API returns the result synchronously. If the value is null or is not of the default value type, **defValue** is returned.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key to be obtained. The value cannot be empty. For details about its maximum length, see  [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-preferences.md#constants). |
| defValue | ValueType | 是 | Default value to be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ValueType | Returns the value obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
let value: preferences.ValueType = dataPreferences.getSync('startup', 'default');

```

## has

```TypeScript
has(key: string, callback: AsyncCallback<boolean>): void
```

Checks whether this **Preferences** instance contains the KV pair of the given key. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key to be checked. The value cannot be empty. For details about its maximum length, see  [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-preferences.md#constants). |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the Preferences instance  contains the KV pair, true will be returned. Otherwise, false will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

dataPreferences.has('startup', (err: BusinessError, val: boolean) => {
  if (err) {
    console.error("Failed to check the key 'startup'. code =" + err.code + ", message = " + err.message);
    return;
  }
  if (val) {
    console.info("The key 'startup' is contained.");
  } else {
    console.info("The key 'startup' is not contained.");
  }
})

```

## has

```TypeScript
has(key: string): Promise<boolean>
```

Checks whether this **Preferences** instance contains the KV pair of the given key. This API uses a promise to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key to be checked. The value cannot be empty. For details about its maximum length, see  [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-preferences.md#constants). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. If the Preferences instance contains the KV  pair, true will be returned. Otherwise, false will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let isStartupSet = dataPreferences.has('startup');
isStartupSet.then((val: boolean) => {
  if (val) {
    console.info("The key 'startup' is contained.");
  } else {
    console.info("The key 'startup' does not contain.");
  }
}).catch((err: BusinessError) => {
  console.error("Failed to check the key 'startup'. code =" + err.code + ", message = " + err.message);
})

```

## hasSync

```TypeScript
hasSync(key: string): boolean
```

Checks whether this **Preferences** instance contains the KV pair of the given key. This API returns the result synchronously.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key to be checked. The value cannot be empty. For details about its maximum length, see  [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-preferences.md#constants). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | If the Preferences instance contains the KV pair, true will be returned. Otherwise,  false will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
let isExist: boolean = dataPreferences.hasSync('startup');
if (isExist) {
  console.info("The key 'startup' is contained.");
} else {
  console.info("The key 'startup' does not contain.");
}

```

## off('change')

```TypeScript
off(type: 'change', callback?: Callback<string>): void
```

Unsubscribes from data changes.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'change' | 是 | Event type. The value is 'change', which indicates data changes. |
| callback | Callback&lt;string> | 否 | Callback to unregister. If this parameter is not specified, this API  unregisters all callbacks for data changes. [since 11] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let observer = (key: string) => {
  console.info("The key " + key + " changed.");
}
dataPreferences.on('change', observer);
dataPreferences.putSync('startup', 'auto');
dataPreferences.flush((err: BusinessError) => {
  if (err) {
    console.error("Failed to flush. code =" + err.code + ", message = " + err.message);
    return;
  }
  console.info("Succeeded in flushing.");
})
dataPreferences.off('change', observer);

```

## off('multiProcessChange')

```TypeScript
off(type: 'multiProcessChange', callback?: Callback<string>): void
```

Unsubscribes from inter-process data changes. This API is provided for applications that have applied for [dataGroupId]preferences.Options. Avoid using this API for the applications that have not applied for **dataGroupId** because calling it in multiple process may damage the persistent files and cause data loss.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'multiProcessChange' | 是 | Event type. The value is 'multiProcessChange', which indicates inter-  process data changes. |
| callback | Callback&lt;string> | 否 | Callback to unregister. If this parameter is not specified, this API  unregisters all callbacks for data changes. [since 11] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let observer = (key: string) => {
  console.info("The key " + key + " changed.");
}
dataPreferences.on('multiProcessChange', observer);
dataPreferences.putSync('startup', 'auto');
dataPreferences.flush((err: BusinessError) => {
  if (err) {
    console.error("Failed to flush. code =" + err.code + ", message = " + err.message);
    return;
  }
  console.info("Succeeded in flushing.");
})
dataPreferences.off('multiProcessChange', observer);

```

## off('dataChange')

```TypeScript
off(type: 'dataChange', keys: Array<string>, callback?: Callback<Record<string, ValueType>>): void
```

Unsubscribes from changes of specific data.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'dataChange' | 是 | Event type. The value is 'dataChange', which indicates data changes. |
| keys | Array&lt;string> | 是 | Array of keys to be unsubscribed from. If this parameter is left empty, all keys  are unsubscribed from. |
| callback | Callback&lt;Record&lt;string, ValueType>> | 否 | Callback to unregister. If this parameter is not  specified, this API unregisters all callbacks for the changes of the specified data. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let observer = (data: Record<string, preferences.ValueType>) => {
  for (const keyValue of Object.entries(data)) {
    console.info(`observer : ${keyValue}`);
  }
  console.info("The observer called.");
}
let keys = ['name', 'age'];
dataPreferences.on('dataChange', keys, observer);
dataPreferences.putSync('name', 'xiaohong');
dataPreferences.putSync('weight', 125);
dataPreferences.flush((err: BusinessError) => {
  if (err) {
    console.error("Failed to flush. code =" + err.code + ", message = " + err.message);
    return;
  }
  console.info("Succeeded in flushing.");
})
dataPreferences.off('dataChange', keys, observer);

```

## offChange

```TypeScript
offChange(callback?: Callback<string>): void
```

Unregisters an existing observer.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15500000 | Inner error. |

## offDataChange

```TypeScript
offDataChange(keys: Array<string>, callback?: Callback<Record<string, ValueType>>): void
```

Unregisters an observer for changes to the {@ link Preferences} object.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keys | Array&lt;string> | 是 | Indicates the data whose changes are not observed. |
| callback | Callback&lt;Record&lt;string, ValueType>> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15500000 | Inner error. |

## offMultiProcessChange

```TypeScript
offMultiProcessChange(callback?: Callback<string>): void
```

Unregisters an existing observer.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15500000 | Inner error. |

## on('change')

```TypeScript
on(type: 'change', callback: Callback<string>): void
```

Subscribes to data changes. The registered callback will be invoked to return the new value if the data change is [flushed]preferences.Preferences.flush(callback: AsyncCallback<void>).

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'change' | 是 | Event type. The value is 'change', which indicates data changes. |
| callback | Callback&lt;string> | 是 | Callback used to return the data change. [since 11] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let observer = (key: string) => {
  console.info("The key " + key + " changed.");
}
dataPreferences.on('change', observer);
dataPreferences.putSync('startup', 'manual');
dataPreferences.flush((err: BusinessError) => {
  if (err) {
    console.error("Failed to flush. code =" + err.code + ", message = " + err.message);
    return;
  }
  console.info("Succeeded in flushing.");
})

```

## on('multiProcessChange')

```TypeScript
on(type: 'multiProcessChange', callback: Callback<string>): void
```

Subscribes to data changes between processes. When multiple processes hold the same preference file, calling [flush]preferences.Preferences.flush(callback: AsyncCallback<void>) in any process (including the current process) will trigger the callback in this API. This API is provided for applications that have applied for [dataGroupId]preferences.Options. Avoid using this API for the applications that have not applied for **dataGroupId** because calling it in multiple process may damage the persistent files and cause data loss.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'multiProcessChange' | 是 | Event type. The value is 'multiProcessChange', which indicates inter-  process data changes. |
| callback | Callback&lt;string> | 是 | Callback used to return the data change. [since 11] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500019 | Failed to obtain the subscription service. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let observer = (key: string) => {
  console.info("The key " + key + " changed.");
}
dataPreferences.on('multiProcessChange', observer);
dataPreferences.putSync('startup', 'manual');
dataPreferences.flush((err: BusinessError) => {
  if (err) {
    console.error("Failed to flush. code =" + err.code + ", message = " + err.message);
    return;
  }
  console.info("Succeeded in flushing.");
})

```

## on('dataChange')

```TypeScript
on(type: 'dataChange', keys: Array<string>, callback: Callback<Record<string, ValueType>>): void
```

Subscribes to changes of specific data. The registered callback will be invoked only after the values of the specified keys are changed and [flushed]preferences.Preferences.flush(callback: AsyncCallback<void>).

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'dataChange' | 是 | Event type. The value is 'dataChange', which indicates data changes. |
| keys | Array&lt;string> | 是 | Array of the keys to be observed. |
| callback | Callback&lt;Record&lt;string, ValueType>> | 是 | Callback used to return the changed data, in an array  of KV pairs. The keys identify the data changed, and the values are the new values. The values support the  following data types: number, string, boolean, Array, Array, Array, Uint8Array, and  object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let observer = (data: Record<string, preferences.ValueType>) => {
  for (const keyValue of Object.entries(data)) {
    console.info(`observer : ${keyValue}`);
  }
  console.info("The observer called.");
}
let keys = ['name', 'age'];
dataPreferences.on('dataChange', keys, observer);
dataPreferences.putSync('name', 'xiaohong');
dataPreferences.putSync('weight', 125);
dataPreferences.flush((err: BusinessError) => {
  if (err) {
    console.error("Failed to flush. code =" + err.code + ", message = " + err.message);
    return;
  }
  console.info("Succeeded in flushing.");
})

```

## onChange

```TypeScript
onChange(callback: Callback<string>): void
```

Registers an observer to listen for the change of a {@link Preferences} object.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 是 | Indicates the callback function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15500000 | Inner error. |

## onDataChange

```TypeScript
onDataChange(keys: Array<string>, callback: Callback<Record<string, ValueType>>): void
```

Registers an observer to listen for changes to the {@ link Preferences} object.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keys | Array&lt;string> | 是 | Indicates one or more keys to listen for. |
| callback | Callback&lt;Record&lt;string, ValueType>> | 是 | Indicates the callback used to return the data change. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15500000 | Inner error. |

## onMultiProcessChange

```TypeScript
onMultiProcessChange(callback: Callback<string>): void
```

Registers an observer to listen for the change of a {@link Preferences} object.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 是 | Indicates the callback function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15500000 | Inner error. |
| 15500019 | Failed to obtain the subscription service. |

## put

```TypeScript
put(key: string, value: ValueType, callback: AsyncCallback<void>): void
```

Writes data to this **Preferences** instance. This API uses an asynchronous callback to return the result. You can use [flush]preferences.Preferences.flush(callback: AsyncCallback<void>) to persist the **Preferences** instance.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key to be modified. The value cannot be empty. For details about its maximum length, see  [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-preferences.md#constants). |
| value | ValueType | 是 | Value to write. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

dataPreferences.put('startup', 'auto', (err: BusinessError) => {
  if (err) {
    console.error("Failed to put value of 'startup'. code =" + err.code + ", message = " + err.message);
    return;
  }
  console.info("Succeeded in putting value of 'startup'.");
})

```

## put

```TypeScript
put(key: string, value: ValueType): Promise<void>
```

Writes data to this **Preferences** instance. This API uses a promise to return the result. You can use [flush]preferences.Preferences.flush(callback: AsyncCallback<void>) to persist the **Preferences** instance.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key to be modified. The value cannot be empty. For details about its maximum length, see  [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-preferences.md#constants). |
| value | ValueType | 是 | Value to write. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let putStartupPref = dataPreferences.put('startup', 'auto');
putStartupPref.then(() => {
  console.info("Succeeded in putting value of 'startup'.");
}).catch((err: BusinessError) => {
  console.error("Failed to put value of 'startup'. code =" + err.code + ", message = " + err.message);
})

```

## putSync

```TypeScript
putSync(key: string, value: ValueType): void
```

Writes data to this **Preferences** instance. This API returns the result synchronously. You can use [flush]preferences.Preferences.flush(callback: AsyncCallback<void>) to persist the **Preferences** instance.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key to be modified. The value cannot be empty. For details about its maximum length, see  [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-preferences.md#constants). |
| value | ValueType | 是 | Value to write. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
dataPreferences.putSync('startup', 'auto');

```

