# StyledStringMarshallCallback

```TypeScript
declare type StyledStringMarshallCallback = (marshallableVal: StyledStringMarshallingValue) => ArrayBuffer
```

属性字符串[StyledStringMarshallingValue](arkts-styledstringmarshallingvalue-t-sys.md#StyledStringMarshallingValue)序列化回调类型。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| marshallableVal | StyledStringMarshallingValue | Yes | 属性字符串序列化对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | [StyledStringMarshallingValue](arkts-styledstringmarshallingvalue-t-sys.md#StyledStringMarshallingValue)序列化后的数据。 |

