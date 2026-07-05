# alloc

## alloc

```TypeScript
function alloc(size: int, fill?: string | Buffer | int | double | long, encoding?: BufferEncoding): Buffer
```

创建指定字节长度的Buffer对象并初始化。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | int | Yes | 指定的Buffer对象长度，单位：字节。 |
| fill | string \| Buffer \| int \| double \| long | No |  |
| encoding | BufferEncoding | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 返回一个Buffer对象。 |

