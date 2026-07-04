# DateConstructor

## UTC

```TypeScript
UTC(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number
```

Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| year | number | Yes |  |
| monthIndex | number | Yes |  |
| date | number | No |  |
| hours | number | No |  |
| minutes | number | No |  |
| seconds | number | No |  |
| ms | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

## constructor

```TypeScript
new(): Date
```

**Return value:**

| Type | Description |
| --- | --- |
| Date |  |

## constructor

```TypeScript
new(value: number | string): Date
```

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Date |  |

## constructor

```TypeScript
new(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
```

Creates a new Date.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| year | number | Yes |  |
| monthIndex | number | Yes |  |
| date | number | No |  |
| hours | number | No |  |
| minutes | number | No |  |
| seconds | number | No |  |
| ms | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Date |  |

## constructor

```TypeScript
(): string
```

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

## now

```TypeScript
now(): number
```

Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

## parse

```TypeScript
parse(s: string): number
```

Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| s | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

## prototype

```TypeScript
readonly prototype: Date
```

**Type:** Date

