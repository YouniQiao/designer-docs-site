# getStorage

## getStorage

```TypeScript
function getStorage(path: string, callback: AsyncCallback<Storage>): void
```

Reads the specified file and loads its data to the **Storage** instance for data operations. This API uses an asynchronous callback to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.getPreferences

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | Path of the target file. |
| callback | AsyncCallback&lt;Storage> | 是 | Callback used to return the result. |

## getStorage

```TypeScript
function getStorage(path: string): Promise<Storage>
```

Reads the specified file and loads its data to the **Storage** instance for data operations. This API uses a promise to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences.getPreferences

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | Path of the target file. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Storage> | Promise used to return the result. |

