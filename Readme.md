# Technical Notes

## Prisma

1. install prisma cli: `npm install prisma --save-dev`
2. update .env file with correct DATABASE_URL
3. add models into prisma/schema.prisma
4. add the prisma lines below into package.json

```
{
  "name": "my-project",
  "version": "1.0.0",
  "prisma": {
    "seed": "node prisma/seed.js"
  }
}
```

5. execute migration which wld create tables using models above + seed data: `npx prisma migrate dev --name init`
6. after step 5, db shld alr be seeded. to seed manually run `npx prisma db seed`
