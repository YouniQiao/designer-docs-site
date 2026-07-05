# loadModelFromFile

## loadModelFromFile

```TypeScript
function loadModelFromFile(
    model: string,
    context?: Context): Promise<Model>
```

Create a Model instance from file path

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| model | string | 是 | model indicates model path to be loaded |
| context | Context | 否 | context indicates model context information |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Model> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1000000 | Model path error. Possible causes: 1. The model path is null; 2. The model path  does not exist. [staticonly] |
| 1000001 | Invalid context. Possible causes: 1. The context target is incorrect; 2. The  device information is incorrect. [staticonly] |
| 1000002 | Failed to create native model. Possible causes: 1. Insufficient permission to  access the model path; 2. The model file is corrupted. [staticonly] |
| 1000003 | Error in model loading method. Possible causes: 1. The loading method must be  path, buffer, or fd. [staticonly] |

**示例：**

```TypeScript
let modelFile = '/path/to/xxx.ms';
mindSporeLite.loadModelFromFile(modelFile).then((mindSporeLiteModel: mindSporeLite.Model) => {
  let modelInputs: mindSporeLite.MSTensor[] = mindSporeLiteModel.getInputs();
  if (modelInputs == null) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Result: null`);
  } else if (modelInputs.length === 0) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Input count: 0`);
  } else {
    console.info(`Succeeded in getting model inputs. Model file: ${modelFile}, Input name: ${modelInputs[0].name}`);
  }
}).catch((error: Error) => {
  console.error(`Failed to load model from file. Model file: ${modelFile}, Error: ${error.message}`);
});

```

## loadModelFromFile

```TypeScript
function loadModelFromFile(
    model: string, callback: Callback<Model>): void
```

Create a Model instance from file path.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| model | string | 是 | model indicates model path to be loaded |
| callback | Callback&lt;Model> | 是 | the callback of model |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1000000 | Model path error. Possible causes: 1. The model path is null; 2. The model path  does not exist. [staticonly] |
| 1000001 | Invalid context. Possible causes: 1. The context target is incorrect; 2. The  device information is incorrect. [staticonly] |
| 1000002 | Failed to create native model. Possible causes: 1. Insufficient permission to  access the model path; 2. The model file is corrupted. [staticonly] |
| 1000003 | Error in model loading method. Possible causes: 1. The loading method must be  path, buffer, or fd. [staticonly] |

**示例：**

```TypeScript
let modelFile: string = '/path/to/xxx.ms';
mindSporeLite.loadModelFromFile(modelFile, (mindSporeLiteModel: mindSporeLite.Model) => {
  let modelInputs: mindSporeLite.MSTensor[] = mindSporeLiteModel.getInputs();
  if (modelInputs == null) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Result: null`);
  } else if (modelInputs.length === 0) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Input count: 0`);
  } else {
    console.info(`Succeeded in getting model inputs. Model file: ${modelFile}, Input name: ${modelInputs[0].name}`);
  }
})

```

## loadModelFromFile

```TypeScript
function loadModelFromFile(
    model: string,
    context: Context, callback: Callback<Model>): void
```

Create a Model instance from file path.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| model | string | 是 | model indicates model path to be loaded |
| context | Context | 是 | context indicates model context information |
| callback | Callback&lt;Model> | 是 | the callback of model |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1000000 | Model path error. Possible causes: 1. The model path is null; 2. The model path  does not exist. [staticonly] |
| 1000001 | Invalid context. Possible causes: 1. The context target is incorrect; 2. The  device information is incorrect. [staticonly] |
| 1000002 | Failed to create native model. Possible causes: 1. Insufficient permission to  access the model path; 2. The model file is corrupted. [staticonly] |
| 1000003 | Error in model loading method. Possible causes: 1. The loading method must be  path, buffer, or fd. [staticonly] |

**示例：**

```TypeScript
let context: mindSporeLite.Context = {};
context.target = ['cpu'];
let modelFile: string = '/path/to/xxx.ms';
mindSporeLite.loadModelFromFile(modelFile, context, (mindSporeLiteModel: mindSporeLite.Model) => {
  let modelInputs: mindSporeLite.MSTensor[] = mindSporeLiteModel.getInputs();
  if (modelInputs == null) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Context: ${JSON.stringify(context)}, Result: null`);
  } else if (modelInputs.length === 0) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Context: ${JSON.stringify(context)}, Input count: 0`);
  } else {
    console.info(`Succeeded in getting model inputs. Model file: ${modelFile}, Input name: ${modelInputs[0].name}`);
  }
})

```

