# getHash

## getHash

```TypeScript
function getHash(object: object): number
```

获取对象的哈希值。 如果尚未获取过哈希值，则生成一个随机哈希值，保存到对象的 **hash** 字段中并返回。如果已经获取过哈希值，则返回保存在 **hash** 字段中的哈希值（同一对象返回相同的值）。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| object | object | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 哈希值。 |

**Example**

```TypeScript
interface Person {
  name: string,
  age: number
}
let obj: Person = { name: 'Jack', age: 20 };
let result1 = util.getHash(obj);
console.info('result1 is ' + result1);
let result2 = util.getHash(obj);
console.info('result2 is ' + result2);
// Output: The values of result1 and result2 are the same and are a random hash value.

```

