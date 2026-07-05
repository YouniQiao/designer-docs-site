# dump

## dump

```TypeScript
function dump(filePath: string): Array<string>
```

Dumps the list of leaked objects and VM memory snapshot.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiChecker

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filePath | string | 是 | Path for storing exported information files. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | Export result. The file name extension is .jsleaklist for the list of leaked objects  and .heapsnapshot for the VM memory snapshot.  Note: If the dump is successful, the path of the leaked object list file and the VM memory snapshot path are  returned. Otherwise, an empty array is returned. |

**示例：**

```TypeScript
let context = this.getUIContext().getHostContext();
let files: Array<string> = jsLeakWatcher.dump(context?.filesDir);

```

