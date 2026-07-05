# deleteStorageSync

## deleteStorageSync

```TypeScript
function deleteStorageSync(path: string): void
```

Deletes the singleton **Storage** instance of a file from the memory, and deletes the specified file, its backup file, and damaged files. After the specified files are deleted, the **Storage** instance cannot be used for data operations. Otherwise, data inconsistency will occur.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.deletePreferences

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | Path of the target file. |

