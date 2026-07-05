# setTimeout

## setTimeout

```TypeScript
export declare function setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number
```

Sets a timer for the system to call a function after the timer goes off. The timer is automatically deleted after callback execution, or you may manually delete it via the **clearTimeout()** API.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handler | Function \| string | 是 | When the type is function, this parameter specifies the callback function to  be invoked upon the timer's expiration. When the type is string, error information is printed with no  additional processing. |
| delay | number | 否 |  |
| arguments | any[] | 是 | Additional parameters that are passed to handler only when handler is of the  function type. If the number of arguments is less than that of the handler function parameters, the  parameters that are not overwritten by arguments are set to undefined. If the number of arguments exceeds  that of the handler function parameters, the excess arguments will be ignored. However, they can still be  accessed via the built-in arguments object within the handler function. [since 7 - 10] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | ID of the timer. The timer ID is shared by processes and is an integer starting from 0 in  ascending order. |

