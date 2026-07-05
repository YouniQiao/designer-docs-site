# addCheckRule

## addCheckRule

```TypeScript
function addCheckRule(rule: bigint) : void
```

Adds one or more check rules. HiChecker detects unexpected operations or gives feedback based on the added rules. You can use **grep HiChecker** to check for the application running information in the hilog.

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiChecker

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rule | bigint | 是 | Rule to be added. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | the parameter check failed, only one bigint type parameter is needed |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    // 添加一条规则
    hichecker.addCheckRule(hichecker.RULE_CAUTION_PRINT_LOG);
    // 添加多条规则
    // hichecker.addCheckRule(
    //     hichecker.RULE_CAUTION_PRINT_LOG | hichecker.RULE_CAUTION_TRIGGER_CRASH);
} catch (err) {
    console.error(`code: ${(err as BusinessError).code}, message: ${(err as BusinessError).message}`);
}

```

