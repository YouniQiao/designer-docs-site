# warn

## warn

```TypeScript
function warn(domain: number, tag: string, format: string, ...args: any[]): void
```

打印WARN级别的日志。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiLog

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domain | number | Yes | 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。 建议开发者在应用内根据需要自定义划分。 |
| tag | string | Yes | 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。tag长度最多为31字节，超出后会截断，不建议使用中文字符，可能出现乱码或者对齐问题。 |
| format | string | Yes | 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。 隐私标识分为{public}和{private}，缺省为{  private}。标识{public}的内容明文输出，标识{private}的内容以过滤回显。 |
| args | any[] | Yes | 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。 |

**Example**

```TypeScript
hilog.warn(0x0001, "testTag", "%{public}s World %{private}d", "hello", 3);


08-05 12:21:47.579  2695-2703  A00001/testTag  com.example.hilogDemo  W     hello World <private>

```

