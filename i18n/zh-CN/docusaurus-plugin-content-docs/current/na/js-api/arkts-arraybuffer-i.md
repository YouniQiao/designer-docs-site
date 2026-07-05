# ArrayBuffer

Represents a raw buffer of binary data, which is used to store data for the different typed arrays. ArrayBuffers cannot be read from or written to directly, but can be passed to a typed array or DataView Object to interpret the raw buffer as needed.

## slice

```TypeScript
slice(begin: number, end?: number): ArrayBuffer
```

Returns a section of an ArrayBuffer.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| begin | number | 是 |  |
| end | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ArrayBuffer |  |

## byteLength

```TypeScript
readonly byteLength: number
```

Read-only. The length of the ArrayBuffer (in bytes).

**类型：** number

