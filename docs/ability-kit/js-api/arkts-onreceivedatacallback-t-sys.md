# OnReceiveDataCallback

```TypeScript
export type OnReceiveDataCallback = (data: Record<string, RecordData>) => void
```

从UIExtensionComponent控件接收数据的回调方法。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, RecordData> | Yes | 回调函数，返回接收的数据。 |

