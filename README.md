This is a repository of examples of customising CodeceptJS tests. It is paired with [this article]() (TODO). Each example has a different test command:

### Pause Example
```
npm run test:e2e:pause
```

### Custom Helper Example

Puppeteer: 

```
npm run test:e2e:ch:puppeteer
```

WebDriver:

```
docker-compose -f docker-compose.chrome.yml up

npm run test:e2e:ch:webdriver

docker-compose down -v
```

### Include `I` Example

```
npm run test:e2e:includeFlight
```
    
