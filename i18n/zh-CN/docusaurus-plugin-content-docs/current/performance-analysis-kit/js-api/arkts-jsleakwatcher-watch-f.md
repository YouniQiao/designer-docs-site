# watch

## watch

```TypeScript
function watch(obj: object, msg: string): void
```

Registers the object to be checked.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiChecker

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| obj | object | 是 | Name of the object to be checked. Note: You can pass objects of any type. |
| msg | string | 是 | Custom object information. |

**示例：**

```TypeScript
let obj:Object = new Object();
jsLeakWatcher.watch(obj, "Trace Object");

```

