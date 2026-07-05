# removeRule

## removeRule

```TypeScript
function removeRule(rule: bigint): void
```

Removes one or more rules. The removed rules will become ineffective.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** hichecker.removeCheckRule

**系统能力：** SystemCapability.HiviewDFX.HiChecker

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rule | bigint | 是 | Rule to be removed. |

**示例：**

```TypeScript
// 删除一条规则
hichecker.removeRule(hichecker.RULE_CAUTION_PRINT_LOG);

// 删除多条规则
hichecker.removeRule(
          hichecker.RULE_CAUTION_PRINT_LOG | hichecker.RULE_CAUTION_TRIGGER_CRASH);

```

