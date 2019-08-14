# console-bff

## Development

```bash
# install dependencies
npm install
# start
npm run dev

# migrate down for test database
NODE_ENV=test npx sequelize db:migrate:undo
NODE_ENV=test npx sequelize db:migrate:undo:all

# run migration and test, for CI environment
npm run ci
```

## Documents

[factory-girl](https://github.com/aexmachina/factory-girl)
