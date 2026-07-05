# getPreferences

## getPreferences

```TypeScript
function getPreferences(context: Context, options: Options): Promise<Preferences>
```

Obtains a **Preferences** instance. This API uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. |
| options | Options | 是 | Configuration options of the Preferences instance. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Preferences> | Promise used to return the Preferences instance obtained.   This instance inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed  between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)  by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 15500000 | Inner error. |
| 15501001 | The operations is supported in stage mode only. |
| 15501002 | Invalid dataGroupId. |

