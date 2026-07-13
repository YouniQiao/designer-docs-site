# PropertyDescriptor

Describes the SSAP descriptor for property.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## descriptorType

```TypeScript
descriptorType: PropertyDescriptorType
```

The type of the propertyDescriptor instance.

**Type:** PropertyDescriptorType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## isWriteable

```TypeScript
isWriteable?: boolean
```

Indicates whether the descriptor is writable.
Default value: true.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## propertyUuid

```TypeScript
propertyUuid: string
```

The UUID of the {@link Property} instance which the propertyDescriptor belongs to.
The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
<br>NearLink standard UUIDs are not allowed.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of the {@link Service} instance which the master property of descriptor belongs to.
The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
<br>NearLink standard UUIDs are not allowed.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## value

```TypeScript
value: ArrayBuffer
```

The value of the propertyDescriptor instance.

**Type:** ArrayBuffer

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

