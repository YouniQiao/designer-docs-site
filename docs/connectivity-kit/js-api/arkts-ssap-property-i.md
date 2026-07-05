# Property

SSAP属性。

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## descriptors

```TypeScript
descriptors?: PropertyDescriptor[]
```

属性中包含的描述符列表。

**Type:** PropertyDescriptor[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## propertyUuid

```TypeScript
propertyUuid: string
```

Property实例的UUID 长度必须为32，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。 <br>不允许使用NearLink标准UUID。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## operation

```TypeScript
operation?: int
```

指示如何访问数据值和描述符值。 取值为枚举值的或运算。 取值范围为全体整数。 默认值： 默认值：READABLE | WRITE_NO_RESPONSE。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## value

```TypeScript
value: ArrayBuffer
```

Property实例的值。

**Type:** ArrayBuffer

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## serviceUuid

```TypeScript
serviceUuid: string
```

属性所属的{@link Service}实例的UUID 长度必须为32，禁止使用星闪标准服务UUID。 <br>不允许使用NearLink标准UUID。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

