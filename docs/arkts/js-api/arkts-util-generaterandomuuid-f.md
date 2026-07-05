# generateRandomUUID

## generateRandomUUID

```TypeScript
function generateRandomUUID(entropyCache?: boolean): string
```

使用安全随机数生成器生成 RFC 4122 版本 4 的随机通用唯一识别码（UUID，字符串类型）。为了提升性能，本接口默认使用缓存 的 uuid，其中 **entropyCache** 设置为 **true**。最多可缓存 128 个随机 uuid。当缓存的 128 个 uuid 全部用完后，会 再生成一组新的 uuid 以保持随机分布。如果不需要使用缓存的 uuid，可将 **entropyCache** 设置为 **false**。

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
| string | 表示所生成 uuid 的字符串。 |

**Example**

```TypeScript
let uuid = util.generateRandomUUID(true);
console.info("RFC 4122 Version 4 UUID:" + uuid);
// Output a random UUID.

```

