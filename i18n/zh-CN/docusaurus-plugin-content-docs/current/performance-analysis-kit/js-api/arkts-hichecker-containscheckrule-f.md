# containsCheckRule

## containsCheckRule

```TypeScript
function containsCheckRule(rule: bigint) : boolean
```

Checks whether the specified rule exists in the collection of added rules. If the rule is of the thread level, this operation is performed only on the current thread.

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiChecker

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rule | bigint | 是 | Rule to be checked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result. If the rule exists in the collection of added rules, true is returned;  otherwise, false is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | the parameter check failed, only one bigint type parameter is needed |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    // 添加一条规则
    hichecker.addCheckRule(hichecker.RULE_THREAD_CHECK_SLOW_PROCESS);

    // 查询是否包含
    hichecker.containsCheckRule(hichecker.RULE_THREAD_CHECK_SLOW_PROCESS); // return true;
    hichecker.containsCheckRule(hichecker.RULE_CAUTION_PRINT_LOG); // return false;
} catch (err) {
    console.error(`code: ${(err as BusinessError).code}, message: ${(err as BusinessError).message}`);
}

```

