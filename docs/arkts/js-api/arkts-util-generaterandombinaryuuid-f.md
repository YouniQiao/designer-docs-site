# generateRandomBinaryUUID

## generateRandomBinaryUUID

```TypeScript
function generateRandomBinaryUUID(entropyCache?: boolean): Uint8Array
```

使用安全随机数生成器生成 RFC 4122 版本 4 的随机通用唯一识别码（UUID）。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| entropyCache | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 表示所生成 uuid 的 Uint8Array 值。 |

**Example**

```TypeScript
let uuid = util.generateRandomBinaryUUID(true);
console.info(JSON.stringify(uuid));
// Output a random UUID.

```

