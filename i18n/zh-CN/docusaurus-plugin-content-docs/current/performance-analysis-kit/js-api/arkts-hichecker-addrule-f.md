# addRule

## addRule

```TypeScript
function addRule(rule: bigint): void
```

Adds one or more rules. HiChecker detects unexpected operations or gives feedback based on the added rules.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** hichecker.addCheckRule

**系统能力：** SystemCapability.HiviewDFX.HiChecker

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rule | bigint | 是 | Rule to be added. |

**示例：**

```TypeScript
// 添加一条规则
hichecker.addRule(hichecker.RULE_CAUTION_PRINT_LOG);

// 添加多条规则
hichecker.addRule(
          hichecker.RULE_CAUTION_PRINT_LOG | hichecker.RULE_CAUTION_TRIGGER_CRASH);

```

