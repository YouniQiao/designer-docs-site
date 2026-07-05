# deleteStorage

## deleteStorage

```TypeScript
function deleteStorage(path: string, callback: AsyncCallback<void>): void
```

Deletes the singleton **Storage** instance of a file from the memory, and deletes the specified file, its backup file, and damaged files. After the specified files are deleted, the **Storage** instance cannot be used for data operations. Otherwise, data inconsistency will occur. This API uses an asynchronous callback to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.deletePreferences

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | Path of the target file. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

## deleteStorage

```TypeScript
function deleteStorage(path: string): Promise<void>
```

Deletes the singleton **Storage** instance of a file from the memory, and deletes the specified file, its backup file, and damaged files. After the specified files are deleted, the **Storage** instance cannot be used for data operations. Otherwise, data inconsistency will occur. This API uses a promise to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.deletePreferences

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | Path of the target file. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

