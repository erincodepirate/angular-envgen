const fs = require('fs');

const envpath = 'src/environments'


if (fs.existsSync(envpath)) {
    console.log('Environments directory already exists.');
    process.exit(-1);
}

fs.mkdirSync(envpath);
fs.writeFileSync(envpath + '/' + 'environment.prod.ts',
"export const environment = {\n\
  production: true,\n\
  apiUrl: 'http://my-prod-url'\n\
};\n")
fs.writeFileSync(envpath + '/' + 'environment.ts',
"export const environment = {\n\
  production: false,\n\
  apiURL: 'http://my-staging-url'\n\
};\n")