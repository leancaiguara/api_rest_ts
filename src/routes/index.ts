import { Router } from 'express';
import { readdirSync } from 'fs';

const router = Router();

const PATH_ROUTER = `${__dirname}`;

const cleanFileName = (fileName: string) => {
  const clippedFileName = fileName.split('.').shift();
  return clippedFileName;
};

const routeBuilder = (fileName: string) => {
  if (fileName !== 'index') {
    return import(`./${fileName}`).then((moduleRouter) => {
      router.use(`/${fileName}`, moduleRouter.router);
    });
  }
};

readdirSync(PATH_ROUTER).filter((file) => {
  const fileName = cleanFileName(file);
  //const ensureStringFilename= fileName !== undefined ? fileName : ''

  routeBuilder(fileName!);
});
export { router };
