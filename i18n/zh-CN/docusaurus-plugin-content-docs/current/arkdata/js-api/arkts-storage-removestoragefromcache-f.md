# removeStorageFromCache

## removeStorageFromCache

```TypeScript
function removeStorageFromCache(path: string, callback: AsyncCallback<void>): void
```

Removes the singleton **Storage** instance of a file from the cache. The removed instance cannot be used for data operations. Otherwise, data inconsistency will occur. This API uses an asynchronous callback to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.removePreferencesFromCache

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | Path of the target file. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

## removeStorageFromCache

```TypeScript
function removeStorageFromCache(path: string): Promise<void>
```

Removes the singleton **Storage** instance of a file from the cache. The removed instance cannot be used for data operations. Otherwise, data inconsistency will occur. This API uses a promise to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.removePreferencesFromCache

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | Path of the target file. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

