# parseUUID

## parseUUID

```TypeScript
function parseUUID(uuid: string): Uint8Array
```

将 **generateRandomUUID** 生成的字符串类型的 UUID 转换为 **generateRandomBinaryUUID** 生成的 UUID，如 RFC 4122 所述。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | string | Yes | 表示 UUID 的字符串。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 表示解析后 UUID 的 Uint8Array 值。如果解析失败，则抛出 SyntaxError。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200002 | Invalid uuid string. |

**Example**

```TypeScript
let uuid = util.parseUUID("84bdf796-66cc-4655-9b89-d6218d100f9c");
console.info("uuid = " + uuid);
// Output: uuid = 132,189,247,150,102,204,70,85,155,137,214,33,141,16,15,156

```

