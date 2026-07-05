# DateConstructor

## constructor

```TypeScript
new(): Date
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Date |  |

## constructor

```TypeScript
new(value: number | string): Date
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Date |  |

## constructor

```TypeScript
new(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
```

Creates a new Date.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| year | number | 是 |  |
| monthIndex | number | 是 |  |
| date | number | 否 |  |
| hours | number | 否 |  |
| minutes | number | 否 |  |
| seconds | number | 否 |  |
| ms | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Date |  |

## constructor

```TypeScript
(): string
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string |  |

## now

```TypeScript
now(): number
```

Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## parse

```TypeScript
parse(s: string): number
```

Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| s | string | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## UTC

```TypeScript
UTC(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number
```

Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| year | number | 是 |  |
| monthIndex | number | 是 |  |
| date | number | 否 |  |
| hours | number | 否 |  |
| minutes | number | 否 |  |
| seconds | number | 否 |  |
| ms | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## prototype

```TypeScript
readonly prototype: Date
```

**类型：** Date

