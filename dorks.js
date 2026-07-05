// Dork data — edit/add dorks here. {domain} gets replaced with the target.

// Google
const dorkGroups = [
  {
    "title": "General Recon",
    "dorks": [
      "site:{domain} inurl:&",
      "inurl:login | inurl:signin | intitle:login | inurl:auth | intitle:signin | inurl:secure site:{domain}",
      "site:{domain} intitle:index.of",
      "inurl:conf | inurl:env | inurl:cgi | inurl:bin | inurl:etc | inurl:root | inurl:sql | inurl:backup | inurl:admin | inurl:php site:{domain}"
    ]
  },
  {
    "title": "Subdomains",
    "dorks": [
      "site:*.{domain}",
      "site:*.*.{domain}"
    ]
  },
  {
    "title": "Sensitive Parameters",
    "dorks": [
      "inurl:email= | inurl:phone= | inurl:name= | inurl:password= | inurl:secret= | inurl:user= inurl:& site:{domain}"
    ]
  },
  {
    "title": "Open Redirect Prone Parameters",
    "dorks": [
      "inurl:url= | inurl:return= | inurl:next= | inurl:redirect= | inurl:redir= | inurl:ret= | inurl:r2= | inurl:page= inurl:& inurl:http site:{domain}"
    ]
  },
  {
    "title": "SQLi Prone Parameters",
    "dorks": [
      "inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= inurl:& site:{domain}"
    ]
  },
  {
    "title": "SQL Error",
    "dorks": [
      "site:{domain} intext:\"sql syntax near\" | intext:\"syntax error has occurred\" | intext:\"incorrect syntax near\" | intext:\"unexpected end of SQL command\" | intext:\"Warning: mysql_connect()\" | intext:\"Warning: mysql_query()\" | intext:\"Warning: pg_connect()\""
    ]
  },
  {
    "title": "API Docs",
    "dorks": [
      "inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer | inurl:redoc | inurl:openapi | intitle:\"Swagger UI\" site:\"{domain}\""
    ]
  },
  {
    "title": "Sensitive Files",
    "dorks": [
      "site:{domain} ext:txt | ext:pdf | ext:xml | ext:xls | ext:xlsx | ext:ppt | ext:pptx | ext:doc | ext:docx intext:\"confidential\" | intext:\"Not for Public Release\" | intext:\"internal use only\" | intext:\"do not distribute\"",
      "site:{domain} ext:log | ext:txt | ext:aspx | ext:asp | ext:jsp | ext:html | ext:htm",
      "site:{domain} ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:php | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess | ext:json"
    ]
  },
  {
    "title": "Code Leaks",
    "dorks": [
      "site:pastebin.com \"{domain}\"",
      "site:jsfiddle.net \"{domain}\"",
      "site:codebeautify.org \"{domain}\"",
      "site:codepen.io \"{domain}\""
    ]
  },
  {
    "title": "Adobe Experience Manager (AEM)",
    "dorks": [
      "inurl:/content/usergenerated | inurl:/content/dam | inurl:/jcr:content | inurl:/libs/granite | inurl:/etc/clientlibs | inurl:/content/geometrixx | inurl:/bin/wcm | inurl:/crx/de site:{domain}"
    ]
  },
  {
    "title": "Test Environments",
    "dorks": [
      "inurl:test | inurl:env | inurl:dev | inurl:staging | inurl:sandbox | inurl:debug | inurl:temp | inurl:internal | inurl:demo site:{domain}",
      "site:\"*stg*.{domain}\"",
      "site:\"*-stg.{domain}\"",
      "site:\"*stg-*.{domain}\"",
      "site:\"*.dev*.{domain}\"",
      "site:\"preprod.*.{domain}\"",
      "site:\"*.{domain}\" inurl:\"staging\""
    ]
  },
  {
    "title": "Cloud Storage & SaaS Exposure",
    "dorks": [
      "site:s3.amazonaws.com \"{domain}\"",
      "site:amazonaws.com {domain}",
      "\"{domain}\" \"aws_access_key_id\"",
      "site:blob.core.windows.net \"{domain}\"",
      "site:googleapis.com \"{domain}\"",
      "site:drive.google.com \"{domain}\"",
      "site:dev.azure.com \"{domain}\"",
      "site:onedrive.live.com \"{domain}\"",
      "site:digitaloceanspaces.com \"{domain}\"",
      "site:sharepoint.com \"{domain}\"",
      "site:s3-external-1.amazonaws.com \"{domain}\"",
      "site:s3.dualstack.us-east-1.amazonaws.com \"{domain}\"",
      "site:dropbox.com/s \"{domain}\"",
      "site:docs.google.com inurl:\"/d/\" \"{domain}\""
    ]
  },
  {
    "title": "Secrets & Keys Exposure",
    "dorks": [
      "site:{domain} (inurl:.env OR filetype:env \"PASSWORD\" OR filetype:env \"SECRET\" OR filetype:env \"API_KEY\" OR filetype:env \"TOKEN\" OR inurl:config.php \"DB_PASSWORD\" OR inurl:config.php \"DB_USER\" OR inurl:config.php password OR inurl:config.php secret OR inurl:settings.php password OR inurl:configuration.php password OR \"BEGIN RSA PRIVATE KEY\" OR \"BEGIN OPENSSH PRIVATE KEY\" OR filetype:pem \"PRIVATE KEY\")"
    ]
  }
];


// Bing 
const dorkGroupsBing = [
  {
    "title": "General Recon",
    "dorks": [
      "site:{domain} intitle:login",
      "site:{domain} intitle:\"index of\"",
      "site:{domain} intitle:admin"
    ]
  },
  {
    "title": "Sensitive Files",
    "dorks": [
      "site:{domain} filetype:env",
      "site:{domain} filetype:sql",
      "site:{domain} filetype:log",
      "site:{domain} (filetype:doc OR filetype:pdf OR filetype:xls OR filetype:xlsx) inbody:\"confidential\""
    ]
  },
  {
    "title": "Test Environments",
    "dorks": [
      "site:{domain} intitle:staging",
      "site:{domain} intitle:test"
    ]
  },
  {
    "title": "Exposed Credentials & Secrets",
    "dorks": [
      "site:{domain} filetype:env inbody:\"PASSWORD\"",
      "site:{domain} filetype:sql inbody:\"password\""
    ]
  }
];

// DuckDuckGo 
const dorkGroupsDuckDuckGo = [
  {
    "title": "General Recon",
    "dorks": [
      "site:{domain} intitle:login",
      "site:{domain} intitle:\"index of\"",
      "site:{domain} inurl:admin"
    ]
  },
  {
    "title": "Sensitive Files",
    "dorks": [
      "site:{domain} filetype:pdf",
      "site:{domain} filetype:doc",
      "site:{domain} filetype:xls"
    ]
  },
  {
    "title": "Test Environments",
    "dorks": [
      "site:{domain} inurl:staging",
      "site:{domain} inurl:dev",
      "site:{domain} inurl:test"
    ]
  },
  {
    "title": "Code Leaks",
    "dorks": [
      "site:pastebin.com \"{domain}\""
    ]
  }
];

// Yandex 
const dorkGroupsYandex = [
  {
    "title": "Sensitive Files",
    "dorks": [
      "site:{domain} mime:pdf",
      "site:{domain} mime:doc",
      "site:{domain} mime:xls",
      "site:{domain} (mime:pdf | mime:doc | mime:xls) \"confidential\""
    ]
  },
  {
    "title": "Code Leaks",
    "dorks": [
      "site:pastebin.com \"{domain}\""
    ]
  },
  {
    "title": "Cloud Storage Exposure",
    "dorks": [
      "site:s3.amazonaws.com \"{domain}\"",
      "site:drive.google.com \"{domain}\""
    ]
  },
  {
    "title": "Exposed Credentials",
    "dorks": [
      "site:{domain} \"aws_access_key_id\"",
      "site:{domain} \"BEGIN RSA PRIVATE KEY\""
    ]
  }
];

// Engine config — base search URL + query param + which dork set to use.
// Yandex uses "text" as its query param instead of "q".
const engineConfig = {
  google:     { label: "Google",     baseUrl: "https://www.google.com/search", param: "q",    groups: dorkGroups },
  bing:       { label: "Bing",       baseUrl: "https://www.bing.com/search",   param: "q",    groups: dorkGroupsBing },
  duckduckgo: { label: "DuckDuckGo", baseUrl: "https://duckduckgo.com/",       param: "q",    groups: dorkGroupsDuckDuckGo },
  yandex:     { label: "Yandex",     baseUrl: "https://yandex.com/search/",    param: "text", groups: dorkGroupsYandex }
};