# RegExp

## compile

```TypeScript
compile(pattern: string, flags?: string): this
```

**废弃版本：** legacy feature for browser compatibility

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pattern | string | 是 |  |
| flags | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| this |  |

## exec

```TypeScript
exec(string: string): RegExpExecArray | null
```

Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| string | string | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RegExpExecArray |  |

## test

```TypeScript
test(string: string): boolean
```

Returns a Boolean value that indicates whether or not a pattern exists in a searched string.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| string | string | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

## ignoreCase

```TypeScript
readonly ignoreCase: boolean
```

Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.

**类型：** boolean

## multiline

```TypeScript
readonly multiline: boolean
```

Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.

**类型：** boolean

## global

```TypeScript
readonly global: boolean
```

Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.

**类型：** boolean

## lastIndex

```TypeScript
lastIndex: number
```

**类型：** number

## source

```TypeScript
readonly source: string
```

Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.

**类型：** string

