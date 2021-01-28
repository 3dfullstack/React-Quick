const fetch = require('cross-fetch')
const chalk = require('chalk');
const yamlLint = require('yaml-lint');

// Convert to YAML
const jsonObject = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}

const requestObj = {
    "sourceFormat": "json",
    "targetFormat": "yaml",
    "content": JSON.stringify(jsonObject)
}
  
const postReqHandler = async (url, payload) => {
    return response = await fetch (url, {
        method: 'POST', 
        mode: 'cors', // 'cors' enabled ?
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(payload) 
    });
}
  
postReqHandler('https://m5ju2ktnxe.execute-api.us-east-2.amazonaws.com/formatConvert', requestObj)
    .then((recievedObj) => {
        return recievedObj = recievedObj.json()
    })
    .then((res) => {
        yamlLint.lint(res.result).then(() => {
            console.log(chalk.green('Valid YAML file.'));
          }).catch((error) => {
            console.log(chalk.red('Invalid YAML file.', error));
          });
        return res
    })
    .then((res) => {
        console.log("Status : " + (res.status === "success" ? chalk.green(res.status) : chalk.red(res.status)));
        console.log("YAML Result : \n" + chalk.yellow(res.result));
})