This is a repository of examples of customising CodeceptJS tests. It is paired with [this article](https://codeburst.io/customising-codeceptjs-e2e-tests-1a2bf5f32f51?source=friends_link&sk=767140b587a6efd9d71f9e06c5dc3c4b). Each example has a different test command:

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
    
