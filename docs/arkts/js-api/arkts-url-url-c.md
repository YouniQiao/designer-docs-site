# URL

用于解析、构造、规范、编码对应的URL字符串。

**Since:** 7

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { url } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor(url: string, base?: string | URL)
```

URL的构造函数。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.url.URL.parseURL

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | 一个表示绝对URL或相对URL的字符串。 如果 url 是相对URL，则需要指定 base，用于解析最终的URL。 如果 url 是绝对URL，则给定  的 base 将不会生效。 |
| base | string \| URL | No | 入参字符串或者对象，默认值是undefined。 - string：字符串。 - URL：URL对象。 |

## constructor

```TypeScript
constructor()
```

URL的无参构造函数。parseURL调用后返回一个URL对象，不单独使用。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## parseURL

```TypeScript
static parseURL(url: string, base?: string | URL): URL
```

解析URL。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | 一个表示绝对URL或相对URL的字符串。 如果 url 是相对URL，则需要指定 base，用于解析最终的URL。 如果 url 是绝对URL，则给定  的 base 将不会生效。 |
| base | string \| URL | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| URL | 返回创建的URL对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200002 | Invalid url string. |

**Example**

```TypeScript
let mm = 'https://username:password@host:8080/test/test1/test3';
let urlObject = url.URL.parseURL(mm);
let result = urlObject.toString(); // Output 'https://username:password@host:8080/test/test1/test3'
// If url is a relative path, the path in the base parameter is test/test1, and the path of the parsed URL is /test/path2/path3.
let url1 = url.URL.parseURL('path2/path3', 'https://www.example.com/test/test1'); // Output 'https://www.example.com/test/path2/path3'
// If url is a root directory, the path in the base parameter is /test/test1/test3, and the path of the parsed URL is /path1/path2.
let url2 = url.URL.parseURL('/path1/path2', urlObject); // Output 'https://username:password@host:8080/path1/path2'
url.URL.parseURL('/path/path1', "https://www.exampleUrl/fr-FR/toot"); // Output 'https://www.exampleUrl/path/path1'
url.URL.parseURL('/path/path1', ''); // Raises a TypeError exception as '' is not a valid URL
url.URL.parseURL('/path/path1'); // Raises a TypeError exception as '/path/path1' is not a valid URL
url.URL.parseURL('https://www.example.com', ); // Output 'https://www.example.com/'
url.URL.parseURL('https://www.example.com', urlObject); // Output 'https://www.example.com/'

```

## toJSON

```TypeScript
toJSON(): string
```

将解析过后的URL转化为JSON字符串。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 转化后的JSON字符串。 |

**Example**

```TypeScript
const urlObject = url.URL.parseURL('https://username:password@host:8080/directory/file?query=pppppp#qwer=da');
let result = urlObject.toJSON();

```

## toString

```TypeScript
toString(): string
```

将解析过后的URL转化为字符串。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 转化后的字符串。 |

**Example**

```TypeScript
const urlObject = url.URL.parseURL('https://username:password@host:8080/directory/file?query=pppppp#qwer=da');
let result = urlObject.toString(); // Output 'https://username:password@host:8080/directory/file?query=pppppp#qwer=da'

```

## origin

```TypeScript
readonly origin: string
```

获取URL源的只读序列化。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get origin(): string
```

获取URL源的只读序列化。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## params

```TypeScript
get params(): URLParams
```

获取表示URL查询参数的URLParams对象。 此属性是只读的，但URLParams提供了一个可用于更改URL实例的对象。若要替换URL的整个查询参数，请使用url.search setter。

**Type:** URLParams

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
readonly params: URLParams
```

获取URLParams表示URL查询参数的对象。

**Type:** URLParams

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## searchParams

```TypeScript
readonly searchParams: URLSearchParams
```

获取URLSearchParams表示URL查询参数的对象。

**Type:** URLSearchParams

**Since:** 7

**Deprecated since:** 9

**Substitute:** null

**System capability:** SystemCapability.Utils.Lang

## pathname

```TypeScript
pathname: string
```

获取和设置URL的路径部分。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get pathname(): string
```

获取/设置URL的路径部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
set pathname(pathname: string)
```

获取/设置URL的路径部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## search

```TypeScript
search: string
```

获取和设置URL的序列化查询部分。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get search(): string
```

获取/设置URL的序列化查询部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
set search(search: string)
```

获取/设置URL的序列化查询部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## protocol

```TypeScript
protocol: string
```

获取和设置URL的协议部分。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get protocol(): string
```

获取/设置URL的协议部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
set protocol(protocol: string)
```

获取/设置URL的协议部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## password

```TypeScript
password: string
```

获取和设置URL的密码部分。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get password(): string
```

获取/设置URL的密码部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
set password(password: string)
```

获取/设置URL的密码部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## hostname

```TypeScript
hostname: string
```

获取和设置URL的主机名部分，不带端口。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get hostname(): string
```

获取/设置URL的主机名部分，不带端口。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
set hostname(hostname: string)
```

获取/设置URL的主机名部分，不带端口。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## port

```TypeScript
port: string
```

获取和设置URL的端口部分。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get port(): string
```

获取/设置URL的端口部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
set port(port: string)
```

获取/设置URL的端口部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## host

```TypeScript
host: string
```

获取和设置URL的主机部分。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get host(): string
```

获取/设置URL的主机部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
set host(host: string)
```

获取/设置URL的主机部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## href

```TypeScript
href: string
```

获取和设置序列化的URL。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get href(): string
```

获取/设置序列化的URL。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
set href(href: string)
```

获取/设置序列化的URL。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## hash

```TypeScript
hash: string
```

获取和设置URL的片段部分。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get hash(): string
```

获取/设置URL的片段部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
set hash(hash: string)
```

获取/设置URL的片段部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## username

```TypeScript
get username(): string
```

获取/设置URL的用户名部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
set username(username: string)
```

获取/设置URL的用户名部分。

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
username: string
```

获取和设置URL的用户名部分。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

