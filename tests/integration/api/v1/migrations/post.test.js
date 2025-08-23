import database from "infra/database";

beforeAll(ClearDatabase)
async function ClearDatabase() {
  await database.query(`drop schema public cascade; create schema public;`);
}

test("POST /api/v1/migrations/ should return 201 and create new migrations", async () => {
  const resposta1 = await fetch("http://localhost:3000/api/v1/migrations/", {
    method: 'POST'
  });
  expect(resposta1.status).toBe(201);
  const respostaJson = await resposta1.json();
  console.log(respostaJson)
  
  expect(Array.isArray(respostaJson)).toBe(true);
  expect(respostaJson.length).toBeGreaterThan(0);
});


test("POST /api/v1/migrations/ should return 200 and the migrations array are empty", async () => {
  const resposta2 = await fetch("http://localhost:3000/api/v1/migrations/", {
    method: 'POST'
  });
  expect(resposta2.status).toBe(200);
  const respostaJson = await resposta2.json();
  console.log(respostaJson)
  
  expect(Array.isArray(respostaJson)).toBe(true);
  expect(respostaJson.length).toBe(0);
});
