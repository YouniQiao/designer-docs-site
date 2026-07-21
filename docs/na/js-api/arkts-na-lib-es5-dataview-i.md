# DataView

<!--Device-unnamed-interface DataView--><!--Device-unnamed-interface DataView-End-->

<a id="getfloat32"></a>
## getFloat32

```TypeScript
getFloat32(byteOffset: number, littleEndian?: boolean): number
```

Gets the Float32 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

<!--Device-DataView-getFloat32(byteOffset: number, littleEndian?: boolean): number--><!--Device-DataView-getFloat32(byteOffset: number, littleEndian?: boolean): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| littleEndian | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="getfloat64"></a>
## getFloat64

```TypeScript
getFloat64(byteOffset: number, littleEndian?: boolean): number
```

Gets the Float64 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

<!--Device-DataView-getFloat64(byteOffset: number, littleEndian?: boolean): number--><!--Device-DataView-getFloat64(byteOffset: number, littleEndian?: boolean): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| littleEndian | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="getint16"></a>
## getInt16

```TypeScript
getInt16(byteOffset: number, littleEndian?: boolean): number
```

Gets the Int16 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

<!--Device-DataView-getInt16(byteOffset: number, littleEndian?: boolean): number--><!--Device-DataView-getInt16(byteOffset: number, littleEndian?: boolean): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| littleEndian | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="getint32"></a>
## getInt32

```TypeScript
getInt32(byteOffset: number, littleEndian?: boolean): number
```

Gets the Int32 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

<!--Device-DataView-getInt32(byteOffset: number, littleEndian?: boolean): number--><!--Device-DataView-getInt32(byteOffset: number, littleEndian?: boolean): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| littleEndian | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="getint8"></a>
## getInt8

```TypeScript
getInt8(byteOffset: number): number
```

Gets the Int8 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

<!--Device-DataView-getInt8(byteOffset: number): number--><!--Device-DataView-getInt8(byteOffset: number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="getuint16"></a>
## getUint16

```TypeScript
getUint16(byteOffset: number, littleEndian?: boolean): number
```

Gets the Uint16 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

<!--Device-DataView-getUint16(byteOffset: number, littleEndian?: boolean): number--><!--Device-DataView-getUint16(byteOffset: number, littleEndian?: boolean): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| littleEndian | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="getuint32"></a>
## getUint32

```TypeScript
getUint32(byteOffset: number, littleEndian?: boolean): number
```

Gets the Uint32 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

<!--Device-DataView-getUint32(byteOffset: number, littleEndian?: boolean): number--><!--Device-DataView-getUint32(byteOffset: number, littleEndian?: boolean): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| littleEndian | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="getuint8"></a>
## getUint8

```TypeScript
getUint8(byteOffset: number): number
```

Gets the Uint8 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset.

<!--Device-DataView-getUint8(byteOffset: number): number--><!--Device-DataView-getUint8(byteOffset: number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="setfloat32"></a>
## setFloat32

```TypeScript
setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void
```

Stores an Float32 value at the specified byte offset from the start of the view.

<!--Device-DataView-setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void--><!--Device-DataView-setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| value | number | Yes |  |
| littleEndian | boolean | No |  |

<a id="setfloat64"></a>
## setFloat64

```TypeScript
setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void
```

Stores an Float64 value at the specified byte offset from the start of the view.

<!--Device-DataView-setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void--><!--Device-DataView-setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| value | number | Yes |  |
| littleEndian | boolean | No |  |

<a id="setint16"></a>
## setInt16

```TypeScript
setInt16(byteOffset: number, value: number, littleEndian?: boolean): void
```

Stores an Int16 value at the specified byte offset from the start of the view.

<!--Device-DataView-setInt16(byteOffset: number, value: number, littleEndian?: boolean): void--><!--Device-DataView-setInt16(byteOffset: number, value: number, littleEndian?: boolean): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| value | number | Yes |  |
| littleEndian | boolean | No |  |

<a id="setint32"></a>
## setInt32

```TypeScript
setInt32(byteOffset: number, value: number, littleEndian?: boolean): void
```

Stores an Int32 value at the specified byte offset from the start of the view.

<!--Device-DataView-setInt32(byteOffset: number, value: number, littleEndian?: boolean): void--><!--Device-DataView-setInt32(byteOffset: number, value: number, littleEndian?: boolean): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| value | number | Yes |  |
| littleEndian | boolean | No |  |

<a id="setint8"></a>
## setInt8

```TypeScript
setInt8(byteOffset: number, value: number): void
```

Stores an Int8 value at the specified byte offset from the start of the view.

<!--Device-DataView-setInt8(byteOffset: number, value: number): void--><!--Device-DataView-setInt8(byteOffset: number, value: number): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| value | number | Yes |  |

<a id="setuint16"></a>
## setUint16

```TypeScript
setUint16(byteOffset: number, value: number, littleEndian?: boolean): void
```

Stores an Uint16 value at the specified byte offset from the start of the view.

<!--Device-DataView-setUint16(byteOffset: number, value: number, littleEndian?: boolean): void--><!--Device-DataView-setUint16(byteOffset: number, value: number, littleEndian?: boolean): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| value | number | Yes |  |
| littleEndian | boolean | No |  |

<a id="setuint32"></a>
## setUint32

```TypeScript
setUint32(byteOffset: number, value: number, littleEndian?: boolean): void
```

Stores an Uint32 value at the specified byte offset from the start of the view.

<!--Device-DataView-setUint32(byteOffset: number, value: number, littleEndian?: boolean): void--><!--Device-DataView-setUint32(byteOffset: number, value: number, littleEndian?: boolean): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| value | number | Yes |  |
| littleEndian | boolean | No |  |

<a id="setuint8"></a>
## setUint8

```TypeScript
setUint8(byteOffset: number, value: number): void
```

Stores an Uint8 value at the specified byte offset from the start of the view.

<!--Device-DataView-setUint8(byteOffset: number, value: number): void--><!--Device-DataView-setUint8(byteOffset: number, value: number): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteOffset | number | Yes |  |
| value | number | Yes |  |

## buffer

```TypeScript
readonly buffer: ArrayBuffer
```

**Type:** ArrayBuffer

<!--Device-DataView-readonly buffer: ArrayBuffer--><!--Device-DataView-readonly buffer: ArrayBuffer-End-->

## byteLength

```TypeScript
readonly byteLength: number
```

**Type:** number

<!--Device-DataView-readonly byteLength: number--><!--Device-DataView-readonly byteLength: number-End-->

## byteOffset

```TypeScript
readonly byteOffset: number
```

**Type:** number

<!--Device-DataView-readonly byteOffset: number--><!--Device-DataView-readonly byteOffset: number-End-->

