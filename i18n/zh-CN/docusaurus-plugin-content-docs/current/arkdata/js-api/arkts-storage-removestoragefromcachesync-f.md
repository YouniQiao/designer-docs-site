# removeStorageFromCacheSync

## removeStorageFromCacheSync

```TypeScript
function removeStorageFromCacheSync(path: string): void
```

Removes the singleton **Storage** instance of a file from the cache. The removed instance cannot be used for data operations. Otherwise, data inconsistency will occur.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.removePreferencesFromCache

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | Indicates the path of storage file. |

