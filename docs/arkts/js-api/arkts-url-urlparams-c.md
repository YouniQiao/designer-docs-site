# URLParams

URLParams是一个用于解析、构造和操作URL参数的实用类。该类提供了统一的接口来处理参数维度（如查询参数、路径参数等）。

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { url } from '@kit.ArkTS';
```

## $_iterator

```TypeScript
$_iterator(): IterableIterator<[string, string]>
```

返回一个ES6的迭代器，迭代器的每一项都是一个JavaScript Array。Array的第一项是name，Array的第二项是value。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[string, string]> | 返回一个ES6的迭代器。 |

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<[string, string]>
```

获取一个ES6迭代器。迭代器的每一项都是一个JavaScript数组，数组的第一项和第二项分别是键和值。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[string, string]> | 返回一个ES6迭代器。迭代器的每一项都是一个JavaScript Array。  Array的第一项是name，第二项是value。 |

**Example**

```TypeScript
const paramsObject = new url.URLParams('fod=bay&edg=bap');
let iter = paramsObject[Symbol.iterator]();
for (let pair of iter) {
  console.info(pair[0] + ', ' + pair[1]);
}
// fod, bay
// edg, bap

```

## append

```TypeScript
append(name: string, value: string): void
```

将新的键值对插入到查询字符串。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 需要插入搜索参数的键名。 |
| value | string | Yes | 需要插入搜索参数的值。 |

**Example**

```TypeScript
let urlObject = url.URL.parseURL('https://developer.exampleUrl/?fod=1&bard=2');
let paramsObject = new url.URLParams(urlObject.search.slice(1));
paramsObject.append('fod', '3');

```

## constructor

```TypeScript
constructor(init?: string[][] | Record<string, string> | string | URLParams)
```

ArkTS-Sta: constructor(init?: [string, string][] | Record&lt;string, string&gt; | string | URLParams) URLParams的构造函数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| init | string[][] \| Record&lt;string, string> \| string \| URLParams | No |  |

**Example**

```TypeScript
// Construct a URLParams object in string[][] mode.
let objectParams = new url.URLParams([ ['user1', 'abc1'], ['query2', 'first2'], ['query3', 'second3'] ]);
// Construct a URLParams object in Record<string, string> mode.
let objectParams1 = new url.URLParams({"fod" : '1' , "bard" : '2'});
// Construct a URLParams object in string mode.
let objectParams2 = new url.URLParams('?fod=1&bard=2');
// Construct a URLParams object using the search property of the url object.
let urlObject = url.URL.parseURL('https://developer.mozilla.org/?fod=1&bard=2');
let objectParams3 = new url.URLParams(urlObject.search);
// Construct a URLParams object using the params property of the url object.
let urlObject1 = url.URL.parseURL('https://developer.mozilla.org/?fod=1&bard=2');
let objectParams4 = urlObject1.params;

```

## constructor

```TypeScript
constructor(init?: [string, string][] | Record<string, string> | string | URLParams)
```

用于创建URLParams实例的参数化构造函数。 作为构造函数的输入参数，init支持四种类型。 输入参数是字符串二维数组。 输入参数是对象列表。 输入参数是字符串。 输入参数是URLParams对象。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| init | [string, string][] \| Record&lt;string, string> \| string \| URLParams | No |  |

## delete

```TypeScript
delete(name: string): void
```

删除指定名称的键值对。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 需要删除的键值名称。 |

**Example**

```TypeScript
let urlObject = url.URL.parseURL('https://developer.exampleUrl/?fod=1&bard=2');
let paramsObject = new url.URLParams(urlObject.search.slice(1));
paramsObject.delete('fod');

```

## entries

```TypeScript
entries(): IterableIterator<[string, string]>
```

返回一个ES6的迭代器，迭代器的每一项都是一个Array。Array的第一项是name，Array的第二项是value。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[string, string]> | 返回一个ES6的迭代器。 |

**Example**

```TypeScript
let paramsObject = new url.URLParams("keyName1=valueName1&keyName2=valueName2");
let pair = paramsObject.entries();
for (let item of pair) {
    console.info(item[0] + '=' + item[1]);
}
// keyName1=valueName1
// keyName2=valueName2

```

## forEach

```TypeScript
forEach(callbackFn: (value: string, key: string, searchParams: URLParams) => void, thisArg?: Object): void
```

通过回调函数来遍历URLParams实例对象上的键值对。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value: string, key: string, searchParams: URLParams) => void | Yes | 回调函数。 |
| thisArg | Object | No |  |

**Example**

```TypeScript
const myURLObject = url.URL.parseURL('https://developer.exampleUrl/?fod=1&bard=2');
myURLObject.params.forEach((value, name, searchParams) => {
    console.info(name, value, myURLObject.params === searchParams);
});

```

## forEach

```TypeScript
forEach(callbackFn: UrlCbFn): void
```

通过回调函数来遍历URLSearchParams实例对象上的键值对。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | UrlCbFn | Yes | 回调函数。 |

## get

```TypeScript
get(name: string): string | null
```

获取指定名称对应的第一个值。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 指定键值对的名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回第一个值，如果没找到，返回 null。 |

**Example**

```TypeScript
let paramsObject = new url.URLParams('name=Jonathan&age=18');
let name = paramsObject.get("name"); // is the string "Jonathan"
let age = paramsObject.get("age"); // is the string "18"
let getObj = paramsObject.get("abc"); // undefined

```

## get

```TypeScript
get(name: string): string | undefined
```

根据指定的键获取第一个键值对的值。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 指定用于获取值的键。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回按名称找到的第一个值。  如果未找到值，则返回undefined。 |

## getAll

```TypeScript
getAll(name: string): string[]
```

获取指定名称的所有键对应值的集合。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 指定的键值名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| string[] | 返回指定名称的所有键对应值的集合。 |

**Example**

```TypeScript
let urlObject = url.URL.parseURL('https://developer.exampleUrl/?fod=1&bard=2');
let params = new url.URLParams(urlObject.search.slice(1));
params.append('fod', '3'); // Add a second value for the fod parameter.
console.info(params.getAll('fod').toString()) // Output ["1","3"].

```

## has

```TypeScript
has(name: string): boolean
```

判断一个指定的键名对应的值是否存在。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 要查找的参数的键名。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 是否存在相对应的key值，存在返回true，否则返回false。 |

**Example**

```TypeScript
let urlObject = url.URL.parseURL('https://developer.exampleUrl/?fod=1&bard=2');
let paramsObject = new url.URLParams(urlObject.search.slice(1));
let result = paramsObject.has('bard');

```

## keys

```TypeScript
keys(): IterableIterator<string>
```

返回一个包含所有键值对的name的ES6迭代器。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;string> | 返回一个包含所有键值对的name的ES6迭代器。 |

**Example**

```TypeScript
let paramsObject = new url.URLParams("key1=value1&key2=value2");
let keys = paramsObject.keys();
for (let key of keys) {
  console.info(key);
}
// key1
// key2

```

## set

```TypeScript
set(name: string, value: string): void
```

将与name关联的URLSearchParams对象中的值设置为value。 如果存在名称为name的键值对，请将第一个键值对的值设置为value并删除所有其他值。如果不是，则将键值对附加到查询字符串。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 将要设置的参数的键值名。 |
| value | string | Yes | 所要设置的参数值。 |

**Example**

```TypeScript
let urlObject = url.URL.parseURL('https://developer.exampleUrl/?fod=1&bard=2');
let paramsObject = new url.URLParams(urlObject.search.slice(1));
paramsObject.set('baz', '3'); // Add a third parameter.

```

## sort

```TypeScript
sort(): void
```

对包含在此对象中的所有键值对进行排序。排序顺序是根据键的Unicode代码点。该方法使用稳定的排序算法（保留具有相等键的键值对之间的相对顺序）。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let paramsObject = new url.URLParams("c=3&a=9&b=4&d=2"); // Create a test URLParams object
paramsObject.sort(); // Sort the key/value pairs
console.info(paramsObject.toString()); // Display the sorted query string // Output a=9&b=4&c=3&d=2

```

## toString

```TypeScript
toString(): string
```

返回序列化为字符串的搜索参数，必要时对字符进行百分比编码。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回序列化为字符串的搜索参数，必要时对字符进行百分比编码。 |

**Example**

```TypeScript
let urlObject = url.URL.parseURL('https://developer.exampleUrl/?fod=1&bard=2');
let params = new url.URLParams(urlObject.search.slice(1));
params.append('fod', '3');
console.info(params.toString()); // Output 'fod=1&bard=2&fod=3'

```

## values

```TypeScript
values(): IterableIterator<string>
```

返回一个包含所有键值对的value的ES6迭代器。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;string> | 返回一个包含所有键值对的value的ES6迭代器。 |

**Example**

```TypeScript
let paramsObject = new url.URLParams("key1=value1&key2=value2");
let values = paramsObject.values();
for (let value of values) {
  console.info(value);
}
// value1
// value2

```

