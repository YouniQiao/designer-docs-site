# RegExp

## compile

```TypeScript
compile(pattern: string, flags?: string): this
```

**Deprecated since:** legacy feature for browser compatibility

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

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| string | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| RegExpExecArray |  |

## test

```TypeScript
test(string: string): boolean
```

Returns a Boolean value that indicates whether or not a pattern exists in a searched string.

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

## ignoreCase

```TypeScript
readonly ignoreCase: boolean
```

Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.

**Type:** boolean

## lastIndex

```TypeScript
lastIndex: number
```

**Type:** number

## multiline

```TypeScript
readonly multiline: boolean
```

Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.

**Type:** boolean

## source

```TypeScript
readonly source: string
```

Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.

**Type:** string

