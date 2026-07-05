# StyledStringUnmarshallCallback

```TypeScript
declare type StyledStringUnmarshallCallback = (buf: ArrayBuffer) => StyledStringMarshallingValue
```

属性字符串反序列化ArrayBuffer得到[StyledStringMarshallingValue](arkts-styledstringmarshallingvalue-t-sys.md#StyledStringMarshallingValue)回调类型。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buf | ArrayBuffer | Yes | [StyledStringMarshallingValue](arkts-styledstringmarshallingvalue-t-sys.md#StyledStringMarshallingValue)序列化后的数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| StyledStringMarshallingValue | 反序列化得到的[StyledStringMarshallingValue](arkts-styledstringmarshallingvalue-t-sys.md#StyledStringMarshallingValue) 。 |

