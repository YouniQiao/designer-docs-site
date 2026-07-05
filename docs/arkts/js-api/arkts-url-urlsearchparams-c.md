# URLSearchParams

URLSearchParams接口定义了一些处理URL查询字符串的实用方法，从API version 9开始废弃，建议使用[URLParams]url.URLParams。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { url } from '@kit.ArkTS';
```

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<[string, string]>
```

返回一个迭代器，允许遍历此对象中包含的所有键值对。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.[Symbol.iterator]

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[string, string]> | 返回一个ES6迭代器。迭代器的每一项都是一个JavaScript Array。  Array的第一项是name，第二项是value。 |

**Example**

```TypeScript
const paramsObject = new url.URLSearchParams('fod=bay&edg=bap');
let pairs = paramsObject[Symbol.iterator]();
for (let pair of pairs) {
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

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.append

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 需要插入搜索参数的键名。 |
| value | string | Yes | 需要插入搜索参数的值。 |

**Example**

```TypeScript
let urlObject = new url.URL('https://developer.exampleUrl/?fod=1&bard=2');
let paramsObject = new url.URLSearchParams(urlObject.search.slice(1));
paramsObject.append('fod', '3');

```

## constructor

```TypeScript
constructor(init?: string[][] | Record<string, string> | string | URLSearchParams)
```

URLSearchParams的构造函数。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.constructor

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| init | string[][] \| Record&lt;string, string> \| string \| URLSearchParams | No | 入参对象。 - string[][]：字符串二维  数组。 - Record：对象列表。 - string：字符串。 - URLSearchParams：对象。 - 默认值：undefined。 |

**Example**

```TypeScript
let objectParams = new url.URLSearchParams([ ['user1', 'abc1'], ['query2', 'first2'], ['query3', 'second3'] ]);
let objectParams1 = new url.URLSearchParams({"fod" : '1' , "bard" : '2'});
let objectParams2 = new url.URLSearchParams('?fod=1&bard=2');
let urlObject = new url.URL('https://developer.mozilla.org/?fod=1&bard=2');
let params = new url.URLSearchParams(urlObject.search);

```

## delete

```TypeScript
delete(name: string): void
```

删除指定名称的键值对。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.delete

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 需要删除的键值名称。 |

**Example**

```TypeScript
let urlObject = new url.URL('https://developer.exampleUrl/?fod=1&bard=2');
let paramsObject = new url.URLSearchParams(urlObject.search.slice(1));
paramsObject.delete('fod');

```

## entries

```TypeScript
entries(): IterableIterator<[string, string]>
```

返回一个ES6的迭代器，迭代器的每一项都是一个Array。Array的第一项是name，Array的第二项是value。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.entries

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[string, string]> | 返回一个ES6的迭代器。 |

**Example**

```TypeScript
let searchParamsObject = new url.URLSearchParams("keyName1=valueName1&keyName2=valueName2");
let iter = searchParamsObject.entries();
for (let pair of iter) {
  console.info(pair[0]+ ', '+ pair[1]);
}
// keyName1, valueName1
// keyName2, valueName2

```

## forEach

```TypeScript
forEach(callbackFn: (value: string, key: string, searchParams: URLSearchParams) => void, thisArg?: Object): void
```

通过回调函数来遍历URLSearchParams实例对象上的键值对。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.forEach

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value: string, key: string, searchParams: URLSearchParams) => void | Yes | 回调函数。 |
| thisArg | Object | No | callbackFn被调用时用作this值，默认值是本对象。 |

**Example**

```TypeScript
const myURLObject = new url.URL('https://developer.exampleUrl/?fod=1&bard=2');
myURLObject.searchParams.forEach((value, name, searchParams) => {
    console.info(name, value, myURLObject.searchParams === searchParams);
});

```

## get

```TypeScript
get(name: string): string | null
```

获取指定名称对应的第一个值。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.get

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
let paramsObject = new url.URLSearchParams('name=Jonathan&age=18');
let name = paramsObject.get("name"); // is the string "Jonathan"
let age = paramsObject.get("age"); // is the string '18'
let getObj = paramsObject.get("abc"); // undefined

```

## getAll

```TypeScript
getAll(name: string): string[]
```

获取指定名称的所有键值对。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.getAll

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 指定的键值名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| string[] | 返回指定名称的所有键值对。 |

**Example**

```TypeScript
let urlObject = new url.URL('https://developer.exampleUrl/?fod=1&bard=2');
let params = new url.URLSearchParams(urlObject.search.slice(1));
params.append('fod', '3'); // Add a second value for the fod parameter.
console.info(params.getAll('fod').toString()) // Output ["1","3"].

```

## has

```TypeScript
has(name: string): boolean
```

判断一个指定的键名对应的值是否存在。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.has

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 要查找的参数的键名。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 是否存在相对应的key值。存在返回true，否则返回false。 |

**Example**

```TypeScript
let urlObject = new url.URL('https://developer.exampleUrl/?fod=1&bard=2');
let paramsObject = new url.URLSearchParams(urlObject.search.slice(1));
paramsObject.has('bard') === true;

```

## keys

```TypeScript
keys(): IterableIterator<string>
```

返回一个所有键值对的name的ES6迭代器。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.keys

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;string> | 返回一个所有键值对的name的ES6迭代器。 |

**Example**

```TypeScript
let searchParamsObject = new url.URLSearchParams("key1=value1&key2=value2");
let keys = searchParamsObject.keys();
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

将与name关联的URLSearchParams对象中的值设置为value。如果存在名称为name的键值对，请将第一个键值对的值设置为value并删除所有其他值。如果不是，则将键值对附加到查询字符串。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.set

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 将要设置的参数的键值名。 |
| value | string | Yes | 所要设置的参数值。 |

**Example**

```TypeScript
let urlObject = new url.URL('https://developer.exampleUrl/?fod=1&bard=2');
let paramsObject = new url.URLSearchParams(urlObject.search.slice(1));
paramsObject.set('baz', '3'); // Add a third parameter.

```

## sort

```TypeScript
sort(): void
```

对包含在此对象中的所有键值对进行排序，并返回undefined。排序顺序是根据键的Unicode代码点。该方法使用稳定的排序算法 （即，将保留具有相等键的键值对之间的相对顺序）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.sort

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let searchParamsObject = new url.URLSearchParams("c=3&a=9&b=4&d=2"); // Create a test URLSearchParams object
searchParamsObject.sort(); // Sort the key/value pairs
console.info(searchParamsObject.toString()); // Display the sorted query string // Output a=9&b=4&c=3&d=2

```

## toString

```TypeScript
toString(): string
```

返回序列化为字符串的搜索参数，必要时对字符进行百分比编码。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.toString

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回序列化为字符串的搜索参数，必要时对字符进行百分比编码。 |

**Example**

```TypeScript
let urlObject = new url.URL('https://developer.exampleUrl/?fod=1&bard=2');
let params = new url.URLSearchParams(urlObject.search.slice(1));
params.append('fod', '3');
console.info(params.toString()); // Output 'fod=1&bard=2&fod=3'

```

## values

```TypeScript
values(): IterableIterator<string>
```

返回一个所有键值对的value的ES6迭代器。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URLParams.values

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;string> | 返回一个所有键值对的value的ES6迭代器。 |

**Example**

```TypeScript
let searchParams = new url.URLSearchParams("key1=value1&key2=value2");
let values = searchParams.values();
for (let value of values) {
  console.info(value);
}
// value1
// value2

```

