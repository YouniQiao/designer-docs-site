# DateConstructor

<!--Device-unnamed-interface DateConstructor--><!--Device-unnamed-interface DateConstructor-End-->

## UTC

```TypeScript
UTC(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number
```

Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.

<!--Device-DateConstructor-UTC(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number--><!--Device-DateConstructor-UTC(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number-End-->

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

<!--Device-DateConstructor-new(): Date--><!--Device-DateConstructor-new(): Date-End-->

**Return value:**

| Type | Description |
| --- | --- |
| [Date](arkts-na-lib-es5-date-i.md) |  |

## constructor

```TypeScript
new(value: number | string): Date
```

<!--Device-DateConstructor-new(value: number | string): Date--><!--Device-DateConstructor-new(value: number | string): Date-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Date](arkts-na-lib-es5-date-i.md) |  |

## constructor

```TypeScript
new(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
```

Creates a new Date.

<!--Device-DateConstructor-new(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date--><!--Device-DateConstructor-new(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date-End-->

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
| [Date](arkts-na-lib-es5-date-i.md) |  |

## constructor

```TypeScript
(): string
```

<!--Device-DateConstructor-(): string--><!--Device-DateConstructor-(): string-End-->

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

## now

```TypeScript
now(): number
```

Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

<!--Device-DateConstructor-now(): number--><!--Device-DateConstructor-now(): number-End-->

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

## parse

```TypeScript
parse(s: string): number
```

Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.

<!--Device-DateConstructor-parse(s: string): number--><!--Device-DateConstructor-parse(s: string): number-End-->

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

<!--Device-DateConstructor-readonly prototype: Date--><!--Device-DateConstructor-readonly prototype: Date-End-->

