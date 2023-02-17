const fs = require('fs');
const JSON5 = require('json5')
const override = require("environment-override").override;
const defaultOptions ={ debugEnvironmentName:'debug',configPropertyEnvironmentVariablePrefix:'SETTINGS_', showOverrides:false,ignoreDebugEnvironment:false };
module.exports = {
    getConfig:  function (configPath,options=defaultOptions ) {
        const persistedOptions = {...defaultOptions,...options};
        console.log(`Running with environment ${process.env.NODE_ENV}`);
        const config = JSON5.parse(fs.readFileSync(configPath).toString());
        if(process.env.NODE_ENV === persistedOptions.debugEnvironmentName && !persistedOptions.ignoreDebugEnvironment){
            console.log(`Running configuration without overrides`);
            return config;
        }
        override(config, persistedOptions.configPropertyEnvironmentVariablePrefix,persistedOptions.showOverrides);
        return config;
    }
}
