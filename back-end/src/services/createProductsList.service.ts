import fs from "fs"
import csvParser from "csv-parser";

const createProductsListService = async (file: any) => {
  console.log(file);

  fs.createReadStream(file)
    .pipe(csvParser())
    .on('data', (row) => {
      console.log(row)
    })
    .on('end', () => {
      console.log('Leitura do CSV concluída.')
    })
  return {};
};

export default createProductsListService;