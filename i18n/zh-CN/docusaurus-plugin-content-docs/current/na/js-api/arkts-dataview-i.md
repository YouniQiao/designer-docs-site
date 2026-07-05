# DataView

## getFloat32

```TypeScript
getFloat32(byteOffset: number, littleEndian?: boolean): number
```

Gets the Float32 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| littleEndian | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## getFloat64

```TypeScript
getFloat64(byteOffset: number, littleEndian?: boolean): number
```

Gets the Float64 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| littleEndian | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## getInt16

```TypeScript
getInt16(byteOffset: number, littleEndian?: boolean): number
```

Gets the Int16 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| littleEndian | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## getInt32

```TypeScript
getInt32(byteOffset: number, littleEndian?: boolean): number
```

Gets the Int32 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| littleEndian | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## getInt8

```TypeScript
getInt8(byteOffset: number): number
```

Gets the Int8 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## getUint16

```TypeScript
getUint16(byteOffset: number, littleEndian?: boolean): number
```

Gets the Uint16 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| littleEndian | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## getUint32

```TypeScript
getUint32(byteOffset: number, littleEndian?: boolean): number
```

Gets the Uint32 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| littleEndian | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## getUint8

```TypeScript
getUint8(byteOffset: number): number
```

Gets the Uint8 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## setFloat32

```TypeScript
setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void
```

Stores an Float32 value at the specified byte offset from the start of the view.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| value | number | 是 |  |
| littleEndian | boolean | 否 |  |

## setFloat64

```TypeScript
setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void
```

Stores an Float64 value at the specified byte offset from the start of the view.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| value | number | 是 |  |
| littleEndian | boolean | 否 |  |

## setInt16

```TypeScript
setInt16(byteOffset: number, value: number, littleEndian?: boolean): void
```

Stores an Int16 value at the specified byte offset from the start of the view.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| value | number | 是 |  |
| littleEndian | boolean | 否 |  |

## setInt32

```TypeScript
setInt32(byteOffset: number, value: number, littleEndian?: boolean): void
```

Stores an Int32 value at the specified byte offset from the start of the view.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| value | number | 是 |  |
| littleEndian | boolean | 否 |  |

## setInt8

```TypeScript
setInt8(byteOffset: number, value: number): void
```

Stores an Int8 value at the specified byte offset from the start of the view.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| value | number | 是 |  |

## setUint16

```TypeScript
setUint16(byteOffset: number, value: number, littleEndian?: boolean): void
```

Stores an Uint16 value at the specified byte offset from the start of the view.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| value | number | 是 |  |
| littleEndian | boolean | 否 |  |

## setUint32

```TypeScript
setUint32(byteOffset: number, value: number, littleEndian?: boolean): void
```

Stores an Uint32 value at the specified byte offset from the start of the view.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| value | number | 是 |  |
| littleEndian | boolean | 否 |  |

## setUint8

```TypeScript
setUint8(byteOffset: number, value: number): void
```

Stores an Uint8 value at the specified byte offset from the start of the view.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| byteOffset | number | 是 |  |
| value | number | 是 |  |

## byteOffset

```TypeScript
readonly byteOffset: number
```

**类型：** number

## byteLength

```TypeScript
readonly byteLength: number
```

**类型：** number

## buffer

```TypeScript
readonly buffer: ArrayBuffer
```

**类型：** ArrayBuffer

