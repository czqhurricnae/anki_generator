const { color } = require('./src/utils.js');
const TranslateAnkiByExcel = require('./src/TranslateAnkiByExcel');
const TranslateAnkiByMd = require('./src/TranslateAnkiByMd');
const path = require('path');
/**
 * factory 工厂函数
 * 根据文件扩展名，返回对应的类
 *
 * @param {String} filePath 文件路径
 * @returns
 */
function factory(filePath) {
  const extname = path.extname(filePath);
  let translate;
  switch (extname) {
    case '.xlsx':
      translate = new TranslateAnkiByExcel(filePath);
      break;
    case '.md':
      translate = new TranslateAnkiByMd(filePath);
      break;
    default:
      throw new Error('只能是 xlsx 和 md 文件');
  }
  return translate;
}

const filePath = process.argv[2];

async function run(filePath) {
  const translate = factory(filePath);
  const data = await translate.getData();
  return await translate.write(data);
}

if (filePath) {
  run(filePath)
    .then((paths) => {
      console.log('paths', paths);
      console.log('文件生成完毕，请在当前目录检查生成的 csv 文件');
      process.exit();
    })
    .catch((e) => {
      console.error(color(e.message, 'red'));
      console.log(e);
      process.exit();
    });
}

module.exports = run;
