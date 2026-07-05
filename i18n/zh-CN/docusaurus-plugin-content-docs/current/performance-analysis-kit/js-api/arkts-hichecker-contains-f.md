# contains

## contains

```TypeScript
function contains(rule: bigint): boolean
```

Checks whether the specified rule exists in the collection of added rules. If the rule is of the thread level, this operation is performed only on the current thread.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** hichecker.containsCheckRule

**系统能力：** SystemCapability.HiviewDFX.HiChecker

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rule | bigint | 是 | Rule to be checked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result. If the rule exists in the collection of added rules, true is returned;  otherwise, false is returned. |

**示例：**

```TypeScript
// 添加一条规则
hichecker.addRule(hichecker.RULE_THREAD_CHECK_SLOW_PROCESS);

// 查询是否包含
hichecker.contains(hichecker.RULE_THREAD_CHECK_SLOW_PROCESS); // return true;
hichecker.contains(hichecker.RULE_CAUTION_PRINT_LOG); // return false;

```

