# Storage

Provides APIs for obtaining and modifying storage data. Before calling the following APIs, use [data_storage.getStorage]storage.getStorageSync or [data_storage.getStorageSync]storage.getStorageSync to obtain the **Storage** instance.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

## clear

```TypeScript
clear(callback: AsyncCallback<void>): void
```

Clears this **Storage** object. This API uses an asynchronous callback to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.clear

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
storage.clear(function (err) {
    if (err) {
        console.info("Failed to clear the storage with err: " + err);
        return;
    }
    console.info("Succeeded in clearing the storage.");
})

```

## clear

```TypeScript
clear(): Promise<void>
```

Clears this **Storage** object. This API uses a promise to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.clear

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A promise object. |

**示例：**

```TypeScript
let promiseclear = storage.clear();
promiseclear.then(() => {
    console.info("Succeeded in clearing the storage.");
}).catch((err) => {
    console.info("Failed to clear the storage with err: " + err);
})

```

## clearSync

```TypeScript
clearSync(): void
```

Clears this **Storage** object.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.clear

**示例：**

```TypeScript
storage.clearSync();

```

## delete

```TypeScript
delete(key: string, callback: AsyncCallback<void>): void
```

Deletes data with the specified key from this storage object. This API uses an asynchronous callback to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.delete

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the data. It cannot be empty. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
storage.delete('startup', function (err) {
    if (err) {
        console.info("Failed to delete startup key failed err: " + err);
        return;
    }
    console.info("Succeeded in deleting startup key.");
})

```

## delete

```TypeScript
delete(key: string): Promise<void>
```

Deletes data with the specified key from this storage object. This API uses a promise to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.delete

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the data. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**示例：**

```TypeScript
let promisedel = storage.delete('startup')
promisedel.then(() => {
    console.info("Succeeded in deleting startup key.");
}).catch((err) => {
    console.info("Failed to delete startup key failed err: " + err);
})

```

## deleteSync

```TypeScript
deleteSync(key: string): void
```

Deletes data with the specified key from this storage object.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.delete

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the data. It cannot be empty. |

**示例：**

```TypeScript
 storage.deleteSync('startup');

```

## flush

```TypeScript
flush(callback: AsyncCallback<void>): void
```

Saves the modification of this object to the **Storage** instance and synchronizes the modification to the file. This API uses an asynchronous callback to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.flush

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
storage.flush(function (err) {
    if (err) {
        console.info("Failed to flush to file with err: " + err);
        return;
    }
    console.info("Succeeded in flushing to file.");
})

```

## flush

```TypeScript
flush(): Promise<void>
```

Saves the modification of this object to the **Storage** instance and synchronizes the modification to the file. This API uses a promise to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.flush

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**示例：**

```TypeScript
let promiseflush = storage.flush();
promiseflush.then(() => {
    console.info("Succeeded in flushing to file.");
}).catch((err) => {
    console.info("Failed to flush to file with err: " + err);
})

```

## flushSync

```TypeScript
flushSync(): void
```

Saves the modification of this object to the **Storage** instance and synchronizes the modification to the file.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.flush

**示例：**

```TypeScript
storage.flushSync();

```

## get

```TypeScript
get(key: string, defValue: ValueType, callback: AsyncCallback<ValueType>): void
```

Obtains the value corresponding to a key. If the value is null or not of the default value type, **defValue** is returned. This API uses an asynchronous callback to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.get

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the data. It cannot be empty. |
| defValue | ValueType | 是 | Default value to be returned. It can be a number, string, or Boolean value. |
| callback | AsyncCallback&lt;ValueType> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
storage.get('startup', 'default', function(err, value) {
    if (err) {
        console.info("Failed to get the value of startup with err: " + err);
        return;
      }
    console.info("The value of startup is " + value);
})

```

## get

```TypeScript
get(key: string, defValue: ValueType): Promise<ValueType>
```

Obtains the value corresponding to a key. If the value is null or not of the default value type, **defValue** is returned. This API uses a promise to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.get

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the data. It cannot be empty. |
| defValue | ValueType | 是 | Default value to be returned. It can be a number, string, or Boolean value. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ValueType> | Promise used to return the result. |

**示例：**

```TypeScript
let promiseget = storage.get('startup', 'default');
promiseget.then((value) => {
    console.info("The value of startup is " + value)
}).catch((err) => {
    console.info("Failed to get the value of startup with err: " + err);
})

```

## getSync

```TypeScript
getSync(key: string, defValue: ValueType): ValueType
```

Obtains the value corresponding to a key. If the value is null or not of the default value type, **defValue** is returned.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.get

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the data. It cannot be empty. |
| defValue | ValueType | 是 | Default value to be returned if the value of the specified key does not exist. It  can be a number, string, or Boolean value. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ValueType | Value corresponding to the specified key. If the value is null or not in the default value  format, the default value is returned. |

**示例：**

```TypeScript
let value = storage.getSync('startup', 'default');
console.info("The value of startup is " + value);

```

## has

```TypeScript
has(key: string, callback: AsyncCallback<boolean>): boolean
```

Checks whether the storage object contains data with a given key. This API uses an asynchronous callback to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.has

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the data. It cannot be empty. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the storage object contains data with the specified key; returns  false otherwise. |

**示例：**

```TypeScript
storage.has('startup', function (err, isExist) {
    if (err) {
        console.info("Failed to check the key of startup with err: " + err);
        return;
    }
    if (isExist) {
        console.info("The key of startup is contained.");
    }
})

```

## has

```TypeScript
has(key: string): Promise<boolean>
```

Checks whether the storage object contains data with a given key. This API uses a promise to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.has

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the data. It cannot be empty. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. |

**示例：**

```TypeScript
let promisehas = storage.has('startup')
promisehas.then((isExist) => {
    if (isExist) {
        console.info("The key of startup is contained.");
    }
}).catch((err) => {
    console.info("Failed to check the key of startup with err: " + err);
})

```

## hasSync

```TypeScript
hasSync(key: string): boolean
```

Checks whether the storage object contains data with a given key.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.has

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the data. It cannot be empty. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the storage object contains data with the specified key; returns  false otherwise. |

**示例：**

```TypeScript
let isExist = storage.hasSync('startup');
if (isExist) {
    console.info("The key of startup is contained.");
}

```

## off('change')

```TypeScript
off(type: 'change', callback: Callback<StorageObserver>): void
```

Unsubscribes from data changes.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.off

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'change' | 是 | Event type. The value change indicates data change events. |
| callback | Callback&lt;StorageObserver> | 是 | Callback for the data change. |

**示例：**

```TypeScript
let observer = function (key) {
    console.info("The key of " + key + " changed.");
}
storage.off('change', observer);

```

## on('change')

```TypeScript
on(type: 'change', callback: Callback<StorageObserver>): void
```

Subscribes to data changes. The **StorageObserver** needs to be implemented. When the value of the key subscribed to is changed, a callback will be invoked after **flush()** or **flushSync()** is executed.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.on

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'change' | 是 | Event type. The value change indicates data change events. |
| callback | Callback&lt;StorageObserver> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
let observer = function (key) {
    console.info("The key of " + key + " changed.");
}
storage.on('change', observer);
storage.putSync('startup', 'auto');
storage.flushSync();  // observer will be called.

```

## put

```TypeScript
put(key: string, value: ValueType, callback: AsyncCallback<void>): void
```

Obtains the **Storage** instance corresponding to the specified file, writes data to the **Storage** instance using a **Storage** API, and saves the modification using **flush()** or **flushSync()**. This API uses an asynchronous callback to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.put

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the data. It cannot be empty. |
| value | ValueType | 是 | New value to store. It can be a number, string, or Boolean value. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
storage.put('startup', 'auto', function (err) {
    if (err) {
        console.info("Failed to put the value of startup with err: " + err);
        return;
    }
    console.info("Succeeded in putting the value of startup.");
})

```

## put

```TypeScript
put(key: string, value: ValueType): Promise<void>
```

Obtains the **Storage** instance corresponding to the specified file, writes data to the **Storage** instance using a **Storage** API, and saves the modification using **flush()** or **flushSync()**. This API uses a promise to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.put

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the data. It cannot be empty. |
| value | ValueType | 是 | New value to store. It can be a number, string, or Boolean value. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**示例：**

```TypeScript
let promiseput = storage.put('startup', 'auto');
promiseput.then(() => {
    console.info("Succeeded in putting the value of startup.");
}).catch((err) => {
    console.info("Failed to put the value of startup with err: " + err);
})

```

## putSync

```TypeScript
putSync(key: string, value: ValueType): void
```

Obtains the **Storage** instance corresponding to the specified file, writes data to the **Storage** instance using a **Storage** API, and saves the modification using **flush()** or **flushSync()**.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.put

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the data. It cannot be empty. |
| value | ValueType | 是 | New value to store. It can be a number, string, or Boolean value. |

**示例：**

```TypeScript
storage.putSync('startup', 'auto');

```

