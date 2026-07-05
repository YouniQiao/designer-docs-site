# getRule

## getRule

```TypeScript
function getRule() : bigint
```

Obtains a collection of thread, process, and alarm rules that have been added.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiChecker

**返回值：**

| 类型 | 说明 |
| --- | --- |
| bigint | Collection of added rules. |

**示例：**

```TypeScript
// 添加一条规则
hichecker.addCheckRule(hichecker.RULE_CAUTION_PRINT_LOG);

// 获取已添加的规则
hichecker.getRule();

```

