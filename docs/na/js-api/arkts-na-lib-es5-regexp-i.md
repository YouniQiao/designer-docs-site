# RegExp

<!--Device-unnamed-interface RegExp--><!--Device-unnamed-interface RegExp-End-->

## compile

```TypeScript
compile(pattern: string, flags?: string): this
```

**Deprecated since:** legacy feature for browser compatibility 

<!--Device-RegExp-compile(pattern: string, flags?: string): this--><!--Device-RegExp-compile(pattern: string, flags?: string): this-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pattern | string | Yes |  |
| flags | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| this |  |

## exec

```TypeScript
exec(string: string): RegExpExecArray | null
```

Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.

<!--Device-RegExp-exec(string: string): RegExpExecArray | null--><!--Device-RegExp-exec(string: string): RegExpExecArray | null-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| string | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [RegExpExecArray](arkts-na-lib-es5-regexpexecarray-i.md) |  |

## test

```TypeScript
test(string: string): boolean
```

Returns a Boolean value that indicates whether or not a pattern exists in a searched string.

<!--Device-RegExp-test(string: string): boolean--><!--Device-RegExp-test(string: string): boolean-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| string | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

## global

```TypeScript
readonly global: boolean
```

Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.

**Type:** boolean

<!--Device-RegExp-readonly global: boolean--><!--Device-RegExp-readonly global: boolean-End-->

## ignoreCase

```TypeScript
readonly ignoreCase: boolean
```

Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.

**Type:** boolean

<!--Device-RegExp-readonly ignoreCase: boolean--><!--Device-RegExp-readonly ignoreCase: boolean-End-->

## lastIndex

```TypeScript
lastIndex: number
```

**Type:** number

<!--Device-RegExp-lastIndex: number--><!--Device-RegExp-lastIndex: number-End-->

## multiline

```TypeScript
readonly multiline: boolean
```

Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.

**Type:** boolean

<!--Device-RegExp-readonly multiline: boolean--><!--Device-RegExp-readonly multiline: boolean-End-->

## source

```TypeScript
readonly source: string
```

Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.

**Type:** string

<!--Device-RegExp-readonly source: string--><!--Device-RegExp-readonly source: string-End-->

