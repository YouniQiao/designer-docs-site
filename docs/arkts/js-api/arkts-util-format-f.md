# format

## format

```TypeScript
function format(format: string, ...args: Object[]): string
```

通过替换字符串中的占位符进行字符串格式化。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| format | string | Yes | 格式字符串。该字符串包含零个或多个占位符，这些占位符指定要插入参数的位置和格式。 |
| args | Object[] | Yes | 用于替换 format 中占位符的数据。如果传入 null，默认返回第一个参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 格式化后的字符串。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

interface utilAddressType {
  city: string;
  country: string;
}
interface utilPersonType {
  name: string;
  age: number;
  address: utilAddressType;
}

let name = 'John';
let age = 20;
let formattedString = util.format('My name is %s and I am %s years old', name, age);
console.info(formattedString);
// Output: My name is John and I am 20 years old
let num = 10.5;
formattedString = util.format('The number is %d', num);
console.info(formattedString);
// Output: The number is 10.5.
num = 100.5;
formattedString = util.format('The number is %i', num);
console.info(formattedString);
// Output: The number is 100.
const pi = 3.141592653;
formattedString = util.format('The value of pi is %f', pi);
console.info(formattedString);
// Output: The value of pi is 3.141592653
const obj: Record<string,number | string> = { "name": 'John', "age": 20 };
formattedString = util.format('The object is %j', obj);
console.info(formattedString);
// Output: The object is {"name":"John","age":20}.
const person: utilPersonType = {
  name: 'John',
  age: 20,
  address: {
    city: 'New York',
    country: 'USA'
  }
};
console.info(util.format('Formatted object using %%O: %O', person));
console.info(util.format('Formatted object using %%o: %o', person));
/*
Output:
Formatted object using %O: { name: 'John',
  age: 20,
  address:
  { city: 'New York',
    country: 'USA' } }
Formatted object using %o: { name: 'John',
  age: 20,
  address:
  { city: 'New York',
    country: 'USA' } }
*/
const percentage = 80;
let arg = 'homework';
formattedString = util.format('John finished %d%% of the %s', percentage, arg);
console.info(formattedString);
// Output: John finished 80% of the homework

```

