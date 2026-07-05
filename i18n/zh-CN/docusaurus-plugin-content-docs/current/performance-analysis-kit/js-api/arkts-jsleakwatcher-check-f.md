# check

## check

```TypeScript
function check(): string
```

Obtains the list of objects that are leaked and registered using **jsLeakWatcher.watch()**. Objects that are not reclaimed after GC is triggered are marked as leaked.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiChecker

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | List of leaked objects that are not reclaimed after GC is triggered.  Note: If this API is successful, a list of leaked objects in JSON format is returned.  Otherwise, an empty string is returned. |

**示例：**

```TypeScript
let leakObjlist:string = jsLeakWatcher.check();

```

