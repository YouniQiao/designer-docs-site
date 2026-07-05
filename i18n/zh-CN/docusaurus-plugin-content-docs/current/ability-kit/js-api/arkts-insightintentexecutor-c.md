# InsightIntentExecutor

本模块提供意图执行基类，开发者通过本模块对接端侧[意图框架](docroot://application-models/insight-intent-overview.md)， [通过配置文件开发意图][configuration files](docroot://application-models/insight-intent-config-development.md)实现意图的业务逻辑。 除了可以通过配置文件开发意图，还可以通过装饰器开发意图。对于API version 20及以后的版本，推荐使用 [通过装饰器开发意图](docroot://application-models/insight-intent-decorator-development.md)。

**起始版本：** 11

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## 导入模块

```TypeScript
import { InsightIntentExecutor } from '@kit.AbilityKit';
```

## onExecuteInServiceExtensionAbility

```TypeScript
onExecuteInServiceExtensionAbility(name: string, param: Record<string, Object>):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>
```

当意图执行依赖ServiceExtensionAbility组件启动时，会在ServiceExtensionAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。 - 意图执行时ServiceExtensionAbility生命周期触发顺序：onCreate、onRequest、onExecuteInServiceExtensionAbility。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 意图名称。 |
| param | Record&lt;string, Object> | 是 | 意图参数，表示本次意图执行由系统入口传递给应用的数据。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| insightIntent.ExecuteResult | Intent execution result or a Promise  object containing the intent execution result, representing the data returned to the system entry point from this  intent execution. |

**示例：**

```TypeScript
import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class IntentExecutorImpl extends InsightIntentExecutor {
  onExecuteInServiceExtensionAbility(name: string, param: Record<string, Object>): insightIntent.ExecuteResult {
    let result: insightIntent.ExecuteResult;
    if (name !== 'SupportedInsightIntentName') {
      hilog.warn(0x0000, 'testTag', 'Unsupported insight intent %{public}s', name);
      result = {
        // 由开发者定义
        code: 404,
        result: {
          message: 'Unsupported insight intent.',
        }
      };
      return result;
    }

    result = {
      code: 0,
      result: {
        message: 'Execute insight intent succeed.',
      }
    };
    return result;
  }
}


import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

async function executeInsightIntent(param: Record<string, Object>): Promise<insightIntent.ExecuteResult> {
  return new Promise((resolve, reject) => {
    let result: insightIntent.ExecuteResult = {
      code: 0,
      result: {
        message: 'Execute insight intent succeed.',
      }
    };
    resolve(result);
  });
}

export default class IntentExecutorImpl extends InsightIntentExecutor {
  // 实现异步接口需要使用async/await语法糖，通过async声明该接口是一个异步函数
  async onExecuteInServiceExtensionAbility(name: string,
    param: Record<string, Object>): Promise<insightIntent.ExecuteResult> {
    let result: insightIntent.ExecuteResult;
    if (name !== 'SupportedInsightIntentName') {
      hilog.warn(0x0000, 'testTag', 'Unsupported insight intent %{public}s', name);
      result = {
        // 由开发者定义
        code: 404,
        result: {
          message: 'Unsupported insight intent.',
        }
      };
      return result;
    }

    result = await executeInsightIntent(param);
    return result;
  }
}

```

## onExecuteInServiceExtensionAbility

```TypeScript
onExecuteInServiceExtensionAbility(name: string, param: Record<string, RecordData>):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>
```

当意图执行依赖ServiceExtensionAbility组件启动时，会在ServiceExtensionAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。 - 意图执行时ServiceExtensionAbility生命周期触发顺序：onCreate、onRequest、onExecuteInServiceExtensionAbility。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 意图调用名称。 |
| param | Record&lt;string, RecordData> | 是 | 意图调用参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| insightIntent.ExecuteResult | Intent execution result or a Promise  object containing the intent execution result, representing the data returned to the system entry point from this  intent execution. |

## onExecuteInUIAbilityBackgroundMode

```TypeScript
onExecuteInUIAbilityBackgroundMode(name: string, param: Record<string, Object>):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>
```

当意图执行依赖[UIAbility]@ohos.app.ability.UIAbility组件后台启动时，会在UIAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。 - 若UIAbility组件冷启动，意图执行时UIAbility组件生命周期触发顺序：[onCreate](arkts-uiability-c.md#onCreate)、 onExecuteInUIAbilityBackgroundMode、[onBackground](arkts-uiability-c.md#onBackground)。 - 若UIAbility组件热启动，意图执行时UIAbility组件生命周期触发顺序：onExecuteInUIAbilityBackgroundMode。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 意图名称。 |
| param | Record&lt;string, Object> | 是 | 意图参数，表示本次意图执行由系统入口传递给应用的数据。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| insightIntent.ExecuteResult | Intent execution result or a Promise  object containing the intent execution result, representing the data returned to the system entry point from this  intent execution. |

**示例：**

```TypeScript
import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';

export default class IntentExecutorImpl extends InsightIntentExecutor {
  onExecuteInUIAbilityBackgroundMode(name: string, param: Record<string, Object>): insightIntent.ExecuteResult {
    let result: insightIntent.ExecuteResult = {
      code: 0,
      result: {
        message: 'Execute insight intent succeed.',
      }
    };
    return result;
  }
}


import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';

async function executeInsightIntent(param: Record<string, Object>): Promise<insightIntent.ExecuteResult> {
  return new Promise((resolve, reject) => {
    let result: insightIntent.ExecuteResult = {
      code: 0,
      result: {
        message: 'Execute insight intent succeed.',
      }
    };
    resolve(result);
  })
}

export default class IntentExecutorImpl extends InsightIntentExecutor {
  // 实现异步接口需要使用async/await语法糖，通过async声明该接口是一个异步函数
  async onExecuteInUIAbilityBackgroundMode(name: string,
    param: Record<string, Object>): Promise<insightIntent.ExecuteResult> {
    let result: insightIntent.ExecuteResult = await executeInsightIntent(param);
    return result;
  }
}

```

## onExecuteInUIAbilityBackgroundMode

```TypeScript
onExecuteInUIAbilityBackgroundMode(name: string, param: Record<string, RecordData>):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>
```

当意图执行依赖[UIAbility]@ohos.app.ability.UIAbility组件后台启动时，会在UIAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。 - 若UIAbility组件冷启动，意图执行时UIAbility组件生命周期触发顺序：[onCreate](arkts-uiability-c.md#onCreate)、 onExecuteInUIAbilityBackgroundMode、[onBackground](arkts-uiability-c.md#onBackground)。 - 若UIAbility组件热启动，意图执行时UIAbility组件生命周期触发顺序：onExecuteInUIAbilityBackgroundMode。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 意图调用名称。 |
| param | Record&lt;string, RecordData> | 是 | 意图调用参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| insightIntent.ExecuteResult | Intent execution result or a Promise  object containing the intent execution result, representing the data returned to the system entry point from this  intent execution. |

## onExecuteInUIAbilityForegroundMode

```TypeScript
onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>
```

当意图执行依赖[UIAbility]@ohos.app.ability.UIAbility组件前台启动时，会在UIAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。 - 若UIAbility组件冷启动，意图执行时UIAbility组件生命周期触发顺序：[onCreate](arkts-uiability-c.md#onCreate)、 [onWindowStageCreate](arkts-uiability-c.md#onWindowStageCreate)、 onExecuteInUIAbilityForegroundMode、[onForeground](arkts-uiability-c.md#onForeground)。 - 若UIAbility组件热启动，且启动时UIAbility组件处于后台，意图执行时UIAbility组件生命周期触发顺序： [onNewWant](arkts-uiability-c.md#onNewWant)、onExecuteInUIAbilityForegroundMode、 [onForeground](arkts-uiability-c.md#onForeground)。 - 若UIAbility组件热启动，且启动时UIAbility组件处于前台，意图执行时UIAbility组件生命周期触发顺序：onExecuteInUIAbilityForegroundMode。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 意图名称。 |
| param | Record&lt;string, Object> | 是 | 意图参数，表示本次意图执行由系统入口传递给应用的数据。 |
| pageLoader | window.WindowStage | 是 | 表示windowStage实例对象，和  [onWindowStageCreate](arkts-uiability-c.md#onWindowStageCreate)接口的windowStage实例是同一个，可用于加载意图执行  的页面。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| insightIntent.ExecuteResult | Intent execution result or a Promise  object containing the intent execution result, representing the data returned to the system entry point from this  intent execution. |

**示例：**

```TypeScript
import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class IntentExecutorImpl extends InsightIntentExecutor {
  onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>,
    pageLoader: window.WindowStage): insightIntent.ExecuteResult {
    let result: insightIntent.ExecuteResult;
    if (name !== 'SupportedInsightIntentName') {
      hilog.warn(0x0000, 'testTag', 'Unsupported insight intent %{public}s', name);
      result = {
        // 由开发者定义
        code: 404,
        result: {
          message: 'Unsupported insight intent.',
        }
      };
      return result;
    }

    // 若开发者需要加载意图内容，pages/IntentPage即为意图页面
    pageLoader.loadContent('pages/IntentPage', (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
      } else {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Succeeded in loading the content');
      }
    });

    result = {
      code: 0,
      result: {
        message: 'Execute insight intent succeed.',
      }
    };
    return result;
  }
}


import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

async function executeInsightIntent(param: Record<string, Object>): Promise<insightIntent.ExecuteResult> {
  return new Promise((resolve, reject) => {
    let result: insightIntent.ExecuteResult = {
      code: 0,
      result: {
        message: 'Execute insight intent succeed.',
      }
    };
    resolve(result);
  })
}

export default class IntentExecutorImpl extends InsightIntentExecutor {
  // 实现异步接口需要使用async/await语法糖，通过async声明该接口是一个异步函数
  async onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>,
    pageLoader: window.WindowStage): Promise<insightIntent.ExecuteResult> {
    let result: insightIntent.ExecuteResult;
    if (name !== 'SupportedInsightIntentName') {
      hilog.warn(0x0000, 'testTag', 'Unsupported insight intent %{public}s', name);
      result = {
        // 由开发者定义
        code: 404,
        result: {
          message: 'Unsupported insight intent.',
        }
      };
      return result;
    }

    result = await executeInsightIntent(param);
    return result;
  }
}

```

## onExecuteInUIAbilityForegroundMode

```TypeScript
onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, RecordData>, pageLoader: window.WindowStage):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>
```

当意图执行依赖[UIAbility]@ohos.app.ability.UIAbility组件前台启动时，会在UIAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。 - 若UIAbility组件冷启动，意图执行时UIAbility组件生命周期触发顺序：[onCreate](arkts-uiability-c.md#onCreate)、 [onWindowStageCreate](arkts-uiability-c.md#onWindowStageCreate)、 onExecuteInUIAbilityForegroundMode、[onForeground](arkts-uiability-c.md#onForeground)。 - 若UIAbility组件热启动，且启动时UIAbility组件处于后台，意图执行时UIAbility组件生命周期触发顺序： [onNewWant](arkts-uiability-c.md#onNewWant)、onExecuteInUIAbilityForegroundMode、 [onForeground](arkts-uiability-c.md#onForeground)。 - 若UIAbility组件热启动，且启动时UIAbility组件处于前台，意图执行时UIAbility组件生命周期触发顺序：onExecuteInUIAbilityForegroundMode。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 意图调用名称。 |
| param | Record&lt;string, RecordData> | 是 | 意图调用参数。 |
| pageLoader | window.WindowStage | 是 | 页面加载器。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| insightIntent.ExecuteResult | Intent execution result or a Promise  object containing the intent execution result, representing the data returned to the system entry point from this  intent execution. |

## onExecuteInUIExtensionAbility

```TypeScript
onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>, pageLoader: UIExtensionContentSession):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>
```

当意图执行依赖[UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)启动时，会在UIExtensionAbility组 件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。 - 意图执行时UIExtensionAbility生命周期触发顺序： [onCreate](arkts-uiextensionability-c.md#onCreate)、 [onSessionCreate](arkts-uiextensionability-c.md#onSessionCreate)、 onExecuteInUIExtensionAbility、 [onForeground](arkts-uiextensionability-c.md#onForeground)。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 意图名称。 |
| param | Record&lt;string, Object> | 是 | 意图参数，表示本次意图执行由系统入口传递给应用的数据。 |
| pageLoader | UIExtensionContentSession | 是 | 表示UIExtensionContentSession实例对象，和  [onSessionCreate](arkts-uiextensionability-c.md#onSessionCreate)接口的  UIExtensionContentSession实例是同一个，可用于加载意图执行的页面。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| insightIntent.ExecuteResult | Intent execution result or a Promise  object containing the intent execution result, representing the data returned to the system entry point from this  intent execution. |

**示例：**

```TypeScript
import { InsightIntentExecutor, insightIntent, UIExtensionContentSession } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class IntentExecutorImpl extends InsightIntentExecutor {
  onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>,
    pageLoader: UIExtensionContentSession): insightIntent.ExecuteResult {
    let result: insightIntent.ExecuteResult;
    if (name !== 'SupportedInsightIntentName') {
      hilog.warn(0x0000, 'testTag', 'Unsupported insight intent %{public}s', name);
      result = {
        // 由开发者定义
        code: 404,
        result: {
          message: 'Unsupported insight intent.',
        }
      };
      return result;
    }

    // 若开发者需要加载意图内容，pages/Index即为意图页面
    pageLoader.loadContent('pages/Index');

    result = {
      code: 0,
      result: {
        message: 'Execute insight intent succeed.',
      }
    };
    return result;
  }
}


import { InsightIntentExecutor, insightIntent, UIExtensionContentSession } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

async function executeInsightIntent(param: Record<string, Object>): Promise<insightIntent.ExecuteResult> {
  return new Promise((resolve, reject) => {
    let result: insightIntent.ExecuteResult = {
      code: 0,
      result: {
        message: 'Execute insight intent succeed.',
      }
    };
    resolve(result);
  })
}

export default class IntentExecutorImpl extends InsightIntentExecutor {
  // 实现异步接口需要使用async/await语法糖，通过async声明该接口是一个异步函数
  async onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>,
    pageLoader: UIExtensionContentSession): Promise<insightIntent.ExecuteResult> {
    let result: insightIntent.ExecuteResult;
    if (name !== 'SupportedInsightIntentName') {
      hilog.warn(0x0000, 'testTag', 'Unsupported insight intent %{public}s', name);
      result = {
        // 由开发者定义
        code: 404,
        result: {
          message: 'Unsupported insight intent.',
        }
      };
      return result;
    }

    result = await executeInsightIntent(param);
    return result;
  }
}

```

## onExecuteInUIExtensionAbility

```TypeScript
onExecuteInUIExtensionAbility(name: string, param: Record<string, RecordData>, pageLoader: UIExtensionContentSession):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>
```

当意图执行依赖[UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)启动时，会在UIExtensionAbility组 件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。 - 意图执行时UIExtensionAbility生命周期触发顺序： [onCreate](arkts-uiextensionability-c.md#onCreate)、 [onSessionCreate](arkts-uiextensionability-c.md#onSessionCreate)、 onExecuteInUIExtensionAbility、 [onForeground](arkts-uiextensionability-c.md#onForeground)。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 意图调用名称。 |
| param | Record&lt;string, RecordData> | 是 | 意图调用参数。 |
| pageLoader | UIExtensionContentSession | 是 | 页面加载器。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| insightIntent.ExecuteResult | Intent execution result or a Promise  object containing the intent execution result, representing the data returned to the system entry point from this  intent execution. |

## context

```TypeScript
context: InsightIntentContext
```

意图执行上下文。

**类型：** InsightIntentContext

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

