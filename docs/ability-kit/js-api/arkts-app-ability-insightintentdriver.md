# @ohos.app.ability.insightIntentDriver

本模块提供执行意图调用的能力，系统根据用户交互等信息执行意图调用。 > **说明：** > > 本模块从API version 20开始支持通过 > [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink) > 装饰器定义的意图来实现应用跳转。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { insightIntentDriver } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[execute](arkts-insightintentdriver-execute-f-sys.md#execute-1) | 执行意图调用的接口。使用callback异步回调。 当调用方在后台时，需要申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限。 当意图调用执行模式[ExecuteMode]{@link @ohos.app.ability.insightIntent:insightIntent.ExecuteMode}取值为UI_ABILITY_BACKGROUND时，需要 申请`ohos.permission.ABILITY_BACKGROUND_COMMUNICATION`权限。 |
| <!--DelRow-->[execute](arkts-insightintentdriver-execute-f-sys.md#execute-2) | 执行意图调用的接口。使用Promise异步回调。 当调用方在后台时，需要申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限。 当意图调用执行模式[ExecuteMode]{@link @ohos.app.ability.insightIntent:insightIntent.ExecuteMode}取值为UI_ABILITY_BACKGROUND时，需要 申请`ohos.permission.ABILITY_BACKGROUND_COMMUNICATION`权限。 |
| <!--DelRow-->[getAllInsightIntentInfo](arkts-insightintentdriver-getallinsightintentinfo-f-sys.md#getAllInsightIntentInfo-1) | 查询当前设备上的所有意图信息。使用Promise异步回调。 |
| <!--DelRow-->[getInsightIntentInfoByBundleName](arkts-insightintentdriver-getinsightintentinfobybundlename-f-sys.md#getInsightIntentInfoByBundleName-1) | 根据包名查询当前设备上的意图信息。使用Promise异步回调。 |
| <!--DelRow-->[getInsightIntentInfoByFilter](arkts-insightintentdriver-getinsightintentinfobyfilter-f-sys.md#getInsightIntentInfoByFilter-1) | Obtains the intent information on the current device based on the given intent filter. This API uses a promise to return the result.<br>If the user ID of the calling application is different from the user ID of the intent, the |
| <!--DelRow-->[getInsightIntentInfoByIntentName](arkts-insightintentdriver-getinsightintentinfobyintentname-f-sys.md#getInsightIntentInfoByIntentName-1) | 根据包名、模块名和意图名查询当前设备上的意图信息。使用Promise异步回调。 |
| <!--DelRow-->[queryEntityInfo](arkts-insightintentdriver-queryentityinfo-f-sys.md#queryEntityInfo-1) | 查询意图实体信息。 |
| <!--DelRow-->[queryEntityInfo](arkts-insightintentdriver-queryentityinfo-f-sys.md#queryEntityInfo-2) | 查询意图实体信息。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[EntityInfo](arkts-insightintentdriver-entityinfo-i-sys.md) | EntityInfo继承自[IntentEntityDecoratorInfo]{@link @ohos.app.ability.InsightIntentDecorator:IntentEntityDecoratorInfo}， 用于描述 [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity) 装饰器定义的意图实体的信息。 |
| <!--DelRow-->[EntryIntentInfo](arkts-insightintentdriver-entryintentinfo-i-sys.md) | FormIntentInfo用于描述 [@InsightIntentForm](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentform) 装饰器支持的参数，例如卡片名称。同时，该接口也可用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)所绑定的卡片信 息。 |
| <!--DelRow-->[ExecuteParam](arkts-insightintentdriver-executeparam-i-sys.md) | 执行意图调用的参数。 |
| <!--DelRow-->[FormIntentInfo](arkts-insightintentdriver-formintentinfo-i-sys.md) | FormIntentInfo用于描述 [@InsightIntentForm](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentform) 装饰器支持的参数，例如卡片名称。同时，该接口也可用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)所绑定的卡片信 息。 |
| <!--DelRow-->[FunctionIntentInfo](arkts-insightintentdriver-functionintentinfo-i-sys.md) | [@InsightIntentFunctionMethod](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentfunctionmethod) 装饰器的参数类型，当前全部属性均继承自[IntentDecoratorInfo]{@link @ohos.app.ability.InsightIntentDecorator:IntentDecoratorInfo}。 |
| <!--DelRow-->[InsightIntentInfo](arkts-insightintentdriver-insightintentinfo-i-sys.md) | 意图信息，表示设备中意图的具体参数配置。 |
| <!--DelRow-->[InsightIntentInfoFilter](arkts-insightintentdriver-insightintentinfofilter-i-sys.md) | 意图筛选器，描述目标意图的筛选条件，用于筛选设备上符合条件的意图。 |
| <!--DelRow-->[LinkIntentInfo](arkts-insightintentdriver-linkintentinfo-i-sys.md) | LinkIntentInfo用于描述 [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink) 装饰器支持的参数，例如应用间跳转需要的uri信息。 |
| <!--DelRow-->[PageIntentInfo](arkts-insightintentdriver-pageintentinfo-i-sys.md) | PageIntentInfo用于描述 [@InsightIntentPage](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentpage) 装饰器支持的参数，例如目标页面的 [NavDestination](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10)名称。 |
| <!--DelRow-->[QueryParam](arkts-insightintentdriver-queryparam-i-sys.md) | 查询洞察意图实体时的Param。 |
| <!--DelRow-->[ServiceExtensionIntentInfo](arkts-insightintentdriver-serviceextensionintentinfo-i-sys.md) | 用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)所绑定的ServiceExtensionAbility组件信息 。 |
| <!--DelRow-->[SubIntentInfoForConfiguration](arkts-insightintentdriver-subintentinfoforconfiguration-i-sys.md) | 用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)的特有信息。 |
| <!--DelRow-->[UIAbilityIntentInfo](arkts-insightintentdriver-uiabilityintentinfo-i-sys.md) | 用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)所绑定的UIAbility组件信息。 |
| <!--DelRow-->[UIExtensionIntentInfo](arkts-insightintentdriver-uiextensionintentinfo-i-sys.md) | 用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)所绑定的UIExtensionAbility组件信息。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[DevelopType](arkts-insightintentdriver-developtype-e-sys.md) | 用于描述意图的开发方式。 |
| <!--DelRow-->[ExecuteModeForConfiguration](arkts-insightintentdriver-executemodeforconfiguration-e-sys.md) | [使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)支持的意图执行模式。例如，将 [insight_intent.json配置文件](docroot://application-models/insight-intent-config-development.md#insight_intentjson配置文件说明) 中的executeMode设置为"foreground"，表示支持与UIAbility组件绑定的意图在前台运行。 |
| <!--DelRow-->[GetInsightIntentFlag](arkts-insightintentdriver-getinsightintentflag-e-sys.md) | 意图信息（[InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}）的标识，用于 [getAllInsightIntentInfo]{@link insightIntentDriver.getInsightIntentInfoByBundleName}、 [getInsightIntentInfoByBundleName]{@link insightIntentDriver.getInsightIntentInfoByBundleName}和 [getInsightIntentInfoByIntentName]{@link insightIntentDriver.getInsightIntentInfoByIntentName}接口查询意图信息。 > **说明：** > > - 对于使用配置文件开发的意图，通过上述接口查询的全量信息和简要信息完全一致。 > > - 对于使用装饰器开发的意图，通过上述接口查询的全量信息和简要信息存在差别，详见下表。 > > 表1 全量意图信息与简要意图信息差别 > > | 属性 | 全量意图信息是否包含 | 简要意图信息是否包含 | > | -------- | -------- | -------- | > | bundleName | 是 | 是 | > | moduleName | 是 | 是 | > | intentName | 是 | 是 | > | domain | 是 | 否 | > | intentVersion | 是 | 否 | > | displayName | 是 | 是 | > | displayDescription | 是 | 否 | > | schema | 是 | 否 | > | icon | 是 | 否 | > | llmDescription | 是 | 否 | > | keywords | 是 | 否 | > | intentType | 是 | 是 | > | subIntentInfo | 是 | 是 | > | parameters | 是 | 是 | > | entities | 否 | 否 | > | developType<sup>23+</sup> | 是 | 是 | > | subIntentInfoForConfiguration<sup>23+</sup> | 否 | 否 | |
| <!--DelRow-->[InsightIntentType](arkts-insightintentdriver-insightintenttype-e-sys.md) | 表示通过意图装饰器定义的意图类型，可通过[getAllInsightIntentInfo]{@link insightIntentDriver.getAllInsightIntentInfo}等方法返回的 [LinkIntentInfo]{@link insightIntentDriver.LinkIntentInfo}获取。 |

