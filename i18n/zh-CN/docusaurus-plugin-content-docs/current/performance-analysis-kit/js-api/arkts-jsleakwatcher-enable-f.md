# enable

## enable

```TypeScript
function enable(isEnable: boolean): void
```

Enables the detection for JS object leaks. This function is disabled by default.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiChecker

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isEnable | boolean | 是 | Whether to enable jsLeakWatcher. true: yes; false: no. |

**示例：**

```TypeScript
jsLeakWatcher.enable(true);

```

