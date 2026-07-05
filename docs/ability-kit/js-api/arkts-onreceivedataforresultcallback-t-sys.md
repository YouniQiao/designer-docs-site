# OnReceiveDataForResultCallback

```TypeScript
export type OnReceiveDataForResultCallback = (data: Record<string, RecordData>) => Record<string, RecordData>
```

从UIExtensionComponent控件接收数据带返回值的回调方法。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, RecordData> | Yes | 回调函数，返回带返回值的接收的数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| Record&lt;string, RecordData> | 返回的数据对象。 |

